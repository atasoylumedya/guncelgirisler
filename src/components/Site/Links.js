"use client";

import Image from "next/image";
import { GET_PUBLIC_LINKS_QUERY } from "@/graphql/queries/link";
import { useQuery } from "@apollo/client";

export default function Links({ loading, error, data }) {
  if (error) return <p>Error :(</p>;

  return (
    <main className="p-2 pt-0 grid grid-cols-3 lg:grid-cols-4  gap-2">
      {loading ? (
        <p>Yükleniyor...</p>
      ) : (
        [
          ...data.getPublicLinks,
          ...data.getPublicLinks,
          ...data.getPublicLinks,
          ...data.getPublicLinks,
          ...data.getPublicLinks,
          ...data.getPublicLinks,
        ]
          .filter((link) => link.highlights === false)
          .map((link) => (
            <div key={link.id} className="text-center mb-1 flex flex-col">
              <span className="font-normal lg:font-semibold text-sm lg:text-base text">
                {link?.title}
              </span>
              <div
                className="px-4 py-3 rounded-2xl shadow-md border border-opacity-70 hover:border-opacity-100 cursor-pointer flex flex-row items-center gap-1 h-full"
                style={{ borderColor: link.banner.color }}
              >
                <div className="text-3xl hidden md:block">
                  <span className="inline-block animate-bounce ">
                    {link?.bannerLeftText || "💎"}
                  </span>
                </div>
                <div className="flex-1">
                  <a target="_blank" href={link.link}>
                    <Image
                      src={link.banner.image.replace("public/", "/")}
                      alt={link.banner.title}
                      width={200}
                      height={200}
                      className="object-contain"
                    />
                  </a>
                </div>
                <div className="text-3xl hidden md:block">
                  <span className="inline-block animate-bounce">
                    {link?.bannerRightText || "💎"}
                  </span>
                </div>
              </div>
            </div>
          ))
      )}
    </main>
  );
}
