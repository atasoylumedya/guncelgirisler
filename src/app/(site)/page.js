"use client";
import AnnouncementBar from "@/components/Site/AnnouncementBar";
import Header from "@/components/Site/Header";
import HighlightLink from "@/components/Site/HighlightLink";
import SidebarAd from "@/components/Site/SidebarAd";
import Image from "next/image";
import { GET_PUBLIC_LINKS_QUERY } from "@/graphql/queries/link";
import { useQuery } from "@apollo/client";
import { GET_PUBLIC_SETTING_QUERY } from "@/graphql/queries/setting";
import Links from "@/components/Site/Links";

export default function Home() {
  const { loading, error, data } = useQuery(GET_PUBLIC_LINKS_QUERY);
  const {
    loading: settingLoading,
    error: settingError,
    data: settingData,
  } = useQuery(GET_PUBLIC_SETTING_QUERY);

  return (
    <div className=" w-screen flex min-h-screen">
      <div className="w-[190px] hidden lg:block">
        <SidebarAd source={settingData?.getPublicSetting?.bannerLeft} />
      </div>
      <div className="w-full px-2 gap-2 flex flex-col">
        <Header data={settingData?.getPublicSetting} />
        <AnnouncementBar />
        <HighlightLink loading={loading} data={data} />
        <h1 className="uppercase text-xl lg:text-2xl tracking-tight font-bold text-center text-shimmer font-oswald my-4">
          Oynamak İstediğiniz Sitenin Üzerine Tıklayınız
        </h1>
        <Links error={error} loading={loading} data={data} />
      </div>
      <div className="w-[190px] hidden lg:block">
        <SidebarAd source={settingData?.getPublicSetting?.bannerLeft} />
      </div>
    </div>
  );
}
