import "../../styles/admin.css";

import Layout from "@/components/Admin/Layout";

export const metadata = {
  title: "Güncel Girişiler Yönetim Paneli",
  description: "Güncel Girişiler Yönetim Paneli",
};

// import { AuthProvider } from "@/context/AuthContext";

export default function AdminRootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
