"use client";
import { useState } from "react";

// Type definitions
interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

interface ToggleSwitchProps {
  checked: boolean;
  onChange: () => void;
}

// Simple icon components as SVG
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

const Bell = ({
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
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
);

const User = ({
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
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const Settings = ({
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
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const LogOut = ({
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
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    <polyline points="16,17 21,12 16,7" />
    <line x1="21" y1="12" x2="9" y2="12" />
  </svg>
);

const Lock = ({
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
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <circle cx="12" cy="16" r="1" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const CreditCard = ({
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
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
    <line x1="1" y1="10" x2="23" y2="10" />
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

const Eye = ({
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
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const Mail = ({
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
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const Phone = ({
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
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const Globe = ({
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
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const ChevronLeft = ({
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
    <polyline points="15,18 9,12 15,6" />
  </svg>
);

const Edit = ({
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
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
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
              <div className="w-[60px] h-[60px] bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
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
                    className="flex items-center px-4 py-2 text-blue-600 hover:bg-gray-100"
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

const Sidebar = ({ activeSection, setActiveSection }: SidebarProps) => {
  const menuItems = [
    { id: "profile", icon: User, label: "Profil Akun" },
    { id: "notifications", icon: Bell, label: "Notifikasi" },
    { id: "security", icon: Lock, label: "Keamanan" },
    { id: "privacy", icon: Shield, label: "Privasi" },
    { id: "payment", icon: CreditCard, label: "Pembayaran" },
    { id: "preferences", icon: Settings, label: "Preferensi" },
  ];

  return (
    <div className="w-64 bg-white rounded-lg shadow-md p-6 h-fit">
      <div className="flex items-center space-x-2 mb-6">
        <button className="text-blue-600 hover:text-blue-700">
          <ChevronLeft size={20} />
        </button>
        <h2 className="text-lg font-bold text-gray-900">Pengaturan</h2>
      </div>

      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                activeSection === item.id
                  ? "bg-blue-100 text-blue-700"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <Icon size={18} />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};

const ToggleSwitch = ({ checked, onChange }: ToggleSwitchProps) => (
  <button
    onClick={onChange}
    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
      checked ? "bg-blue-600" : "bg-gray-300"
    }`}
  >
    <span
      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
        checked ? "translate-x-6" : "translate-x-1"
      }`}
    />
  </button>
);

const ProfileSection = () => {
  const [formData, setFormData] = useState({
    fullName: "Achmad Abrar",
    email: "achmad.abrar@email.com",
    phone: "+62 812-3456-7890",
    address: "Jakarta Selatan, Indonesia",
    birthDate: "1990-05-15",
    gender: "male",
  });

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-900">Profil Akun</h2>
        <button className="text-blue-600 hover:text-blue-700 font-medium">
          <Edit size={16} className="inline mr-1" />
          Edit Profil
        </button>
      </div>

      <div className="flex items-center space-x-6 mb-8">
        <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center">
          <User size={32} className="text-gray-600" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            {formData.fullName}
          </h3>
          <p className="text-gray-600">{formData.email}</p>
          <button className="text-blue-600 hover:text-blue-700 text-sm font-medium mt-1">
            Ubah Foto Profil
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Nama Lengkap
          </label>
          <input
            type="text"
            value={formData.fullName}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            readOnly
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            value={formData.email}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            readOnly
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Nomor Telepon
          </label>
          <input
            type="tel"
            value={formData.phone}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            readOnly
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Tanggal Lahir
          </label>
          <input
            type="date"
            value={formData.birthDate}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            readOnly
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Alamat
          </label>
          <textarea
            value={formData.address}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            readOnly
          />
        </div>
      </div>
    </div>
  );
};

const NotificationSection = () => {
  const [settings, setSettings] = useState({
    emailBooking: true,
    emailPromo: false,
    pushBooking: true,
    pushPromo: true,
    pushReminder: true,
    smsBooking: false,
    smsPromo: false,
  });

  const handleToggle = (key: keyof typeof settings) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-6">
        Pengaturan Notifikasi
      </h2>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <Mail size={20} className="mr-2" />
            Email
          </h3>
          <div className="space-y-4 ml-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Konfirmasi Booking</p>
                <p className="text-sm text-gray-600">
                  Terima email saat booking dikonfirmasi
                </p>
              </div>
              <ToggleSwitch
                checked={settings.emailBooking}
                onChange={() => handleToggle("emailBooking")}
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Promosi & Penawaran</p>
                <p className="text-sm text-gray-600">
                  Terima email promosi dan penawaran khusus
                </p>
              </div>
              <ToggleSwitch
                checked={settings.emailPromo}
                onChange={() => handleToggle("emailPromo")}
              />
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <Bell size={20} className="mr-2" />
            Push Notification
          </h3>
          <div className="space-y-4 ml-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Status Booking</p>
                <p className="text-sm text-gray-600">
                  Notifikasi perubahan status booking
                </p>
              </div>
              <ToggleSwitch
                checked={settings.pushBooking}
                onChange={() => handleToggle("pushBooking")}
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Pengingat</p>
                <p className="text-sm text-gray-600">
                  Pengingat booking yang akan datang
                </p>
              </div>
              <ToggleSwitch
                checked={settings.pushReminder}
                onChange={() => handleToggle("pushReminder")}
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Promosi</p>
                <p className="text-sm text-gray-600">
                  Notifikasi promosi dan diskon
                </p>
              </div>
              <ToggleSwitch
                checked={settings.pushPromo}
                onChange={() => handleToggle("pushPromo")}
              />
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <Phone size={20} className="mr-2" />
            SMS
          </h3>
          <div className="space-y-4 ml-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Konfirmasi Booking</p>
                <p className="text-sm text-gray-600">
                  SMS konfirmasi dan pembayaran
                </p>
              </div>
              <ToggleSwitch
                checked={settings.smsBooking}
                onChange={() => handleToggle("smsBooking")}
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Promosi</p>
                <p className="text-sm text-gray-600">
                  SMS promosi dan penawaran khusus
                </p>
              </div>
              <ToggleSwitch
                checked={settings.smsPromo}
                onChange={() => handleToggle("smsPromo")}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-gray-200">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          Simpan Perubahan
        </button>
      </div>
    </div>
  );
};

const SecuritySection = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Keamanan Akun</h2>

      <div className="space-y-6">
        <div className="border border-gray-200 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Lock size={20} className="text-gray-600" />
              <div>
                <h3 className="font-semibold text-gray-900">Kata Sandi</h3>
                <p className="text-sm text-gray-600">
                  Terakhir diubah 3 bulan lalu
                </p>
              </div>
            </div>
            <button className="text-blue-600 hover:text-blue-700 font-medium">
              Ubah Kata Sandi
            </button>
          </div>
        </div>

        <div className="border border-gray-200 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Shield size={20} className="text-gray-600" />
              <div>
                <h3 className="font-semibold text-gray-900">
                  Autentikasi Dua Faktor (2FA)
                </h3>
                <p className="text-sm text-gray-600">
                  Tambahkan lapisan keamanan ekstra
                </p>
              </div>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700">
              Aktifkan
            </button>
          </div>
        </div>

        <div className="border border-gray-200 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Eye size={20} className="text-gray-600" />
              <div>
                <h3 className="font-semibold text-gray-900">Aktivitas Login</h3>
                <p className="text-sm text-gray-600">
                  Lihat riwayat login akun Anda
                </p>
              </div>
            </div>
            <button className="text-blue-600 hover:text-blue-700 font-medium">
              Lihat Riwayat
            </button>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <h3 className="font-semibold text-yellow-800 mb-2">
            Perangkat Aktif
          </h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-medium text-yellow-800">
                  Chrome di Windows
                </p>
                <p className="text-xs text-yellow-600">
                  Jakarta, Indonesia - Sekarang
                </p>
              </div>
              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                Aktif
              </span>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-medium text-yellow-800">
                  Safari di iPhone
                </p>
                <p className="text-xs text-yellow-600">
                  Jakarta, Indonesia - 2 jam lalu
                </p>
              </div>
              <button className="text-xs text-red-600 hover:text-red-700">
                Keluar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PrivacySection = () => {
  const [settings, setSettings] = useState({
    profileVisibility: "private",
    dataSharing: false,
    analytics: true,
    marketing: false,
  });

  const handleToggle = (key: keyof typeof settings) => {
    if (typeof settings[key] === "boolean") {
      setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
    }
  };

  const handleVisibilityChange = (value: string) => {
    setSettings((prev) => ({ ...prev, profileVisibility: value }));
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-6">
        Pengaturan Privasi
      </h2>

      <div className="space-y-6">
        <div className="border border-gray-200 rounded-lg p-4">
          <h3 className="font-semibold text-gray-900 mb-4">
            Visibilitas Profil
          </h3>
          <div className="space-y-3">
            <label className="flex items-center">
              <input
                type="radio"
                name="visibility"
                value="public"
                checked={settings.profileVisibility === "public"}
                onChange={(e) => handleVisibilityChange(e.target.value)}
                className="mr-3"
              />
              <div>
                <p className="font-medium text-gray-900">Publik</p>
                <p className="text-sm text-gray-600">
                  Profil dapat dilihat oleh semua pengguna
                </p>
              </div>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="visibility"
                value="private"
                checked={settings.profileVisibility === "private"}
                onChange={(e) => handleVisibilityChange(e.target.value)}
                className="mr-3"
              />
              <div>
                <p className="font-medium text-gray-900">Pribadi</p>
                <p className="text-sm text-gray-600">
                  Hanya Anda yang dapat melihat profil
                </p>
              </div>
            </label>
          </div>
        </div>

        <div className="border border-gray-200 rounded-lg p-4">
          <h3 className="font-semibold text-gray-900 mb-4">Penggunaan Data</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">
                  Berbagi Data dengan Partner
                </p>
                <p className="text-sm text-gray-600">
                  Izinkan berbagi data dengan mitra terpercaya
                </p>
              </div>
              <ToggleSwitch
                checked={settings.dataSharing}
                onChange={() => handleToggle("dataSharing")}
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">
                  Analitik & Peningkatan
                </p>
                <p className="text-sm text-gray-600">
                  Bantu tingkatkan layanan dengan data analitik
                </p>
              </div>
              <ToggleSwitch
                checked={settings.analytics}
                onChange={() => handleToggle("analytics")}
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">
                  Personalisasi Marketing
                </p>
                <p className="text-sm text-gray-600">
                  Terima konten marketing yang dipersonalisasi
                </p>
              </div>
              <ToggleSwitch
                checked={settings.marketing}
                onChange={() => handleToggle("marketing")}
              />
            </div>
          </div>
        </div>

        <div className="border border-gray-200 rounded-lg p-4">
          <h3 className="font-semibold text-gray-900 mb-4">Kontrol Data</h3>
          <div className="space-y-3">
            <button className="w-full text-left p-3 border border-gray-200 rounded hover:bg-gray-50">
              <p className="font-medium text-gray-900">Unduh Data Saya</p>
              <p className="text-sm text-gray-600">
                Dapatkan salinan data yang kami simpan
              </p>
            </button>
            <button className="w-full text-left p-3 border border-red-200 rounded hover:bg-red-50">
              <p className="font-medium text-red-600">Hapus Akun</p>
              <p className="text-sm text-red-500">
                Hapus akun dan semua data secara permanen
              </p>
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-gray-200">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          Simpan Perubahan
        </button>
      </div>
    </div>
  );
};

const PaymentSection = () => {
  const paymentMethods = [
    {
      id: 1,
      type: "card",
      brand: "Visa",
      number: "**** **** **** 1234",
      expiry: "12/26",
      isDefault: true,
    },
    {
      id: 2,
      type: "card",
      brand: "Mastercard",
      number: "**** **** **** 5678",
      expiry: "08/27",
      isDefault: false,
    },
    {
      id: 3,
      type: "wallet",
      brand: "GoPay",
      number: "081234567890",
      expiry: "",
      isDefault: false,
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-900">Metode Pembayaran</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          + Tambah Metode
        </button>
      </div>

      <div className="space-y-4 mb-8">
        {paymentMethods.map((method) => (
          <div
            key={method.id}
            className="border border-gray-200 rounded-lg p-4"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <CreditCard size={20} className="text-gray-600" />
                <div>
                  <div className="flex items-center space-x-2">
                    <p className="font-medium text-gray-900">{method.brand}</p>
                    {method.isDefault && (
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                        Default
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600">
                    {method.number}
                    {method.expiry && ` • Berlaku hingga ${method.expiry}`}
                  </p>
                </div>
              </div>
              <div className="flex space-x-2">
                {!method.isDefault && (
                  <button className="text-blue-600 hover:text-blue-700 text-sm">
                    Jadikan Default
                  </button>
                )}
                <button className="text-red-600 hover:text-red-700 text-sm">
                  Hapus
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-200 pt-6">
        <h3 className="font-semibold text-gray-900 mb-4">Riwayat Transaksi</h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center py-2">
            <div>
              <p className="font-medium text-gray-900">Meeting Room Premium</p>
              <p className="text-sm text-gray-600">15 Agustus 2024</p>
            </div>
            <div className="text-right">
              <p className="font-medium text-gray-900">Rp 150.000</p>
              <p className="text-sm text-green-600">Berhasil</p>
            </div>
          </div>
          <div className="flex justify-between items-center py-2">
            <div>
              <p className="font-medium text-gray-900">Grand Ballroom</p>
              <p className="text-sm text-gray-600">10 Agustus 2024</p>
            </div>
            <div className="text-right">
              <p className="font-medium text-gray-900">Rp 500.000</p>
              <p className="text-sm text-yellow-600">Pending</p>
            </div>
          </div>
          <div className="flex justify-between items-center py-2">
            <div>
              <p className="font-medium text-gray-900">Executive Suite</p>
              <p className="text-sm text-gray-600">5 Agustus 2024</p>
            </div>
            <div className="text-right">
              <p className="font-medium text-gray-900">Rp 300.000</p>
              <p className="text-sm text-green-600">Berhasil</p>
            </div>
          </div>
        </div>
        <button className="text-blue-600 hover:text-blue-700 font-medium mt-4">
          Lihat Semua Transaksi
        </button>
      </div>
    </div>
  );
};

const PreferencesSection = () => {
  const [preferences, setPreferences] = useState({
    language: "id",
    timezone: "Asia/Jakarta",
    currency: "IDR",
    theme: "light",
    autoBook: false,
    showPrice: true,
  });

  const handleChange = (
    key: keyof typeof preferences,
    value: string | boolean
  ) => {
    setPreferences((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Preferensi</h2>

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Globe size={16} className="inline mr-2" />
              Bahasa
            </label>
            <select
              value={preferences.language}
              onChange={(e) => handleChange("language", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="id">Bahasa Indonesia</option>
              <option value="en">English</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Zona Waktu
            </label>
            <select
              value={preferences.timezone}
              onChange={(e) => handleChange("timezone", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Asia/Jakarta">Jakarta (GMT+7)</option>
              <option value="Asia/Makassar">Makassar (GMT+8)</option>
              <option value="Asia/Jayapura">Jayapura (GMT+9)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Mata Uang
            </label>
            <select
              value={preferences.currency}
              onChange={(e) => handleChange("currency", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="IDR">Rupiah (IDR)</option>
              <option value="USD">US Dollar (USD)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tema Tampilan
            </label>
            <select
              value={preferences.theme}
              onChange={(e) => handleChange("theme", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="light">Terang</option>
              <option value="dark">Gelap</option>
              <option value="system">Ikuti Sistem</option>
            </select>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <h3 className="font-semibold text-gray-900 mb-4">
            Preferensi Booking
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">
                  Auto-booking untuk Favorit
                </p>
                <p className="text-sm text-gray-600">
                  Otomatis booking ruang favorit saat tersedia
                </p>
              </div>
              <ToggleSwitch
                checked={preferences.autoBook}
                onChange={() => handleChange("autoBook", !preferences.autoBook)}
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Tampilkan Harga</p>
                <p className="text-sm text-gray-600">
                  Selalu tampilkan harga di hasil pencarian
                </p>
              </div>
              <ToggleSwitch
                checked={preferences.showPrice}
                onChange={() =>
                  handleChange("showPrice", !preferences.showPrice)
                }
              />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <h3 className="font-semibold text-gray-900 mb-4">Lokasi Favorit</h3>
          <div className="space-y-2">
            <div className="flex items-center justify-between p-3 border border-gray-200 rounded">
              <span className="text-gray-900">Jakarta Selatan</span>
              <button className="text-red-600 hover:text-red-700 text-sm">
                Hapus
              </button>
            </div>
            <div className="flex items-center justify-between p-3 border border-gray-200 rounded">
              <span className="text-gray-900">Jakarta Pusat</span>
              <button className="text-red-600 hover:text-red-700 text-sm">
                Hapus
              </button>
            </div>
            <button className="w-full p-3 border-2 border-dashed border-gray-300 rounded text-gray-600 hover:border-blue-300 hover:text-blue-600">
              + Tambah Lokasi Favorit
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-gray-200">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          Simpan Perubahan
        </button>
      </div>
    </div>
  );
};

function SettingsPage() {
  const [activeSection, setActiveSection] = useState("profile");

  const renderContent = () => {
    switch (activeSection) {
      case "profile":
        return <ProfileSection />;
      case "notifications":
        return <NotificationSection />;
      case "security":
        return <SecuritySection />;
      case "privacy":
        return <PrivacySection />;
      case "payment":
        return <PaymentSection />;
      case "preferences":
        return <PreferencesSection />;
      default:
        return <ProfileSection />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Pengaturan</h1>
          <p className="text-gray-600">Kelola akun dan preferensi Anda</p>
        </div>

        <div className="flex gap-8">
          <Sidebar
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
          <div className="flex-1">{renderContent()}</div>
        </div>
      </div>
    </div>
  );
}

export default SettingsPage;
