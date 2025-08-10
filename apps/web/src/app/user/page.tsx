"use client";
import { useState } from "react";
import Image from "next/image";
import Logo from "../../assets/logo_simashaji.png";

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

const Heart = ({ size = 20, className = "", filled = false }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
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

// Type definitions
type BookingStatus = "confirmed" | "pending" | "cancelled";
type ActivityType = "success" | "error" | "info";

interface Booking {
  id: number;
  name: string;
  date: string;
  time: string;
  status: BookingStatus;
  location: string;
  image: string;
}

interface Activity {
  action: string;
  item: string;
  time: string;
  type: ActivityType;
}

interface Recommendation {
  name: string;
  location: string;
  price: string;
  rating: number;
  image: string;
}

const Check = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <polyline points="20,6 9,17 4,12" />
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

const Header = () => {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Image
                src={Logo}
                alt="Simashaji Logo"
                width={60}
                height={60}
                className="rounded-full"
              />
              <span className="text-xl font-bold text-blue-900">Simashaji</span>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-blue-600 font-bold hover:text-blue-700">
              Dashboard
            </a>
            <a href="#" className="text-gray-700 font-bold hover:text-blue-600">
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

const QuickStats = () => {
  const stats = [
    { title: "Total Booking", value: "12", color: "bg-blue-500" },
    { title: "Booking Aktif", value: "3", color: "bg-green-500" },
    { title: "Favorit", value: "8", color: "bg-purple-500" },
    { title: "Poin Reward", value: "450", color: "bg-orange-500" },
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

const ActiveBookings = () => {
  const bookings: Booking[] = [
    {
      id: 1,
      name: "Meeting Room Premium",
      date: "2024-08-15",
      time: "09:00 - 12:00",
      status: "confirmed",
      location: "Jakarta Selatan",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=300&h=200&fit=crop",
    },
    {
      id: 2,
      name: "Grand Ballroom",
      date: "2024-08-20",
      time: "18:00 - 22:00",
      status: "pending",
      location: "Jakarta Pusat",
      image:
        "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=300&h=200&fit=crop",
    },
    {
      id: 3,
      name: "Executive Suite",
      date: "2024-08-25",
      time: "Check-in",
      status: "confirmed",
      location: "Jakarta Barat",
      image:
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=300&h=200&fit=crop",
    },
  ];

  const getStatusBadge = (status: BookingStatus): string => {
    const badges = {
      confirmed: "bg-green-100 text-green-800",
      pending: "bg-yellow-100 text-yellow-800",
      cancelled: "bg-red-100 text-red-800",
    };
    return badges[status] || badges.pending;
  };

  const getStatusText = (status: BookingStatus): string => {
    const texts = {
      confirmed: "Dikonfirmasi",
      pending: "Menunggu",
      cancelled: "Dibatalkan",
    };
    return texts[status] || "Menunggu";
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-900">Booking Aktif</h2>
        <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
          Lihat Semua
        </a>
      </div>

      <div className="space-y-4">
        {bookings.map((booking) => (
          <div
            key={booking.id}
            className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
          >
            <img
              src={booking.image}
              alt={booking.name}
              className="w-16 h-16 rounded-lg object-cover"
            />

            <div className="flex-1">
              <h3 className="font-semibold text-gray-900">{booking.name}</h3>
              <div className="flex items-center text-sm text-gray-600 mt-1">
                <MapPin size={14} className="mr-1" />
                <span>{booking.location}</span>
              </div>
              <div className="flex items-center text-sm text-gray-600 mt-1">
                <Calendar size={14} className="mr-1" />
                <span>{booking.date}</span>
                <Clock size={14} className="ml-3 mr-1" />
                <span>{booking.time}</span>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <span
                className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadge(
                  booking.status
                )}`}
              >
                {getStatusText(booking.status)}
              </span>
              <button className="text-blue-600 hover:text-blue-700 font-medium">
                Detail
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const QuickActions = () => {
  const actions = [
    {
      icon: <Search size={24} />,
      title: "Cari Ruang",
      description: "Temukan ruang ideal",
      color: "bg-blue-500",
    },
    {
      icon: <Calendar size={24} />,
      title: "Booking Baru",
      description: "Buat reservasi baru",
      color: "bg-green-500",
    },
    {
      icon: <Heart size={24} />,
      title: "Favorit",
      description: "Lihat ruang favorit",
      color: "bg-red-500",
    },
    {
      icon: <Clock size={24} />,
      title: "Riwayat",
      description: "Lihat booking sebelumnya",
      color: "bg-purple-500",
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Aksi Cepat</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {actions.map((action, index) => (
          <button
            key={index}
            className="flex flex-col items-center p-4 rounded-lg border border-gray-200 hover:shadow-md transition-all hover:border-blue-300"
          >
            <div className={`${action.color} p-3 rounded-full text-white mb-3`}>
              {action.icon}
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">{action.title}</h3>
            <p className="text-sm text-gray-600 text-center">
              {action.description}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
};

const RecentActivity = () => {
  const activities: Activity[] = [
    {
      action: "Booking dikonfirmasi",
      item: "Meeting Room Premium",
      time: "2 jam yang lalu",
      type: "success",
    },
    {
      action: "Pembayaran berhasil",
      item: "Grand Ballroom",
      time: "1 hari yang lalu",
      type: "success",
    },
    {
      action: "Review diberikan",
      item: "Executive Suite",
      time: "3 hari yang lalu",
      type: "info",
    },
    {
      action: "Booking dibatalkan",
      item: "Small Meeting Room",
      time: "5 hari yang lalu",
      type: "error",
    },
  ];

  const getActivityIcon = (type: ActivityType) => {
    switch (type) {
      case "success":
        return <Check size={16} className="text-green-600" />;
      case "error":
        return <X size={16} className="text-red-600" />;
      default:
        return <Clock size={16} className="text-blue-600" />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-6">
        Aktivitas Terbaru
      </h2>

      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-start space-x-3">
            <div className="flex-shrink-0 mt-1">
              {getActivityIcon(activity.type)}
            </div>
            <div className="flex-1">
              <p className="text-gray-900 font-medium">{activity.action}</p>
              <p className="text-blue-600">{activity.item}</p>
              <p className="text-sm text-gray-500">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Recommendations = () => {
  const recommendations: Recommendation[] = [
    {
      name: "Creative Studio",
      location: "Jakarta Utara",
      price: "200000",
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=300&h=200&fit=crop",
    },
    {
      name: "Coworking Space Premium",
      location: "Jakarta Selatan",
      price: "100000",
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=300&h=200&fit=crop",
    },
    {
      name: "Conference Hall",
      location: "Jakarta Pusat",
      price: "500000",
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?w=300&h=200&fit=crop",
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-900">
          Rekomendasi untuk Anda
        </h2>
        <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
          Lihat Semua
        </a>
      </div>

      <div className="space-y-4">
        {recommendations.map((item, index) => (
          <div
            key={index}
            className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 rounded-lg object-cover"
            />

            <div className="flex-1">
              <h3 className="font-semibold text-gray-900">{item.name}</h3>
              <div className="flex items-center text-sm text-gray-600 mt-1">
                <MapPin size={14} className="mr-1" />
                <span>{item.location}</span>
              </div>
              <div className="flex items-center justify-between mt-2">
                <span className="font-bold text-blue-600">
                  Rp {parseInt(item.price).toLocaleString("id-ID")}
                </span>
                <span className="text-sm text-gray-600">★ {item.rating}</span>
              </div>
            </div>

            <div className="flex space-x-2">
              <button className="p-2 text-gray-400 hover:text-red-500">
                <Heart size={16} />
              </button>
              <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700">
                Lihat
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Selamat Datang, Achmad!
          </h1>
          <p className="text-gray-600">
            Kelola booking dan temukan ruang terbaik untuk kebutuhan Anda
          </p>
        </div>

        <QuickStats />

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <ActiveBookings />
            <QuickActions />
          </div>

          <div className="space-y-8">
            <RecentActivity />
            <Recommendations />
          </div>
        </div>
      </div>
    </div>
  );
}
