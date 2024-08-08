"use client";

import ApolloProvider from "@/context/ApolloProvider";

export default function Layout({ children }) {
  return <ApolloProvider>{children}</ApolloProvider>;
}
