import Link from "next/link";

const CustomLink = ({ href, children, ...props }) => {
  const isExternal = href.startsWith("http");

  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : "_self"}
      rel={isExternal ? "noopener noreferrer" : ""}
      {...props}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
