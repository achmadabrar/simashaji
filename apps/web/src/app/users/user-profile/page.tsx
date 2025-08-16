"use client";
import { useState } from "react";

// Icon components as SVG
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

const Edit = ({ size = 20, className = "" }) => (
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
    <path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
);

const Camera = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
    <circle cx="12" cy="13" r="4" />
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
    <path d="M9 12l2 2 4-4" />
    <path d="M21 12c0 5-4 9-9 9s-9-4-9-9 4-9 9-9 9 4 9 9z" />
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

const Key = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <circle cx="8" cy="16" r="6" />
    <path d="M16 10l6-6" />
    <path d="M17 5l3 3" />
  </svg>
);

const ArrowLeft = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12,19 5,12 12,5" />
  </svg>
);

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-blue-600">
              <ArrowLeft size={20} />
            </button>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">S</span>
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
            <a href="#" className="text-blue-600 font-bold hover:text-blue-700">
              Profil
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-gray-600 hover:text-blue-600">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

const ProfileHeader = () => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
        <div className="relative">
          <div className="w-32 h-32 bg-gray-300 rounded-full flex items-center justify-center overflow-hidden">
            <User size={64} className="text-gray-600" />
          </div>
          <button className="absolute bottom-2 right-2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700">
            <Camera size={16} />
          </button>
        </div>

        <div className="flex-1 text-center md:text-left">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Achmad Abrar
              </h1>
              <p className="text-gray-600 mb-1">Premium Member</p>
              <div className="flex items-center justify-center md:justify-start text-sm text-gray-500">
                <Calendar size={16} className="mr-2" />
                <span>Bergabung sejak Januari 2024</span>
              </div>
            </div>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center space-x-2"
            >
              <Edit size={16} />
              <span>Edit Profil</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-2xl font-bold text-blue-600">12</p>
              <p className="text-sm text-gray-600">Total Booking</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <p className="text-2xl font-bold text-green-600">450</p>
              <p className="text-sm text-gray-600">Poin Reward</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <p className="text-2xl font-bold text-purple-600">4.8</p>
              <p className="text-sm text-gray-600">Rating Pengguna</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PersonalInfo = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "Achmad Abrar",
    email: "achmad.abrar@email.com",
    phone: "+62 812-3456-7890",
    address: "Jl. Sudirman No. 123, Jakarta Selatan",
    birthDate: "1990-05-15",
    gender: "Laki-laki",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    setIsEditing(false);
    // Handle save logic here
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-900">Informasi Pribadi</h2>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="text-blue-600 hover:text-blue-700 flex items-center space-x-1"
        >
          <Edit size={16} />
          <span>{isEditing ? "Batal" : "Edit"}</span>
        </button>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nama Lengkap
            </label>
            {isEditing ? (
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            ) : (
              <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                <User size={18} className="text-gray-500 mr-3" />
                <span className="text-gray-900">{formData.fullName}</span>
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            {isEditing ? (
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            ) : (
              <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                <Mail size={18} className="text-gray-500 mr-3" />
                <span className="text-gray-900">{formData.email}</span>
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nomor Telepon
            </label>
            {isEditing ? (
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            ) : (
              <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                <Phone size={18} className="text-gray-500 mr-3" />
                <span className="text-gray-900">{formData.phone}</span>
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tanggal Lahir
            </label>
            {isEditing ? (
              <input
                type="date"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            ) : (
              <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                <Calendar size={18} className="text-gray-500 mr-3" />
                <span className="text-gray-900">
                  {new Date(formData.birthDate).toLocaleDateString("id-ID")}
                </span>
              </div>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Alamat
          </label>
          {isEditing ? (
            <textarea
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              rows={3}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          ) : (
            <div className="flex items-start p-3 bg-gray-50 rounded-lg">
              <MapPin size={18} className="text-gray-500 mr-3 mt-0.5" />
              <span className="text-gray-900">{formData.address}</span>
            </div>
          )}
        </div>

        {isEditing && (
          <div className="flex justify-end space-x-3">
            <button
              onClick={() => setIsEditing(false)}
              className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              Batal
            </button>
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Simpan
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const AccountSettings = () => {
  const [notifications, setNotifications] = useState({
    booking: true,
    promotions: false,
    reminders: true,
    newsletter: false,
  });

  const handleNotificationChange = (key: keyof typeof notifications) => {
    setNotifications({
      ...notifications,
      [key]: !notifications[key],
    });
  };

  return (
    <div className="space-y-6">
      {/* Security Settings */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Keamanan Akun</h2>

        <div className="space-y-4">
          <button className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
            <div className="flex items-center space-x-3">
              <Key size={20} className="text-gray-600" />
              <div className="text-left">
                <p className="font-medium text-gray-900">Ubah Password</p>
                <p className="text-sm text-gray-600">
                  Terakhir diubah 3 bulan yang lalu
                </p>
              </div>
            </div>
            <Edit size={16} className="text-gray-400" />
          </button>

          <button className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
            <div className="flex items-center space-x-3">
              <Shield size={20} className="text-gray-600" />
              <div className="text-left">
                <p className="font-medium text-gray-900">
                  Verifikasi Dua Faktor
                </p>
                <p className="text-sm text-green-600">Aktif</p>
              </div>
            </div>
            <Edit size={16} className="text-gray-400" />
          </button>
        </div>
      </div>

      {/* Notification Settings */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">
          Pengaturan Notifikasi
        </h2>

        <div className="space-y-4">
          {(
            Object.entries({
              booking: {
                label: "Notifikasi Booking",
                desc: "Konfirmasi dan update booking",
              },
              promotions: {
                label: "Promosi & Penawaran",
                desc: "Penawaran khusus dan diskon",
              },
              reminders: {
                label: "Pengingat",
                desc: "Pengingat booking yang akan datang",
              },
              newsletter: {
                label: "Newsletter",
                desc: "Berita dan artikel terbaru",
              },
            }) as Array<
              [keyof typeof notifications, { label: string; desc: string }]
            >
          ).map(([key, { label, desc }]) => (
            <div
              key={key}
              className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
            >
              <div className="flex items-center space-x-3">
                <Bell size={20} className="text-gray-600" />
                <div>
                  <p className="font-medium text-gray-900">{label}</p>
                  <p className="text-sm text-gray-600">{desc}</p>
                </div>
              </div>
              <button
                onClick={() => handleNotificationChange(key)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  notifications[key] ? "bg-blue-600" : "bg-gray-200"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    notifications[key] ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Payment Methods */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-900">Metode Pembayaran</h2>
          <button className="text-blue-600 hover:text-blue-700 font-medium">
            Tambah Kartu
          </button>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center space-x-3">
              <CreditCard size={20} className="text-gray-600" />
              <div>
                <p className="font-medium text-gray-900">•••• •••• •••• 1234</p>
                <p className="text-sm text-gray-600">
                  Visa - Berlaku hingga 12/25
                </p>
              </div>
            </div>
            <button className="text-blue-600 hover:text-blue-700 font-medium">
              Edit
            </button>
          </div>

          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center space-x-3">
              <CreditCard size={20} className="text-gray-600" />
              <div>
                <p className="font-medium text-gray-900">•••• •••• •••• 5678</p>
                <p className="text-sm text-gray-600">
                  Mastercard - Berlaku hingga 08/26
                </p>
              </div>
            </div>
            <button className="text-blue-600 hover:text-blue-700 font-medium">
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Profil Saya</h1>
          <p className="text-gray-600">
            Kelola informasi akun dan pengaturan pribadi Anda
          </p>
        </div>

        <ProfileHeader />

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <PersonalInfo />
          </div>

          <div>
            <AccountSettings />
          </div>
        </div>
      </div>
    </div>
  );
}
