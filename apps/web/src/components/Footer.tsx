import Image from "next/image";
import Link from "next/link";
import Logo from "../../assets/logo_simashaji.png";

// Icon components
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

const Footer = () => (
  <footer className="bg-gray-900 text-white py-12">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <Image src={Logo} alt="Simashaji Logo" width={60} height={60} />
            <span className="text-xl font-bold">Simashaji</span>
          </div>
          <p className="text-gray-400">
            Platform terpercaya untuk menyewa ruang rapat, aula, dan kamar
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-4">Layanan</h4>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link
                href="/meeting-room"
                className="hover:text-white transition-colors"
              >
                Ruang Rapat
              </Link>
            </li>
            <li>
              <Link href="/hall" className="hover:text-white transition-colors">
                Aula
              </Link>
            </li>
            <li>
              <Link
                href="/rooms"
                className="hover:text-white transition-colors"
              >
                Kamar
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">Bantuan</h4>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link href="/faq" className="hover:text-white transition-colors">
                FAQ
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-white transition-colors"
              >
                Kontak
              </Link>
            </li>
            <li>
              <Link
                href="/terms"
                className="hover:text-white transition-colors"
              >
                Syarat & Ketentuan
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">Kontak</h4>
          <div className="space-y-2 text-gray-400">
            <div className="flex items-center space-x-2">
              <Phone size={16} />
              <span>+62 21 1234 5678</span>
            </div>
            <div className="flex items-center space-x-2">
              <MessageCircle size={16} />
              <span>WhatsApp Support</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; 2024 Simashaji. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
