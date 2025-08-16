// apps/api/src/index.js
import dotenv from "dotenv";
dotenv.config({ path: "../../.env" });

import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { PrismaClient } from "@prisma/client";
import Midtrans from "midtrans-client";
import passport from "./config/passport.js";

// Import route modules
import authRoutes from "./routes/auth.js";

const PORT = process.env.PORT || 4000;
const app = express();

// Initialize Prisma Client
const prisma = new PrismaClient({
  log: ["query", "info", "warn", "error"],
});

// Initialize Midtrans
const snap = new Midtrans.Snap({
  isProduction: process.env.MIDTRANS_IS_PRODUCTION === "true",
  serverKey: process.env.MIDTRANS_SERVER_KEY,
  clientKey: process.env.MIDTRANS_CLIENT_KEY,
});

// ===== Middleware =====
app.use(helmet());
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:3001",
      "http://127.0.0.1:3000",
      "http://127.0.0.1:3001",
      process.env.APP_URL,
    ].filter(Boolean),
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Accept",
      "Origin",
      "X-Requested-With",
    ],
  })
);

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(morgan("dev"));

// Custom request logger
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  if (req.body && Object.keys(req.body).length > 0 && !req.body.password) {
    console.log("Request Body:", req.body);
  }
  next();
});

// ===== Database Connection Test =====
const testDatabaseConnection = async () => {
  try {
    await prisma.$connect();
    console.log("✅ Database connected successfully");

    // Test query
    const userCount = await prisma.user.count();
    console.log(`📊 Current users in database: ${userCount}`);
  } catch (error) {
    console.error("❌ Database connection failed:", error.message);
    console.error("🔧 Please check your DATABASE_URL in .env file");
  }
};

//passport
app.use(passport.initialize());

// ===== Routes =====
// Auth routes (uses real database)
app.use("/api/auth", authRoutes);

// Health check with database status
app.get("/api/health", async (req, res) => {
  let dbStatus = "connected";
  let dbInfo = {};

  try {
    await prisma.$queryRaw`SELECT 1`;
    const userCount = await prisma.user.count();
    const spaceCount = await prisma.space.count();
    const bookingCount = await prisma.booking.count();

    dbInfo = {
      users: userCount,
      spaces: spaceCount,
      bookings: bookingCount,
    };
  } catch (error) {
    dbStatus = "disconnected";
    dbInfo = { error: error.message };
  }

  res.json({
    success: true,
    message: "SIMASHAJI API is running!",
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || "development",
    port: PORT,
    database: {
      status: dbStatus,
      info: dbInfo,
    },
  });
});

// ===== Space Routes (Real Database) =====
app.get("/api/spaces", async (req, res) => {
  try {
    const { type, city, asrama_id } = req.query;

    const whereClause = {
      is_active: true,
      ...(type && { type: type.toUpperCase() }),
      ...(asrama_id && { asrama_id: parseInt(asrama_id) }),
      ...(city && {
        asrama: {
          city: {
            contains: city,
            mode: "insensitive",
          },
        },
      }),
    };

    const spaces = await prisma.space.findMany({
      where: whereClause,
      include: {
        asrama: {
          select: {
            id: true,
            name: true,
            city: true,
            province: true,
            address: true,
            lat: true,
            lng: true,
            rating: true,
          },
        },
      },
      orderBy: [{ rating: "desc" }, { created_at: "desc" }],
    });

    res.json({
      success: true,
      data: spaces,
      total: spaces.length,
    });
  } catch (error) {
    console.error("Get spaces error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch spaces",
      error: error.message,
    });
  }
});

app.get("/api/spaces/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const space = await prisma.space.findUnique({
      where: {
        id: parseInt(id),
        is_active: true,
      },
      include: {
        asrama: true,
        reviews: {
          include: {
            user: {
              select: {
                name: true,
                profile_image: true,
              },
            },
          },
          orderBy: {
            created_at: "desc",
          },
          take: 10,
        },
      },
    });

    if (!space) {
      return res.status(404).json({
        success: false,
        message: "Space not found",
      });
    }

    res.json({
      success: true,
      data: space,
    });
  } catch (error) {
    console.error("Get space error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch space details",
      error: error.message,
    });
  }
});

// ===== Booking Routes (Real Database) =====
app.post("/api/bookings", async (req, res) => {
  try {
    const {
      space_id,
      user_id,
      check_in,
      check_out,
      guest_count,
      special_requests,
    } = req.body;

    // Validate required fields
    if (!space_id || !user_id || !check_in || !check_out) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields",
      });
    }

    // Get space details
    const space = await prisma.space.findUnique({
      where: {
        id: parseInt(space_id),
        is_active: true,
      },
    });

    if (!space) {
      return res.status(404).json({
        success: false,
        message: "Space not found",
      });
    }

    // Calculate booking details
    const checkInDate = new Date(check_in);
    const checkOutDate = new Date(check_out);
    const totalDays = Math.ceil(
      (checkOutDate - checkInDate) / (1000 * 60 * 60 * 24)
    );
    const totalPrice = totalDays * parseFloat(space.price_per_day);

    // Generate booking ID
    const bookingId = `booking_${Date.now()}_${Math.random()
      .toString(36)
      .substr(2, 5)}`;

    // Create booking
    const booking = await prisma.booking.create({
      data: {
        id: bookingId,
        space_id: parseInt(space_id),
        user_id,
        check_in: checkInDate,
        check_out: checkOutDate,
        total_days: totalDays,
        total_price: totalPrice,
        guest_count: guest_count || 1,
        special_requests: special_requests || null,
        status: "PENDING",
      },
      include: {
        space: {
          include: {
            asrama: true,
          },
        },
        user: {
          select: {
            name: true,
            email: true,
            phone: true,
          },
        },
      },
    });

    // Create Midtrans transaction
    let snapToken = null;
    try {
      const parameter = {
        transaction_details: {
          order_id: bookingId,
          gross_amount: Math.round(totalPrice),
        },
        customer_details: {
          first_name: booking.user.name,
          email: booking.user.email,
          phone: booking.user.phone || "",
        },
        item_details: [
          {
            id: space_id,
            price: Math.round(space.price_per_day),
            quantity: totalDays,
            name: `${space.name} - ${totalDays} hari`,
          },
        ],
      };

      const transaction = await snap.createTransaction(parameter);
      snapToken = transaction.token;

      // Update booking with snap token
      await prisma.booking.update({
        where: { id: bookingId },
        data: { snap_token: snapToken },
      });
    } catch (midtransError) {
      console.error("Midtrans error:", midtransError);
      // Continue without payment gateway for now
    }

    res.status(201).json({
      success: true,
      message: "Booking created successfully",
      data: {
        booking,
        snap_token: snapToken,
      },
    });
  } catch (error) {
    console.error("Create booking error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to create booking",
      error: error.message,
    });
  }
});

// ===== Midtrans Notification Handler =====
app.post("/api/midtrans/notification", async (req, res) => {
  try {
    const notification = await snap.transaction.notification(req.body);
    const orderId = notification.order_id;
    const transactionStatus = notification.transaction_status;

    console.log(`Payment notification: ${orderId} - ${transactionStatus}`);

    if (transactionStatus === "settlement" || transactionStatus === "capture") {
      await prisma.booking.update({
        where: { id: orderId },
        data: {
          status: "PAID",
          paid_at: new Date(),
        },
      });

      console.log(`✅ Booking ${orderId} marked as PAID`);
    } else if (
      transactionStatus === "cancel" ||
      transactionStatus === "expire"
    ) {
      await prisma.booking.update({
        where: { id: orderId },
        data: { status: "CANCELLED" },
      });

      console.log(`❌ Booking ${orderId} marked as CANCELLED`);
    }

    res.sendStatus(200);
  } catch (error) {
    console.error("Midtrans notification error:", error);
    res.sendStatus(500);
  }
});

// ===== Error Handling =====
app.use((error, req, res, next) => {
  console.error("Unhandled error:", error);
  res.status(500).json({
    success: false,
    message: "Internal server error",
    error:
      process.env.NODE_ENV === "development"
        ? error.message
        : "Something went wrong",
  });
});

// 404 handler
app.use("*", (req, res) => {
  res.status(404).json({
    success: false,
    message: "Endpoint tidak ditemukan",
    path: req.originalUrl,
    method: req.method,
  });
});

// ===== Graceful Shutdown =====
process.on("beforeExit", async () => {
  console.log("🔄 Disconnecting from database...");
  await prisma.$disconnect();
});

process.on("SIGINT", async () => {
  console.log("🔄 Received SIGINT, shutting down gracefully...");
  await prisma.$disconnect();
  process.exit(0);
});

// ===== Start Server =====
const startServer = async () => {
  try {
    // Test database connection first
    await testDatabaseConnection();

    app.listen(PORT, () => {
      console.log(`🚀 SIMASHAJI API running on port ${PORT}`);
      console.log(`🔗 Health check: http://localhost:${PORT}/api/health`);
      console.log(`🔐 Auth endpoints: http://localhost:${PORT}/api/auth/`);
      console.log(`🏢 Space endpoints: http://localhost:${PORT}/api/spaces/`);
      console.log(
        `📅 Booking endpoints: http://localhost:${PORT}/api/bookings/`
      );
      console.log(
        `💳 Payment webhook: http://localhost:${PORT}/api/midtrans/notification`
      );
    });
  } catch (error) {
    console.error("❌ Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
