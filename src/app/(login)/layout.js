"use client";
import ApolloProvider from "@/context/ApolloProvider";
import "../../styles/admin.css";
import { AuthProvider } from "@/context/AuthContext";

export default function LoginRootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ApolloProvider>
          <AuthProvider>{children}</AuthProvider>
        </ApolloProvider>
      </body>
    </html>
  );
}
