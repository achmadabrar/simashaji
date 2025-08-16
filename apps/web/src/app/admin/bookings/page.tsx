"use client";

import { useState } from "react";

/* ================= ICONS ================= */
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
const Check = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <polyline points="20,6 9,17 4,12" />
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

/* ================= TYPES ================= */
interface Booking {
  id: string;
  roomName: string;
  roomType: "ruang-rapat" | "aula" | "kamar";
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  bookingDate: string;
  startTime: string;
  endTime: string;
  duration: string;
  capacity: number;
  totalPrice: number;
  status: "confirmed" | "pending" | "cancelled" | "completed";
  paymentStatus: "paid" | "pending" | "failed";
  createdAt: string;
  specialRequests?: string;
  location: string;
}

/* ================= SAMPLE DATA ================= */
const sampleBookings: Booking[] = [
  {
    id: "BK001",
    roomName: "Meeting Room Premium",
    roomType: "ruang-rapat",
    customerName: "Ahmad Budi Santoso",
    customerPhone: "+62812-3456-7890",
    customerEmail: "ahmad.budi@email.com",
    bookingDate: "2025-08-15",
    startTime: "09:00",
    endTime: "12:00",
    duration: "3 jam",
    capacity: 12,
    totalPrice: 450000,
    status: "confirmed",
    paymentStatus: "paid",
    createdAt: "2025-08-13T10:30:00",
    specialRequests: "Butuh proyektor tambahan dan coffee break",
    location: "Asrama - Lt. 2",
  },
  {
    id: "BK002",
    roomName: "Grand Ballroom",
    roomType: "aula",
    customerName: "Sari Dewi Melati",
    customerPhone: "+62856-9876-5432",
    customerEmail: "sari.dewi@company.co.id",
    bookingDate: "2025-08-16",
    startTime: "18:00",
    endTime: "22:00",
    duration: "4 jam",
    capacity: 200,
    totalPrice: 2500000,
    status: "pending",
    paymentStatus: "pending",
    createdAt: "2025-08-13T14:15:00",
    specialRequests: "Dekorasi tema biru putih, butuh sound system wireless",
    location: "Asrama - Main Hall",
  },
];

/* ================= MAIN COMPONENT ================= */
export default function AdminBookingsPage() {
  const [bookings, setBookings] = useState(sampleBookings);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [roomTypeFilter, setRoomTypeFilter] = useState("all");
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

  const filteredBookings = bookings.filter((booking) => {
    const matchesSearch =
      booking.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.roomName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || booking.status === statusFilter;
    const matchesRoomType =
      roomTypeFilter === "all" || booking.roomType === roomTypeFilter;
    return matchesSearch && matchesStatus && matchesRoomType;
  });

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      confirmed: "bg-green-100 text-green-800",
      pending: "bg-yellow-100 text-yellow-800",
      cancelled: "bg-red-100 text-red-800",
      completed: "bg-blue-100 text-blue-800",
    };
    return `px-2 py-1 rounded-full text-xs font-medium ${
      statusConfig[status as keyof typeof statusConfig]
    }`;
  };
  const getPaymentStatusBadge = (status: string) => {
    const statusConfig = {
      paid: "bg-green-100 text-green-800",
      pending: "bg-orange-100 text-orange-800",
      failed: "bg-red-100 text-red-800",
    };
    return `px-2 py-1 rounded-full text-xs font-medium ${
      statusConfig[status as keyof typeof statusConfig]
    }`;
  };

  const handleViewDetail = (booking: Booking) => {
    setSelectedBooking(booking);
    setIsDetailModalOpen(true);
  };
  const updateBookingStatus = (bookingId: string, newStatus: string) => {
    setBookings((prev) =>
      prev.map((b) =>
        b.id === bookingId ? { ...b, status: newStatus as any } : b
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold">Booking</h1>
          <p className="text-gray-600">Kelola booking ruangan Asrama</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2">
          <Download size={16} /> Export Data
        </button>
      </div>

      {/* Filter */}
      <div className="bg-white p-4 rounded-lg shadow mb-6 flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 text-black" size={20} />
          <input
            className="w-full pl-10 pr-4 py-2 border rounded-lg text-black"
            placeholder="Cari booking..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="border rounded-lg px-3"
        >
          <option value="all">Semua Status</option>
          <option value="confirmed">Confirmed</option>
          <option value="pending">Pending</option>
          <option value="cancelled">Cancelled</option>
          <option value="completed">Completed</option>
        </select>
        <select
          value={roomTypeFilter}
          onChange={(e) => setRoomTypeFilter(e.target.value)}
          className="border rounded-lg px-3"
        >
          <option value="all">Semua Tipe</option>
          <option value="ruang-rapat">Ruang Rapat</option>
          <option value="aula">Aula</option>
          <option value="kamar">Kamar</option>
        </select>
        <button
          onClick={() => {
            setSearchTerm("");
            setStatusFilter("all");
            setRoomTypeFilter("all");
          }}
          className="bg-gray-200 px-4 py-2 rounded-lg flex items-center gap-2"
        >
          <Filter size={16} /> Reset
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-3 text-left">Booking ID</th>
              <th className="p-3 text-left">Customer</th>
              <th className="p-3 text-left">Ruangan</th>
              <th className="p-3 text-left">Tanggal</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Payment</th>
              <th className="p-3 text-left">Total</th>
              <th className="p-3">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {filteredBookings.map((b) => (
              <tr key={b.id} className="border-t">
                <td className="p-3">{b.id}</td>
                <td className="p-3">{b.customerName}</td>
                <td className="p-3">{b.roomName}</td>
                <td className="p-3">
                  {new Date(b.bookingDate).toLocaleDateString("id-ID")}
                </td>
                <td className="p-3">
                  <span className={getStatusBadge(b.status)}>{b.status}</span>
                </td>
                <td className="p-3">
                  <span className={getPaymentStatusBadge(b.paymentStatus)}>
                    {b.paymentStatus}
                  </span>
                </td>
                <td className="p-3">
                  Rp {b.totalPrice.toLocaleString("id-ID")}
                </td>
                <td className="p-3 flex gap-2">
                  <button
                    onClick={() => handleViewDetail(b)}
                    className="text-blue-600"
                  >
                    <Eye size={16} />
                  </button>
                  {b.status === "pending" && (
                    <button
                      onClick={() => updateBookingStatus(b.id, "confirmed")}
                      className="text-green-600"
                    >
                      <Check size={16} />
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal Detail */}
      {isDetailModalOpen && selectedBooking && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">
                Detail Booking #{selectedBooking.id}
              </h2>
              <button onClick={() => setIsDetailModalOpen(false)}>
                <X size={20} />
              </button>
            </div>

            {/* Info Customer */}
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Informasi Customer</h3>
              <div className="bg-gray-50 p-3 rounded">
                <div className="flex items-center gap-2">
                  <Users size={16} /> {selectedBooking.customerName}
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={16} /> {selectedBooking.customerPhone}
                </div>
                <div className="text-sm text-gray-600">
                  {selectedBooking.customerEmail}
                </div>
              </div>
            </div>

            {/* Status & Pembayaran */}
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Status & Pembayaran</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gray-50 p-3 rounded">
                  <div className="text-sm text-gray-500">Status Booking</div>
                  <span
                    className={`inline-block mt-1 ${getStatusBadge(
                      selectedBooking.status
                    )}`}
                  >
                    {selectedBooking.status}
                  </span>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <div className="text-sm text-gray-500">Status Payment</div>
                  <span
                    className={`inline-block mt-1 ${getPaymentStatusBadge(
                      selectedBooking.paymentStatus
                    )}`}
                  >
                    {selectedBooking.paymentStatus}
                  </span>
                </div>
              </div>
              <div className="mt-3 bg-blue-50 p-3 rounded">
                <div className="text-sm text-gray-500">Total Pembayaran</div>
                <div className="text-lg font-bold text-blue-600">
                  Rp {selectedBooking.totalPrice.toLocaleString("id-ID")}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-2">
              {selectedBooking.status === "pending" && (
                <>
                  <button
                    onClick={() => {
                      updateBookingStatus(selectedBooking.id, "confirmed");
                      setIsDetailModalOpen(false);
                    }}
                    className="bg-green-600 text-white px-3 py-1 rounded"
                  >
                    Konfirmasi
                  </button>
                  <button
                    onClick={() => {
                      updateBookingStatus(selectedBooking.id, "cancelled");
                      setIsDetailModalOpen(false);
                    }}
                    className="bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Batalkan
                  </button>
                </>
              )}
              <button
                onClick={() => setIsDetailModalOpen(false)}
                className="bg-gray-200 px-3 py-1 rounded"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
