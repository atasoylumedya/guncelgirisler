"use client";
import { useState } from "react";

import Card from "@/components/Admin/UI/Card";
import Modal, { useModal } from "@/components/Admin/UI/Modal";
import { CiBullhorn } from "react-icons/ci";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FiPlus } from "react-icons/fi";
import { TfiLayoutSliderAlt } from "react-icons/tfi";
import { MdOutlineWork } from "react-icons/md";
import { IoMdPhotos } from "react-icons/io";
import { PiStrategyBold } from "react-icons/pi";
import { GrDocumentPerformance } from "react-icons/gr";
import {
  FaNewspaper,
  FaHandshakeSimple,
  FaSitemap,
  FaMoneyBillTransfer,
  FaMoneyBillTrendUp,
  FaPeopleRoof,
  FaBullhorn,
} from "react-icons/fa6";
import {
  FaBoxes,
  FaProjectDiagram,
  FaPencilAlt,
  FaCalendar,
  FaGavel,
  FaChartLine,
  FaMoneyBillWave,
  FaRegWindowMaximize,
} from "react-icons/fa";

import { BsFillMenuButtonWideFill } from "react-icons/bs";

const MENU = [
  {
    color: "primary",
    Icon: FaNewspaper,
    title: "Haberler",
    href: "/admin/news",
    subTitle: "Yeni Ekle",
    subHref: "/admin/news/create",
  },

  {
    color: "primary",
    Icon: FaPencilAlt,
    title: "İçerikler",
    href: "/admin/content",
    subTitle: "Yeni Ekle",
    subHref: "/admin/content/create",
  },
  {
    color: "primary",
    Icon: TfiLayoutSliderAlt,
    title: "Slider",
    href: "/admin/slider",
    subTitle: "Yeni Ekle",
    subHref: "/admin/slider/create",
  },
  {
    color: "primary",
    Icon: FaBullhorn,
    title: "Duyurular",
    href: "/admin/announcement",
    subTitle: "Yeni Ekle",
    subHref: "/admin/announcement/create",
  },

  {
    color: "primary",
    Icon: FaPeopleRoof,
    title: "Meclis Toplantıları",
    href: "/admin/announcement",
    subTitle: "Yeni Ekle",
    subHref: "/admin/announcement/create",
  },
  {
    color: "primary",
    Icon: FaProjectDiagram,
    title: "Projeler",
    href: "/admin/project",
    subTitle: "Yeni Ekle",
    subHref: "/admin/project/create",
  },
  {
    color: "primary",
    Icon: FaCalendar,
    title: "Etkinlikler",
    href: "/admin/event",
    subTitle: "Yeni Ekle",
    subHref: "/admin/event/create",
  },
  {
    color: "primary",
    Icon: FaHandshakeSimple,
    title: "İhaleler",
    href: "/admin/tender",
    subTitle: "Yeni Ekle",
    subHref: "/admin/tender/create",
  },
  {
    color: "primary",
    Icon: MdOutlineWork,
    title: "Hizmet Rehberi",
    href: "/admin/service-guide",
    subTitle: "Yeni Ekle",
    subHref: "/admin/service-guide/create",
  },
  {
    color: "primary",
    Icon: IoMdPhotos,
    title: "Foto Galeri",
    href: "/admin/photo-gallery",
    subTitle: "Yeni Ekle",
    subHref: "/admin/photo-gallery/create",
  },

  {
    color: "primary",
    Icon: FaGavel,
    title: "Meclis Kararları",
    href: "/admin/decision",
    subTitle: "Yeni Ekle",
    subHref: "/admin/decision/create",
  },

  {
    color: "primary",
    Icon: PiStrategyBold,
    title: "Stratejik Planlar",
    href: "/admin/strategic-plan",
    subTitle: "Yeni Ekle",
    subHref: "/admin/strategic-plan/admin",
  },

  {
    color: "primary",
    Icon: FaChartLine,
    title: "Faaliyet Raporları",
    href: "/admin/activity-report",
    subTitle: "Yeni Ekle",
    subHref: "/admin/activity-report/create",
  },

  {
    color: "primary",
    Icon: GrDocumentPerformance,
    title: "Performans Programı",
    href: "/admin/performance-program",
    subTitle: "Yeni Ekle",
    subHref: "/admin/performance-program/create",
  },

  {
    color: "primary",
    Icon: FaMoneyBillWave,
    title: "Bütçeler",
    href: "/admin/budget",
    subTitle: "Yeni Ekle",
    subHref: "/admin/budget/create",
  },
  {
    color: "primary",
    Icon: FaMoneyBillTransfer,
    title: "Gelir Tarifesi",
    href: "/admin/income-tariff",
    subTitle: "Yeni Ekle",
    subHref: "/admin/income-tariff/create",
  },

  {
    color: "primary",
    Icon: FaMoneyBillTrendUp,
    title: "Mali Raporlar",
    href: "/admin/financial-report",
    subTitle: "Yeni Ekle",
    subHref: "/admin/financial-report/create",
  },

  {
    color: "primary",
    Icon: FaRegWindowMaximize,
    title: "Giriş/Açılış Görseli",
    href: "/admin/prestitial-banner",
    subTitle: "Yeni Ekle",
    subHref: "/admin/prestitial-banner/create",
  },

  {
    color: "primary",
    Icon: FaBoxes,
    title: "Bileşenler",
    href: "/admin/component",
    // subTitle: "Yeni Ekle",
    // subHref: "/",
  },
  {
    color: "primary",
    Icon: BsFillMenuButtonWideFill,
    title: "Menüler",
    href: "/admin/menu",
    subTitle: "Yeni Ekle",
    subHref: "/admin/menu/create",
  },
  {
    color: "primary",
    Icon: FaSitemap,
    title: "Menü Öğeleri",
    href: "/admin/menu-item",
    subTitle: "Yeni Ekle",
    subHref: "/admin/menu-item/create",
  },
];
export default function Home() {
  const router = useRouter();

  return (
    <div className="grid grid-cols-5 gap-4">
      {MENU.map((item, index) => {
        return (
          <div
            key={index}
            className={` group bg-${item.color}-500 rounded-lg overflow-hidden shadow relative flex flex-col items-start justify-start  cursor-pointer`}
          >
            <item.Icon
              className={`absolute size-12 text-primary-800  !text-${item.color}-800 right-3 top-3 group-hover:-rotate-3 group-hover:scale-[1.15] transition-all duration-300`}
            />
            <Link
              href={item.href}
              className={` text-white font-semibold py-4 px-5 pb-0 text-lg group-hover:scale-105 transition-all duration-300 flex-1`}
            >
              <span
                dangerouslySetInnerHTML={{
                  __html: item.title.replace(" ", "<br />"),
                }}
              ></span>
            </Link>
            {item.subHref && (
              <button
                type="button"
                onClick={() => {
                  router.push(item.subHref);
                }}
                className={`bg-${item.color}-700 py-2 px-5 w-full text-sm mt-2 text-white opacity-80 hover:opacity-100 hover:bg-${item.color}-800 transition-all duration-300 flex flex-row items-center justify-center `}
              >
                <FiPlus className="mr-1" /> {item.subTitle}
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}

// export default function SimplePage() {
//   return (
//     <div className="bg-white shadow rounded-lg p-6 h-[1000px]">
//       <h2 className="text-2xl font-bold mb-4">Simple Page</h2>
//       <p className="text-gray-600">
//         This is a simple card content. Future forms or tables will go here.
//       </p>
//     </div>
//   );
// }
