"use client";
import { useState } from "react";
import Image from "next/image";
import Logo from "../../assets/logo_simashaji.png";

// Type definitions
interface SearchFilters {
  location: string;
  checkIn: string;
  checkOut: string;
  guests: string;
  priceRange: string;
}

interface Room {
  id: number;
  name: string;
  location: string;
  bedType: string;
  price: string;
  rating: number;
  reviews: number;
  availability: string;
  image: string;
  features: string[];
  roomSize: string;
  maxGuests: number;
  hotelName: string;
}

interface SearchFiltersProps {
  onSearch: (filters: SearchFilters) => void;
  onFilterChange?: (filters: SearchFilters) => void;
}

interface RoomCardProps {
  room: Room;
}

// Icon components
const Search = ({
  size = 20,
  className = "",
}: {
  size?: number;
  className?: string;
}) => (
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

const MapPin = ({
  size = 20,
  className = "",
}: {
  size?: number;
  className?: string;
}) => (
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

const Calendar = ({
  size = 20,
  className = "",
}: {
  size?: number;
  className?: string;
}) => (
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

const Users = ({
  size = 20,
  className = "",
}: {
  size?: number;
  className?: string;
}) => (
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

const Star = ({
  size = 20,
  className = "",
}: {
  size?: number;
  className?: string;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
  </svg>
);

const Wifi = ({
  size = 20,
  className = "",
}: {
  size?: number;
  className?: string;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <path d="M5 12.55a11 11 0 0 1 14.08 0" />
    <path d="M1.42 9a16 16 0 0 1 21.16 0" />
    <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
    <line x1="12" y1="20" x2="12.01" y2="20" />
  </svg>
);

const Tv = ({
  size = 20,
  className = "",
}: {
  size?: number;
  className?: string;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <rect x="2" y="7" width="20" height="15" rx="2" ry="2" />
    <polyline points="17,2 12,7 7,2" />
  </svg>
);

const Coffee = ({
  size = 20,
  className = "",
}: {
  size?: number;
  className?: string;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
    <line x1="6" y1="1" x2="6" y2="4" />
    <line x1="10" y1="1" x2="10" y2="4" />
    <line x1="14" y1="1" x2="14" y2="4" />
  </svg>
);

const Car = ({
  size = 20,
  className = "",
}: {
  size?: number;
  className?: string;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11V7a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v4L3.16 11.86A1 1 0 0 0 2.32 12.85V16H5" />
    <circle cx="6.5" cy="16.5" r="2.5" />
    <circle cx="17.5" cy="16.5" r="2.5" />
  </svg>
);

const Wind = ({
  size = 20,
  className = "",
}: {
  size?: number;
  className?: string;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
    <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
    <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
  </svg>
);

const Utensils = ({
  size = 20,
  className = "",
}: {
  size?: number;
  className?: string;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
    <path d="M7 2v20" />
    <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3z" />
  </svg>
);

const Shield = ({
  size = 20,
  className = "",
}: {
  size?: number;
  className?: string;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const Filter = ({
  size = 20,
  className = "",
}: {
  size?: number;
  className?: string;
}) => (
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

const ChevronDown = ({
  size = 20,
  className = "",
}: {
  size?: number;
  className?: string;
}) => (
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

const Header = () => (
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
            Beranda
          </a>
          <a href="#" className="text-gray-700 font-bold hover:text-blue-600">
            Ruang Rapat
          </a>
          <a href="#" className="text-gray-700 font-bold hover:text-blue-600">
            Aula
          </a>
          <a
            href="#"
            className="text-blue-600 font-bold border-b-2 border-blue-600"
          >
            Kamar
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <button className="text-gray-700 font-bold hover:text-blue-600">
            Masuk
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 font-bold rounded-lg hover:bg-blue-700 transition-colors">
            Daftar
          </button>
        </div>
      </div>
    </div>
  </header>
);

const SearchFilters = ({ onSearch }: SearchFiltersProps) => {
  const [location, setLocation] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const handleSearch = () => {
    onSearch({ location, checkIn, checkOut, guests, priceRange });
  };

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 mb-8">
      <div className="grid md:grid-cols-6 gap-4 mb-4">
        <div className="relative">
          <MapPin className="absolute left-3 top-3 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Lokasi (Jakarta, Bandung, dll)"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>

        <div className="relative">
          <Calendar className="absolute left-3 top-3 text-gray-400" size={20} />
          <input
            type="date"
            placeholder="Check-in"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>

        <div className="relative">
          <Calendar className="absolute left-3 top-3 text-gray-400" size={20} />
          <input
            type="date"
            placeholder="Check-out"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>

        <div className="relative">
          <Users className="absolute left-3 top-3 text-gray-400" size={20} />
          <select
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none"
          >
            <option value="">Tamu</option>
            <option value="1">1 orang</option>
            <option value="2">2 orang</option>
            <option value="3">3 orang</option>
            <option value="4">4 orang</option>
            <option value="5+">5+ orang</option>
          </select>
          <ChevronDown
            className="absolute right-3 top-3 text-gray-400 pointer-events-none"
            size={20}
          />
        </div>

        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center justify-center space-x-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <Filter size={20} />
          <span>Filter</span>
        </button>

        <button
          onClick={handleSearch}
          className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
        >
          <Search size={20} />
          <span>Cari</span>
        </button>
      </div>

      {/* Additional filters */}
      {showFilters && (
        <div className="border-t pt-4 grid md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Rentang Harga
            </label>
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="">Semua Harga</option>
              <option value="0-300000">&lt; Rp 300.000</option>
              <option value="300000-500000">Rp 300.000 - 500.000</option>
              <option value="500000-1000000">Rp 500.000 - 1.000.000</option>
              <option value="1000000+">&gt; Rp 1.000.000</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Jenis Tempat Tidur
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
              <option value="">Semua Jenis</option>
              <option value="single">Single Bed</option>
              <option value="double">Double Bed</option>
              <option value="twin">Twin Beds</option>
              <option value="suite">Suite</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Fasilitas
            </label>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">WiFi Gratis</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">Sarapan</span>
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Rating
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
              <option value="">Semua Rating</option>
              <option value="4.5+">4.5+ Bintang</option>
              <option value="4.0+">4.0+ Bintang</option>
              <option value="3.5+">3.5+ Bintang</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

const RoomCard = ({ room }: RoomCardProps) => {
  const getFeatureIcon = (feature: string) => {
    switch (feature) {
      case "WiFi":
        return <Wifi size={16} />;
      case "TV":
        return <Tv size={16} />;
      case "AC":
        return <Wind size={16} />;
      case "Breakfast":
        return <Utensils size={16} />;
      case "Parking":
        return <Car size={16} />;
      case "Safe":
        return <Shield size={16} />;
      case "Coffee":
        return <Coffee size={16} />;
      default:
        return <MapPin size={16} />;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="relative">
        <img
          src={room.image}
          alt={room.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full shadow-lg">
          <div className="flex items-center space-x-1">
            <Star className="text-yellow-400 fill-current" size={16} />
            <span className="text-sm font-medium">{room.rating}</span>
          </div>
        </div>
        <div className="absolute top-4 left-4 bg-green-600 text-white px-2 py-1 rounded-full text-xs font-medium">
          {room.availability}
        </div>
      </div>

      <div className="p-6">
        <div className="mb-2">
          <span className="text-sm text-gray-500">{room.hotelName}</span>
        </div>

        <h3 className="font-bold text-xl mb-2 text-gray-900">{room.name}</h3>

        <div className="flex items-center text-gray-600 mb-2">
          <MapPin size={16} className="mr-1" />
          <span className="text-sm">{room.location}</span>
        </div>

        <div className="flex items-center text-gray-600 mb-2">
          <Users size={16} className="mr-1" />
          <span className="text-sm">Maksimal: {room.maxGuests} tamu</span>
        </div>

        <div className="text-gray-600 mb-2">
          <span className="text-sm font-medium">
            {room.bedType} • {room.roomSize}
          </span>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {room.features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center space-x-1 bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-medium"
            >
              {getFeatureIcon(feature)}
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <div className="border-t pt-4">
          <div className="flex items-center justify-between mb-3">
            <div>
              <span className="text-2xl font-bold text-green-600">
                Rp {parseInt(room.price).toLocaleString("id-ID")}
              </span>
              <span className="text-gray-600 text-sm">/malam</span>
            </div>
            <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors font-semibold">
              Pesan Sekarang
            </button>
          </div>

          <div className="text-sm text-gray-600">
            <span>{room.reviews} ulasan</span>
            <span className="mx-2">•</span>
            <span className="text-green-600 font-medium">
              Gratis pembatalan
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const RoomsList = () => {
  const [rooms] = useState<Room[]>([
    {
      id: 1,
      name: "Superior Double Room",
      hotelName: "Hotel Kemang Elite",
      location: "Jakarta Selatan - Kemang",
      bedType: "King Bed",
      roomSize: "30 m²",
      maxGuests: 2,
      price: "850000",
      rating: 4.8,
      reviews: 256,
      availability: "Tersedia",
      image:
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=250&fit=crop",
      features: ["WiFi", "TV", "AC", "Breakfast", "Safe"],
    },
    {
      id: 2,
      name: "Executive Suite",
      hotelName: "Grand Hotel SCBD",
      location: "Jakarta Selatan - SCBD",
      bedType: "King Bed",
      roomSize: "55 m²",
      maxGuests: 4,
      price: "990000",
      rating: 4.9,
      reviews: 189,
      availability: "Tersedia",
      image:
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=400&h=250&fit=crop",
      features: ["WiFi", "TV", "AC", "Breakfast", "Parking", "Safe", "Coffee"],
    },
    {
      id: 3,
      name: "Deluxe Twin Room",
      hotelName: "City Hotel Menteng",
      location: "Jakarta Pusat - Menteng",
      bedType: "Twin Beds",
      roomSize: "25 m²",
      maxGuests: 2,
      price: "650000",
      rating: 4.6,
      reviews: 134,
      availability: "Tersedia",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=250&fit=crop",
      features: ["WiFi", "TV", "AC", "Breakfast"],
    },
    {
      id: 4,
      name: "Family Room",
      hotelName: "Comfort Inn Grogol",
      location: "Jakarta Barat - Grogol",
      bedType: "2 Double Beds",
      roomSize: "40 m²",
      maxGuests: 4,
      price: "950000",
      rating: 4.7,
      reviews: 98,
      availability: "Tersedia",
      image:
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&h=250&fit=crop",
      features: ["WiFi", "TV", "AC", "Breakfast", "Parking"],
    },
    {
      id: 5,
      name: "Premium Single Room",
      hotelName: "Business Hotel Cawang",
      location: "Jakarta Timur - Cawang",
      bedType: "Single Bed",
      roomSize: "20 m²",
      maxGuests: 1,
      price: "480000",
      rating: 4.5,
      reviews: 76,
      availability: "Tersedia",
      image:
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=400&h=250&fit=crop",
      features: ["WiFi", "TV", "AC", "Safe"],
    },
    {
      id: 6,
      name: "Junior Suite",
      hotelName: "Luxury Hotel Pondok Indah",
      location: "Jakarta Selatan - Pondok Indah",
      bedType: "King Bed",
      roomSize: "45 m²",
      maxGuests: 3,
      price: "350000",
      rating: 4.8,
      reviews: 167,
      availability: "Tersedia",
      image:
        "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&h=250&fit=crop",
      features: ["WiFi", "TV", "AC", "Breakfast", "Parking", "Safe", "Coffee"],
    },
  ]);

  const [sortBy, setSortBy] = useState("recommended");

  const handleSearch = (filters: SearchFilters) => {
    console.log("Search filters:", filters);
  };

  const sortedRooms = [...rooms].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return parseInt(a.price) - parseInt(b.price);
      case "price-high":
        return parseInt(b.price) - parseInt(a.price);
      case "rating":
        return b.rating - a.rating;
      case "guests":
        return b.maxGuests - a.maxGuests;
      default:
        return 0;
    }
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <SearchFilters onSearch={handleSearch} />

      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Kamar Hotel Terbaik di Jakarta
          </h2>
          <p className="text-gray-600">{rooms.length} kamar tersedia</p>
        </div>

        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600">Urutkan:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          >
            <option value="recommended">Direkomendasikan</option>
            <option value="price-low">Harga Terendah</option>
            <option value="price-high">Harga Tertinggi</option>
            <option value="rating">Rating Tertinggi</option>
            <option value="guests">Kapasitas Tamu</option>
          </select>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sortedRooms.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>

      <div className="text-center mt-12">
        <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold">
          Muat Lebih Banyak
        </button>
      </div>
    </div>
  );
};

const Footer = () => (
  <footer className="bg-gray-900 text-white py-12 mt-16">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="text-xl font-bold">Simashaji</span>
          </div>
          <p className="text-gray-400">
            Platform terpercaya untuk menyewa ruang rapat, aula, dan kamar
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-4">Layanan</h4>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="#" className="hover:text-white">
                Ruang Rapat
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Aula
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Kamar
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">Bantuan</h4>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="#" className="hover:text-white">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Kontak
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Syarat & Ketentuan
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">Kontak</h4>
          <div className="space-y-2 text-gray-400">
            <div className="flex items-center space-x-2">
              <span>+62 21 1234 5678</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>WhatsApp Support</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; 2024 Simashaji. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default function KamarPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Kamar Hotel Terbaik</h1>
          <p className="text-xl text-green-100">
            Temukan kamar hotel yang nyaman untuk perjalanan bisnis atau liburan
            Anda
          </p>
        </div>
      </div>

      <RoomsList />
      <Footer />
    </div>
  );
}
