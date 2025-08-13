"use client";
import { useState } from "react";

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

const FileText = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
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

const AlertCircle = ({ size = 20, className = "" }) => (
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
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
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

const Scale = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <path d="M16 11c0 2.21-1.79 4-4 4s-4-1.79-4-4v-1h8v1z" />
    <path d="M12 2v9" />
    <path d="M21 6l-3 6h-12l-3-6" />
    <path d="M3 6h18" />
  </svg>
);

interface TermSection {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
}

interface TableOfContentsProps {
  sections: TermSection[];
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
}

interface TermsSectionProps {
  section: TermSection;
  isActive: boolean;
}

const TableOfContents = ({
  sections,
  activeSection,
  onSectionClick,
}: TableOfContentsProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 sticky top-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Daftar Isi</h3>
      <ul className="space-y-2">
        {sections.map((section: TermSection) => (
          <li key={section.id}>
            <button
              onClick={() => onSectionClick(section.id)}
              className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                activeSection === section.id
                  ? "bg-blue-50 text-blue-700 font-medium"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <div className="flex items-center space-x-3">
                <div
                  className={
                    activeSection === section.id
                      ? "text-blue-600"
                      : "text-gray-400"
                  }
                >
                  {section.icon}
                </div>
                <span className="text-sm">{section.title}</span>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const TermsSection = ({ section, isActive }: TermsSectionProps) => {
  return (
    <section
      id={section.id}
      className={`mb-12 scroll-mt-24 ${
        isActive ? "ring-2 ring-blue-200 rounded-lg" : ""
      }`}
    >
      <div className="flex items-center space-x-3 mb-6">
        <div className="text-blue-600">{section.icon}</div>
        <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
      </div>
      <div className="bg-white border border-gray-200 rounded-lg p-8">
        {section.content}
      </div>
    </section>
  );
};

export default function TermsConditionsPage() {
  const [activeSection, setActiveSection] = useState<string>("general");

  const sections: TermSection[] = [
    {
      id: "general",
      title: "Ketentuan Umum",
      icon: <FileText size={20} />,
      content: (
        <div className="prose prose-gray max-w-none">
          <p className="mb-4">
            Selamat datang di Simashaji. Dengan menggunakan layanan kami, Anda
            menyetujui untuk terikat oleh syarat dan ketentuan berikut. Harap
            membaca dengan seksama sebelum menggunakan platform kami.
          </p>

          <h4 className="text-lg font-semibold mb-3">Definisi</h4>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>
              <strong>"Simashaji"</strong> merujuk pada platform booking ruang
              online yang dioperasikan oleh PT Simashaji Indonesia
            </li>
            <li>
              <strong>"Pengguna"</strong> adalah individu atau entitas yang
              menggunakan layanan Simashaji
            </li>
            <li>
              <strong>"Venue"</strong> adalah pemilik atau pengelola
              ruang/fasilitas yang terdaftar di platform
            </li>
            <li>
              <strong>"Booking"</strong> adalah reservasi ruang yang dibuat
              melalui platform Simashaji
            </li>
          </ul>

          <h4 className="text-lg font-semibold mb-3">Penerimaan Syarat</h4>
          <p className="mb-4">
            Dengan mengakses atau menggunakan layanan Simashaji, Anda menyatakan
            bahwa Anda telah membaca, memahami, dan menyetujui untuk terikat
            oleh syarat dan ketentuan ini. Jika Anda tidak setuju dengan syarat
            ini, mohon untuk tidak menggunakan layanan kami.
          </p>

          <h4 className="text-lg font-semibold mb-3">Perubahan Syarat</h4>
          <p>
            Simashaji berhak untuk mengubah syarat dan ketentuan ini
            sewaktu-waktu. Perubahan akan diberitahukan melalui email atau
            notifikasi di platform. Penggunaan berkelanjutan setelah perubahan
            dianggap sebagai penerimaan terhadap syarat baru.
          </p>
        </div>
      ),
    },
    {
      id: "booking",
      title: "Kebijakan Booking",
      icon: <Clock size={20} />,
      content: (
        <div className="prose prose-gray max-w-none">
          <h4 className="text-lg font-semibold mb-3">Proses Booking</h4>
          <ol className="list-decimal list-inside space-y-2 mb-6">
            <li>
              Pilih ruang dan waktu yang diinginkan dari daftar yang tersedia
            </li>
            <li>Isi formulir booking dengan informasi lengkap dan akurat</li>
            <li>Lakukan pembayaran sesuai dengan metode yang dipilih</li>
            <li>Konfirmasi booking akan dikirim via email dan notifikasi</li>
            <li>Tunjukkan bukti booking saat check-in di venue</li>
          </ol>

          <h4 className="text-lg font-semibold mb-3">Persyaratan Booking</h4>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>
              Pengguna harus berusia minimal 18 tahun atau memiliki izin orang
              tua/wali
            </li>
            <li>
              Informasi yang diberikan harus akurat dan dapat diverifikasi
            </li>
            <li>Satu booking hanya berlaku untuk satu sesi penggunaan ruang</li>
            <li>Booking minimal dilakukan 2 jam sebelum waktu penggunaan</li>
          </ul>

          <h4 className="text-lg font-semibold mb-3">
            Konfirmasi dan Perubahan
          </h4>
          <p className="mb-4">
            Booking dianggap confirmed setelah pembayaran berhasil diproses.
            Perubahan jadwal dapat dilakukan minimal 12 jam sebelum waktu
            booking dengan subject to availability. Perubahan kapasitas atau
            fasilitas tambahan memerlukan approval dari venue.
          </p>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <AlertCircle className="text-yellow-600 mt-0.5" size={20} />
              <div>
                <h5 className="font-medium text-yellow-800">Penting</h5>
                <p className="text-yellow-700 text-sm mt-1">
                  Venue berhak menolak booking jika tidak memenuhi persyaratan
                  atau melanggar aturan yang ditetapkan.
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "payment",
      title: "Pembayaran & Refund",
      icon: <CreditCard size={20} />,
      content: (
        <div className="prose prose-gray max-w-none">
          <h4 className="text-lg font-semibold mb-3">Metode Pembayaran</h4>
          <p className="mb-4">Simashaji menerima pembayaran melalui:</p>
          <ul className="list-disc list-inside space-y-1 mb-6">
            <li>Transfer bank (BCA, Mandiri, BNI, BRI)</li>
            <li>E-wallet (GoPay, OVO, Dana, ShopeePay)</li>
            <li>Kartu kredit/debit (Visa, Mastercard)</li>
            <li>Virtual account</li>
            <li>QRIS</li>
          </ul>

          <h4 className="text-lg font-semibold mb-3">Ketentuan Pembayaran</h4>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>
              Pembayaran harus dilakukan dalam waktu 24 jam setelah booking
              dibuat
            </li>
            <li>
              Booking otomatis dibatalkan jika pembayaran tidak diterima dalam
              batas waktu
            </li>
            <li>Semua harga sudah termasuk pajak yang berlaku</li>
            <li>
              Biaya tambahan (overtime, damage, dll) dibayar langsung ke venue
            </li>
          </ul>

          <h4 className="text-lg font-semibold mb-3">Kebijakan Refund</h4>
          <div className="bg-gray-50 rounded-lg p-4 mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-2">Waktu Pembatalan</th>
                  <th className="text-left py-2">Refund</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-2">&gt; 48 jam sebelum booking</td>
                  <td className="py-2 text-green-600 font-medium">100%</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2">24-48 jam sebelum booking</td>
                  <td className="py-2 text-yellow-600 font-medium">75%</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2">&lt; 24 jam sebelum booking</td>
                  <td className="py-2 text-orange-600 font-medium">50%</td>
                </tr>
                <tr>
                  <td className="py-2">No-show</td>
                  <td className="py-2 text-red-600 font-medium">0%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-600">
            Refund diproses dalam 3-7 hari kerja ke rekening asal. Untuk
            pembatalan dari pihak venue, Pengguna berhak mendapat 100% refund
            plus kompensasi.
          </p>
        </div>
      ),
    },
    {
      id: "usage",
      title: "Aturan Penggunaan",
      icon: <Users size={20} />,
      content: (
        <div className="prose prose-gray max-w-none">
          <h4 className="text-lg font-semibold mb-3">Kewajiban Pengguna</h4>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>
              Menggunakan ruang sesuai dengan kapasitas dan fungsi yang
              ditentukan
            </li>
            <li>
              Menjaga kebersihan dan kerapihan ruang selama dan setelah
              penggunaan
            </li>
            <li>Mematuhi peraturan venue dan tidak mengganggu pengguna lain</li>
            <li>
              Bertanggung jawab atas kerusakan atau kehilangan properti venue
            </li>
            <li>
              Tidak menggunakan ruang untuk kegiatan ilegal atau melanggar norma
            </li>
          </ul>

          <h4 className="text-lg font-semibold mb-3">Larangan</h4>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <ul className="list-disc list-inside space-y-1 text-red-800">
              <li>
                Merokok di dalam ruangan (kecuali area smoking yang disediakan)
              </li>
              <li>Membawa makanan/minuman beralkohol tanpa izin venue</li>
              <li>Menggunakan ruang melebihi kapasitas maksimal</li>
              <li>Memindahkan atau merusak furniture dan peralatan</li>
              <li>Membuat kebisingan berlebihan yang mengganggu</li>
              <li>Melakukan kegiatan yang melanggar hukum</li>
            </ul>
          </div>

          <h4 className="text-lg font-semibold mb-3">Sanksi</h4>
          <p className="mb-4">
            Pelanggaran terhadap aturan penggunaan dapat mengakibatkan:
          </p>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>Peringatan dan teguran</li>
            <li>Denda sesuai tingkat kerusakan</li>
            <li>Pembatalan booking tanpa refund</li>
            <li>Blacklist dari platform Simashaji</li>
          </ul>

          <p className="text-sm text-gray-600">
            Venue berhak mengakhiri sesi lebih awal jika terjadi pelanggaran
            serius.
          </p>
        </div>
      ),
    },
    {
      id: "privacy",
      title: "Privasi & Keamanan",
      icon: <Shield size={20} />,
      content: (
        <div className="prose prose-gray max-w-none">
          <h4 className="text-lg font-semibold mb-3">Pengumpulan Data</h4>
          <p className="mb-4">
            Simashaji mengumpulkan data berikut untuk keperluan layanan:
          </p>
          <ul className="list-disc list-inside space-y-1 mb-6">
            <li>Informasi akun (nama, email, nomor telepon)</li>
            <li>Data booking dan transaksi</li>
            <li>Log aktivitas dan preferensi pengguna</li>
            <li>Data teknis (IP address, browser, device)</li>
          </ul>

          <h4 className="text-lg font-semibold mb-3">Penggunaan Data</h4>
          <p className="mb-4">Data yang dikumpulkan digunakan untuk:</p>
          <ul className="list-disc list-inside space-y-1 mb-6">
            <li>Memproses booking dan pembayaran</li>
            <li>Memberikan layanan customer support</li>
            <li>Mengirim notifikasi dan informasi penting</li>
            <li>Meningkatkan kualitas layanan</li>
            <li>Compliance dengan regulasi yang berlaku</li>
          </ul>

          <h4 className="text-lg font-semibold mb-3">Keamanan Data</h4>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
            <ul className="list-disc list-inside space-y-2 text-green-800">
              <li>Enkripsi SSL 256-bit untuk semua transmisi data</li>
              <li>Server security dengan firewall dan monitoring 24/7</li>
              <li>Regular backup dan disaster recovery plan</li>
              <li>Access control dan audit trail</li>
              <li>Compliance dengan standar keamanan internasional</li>
            </ul>
          </div>

          <h4 className="text-lg font-semibold mb-3">Hak Pengguna</h4>
          <p className="mb-2">Pengguna memiliki hak untuk:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Mengakses dan memperbarui data pribadi</li>
            <li>Meminta penghapusan data (right to be forgotten)</li>
            <li>Menarik persetujuan penggunaan data</li>
            <li>Mendapat informasi tentang penggunaan data</li>
          </ul>
        </div>
      ),
    },
    {
      id: "liability",
      title: "Tanggung Jawab",
      icon: <Scale size={20} />,
      content: (
        <div className="prose prose-gray max-w-none">
          <h4 className="text-lg font-semibold mb-3">
            Batasan Tanggung Jawab Simashaji
          </h4>
          <p className="mb-4">
            Simashaji bertindak sebagai platform intermediary yang menghubungkan
            pengguna dengan venue. Tanggung jawab kami terbatas pada:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>Menyediakan platform booking yang reliable dan aman</li>
            <li>Memfasilitasi transaksi pembayaran</li>
            <li>Memberikan customer support yang responsif</li>
            <li>Menjaga kerahasiaan data pengguna</li>
          </ul>

          <h4 className="text-lg font-semibold mb-3">
            Pengecualian Tanggung Jawab
          </h4>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
            <p className="text-yellow-800 mb-3 font-medium">
              Simashaji tidak bertanggung jawab atas:
            </p>
            <ul className="list-disc list-inside space-y-1 text-yellow-800">
              <li>
                Kualitas, kondisi, atau kesesuaian ruang dengan ekspektasi
              </li>
              <li>Kerugian atau kerusakan yang terjadi di venue</li>
              <li>Pembatalan sepihak oleh venue</li>
              <li>Force majeure (bencana alam, pandemi, dll)</li>
              <li>Kehilangan atau kerusakan barang pribadi pengguna</li>
            </ul>
          </div>

          <h4 className="text-lg font-semibold mb-3">
            Asuransi dan Kompensasi
          </h4>
          <p className="mb-4">
            Pengguna disarankan untuk memiliki asuransi sendiri untuk coverage
            yang lebih komprehensif. Dalam hal terjadi masalah dengan venue,
            Simashaji akan berusaha memediasi dan memberikan solusi terbaik
            dalam batas kemampuan platform.
          </p>

          <h4 className="text-lg font-semibold mb-3">Indemnifikasi</h4>
          <p>
            Pengguna setuju untuk membebaskan Simashaji dari segala tuntutan,
            klaim, atau kerugian yang timbul akibat penggunaan layanan yang
            tidak sesuai dengan syarat dan ketentuan ini.
          </p>
        </div>
      ),
    },
  ];

  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Syarat & Ketentuan</h1>
            <p className="text-xl text-gray-300 mb-6">
              Aturan dan ketentuan penggunaan platform Simashaji
            </p>
            <div className="text-sm text-gray-400">
              Terakhir diperbarui: 11 Agustus 2025
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Table of Contents */}
          <div className="lg:col-span-1">
            <TableOfContents
              sections={sections}
              activeSection={activeSection}
              onSectionClick={handleSectionClick}
            />
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            {sections.map((section) => (
              <TermsSection
                key={section.id}
                section={section}
                isActive={activeSection === section.id}
              />
            ))}

            {/* Contact Information */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 mt-12">
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                Pertanyaan Mengenai Syarat & Ketentuan?
              </h3>
              <p className="text-blue-800 mb-6">
                Jika Anda memiliki pertanyaan atau memerlukan klarifikasi
                mengenai syarat dan ketentuan ini, silakan hubungi tim legal
                kami.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-blue-900 mb-2">
                    Email Legal
                  </h4>
                  <p className="text-blue-800">legal@simashaji.com</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900 mb-2">
                    Customer Support
                  </h4>
                  <p className="text-blue-800">support@simashaji.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
