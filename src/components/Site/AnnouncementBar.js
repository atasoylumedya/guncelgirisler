"use client";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import { FaRegBell } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GET_PUBLIC_ANNOUNCEMENTS } from "@/graphql/queries/announcement";
import { useQuery } from "@apollo/client";

export default function AnnouncementBar() {
  const { loading, error, data } = useQuery(GET_PUBLIC_ANNOUNCEMENTS);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    autoplay: true,
    draggable: true,
  };

  return (
    <div className="  overflow-hidden flex max-w-[1024px]">
      <div className=" text-center px-6 pr-20 py-3  text-lg leading-5 text-black font-semibold rounded-s-3xl flex items-center justify-center bg-gradient-to-r from-gray-300">
        <FaRegBell className="size-8 mr-4" />
        <div className="font-oswald text-lg">Duyurular:</div>
      </div>
      <div className="relative  flex items-center justify-start">
        {!loading && (
          <Slider {...settings} className="max-w-3xl ">
            {data?.getPublicAnnouncements?.map((item) => (
              <>
                <p className="text-white">{item.content}</p>
              </>
            ))}
          </Slider>
        )}
      </div>
    </div>
  );
}
