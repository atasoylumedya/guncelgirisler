"use client";
import Card from "@/components/Admin/UI/Card";
import { useRouter } from "next/navigation";
import { FaSitemap, FaBullhorn, FaPowerOff, FaLink } from "react-icons/fa6";
import { FaCog } from "react-icons/fa";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

const MENU = [
  {
    color: "blue",
    Icon: FaCog,
    title: "Ayarlar",
    href: "/admin/setting",
  },

  {
    color: "blue",
    Icon: FaSitemap,
    title: "Siteler (Logolar)",
    href: "/admin/site-logo",
  },
  {
    color: "blue",
    Icon: FaLink,
    title: "Link",
    href: "/admin/link",
  },
  {
    color: "blue",
    Icon: FaBullhorn,
    title: "Duyurular",
    href: "/admin/announcement",
  },
];

export default function Home() {
  const { logout } = useAuth();

  return (
    <div className="py-6">
      <Card title="Dashboard">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          {MENU.map((item, index) => {
            return (
              <div
                key={index}
                className={` group bg-blue-500 rounded-lg overflow-hidden shadow relative flex flex-col items-start justify-start  cursor-pointer `}
              >
                <item.Icon
                  className={`absolute size-12 text-blue-800   right-3 top-3 group-hover:-rotate-3 group-hover:scale-[1.15] transition-all duration-300`}
                />
                <Link
                  href={item.href}
                  className={` text-white font-semibold py-5 px-5  text-lg group-hover:scale-105 transition-all duration-300 flex-1 `}
                >
                  <span
                    dangerouslySetInnerHTML={{
                      __html: item.title.replace(" ", "<br />"),
                    }}
                  ></span>
                </Link>
              </div>
            );
          })}
          <div
            className={` group bg-blue-500 rounded-lg overflow-hidden shadow relative flex flex-col items-start justify-start  cursor-pointer`}
          >
            <FaPowerOff
              className={`absolute size-12 text-blue-800   right-3 top-3 group-hover:-rotate-3 group-hover:scale-[1.15] transition-all duration-300`}
            />
            <button
              onClick={logout}
              className={` text-white font-semibold py-4 px-5 pb-0 text-lg group-hover:scale-105 transition-all duration-300 `}
            >
              Çıkış Yap
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
}
