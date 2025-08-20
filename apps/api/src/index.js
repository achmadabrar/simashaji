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
import floorRoutes from "./routes/floor.js";

import bcrypt from "bcryptjs";

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

app.use("/api/floors", floorRoutes);

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

// ===== Admin Routes (Real Database) =====

// ===== Admin Login =====
app.post("/api/admins/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email dan password wajib diisi",
      });
    }

    const admin = await prisma.admin.findUnique({
      where: { email },
    });

    if (!admin) {
      return res.status(401).json({
        success: false,
        message: "Email atau password salah",
      });
    }

    // cek password
    const validPassword = await bcrypt.compare(password, admin.password);
    if (!validPassword) {
      return res.status(401).json({
        success: false,
        message: "Email atau password salah",
      });
    }

    // generate JWT
    const token = jwt.sign(
      { id: admin.id, email: admin.email, role: "ADMIN" },
      process.env.JWT_SECRET || "supersecret",
      { expiresIn: "1d" }
    );

    res.json({
      success: true,
      message: "Login berhasil",
      data: {
        id: admin.id,
        name: admin.name,
        email: admin.email,
        phone: admin.phone,
      },
      token,
    });
  } catch (error) {
    console.error("Admin login error:", error);
    res.status(500).json({
      success: false,
      message: "Gagal login admin",
      error: error.message,
    });
  }
});

// Create Admin
app.post("/api/admins", async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Name, email, and password are required",
      });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const admin = await prisma.admin.create({
      data: {
        name,
        email,
        phone,
        password: hashedPassword,
      },
    });

    res.status(201).json({
      success: true,
      message: "Admin created successfully",
      data: {
        id: admin.id,
        name: admin.name,
        email: admin.email,
        phone: admin.phone,
        created_at: admin.created_at,
      }, // jangan return password
    });
  } catch (error) {
    console.error("Create admin error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to create admin",
      error: error.message,
    });
  }
});

// Get all admins
app.get("/api/admins", async (req, res) => {
  try {
    const admins = await prisma.admin.findMany({
      orderBy: { created_at: "desc" },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        created_at: true,
      }, // exclude password
    });

    res.json({
      success: true,
      data: admins,
      total: admins.length,
    });
  } catch (error) {
    console.error("Get admins error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch admins",
      error: error.message,
    });
  }
});

// Get admin by ID
app.get("/api/admins/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const admin = await prisma.admin.findUnique({
      where: { id: parseInt(id) },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        created_at: true,
      },
    });

    if (!admin) {
      return res.status(404).json({
        success: false,
        message: "Admin not found",
      });
    }

    res.json({
      success: true,
      data: admin,
    });
  } catch (error) {
    console.error("Get admin error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch admin",
      error: error.message,
    });
  }
});

// Update admin
app.put("/api/admins/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, phone, password } = req.body;

    let updateData = { name, email, phone };

    if (password) {
      updateData.password = await bcrypt.hash(password, 10);
    }

    const admin = await prisma.admin.update({
      where: { id: parseInt(id) },
      data: updateData,
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        created_at: true,
      },
    });

    res.json({
      success: true,
      message: "Admin updated successfully",
      data: admin,
    });
  } catch (error) {
    console.error("Update admin error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to update admin",
      error: error.message,
    });
  }
});

// Delete admin
app.delete("/api/admins/:id", async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.admin.delete({
      where: { id: parseInt(id) },
    });

    res.json({
      success: true,
      message: "Admin deleted successfully",
    });
  } catch (error) {
    console.error("Delete admin error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to delete admin",
      error: error.message,
    });
  }
});

// ===== Asrama Routes (CRUD) =====

// Create Asrama
app.post("/api/asramas", async (req, res) => {
  try {
    const {
      name,
      address,
      city,
      province,
      contact_no,
      lat,
      lng,
      admin_id,
      description,
      images,
    } = req.body;

    const asrama = await prisma.asrama.create({
      data: {
        name,
        address,
        city,
        province,
        contact_no,
        lat,
        lng,
        admin_id: parseInt(admin_id),
        description: description || null,
        images: images || [],
      },
    });

    res.status(201).json({
      success: true,
      message: "Asrama created successfully",
      data: asrama,
    });
  } catch (error) {
    console.error("Create asrama error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to create asrama",
      error: error.message,
    });
  }
});

// Get all Asramas
app.get("/api/asramas", async (req, res) => {
  try {
    const asramas = await prisma.asrama.findMany({
      include: {
        spaces: {
          select: {
            id: true,
            name: true,
            type: true,
            capacity: true,
            rating: true,
          },
        },
      },
      orderBy: { created_at: "desc" },
    });

    res.json({
      success: true,
      data: asramas,
      total: asramas.length,
    });
  } catch (error) {
    console.error("Get asramas error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch asramas",
      error: error.message,
    });
  }
});

// Get Asrama by ID
app.get("/api/asramas/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const asrama = await prisma.asrama.findUnique({
      where: { id: parseInt(id) },
      include: {
        spaces: true,
      },
    });

    if (!asrama) {
      return res.status(404).json({
        success: false,
        message: "Asrama not found",
      });
    }

    res.json({
      success: true,
      data: asrama,
    });
  } catch (error) {
    console.error("Get asrama error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch asrama",
      error: error.message,
    });
  }
});

// Update Asrama
app.put("/api/asramas/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const {
      name,
      address,
      city,
      province,
      contact_no,
      lat,
      lng,
      description,
      images,
      is_active,
    } = req.body;

    const asrama = await prisma.asrama.update({
      where: { id: parseInt(id) },
      data: {
        name,
        address,
        city,
        province,
        contact_no,
        lat,
        lng,
        description: description || null,
        images: images || [],
        is_active: is_active ?? true,
      },
    });

    res.json({
      success: true,
      message: "Asrama updated successfully",
      data: asrama,
    });
  } catch (error) {
    console.error("Update asrama error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to update asrama",
      error: error.message,
    });
  }
});

// Delete Asrama
app.delete("/api/asramas/:id", async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.asrama.delete({
      where: { id: parseInt(id) },
    });

    res.json({
      success: true,
      message: "Asrama deleted successfully",
    });
  } catch (error) {
    console.error("Delete asrama error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to delete asrama",
      error: error.message,
    });
  }
});

// ===== Building (Gedung) CRUD =====

// ===== Building Routes =====

// Create building
app.post("/api/buildings", async (req, res) => {
  try {
    const { name, asrama_id } = req.body;

    if (!name || !asrama_id) {
      return res.status(400).json({
        success: false,
        message: "Name dan asrama_id wajib diisi",
      });
    }

    const building = await prisma.building.create({
      data: {
        name,
        asrama_id: parseInt(asrama_id),
      },
    });

    res.status(201).json({
      success: true,
      message: "Building berhasil dibuat",
      data: building,
    });
  } catch (error) {
    console.error("Create building error:", error);
    res.status(500).json({
      success: false,
      message: "Gagal membuat building",
      error: error.message,
    });
  }
});

// Get all buildings
app.get("/api/buildings", async (req, res) => {
  try {
    const buildings = await prisma.building.findMany({
      include: {
        asrama: {
          select: {
            id: true,
            name: true,
            city: true,
            province: true,
          },
        },
      },
      orderBy: { created_at: "desc" },
    });

    res.json({
      success: true,
      data: buildings,
      total: buildings.length,
    });
  } catch (error) {
    console.error("Get buildings error:", error);
    res.status(500).json({
      success: false,
      message: "Gagal mengambil data buildings",
      error: error.message,
    });
  }
});

// Get building by ID
app.get("/api/buildings/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const building = await prisma.building.findUnique({
      where: { id: parseInt(id) },
      include: { spaces: true, asrama: true },
    });

    if (!building) {
      return res.status(404).json({
        success: false,
        message: "Building tidak ditemukan",
      });
    }

    res.json({
      success: true,
      data: building,
    });
  } catch (error) {
    console.error("Get building error:", error);
    res.status(500).json({
      success: false,
      message: "Gagal mengambil data building",
      error: error.message,
    });
  }
});

// Update building
app.put("/api/buildings/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, asrama_id } = req.body;

    const building = await prisma.building.update({
      where: { id: parseInt(id) },
      data: {
        ...(name && { name }),
        ...(asrama_id && { asrama_id: parseInt(asrama_id) }),
      },
    });

    res.json({
      success: true,
      message: "Building berhasil diupdate",
      data: building,
    });
  } catch (error) {
    console.error("Update building error:", error);
    res.status(500).json({
      success: false,
      message: "Gagal update building",
      error: error.message,
    });
  }
});

// Delete building
app.delete("/api/buildings/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.building.delete({
      where: { id: parseInt(id) },
    });

    res.json({
      success: true,
      message: "Building berhasil dihapus",
    });
  } catch (error) {
    console.error("Delete building error:", error);
    res.status(500).json({
      success: false,
      message: "Gagal menghapus building",
      error: error.message,
    });
  }
});

// ===== Space Routes (Real Database) =====
app.get("/api/spaces", async (req, res) => {
  try {
    const { type, city, asrama_id } = req.query;

    // pastikan city selalu lowercase
    const cityFilter = city ? city.toString().toLowerCase() : null;

    const whereClause = {
      is_active: true,
      ...(type && { type: type.toUpperCase() }),
      ...(asrama_id && { asrama_id: parseInt(asrama_id) }),
      ...(cityFilter && {
        asrama: {
          city: {
            contains: cityFilter,
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
        pricing: true,
      },
      orderBy: [{ rating: "desc" }, { created_at: "desc" }],
    });

    // turunkan case city di hasil supaya konsisten
    const normalizedSpaces = spaces.map((s) => ({
      ...s,
      asrama: {
        ...s.asrama,
        city: s.asrama.city.toLowerCase(),
      },
    }));

    res.json({
      success: true,
      data: normalizedSpaces,
      total: normalizedSpaces.length,
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

// GET space detail by ID
app.get("/api/spaces/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const space = await prisma.space.findUnique({
      where: { id: parseInt(id) }, // 👈 hanya id, karena unique
      include: {
        asrama: true,
        building: true,
        pricing: true,
        reviews: {
          include: {
            user: {
              select: {
                name: true,
                profile_image: true,
              },
            },
          },
          orderBy: { created_at: "desc" },
          take: 10,
        },
      },
    });

    if (!space || !space.is_active) {
      return res.status(404).json({
        success: false,
        message: "Space tidak ditemukan atau tidak aktif",
      });
    }

    res.json({
      success: true,
      data: space,
    });
  } catch (error) {
    console.error("Get space detail error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch space details",
      error: error.message,
    });
  }
});

// CREATE Space
app.post("/api/spaces", async (req, res) => {
  try {
    const {
      name,
      type,
      capacity,
      price_per_day,
      asrama_id,
      description,
      amenities,
      size,
      pricing,
      images,
    } = req.body;

    if (!name || !type || !capacity || !price_per_day || !asrama_id) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields",
      });
    }

    const newSpace = await prisma.space.create({
      data: {
        name,
        type,
        capacity: parseInt(capacity),
        price_per_day: price_per_day,
        asrama_id: parseInt(asrama_id),
        description: description || null,
        size: size ? parseFloat(size) : null,
        amenities: amenities || [],
        images: images || [], // 👈 default kosong kalau tidak dikirim
        pricing: {
          create:
            pricing?.map((p) => ({
              durationType: p.durationType,
              category: p.category,
              price: p.price,
            })) || [],
        },
      },
      include: {
        pricing: true,
      },
    });

    res.status(201).json({
      success: true,
      message: "Space created successfully",
      data: newSpace,
    });
  } catch (error) {
    console.error("Create space error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to create space",
      error: error.message,
    });
  }
});

// UPDATE Space
app.put("/api/spaces/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const {
      name,
      type,
      capacity,
      price_per_day,
      asrama_id,
      description,
      size,
    } = req.body;

    const space = await prisma.space.update({
      where: { id: parseInt(id) },
      data: {
        name,
        type,
        capacity,
        price_per_day,
        asrama_id,
        description,
        size,
      },
    });

    res.json({ success: true, data: space });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// DELETE Space
app.delete("/api/spaces/:id", async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.space.delete({ where: { id: parseInt(id) } });
    res.json({ success: true, message: "Space deleted" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// ===== Space Pricing Routes =====
app.post("/api/spaces/:id/pricing", async (req, res) => {
  try {
    const spaceId = parseInt(req.params.id);
    const { pricing } = req.body;

    if (!pricing || !Array.isArray(pricing)) {
      return res.status(400).json({
        success: false,
        message: "Pricing data harus berupa array",
      });
    }

    // Simpan banyak pricing sekaligus
    const createdPricing = await prisma.spacePricing.createMany({
      data: pricing.map((p) => ({
        spaceId: spaceId,
        durationType: p.durationType,
        category: p.category,
        price: p.price,
      })),
      skipDuplicates: true,
    });

    res.status(201).json({
      success: true,
      message: "Pricing berhasil ditambahkan",
      data: createdPricing,
    });
  } catch (error) {
    console.error("Create pricing error:", error);
    res.status(500).json({
      success: false,
      message: "Gagal membuat pricing",
      error: error.message,
    });
  }
});

app.get("/api/spaces/:id/pricing", async (req, res) => {
  try {
    const spaceId = parseInt(req.params.id);
    const pricing = await prisma.spacePricing.findMany({
      where: { spaceId },
    });

    res.json({
      success: true,
      data: pricing,
    });
  } catch (error) {
    console.error("Get pricing error:", error);
    res.status(500).json({
      success: false,
      message: "Gagal mengambil pricing",
      error: error.message,
    });
  }
});

// ==================== FLOOR CRUD ==================== //

// Create Floor
app.post("/api/floors", async (req, res) => {
  try {
    const { number, name, buildingId } = req.body;

    const floor = await prisma.floor.create({
      data: {
        number,
        name,
        buildingId,
      },
    });

    res.json({ success: true, data: floor });
  } catch (error) {
    console.error("Create floor error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to create floor",
      error: error.message,
    });
  }
});

// Get all Floors
app.get("/api/floors", async (req, res) => {
  try {
    const floors = await prisma.floor.findMany({
      include: {
        building: {
          select: { id: true, name: true, asrama_id: true },
        },
        spaces: true,
      },
    });

    res.json({ success: true, data: floors, total: floors.length });
  } catch (error) {
    console.error("Get floors error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch floors",
      error: error.message,
    });
  }
});

// Get Floor by ID
app.get("/api/floors/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const floor = await prisma.floor.findUnique({
      where: { id: parseInt(id) },
      include: {
        building: true,
        spaces: true,
      },
    });

    if (!floor) {
      return res
        .status(404)
        .json({ success: false, message: "Floor not found" });
    }

    res.json({ success: true, data: floor });
  } catch (error) {
    console.error("Get floor error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch floor details",
      error: error.message,
    });
  }
});

// Update Floor
app.put("/api/floors/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { number, name, buildingId } = req.body;

    const floor = await prisma.floor.update({
      where: { id: parseInt(id) },
      data: { number, name, buildingId },
    });

    res.json({ success: true, data: floor });
  } catch (error) {
    console.error("Update floor error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to update floor",
      error: error.message,
    });
  }
});

// Delete Floor
app.delete("/api/floors/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.floor.delete({
      where: { id: parseInt(id) },
    });
    res.json({ success: true, message: "Floor deleted" });
  } catch (error) {
    console.error("Delete floor error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to delete floor",
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

// GET spaces dengan filter optional
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
            mode: "insensitive", // biar gak case-sensitive
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
          },
        },
        building: {
          select: {
            id: true,
            name: true,
          },
        },
        pricing: true,
      },
      orderBy: [{ created_at: "desc" }],
    });

    res.json({
      success: true,
      total: spaces.length,
      data: spaces,
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
