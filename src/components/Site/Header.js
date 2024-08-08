import Image from "next/image";

export default function Header({ data }) {
  return (
    <div className="border border-white rounded-2xl px-5 py-2 mt-5  flex items-center justify-between border-opacity-50">
      <div>
        {data?.logo && data?.logo !== "" && (
          <Image
            width={500}
            height={500}
            alt="Güncel Girişler"
            src={data.logo.replace("public/", "/")}
            className="size-16 rounded-full"
          />
        )}
      </div>
      <ul className="flex gap-4">
        {[
          {
            image: "/Telegram_2019_Logo.svg",
            link: data?.telegram,
            title: "TELEGRAM",
          },
          {
            image: "/Instagram_logo_2022.svg",
            link: data?.instagram,
            title: "INSTAGRAM",
          },
          {
            image: "/Skype_logo_(2019–present).svg",
            link: data?.skype,
            title: "SKYPE",
          },
          {
            image: "/X_logo_2023.svg",
            link: data?.twitter,
            title: "TWITTER (X)",
          },
        ].map((item, index) => {
          return (
            item.link &&
            item.link !== "" && (
              <li
                key={index}
                className="group hover:opacity-100 opacity-80 font-oswald"
              >
                <a
                  target="_blank"
                  href={item.link}
                  className=" font-semibold  text-xs text-center"
                >
                  <Image
                    alt={item.title}
                    width={28}
                    height={28}
                    className=" mx-auto size-6"
                    src={item.image}
                  />
                  <span className=" group-hover:opacity-100 opacity-70">
                    {item.title}
                  </span>
                </a>
              </li>
            )
          );
        })}
      </ul>
    </div>
  );
}
