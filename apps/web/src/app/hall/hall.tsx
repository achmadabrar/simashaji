"use client";
import { useState } from "react";

// Type definitions
interface SearchFilters {
  location: string;
  date: string;
  capacity: string;
  priceRange: string;
}

interface Hall {
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
  size: string;
  eventTypes: string[];
}

interface SearchFiltersProps {
  onSearch: (filters: SearchFilters) => void;
  onFilterChange?: (filters: SearchFilters) => void;
}

interface HallCardProps {
  hall: Hall;
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

const Music = ({
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
    <path d="M9 18V5l12-2v13" />
    <circle cx="6" cy="18" r="3" />
    <circle cx="18" cy="16" r="3" />
  </svg>
);

const Mic = ({
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
    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
    <line x1="12" y1="19" x2="12" y2="23" />
    <line x1="8" y1="23" x2="16" y2="23" />
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

const Zap = ({
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
    <polygon points="13,2 3,14 12,14 11,22 21,10 12,10" />
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
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
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
          <a
            href="#"
            className="text-blue-600 font-bold border-b-2 border-blue-600"
          >
            Aula
          </a>
          <a href="#" className="text-gray-700 font-bold hover:text-blue-600">
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
  const [date, setDate] = useState("");
  const [capacity, setCapacity] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const handleSearch = () => {
    onSearch({ location, date, capacity, priceRange });
  };

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 mb-8">
      <div className="grid md:grid-cols-5 gap-4 mb-4">
        <div className="relative">
          <MapPin className="absolute left-3 top-3 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Lokasi (Jakarta, Bandung, dll)"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>

        <div className="relative">
          <Calendar className="absolute left-3 top-3 text-gray-400" size={20} />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>

        <div className="relative">
          <Users className="absolute left-3 top-3 text-gray-400" size={20} />
          <select
            value={capacity}
            onChange={(e) => setCapacity(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none"
          >
            <option value="">Kapasitas</option>
            <option value="50-100">50-100 orang</option>
            <option value="100-200">100-200 orang</option>
            <option value="200-500">200-500 orang</option>
            <option value="500-1000">500-1000 orang</option>
            <option value="1000+">1000+ orang</option>
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
          className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2"
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
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="">Semua Harga</option>
              <option value="0-1000000">&lt; Rp 1.000.000</option>
              <option value="1000000-3000000">Rp 1.000.000 - 3.000.000</option>
              <option value="3000000-5000000">Rp 3.000.000 - 5.000.000</option>
              <option value="5000000+">&gt; Rp 5.000.000</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Jenis Acara
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
              <option value="">Semua Jenis</option>
              <option value="wedding">Pernikahan</option>
              <option value="corporate">Corporate Event</option>
              <option value="seminar">Seminar</option>
              <option value="exhibition">Pameran</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Fasilitas
            </label>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">Sound System</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">Parkir</span>
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Rating
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
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

const HallCard = ({ hall }: HallCardProps) => {
  const getFeatureIcon = (feature: string) => {
    switch (feature) {
      case "Sound System":
        return <Music size={16} />;
      case "Microphone":
        return <Mic size={16} />;
      case "Parkir":
        return <Car size={16} />;
      case "AC":
        return <Wind size={16} />;
      case "Lighting":
        return <Zap size={16} />;
      default:
        return <MapPin size={16} />;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="relative">
        <img
          src={hall.image}
          alt={hall.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full shadow-lg">
          <div className="flex items-center space-x-1">
            <Star className="text-yellow-400 fill-current" size={16} />
            <span className="text-sm font-medium">{hall.rating}</span>
          </div>
        </div>
        <div className="absolute top-4 left-4 bg-purple-600 text-white px-2 py-1 rounded-full text-xs font-medium">
          {hall.availability}
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-bold text-xl mb-2 text-gray-900">{hall.name}</h3>

        <div className="flex items-center text-gray-600 mb-2">
          <MapPin size={16} className="mr-1" />
          <span className="text-sm">{hall.location}</span>
        </div>

        <div className="flex items-center text-gray-600 mb-2">
          <Users size={16} className="mr-1" />
          <span className="text-sm">Kapasitas: {hall.capacity} orang</span>
        </div>

        <div className="text-gray-600 mb-4">
          <span className="text-sm font-medium">Ukuran: {hall.size}</span>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {hall.features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center space-x-1 bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-xs font-medium"
            >
              {getFeatureIcon(feature)}
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {hall.eventTypes.map((type, index) => (
            <div
              key={index}
              className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
            >
              {type}
            </div>
          ))}
        </div>

        <div className="border-t pt-4">
          <div className="flex items-center justify-between mb-3">
            <div>
              <span className="text-2xl font-bold text-purple-600">
                Rp {parseInt(hall.price).toLocaleString("id-ID")}
              </span>
              <span className="text-gray-600 text-sm">/hari</span>
            </div>
            <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors font-semibold">
              Pesan Sekarang
            </button>
          </div>

          <div className="text-sm text-gray-600">
            <span>{hall.reviews} ulasan</span>
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

const HallsList = () => {
  const [halls] = useState<Hall[]>([
    {
      id: 1,
      name: "Grand Ballroom Kemang",
      location: "Jakarta Selatan - Kemang",
      capacity: 500,
      price: "8000000",
      rating: 4.9,
      reviews: 156,
      availability: "Tersedia",
      image:
        "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=400&h=250&fit=crop",
      features: ["Sound System", "Microphone", "Parkir", "AC", "Lighting"],
      size: "800 m²",
      eventTypes: ["Pernikahan", "Corporate", "Seminar"],
    },
    {
      id: 2,
      name: "Crystal Hall SCBD",
      location: "Jakarta Selatan - SCBD",
      capacity: 800,
      price: "15000000",
      rating: 4.8,
      reviews: 89,
      availability: "Tersedia",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=250&fit=crop",
      features: ["Sound System", "Microphone", "Parkir", "AC", "Lighting"],
      size: "1200 m²",
      eventTypes: ["Pernikahan", "Corporate", "Pameran"],
    },
    {
      id: 3,
      name: "Elegant Hall Menteng",
      location: "Jakarta Pusat - Menteng",
      capacity: 300,
      price: "5000000",
      rating: 4.7,
      reviews: 124,
      availability: "Tersedia",
      image:
        "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&h=250&fit=crop",
      features: ["Sound System", "Microphone", "AC"],
      size: "600 m²",
      eventTypes: ["Pernikahan", "Corporate"],
    },
    {
      id: 4,
      name: "Modern Convention Center",
      location: "Jakarta Barat - Grogol",
      capacity: 1000,
      price: "20000000",
      rating: 4.9,
      reviews: 67,
      availability: "Tersedia",
      image:
        "https://images.unsplash.com/photo-1595113316349-9fa4eb24f884?w=400&h=250&fit=crop",
      features: ["Sound System", "Microphone", "Parkir", "AC", "Lighting"],
      size: "1500 m²",
      eventTypes: ["Corporate", "Seminar", "Pameran"],
    },
    {
      id: 5,
      name: "Royal Banquet Hall",
      location: "Jakarta Timur - Cawang",
      capacity: 600,
      price: "12000000",
      rating: 4.6,
      reviews: 98,
      availability: "Tersedia",
      image:
        "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&h=250&fit=crop",
      features: ["Sound System", "Microphone", "Parkir", "AC"],
      size: "1000 m²",
      eventTypes: ["Pernikahan", "Corporate"],
    },
    {
      id: 6,
      name: "Garden Hall Pondok Indah",
      location: "Jakarta Selatan - Pondok Indah",
      capacity: 400,
      price: "7000000",
      rating: 4.8,
      reviews: 112,
      availability: "Tersedia",
      image:
        "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=400&h=250&fit=crop",
      features: ["Sound System", "Microphone", "Parkir", "AC"],
      size: "800 m²",
      eventTypes: ["Pernikahan", "Corporate", "Seminar"],
    },
  ]);

  const [sortBy, setSortBy] = useState("recommended");

  const handleSearch = (filters: SearchFilters) => {
    console.log("Search filters:", filters);
  };

  const sortedHalls = [...halls].sort((a, b) => {
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
      <SearchFilters onSearch={handleSearch} />

      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Aula Terbaik di Jakarta
          </h2>
          <p className="text-gray-600">{halls.length} aula tersedia</p>
        </div>

        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600">Urutkan:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            <option value="recommended">Direkomendasikan</option>
            <option value="price-low">Harga Terendah</option>
            <option value="price-high">Harga Tertinggi</option>
            <option value="rating">Rating Tertinggi</option>
            <option value="capacity">Kapasitas Terbesar</option>
          </select>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sortedHalls.map((hall) => (
          <HallCard key={hall.id} hall={hall} />
        ))}
      </div>

      <div className="text-center mt-12">
        <button className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors font-semibold">
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

export default function AulaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">
            Aula Terbaik untuk Acara Istimewa
          </h1>
          <p className="text-xl text-purple-100">
            Temukan aula yang sempurna untuk pernikahan, seminar, dan acara
            besar lainnya
          </p>
        </div>
      </div>

      <HallsList />
      <Footer />
    </div>
  );
}
