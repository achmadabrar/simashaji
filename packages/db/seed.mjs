import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const asramas = [
  {
    name: "Asrama Haji Jakarta",
    address: "Jl. Haji I",
    city: "Jakarta",
    province: "DKI Jakarta",
    contactNo: "021-111",
    lat: -6.2,
    lng: 106.8,
  },
  {
    name: "Asrama Haji Bandung",
    address: "Jl. Haji II",
    city: "Bandung",
    province: "Jawa Barat",
    contactNo: "022-222",
    lat: -6.91,
    lng: 107.6,
  },
  {
    name: "Asrama Haji Surabaya",
    address: "Jl. Haji III",
    city: "Surabaya",
    province: "Jawa Timur",
    contactNo: "031-333",
    lat: -7.25,
    lng: 112.75,
  },
  {
    name: "Asrama Haji Medan",
    address: "Jl. Haji IV",
    city: "Medan",
    province: "Sumatera Utara",
    contactNo: "061-444",
    lat: 3.6,
    lng: 98.67,
  },
  {
    name: "Asrama Haji Makassar",
    address: "Jl. Haji V",
    city: "Makassar",
    province: "Sulawesi Selatan",
    contactNo: "0411-555",
    lat: -5.14,
    lng: 119.42,
  },
  {
    name: "Asrama Haji Semarang",
    address: "Jl. Haji VI",
    city: "Semarang",
    province: "Jawa Tengah",
    contactNo: "024-666",
    lat: -6.96,
    lng: 110.42,
  },
  {
    name: "Asrama Haji Palembang",
    address: "Jl. Haji VII",
    city: "Palembang",
    province: "Sumatera Selatan",
    contactNo: "0711-777",
    lat: -2.99,
    lng: 104.75,
  },
  {
    name: "Asrama Haji Padang",
    address: "Jl. Haji VIII",
    city: "Padang",
    province: "Sumatera Barat",
    contactNo: "0751-888",
    lat: -0.95,
    lng: 100.35,
  },
  {
    name: "Asrama Haji Yogyakarta",
    address: "Jl. Haji IX",
    city: "Yogyakarta",
    province: "DI Yogyakarta",
    contactNo: "0274-999",
    lat: -7.79,
    lng: 110.36,
  },
  {
    name: "Asrama Haji Solo",
    address: "Jl. Haji X",
    city: "Surakarta",
    province: "Jawa Tengah",
    contactNo: "0271-101",
    lat: -7.56,
    lng: 110.82,
  },
  {
    name: "Asrama Haji Balikpapan",
    address: "Jl. Haji XI",
    city: "Balikpapan",
    province: "Kalimantan Timur",
    contactNo: "0542-202",
    lat: -1.26,
    lng: 116.82,
  },
  {
    name: "Asrama Haji Banjarmasin",
    address: "Jl. Haji XII",
    city: "Banjarmasin",
    province: "Kalimantan Selatan",
    contactNo: "0511-303",
    lat: -3.32,
    lng: 114.59,
  },
  {
    name: "Asrama Haji Manado",
    address: "Jl. Haji XIII",
    city: "Manado",
    province: "Sulawesi Utara",
    contactNo: "0431-404",
    lat: 1.49,
    lng: 124.84,
  },
];

const spaces = [];

asramas.forEach((asm, idx) => {
  const asramaId = idx + 1;
  // Kamar
  spaces.push(
    {
      name: "Standard Single",
      type: "KAMAR",
      capacity: 1,
      pricePerDay: 350000,
      images: [],
      amenities: ["AC", "Wi-Fi"],
      asramaId,
    },
    {
      name: "Deluxe Twin",
      type: "KAMAR",
      capacity: 2,
      pricePerDay: 550000,
      images: [],
      amenities: ["AC", "Wi-Fi", "TV"],
      asramaId,
    },
    {
      name: "Executive Suite",
      type: "KAMAR",
      capacity: 3,
      pricePerDay: 900000,
      images: [],
      amenities: ["AC", "Wi-Fi", "TV", "Breakfast"],
      asramaId,
    }
  );
  // Ruang Rapat
  spaces.push(
    {
      name: "Ruang Kecil",
      type: "RUANG_RAPAT",
      capacity: 8,
      pricePerDay: 500000,
      images: [],
      amenities: ["Projector", "Whiteboard"],
      asramaId,
    },
    {
      name: "Ruang Sedang",
      type: "RUANG_RAPAT",
      capacity: 20,
      pricePerDay: 1200000,
      images: [],
      amenities: ["Projector", "Whiteboard", "Mic"],
      asramaId,
    },
    {
      name: "Ruang Besar",
      type: "RUANG_RAPAT",
      capacity: 50,
      pricePerDay: 2500000,
      images: [],
      amenities: ["Projector", "Whiteboard", "Mic", "Sound System"],
      asramaId,
    }
  );
  // Aula
  spaces.push(
    {
      name: "Aula Mini",
      type: "AULA",
      capacity: 80,
      pricePerDay: 3000000,
      images: [],
      amenities: ["Sound System", "Stage"],
      asramaId,
    },
    {
      name: "Aula Standar",
      type: "AULA",
      capacity: 150,
      pricePerDay: 5000000,
      images: [],
      amenities: ["Sound System", "Stage", "Parking"],
      asramaId,
    },
    {
      name: "Aula Auditorium",
      type: "AULA",
      capacity: 250,
      pricePerDay: 8000000,
      images: [],
      amenities: ["Sound System", "Stage", "Podium", "Parking"],
      asramaId,
    }
  );
});

async function main() {
  await prisma.$executeRaw`SET FOREIGN_KEY_CHECKS=0`;
  await prisma.admin.createMany({
    data: [
      { name: "Admin Jakarta", email: "admin1@simashaji.id", phone: "08111" },
      { name: "Admin Bandung", email: "admin2@simashaji.id", phone: "08112" },
      { name: "Admin Surabaya", email: "admin3@simashaji.id", phone: "08113" },
      { name: "Admin Medan", email: "admin4@simashaji.id", phone: "08114" },
      { name: "Admin Makassar", email: "admin5@simashaji.id", phone: "08115" },
      { name: "Admin Semarang", email: "admin6@simashaji.id", phone: "08116" },
      { name: "Admin Palembang", email: "admin7@simashaji.id", phone: "08117" },
      { name: "Admin Padang", email: "admin8@simashaji.id", phone: "08118" },
      {
        name: "Admin Yogyakarta",
        email: "admin9@simashaji.id",
        phone: "08119",
      },
      { name: "Admin Solo", email: "admin10@simashaji.id", phone: "08120" },
      {
        name: "Admin Balikpapan",
        email: "admin11@simashaji.id",
        phone: "08121",
      },
      {
        name: "Admin Banjarmasin",
        email: "admin12@simashaji.id",
        phone: "08122",
      },
      { name: "Admin Manado", email: "admin13@simashaji.id", phone: "08123" },
    ],
  });
  for (let i = 0; i < asramas.length; i++) {
    await prisma.asrama.create({
      data: { ...asramas[i], adminId: i + 1 },
    });
  }
  await prisma.space.createMany({ data: spaces });
  await prisma.$executeRaw`SET FOREIGN_KEY_CHECKS=1`;
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
