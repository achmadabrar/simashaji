// apps/api/src/routes/auth.js
import express from "express";
import { PrismaClient } from "@prisma/client";
import { OAuth2Client } from "google-auth-library";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import passport from "../config/passport.js";

const router = express.Router();
const prisma = new PrismaClient();
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// JWT Configuration
const JWT_SECRET =
  process.env.JWT_SECRET ||
  "256ba5ed696ffccb259644c0ca18da7d98b10fdd1f227b847118b2d640211606";
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "7d";

// ===== Utility Functions =====
const generateToken = (userId, email) => {
  return jwt.sign(
    {
      userId,
      email,
      iat: Math.floor(Date.now() / 1000),
    },
    JWT_SECRET,
    { expiresIn: JWT_EXPIRES_IN }
  );
};

const generateUserId = () => {
  return `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

const hashPassword = async (password) => {
  const saltRounds = parseInt(process.env.BCRYPT_SALT_ROUNDS) || 12;
  return await bcrypt.hash(password, saltRounds);
};

const comparePassword = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword);
};

router.post("/google", async (req, res) => {
  try {
    const { token } = req.body;
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();

    // Cek user di database
    let user = await User.findOne({ email: payload.email });
    if (!user) {
      user = await User.create({
        name: payload.name,
        email: payload.email,
        picture: payload.picture,
        password: null, // user Google tidak punya password lokal
      });
    }

    // Buat JWT internal
    const appToken = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({ success: true, token: appToken, user });
  } catch (err) {
    console.error(err);
    res.status(400).json({ success: false, message: "Google login gagal" });
  }
});

//google login
router.post("/google-login", async (req, res) => {
  try {
    const { idToken } = req.body;
    if (!idToken) {
      return res
        .status(400)
        .json({ success: false, message: "Token Google wajib diisi" });
    }

    // Verifikasi token ke Google
    const ticket = await client.verifyIdToken({
      idToken,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    const googleId = payload.sub;
    const email = payload.email.toLowerCase();
    const name = payload.name;
    const picture = payload.picture;

    // Cek user di DB
    let user = await prisma.user.findUnique({ where: { googleId } });

    if (!user) {
      user = await prisma.user.create({
        data: {
          id: `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
          name,
          email,
          googleId,
          profileImage: picture,
          isEmailVerified: payload.email_verified,
          membership_type: "REGULAR",
        },
      });
    }

    // Generate JWT internal
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN || "7d" }
    );

    return res.json({
      success: true,
      message: "Login Google berhasil",
      data: { user, token, tokenType: "Bearer" },
    });
  } catch (error) {
    console.error("Google login error:", error);
    res
      .status(500)
      .json({ success: false, message: "Gagal login dengan Google" });
  }
});

// Start Google OAuth
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// Callback setelah login Google
router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  (req, res) => {
    const token = jwt.sign(
      { userId: req.user.id, email: req.user.email },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN || "7d" }
    );

    res.json({
      success: true,
      message: "Login Google berhasil",
      data: { user: req.user, token, tokenType: "Bearer" },
    });
  }
);

// ===== Auth Middleware =====
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

    console.error("Token verification error:", error);
    return res.status(500).json({
      success: false,
      message: "Error dalam verifikasi token",
    });
  }
};

// ===== Register Endpoint =====
router.post("/register", async (req, res) => {
  try {
    const { name, email, phone, password, confirmPassword } = req.body;

    console.log("📝 Registration attempt for:", email);

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

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Format email tidak valid",
      });
    }

    // Check if email already exists
    const existingUser = await prisma.user.findUnique({
      where: { email: email.toLowerCase() },
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

    // Create user in database
    const newUser = await prisma.user.create({
      data: {
        id: userId,
        name: name.trim(),
        email: email.toLowerCase(),
        phone: phone ? phone.trim() : null,
        password: hashedPassword,
        membership_type: "REGULAR",
        points: 0,
        rating: 0.0,
        total_bookings: 0,
        is_email_verified: false,
      },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        membership_type: true,
        points: true,
        rating: true,
        total_bookings: true,
        joined_at: true,
        is_email_verified: true,
      },
    });

    console.log("✅ User created successfully:", newUser.id);

    // Generate token
    const token = generateToken(newUser.id, newUser.email);

    // Create default notification preferences
    try {
      const notificationId = `notification_${Date.now()}_${Math.random()
        .toString(36)
        .substr(2, 5)}`;
      await prisma.userNotification.create({
        data: {
          id: notificationId,
          user_id: userId,
          booking_reminders: true,
          promotional_offers: true,
          newsletter: false,
          upcoming_bookings: true,
          email_notifications: true,
          push_notifications: true,
        },
      });
    } catch (notifError) {
      console.warn("Failed to create notification preferences:", notifError);
    }

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
    console.error("Registration error:", error);

    if (error.code === "P2002") {
      return res.status(409).json({
        success: false,
        message: "Email sudah terdaftar",
      });
    }

    res.status(500).json({
      success: false,
      message: "Terjadi kesalahan pada server",
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
});

// ===== Login Endpoint =====
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log("🔐 Login attempt for:", email);

    // Validation
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email dan password wajib diisi",
      });
    }

    // Find user
    const user = await prisma.user.findUnique({
      where: { email: email.toLowerCase() },
    });

    if (!user) {
      console.log("❌ User not found:", email);
      return res.status(401).json({
        success: false,
        message: "Email atau password salah",
      });
    }

    if (!user.password) {
      console.log("❌ User has no password (OAuth user):", email);
      return res.status(401).json({
        success: false,
        message:
          "Akun ini terdaftar menggunakan Google. Silakan login dengan Google.",
      });
    }

    // Verify password
    const isPasswordValid = await comparePassword(password, user.password);

    if (!isPasswordValid) {
      console.log("❌ Invalid password for:", email);
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

    console.log("✅ Login successful for:", email);

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
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
});

// ===== Get Profile Endpoint =====
router.get("/profile", verifyToken, async (req, res) => {
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
});

// ===== Update Profile Endpoint =====
router.put("/profile", verifyToken, async (req, res) => {
  try {
    const userId = req.user.userId;
    const { name, phone, birth_date, address, profile_image } = req.body;

    const updateData = {};
    if (name) updateData.name = name.trim();
    if (phone) updateData.phone = phone.trim();
    if (birth_date) updateData.birth_date = new Date(birth_date);
    if (address) updateData.address = address.trim();
    if (profile_image) updateData.profile_image = profile_image;

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: updateData,
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
        is_email_verified: true,
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
});

// ===== Logout Endpoint =====
router.post("/logout", verifyToken, async (req, res) => {
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
});

// ===== Verify Token Endpoint =====
router.get("/verify", verifyToken, async (req, res) => {
  try {
    const userId = req.user.userId;

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        name: true,
        email: true,
        membership_type: true,
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
      message: "Token valid",
      data: {
        user: {
          ...req.user,
          ...user,
        },
      },
    });
  } catch (error) {
    console.error("Verify token error:", error);
    res.status(500).json({
      success: false,
      message: "Terjadi kesalahan pada server",
    });
  }
});

export default router;
