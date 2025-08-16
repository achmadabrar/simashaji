// packages/db/seed.mjs
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const asramaList = [
  {
    name: "Asrama Haji Aceh",
    city: "Aceh",
    province: "Aceh",
    lat: 5.55,
    lng: 95.32,
  },
  {
    name: "Asrama Haji Medan",
    city: "Medan",
    province: "Sumatera Utara",
    lat: 3.6,
    lng: 98.67,
  },
  {
    name: "Asrama Haji Makassar",
    city: "Makassar",
    province: "Sulawesi Selatan",
    lat: -5.14,
    lng: 119.42,
  },
  {
    name: "Asrama Haji Balikpapan",
    city: "Balikpapan",
    province: "Kalimantan Timur",
    lat: -1.26,
    lng: 116.82,
  },
  {
    name: "Asrama Haji Banjarmasin",
    city: "Banjarmasin",
    province: "Kalimantan Selatan",
    lat: -3.32,
    lng: 114.59,
  },
  {
    name: "Asrama Haji Jakarta",
    city: "Jakarta",
    province: "DKI Jakarta",
    lat: -6.2,
    lng: 106.8,
  },
  {
    name: "Asrama Haji Padang",
    city: "Padang",
    province: "Sumatera Barat",
    lat: -0.95,
    lng: 100.35,
  },
  {
    name: "Asrama Haji Surabaya",
    city: "Surabaya",
    province: "Jawa Timur",
    lat: -7.25,
    lng: 112.75,
  },
  {
    name: "Asrama Haji Lombok",
    city: "Mataram",
    province: "Nusa Tenggara Barat",
    lat: -8.58,
    lng: 116.13,
  },
  {
    name: "Asrama Haji Bekasi",
    city: "Bekasi",
    province: "Jawa Barat",
    lat: -6.24,
    lng: 107.0,
  },
];

async function main() {
  console.log("🚀 Seeding database...");

  await prisma.$executeRaw`SET FOREIGN_KEY_CHECKS=0`;

  await prisma.$transaction(async (tx) => {
    console.log("1️⃣  Creating Admins...");
    const admins = [];
    for (let i = 0; i < asramaList.length; i++) {
      const admin = await tx.admin.create({
        data: {
          name: `Admin ${asramaList[i].city}`,
          email: `admin${i + 1}@simashaji.id`,
          phone: `0811${100 + i}`,
          password: "password123", // 🔐 ganti kalau mau secure
        },
      });
      admins.push(admin);
    }

    console.log("2️⃣  Creating Asramas...");
    const asramas = [];
    for (let i = 0; i < asramaList.length; i++) {
      const asrama = await tx.asrama.create({
        data: {
          name: asramaList[i].name,
          address: `Jl. Haji No.${i + 1}`,
          city: asramaList[i].city,
          province: asramaList[i].province,
          contactNo: `021-000${i + 1}`,
          lat: asramaList[i].lat,
          lng: asramaList[i].lng,
          description: `Asrama Haji di ${asramaList[i].city}`,
          admin: { connect: { id: admins[i].id } },
        },
      });
      asramas.push(asrama);
    }

    console.log("3️⃣  Creating Spaces & Pricing...");
    for (const asrama of asramas) {
      // Daftar space
      const spacesData = [
        {
          name: "Standard Single",
          type: "KAMAR",
          capacity: 1,
          pricePerDay: 350000,
          amenities: ["AC", "Wi-Fi"],
        },
        {
          name: "Deluxe Twin",
          type: "KAMAR",
          capacity: 2,
          pricePerDay: 550000,
          amenities: ["AC", "Wi-Fi", "TV"],
        },
        {
          name: "Executive Suite",
          type: "KAMAR",
          capacity: 3,
          pricePerDay: 900000,
          amenities: ["AC", "Wi-Fi", "TV", "Breakfast"],
        },
        {
          name: "Ruang Rapat Kecil",
          type: "RUANG_RAPAT",
          capacity: 8,
          pricePerDay: 500000,
          amenities: ["Projector", "Whiteboard"],
        },
        {
          name: "Ruang Rapat Sedang",
          type: "RUANG_RAPAT",
          capacity: 20,
          pricePerDay: 1200000,
          amenities: ["Projector", "Whiteboard", "Mic"],
        },
        {
          name: "Ruang Rapat Besar",
          type: "RUANG_RAPAT",
          capacity: 50,
          pricePerDay: 2500000,
          amenities: ["Projector", "Whiteboard", "Mic", "Sound System"],
        },
        {
          name: "Aula Mini",
          type: "AULA",
          capacity: 80,
          pricePerDay: 3000000,
          amenities: ["Sound System", "Stage"],
        },
        {
          name: "Aula Standar",
          type: "AULA",
          capacity: 150,
          pricePerDay: 5000000,
          amenities: ["Sound System", "Stage", "Parking"],
        },
        {
          name: "Aula Auditorium",
          type: "AULA",
          capacity: 250,
          pricePerDay: 8000000,
          amenities: ["Sound System", "Stage", "Podium", "Parking"],
        },
        {
          name: "Lapangan Manasik",
          type: "MANASIK",
          capacity: 500,
          pricePerDay: 0,
          amenities: ["Area Luas", "Panggung", "Toilet"],
        },
      ];

      const spaces = [];
      for (const s of spacesData) {
        const space = await tx.space.create({
          data: {
            name: s.name,
            type: s.type,
            capacity: s.capacity,
            pricePerDay: s.pricePerDay,
            images: [],
            amenities: s.amenities,
            asrama: { connect: { id: asrama.id } },
          },
        });
        spaces.push(space);
      }

      // Pricing untuk Ruang Rapat & Aula
      const ruangDanAula = spaces.filter((sp) =>
        ["RUANG_RAPAT", "AULA"].includes(sp.type)
      );
      for (const space of ruangDanAula) {
        await tx.spacePricing.createMany({
          data: [
            {
              spaceId: space.id,
              durationType: "PER_8H",
              category: "GENERAL",
              price: space.pricePerDay * 0.6,
            },
            {
              spaceId: space.id,
              durationType: "PER_12H",
              category: "GENERAL",
              price: space.pricePerDay * 0.8,
            },
          ],
        });
      }

      // Pricing untuk Manasik
      const manasik = spaces.find((sp) => sp.type === "MANASIK");
      await tx.spacePricing.createMany({
        data: [
          {
            spaceId: manasik.id,
            durationType: "PER_PERSON",
            category: "DEWASA",
            price: 10000,
          },
          {
            spaceId: manasik.id,
            durationType: "PER_PERSON",
            category: "ANAK",
            price: 5000,
          },
        ],
      });
    }
  });

  await prisma.$executeRaw`SET FOREIGN_KEY_CHECKS=1`;
  console.log("✅ Seeding completed!");
}

main()
  .catch((e) => {
    console.error("❌ Seeding failed:", e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
