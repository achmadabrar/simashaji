"use client";
import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";

// Type definitions
interface Asrama {
  id: number;
  name: string;
  address: string;
  city: string;
  province: string;
  contact_no: string;
  lat: number;
  lng: number;
  admin_id: number;
  description?: string;
  images: string[];
  rating: number;
  total_reviews: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

interface AsramaFormData {
  name: string;
  address: string;
  city: string;
  province: string;
  contact_no: string;
  lat: string;
  lng: string;
  description: string;
  images: string[];
  is_active: boolean;
}

interface AsramaSubmitData {
  name: string;
  address: string;
  city: string;
  province: string;
  contact_no: string;
  lat: number;
  lng: number;
  description: string;
  images: string[];
  is_active: boolean;
  admin_id: number;
}

interface FormErrors {
  [key: string]: string;
}

interface AsramaFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  asrama: Asrama | null;
  onSave: (data: AsramaSubmitData) => void;
}

// Mock data untuk demo
const mockAsramas: Asrama[] = [
  {
    id: 1,
    name: "Asrama Al-Hikmah",
    address: "Jl. Raya Bogor No. 123",
    city: "Jakarta",
    province: "DKI Jakarta",
    contact_no: "+62 21 8765432",
    lat: -6.2088,
    lng: 106.8456,
    admin_id: 1,
    description:
      "Asrama modern dengan fasilitas lengkap untuk mahasiswa dan pelajar",
    images: [
      "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=400&h=300&fit=crop",
    ],
    rating: 4.5,
    total_reviews: 128,
    is_active: true,
    created_at: "2024-01-15T10:00:00.000Z",
    updated_at: "2024-08-10T15:30:00.000Z",
  },
  {
    id: 2,
    name: "Asrama Baitul Makmur",
    address: "Jl. Sudirman No. 456",
    city: "Bandung",
    province: "Jawa Barat",
    contact_no: "+62 22 1234567",
    lat: -6.9175,
    lng: 107.6191,
    admin_id: 1,
    description: "Asrama strategis di pusat kota dengan akses mudah ke kampus",
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop",
    ],
    rating: 4.3,
    total_reviews: 89,
    is_active: true,
    created_at: "2024-02-20T08:15:00.000Z",
    updated_at: "2024-08-12T09:45:00.000Z",
  },
];

// Icon components
const Plus = ({
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
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
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
    <path d="m18.5 2.5 3 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
);

const Trash2 = ({
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
    <polyline points="3,6 5,6 21,6" />
    <path d="m19,6v14a2,2,0,0,1-2,2H7a2,2,0,0,1-2-2V6m3,0V4a2,2,0,0,1,2-2h4a2,2,0,0,1,2,2V6" />
    <line x1="10" y1="11" x2="10" y2="17" />
    <line x1="14" y1="11" x2="14" y2="17" />
  </svg>
);

const X = ({
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
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
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

const Star = ({
  size = 20,
  className = "",
  filled = false,
}: {
  size?: number;
  className?: string;
  filled?: boolean;
}) => (
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

const EyeOff = ({
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
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
    <line x1="1" y1="1" x2="23" y2="23" />
  </svg>
);

const Building = ({
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
    <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
    <path d="M6 12H4a2 2 0 0 0-2 2v8h20v-8a2 2 0 0 0-2-2h-2" />
  </svg>
);

const MessageCircle = ({
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
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

// Form Modal Component
const AsramaFormModal = ({
  isOpen,
  onClose,
  asrama,
  onSave,
}: AsramaFormModalProps) => {
  const [formData, setFormData] = useState<AsramaFormData>({
    name: "",
    address: "",
    city: "",
    province: "",
    contact_no: "",
    lat: "",
    lng: "",
    description: "",
    images: [""],
    is_active: true,
  });

  const [errors, setErrors] = useState<FormErrors>({});

  useEffect(() => {
    if (asrama) {
      setFormData({
        name: asrama.name || "",
        address: asrama.address || "",
        city: asrama.city || "",
        province: asrama.province || "",
        contact_no: asrama.contact_no || "",
        lat: asrama.lat?.toString() || "",
        lng: asrama.lng?.toString() || "",
        description: asrama.description || "",
        images: asrama.images || [""],
        is_active: asrama.is_active !== undefined ? asrama.is_active : true,
      });
    } else {
      setFormData({
        name: "",
        address: "",
        city: "",
        province: "",
        contact_no: "",
        lat: "",
        lng: "",
        description: "",
        images: [""],
        is_active: true,
      });
    }
    setErrors({});
  }, [asrama, isOpen]);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type, checked } = target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleImageChange = (index: number, value: string) => {
    const newImages = [...formData.images];
    newImages[index] = value;
    setFormData((prev) => ({ ...prev, images: newImages }));
  };

  const addImageField = () => {
    setFormData((prev) => ({ ...prev, images: [...prev.images, ""] }));
  };

  const removeImageField = (index: number) => {
    const newImages = formData.images.filter((_, i) => i !== index);
    setFormData((prev) => ({
      ...prev,
      images: newImages.length ? newImages : [""],
    }));
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) newErrors.name = "Nama asrama wajib diisi";
    if (!formData.address.trim()) newErrors.address = "Alamat wajib diisi";
    if (!formData.city.trim()) newErrors.city = "Kota wajib diisi";
    if (!formData.province.trim()) newErrors.province = "Provinsi wajib diisi";
    if (!formData.contact_no.trim())
      newErrors.contact_no = "Nomor kontak wajib diisi";
    if (!formData.lat || isNaN(parseFloat(formData.lat)))
      newErrors.lat = "Latitude harus berupa angka";
    if (!formData.lng || isNaN(parseFloat(formData.lng)))
      newErrors.lng = "Longitude harus berupa angka";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      const submitData: AsramaSubmitData = {
        ...formData,
        lat: parseFloat(formData.lat),
        lng: parseFloat(formData.lng),
        images: formData.images.filter((img) => img.trim() !== ""),
        admin_id: 1,
      };

      onSave(submitData);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white p-6 border-b z-10">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">
              {asrama ? "Edit Asrama" : "Tambah Asrama Baru"}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">
                Informasi Dasar
              </h3>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nama Asrama *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Masukkan nama asrama"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Alamat Lengkap *
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  rows={3}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.address ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Masukkan alamat lengkap"
                />
                {errors.address && (
                  <p className="text-red-500 text-sm mt-1">{errors.address}</p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Kota *
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.city ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Jakarta"
                  />
                  {errors.city && (
                    <p className="text-red-500 text-sm mt-1">{errors.city}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Provinsi *
                  </label>
                  <input
                    type="text"
                    name="province"
                    value={formData.province}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.province ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="DKI Jakarta"
                  />
                  {errors.province && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.province}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nomor Kontak *
                </label>
                <input
                  type="text"
                  name="contact_no"
                  value={formData.contact_no}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.contact_no ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="+62 21 1234567"
                />
                {errors.contact_no && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.contact_no}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">
                Lokasi & Detail
              </h3>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Latitude *
                  </label>
                  <input
                    type="number"
                    step="any"
                    name="lat"
                    value={formData.lat}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.lat ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="-6.2088"
                  />
                  {errors.lat && (
                    <p className="text-red-500 text-sm mt-1">{errors.lat}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Longitude *
                  </label>
                  <input
                    type="number"
                    step="any"
                    name="lng"
                    value={formData.lng}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.lng ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="106.8456"
                  />
                  {errors.lng && (
                    <p className="text-red-500 text-sm mt-1">{errors.lng}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Deskripsi
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Deskripsi singkat tentang asrama..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Gambar Asrama
                </label>
                {formData.images.map((image, index) => (
                  <div key={index} className="flex gap-2 mb-2">
                    <input
                      type="url"
                      value={image}
                      onChange={(e) => handleImageChange(index, e.target.value)}
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="https://example.com/image.jpg"
                    />
                    {formData.images.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeImageField(index)}
                        className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <X size={16} />
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addImageField}
                  className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 text-sm"
                >
                  <Plus size={16} />
                  <span>Tambah Gambar</span>
                </button>
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="is_active"
                  name="is_active"
                  checked={formData.is_active}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label
                  htmlFor="is_active"
                  className="text-sm font-medium text-gray-700"
                >
                  Asrama Aktif
                </label>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-end space-x-4 mt-8 pt-6 border-t">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Batal
            </button>
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              {asrama ? "Update Asrama" : "Tambah Asrama"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Main Component
const AdminAsramaPage = () => {
  const [asramas, setAsramas] = useState<Asrama[]>(mockAsramas);
  const [filteredAsramas, setFilteredAsramas] = useState<Asrama[]>(mockAsramas);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingAsrama, setEditingAsrama] = useState<Asrama | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  useEffect(() => {
    let filtered = asramas;

    if (searchTerm) {
      filtered = filtered.filter(
        (asrama) =>
          asrama.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          asrama.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
          asrama.province.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filterStatus !== "all") {
      filtered = filtered.filter((asrama) =>
        filterStatus === "active" ? asrama.is_active : !asrama.is_active
      );
    }

    setFilteredAsramas(filtered);
  }, [asramas, searchTerm, filterStatus]);

  const handleAddAsrama = () => {
    setEditingAsrama(null);
    setIsModalOpen(true);
  };

  const handleEditAsrama = (asrama: Asrama) => {
    setEditingAsrama(asrama);
    setIsModalOpen(true);
  };

  const handleSaveAsrama = (formData: AsramaSubmitData) => {
    if (editingAsrama) {
      setAsramas((prev) =>
        prev.map((asrama) =>
          asrama.id === editingAsrama.id
            ? { ...asrama, ...formData, updated_at: new Date().toISOString() }
            : asrama
        )
      );
    } else {
      const newAsrama: Asrama = {
        ...formData,
        id: asramas.length > 0 ? Math.max(...asramas.map((a) => a.id)) + 1 : 1,
        rating: 0,
        total_reviews: 0,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      };
      setAsramas((prev) => [...prev, newAsrama]);
    }
  };

  const handleDeleteAsrama = (id: number) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus asrama ini?")) {
      setAsramas((prev) => prev.filter((asrama) => asrama.id !== id));
    }
  };

  const toggleAsramaStatus = (id: number) => {
    setAsramas((prev) =>
      prev.map((asrama) =>
        asrama.id === id
          ? {
              ...asrama,
              is_active: !asrama.is_active,
              updated_at: new Date().toISOString(),
            }
          : asrama
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Manajemen Asrama
              </h1>
              <p className="text-gray-600">
                Kelola data asrama dan informasi lokasi
              </p>
            </div>
            <button
              onClick={handleAddAsrama}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
            >
              <Plus size={20} />
              <span>Tambah Asrama</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Cari Asrama
              </label>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Nama, kota, atau provinsi..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Status
              </label>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">Semua Status</option>
                <option value="active">Aktif</option>
                <option value="inactive">Tidak Aktif</option>
              </select>
            </div>

            <div className="flex items-end">
              <div className="bg-gray-100 px-4 py-2 rounded-lg">
                <span className="text-sm text-gray-600">
                  Menampilkan {filteredAsramas.length} dari {asramas.length}{" "}
                  asrama
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredAsramas.map((asrama) => (
            <div
              key={asrama.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative">
                <img
                  src={
                    asrama.images[0] ||
                    "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=400&h=200&fit=crop"
                  }
                  alt={asrama.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 flex space-x-2">
                  <div
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      asrama.is_active
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {asrama.is_active ? "Aktif" : "Tidak Aktif"}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">
                    {asrama.name}
                  </h3>
                  <div className="flex items-center space-x-1">
                    <Star className="text-yellow-400 fill-current" size={16} />
                    <span className="text-sm font-medium">{asrama.rating}</span>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <MapPin size={16} className="mr-2 flex-shrink-0" />
                    <span className="text-sm">{asrama.address}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Building size={16} className="mr-2 flex-shrink-0" />
                    <span className="text-sm">
                      {asrama.city}, {asrama.province}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Phone size={16} className="mr-2 flex-shrink-0" />
                    <span className="text-sm">{asrama.contact_no}</span>
                  </div>
                </div>

                {asrama.description && (
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {asrama.description}
                  </p>
                )}

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{asrama.total_reviews} ulasan</span>
                  <span>
                    Diperbarui{" "}
                    {new Date(asrama.updated_at).toLocaleDateString("id-ID")}
                  </span>
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEditAsrama(asrama)}
                      className="text-blue-600 hover:text-blue-700 p-2 hover:bg-blue-50 rounded-lg transition-colors"
                      title="Edit Asrama"
                    >
                      <Edit size={18} />
                    </button>
                    <button
                      onClick={() => toggleAsramaStatus(asrama.id)}
                      className={`p-2 rounded-lg transition-colors ${
                        asrama.is_active
                          ? "text-orange-600 hover:text-orange-700 hover:bg-orange-50"
                          : "text-green-600 hover:text-green-700 hover:bg-green-50"
                      }`}
                      title={asrama.is_active ? "Nonaktifkan" : "Aktifkan"}
                    >
                      {asrama.is_active ? (
                        <EyeOff size={18} />
                      ) : (
                        <Eye size={18} />
                      )}
                    </button>
                    <button
                      onClick={() => handleDeleteAsrama(asrama.id)}
                      className="text-red-600 hover:text-red-700 p-2 hover:bg-red-50 rounded-lg transition-colors"
                      title="Hapus Asrama"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>

                  <div className="text-xs text-gray-400">ID: {asrama.id}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredAsramas.length === 0 && (
          <div className="bg-white rounded-lg shadow p-12 text-center">
            <Building className="mx-auto mb-4 text-gray-400" size={48} />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              {searchTerm || filterStatus !== "all"
                ? "Tidak ada asrama yang sesuai"
                : "Belum ada asrama"}
            </h3>
            <p className="text-gray-600 mb-6">
              {searchTerm || filterStatus !== "all"
                ? "Coba ubah filter pencarian Anda"
                : "Mulai dengan menambahkan asrama pertama Anda"}
            </p>
            {!searchTerm && filterStatus === "all" && (
              <button
                onClick={handleAddAsrama}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center space-x-2"
              >
                <Plus size={20} />
                <span>Tambah Asrama Pertama</span>
              </button>
            )}
          </div>
        )}

        <div className="grid md:grid-cols-4 gap-4 mt-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Asrama</p>
                <p className="text-2xl font-bold text-gray-900">
                  {asramas.length}
                </p>
              </div>
              <Building className="text-blue-600" size={24} />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Asrama Aktif</p>
                <p className="text-2xl font-bold text-green-600">
                  {asramas.filter((a) => a.is_active).length}
                </p>
              </div>
              <Eye className="text-green-600" size={24} />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Rata-rata Rating</p>
                <p className="text-2xl font-bold text-yellow-600">
                  {asramas.length > 0
                    ? (
                        asramas.reduce((acc, a) => acc + a.rating, 0) /
                        asramas.length
                      ).toFixed(1)
                    : "0.0"}
                </p>
              </div>
              <Star className="text-yellow-600 fill-current" size={24} />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Ulasan</p>
                <p className="text-2xl font-bold text-purple-600">
                  {asramas.reduce((acc, a) => acc + a.total_reviews, 0)}
                </p>
              </div>
              <MessageCircle className="text-purple-600" size={24} />
            </div>
          </div>
        </div>
      </div>

      <AsramaFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        asrama={editingAsrama}
        onSave={handleSaveAsrama}
      />
    </div>
  );
};

export default AdminAsramaPage;
