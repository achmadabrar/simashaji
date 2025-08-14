"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../../assets/logo_simashaji.png";

// Icon components
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
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14,2 14,8 20,8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10,9 9,9 8,9" />
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

const DollarSign = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <line x1="12" y1="1" x2="12" y2="23" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);

const BarChart = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <line x1="12" y1="20" x2="12" y2="10" />
    <line x1="18" y1="20" x2="18" y2="4" />
    <line x1="6" y1="20" x2="6" y2="16" />
  </svg>
);

const Building = ({ size = 20, className = "" }) => (
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
    <path d="M6 12h4v6h-4v-6Z" />
    <path d="M14 6h4v6h-4V6Z" />
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

const Filter = ({ size = 20, className = "" }) => (
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

// Type definitions
type ReportType = "bookings" | "revenue" | "users" | "spaces";
type AsramaHaji =
  | "all"
  | "asrama-1"
  | "asrama-2"
  | "asrama-3"
  | "asrama-4"
  | "asrama-5"
  | "asrama-6"
  | "asrama-7"
  | "asrama-8"
  | "asrama-9"
  | "asrama-10"
  | "asrama-11"
  | "asrama-12"
  | "asrama-13";

interface BookingData {
  id: number;
  customerName: string;
  spaceName: string;
  date: string;
  amount: number;
  status: string;
  asrama: string;
}

interface StatsData {
  totalBookings: number;
  totalRevenue: number;
  totalUsers: number;
  totalSpaces: number;
}

export default function AdminDashboard() {
  const [selectedReport, setSelectedReport] = useState<ReportType>("bookings");
  const [selectedAsrama, setSelectedAsrama] = useState<AsramaHaji>("all");
  const [dateFrom, setDateFrom] = useState("2024-01-01");
  const [dateTo, setDateTo] = useState("2024-12-31");
  const [isGenerating, setIsGenerating] = useState(false);

  // Mock data
  const statsData: StatsData = {
    totalBookings: 1247,
    totalRevenue: 185750000,
    totalUsers: 892,
    totalSpaces: 156,
  };

  const bookingData: BookingData[] = [
    {
      id: 1,
      customerName: "PT. Maju Jaya",
      spaceName: "Meeting Room Premium",
      date: "2024-08-10",
      amount: 150000,
      status: "Confirmed",
      asrama: "Asrama Haji 1",
    },
    {
      id: 2,
      customerName: "CV. Sukses Mandiri",
      spaceName: "Grand Ballroom",
      date: "2024-08-12",
      amount: 2500000,
      status: "Pending",
      asrama: "Asrama Haji 3",
    },
    {
      id: 3,
      customerName: "John Doe",
      spaceName: "Executive Suite",
      date: "2024-08-15",
      amount: 350000,
      status: "Completed",
      asrama: "Asrama Haji 5",
    },
    {
      id: 4,
      customerName: "PT. Global Tech",
      spaceName: "Conference Hall A",
      date: "2024-08-18",
      amount: 750000,
      status: "Confirmed",
      asrama: "Asrama Haji 2",
    },
    {
      id: 5,
      customerName: "Startup Innovate",
      spaceName: "Co-working Space",
      date: "2024-08-20",
      amount: 100000,
      status: "Completed",
      asrama: "Asrama Haji 7",
    },
    {
      id: 6,
      customerName: "PT. Digital Indo",
      spaceName: "Meeting Room Standard",
      date: "2024-08-22",
      amount: 120000,
      status: "Confirmed",
      asrama: "Asrama Haji 4",
    },
    {
      id: 7,
      customerName: "Yayasan Pendidikan",
      spaceName: "Aula Serbaguna",
      date: "2024-08-25",
      amount: 800000,
      status: "Completed",
      asrama: "Asrama Haji 8",
    },
    {
      id: 8,
      customerName: "CV. Mitra Sejahtera",
      spaceName: "VIP Room",
      date: "2024-08-28",
      amount: 450000,
      status: "Pending",
      asrama: "Asrama Haji 6",
    },
  ];

  // Asrama Haji options
  const asramaOptions: Array<{ value: AsramaHaji; label: string }> = [
    { value: "all", label: "Semua Asrama" },
    { value: "asrama-1", label: "Asrama Haji 1" },
    { value: "asrama-2", label: "Asrama Haji 2" },
    { value: "asrama-3", label: "Asrama Haji 3" },
    { value: "asrama-4", label: "Asrama Haji 4" },
    { value: "asrama-5", label: "Asrama Haji 5" },
    { value: "asrama-6", label: "Asrama Haji 6" },
    { value: "asrama-7", label: "Asrama Haji 7" },
    { value: "asrama-8", label: "Asrama Haji 8" },
    { value: "asrama-9", label: "Asrama Haji 9" },
    { value: "asrama-10", label: "Asrama Haji 10" },
    { value: "asrama-11", label: "Asrama Haji 11" },
    { value: "asrama-12", label: "Asrama Haji 12" },
    { value: "asrama-13", label: "Asrama Haji 13" },
  ];

  // Filter data based on selected asrama
  const filteredBookingData =
    selectedAsrama === "all"
      ? bookingData
      : bookingData.filter(
          (booking) =>
            booking.asrama ===
            asramaOptions.find((opt) => opt.value === selectedAsrama)?.label
        );

  // Calculate filtered stats
  const filteredStats = {
    totalBookings: filteredBookingData.length,
    totalRevenue: filteredBookingData.reduce(
      (sum, booking) => sum + booking.amount,
      0
    ),
    totalUsers:
      selectedAsrama === "all"
        ? statsData.totalUsers
        : Math.floor(statsData.totalUsers / 13),
    totalSpaces:
      selectedAsrama === "all"
        ? statsData.totalSpaces
        : Math.floor(statsData.totalSpaces / 13),
  };

  const generatePDF = async (reportType: ReportType) => {
    setIsGenerating(true);

    // Simulate PDF generation
    setTimeout(() => {
      const content = generateReportContent(reportType);
      const asramaLabel =
        selectedAsrama === "all"
          ? "Semua Asrama"
          : asramaOptions.find((opt) => opt.value === selectedAsrama)?.label;

      // Create a simple PDF-like content
      const pdfContent = `
SIMASHAJI - LAPORAN ${reportType.toUpperCase()}
Periode: ${dateFrom} s/d ${dateTo}
Asrama: ${asramaLabel}
Generated on: ${new Date().toLocaleString("id-ID")}

${content}
      `;

      const blob = new Blob([pdfContent], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `simashaji_${reportType}_${selectedAsrama}_${
        new Date().toISOString().split("T")[0]
      }.pdf`;
      a.click();
      URL.revokeObjectURL(url);

      setIsGenerating(false);
    }, 2000);
  };

  const generateCSV = async (reportType: ReportType) => {
    setIsGenerating(true);

    setTimeout(() => {
      let csvContent = "";

      if (reportType === "bookings") {
        csvContent = "ID,Customer Name,Space Name,Date,Amount,Status,Asrama\n";
        filteredBookingData.forEach((booking) => {
          csvContent += `${booking.id},${booking.customerName},${booking.spaceName},${booking.date},${booking.amount},${booking.status},${booking.asrama}\n`;
        });
      } else if (reportType === "revenue") {
        csvContent = "Month,Revenue\n";
        csvContent += "January,15650000\n";
        csvContent += "February,18750000\n";
        csvContent += "March,21230000\n";
        csvContent += "April,17890000\n";
      }

      const blob = new Blob([csvContent], { type: "text/csv" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `simashaji_${reportType}_${selectedAsrama}_${
        new Date().toISOString().split("T")[0]
      }.csv`;
      a.click();
      URL.revokeObjectURL(url);

      setIsGenerating(false);
    }, 1500);
  };

  const generateReportContent = (reportType: ReportType): string => {
    switch (reportType) {
      case "bookings":
        return `
LAPORAN BOOKING
===============
Asrama: ${
          selectedAsrama === "all"
            ? "Semua Asrama"
            : asramaOptions.find((opt) => opt.value === selectedAsrama)?.label
        }
Total Booking: ${filteredStats.totalBookings}

Detail Booking:
${filteredBookingData
  .map(
    (booking) =>
      `- ${booking.customerName} | ${booking.spaceName} | ${
        booking.date
      } | Rp ${booking.amount.toLocaleString("id-ID")} | ${booking.status} | ${
        booking.asrama
      }`
  )
  .join("\n")}
        `;
      case "revenue":
        return `
LAPORAN PENDAPATAN
==================
Asrama: ${
          selectedAsrama === "all"
            ? "Semua Asrama"
            : asramaOptions.find((opt) => opt.value === selectedAsrama)?.label
        }
Total Revenue: Rp ${filteredStats.totalRevenue.toLocaleString("id-ID")}

Breakdown per bulan:
- Januari: Rp 15.650.000
- Februari: Rp 18.750.000
- Maret: Rp 21.230.000
- April: Rp 17.890.000
        `;
      case "users":
        return `
LAPORAN PENGGUNA
================
Asrama: ${
          selectedAsrama === "all"
            ? "Semua Asrama"
            : asramaOptions.find((opt) => opt.value === selectedAsrama)?.label
        }
Total Users: ${filteredStats.totalUsers}

Kategori Pengguna:
- Corporate: 45%
- Individual: 35% 
- Government: 20%
        `;
      case "spaces":
        return `
LAPORAN RUANG
=============
Asrama: ${
          selectedAsrama === "all"
            ? "Semua Asrama"
            : asramaOptions.find((opt) => opt.value === selectedAsrama)?.label
        }
Total Spaces: ${filteredStats.totalSpaces}

Kategori Ruang:
- Meeting Room: ${Math.floor(filteredStats.totalSpaces * 0.5)} ruang
- Aula/Ballroom: ${Math.floor(filteredStats.totalSpaces * 0.22)} ruang
- Hotel Room: ${Math.floor(filteredStats.totalSpaces * 0.28)} ruang
        `;
      default:
        return "Data tidak tersedia";
    }
  };

  const reportOptions: Array<{
    value: ReportType;
    label: string;
    icon: React.ComponentType<{ size?: number; className?: string }>;
  }> = [
    { value: "bookings", label: "Laporan Booking", icon: Calendar },
    { value: "revenue", label: "Laporan Pendapatan", icon: DollarSign },
    { value: "users", label: "Laporan Pengguna", icon: Users },
    { value: "spaces", label: "Laporan Ruang", icon: Building },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
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
            <h1 className="text-2xl font-bold text-gray-900">Laporan</h1>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">Admin Panel</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm ">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Booking</p>
                <p className="text-2xl font-bold text-gray-900">
                  {filteredStats.totalBookings.toLocaleString()}
                </p>
                {selectedAsrama !== "all" && (
                  <p className="text-xs text-blue-600">
                    {
                      asramaOptions.find((opt) => opt.value === selectedAsrama)
                        ?.label
                    }
                  </p>
                )}
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <Calendar className="text-blue-600" size={24} />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm ">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Pendapatan</p>
                <p className="text-2xl font-bold text-gray-900">
                  Rp {(filteredStats.totalRevenue / 1000000).toFixed(0)}M
                </p>
                {selectedAsrama !== "all" && (
                  <p className="text-xs text-green-600">
                    {
                      asramaOptions.find((opt) => opt.value === selectedAsrama)
                        ?.label
                    }
                  </p>
                )}
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <DollarSign className="text-green-600" size={24} />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm ">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Pengguna</p>
                <p className="text-2xl font-bold text-gray-900">
                  {filteredStats.totalUsers.toLocaleString()}
                </p>
                {selectedAsrama !== "all" && (
                  <p className="text-xs text-purple-600">
                    {
                      asramaOptions.find((opt) => opt.value === selectedAsrama)
                        ?.label
                    }
                  </p>
                )}
              </div>
              <div className="bg-purple-100 p-3 rounded-lg">
                <Users className="text-purple-600" size={24} />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm ">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Ruang</p>
                <p className="text-2xl font-bold text-gray-900">
                  {filteredStats.totalSpaces}
                </p>
                {selectedAsrama !== "all" && (
                  <p className="text-xs text-orange-600">
                    {
                      asramaOptions.find((opt) => opt.value === selectedAsrama)
                        ?.label
                    }
                  </p>
                )}
              </div>
              <div className="bg-orange-100 p-3 rounded-lg">
                <Building className="text-orange-600" size={24} />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Report Generation Panel */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm  p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <FileText className="mr-2" />
                Generate Laporan
              </h2>

              <div className="space-y-4">
                {/* Asrama Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Filter className="inline mr-1" size={16} />
                    Filter Asrama Haji
                  </label>
                  <select
                    value={selectedAsrama}
                    onChange={(e) =>
                      setSelectedAsrama(e.target.value as AsramaHaji)
                    }
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {asramaOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Report Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Jenis Laporan
                  </label>
                  <select
                    value={selectedReport}
                    onChange={(e) =>
                      setSelectedReport(e.target.value as ReportType)
                    }
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {reportOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date Range */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tanggal Mulai
                    </label>
                    <input
                      type="date"
                      value={dateFrom}
                      onChange={(e) => setDateFrom(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tanggal Selesai
                    </label>
                    <input
                      type="date"
                      value={dateTo}
                      onChange={(e) => setDateTo(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Generate Buttons */}
                <div className="pt-4 space-y-3">
                  <button
                    onClick={() => generatePDF(selectedReport)}
                    disabled={isGenerating}
                    className="w-full bg-red-600 text-white py-3 px-4 rounded-lg hover:bg-red-700 disabled:bg-gray-400 transition-colors flex items-center justify-center"
                  >
                    {isGenerating ? (
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    ) : (
                      <>
                        <Download className="mr-2" size={20} />
                        Generate PDF
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => generateCSV(selectedReport)}
                    disabled={isGenerating}
                    className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 disabled:bg-gray-400 transition-colors flex items-center justify-center"
                  >
                    {isGenerating ? (
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    ) : (
                      <>
                        <Download className="mr-2" size={20} />
                        Generate CSV
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Data Preview */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm ">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-bold text-gray-900 flex items-center">
                  <BarChart className="mr-2" />
                  Preview Data -{" "}
                  {
                    reportOptions.find((opt) => opt.value === selectedReport)
                      ?.label
                  }
                </h2>
              </div>

              <div className="p-6">
                {selectedReport === "bookings" && (
                  <div className="overflow-x-auto">
                    <div className="mb-4 text-sm text-gray-600">
                      Menampilkan {filteredBookingData.length} booking
                      {selectedAsrama !== "all" &&
                        ` dari ${
                          asramaOptions.find(
                            (opt) => opt.value === selectedAsrama
                          )?.label
                        }`}
                    </div>
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                            Customer
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                            Ruang
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                            Tanggal
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                            Amount
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                            Status
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                            Asrama
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {filteredBookingData.slice(0, 8).map((booking) => (
                          <tr key={booking.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                              {booking.customerName}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                              {booking.spaceName}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                              {booking.date}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                              Rp {booking.amount.toLocaleString("id-ID")}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span
                                className={`px-2 py-1 text-xs rounded-full ${
                                  booking.status === "Completed"
                                    ? "bg-green-100 text-green-800"
                                    : booking.status === "Confirmed"
                                    ? "bg-blue-100 text-blue-800"
                                    : "bg-yellow-100 text-yellow-800"
                                }`}
                              >
                                {booking.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                              {booking.asrama}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {selectedReport === "revenue" && (
                  <div className="space-y-4">
                    <div className="mb-4 text-sm text-gray-600">
                      {selectedAsrama === "all"
                        ? "Semua Asrama"
                        : asramaOptions.find(
                            (opt) => opt.value === selectedAsrama
                          )?.label}
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-medium text-gray-900">
                          Total Revenue
                        </h3>
                        <p className="text-2xl font-bold text-green-600">
                          Rp{" "}
                          {filteredStats.totalRevenue.toLocaleString("id-ID")}
                        </p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-medium text-gray-900">
                          Average per Booking
                        </h3>
                        <p className="text-2xl font-bold text-blue-600">
                          Rp{" "}
                          {filteredStats.totalBookings > 0
                            ? Math.round(
                                filteredStats.totalRevenue /
                                  filteredStats.totalBookings
                              ).toLocaleString("id-ID")
                            : "0"}
                        </p>
                      </div>
                    </div>
                    <div className="mt-6">
                      <h4 className="font-medium text-gray-900 mb-4">
                        Revenue per Month
                      </h4>
                      <div className="space-y-2">
                        {["Januari", "Februari", "Maret", "April"].map(
                          (month, index) => {
                            const baseAmounts = [
                              15650000, 18750000, 21230000, 17890000,
                            ];
                            const adjustedAmount =
                              selectedAsrama === "all"
                                ? baseAmounts[index]
                                : Math.floor(baseAmounts[index] / 13);
                            return (
                              <div
                                key={month}
                                className="flex justify-between items-center p-3 bg-gray-50 rounded-lg"
                              >
                                <span className="font-medium">{month}</span>
                                <span className="text-green-600 font-bold">
                                  Rp {adjustedAmount.toLocaleString("id-ID")}
                                </span>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {selectedReport === "users" && (
                  <div className="space-y-6">
                    <div className="mb-4 text-sm text-gray-600">
                      {selectedAsrama === "all"
                        ? "Semua Asrama"
                        : asramaOptions.find(
                            (opt) => opt.value === selectedAsrama
                          )?.label}
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-blue-50 p-4 rounded-lg text-center">
                        <h3 className="font-medium text-gray-900">Corporate</h3>
                        <p className="text-2xl font-bold text-blue-600">45%</p>
                        <p className="text-sm text-gray-600">
                          {Math.floor(filteredStats.totalUsers * 0.45)} users
                        </p>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg text-center">
                        <h3 className="font-medium text-gray-900">
                          Individual
                        </h3>
                        <p className="text-2xl font-bold text-green-600">35%</p>
                        <p className="text-sm text-gray-600">
                          {Math.floor(filteredStats.totalUsers * 0.35)} users
                        </p>
                      </div>
                      <div className="bg-purple-50 p-4 rounded-lg text-center">
                        <h3 className="font-medium text-gray-900">
                          Government
                        </h3>
                        <p className="text-2xl font-bold text-purple-600">
                          20%
                        </p>
                        <p className="text-sm text-gray-600">
                          {Math.floor(filteredStats.totalUsers * 0.2)} users
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {selectedReport === "spaces" && (
                  <div className="space-y-4">
                    <div className="mb-4 text-sm text-gray-600">
                      {selectedAsrama === "all"
                        ? "Semua Asrama"
                        : asramaOptions.find(
                            (opt) => opt.value === selectedAsrama
                          )?.label}
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-orange-50 p-4 rounded-lg text-center">
                        <h3 className="font-medium text-gray-900">
                          Meeting Room
                        </h3>
                        <p className="text-2xl font-bold text-orange-600">
                          {Math.floor(filteredStats.totalSpaces * 0.5)}
                        </p>
                        <p className="text-sm text-gray-600">ruang</p>
                      </div>
                      <div className="bg-indigo-50 p-4 rounded-lg text-center">
                        <h3 className="font-medium text-gray-900">
                          Aula/Ballroom
                        </h3>
                        <p className="text-2xl font-bold text-indigo-600">
                          {Math.floor(filteredStats.totalSpaces * 0.22)}
                        </p>
                        <p className="text-sm text-gray-600">ruang</p>
                      </div>
                      <div className="bg-pink-50 p-4 rounded-lg text-center">
                        <h3 className="font-medium text-gray-900">
                          Hotel Room
                        </h3>
                        <p className="text-2xl font-bold text-pink-600">
                          {Math.floor(filteredStats.totalSpaces * 0.28)}
                        </p>
                        <p className="text-sm text-gray-600">ruang</p>
                      </div>
                    </div>

                    {/* Breakdown per Asrama when showing all */}
                    {selectedAsrama === "all" && (
                      <div className="mt-8">
                        <h4 className="font-medium text-gray-900 mb-4">
                          Breakdown per Asrama
                        </h4>
                        <div className="grid grid-cols-2 gap-4">
                          {asramaOptions.slice(1).map((asrama, index) => (
                            <div
                              key={asrama.value}
                              className="bg-gray-50 p-3 rounded-lg flex justify-between items-center"
                            >
                              <span className="text-sm font-medium">
                                {asrama.label}
                              </span>
                              <span className="text-sm text-blue-600 font-semibold">
                                {Math.floor(statsData.totalSpaces / 13)} ruang
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
