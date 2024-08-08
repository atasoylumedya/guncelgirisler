import { ApolloClient, InMemoryCache } from "@apollo/client";
import createUploadLink from "apollo-upload-client/createUploadLink.mjs";
import { setContext } from "@apollo/client/link/context";

const uploadLink = createUploadLink({
  uri: "/api/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token =
    typeof window !== "undefined"
      ? localStorage.getItem("GUNCELGIRISLER_accessToken")
      : "";
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(uploadLink),
  cache: new InMemoryCache(),
});

export default client;
