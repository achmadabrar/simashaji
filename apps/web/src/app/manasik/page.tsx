"use client";
import { useState } from "react";
import Image from "next/image";
import Logo from "../../assets/logo_simashaji.png";
import { usePathname } from "next/navigation";
import Link from "next/link";

// Icon Components
const BookOpen = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
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

const Heart = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const Play = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <polygon points="5,3 19,12 5,21" />
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

const ChevronRight = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <polyline points="9,18 15,12 9,6" />
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

const Compass = ({ size = 20, className = "" }) => (
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
    <polygon points="16.24,7.76 14.12,14.12 7.76,16.24 9.88,9.88" />
  </svg>
);

// Header Component
const Header = () => {
  const pathname = usePathname();

  const isActivePath = (path: string) => {
    return pathname === path;
  };

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
              href="/manasik"
              className={`font-bold transition-colors ${
                isActivePath("/manasik")
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              Manasik
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

// Hero Section
const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-br from-green-600 via-green-700 to-emerald-800 text-white py-20">
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 text-center">
        <div className="mb-6">
          <Compass className="mx-auto mb-4 text-yellow-300" size={64} />
        </div>
        <h1 className="text-5xl font-bold mb-6">
          Panduan Manasik Haji & Umrah
        </h1>
        <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
          Pelajari tata cara ibadah haji dan umrah yang benar dengan panduan
          lengkap, video tutorial, dan doa-doa yang diperlukan dalam menjalani
          rukun Islam yang kelima
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
            Pesan Sekarang
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-700 transition-colors">
            Download Panduan
          </button>
        </div>
      </div>
    </div>
  );
};

// Quick Access Section
const QuickAccessSection = () => {
  const quickAccess = [
    {
      title: "Panduan Haji",
      description: "Tata cara lengkap ibadah haji",
      icon: <Compass className="text-green-600" size={32} />,
      color: "bg-green-50 border-green-200",
    },
    {
      title: "Panduan Umrah",
      description: "Tata cara lengkap ibadah umrah",
      icon: <Heart className="text-blue-600" size={32} />,
      color: "bg-blue-50 border-blue-200",
    },
    {
      title: "Doa-doa Penting",
      description: "Kumpulan doa haji dan umrah",
      icon: <BookOpen className="text-purple-600" size={32} />,
      color: "bg-purple-50 border-purple-200",
    },
    {
      title: "Video Tutorial",
      description: "Panduan visual manasik",
      icon: <Play className="text-red-600" size={32} />,
      color: "bg-red-50 border-red-200",
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Akses Cepat Panduan
          </h2>
          <p className="text-gray-600">
            Pilih kategori panduan yang ingin Anda pelajari
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickAccess.map((item, index) => (
            <div
              key={index}
              className={`${item.color} border-2 rounded-xl p-6 text-center hover:shadow-lg transition-all cursor-pointer`}
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{item.description}</p>
              <button className="text-blue-600 font-semibold hover:text-blue-800 transition-colors flex items-center justify-center mx-auto">
                Pelajari <ChevronRight size={16} className="ml-1" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Manasik Steps Section
const ManasikStepsSection = () => {
  const [activeTab, setActiveTab] = useState("haji");

  const hajiSteps = [
    {
      title: "1. Ihram",
      description: "Niat dan berpakaian ihram dari miqat",
      details:
        "Mandi, niat, dan mengenakan kain ihram sebelum memasuki tanah suci",
      icon: <Users className="text-green-600" size={24} />,
    },
    {
      title: "2. Tawaf",
      description: "Mengelilingi Ka'bah sebanyak 7 kali",
      details: "Dimulai dari Hajar Aswad dan berakhir di Hajar Aswad",
      icon: <Compass className="text-green-600" size={24} />,
    },
    {
      title: "3. Sa'i",
      description: "Berlari-lari kecil antara Safa dan Marwah",
      details: "Dilakukan sebanyak 7 kali dimulai dari bukit Safa",
      icon: <MapPin className="text-green-600" size={24} />,
    },
    {
      title: "4. Wukuf di Arafah",
      description: "Berdiri di padang Arafah pada 9 Dzulhijjah",
      details:
        "Rukun haji yang paling penting, dilakukan dari dzuhur hingga maghrib",
      icon: <Clock className="text-green-600" size={24} />,
    },
    {
      title: "5. Mabit di Muzdalifah",
      description: "Bermalam di Muzdalifah setelah dari Arafah",
      details: "Mengumpulkan kerikil untuk melempar jumrah",
      icon: <Star className="text-green-600" size={24} />,
    },
    {
      title: "6. Lempar Jumrah",
      description: "Melempar jumrah di Mina",
      details:
        "Melempar jumrah kubra pada 10 Dzulhijjah dan jumrah lainnya pada hari tasyrik",
      icon: <MapPin className="text-green-600" size={24} />,
    },
  ];

  const umrahSteps = [
    {
      title: "1. Ihram",
      description: "Niat dan berpakaian ihram dari miqat",
      details:
        "Mandi, niat, dan mengenakan kain ihram sebelum memasuki tanah suci",
      icon: <Users className="text-blue-600" size={24} />,
    },
    {
      title: "2. Tawaf",
      description: "Mengelilingi Ka'bah sebanyak 7 kali",
      details: "Dimulai dari Hajar Aswad dan berakhir di Hajar Aswad",
      icon: <Compass className="text-blue-600" size={24} />,
    },
    {
      title: "3. Shalat 2 Rakaat",
      description: "Shalat sunnah di belakang Maqam Ibrahim",
      details: "Dilakukan setelah selesai tawaf",
      icon: <BookOpen className="text-blue-600" size={24} />,
    },
    {
      title: "4. Sa'i",
      description: "Berlari-lari kecil antara Safa dan Marwah",
      details: "Dilakukan sebanyak 7 kali dimulai dari bukit Safa",
      icon: <MapPin className="text-blue-600" size={24} />,
    },
    {
      title: "5. Tahallul",
      description: "Mencukur atau menggunting rambut",
      details: "Menandai selesainya ibadah umrah dan keluar dari ihram",
      icon: <Heart className="text-blue-600" size={24} />,
    },
  ];

  const currentSteps = activeTab === "haji" ? hajiSteps : umrahSteps;

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Tata Cara Manasik
          </h2>
          <p className="text-gray-600">
            Pelajari langkah-langkah ibadah haji dan umrah secara berurutan
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setActiveTab("haji")}
              className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                activeTab === "haji"
                  ? "bg-green-600 text-white shadow-md"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Panduan Haji
            </button>
            <button
              onClick={() => setActiveTab("umrah")}
              className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                activeTab === "umrah"
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Panduan Umrah
            </button>
          </div>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentSteps.map((step, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-100 rounded-xl p-6 hover:shadow-lg hover:border-gray-200 transition-all"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">{step.icon}</div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2 text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-gray-700 mb-3 font-medium">
                    {step.description}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.details}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            className={`${
              activeTab === "haji"
                ? "bg-green-600 hover:bg-green-700"
                : "bg-blue-600 hover:bg-blue-700"
            } text-white px-8 py-3 rounded-lg font-semibold transition-colors`}
          >
            Download Panduan Lengkap
          </button>
        </div>
      </div>
    </div>
  );
};

// Prayer Section
const PrayerSection = () => {
  const [selectedPrayer, setSelectedPrayer] = useState(null);

  const prayers = [
    {
      title: "Doa Niat Haji",
      arabic: "لَبَّيْكَ اللَّهُمَّ حَجًّا",
      transliteration: "Labbaika Allahumma hajjan",
      translation: "Ya Allah, aku penuhi panggilan-Mu untuk berhaji",
      category: "haji",
    },
    {
      title: "Doa Niat Umrah",
      arabic: "لَبَّيْكَ اللَّهُمَّ عُمْرَةً",
      transliteration: "Labbaika Allahumma 'umratan",
      translation: "Ya Allah, aku penuhi panggilan-Mu untuk berumrah",
      category: "umrah",
    },
    {
      title: "Doa Talbiyah",
      arabic:
        "لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ، لَبَّيْكَ لاَ شَرِيْكَ لَكَ لَبَّيْكَ، إِنَّ الْحَمْدَ وَالنِّعْمَةَ لَكَ وَالْمُلْكَ لاَ شَرِيْكَ لَكَ",
      transliteration:
        "Labbaika Allahumma labbaik, labbaika laa syariika laka labbaik, innal hamda wan ni'mata laka wal mulka laa syariika lak",
      translation:
        "Aku penuhi panggilan-Mu ya Allah, aku penuhi panggilan-Mu. Aku penuhi panggilan-Mu, tidak ada sekutu bagi-Mu, aku penuhi panggilan-Mu. Sesungguhnya segala puji, nikmat dan kerajaan adalah milik-Mu, tidak ada sekutu bagi-Mu",
      category: "both",
    },
    {
      title: "Doa Melihat Ka'bah",
      arabic:
        "اللَّهُمَّ زِدْ هَذَا الْبَيْتَ تَشْرِيْفاً وَتَعْظِيْماً وَتَكْرِيْماً وَمَهَابَةً، وَزِدْ مَنْ شَرَّفَهُ وَكَرَّمَهُ مِمَّنْ حَجَّهُ أَوِ اعْتَمَرَهُ تَشْرِيْفاً وَتَكْرِيْماً وَتَعْظِيْماً وَبِرّاً",
      transliteration:
        "Allahumma zid haadzal baita tasyriifan wa ta'zhiiman wa takriiman wa mahaabatan, wa zid man syarrafahu wa karramahu mimman hajjahu awi'tamarahu tasyriifan wa takriiman wa ta'zhiiman wa birran",
      translation:
        "Ya Allah, tambahkanlah bagi rumah ini (Ka'bah) kehormatan, keagungan, kemuliaan dan kewibawaan. Dan tambahkanlah orang yang menghormatinya dan memuliakannya di antara orang-orang yang berhaji atau berumrah dengan kehormatan, kemuliaan, keagungan dan kebajikan",
      category: "both",
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Doa-doa Penting
          </h2>
          <p className="text-gray-600">
            Kumpulan doa yang diamalkan dalam ibadah haji dan umrah
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {prayers.map((prayer, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-bold text-lg text-gray-900">
                  {prayer.title}
                </h3>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    prayer.category === "haji"
                      ? "bg-green-100 text-green-800"
                      : prayer.category === "umrah"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-purple-100 text-purple-800"
                  }`}
                >
                  {prayer.category === "both"
                    ? "Haji & Umrah"
                    : prayer.category === "haji"
                    ? "Haji"
                    : "Umrah"}
                </span>
              </div>

              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-right text-xl leading-relaxed text-gray-900 font-arabic">
                    {prayer.arabic}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">
                    Transliterasi:
                  </h4>
                  <p className="text-gray-700 italic">
                    {prayer.transliteration}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Artinya:</h4>
                  <p className="text-gray-700">{prayer.translation}</p>
                </div>
              </div>

              <div className="flex space-x-2 mt-4 pt-4 border-t">
                <button className="flex items-center space-x-1 text-blue-600 hover:text-blue-800 transition-colors">
                  <Play size={16} />
                  <span className="text-sm">Putar Audio</span>
                </button>
                <button className="flex items-center space-x-1 text-green-600 hover:text-green-800 transition-colors">
                  <Download size={16} />
                  <span className="text-sm">Download</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Resources Section
const ResourcesSection = () => {
  const resources = [
    {
      title: "Panduan Lengkap Haji",
      description: "E-book komprehensif tentang tata cara haji dari A-Z",
      type: "PDF",
      size: "2.5 MB",
      downloads: 1234,
      icon: <BookOpen className="text-red-600" size={24} />,
    },
    {
      title: "Video Tutorial Umrah",
      description: "Seri video panduan umrah step by step",
      type: "Video",
      size: "120 MB",
      downloads: 856,
      icon: <Play className="text-blue-600" size={24} />,
    },
    {
      title: "Audio Doa Manasik",
      description: "Kumpulan audio doa-doa haji dan umrah",
      type: "MP3",
      size: "45 MB",
      downloads: 642,
      icon: <Clock className="text-green-600" size={24} />,
    },
    {
      title: "Checklist Persiapan",
      description: "Daftar persiapan lengkap sebelum berangkat",
      type: "PDF",
      size: "1.2 MB",
      downloads: 978,
      icon: <Heart className="text-purple-600" size={24} />,
    },
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Sumber Daya Manasik
          </h2>
          <p className="text-gray-600">
            Download panduan, video, dan audio untuk persiapan ibadah Anda
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-100 rounded-xl p-6 hover:shadow-lg hover:border-blue-200 transition-all group"
            >
              <div className="text-center">
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform">
                  {resource.icon}
                </div>

                <h3 className="font-bold text-lg mb-2 text-gray-900">
                  {resource.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {resource.description}
                </p>

                <div className="flex justify-between items-center text-xs text-gray-500 mb-4">
                  <span>{resource.type}</span>
                  <span>{resource.size}</span>
                </div>

                <div className="text-xs text-gray-500 mb-4">
                  {resource.downloads.toLocaleString()} downloads
                </div>

                <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
                  <Download size={16} />
                  <span>Download</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// FAQ Section
const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "Apa perbedaan antara haji dan umrah?",
      answer:
        "Haji adalah rukun Islam kelima yang wajib dilakukan sekali seumur hidup bagi yang mampu, dilakukan pada bulan Dzulhijjah dengan rangkaian ibadah yang lebih lengkap termasuk wukuf di Arafah. Umrah adalah ibadah sunnah yang dapat dilakukan kapan saja sepanjang tahun dengan rangkaian ibadah yang lebih sederhana.",
    },
    {
      question: "Kapan waktu yang tepat untuk melakukan umrah?",
      answer:
        "Umrah dapat dilakukan sepanjang tahun, namun ada beberapa waktu yang lebih utama seperti bulan Ramadan, Rajab, dan Sya'ban. Hindari melakukan umrah pada tanggal 9-13 Dzulhijjah karena bertepatan dengan waktu haji.",
    },
    {
      question: "Apa yang harus dipersiapkan sebelum berangkat?",
      answer:
        "Persiapan meliputi: dokumen (paspor, visa, sertifikat vaksin), kesehatan (medical check-up, vaksinasi), pengetahuan manasik, persiapan mental dan spiritual, serta perlengkapan seperti pakaian ihram, obat-obatan, dan keperluan pribadi lainnya.",
    },
    {
      question: "Bagaimana cara melakukan ihram yang benar?",
      answer:
        "Ihram dilakukan dengan: 1) Mandi sunnah, 2) Memakai pakaian ihram (untuk pria: 2 helai kain putih tidak berjahit, untuk wanita: pakaian biasa yang menutup aurat), 3) Shalat sunnah ihram 2 rakaat, 4) Berniat ihram, 5) Membaca talbiyah.",
    },
    {
      question: "Apa yang tidak boleh dilakukan saat ihram?",
      answer:
        "Larangan ihram meliputi: mencukur rambut, memotong kuku, memakai wewangian, bersetubuh, berburu, menikah atau menikahkan orang lain, bertengkar dan berbuat maksiat. Untuk pria khususnya: menutup kepala dan memakai pakaian berjahit.",
    },
    {
      question: "Berapa kali melakukan tawaf dan sa'i?",
      answer:
        "Tawaf dilakukan 7 kali putaran mengelilingi Ka'bah, dimulai dan diakhiri di Hajar Aswad. Sa'i dilakukan 7 kali lari kecil antara bukit Safa dan Marwah, dimulai dari Safa dan berakhir di Marwah.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Pertanyaan yang Sering Ditanyakan
          </h2>
          <p className="text-gray-600">
            Temukan jawaban atas pertanyaan umum seputar haji dan umrah
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`text-gray-500 transform transition-transform ${
                    openFAQ === index ? "rotate-180" : ""
                  }`}
                  size={20}
                />
              </button>

              {openFAQ === index && (
                <div className="px-6 pb-4">
                  <div className="border-t pt-4">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600 mb-4">
            Tidak menemukan jawaban yang Anda cari?
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Hubungi Ustadz
          </button>
        </div>
      </div>
    </div>
  );
};

// Footer Component
const Footer = () => (
  <footer className="bg-gray-900 text-white py-12">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <Image src={Logo} alt="Simashaji Logo" width={60} height={60} />
            <span className="text-xl font-bold">Simashaji</span>
          </div>
          <p className="text-gray-400">
            Platform terpercaya untuk panduan ibadah haji dan umrah
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-4">Panduan</h4>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="#" className="hover:text-white">
                Manasik Haji
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Manasik Umrah
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Doa-doa
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Video Tutorial
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
                Konsultasi Ustadz
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
            <p>Email: info@simashaji.com</p>
            <p>WhatsApp: +62 812-3456-7890</p>
            <p>Alamat: Jakarta, Indonesia</p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; 2024 Simashaji. All rights reserved. Barakallahu fiikum.</p>
      </div>
    </div>
  </footer>
);

// Main Component
export default function ManasikPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <QuickAccessSection />
      <ManasikStepsSection />
      <PrayerSection />
      <ResourcesSection />
      <FAQSection />
      <Footer />
    </div>
  );
}
