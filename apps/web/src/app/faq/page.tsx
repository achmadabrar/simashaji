"use client";
import { useState } from "react";
import Image from "next/image";
import Logo from "../assets/logo_simashaji.png";

// Icon components
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

const Mail = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
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

const CreditCard = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
    <line x1="1" y1="10" x2="23" y2="10" />
  </svg>
);

const Shield = ({ size = 20, className = "" }) => (
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

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

interface FAQCategoryProps {
  title: string;
  icon: React.ReactNode;
  faqs: FAQItem[];
  searchTerm: string;
}

const FAQCategory = ({ title, icon, faqs, searchTerm }: FAQCategoryProps) => {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggleItem = (id: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  // Filter FAQs based on search term
  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (filteredFaqs.length === 0) return null;

  return (
    <div className="mb-8">
      <div className="flex items-center space-x-3 mb-6">
        <div className="text-blue-600">{icon}</div>
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
      </div>

      <div className="space-y-4">
        {filteredFaqs.map((faq) => (
          <div
            key={faq.id}
            className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden"
          >
            <button
              onClick={() => toggleItem(faq.id)}
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <span className="font-semibold text-gray-900 pr-4">
                {faq.question}
              </span>
              <ChevronDown
                className={`text-gray-500 transition-transform duration-200 ${
                  openItems.has(faq.id) ? "transform rotate-180" : ""
                }`}
                size={20}
              />
            </button>

            {openItems.has(faq.id) && (
              <div className="px-6 pb-4">
                <div className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const faqData = [
    // Booking & Reservasi
    {
      id: 1,
      question: "Bagaimana cara melakukan booking ruang?",
      answer:
        "Anda dapat melakukan booking dengan cara: 1) Pilih ruang yang diinginkan dari daftar yang tersedia, 2) Klik 'Lihat Detail' untuk melihat informasi lengkap, 3) Pilih tanggal dan waktu yang diinginkan, 4) Klik 'Booking Sekarang', 5) Isi form booking dengan data lengkap, 6) Lakukan pembayaran sesuai instruksi yang diberikan.",
      category: "booking",
    },
    {
      id: 2,
      question: "Berapa lama sebelumnya saya harus melakukan booking?",
      answer:
        "Untuk ruang rapat dan aula, kami merekomendasikan booking minimal 24 jam sebelum waktu yang diinginkan. Untuk event besar atau hari-hari peak (weekend, hari libur), sebaiknya booking 3-7 hari sebelumnya. Untuk kamar hotel, booking bisa dilakukan hingga 2 jam sebelum check-in tergantung ketersediaan.",
      category: "booking",
    },
    {
      id: 3,
      question: "Apakah saya bisa mengubah atau membatalkan booking?",
      answer:
        "Ya, Anda dapat mengubah atau membatalkan booking dengan ketentuan: 1) Perubahan booking dapat dilakukan minimal 12 jam sebelum waktu yang telah dipesan, 2) Pembatalan gratis dapat dilakukan minimal 24 jam sebelumnya, 3) Pembatalan kurang dari 24 jam akan dikenakan biaya administrasi 25% dari total booking, 4) Untuk pembatalan di hari yang sama, biaya admin 50%.",
      category: "booking",
    },
    {
      id: 4,
      question: "Bagaimana jika ruang yang saya inginkan sudah terbooked?",
      answer:
        "Jika ruang sudah terbooked, Anda bisa: 1) Pilih waktu alternatif lainnya, 2) Lihat rekomendasi ruang serupa yang tersedia, 3) Gunakan fitur 'Waitlist' untuk mendapat notifikasi jika ada pembatalan, 4) Hubungi customer service untuk bantuan mencari alternatif ruang yang sesuai kebutuhan Anda.",
      category: "booking",
    },

    // Pembayaran
    {
      id: 5,
      question: "Metode pembayaran apa saja yang diterima?",
      answer:
        "Simashaji menerima berbagai metode pembayaran: 1) Transfer Bank (BCA, Mandiri, BNI, BRI), 2) E-wallet (OVO, GoPay, Dana, ShopeePay), 3) Kartu Kredit/Debit (Visa, Mastercard), 4) Virtual Account, 5) Pembayaran tunai di lokasi (untuk beberapa venue tertentu). Semua transaksi aman dan terenkripsi.",
      category: "payment",
    },
    {
      id: 6,
      question: "Kapan saya harus melakukan pembayaran?",
      answer:
        "Pembayaran dilakukan setelah konfirmasi booking. Untuk booking hari ini, pembayaran harus diselesaikan dalam 1 jam. Untuk booking advance, Anda memiliki waktu 24 jam untuk menyelesaikan pembayaran. Jika tidak dibayar dalam batas waktu tersebut, booking akan otomatis dibatalkan.",
      category: "payment",
    },
    {
      id: 7,
      question: "Apakah ada biaya tambahan selain harga sewa?",
      answer:
        "Harga yang tertera sudah termasuk: fasilitas dasar ruangan, cleaning service, dan security. Biaya tambahan mungkin berlaku untuk: overtime (melebihi durasi sewa), catering service, dekorasi tambahan, equipment tambahan yang tidak termasuk paket, dan damage/kehilangan property venue.",
      category: "payment",
    },
    {
      id: 8,
      question: "Bagaimana sistem refund jika ada pembatalan?",
      answer:
        "Sistem refund Simashaji: 1) Pembatalan >48 jam: 100% refund, 2) Pembatalan 24-48 jam: 75% refund, 3) Pembatalan <24 jam: 50% refund, 4) No-show: no refund, 5) Refund diproses dalam 3-7 hari kerja ke rekening/metode pembayaran asli. Untuk pembatalan dari pihak venue, 100% refund + kompensasi.",
      category: "payment",
    },

    // Fasilitas & Layanan
    {
      id: 9,
      question: "Fasilitas apa saja yang tersedia di ruang meeting?",
      answer:
        "Fasilitas standar ruang meeting meliputi: AC, WiFi unlimited, meja dan kursi sesuai kapasitas, whiteboard/flipchart, proyektor & screen, sound system basic, air mineral, dan akses toilet bersih. Beberapa ruang premium juga dilengkapi smart TV, video conference facility, coffee/tea station, dan dedicated parking.",
      category: "facilities",
    },
    {
      id: 10,
      question: "Apakah tersedia catering service?",
      answer:
        "Ya, tersedia layanan catering dengan pilihan: 1) Paket coffee break (snack + minuman), 2) Paket lunch box, 3) Paket prasmanan, 4) Custom menu sesuai request. Anda juga boleh membawa catering sendiri atau menggunakan vendor rekomendasi kami. Harga catering terpisah dari sewa ruangan dan dapat dipesan saat booking.",
      category: "facilities",
    },
    {
      id: 11,
      question: "Bagaimana dengan fasilitas parkir?",
      answer:
        "Sebagian besar venue menyediakan area parkir gratis dengan kapasitas terbatas. Untuk event besar, kami menyarankan koordinasi sebelumnya. Beberapa lokasi di area perkotaan mungkin memiliki biaya parkir terpisah. Informasi detail parkir tersedia di deskripsi masing-masing venue.",
      category: "facilities",
    },
    {
      id: 12,
      question: "Apakah ruangan bisa digunakan diluar jam operasional?",
      answer:
        "Jam operasional standar adalah 08:00-22:00. Penggunaan di luar jam tersebut dimungkinkan dengan biaya overtime dan harus dikonfirmasi terlebih dahulu dengan venue. Biaya overtime biasanya 25-50% dari tarif normal per jam. Beberapa venue 24 jam juga tersedia untuk kebutuhan khusus.",
      category: "facilities",
    },

    // Teknis & Support
    {
      id: 13,
      question: "Bagaimana jika ada kendala teknis saat menggunakan ruangan?",
      answer:
        "Tim support kami siap membantu 24/7. Jika ada kendala: 1) Hubungi nomor emergency yang tertera di ruangan, 2) Contact WhatsApp customer service, 3) Staff teknis akan datang maksimal 15 menit, 4) Jika masalah tidak bisa diselesaikan, kami akan provide ruang pengganti atau refund sesuai kebijakan.",
      category: "support",
    },
    {
      id: 14,
      question: "Bagaimana cara menghubungi customer service?",
      answer:
        "Customer service Simashaji dapat dihubungi melalui: 1) WhatsApp: +62 812-3456-7890 (24/7), 2) Telepon: (021) 1234-5678 (08:00-22:00), 3) Email: support@simashaji.com, 4) Live chat di website, 5) Form contact di aplikasi. Response time rata-rata <30 menit untuk WhatsApp dan <2 jam untuk email.",
      category: "support",
    },
    {
      id: 15,
      question: "Apakah ada aplikasi mobile Simashaji?",
      answer:
        "Saat ini Simashaji tersedia dalam bentuk web responsive yang bisa diakses melalui browser mobile dengan lancar. Aplikasi mobile native untuk Android dan iOS sedang dalam tahap pengembangan dan akan segera diluncurkan dengan fitur-fitur yang lebih lengkap dan user-friendly.",
      category: "support",
    },

    // Akun & Keamanan
    {
      id: 16,
      question: "Apakah saya harus membuat akun untuk booking?",
      answer:
        "Ya, pembuatan akun diperlukan untuk: 1) Menyimpan history booking, 2) Mendapat notifikasi dan reminder, 3) Akses ke member discounts, 4) Kemudahan re-booking, 5) Customer support yang lebih personal. Proses registrasi mudah dan cepat, hanya perlu email, nomor HP, dan password.",
      category: "account",
    },
    {
      id: 17,
      question: "Bagaimana keamanan data pribadi saya?",
      answer:
        "Simashaji sangat menjaga keamanan data dengan: 1) Enkripsi SSL 256-bit untuk semua transaksi, 2) Server security berlapis dengan firewall, 3) Data disimpan sesuai standar ISO 27001, 4) Tidak membagi data ke pihak ketiga tanpa izin, 5) Regular security audit oleh third-party, 6) Compliance dengan regulasi perlindungan data Indonesia.",
      category: "account",
    },
    {
      id: 18,
      question: "Bagaimana cara reset password jika lupa?",
      answer:
        "Untuk reset password: 1) Klik 'Lupa Password' di halaman login, 2) Masukkan email terdaftar, 3) Cek email untuk link reset password, 4) Klik link dan buat password baru, 5) Login dengan password baru. Jika tidak menerima email, cek folder spam atau hubungi customer service untuk bantuan.",
      category: "account",
    },
  ];

  // Group FAQs by category
  const categories = [
    {
      key: "booking",
      title: "Booking & Reservasi",
      icon: <Clock size={24} />,
    },
    {
      key: "payment",
      title: "Pembayaran & Refund",
      icon: <CreditCard size={24} />,
    },
    {
      key: "facilities",
      title: "Fasilitas & Layanan",
      icon: <Users size={24} />,
    },
    {
      key: "support",
      title: "Teknis & Support",
      icon: <MessageCircle size={24} />,
    },
    {
      key: "account",
      title: "Akun & Keamanan",
      icon: <Shield size={24} />,
    },
  ];

  const hasSearchResults =
    searchTerm &&
    categories.some((category) =>
      faqData
        .filter((faq) => faq.category === category.key)
        .some(
          (faq) =>
            faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Temukan jawaban untuk pertanyaan yang sering diajukan tentang
            Simashaji
          </p>

          {/* Search Box */}
          {/* <div className="relative max-w-2xl mx-auto">
            <Search
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Cari pertanyaan atau topik..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-4 focus:ring-blue-300 focus:outline-none text-lg"
            />
          </div> */}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {categories.map((category) => {
          const categoryFaqs = faqData.filter(
            (faq) => faq.category === category.key
          );
          return (
            <FAQCategory
              key={category.key}
              title={category.title}
              icon={category.icon}
              faqs={categoryFaqs}
              searchTerm={searchTerm}
            />
          );
        })}

        {/* No Results */}
        {searchTerm && !hasSearchResults && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search size={64} className="mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Tidak ada hasil yang ditemukan
            </h3>
            <p className="text-gray-500">
              Coba gunakan kata kunci yang berbeda atau hubungi customer service
            </p>
          </div>
        )}
      </div>

      {/* Contact Section */}
      <div className="bg-white border-t">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Tidak menemukan jawaban yang Anda cari?
            </h2>
            <p className="text-gray-600">
              Tim customer service kami siap membantu Anda 24/7
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <Phone className="mx-auto mb-4 text-blue-600" size={32} />
              <h3 className="font-semibold text-gray-900 mb-2">Telepon</h3>
              <p className="text-gray-600 mb-3">(021) 1234-5678</p>
              <p className="text-sm text-gray-500">Senin-Minggu, 08:00-22:00</p>
            </div>

            <div className="text-center p-6 bg-green-50 rounded-lg">
              <MessageCircle
                className="mx-auto mb-4 text-green-600"
                size={32}
              />
              <h3 className="font-semibold text-gray-900 mb-2">WhatsApp</h3>
              <p className="text-gray-600 mb-3">+62 812-3456-7890</p>
              <p className="text-sm text-gray-500">
                24/7 - Response &lt;30 menit
              </p>
            </div>

            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <Mail className="mx-auto mb-4 text-purple-600" size={32} />
              <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600 mb-3">support@simashaji.com</p>
              <p className="text-sm text-gray-500">Response &lt;2 jam</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Hubungi Customer Service
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
