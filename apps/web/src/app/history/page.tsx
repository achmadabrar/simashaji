"use client";
import { useState, useEffect } from "react";
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

const ChevronDown = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <polyline points="6,9 12,15 18,9" />
  </svg>
);

const Star = ({ size = 20, className = "", filled = false }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
  </svg>
);

const Receipt = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1Z" />
    <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
    <path d="M12 18V6" />
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

const Repeat = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <polyline points="17,1 21,5 17,9" />
    <path d="M3 11V9a4 4 0 0 1 4-4h14" />
    <polyline points="7,23 3,19 7,15" />
    <path d="M21 13v2a4 4 0 0 1-4 4H3" />
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

// Types
type BookingStatus = "completed" | "cancelled" | "ongoing" | "upcoming";

interface FilterBarProps {
  onFilterChange: (filter: string) => void;
  onSearchChange: (query: string) => void;
}

interface BookingCardProps {
  booking: HistoryBooking;
}

interface HistoryBooking {
  id: string;
  name: string;
  category: string;
  date: string;
  time: string;
  status: BookingStatus;
  location: string;
  price: number;
  image: string;
  bookingDate: string;
  duration: string;
  rating?: number;
  hasReview: boolean;
}

const Header = () => {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                S
              </div>
              <span className="text-xl font-bold text-blue-900">Simashaji</span>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 font-bold hover:text-blue-600">
              Dashboard
            </a>
            <a href="#" className="text-gray-700 font-bold hover:text-blue-600">
              Booking Saya
            </a>
            <a href="#" className="text-gray-700 font-bold hover:text-blue-600">
              Favorit
            </a>
            <a href="#" className="text-blue-600 font-bold hover:text-blue-700">
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

interface FilterBarProps {
  onFilterChange: (filter: string) => void;
  onSearchChange: (query: string) => void;
}

const FilterBar = ({ onFilterChange, onSearchChange }: FilterBarProps) => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filters = [
    { key: "all", label: "Semua", count: 24 },
    { key: "completed", label: "Selesai", count: 18 },
    { key: "cancelled", label: "Dibatalkan", count: 4 },
    { key: "ongoing", label: "Berlangsung", count: 2 },
  ];

  const handleFilterChange = (filterKey: string) => {
    setActiveFilter(filterKey);
    onFilterChange(filterKey);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    onSearchChange(e.target.value);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
        {/* Search Bar */}
        <div className="relative flex-1 lg:max-w-md">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="text"
            placeholder="Cari riwayat booking..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => handleFilterChange(filter.key)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeFilter === filter.key
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {filter.label} ({filter.count})
            </button>
          ))}
        </div>

        {/* Date Filter */}
        <div className="relative">
          <button
            onClick={() => setShowDatePicker(!showDatePicker)}
            className="flex items-center space-x-2 px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50"
          >
            <Calendar size={20} className="text-gray-400" />
            <span className="text-gray-700">Pilih Tanggal</span>
            <ChevronDown size={16} className="text-gray-400" />
          </button>

          {showDatePicker && (
            <div className="absolute right-0 mt-2 bg-white border rounded-lg shadow-lg p-4 z-10 w-64">
              <div className="space-y-3">
                <button className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded">
                  7 hari terakhir
                </button>
                <button className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded">
                  30 hari terakhir
                </button>
                <button className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded">
                  3 bulan terakhir
                </button>
                <hr />
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="date"
                    className="px-3 py-2 border border-gray-200 rounded text-sm"
                    placeholder="Dari"
                  />
                  <input
                    type="date"
                    className="px-3 py-2 border border-gray-200 rounded text-sm"
                    placeholder="Sampai"
                  />
                </div>
                <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                  Terapkan
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

interface BookingCardProps {
  booking: HistoryBooking;
}

const BookingCard = ({ booking }: BookingCardProps) => {
  const getStatusBadge = (status: BookingStatus) => {
    const badges = {
      completed: {
        bg: "bg-green-100",
        text: "text-green-800",
        label: "Selesai",
      },
      cancelled: {
        bg: "bg-red-100",
        text: "text-red-800",
        label: "Dibatalkan",
      },
      ongoing: {
        bg: "bg-blue-100",
        text: "text-blue-800",
        label: "Berlangsung",
      },
      upcoming: {
        bg: "bg-yellow-100",
        text: "text-yellow-800",
        label: "Akan Datang",
      },
    };
    return badges[status] || badges.completed;
  };

  const status = getStatusBadge(booking.status);

  return (
    <div className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow">
      <div className="p-6">
        <div className="flex items-start space-x-4">
          {/* Image */}
          <img
            src={booking.image}
            alt={booking.name}
            className="w-24 h-24 rounded-lg object-cover flex-shrink-0"
          />

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {booking.name}
                </h3>
                <p className="text-sm text-gray-500 mb-2">{booking.category}</p>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${status.bg} ${status.text}`}
              >
                {status.label}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600 mb-4">
              <div className="flex items-center space-x-2">
                <MapPin size={16} className="text-gray-400" />
                <span>{booking.location}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar size={16} className="text-gray-400" />
                <span>{booking.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={16} className="text-gray-400" />
                <span>
                  {booking.time} • {booking.duration}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Receipt size={16} className="text-gray-400" />
                <span>Booking: {booking.bookingDate}</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <span className="text-2xl font-bold text-blue-600">
                  Rp {booking.price.toLocaleString("id-ID")}
                </span>
                {booking.rating && (
                  <div className="flex items-center mt-1">
                    <Star size={16} className="text-yellow-400" filled />
                    <span className="text-sm text-gray-600 ml-1">
                      {booking.rating}
                    </span>
                  </div>
                )}
              </div>

              <div className="flex items-center space-x-2">
                {booking.status === "completed" && !booking.hasReview && (
                  <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors text-sm">
                    Beri Review
                  </button>
                )}

                <button className="px-4 py-2 border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm flex items-center space-x-1">
                  <Download size={16} />
                  <span>Invoice</span>
                </button>

                {booking.status === "completed" && (
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm flex items-center space-x-1">
                    <Repeat size={16} />
                    <span>Book Lagi</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const HistoryStats = () => {
  const stats = [
    { title: "Total Booking", value: "24", subtitle: "Sepanjang waktu" },
    { title: "Total Pengeluaran", value: "Rp 4.2M", subtitle: "Tahun ini" },
    {
      title: "Ruang Favorit",
      value: "Meeting Room",
      subtitle: "Paling sering dipesan",
    },
    { title: "Rating Rata-rata", value: "4.8", subtitle: "Dari review Anda" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-sm font-medium text-gray-600 mb-2">
            {stat.title}
          </h3>
          <p className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</p>
          <p className="text-sm text-gray-500">{stat.subtitle}</p>
        </div>
      ))}
    </div>
  );
};

export default function HistoryPage() {
  const [filteredBookings, setFilteredBookings] = useState<HistoryBooking[]>(
    []
  );
  const [currentFilter, setCurrentFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Sample data
  const allBookings: HistoryBooking[] = [
    {
      id: "BK001",
      name: "Meeting Room Premium",
      category: "Meeting Room",
      date: "15 Agustus 2024",
      time: "09:00 - 12:00",
      status: "completed",
      location: "Jakarta Selatan",
      price: 450000,
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=300&h=200&fit=crop",
      bookingDate: "10 Agustus 2024",
      duration: "3 jam",
      rating: 4.8,
      hasReview: true,
    },
    {
      id: "BK002",
      name: "Grand Ballroom",
      category: "Event Hall",
      date: "20 Agustus 2024",
      time: "18:00 - 22:00",
      status: "ongoing",
      location: "Jakarta Pusat",
      price: 2500000,
      image:
        "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=300&h=200&fit=crop",
      bookingDate: "15 Agustus 2024",
      duration: "4 jam",
      hasReview: false,
    },
    {
      id: "BK003",
      name: "Executive Suite",
      category: "Office Space",
      date: "10 Agustus 2024",
      time: "08:00 - 17:00",
      status: "completed",
      location: "Jakarta Barat",
      price: 800000,
      image:
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=300&h=200&fit=crop",
      bookingDate: "5 Agustus 2024",
      duration: "9 jam",
      rating: 4.9,
      hasReview: true,
    },
    {
      id: "BK004",
      name: "Small Meeting Room",
      category: "Meeting Room",
      date: "5 Agustus 2024",
      time: "14:00 - 16:00",
      status: "cancelled",
      location: "Jakarta Utara",
      price: 200000,
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=300&h=200&fit=crop",
      bookingDate: "1 Agustus 2024",
      duration: "2 jam",
      hasReview: false,
    },
    {
      id: "BK005",
      name: "Creative Studio",
      category: "Studio",
      date: "25 Juli 2024",
      time: "10:00 - 18:00",
      status: "completed",
      location: "Jakarta Selatan",
      price: 1200000,
      image:
        "https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=300&h=200&fit=crop",
      bookingDate: "20 Juli 2024",
      duration: "8 jam",
      rating: 4.7,
      hasReview: false,
    },
  ];

  // Initialize filtered bookings with all bookings
  useEffect(() => {
    setFilteredBookings(allBookings);
  }, []);

  const handleFilterChange = (filter: string) => {
    setCurrentFilter(filter);
    filterBookings(filter, searchQuery);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    filterBookings(currentFilter, query);
  };

  const filterBookings = (filter: string, search: string) => {
    let filtered = allBookings;

    if (filter !== "all") {
      filtered = filtered.filter((booking) => booking.status === filter);
    }

    if (search) {
      filtered = filtered.filter(
        (booking) =>
          booking.name.toLowerCase().includes(search.toLowerCase()) ||
          booking.location.toLowerCase().includes(search.toLowerCase()) ||
          booking.category.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredBookings(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Riwayat Booking
          </h1>
          <p className="text-gray-600">
            Lihat semua riwayat booking dan kelola reservasi Anda
          </p>
        </div>

        <HistoryStats />

        <FilterBar
          onFilterChange={handleFilterChange}
          onSearchChange={handleSearchChange}
        />

        <div className="space-y-4">
          {filteredBookings.length === 0 ? (
            <div className="bg-white rounded-lg shadow-sm border p-12 text-center">
              <Calendar size={48} className="text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Tidak ada riwayat booking
              </h3>
              <p className="text-gray-500 mb-6">
                Anda belum memiliki booking yang sesuai dengan filter yang
                dipilih
              </p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                Mulai Booking
              </button>
            </div>
          ) : (
            filteredBookings.map((booking) => (
              <BookingCard key={booking.id} booking={booking} />
            ))
          )}
        </div>

        {filteredBookings.length > 0 && (
          <div className="flex justify-center mt-8">
            <button className="bg-white border border-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50">
              Muat Lebih Banyak
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
