// apps/api/src/middleware/auth.js
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// JWT Secret - should be in environment variables
const JWT_SECRET =
  process.env.JWT_SECRET ||
  "256ba5ed696ffccb259644c0ca18da7d98b10fdd1f227b847118b2d640211606";
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "7d";

// Generate JWT Token
const generateToken = (userId, email) => {
  return jwt.sign(
    {
      userId,
      email,
      iat: Date.now() / 1000,
    },
    JWT_SECRET,
    { expiresIn: JWT_EXPIRES_IN }
  );
};

// Verify JWT Token Middleware
const verifyToken = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "Token tidak ditemukan atau format token salah",
      });
    }

    const token = authHeader.substring(7); // Remove 'Bearer ' prefix

    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({
        success: false,
        message: "Token telah expired",
      });
    }

    if (error.name === "JsonWebTokenError") {
      return res.status(401).json({
        success: false,
        message: "Token tidak valid",
      });
    }

    return res.status(500).json({
      success: false,
      message: "Error dalam verifikasi token",
    });
  }
};

// Hash Password
const hashPassword = async (password) => {
  const saltRounds = 12;
  return await bcrypt.hash(password, saltRounds);
};

// Compare Password
const comparePassword = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword);
};

// Generate Random User ID
const generateUserId = () => {
  return (
    "user_" + Math.random().toString(36).substr(2, 9) + Date.now().toString(36)
  );
};

module.exports = {
  generateToken,
  verifyToken,
  hashPassword,
  comparePassword,
  generateUserId,
  JWT_SECRET,
};

// apps/api/src/controllers/authController.js
const { PrismaClient } = require("@prisma/client");
const {
  generateToken,
  hashPassword,
  comparePassword,
  generateUserId,
} = require("../middleware/auth");

const prisma = new PrismaClient();

// Register Controller
const register = async (req, res) => {
  try {
    const { name, email, phone, password, confirmPassword } = req.body;

    // Validation
    if (!name || !email || !password || !confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Semua field wajib diisi",
      });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Password dan konfirmasi password tidak cocok",
      });
    }

    if (password.length < 8) {
      return res.status(400).json({
        success: false,
        message: "Password minimal 8 karakter",
      });
    }

    // Check if email already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "Email sudah terdaftar",
      });
    }

    // Hash password
    const hashedPassword = await hashPassword(password);
    const userId = generateUserId();

    // Create user
    const newUser = await prisma.user.create({
      data: {
        id: userId,
        name,
        email,
        phone: phone || null,
        password: hashedPassword,
        membership_type: "REGULAR",
        points: 0,
        rating: 0.0,
        total_bookings: 0,
      },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        membership_type: true,
        points: true,
        joined_at: true,
      },
    });

    // Generate token
    const token = generateToken(newUser.id, newUser.email);

    res.status(201).json({
      success: true,
      message: "Registrasi berhasil",
      data: {
        user: newUser,
        token,
        tokenType: "Bearer",
      },
    });
  } catch (error) {
    console.error("Register error:", error);
    res.status(500).json({
      success: false,
      message: "Terjadi kesalahan pada server",
    });
  }
};

// Login Controller
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validation
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email dan password wajib diisi",
      });
    }

    // Find user
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user || !user.password) {
      return res.status(401).json({
        success: false,
        message: "Email atau password salah",
      });
    }

    // Verify password
    const isPasswordValid = await comparePassword(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: "Email atau password salah",
      });
    }

    // Update last active
    await prisma.user.update({
      where: { id: user.id },
      data: { last_active: new Date() },
    });

    // Generate token
    const token = generateToken(user.id, user.email);

    // Return user data without password
    const { password: _, ...userWithoutPassword } = user;

    res.json({
      success: true,
      message: "Login berhasil",
      data: {
        user: userWithoutPassword,
        token,
        tokenType: "Bearer",
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({
      success: false,
      message: "Terjadi kesalahan pada server",
    });
  }
};

// Get Profile Controller
const getProfile = async (req, res) => {
  try {
    const userId = req.user.userId;

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        birth_date: true,
        address: true,
        profile_image: true,
        membership_type: true,
        points: true,
        rating: true,
        total_bookings: true,
        joined_at: true,
        last_active: true,
        is_email_verified: true,
      },
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User tidak ditemukan",
      });
    }

    res.json({
      success: true,
      data: { user },
    });
  } catch (error) {
    console.error("Get profile error:", error);
    res.status(500).json({
      success: false,
      message: "Terjadi kesalahan pada server",
    });
  }
};

// Update Profile Controller
const updateProfile = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { name, phone, birth_date, address } = req.body;

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        ...(name && { name }),
        ...(phone && { phone }),
        ...(birth_date && { birth_date: new Date(birth_date) }),
        ...(address && { address }),
      },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        birth_date: true,
        address: true,
        profile_image: true,
        membership_type: true,
        points: true,
        rating: true,
        total_bookings: true,
      },
    });

    res.json({
      success: true,
      message: "Profile berhasil diupdate",
      data: { user: updatedUser },
    });
  } catch (error) {
    console.error("Update profile error:", error);
    res.status(500).json({
      success: false,
      message: "Terjadi kesalahan pada server",
    });
  }
};

// Logout Controller (optional - for token blacklisting)
const logout = async (req, res) => {
  try {
    // In a more advanced implementation, you might want to blacklist the token
    // For now, we'll just return a success response
    res.json({
      success: true,
      message: "Logout berhasil",
    });
  } catch (error) {
    console.error("Logout error:", error);
    res.status(500).json({
      success: false,
      message: "Terjadi kesalahan pada server",
    });
  }
};

module.exports = {
  register,
  login,
  getProfile,
  updateProfile,
  logout,
};

// apps/api/src/routes/auth.js
const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middleware/auth");
const {
  register,
  login,
  getProfile,
  updateProfile,
  logout,
} = require("../controllers/authController");

// Public routes
router.post("/register", register);
router.post("/login", login);

// Protected routes
router.get("/profile", verifyToken, getProfile);
router.put("/profile", verifyToken, updateProfile);
router.post("/logout", verifyToken, logout);

// Verify token endpoint
router.get("/verify", verifyToken, (req, res) => {
  res.json({
    success: true,
    message: "Token valid",
    data: { user: req.user },
  });
});

module.exports = router;

// Update apps/api/src/index.js
const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth");

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"], // Add your frontend URLs
    credentials: true,
  })
);

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// Routes
app.use("/api/auth", authRoutes);

// Health check
app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "SIMASHAJI API is running!",
    timestamp: new Date().toISOString(),
  });
});

// Error handling middleware
app.use((error, req, res, next) => {
  console.error("Unhandled error:", error);
  res.status(500).json({
    success: false,
    message: "Internal server error",
  });
});

// 404 handler
app.use("*", (req, res) => {
  res.status(404).json({
    success: false,
    message: "Endpoint tidak ditemukan",
  });
});

app.listen(PORT, () => {
  console.log(`🚀 SIMASHAJI API Server running on port ${PORT}`);
  console.log(`📍 Health check: http://localhost:${PORT}/api/health`);
});

module.exports = app;
