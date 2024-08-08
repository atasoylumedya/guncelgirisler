import Slider from "react-slick";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HighlightLink({ loading, data }) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    autoplay: true,
    draggable: true,
    fade: true,
  };

  if (loading) return <p>Yükleniyor</p>;

  return (
    <div className="flex items-center justify-center">
      <Slider {...settings} className="max-w-[1024px] w-full ">
        {data?.getPublicLinks
          .filter((link) => link.highlights === true)
          .map((link) => (
            <div>
              <div
                className={`p-0 lg:px-5 lg:py-2 rounded-full h-20 bg-gradient-to-l from-[${link.banner.color}]`}
                style={{
                  backgroundImage: `linear-gradient(to left, ${link.banner.color}, transparent)`,
                }}
              >
                <div className="flex items-center justify-center flex-col lg:flex-row">
                  <div className="hidden lg:block">
                    <div className="size-10 bg-white  flex items-center justify-center rounded-full">
                      <FaStar
                        className="size-6 mb-[1px] "
                        color={link.banner.color}
                      />
                    </div>
                  </div>
                  <div className=" hidden lg:block flex-1 uppercase text-center font-semibold lg:text-base text-xs">
                    <a target="_blank" href={link.link}>
                      {link.bannerLeftText || link.title}
                    </a>
                  </div>
                  <div className=" flex-1">
                    <a target="_blank" href={link.link}>
                      <Image
                        src={link.banner.image.replace("public/", "/")}
                        alt={link.banner.title}
                        width={500}
                        height={500}
                        className="h-12 lg:h-16 w-auto"
                      />
                    </a>
                  </div>
                  <div className="flex-1 uppercase text-center font-semibold lg:text-base text-xs">
                    <a target="_blank" href={link.link}>
                      {link.bannerRightText || link.title}
                    </a>
                  </div>
                  <div className="hidden lg:block">
                    <div className="size-10 bg-white flex items-center justify-center rounded-full">
                      <FaStar className="size-6 " color={link.banner.color} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </Slider>
    </div>
  );
}
