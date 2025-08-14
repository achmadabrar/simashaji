import Link from "next/link";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-900 text-white p-4">
        <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
        <nav className="space-y-2">
          <Link
            href="/admin/bookings"
            className="block px-3 py-2 rounded hover:bg-blue-700"
          >
            Dashboard Booking
          </Link>
          <Link
            href="/admin/add-space"
            className="block px-3 py-2 rounded hover:bg-blue-700"
          >
            Tambah Ruang
          </Link>
          <Link
            href="/admin/admins"
            className="block px-3 py-2 rounded hover:bg-blue-700"
          >
            Manajemen Admin
          </Link>
          <Link
            href="/admin/asrama"
            className="block px-3 py-2 rounded hover:bg-blue-700"
          >
            Manajemen Asrama
          </Link>
          <Link
            href="/admin/reports"
            className="block px-3 py-2 rounded hover:bg-blue-700"
          >
            Laporan
          </Link>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 bg-gray-50 p-6">{children}</main>
    </div>
  );
}
