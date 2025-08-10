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

const Grid = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
  </svg>
);

const List = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <line x1="8" y1="6" x2="21" y2="6" />
    <line x1="8" y1="12" x2="21" y2="12" />
    <line x1="8" y1="18" x2="21" y2="18" />
    <line x1="3" y1="6" x2="3.01" y2="6" />
    <line x1="3" y1="12" x2="3.01" y2="12" />
    <line x1="3" y1="18" x2="3.01" y2="18" />
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

// Type definitions
interface FavoriteRoom {
  id: number;
  name: string;
  location: string;
  price: number;
  rating: number;
  capacity: number;
  image: string;
  facilities: string[];
  category: string;
  dateAdded: string;
  available: boolean;
}

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
            <a href="#" className="text-gray-700 font-bold hover:text-blue-600">
              Dashboard
            </a>
            <a href="#" className="text-gray-700 font-bold hover:text-blue-600">
              Booking Saya
            </a>
            <a href="#" className="text-blue-600 font-bold hover:text-blue-700">
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

const FavoritesHeader = ({
  searchTerm,
  setSearchTerm,
  viewMode,
  setViewMode,
  showFilters,
  setShowFilters,
  totalFavorites,
}: {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  viewMode: string;
  setViewMode: (value: string) => void;
  showFilters: boolean;
  setShowFilters: (value: boolean) => void;
  totalFavorites: number;
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Ruang Favorit Saya
          </h1>
          <p className="text-gray-600">
            {totalFavorites} ruang tersimpan sebagai favorit
          </p>
        </div>

        <div className="flex items-center space-x-2 mt-4 md:mt-0">
          <button
            onClick={() => setViewMode("grid")}
            className={`p-2 rounded-lg ${
              viewMode === "grid"
                ? "bg-blue-100 text-blue-600"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <Grid size={20} />
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={`p-2 rounded-lg ${
              viewMode === "list"
                ? "bg-blue-100 text-blue-600"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <List size={20} />
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="text"
            placeholder="Cari ruang favorit..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <button
          onClick={() => setShowFilters(!showFilters)}
          className={`flex items-center space-x-2 px-4 py-2 border rounded-lg ${
            showFilters
              ? "bg-blue-50 border-blue-300 text-blue-700"
              : "border-gray-300 text-gray-700 hover:bg-gray-50"
          }`}
        >
          <Filter size={20} />
          <span>Filter</span>
        </button>
      </div>

      {showFilters && (
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Kategori
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option value="">Semua Kategori</option>
                <option value="meeting">Meeting Room</option>
                <option value="ballroom">Ballroom</option>
                <option value="suite">Suite</option>
                <option value="coworking">Coworking</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Lokasi
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option value="">Semua Lokasi</option>
                <option value="jakarta-pusat">Jakarta Pusat</option>
                <option value="jakarta-selatan">Jakarta Selatan</option>
                <option value="jakarta-barat">Jakarta Barat</option>
                <option value="jakarta-utara">Jakarta Utara</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Kapasitas
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option value="">Semua Kapasitas</option>
                <option value="1-10">1-10 orang</option>
                <option value="11-50">11-50 orang</option>
                <option value="51-100">51-100 orang</option>
                <option value="100+">100+ orang</option>
              </select>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const FavoriteCard = ({
  room,
  viewMode,
  onRemoveFavorite,
  onBookNow,
}: {
  room: FavoriteRoom;
  viewMode: string;
  onRemoveFavorite: (id: number) => void;
  onBookNow: (room: FavoriteRoom) => void;
}) => {
  if (viewMode === "list") {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
        <div className="flex items-start space-x-4">
          <img
            src={room.image}
            alt={room.name}
            className="w-24 h-24 rounded-lg object-cover flex-shrink-0"
          />

          <div className="flex-1">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-bold text-gray-900">{room.name}</h3>
              <button
                onClick={() => onRemoveFavorite(room.id)}
                className="text-red-500 hover:text-red-700"
              >
                <Heart size={20} filled={true} />
              </button>
            </div>

            <div className="flex items-center text-gray-600 mb-2">
              <MapPin size={16} className="mr-1" />
              <span className="text-sm">{room.location}</span>
            </div>

            <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
              <div className="flex items-center">
                <Users size={16} className="mr-1" />
                <span>Kapasitas {room.capacity} orang</span>
              </div>
              <span>★ {room.rating}</span>
              <span
                className={`px-2 py-1 rounded-full text-xs ${
                  room.available
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {room.available ? "Tersedia" : "Tidak Tersedia"}
              </span>
            </div>

            <div className="flex flex-wrap gap-2 mb-3">
              {room.facilities
                .slice(0, 3)
                .map((facility: string, index: number) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full"
                  >
                    {facility}
                  </span>
                ))}
              {room.facilities.length > 3 && (
                <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                  +{room.facilities.length - 3} lainnya
                </span>
              )}
            </div>

            <div className="flex justify-between items-center">
              <span className="text-xl font-bold text-blue-600">
                Rp {room.price.toLocaleString("id-ID")}
              </span>
              <div className="flex space-x-2">
                <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                  Detail
                </button>
                <button
                  onClick={() => onBookNow(room)}
                  disabled={!room.available}
                  className={`px-4 py-2 rounded-lg ${
                    room.available
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  {room.available ? "Book Sekarang" : "Tidak Tersedia"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Grid view
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <img
          src={room.image}
          alt={room.name}
          className="w-full h-48 object-cover"
        />
        <button
          onClick={() => onRemoveFavorite(room.id)}
          className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md text-red-500 hover:text-red-700"
        >
          <Heart size={16} filled={true} />
        </button>
        <div
          className={`absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-medium ${
            room.available ? "bg-green-500 text-white" : "bg-red-500 text-white"
          }`}
        >
          {room.available ? "Tersedia" : "Tidak Tersedia"}
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-900 mb-2">{room.name}</h3>

        <div className="flex items-center text-gray-600 mb-2">
          <MapPin size={16} className="mr-1" />
          <span className="text-sm">{room.location}</span>
        </div>

        <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
          <div className="flex items-center">
            <Users size={16} className="mr-1" />
            <span>{room.capacity} orang</span>
          </div>
          <span>★ {room.rating}</span>
        </div>

        <div className="flex flex-wrap gap-1 mb-3">
          {room.facilities
            .slice(0, 2)
            .map((facility: string, index: number) => (
              <span
                key={index}
                className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full"
              >
                {facility}
              </span>
            ))}
          {room.facilities.length > 2 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
              +{room.facilities.length - 2}
            </span>
          )}
        </div>

        <div className="flex justify-between items-center mb-3">
          <span className="text-lg font-bold text-blue-600">
            Rp {room.price.toLocaleString("id-ID")}
          </span>
        </div>

        <div className="flex space-x-2">
          <button className="flex-1 px-3 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 text-sm">
            Detail
          </button>
          <button
            onClick={() => onBookNow(room)}
            disabled={!room.available}
            className={`flex-1 px-3 py-2 rounded-lg text-sm ${
              room.available
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Book
          </button>
        </div>
      </div>
    </div>
  );
};

export default function FavoritesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState("grid");
  const [showFilters, setShowFilters] = useState(false);
  const [favorites, setFavorites] = useState<FavoriteRoom[]>([
    {
      id: 1,
      name: "Premium Meeting Room",
      location: "Jakarta Selatan",
      price: 250000,
      rating: 4.8,
      capacity: 12,
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop",
      facilities: ["WiFi", "Projector", "AC", "Whiteboard"],
      category: "meeting",
      dateAdded: "2024-08-01",
      available: true,
    },
    {
      id: 2,
      name: "Grand Ballroom Elegant",
      location: "Jakarta Pusat",
      price: 2500000,
      rating: 4.9,
      capacity: 200,
      image:
        "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=400&h=300&fit=crop",
      facilities: ["Sound System", "Lighting", "Stage", "Catering"],
      category: "ballroom",
      dateAdded: "2024-07-28",
      available: true,
    },
    {
      id: 3,
      name: "Executive Suite Deluxe",
      location: "Jakarta Barat",
      price: 1500000,
      rating: 4.7,
      capacity: 4,
      image:
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&h=300&fit=crop",
      facilities: ["King Bed", "Living Room", "Kitchenette", "City View"],
      category: "suite",
      dateAdded: "2024-07-25",
      available: false,
    },
    {
      id: 4,
      name: "Creative Studio Space",
      location: "Jakarta Utara",
      price: 180000,
      rating: 4.6,
      capacity: 8,
      image:
        "https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=400&h=300&fit=crop",
      facilities: ["Natural Light", "Art Supplies", "WiFi", "Coffee"],
      category: "coworking",
      dateAdded: "2024-07-22",
      available: true,
    },
    {
      id: 5,
      name: "Modern Conference Hall",
      location: "Jakarta Selatan",
      price: 800000,
      rating: 4.8,
      capacity: 50,
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=300&fit=crop",
      facilities: ["Video Conference", "Microphone", "Recording", "Catering"],
      category: "meeting",
      dateAdded: "2024-07-20",
      available: true,
    },
    {
      id: 6,
      name: "Cozy Private Office",
      location: "Jakarta Pusat",
      price: 120000,
      rating: 4.5,
      capacity: 2,
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=400&h=300&fit=crop",
      facilities: ["Desk", "Chair", "WiFi", "Printer"],
      category: "coworking",
      dateAdded: "2024-07-18",
      available: true,
    },
  ]);

  const filteredFavorites = favorites.filter(
    (room: FavoriteRoom) =>
      room.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      room.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleRemoveFavorite = (roomId: number) => {
    setFavorites(favorites.filter((room: FavoriteRoom) => room.id !== roomId));
  };

  const handleBookNow = (room: FavoriteRoom) => {
    alert(`Membuka halaman booking untuk ${room.name}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <FavoritesHeader
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          viewMode={viewMode}
          setViewMode={setViewMode}
          showFilters={showFilters}
          setShowFilters={setShowFilters}
          totalFavorites={favorites.length}
        />

        {filteredFavorites.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <Heart size={64} className="mx-auto text-gray-300 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {searchTerm
                ? "Tidak ada hasil pencarian"
                : "Belum ada ruang favorit"}
            </h3>
            <p className="text-gray-600 mb-6">
              {searchTerm
                ? `Tidak ditemukan ruang favorit dengan kata kunci "${searchTerm}"`
                : "Mulai tambahkan ruang ke favorit untuk akses yang lebih mudah"}
            </p>
            {!searchTerm && (
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-medium">
                Jelajahi Ruang
              </button>
            )}
          </div>
        ) : (
          <div
            className={
              viewMode === "grid"
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                : "space-y-4"
            }
          >
            {filteredFavorites.map((room: FavoriteRoom) => (
              <FavoriteCard
                key={room.id}
                room={room}
                viewMode={viewMode}
                onRemoveFavorite={handleRemoveFavorite}
                onBookNow={handleBookNow}
              />
            ))}
          </div>
        )}

        {filteredFavorites.length > 0 && (
          <div className="mt-8 bg-white rounded-lg shadow-md p-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  Tips Menggunakan Favorit
                </h3>
                <p className="text-gray-600 text-sm">
                  Maksimalkan penggunaan daftar favorit Anda
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Heart size={16} className="text-red-500" filled={true} />
                  <span className="text-gray-700">
                    Akses cepat ke ruang pilihan
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Bell size={16} className="text-blue-500" />
                  <span className="text-gray-700">Notifikasi promo khusus</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar size={16} className="text-green-500" />
                  <span className="text-gray-700">Booking prioritas</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
