import { useAuth } from "@/context/AuthContext";
import Link from "next/link";

export default function Navbar() {
  const { logout } = useAuth();

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">Yönetim Paneli</div>
        <div className="flex space-x-4">
          <Link
            href="/admin/setting"
            className="text-gray-600 hover:text-gray-800"
          >
            Ayarlar
          </Link>

          <Link
            href="/admin/site-logo"
            className="text-gray-600 hover:text-gray-800"
          >
            Logolar
          </Link>

          <Link
            href="/admin/link"
            className="text-gray-600 hover:text-gray-800"
          >
            Link
          </Link>
          <Link
            href="/admin/announcement"
            className="text-gray-600 hover:text-gray-800"
          >
            Duyurular
          </Link>

          <button
            onClick={logout}
            className="text-gray-600 hover:text-gray-800"
          >
            Çıkış Yap
          </button>
        </div>
      </div>
    </nav>
  );
}
