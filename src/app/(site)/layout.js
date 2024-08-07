import "../../styles/globals.css";
import Layout from "@/components/Site/Layout";

export const metadata = {
  title: "Güncel Girişler, güncel linkler",

  description: "casibom",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
