// apps/api/src/routes/floor.js
import express from "express";
import prisma from "../config/prisma.js";

const router = express.Router();

// Seed floors (max 7 per building)
router.post("/seed", async (req, res) => {
  try {
    const buildings = await prisma.building.findMany();

    let createdFloors = [];

    for (const building of buildings) {
      const maxFloors = Math.floor(Math.random() * 7) + 1; // 1–7 lantai random

      for (let i = 1; i <= maxFloors; i++) {
        const floor = await prisma.floor.upsert({
          where: {
            buildingId_number: {
              buildingId: building.id,
              number: i,
            },
          },
          update: {},
          create: {
            number: i,
            buildingId: building.id,
          },
        });
        createdFloors.push(floor);
      }
    }

    res.json({
      success: true,
      message: "Floors seeded successfully",
      total: createdFloors.length,
      data: createdFloors,
    });
  } catch (error) {
    console.error("Seed floors error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to seed floors",
      error: error.message,
    });
  }
});

export default router;
