import express from "express";
import db from "../config/db.js"; // pastikan ada koneksi mysql2/promise

const router = express.Router();

// 🔹 CREATE Space
router.post("/", async (req, res) => {
  try {
    const {
      name,
      type,
      capacity,
      price_per_day,
      images,
      amenities,
      asrama_id,
      description,
      size,
    } = req.body;
    const [result] = await db.query(
      `INSERT INTO Space (name, type, capacity, price_per_day, images, amenities, asrama_id, description, size)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        name,
        type,
        capacity,
        price_per_day,
        JSON.stringify(images),
        JSON.stringify(amenities),
        asrama_id,
        description,
        size,
      ]
    );
    res.status(201).json({ id: result.insertId, message: "Space created" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create space" });
  }
});

// 🔹 READ All Spaces
router.get("/", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM Space");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch spaces" });
  }
});

// 🔹 READ Space by ID
router.get("/:id", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM Space WHERE id = ?", [
      req.params.id,
    ]);
    if (rows.length === 0)
      return res.status(404).json({ error: "Space not found" });
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch space" });
  }
});

// 🔹 UPDATE Space
router.put("/:id", async (req, res) => {
  try {
    const {
      name,
      type,
      capacity,
      price_per_day,
      images,
      amenities,
      asrama_id,
      description,
      size,
    } = req.body;
    await db.query(
      `UPDATE Space SET name=?, type=?, capacity=?, price_per_day=?, images=?, amenities=?, asrama_id=?, description=?, size=? WHERE id=?`,
      [
        name,
        type,
        capacity,
        price_per_day,
        JSON.stringify(images),
        JSON.stringify(amenities),
        asrama_id,
        description,
        size,
        req.params.id,
      ]
    );
    res.json({ message: "Space updated" });
  } catch (err) {
    res.status(500).json({ error: "Failed to update space" });
  }
});

// 🔹 DELETE Space
router.delete("/:id", async (req, res) => {
  try {
    await db.query("DELETE FROM Space WHERE id = ?", [req.params.id]);
    res.json({ message: "Space deleted" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete space" });
  }
});

export default router;
