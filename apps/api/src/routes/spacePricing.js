import express from "express";
import db from "../config/db.js";

const router = express.Router();

// CREATE Pricing
router.post("/", async (req, res) => {
  try {
    const { space_id, day_type, price } = req.body;
    const [result] = await db.query(
      `INSERT INTO SpacePricing (space_id, day_type, price) VALUES (?, ?, ?)`,
      [space_id, day_type, price]
    );
    res.status(201).json({ id: result.insertId, message: "Pricing added" });
  } catch (err) {
    res.status(500).json({ error: "Failed to add pricing" });
  }
});

// READ All Pricing for Space
router.get("/:space_id", async (req, res) => {
  try {
    const [rows] = await db.query(
      "SELECT * FROM SpacePricing WHERE space_id=?",
      [req.params.space_id]
    );
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch pricing" });
  }
});

// UPDATE Pricing
router.put("/:id", async (req, res) => {
  try {
    const { day_type, price } = req.body;
    await db.query(`UPDATE SpacePricing SET day_type=?, price=? WHERE id=?`, [
      day_type,
      price,
      req.params.id,
    ]);
    res.json({ message: "Pricing updated" });
  } catch (err) {
    res.status(500).json({ error: "Failed to update pricing" });
  }
});

// DELETE Pricing
router.delete("/:id", async (req, res) => {
  try {
    await db.query("DELETE FROM SpacePricing WHERE id=?", [req.params.id]);
    res.json({ message: "Pricing deleted" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete pricing" });
  }
});

export default router;
