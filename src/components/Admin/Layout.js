"use client";

import ApolloProvider from "@/context/ApolloProvider";
import withAuth from "./withAuth";
import { AuthProvider } from "@/context/AuthContext";
import Navbar from "./Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Layout({ children }) {
  return (
    <ApolloProvider>
      <AuthProvider>
        <Navbar />
        <main className="container mx-auto  py-4 ">{children}</main>
        <ToastContainer />
      </AuthProvider>
    </ApolloProvider>
  );
}

export default withAuth(Layout);
