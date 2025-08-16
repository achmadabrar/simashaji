"use client";
import { useState } from "react";
import Image from "next/image";

// Simple icon components as SVG
const Search = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <circle cx="11" cy="11" r="8" />
    <path d="21 21l-4.35-4.35" />
  </svg>
);

const MapPin = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const Calendar = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const Users = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const Clock = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12,6 12,12 16,14" />
  </svg>
);

const Bell = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
);

const User = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const Settings = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const LogOut = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    <polyline points="16,17 21,12 16,7" />
    <line x1="21" y1="12" x2="9" y2="12" />
  </svg>
);

const Filter = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <polygon points="22,3 2,3 10,12.46 10,19 14,21 14,12.46" />
  </svg>
);

const Download = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7,10 12,15 17,10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const Eye = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const Edit = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
);

const X = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

// Type definitions
type BookingStatus = "confirmed" | "pending" | "cancelled" | "completed";

interface Booking {
  id: string;
  name: string;
  date: string;
  time: string;
  status: BookingStatus;
  location: string;
  image: string;
  price: string;
  duration: string;
  capacity: number;
  bookingCode: string;
  facilities: string[];
}

const Header = () => {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-15 h-15 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xl font-bold">S</span>
              </div>
              <span className="text-xl font-bold text-blue-900">Simashaji</span>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 font-bold hover:text-blue-600">
              Dashboard
            </a>
            <a href="#" className="text-blue-600 font-bold hover:text-blue-700">
              Booking Saya
            </a>
            <a href="#" className="text-gray-700 font-bold hover:text-blue-600">
              Favorit
            </a>
            <a href="#" className="text-gray-700 font-bold hover:text-blue-600">
              Riwayat
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-gray-600 hover:text-blue-600">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </button>

            <div className="relative">
              <button
                onClick={() => setShowProfile(!showProfile)}
                className="flex items-center space-x-2 p-2 text-gray-700 hover:text-blue-600"
              >
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                  <User size={16} />
                </div>
                <span className="font-medium">Achmad Abrar</span>
              </button>

              {showProfile && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border py-2 z-50">
                  <a
                    href="#"
                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    <User size={16} className="mr-3" />
                    Profil Saya
                  </a>
                  <a
                    href="#"
                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    <Settings size={16} className="mr-3" />
                    Pengaturan
                  </a>
                  <hr className="my-2" />
                  <a
                    href="#"
                    className="flex items-center px-4 py-2 text-red-600 hover:bg-gray-100"
                  >
                    <LogOut size={16} className="mr-3" />
                    Keluar
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

const BookingStats = ({ bookings }: { bookings: Booking[] }) => {
  const stats = [
    {
      title: "Total Booking",
      value: bookings.length.toString(),
      color: "bg-blue-500",
    },
    {
      title: "Dikonfirmasi",
      value: bookings.filter((b) => b.status === "confirmed").length.toString(),
      color: "bg-green-500",
    },
    {
      title: "Menunggu",
      value: bookings.filter((b) => b.status === "pending").length.toString(),
      color: "bg-yellow-500",
    },
    {
      title: "Selesai",
      value: bookings.filter((b) => b.status === "completed").length.toString(),
      color: "bg-purple-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center">
            <div className={`${stat.color} rounded-lg p-3 mr-4`}>
              <div className="w-6 h-6 bg-white rounded opacity-30"></div>
            </div>
            <div>
              <p className="text-gray-600 text-sm">{stat.title}</p>
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const FilterControls = ({
  searchTerm,
  setSearchTerm,
  statusFilter,
  setStatusFilter,
}: {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  statusFilter: string;
  setStatusFilter: (value: string) => void;
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search
              size={20}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Cari booking..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="all">Semua Status</option>
            <option value="confirmed">Dikonfirmasi</option>
            <option value="pending">Menunggu</option>
            <option value="completed">Selesai</option>
            <option value="cancelled">Dibatalkan</option>
          </select>

          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <Filter size={16} />
            <span>Filter</span>
          </button>

          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            <Download size={16} />
            <span>Ekspor</span>
          </button>
        </div>
      </div>
    </div>
  );
};

const BookingCard = ({ booking }: { booking: Booking }) => {
  const getStatusBadge = (status: BookingStatus): string => {
    const badges = {
      confirmed: "bg-green-100 text-green-800",
      pending: "bg-yellow-100 text-yellow-800",
      cancelled: "bg-red-100 text-red-800",
      completed: "bg-purple-100 text-purple-800",
    };
    return badges[status] || badges.pending;
  };

  const getStatusText = (status: BookingStatus): string => {
    const texts = {
      confirmed: "Dikonfirmasi",
      pending: "Menunggu",
      cancelled: "Dibatalkan",
      completed: "Selesai",
    };
    return texts[status] || "Menunggu";
  };

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
      <div className="flex">
        <div className="w-32 h-32 flex-shrink-0">
          <img
            src={booking.image}
            alt={booking.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-1 p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {booking.name}
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                Kode Booking:{" "}
                <span className="font-mono font-medium">
                  {booking.bookingCode}
                </span>
              </p>
            </div>
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusBadge(
                booking.status
              )}`}
            >
              {getStatusText(booking.status)}
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="space-y-2">
              <div className="flex items-center text-sm text-gray-600">
                <MapPin size={14} className="mr-2 flex-shrink-0" />
                <span>{booking.location}</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Calendar size={14} className="mr-2 flex-shrink-0" />
                <span>{booking.date}</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Clock size={14} className="mr-2 flex-shrink-0" />
                <span>
                  {booking.time} ({booking.duration})
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center text-sm text-gray-600">
                <Users size={14} className="mr-2 flex-shrink-0" />
                <span>Kapasitas: {booking.capacity} orang</span>
              </div>
              <div className="text-sm text-gray-600">
                <span className="font-medium">Fasilitas:</span>
                <div className="flex flex-wrap gap-1 mt-1">
                  {booking.facilities.map((facility, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-xs rounded"
                    >
                      {facility}
                    </span>
                  ))}
                </div>
              </div>
              <div className="text-lg font-bold text-blue-600">
                Rp {parseInt(booking.price).toLocaleString("id-ID")}
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center pt-4 border-t border-gray-200">
            <div className="text-sm text-gray-500">
              Dibuat: 2024-08-{10 + parseInt(booking.id)}
            </div>

            <div className="flex space-x-2">
              <button className="flex items-center space-x-1 px-3 py-2 text-gray-600 hover:text-blue-600 border border-gray-300 rounded hover:border-blue-300 transition-colors">
                <Eye size={16} />
                <span>Detail</span>
              </button>

              {booking.status === "pending" && (
                <button className="flex items-center space-x-1 px-3 py-2 text-blue-600 hover:text-blue-700 border border-blue-300 rounded hover:border-blue-500 transition-colors">
                  <Edit size={16} />
                  <span>Edit</span>
                </button>
              )}

              {(booking.status === "pending" ||
                booking.status === "confirmed") && (
                <button className="flex items-center space-x-1 px-3 py-2 text-red-600 hover:text-red-700 border border-red-300 rounded hover:border-red-500 transition-colors">
                  <X size={16} />
                  <span>Batal</span>
                </button>
              )}

              {booking.status === "completed" && (
                <button className="px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                  Booking Lagi
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function BookingSaya() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const bookings: Booking[] = [
    {
      id: "1",
      name: "Meeting Room Premium",
      date: "2024-08-15",
      time: "09:00 - 12:00",
      duration: "3 jam",
      status: "confirmed",
      location: "Jakarta Selatan, Sudirman",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=300&h=200&fit=crop",
      price: "450000",
      capacity: 12,
      bookingCode: "BK001234",
      facilities: ["Proyektor", "WiFi", "AC", "Flipchart"],
    },
    {
      id: "2",
      name: "Grand Ballroom",
      date: "2024-08-20",
      time: "18:00 - 22:00",
      duration: "4 jam",
      status: "pending",
      location: "Jakarta Pusat, Menteng",
      image:
        "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=300&h=200&fit=crop",
      price: "2500000",
      capacity: 200,
      bookingCode: "BK001235",
      facilities: ["Sound System", "Lighting", "Catering Area", "Stage"],
    },
    {
      id: "3",
      name: "Executive Suite",
      date: "2024-08-25",
      time: "08:00 - 17:00",
      duration: "9 jam",
      status: "confirmed",
      location: "Jakarta Barat, Kebon Jeruk",
      image:
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=300&h=200&fit=crop",
      price: "800000",
      capacity: 8,
      bookingCode: "BK001236",
      facilities: ["Meja Rapat", "Kursi Eksekutif", 'TV 65"', "Pantry"],
    },
    {
      id: "4",
      name: "Creative Studio",
      date: "2024-08-10",
      time: "13:00 - 18:00",
      duration: "5 jam",
      status: "completed",
      location: "Jakarta Utara, Kelapa Gading",
      image:
        "https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=300&h=200&fit=crop",
      price: "650000",
      capacity: 15,
      bookingCode: "BK001230",
      facilities: ["Whiteboard", "Bean Bags", "Kamera", "Ring Light"],
    },
    {
      id: "5",
      name: "Small Meeting Room",
      date: "2024-08-05",
      time: "10:00 - 12:00",
      duration: "2 jam",
      status: "cancelled",
      location: "Jakarta Selatan, Kemang",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=300&h=200&fit=crop",
      price: "200000",
      capacity: 6,
      bookingCode: "BK001228",
      facilities: ["TV Monitor", "WiFi", "AC"],
    },
    {
      id: "6",
      name: "Conference Hall",
      date: "2024-08-30",
      time: "09:00 - 16:00",
      duration: "7 jam",
      status: "pending",
      location: "Jakarta Pusat, Thamrin",
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?w=300&h=200&fit=crop",
      price: "1200000",
      capacity: 50,
      bookingCode: "BK001237",
      facilities: ["Podium", "Microphone", "Live Streaming", "Recording"],
    },
  ];

  const filteredBookings = bookings.filter((booking) => {
    const matchesSearch =
      booking.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.bookingCode.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === "all" || booking.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Booking Saya
          </h1>
          <p className="text-gray-600">
            Kelola dan pantau semua booking ruangan Anda
          </p>
        </div>

        <BookingStats bookings={bookings} />

        <FilterControls
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
        />

        <div className="space-y-6">
          {filteredBookings.length === 0 ? (
            <div className="bg-white rounded-lg shadow-md p-12 text-center">
              <div className="text-gray-400 mb-4">
                <Search size={64} className="mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Tidak ada booking ditemukan
              </h3>
              <p className="text-gray-600 mb-6">
                Coba ubah filter pencarian atau buat booking baru
              </p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Buat Booking Baru
              </button>
            </div>
          ) : (
            <>
              {filteredBookings.map((booking) => (
                <BookingCard key={booking.id} booking={booking} />
              ))}

              {/* Pagination */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-600">
                    Menampilkan {filteredBookings.length} dari {bookings.length}{" "}
                    booking
                  </div>

                  <div className="flex items-center space-x-2">
                    <button className="px-3 py-2 text-gray-500 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed">
                      Previous
                    </button>

                    <div className="flex space-x-1">
                      <button className="px-3 py-2 bg-blue-600 text-white rounded">
                        1
                      </button>
                      <button className="px-3 py-2 text-gray-600 border border-gray-300 rounded hover:bg-gray-50">
                        2
                      </button>
                      <button className="px-3 py-2 text-gray-600 border border-gray-300 rounded hover:bg-gray-50">
                        3
                      </button>
                    </div>

                    <button className="px-3 py-2 text-gray-600 border border-gray-300 rounded hover:bg-gray-50">
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
