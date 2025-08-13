"use client";
import { useState } from "react";
import Image from "next/image";
import Logo from "../../assets/logo_simashaji.png";
import { usePathname } from "next/navigation";
import Link from "next/link";

// Type definitions
interface SearchFilters {
  location: string;
  date: string;
  capacity: string;
  priceRange: string;
}

interface Room {
  id: number;
  name: string;
  location: string;
  capacity: number;
  price: string;
  rating: number;
  reviews: number;
  availability: string;
  image: string;
  features: string[];
}

interface SearchFiltersProps {
  onSearch: (filters: SearchFilters) => void;
  onFilterChange?: (filters: SearchFilters) => void;
}

interface MeetingRoomCardProps {
  room: Room;
}

// Icon components (reused from your original code)
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

const Monitor = ({
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
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
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

const Clock = ({
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
    <circle cx="12" cy="12" r="10" />
    <polyline points="12,6 12,12 16,14" />
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

const Header = () => {
  const pathname = usePathname(); // Hook untuk mendapatkan path saat ini

  // Function untuk menentukan apakah link sedang aktif
  const isActivePath = (path: string) => {
    return pathname === path;
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Link href="/">
                <Image
                  src={Logo}
                  alt="Simashaji Logo"
                  width={60}
                  height={60}
                  className="rounded-full cursor-pointer"
                />
              </Link>
              <Link
                href="/"
                className="text-xl font-bold text-blue-900 hover:text-blue-700"
              >
                Simashaji
              </Link>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            <Link
              href="/"
              className={`font-bold transition-colors ${
                isActivePath("/")
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              Beranda
            </Link>
            <Link
              href="/meeting-room"
              className={`font-bold transition-colors ${
                isActivePath("/meeting-room")
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              Ruang Rapat
            </Link>
            <Link
              href="/hall"
              className={`font-bold transition-colors ${
                isActivePath("/hall")
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              Aula
            </Link>
            <Link
              href="/rooms"
              className={`font-bold transition-colors ${
                isActivePath("/rooms")
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              Kamar
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link
              href="/auth"
              className="text-gray-700 font-bold hover:text-blue-600 transition-colors"
            >
              Masuk
            </Link>
            <Link
              href="/auth"
              className="bg-blue-600 text-white px-4 py-2 font-bold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Daftar
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

const NavigationLink = ({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`font-bold transition-colors ${
        isActive
          ? "text-blue-600 border-b-2 border-blue-600"
          : "text-gray-700 hover:text-blue-600"
      } ${className}`}
    >
      {children}
    </Link>
  );
};

const HeaderAlternative = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Link href="/">
                <Image
                  src={Logo}
                  alt="Simashaji Logo"
                  width={60}
                  height={60}
                  className="rounded-full cursor-pointer"
                />
              </Link>
              <Link
                href="/"
                className="text-xl font-bold text-blue-900 hover:text-blue-700"
              >
                Simashaji
              </Link>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            <NavigationLink href="/">Beranda</NavigationLink>
            <NavigationLink href="/meeting-room">Ruang Rapat</NavigationLink>
            <NavigationLink href="/hall">Aula</NavigationLink>
            <NavigationLink href="/rooms">Kamar</NavigationLink>
          </nav>

          <div className="flex items-center space-x-4">
            <Link
              href="/auth"
              className="text-gray-700 font-bold hover:text-blue-600 transition-colors"
            >
              Masuk
            </Link>
            <Link
              href="/auth"
              className="bg-blue-600 text-white px-4 py-2 font-bold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Daftar
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

const SearchFilters = ({ onSearch }: SearchFiltersProps) => {
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [capacity, setCapacity] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const handleSearch = () => {
    onSearch({ location, date, capacity, priceRange });
  };

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 mb-8">
      {/* Main search bar */}
      <div className="grid md:grid-cols-5 gap-4 mb-4">
        <div className="relative">
          <MapPin className="absolute left-3 top-3 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Lokasi (Jakarta, Bandung, dll)"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div className="relative">
          <Calendar className="absolute left-3 top-3 text-gray-400" size={20} />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div className="relative">
          <Users className="absolute left-3 top-3 text-gray-400" size={20} />
          <select
            value={capacity}
            onChange={(e) => setCapacity(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
          >
            <option value="">Kapasitas</option>
            <option value="1-5">1-5 orang</option>
            <option value="6-10">6-10 orang</option>
            <option value="11-20">11-20 orang</option>
            <option value="21-50">21-50 orang</option>
            <option value="50+">50+ orang</option>
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
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
        >
          <Search size={20} />
          <span>Cari</span>
        </button>
      </div>

      {/* Additional filters */}
      {showFilters && (
        <div className="border-t pt-4 grid md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Rentang Harga
            </label>
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Semua Harga</option>
              <option value="0-100000">&lt; Rp 100.000</option>
              <option value="100000-300000">Rp 100.000 - 300.000</option>
              <option value="300000-500000">Rp 300.000 - 500.000</option>
              <option value="500000+">&gt; Rp 500.000</option>
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
                <span className="text-sm">Proyektor</span>
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Rating
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
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

const MeetingRoomCard = ({ room }: MeetingRoomCardProps) => {
  const getFeatureIcon = (feature: string) => {
    switch (feature) {
      case "WiFi":
        return <Wifi size={16} />;
      case "Proyektor":
        return <Monitor size={16} />;
      case "Coffee":
        return <Coffee size={16} />;
      case "AC":
        return <Clock size={16} />;
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
        <div className="absolute top-4 left-4 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
          {room.availability}
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-bold text-xl mb-2 text-gray-900">{room.name}</h3>

        <div className="flex items-center text-gray-600 mb-2">
          <MapPin size={16} className="mr-1" />
          <span className="text-sm">{room.location}</span>
        </div>

        <div className="flex items-center text-gray-600 mb-4">
          <Users size={16} className="mr-1" />
          <span className="text-sm">Kapasitas: {room.capacity} orang</span>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {room.features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center space-x-1 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium"
            >
              {getFeatureIcon(feature)}
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <div className="border-t pt-4">
          <div className="flex items-center justify-between mb-3">
            <div>
              <span className="text-2xl font-bold text-blue-600">
                Rp {parseInt(room.price).toLocaleString("id-ID")}
              </span>
              <span className="text-gray-600 text-sm">/hari</span>
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
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

const MeetingRoomsList = () => {
  const [rooms] = useState<Room[]>([
    {
      id: 1,
      name: "Executive Meeting Room",
      location: "Jakarta Selatan - Kemang",
      capacity: 12,
      price: "250000",
      rating: 4.8,
      reviews: 124,
      availability: "Tersedia",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=250&fit=crop",
      features: ["WiFi", "Proyektor", "AC", "Coffee"],
    },
    {
      id: 2,
      name: "Premium Conference Hall",
      location: "Jakarta Pusat - Sudirman",
      capacity: 25,
      price: "450000",
      rating: 4.9,
      reviews: 89,
      availability: "Tersedia",
      image:
        "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=400&h=250&fit=crop",
      features: ["WiFi", "Proyektor", "AC", "Coffee"],
    },
    {
      id: 3,
      name: "Modern Meeting Space",
      location: "Jakarta Barat - Taman Anggrek",
      capacity: 8,
      price: "180000",
      rating: 4.7,
      reviews: 67,
      availability: "Tersedia",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop",
      features: ["WiFi", "Proyektor", "AC"],
    },
    {
      id: 4,
      name: "Corporate Boardroom",
      location: "Jakarta Timur - Kelapa Gading",
      capacity: 15,
      price: "320000",
      rating: 4.6,
      reviews: 45,
      availability: "Tersedia",
      image:
        "https://images.unsplash.com/photo-1582653291997-079a1c04e5a1?w=400&h=250&fit=crop",
      features: ["WiFi", "Proyektor", "AC", "Coffee"],
    },
    {
      id: 5,
      name: "Creative Hub Meeting",
      location: "Jakarta Selatan - SCBD",
      capacity: 20,
      price: "380000",
      rating: 4.8,
      reviews: 92,
      availability: "Tersedia",
      image:
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400&h=250&fit=crop",
      features: ["WiFi", "Proyektor", "AC", "Coffee"],
    },
    {
      id: 6,
      name: "Small Team Room",
      location: "Jakarta Pusat - Menteng",
      capacity: 6,
      price: "120000",
      rating: 4.5,
      reviews: 38,
      availability: "Tersedia",
      image:
        "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=400&h=250&fit=crop",
      features: ["WiFi", "Proyektor", "AC"],
    },
  ]);

  const [sortBy, setSortBy] = useState("recommended");

  const handleSearch = (filters: SearchFilters) => {
    console.log("Search filters:", filters);
    // Implement search logic here
  };

  const sortedRooms = [...rooms].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return parseInt(a.price) - parseInt(b.price);
      case "price-high":
        return parseInt(b.price) - parseInt(a.price);
      case "rating":
        return b.rating - a.rating;
      case "capacity":
        return b.capacity - a.capacity;
      default:
        return 0;
    }
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Search and Filters */}
      <SearchFilters onSearch={handleSearch} />

      {/* Results Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Ruang Rapat di Jakarta
          </h2>
          <p className="text-gray-600">{rooms.length} ruang tersedia</p>
        </div>

        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600">Urutkan:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="recommended">Direkomendasikan</option>
            <option value="price-low">Harga Terendah</option>
            <option value="price-high">Harga Tertinggi</option>
            <option value="rating">Rating Tertinggi</option>
            <option value="capacity">Kapasitas Terbesar</option>
          </select>
        </div>
      </div>

      {/* Rooms Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sortedRooms.map((room) => (
          <MeetingRoomCard key={room.id} room={room} />
        ))}
      </div>

      {/* Load More Button */}
      <div className="text-center mt-12">
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
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
            <Image
              src={Logo}
              alt="Simashaji Logo"
              width={60}
              height={60}
              className="rounded-full"
            />
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

export default function MeetingRoomsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <MeetingRoomsList />
      <Footer />
    </div>
  );
}

export { Header, HeaderAlternative, NavigationLink };
