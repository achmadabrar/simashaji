"use client";
import { useState } from "react";
import Image from "next/image";
import Logo from "../assets/logo_simashaji.png";
import ChatIcon from "../assets/chat_icon.svg";
import SearchIcon from "../assets/search_icon.png";
import StarIcon from "../assets/star.png";

// Type definitions
type TabId = "ruang-rapat" | "aula" | "kamar";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeTab: TabId;
}

interface Tab {
  id: TabId;
  label: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

interface Space {
  id: number;
  name: string;
  location: string;
  price: string;
  rating: number;
  reviews: number;
  image: string;
  features: string[];
}

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

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

const Star = ({ size = 20, className = "" }) => (
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

const Phone = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const MessageCircle = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
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

const Wifi = ({ size = 20, className = "" }) => (
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

const Coffee = ({ size = 20, className = "" }) => (
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

const Bed = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <path d="M2 4v16" />
    <path d="M2 8h18a2 2 0 0 1 2 2v10" />
    <path d="M2 17h20" />
    <path d="M6 8V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4" />
  </svg>
);

const Moon = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
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

const BookingModal = ({ isOpen, onClose, activeTab }: BookingModalProps) => {
  const [location, setLocation] = useState("");
  const [checkInDate, setCheckInDate] = useState("2025-08-11");
  const [checkOutDate, setCheckOutDate] = useState("2025-08-12");
  const [duration, setDuration] = useState("1 malam");
  const [guests, setGuests] = useState("2 Dewasa, 0 Anak, 1 Kamar");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 overflow-hidden">
        {/* Header */}
        <div className="bg-blue-50 p-6 border-b">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Search className="text-blue-600" size={24} />
              <span className="text-blue-600 font-semibold text-lg">
                {activeTab === "kamar"
                  ? "Hotel yang Terakhir Dilihat"
                  : "Cari Ruang"}
              </span>
            </div>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Location Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Kota, tujuan, atau nama hotel
            </label>
            <div className="relative">
              <MapPin
                className="absolute left-3 top-3 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Kota, hotel, tempat wisata"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Date Section */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Check-in:
              </label>
              <div className="relative">
                <Calendar
                  className="absolute left-3 top-3 text-gray-400"
                  size={16}
                />
                <input
                  type="date"
                  value={checkInDate}
                  onChange={(e) => setCheckInDate(e.target.value)}
                  className="w-full pl-9 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Check-out:
              </label>
              <div className="text-sm font-medium text-gray-900 py-3">
                Sel, 12 Ags 2025
              </div>
            </div>
          </div>

          {/* Duration */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Durasi
            </label>
            <div className="relative">
              <Moon className="absolute left-3 top-3 text-gray-400" size={16} />
              <select
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="w-full pl-9 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none text-sm"
              >
                <option value="1 malam">1 malam</option>
                <option value="2 malam">2 malam</option>
                <option value="3 malam">3 malam</option>
                <option value="1 minggu">1 minggu</option>
              </select>
              <ChevronDown
                className="absolute right-3 top-3 text-gray-400"
                size={16}
              />
            </div>
          </div>

          {/* Guests and Rooms */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tamu dan Kamar
            </label>
            <div className="relative">
              <Users
                className="absolute left-3 top-3 text-gray-400"
                size={16}
              />
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full pl-9 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none text-sm"
              >
                <option value="2 Dewasa, 0 Anak, 1 Kamar">
                  2 Dewasa, 0 Anak, 1 Kamar
                </option>
                <option value="1 Dewasa, 0 Anak, 1 Kamar">
                  1 Dewasa, 0 Anak, 1 Kamar
                </option>
                <option value="2 Dewasa, 1 Anak, 1 Kamar">
                  2 Dewasa, 1 Anak, 1 Kamar
                </option>
                <option value="4 Dewasa, 0 Anak, 2 Kamar">
                  4 Dewasa, 0 Anak, 2 Kamar
                </option>
              </select>
              <ChevronDown
                className="absolute right-3 top-3 text-gray-400"
                size={16}
              />
            </div>
          </div>

          {/* Pay at Hotel Option */}
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-center space-x-2 text-blue-600">
              <div className="w-5 h-5 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">$</span>
              </div>
              <span className="text-sm font-medium">Bayar di Hotel</span>
            </div>
          </div>

          {/* Search Button */}
          <button
            onClick={onClose}
            className="w-full bg-orange-500 text-white py-4 rounded-lg font-semibold text-lg hover:bg-orange-600 transition-colors flex items-center justify-center space-x-2"
          >
            <Search size={20} />
            <span>Cari</span>
          </button>
        </div>
      </div>
    </div>
  );
};

const SearchSection = () => {
  const [activeTab, setActiveTab] = useState<TabId>("ruang-rapat");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [location, setLocation] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [capacity, setCapacity] = useState<string>("");

  const tabs: Tab[] = [
    { id: "ruang-rapat", label: "Ruang Rapat", icon: Users },
    { id: "aula", label: "Aula", icon: MapPin },
    { id: "kamar", label: "Kamar", icon: Bed },
  ];

  const handleTabClick = (tabId: TabId) => {
    setActiveTab(tabId);
    if (tabId === "kamar") {
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Temukan Ruang Ideal untuk Kebutuhan Anda
            </h1>
            <p className="text-xl text-gray-600">
              Sewa ruang rapat, aula, dan kamar dengan mudah dan terpercaya
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            {/* Tabs */}
            <div className="flex space-x-1 bg-gray-100 rounded-lg p-1 mb-6">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => handleTabClick(tab.id)}
                    className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-lg font-medium transition-all ${
                      activeTab === tab.id
                        ? "bg-white text-blue-600 shadow-sm"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    <Icon size={20} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Search Form - Only show for non-kamar tabs */}
            {activeTab !== "kamar" && (
              <div className="grid md:grid-cols-4 gap-4">
                <div className="relative">
                  <MapPin
                    className="absolute left-3 top-3 text-gray-400"
                    size={20}
                  />
                  <input
                    type="text"
                    placeholder="Lokasi"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
                  />
                </div>

                <div className="relative">
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-400"
                  />
                </div>

                <div className="relative">
                  <Users
                    className="absolute left-3 top-3 text-gray-400"
                    size={20}
                  />
                  <select
                    value={capacity}
                    onChange={(e) => setCapacity(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none text-gray-400"
                  >
                    <option value="">Kapasitas</option>
                    <option value="1-10">1-10 orang</option>
                    <option value="11-25">11-25 orang</option>
                    <option value="26-50">26-50 orang</option>
                    <option value="50+">50+ orang</option>
                  </select>
                </div>

                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
                  <span>Cari</span>
                </button>
              </div>
            )}

            {/* Kamar tab message */}
            {activeTab === "kamar" && (
              <div className="text-center py-8">
                <Bed className="mx-auto mb-4 text-blue-600" size={48} />
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                  Pencarian Hotel & Kamar
                </h3>
                <p className="text-gray-600 mb-4">
                  Klik tab Kamar untuk membuka form pencarian hotel
                </p>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Buka Pencarian Hotel
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        activeTab={activeTab}
      />
    </>
  );
};

const FeaturedSpaces = () => {
  const spaces: Space[] = [
    {
      id: 1,
      name: "Meeting Room Premium",
      location: "Jakarta Selatan",
      price: "150000",
      rating: 4.8,
      reviews: 124,
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=250&fit=crop",
      features: ["WiFi", "Proyektor", "AC", "Coffee"],
    },
    {
      id: 2,
      name: "Grand Ballroom",
      location: "Jakarta Pusat",
      price: "2500000",
      rating: 4.9,
      reviews: 89,
      image:
        "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=400&h=250&fit=crop",
      features: ["Sound System", "Stage", "AC", "Catering"],
    },
    {
      id: 3,
      name: "Executive Suite",
      location: "Jakarta Barat",
      price: "350000",
      rating: 4.7,
      reviews: 67,
      image:
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&h=250&fit=crop",
      features: ["King Bed", "WiFi", "Mini Bar", "City View"],
    },
  ];

  const getFeatureIcon = (feature: string): React.ReactNode => {
    switch (feature) {
      case "WiFi":
        return <Wifi size={16} />;
      case "Coffee":
        return <Coffee size={16} />;
      case "AC":
        return <Clock size={16} />;
      default:
        return <MapPin size={16} />;
    }
  };

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ruang Pilihan Terbaik
          </h2>
          <p className="text-gray-600">
            Dipilih khusus untuk pengalaman terbaik Anda
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {spaces.map((space) => (
            <div
              key={space.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative">
                <img
                  src={space.image}
                  alt={space.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full">
                  <div className="flex items-center space-x-1">
                    <Star className="text-yellow-400 fill-current" size={16} />
                    <span className="text-sm font-medium">{space.rating}</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-bold text-lg mb-2 text-gray-900">
                  {space.name}
                </h3>
                <div className="flex items-center text-gray-600 mb-3">
                  <MapPin size={16} className="mr-1" />
                  <span className="text-sm">{space.location}</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {space.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center space-x-1 bg-gray-100 px-2 py-1 rounded-full text-xs"
                    >
                      {getFeatureIcon(feature)}
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-blue-600">
                      Rp {parseInt(space.price).toLocaleString("id-ID")}
                    </span>
                    <span className="text-gray-600 text-sm">/hari</span>
                  </div>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Lihat Detail
                  </button>
                </div>

                <div className="mt-3 text-sm text-gray-600">
                  {space.reviews} ulasan
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const WhyChooseUs = () => {
  const features: Feature[] = [
    {
      icon: <Image src={SearchIcon} alt="Search Icon" width={60} height={60} />,
      title: "Pencarian Mudah",
      description:
        "Temukan ruang yang tepat dengan filter pencarian yang lengkap dan akurat",
    },
    {
      icon: <ChatIcon width={48} height={48} />,
      title: "Customer Support 24/7",
      description:
        "Tim support kami siap membantu Anda kapan saja melalui WhatsApp",
    },
    {
      icon: <Image src={StarIcon} alt="Search Icon" width={60} height={60} />,
      title: "Kualitas Terjamin",
      description:
        "Semua ruang telah terverifikasi dan memiliki standar kualitas tinggi",
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Mengapa Pilih Simashaji?
          </h2>
          <p className="text-gray-600">
            Kami memberikan pengalaman terbaik untuk kebutuhan ruang Anda
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="text-blue-600 mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-400">
                {feature.title}
              </h3>

              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Footer = () => (
  <footer className="bg-gray-900 text-white py-12">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <Image
              src={Logo}
              alt="Simashaji Logo"
              width={60}
              height={60}
              // Hapus className="rounded-full" untuk menghilangkan lingkaran putih
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
              <Phone size={16} />
              <span>+62 21 1234 5678</span>
            </div>
            <div className="flex items-center space-x-2">
              <MessageCircle size={16} />
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

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <SearchSection />
      <FeaturedSpaces />
      <WhyChooseUs />
      <Footer />
    </div>
  );
}
