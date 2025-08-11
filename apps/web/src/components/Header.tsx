"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../../assets/logo_simashaji.png";

const Header = () => {
  const pathname = usePathname();

  // Function untuk menentukan apakah link sedang aktif
  const isActiveLink = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
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
                className="text-xl font-bold text-blue-900 hover:text-blue-700 transition-colors"
              >
                Simashaji
              </Link>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            <Link
              href="/"
              className={`font-bold transition-colors ${
                isActiveLink("/")
                  ? "text-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              Beranda
            </Link>
            <Link
              href="/meeting-room"
              className={`font-bold transition-colors ${
                isActiveLink("/meeting-room")
                  ? "text-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              Ruang Rapat
            </Link>
            <Link
              href="/hall"
              className={`font-bold transition-colors ${
                isActiveLink("/hall")
                  ? "text-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              Aula
            </Link>
            <Link
              href="/rooms"
              className={`font-bold transition-colors ${
                isActiveLink("/rooms")
                  ? "text-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              Kamar
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
              href="/auth/register"
              className="bg-blue-600 text-white px-4 py-2 font-bold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Daftar
            </Link>
          </div>
        </div>

        {/* Mobile menu - bisa ditambahkan nanti */}
        <div className="md:hidden">{/* Hamburger menu untuk mobile */}</div>
      </div>
    </header>
  );
};

export default Header;
