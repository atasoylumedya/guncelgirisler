"use client";

import { ApolloProvider } from "@apollo/client";
import client from "@/lib/apolloClient";
import { AuthProvider } from "./AuthContext";

export default function ({ children }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
