"use client";
import React, { useState, useRef } from "react";

// Icon components from the original code
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

const Upload = ({ size = 20, className = "" }) => (
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
    <polyline points="7,10 12,5 17,10" />
    <line x1="12" y1="15" x2="12" y2="5" />
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

const Plus = ({ size = 20, className = "" }) => (
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

const Save = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
    <polyline points="17,21 17,13 7,13 7,21" />
    <polyline points="7,3 7,8 15,8" />
  </svg>
);

const Eye = ({ size = 20, className = "" }) => (
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

const Monitor = ({ size = 20, className = "" }) => (
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

const Volume2 = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <polygon points="11,5 6,9 2,9 2,15 6,15 11,19" />
    <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
    <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
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

const Home = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9,22 9,12 15,12 15,22" />
  </svg>
);

const AddSpacePage = () => {
  const [activeTab, setActiveTab] = useState("ruang-rapat");
  const [formData, setFormData] = useState({
    name: "",
    type: "RUANG_RAPAT",
    capacity: "",
    pricePerDay: "",
    price8Hours: "", // For Aula
    price12Hours: "", // For Aula
    description: "",
    size: "",
    asramaId: "",
    amenities: [],
    images: [],
  });

  const [newAmenity, setNewAmenity] = useState("");
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef(null);
  const [previewUrls, setPreviewUrls] = useState([]);

  const tabs = [
    {
      id: "ruang-rapat",
      label: "Ruang Rapat",
      type: "RUANG_RAPAT",
      icon: Users,
    },
    { id: "aula", label: "Aula", type: "AULA", icon: Home },
    { id: "kamar", label: "Kamar", type: "KAMAR", icon: Bed },
    { id: "manasik", label: "Manasik", type: "MANASIK", icon: Compass },
  ];

  const commonAmenities = {
    "ruang-rapat": [
      { id: "wifi", label: "WiFi", icon: Wifi },
      { id: "proyektor", label: "Proyektor", icon: Monitor },
      {
        id: "ac",
        label: "AC",
        icon: () => <span className="text-sm">❄️</span>,
      },
      { id: "coffee", label: "Coffee/Tea", icon: Coffee },
      { id: "sound-system", label: "Sound System", icon: Volume2 },
      {
        id: "whiteboard",
        label: "Whiteboard",
        icon: () => <span className="text-sm">📋</span>,
      },
    ],
    aula: [
      { id: "wifi", label: "WiFi", icon: Wifi },
      { id: "sound-system", label: "Sound System", icon: Volume2 },
      { id: "stage", label: "Stage/Panggung", icon: Home },
      {
        id: "ac",
        label: "AC",
        icon: () => <span className="text-sm">❄️</span>,
      },
      { id: "catering", label: "Catering Area", icon: Coffee },
      {
        id: "parking",
        label: "Parkir",
        icon: () => <span className="text-sm">🚗</span>,
      },
    ],
    kamar: [
      { id: "wifi", label: "WiFi", icon: Wifi },
      {
        id: "ac",
        label: "AC",
        icon: () => <span className="text-sm">❄️</span>,
      },
      { id: "tv", label: "TV", icon: Monitor },
      { id: "minibar", label: "Mini Bar", icon: Coffee },
      {
        id: "bathroom",
        label: "Kamar Mandi Pribadi",
        icon: () => <span className="text-sm">🚿</span>,
      },
      {
        id: "room-service",
        label: "Room Service",
        icon: () => <span className="text-sm">🛎️</span>,
      },
    ],
    manasik: [
      { id: "panduan-haji", label: "Panduan Haji", icon: Compass },
      { id: "panduan-umrah", label: "Panduan Umrah", icon: Compass },
      { id: "video-tutorial", label: "Video Tutorial", icon: Monitor },
      {
        id: "doa-doa",
        label: "Kumpulan Doa",
        icon: () => <span className="text-sm">📖</span>,
      },
      {
        id: "jadwal-ibadah",
        label: "Jadwal Ibadah",
        icon: () => <span className="text-sm">🕐</span>,
      },
      {
        id: "konsultasi",
        label: "Konsultasi Ustadz",
        icon: () => <span className="text-sm">👨‍🏫</span>,
      },
    ],
  };

  const handleTabChange = (tabId, type) => {
    setActiveTab(tabId);
    setFormData((prev) => ({
      ...prev,
      type: type,
      amenities: [],
      // Reset pricing fields when switching tabs
      pricePerDay: "",
      price8Hours: "",
      price12Hours: "",
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAmenityToggle = (amenityId, amenityLabel) => {
    setFormData((prev) => ({
      ...prev,
      amenities: prev.amenities.includes(amenityLabel)
        ? prev.amenities.filter((a) => a !== amenityLabel)
        : [...prev.amenities, amenityLabel],
    }));
  };

  const handleAddCustomAmenity = () => {
    if (newAmenity.trim() && !formData.amenities.includes(newAmenity.trim())) {
      setFormData((prev) => ({
        ...prev,
        amenities: [...prev.amenities, newAmenity.trim()],
      }));
      setNewAmenity("");
    }
  };

  const handleRemoveAmenity = (amenity) => {
    setFormData((prev) => ({
      ...prev,
      amenities: prev.amenities.filter((a) => a !== amenity),
    }));
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const files = e.dataTransfer.files;
    handleFiles(files);
  };

  const handleFileInput = (e) => {
    const files = e.target.files;
    handleFiles(files);
  };

  const handleFiles = (files) => {
    const validFiles = Array.from(files).filter((file) =>
      file.type.startsWith("image/")
    );

    validFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const newPreviewUrl = e.target.result;
        setPreviewUrls((prev) => [...prev, newPreviewUrl]);
        setFormData((prev) => ({
          ...prev,
          images: [...prev.images, file],
        }));
      };
      reader.readAsDataURL(file);
    });
  };

  const removeImage = (index) => {
    setPreviewUrls((prev) => prev.filter((_, i) => i !== index));
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form Data:", formData);
    alert("Data berhasil disimpan! (Demo)");
  };

  const isManasik = activeTab === "manasik";

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Tambah Ruang Baru
          </h1>
          <p className="text-gray-600">
            Kelola dan tambahkan ruang rapat, aula, kamar, serta konten manasik
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Tabs */}
          <div className="border-b border-gray-200">
            <div className="flex flex-wrap">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => handleTabChange(tab.id, tab.type)}
                    className={`flex-1 flex items-center justify-center space-x-2 px-6 py-4 font-medium transition-all min-w-0 ${
                      activeTab === tab.id
                        ? tab.id === "manasik"
                          ? "border-b-2 border-green-500 text-green-600 bg-green-50"
                          : "border-b-2 border-blue-500 text-blue-600 bg-blue-50"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    }`}
                  >
                    <Icon size={20} />
                    <span className="text-sm sm:text-base">{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Form Content */}
          <form onSubmit={handleSubmit} className="p-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left Column - Basic Info */}
              <div className="space-y-6">
                <div>
                  <h3
                    className={`text-xl font-semibold mb-6 ${
                      isManasik ? "text-green-800" : "text-blue-800"
                    }`}
                  >
                    Informasi Dasar
                  </h3>

                  {/* Name/Title */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {isManasik ? "Judul Konten" : "Nama Ruang"}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder={
                        isManasik
                          ? "Contoh: Panduan Lengkap Haji 2024"
                          : "Contoh: Meeting Room Premium"
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>

                  {!isManasik && (
                    <>
                      {/* Capacity */}
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Kapasitas
                        </label>
                        <div className="relative">
                          <Users
                            className="absolute left-3 top-3 text-gray-400"
                            size={20}
                          />
                          <input
                            type="number"
                            name="capacity"
                            value={formData.capacity}
                            onChange={handleInputChange}
                            placeholder="Jumlah orang"
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                          />
                        </div>
                      </div>

                      {/* Price */}
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {activeTab === "aula"
                            ? "Harga Sewa"
                            : "Harga per Hari (Rp)"}
                        </label>

                        {activeTab === "aula" ? (
                          // Aula specific pricing
                          <div className="space-y-3">
                            <div>
                              <label className="block text-xs text-gray-500 mb-1">
                                Harga 8 Jam
                              </label>
                              <input
                                type="number"
                                name="price8Hours"
                                value={formData.price8Hours}
                                onChange={handleInputChange}
                                placeholder="1500000"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                required
                              />
                            </div>
                            <div>
                              <label className="block text-xs text-gray-500 mb-1">
                                Harga 12 Jam
                              </label>
                              <input
                                type="number"
                                name="price12Hours"
                                value={formData.price12Hours}
                                onChange={handleInputChange}
                                placeholder="2000000"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                required
                              />
                            </div>
                            <div className="bg-blue-50 p-3 rounded-lg">
                              <p className="text-xs text-blue-700">
                                <span className="font-medium">Note:</span> Harga
                                8 jam cocok untuk acara setengah hari, sedangkan
                                12 jam untuk acara seharian penuh
                              </p>
                            </div>
                          </div>
                        ) : (
                          // Standard daily pricing for other room types
                          <input
                            type="number"
                            name="pricePerDay"
                            value={formData.pricePerDay}
                            onChange={handleInputChange}
                            placeholder="150000"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                          />
                        )}
                      </div>

                      {/* Size */}
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Luas Ruangan (m²)
                        </label>
                        <input
                          type="number"
                          step="0.1"
                          name="size"
                          value={formData.size}
                          onChange={handleInputChange}
                          placeholder="45.5"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>

                      {/* Asrama Selection */}
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Asrama/Lokasi
                        </label>
                        <select
                          name="asramaId"
                          value={formData.asramaId}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          required
                        >
                          <option value="">Pilih Asrama</option>
                          <option value="1">Asrama Al-Hijrah Jakarta</option>
                          <option value="2">
                            Asrama Baitul Makmur Bandung
                          </option>
                          <option value="3">Asrama Darul Iman Surabaya</option>
                        </select>
                      </div>
                    </>
                  )}

                  {/* Description */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {isManasik ? "Deskripsi Konten" : "Deskripsi Ruang"}
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder={
                        isManasik
                          ? "Jelaskan isi konten manasik, materi yang akan dipelajari, dan manfaatnya..."
                          : "Deskripsikan ruang, keunggulan, dan fasilitas yang tersedia..."
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Right Column - Features & Images */}
              <div className="space-y-6">
                {/* Amenities/Features */}
                <div>
                  <h3
                    className={`text-xl font-semibold mb-6 ${
                      isManasik ? "text-green-800" : "text-blue-800"
                    }`}
                  >
                    {isManasik ? "Fitur Konten" : "Fasilitas & Amenities"}
                  </h3>

                  {/* Preset Amenities */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {commonAmenities[activeTab]?.map((amenity) => {
                      const Icon = amenity.icon;
                      const isSelected = formData.amenities.includes(
                        amenity.label
                      );

                      return (
                        <button
                          key={amenity.id}
                          type="button"
                          onClick={() =>
                            handleAmenityToggle(amenity.id, amenity.label)
                          }
                          className={`flex items-center space-x-2 p-3 rounded-lg border transition-all ${
                            isSelected
                              ? isManasik
                                ? "border-green-500 bg-green-50 text-green-700"
                                : "border-blue-500 bg-blue-50 text-blue-700"
                              : "border-gray-300 hover:border-gray-400"
                          }`}
                        >
                          <Icon size={18} />
                          <span className="text-sm font-medium">
                            {amenity.label}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Custom Amenity Input */}
                  <div className="flex space-x-2 mb-4">
                    <input
                      type="text"
                      value={newAmenity}
                      onChange={(e) => setNewAmenity(e.target.value)}
                      placeholder={
                        isManasik
                          ? "Tambah fitur lain..."
                          : "Tambah fasilitas lain..."
                      }
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      onKeyPress={(e) =>
                        e.key === "Enter" &&
                        (e.preventDefault(), handleAddCustomAmenity())
                      }
                    />
                    <button
                      type="button"
                      onClick={handleAddCustomAmenity}
                      className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                        isManasik
                          ? "bg-green-600 text-white hover:bg-green-700"
                          : "bg-blue-600 text-white hover:bg-blue-700"
                      }`}
                    >
                      <Plus size={16} />
                    </button>
                  </div>

                  {/* Selected Amenities */}
                  {formData.amenities.length > 0 && (
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-gray-700">
                        {isManasik ? "Fitur Terpilih:" : "Fasilitas Terpilih:"}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {formData.amenities.map((amenity, index) => (
                          <span
                            key={index}
                            className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                              isManasik
                                ? "bg-green-100 text-green-800"
                                : "bg-blue-100 text-blue-800"
                            }`}
                          >
                            {amenity}
                            <button
                              type="button"
                              onClick={() => handleRemoveAmenity(amenity)}
                              className="ml-2 hover:text-red-600"
                            >
                              <X size={14} />
                            </button>
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Image Upload */}
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-gray-800">
                    {isManasik ? "Gambar/Ilustrasi" : "Foto Ruang"}
                  </h4>

                  {/* Upload Area */}
                  <div
                    className={`relative border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
                      dragActive
                        ? isManasik
                          ? "border-green-500 bg-green-50"
                          : "border-blue-500 bg-blue-50"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handleFileInput}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />

                    <div className="space-y-4">
                      <Upload className="mx-auto text-gray-400" size={48} />
                      <div>
                        <p className="text-lg font-medium text-gray-600">
                          {isManasik
                            ? "Upload Gambar Ilustrasi"
                            : "Upload Foto Ruang"}
                        </p>
                        <p className="text-sm text-gray-500">
                          Drag & drop atau klik untuk memilih gambar
                        </p>
                        <p className="text-xs text-gray-400 mt-2">
                          Format: JPG, PNG, GIF (Maks. 5MB per file)
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Image Previews */}
                  {previewUrls.length > 0 && (
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      {previewUrls.map((url, index) => (
                        <div key={index} className="relative group">
                          <img
                            src={url}
                            alt={`Preview ${index + 1}`}
                            className="w-full h-32 object-cover rounded-lg"
                          />
                          <button
                            type="button"
                            onClick={() => removeImage(index)}
                            className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <X size={16} />
                          </button>
                          <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs">
                            {index === 0 ? "Utama" : `${index + 1}`}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end space-x-4 mt-8 pt-6 border-t">
              <button
                type="button"
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
              >
                Batalkan
              </button>
              <button
                type="button"
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium flex items-center space-x-2"
              >
                <Eye size={20} />
                <span>Preview</span>
              </button>
              <button
                type="submit"
                className={`px-6 py-3 rounded-lg font-medium text-white transition-colors flex items-center space-x-2 ${
                  isManasik
                    ? "bg-green-600 hover:bg-green-700"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                <Save size={20} />
                <span>{isManasik ? "Simpan Konten" : "Simpan Ruang"}</span>
              </button>
            </div>

            {/* Additional Options for Manasik */}
            {isManasik && (
              <div className="mt-8 p-6 bg-green-50 rounded-lg border border-green-200">
                <h4 className="text-lg font-semibold text-green-800 mb-4">
                  Pengaturan Khusus Manasik
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-green-700 mb-2">
                      Kategori Konten
                    </label>
                    <select
                      className="w-full px-4 py-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      defaultValue="panduan"
                    >
                      <option value="panduan">Panduan Ibadah</option>
                      <option value="doa">Doa-doa</option>
                      <option value="video">Video Tutorial</option>
                      <option value="artikel">Artikel</option>
                      <option value="faq">FAQ</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-green-700 mb-2">
                      Tingkat Kesulitan
                    </label>
                    <select
                      className="w-full px-4 py-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      defaultValue="pemula"
                    >
                      <option value="pemula">Pemula</option>
                      <option value="menengah">Menengah</option>
                      <option value="lanjutan">Lanjutan</option>
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-green-700 mb-2">
                      Tag/Kata Kunci
                    </label>
                    <input
                      type="text"
                      placeholder="haji, umrah, doa, panduan, ibadah (pisahkan dengan koma)"
                      className="w-full px-4 py-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <div className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        id="featured"
                        className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                      />
                      <label
                        htmlFor="featured"
                        className="text-sm font-medium text-green-700"
                      >
                        Tampilkan sebagai konten unggulan
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </form>
        </div>

        {/* Quick Stats Card */}
        <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Statistik Ruang & Pricing Info
          </h3>
          <div className="grid md:grid-cols-4 gap-4 mb-6">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">24</div>
              <div className="text-sm text-blue-700">Ruang Rapat</div>
              <div className="text-xs text-blue-600 mt-1">
                Rp 100K - 300K/hari
              </div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">8</div>
              <div className="text-sm text-purple-700">Aula</div>
              <div className="text-xs text-purple-600 mt-1">
                8h: 1-3jt | 12h: 1.5-4jt
              </div>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <div className="text-2xl font-bold text-orange-600">156</div>
              <div className="text-sm text-orange-700">Kamar</div>
              <div className="text-xs text-orange-600 mt-1">
                Rp 200K - 1jt/malam
              </div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">32</div>
              <div className="text-sm text-green-700">Konten Manasik</div>
              <div className="text-xs text-green-600 mt-1">Gratis</div>
            </div>
          </div>

          {/* Pricing Guidelines for Aula */}
          <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
            <h4 className="font-semibold text-purple-800 mb-3">
              📋 Panduan Harga Aula
            </h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <h5 className="font-medium text-purple-700 mb-2">
                  Paket 8 Jam (Setengah Hari)
                </h5>
                <ul className="text-purple-600 space-y-1">
                  <li>• Cocok untuk: Seminar, Workshop</li>
                  <li>• Waktu: 08:00-16:00 atau 13:00-21:00</li>
                  <li>• Include: Setup & Cleanup</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-purple-700 mb-2">
                  Paket 12 Jam (Seharian)
                </h5>
                <ul className="text-purple-600 space-y-1">
                  <li>• Cocok untuk: Event besar, Wedding</li>
                  <li>• Waktu: 08:00-20:00</li>
                  <li>• Include: Full support & Catering area</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Aktivitas Terbaru
          </h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">
                  Ruang Meeting Premium berhasil ditambahkan
                </p>
                <p className="text-xs text-gray-500">2 menit yang lalu</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">
                  Executive Suite telah diperbarui
                </p>
                <p className="text-xs text-gray-500">15 menit yang lalu</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">
                  Konten "Panduan Haji Lengkap" telah dipublish
                </p>
                <p className="text-xs text-gray-500">1 jam yang lalu</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tips Section */}
        <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <span className="text-2xl mr-2">💡</span>
            Tips Mengelola Ruang
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-800 mb-2">
                Foto Berkualitas
              </h4>
              <p className="text-sm text-gray-600">
                Gunakan foto dengan resolusi tinggi dan pencahayaan yang baik.
                Foto pertama akan menjadi foto utama.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-gray-800 mb-2">
                Deskripsi Menarik
              </h4>
              <p className="text-sm text-gray-600">
                Tulis deskripsi yang detail dan menarik. Sebutkan keunggulan dan
                fasilitas khusus.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-gray-800 mb-2">
                Harga Kompetitif
              </h4>
              <p className="text-sm text-gray-600">
                Tetapkan harga yang kompetitif. Untuk aula, pertimbangkan durasi
                sewa (8 jam vs 12 jam).
              </p>
            </div>
            <div>
              <h4 className="font-medium text-gray-800 mb-2">Update Berkala</h4>
              <p className="text-sm text-gray-600">
                Perbarui informasi ruang secara berkala untuk menjaga akurasi
                data.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSpacePage;
