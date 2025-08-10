import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { PrismaClient } from "@prisma/client";
import Midtrans from "midtrans-client";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const prisma = new PrismaClient();
const snap = new Midtrans.Snap({
  isProduction: false,
  serverKey: process.env.MIDTRANS_SERVER_KEY,
  clientKey: process.env.MIDTRANS_CLIENT_KEY,
});

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/spaces", async (req, res) => {
  const { type } = req.query;
  const spaces = await prisma.space.findMany({
    where: type ? { type } : {},
  });
  res.json(spaces);
});

app.post("/bookings", async (req, res) => {
  const { spaceId, userEmail, checkIn, checkOut } = req.body;
  const space = await prisma.space.findUnique({ where: { id: spaceId } });
  const nights = Math.ceil((new Date(checkOut) - new Date(checkIn)) / 86400000);
  const total = nights * space.pricePerDay;

  const booking = await prisma.booking.create({
    data: {
      spaceId,
      userEmail,
      checkIn: new Date(checkIn),
      checkOut: new Date(checkOut),
      total,
    },
  });

  const parameter = {
    transaction_details: { order_id: `sim-${booking.id}`, gross_amount: total },
    customer_details: { email: userEmail },
  };
  const transaction = await snap.createTransaction(parameter);
  await prisma.booking.update({
    where: { id: booking.id },
    data: { snapToken: transaction.token },
  });

  res.json({ booking, snapToken: transaction.token });
});

app.post("/midtrans/notification", async (req, res) => {
  const status = await snap.transaction.notification(req.body);
  if (status.transaction_status === "settlement") {
    await prisma.booking.update({
      where: { id: Number(status.order_id.replace("sim-", "")) },
      data: { status: "PAID" },
    });
  }
  res.sendStatus(200);
});

app.listen(4000, () => console.log("API on :4000"));
