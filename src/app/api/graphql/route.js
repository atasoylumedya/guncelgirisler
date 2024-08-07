import { createYoga } from "graphql-yoga";
import { schema } from "@/schema";
import { verifyToken } from "@/lib/auth";
import { loaders } from "@/schema/loaders";

import dbConnect from "@/lib/db";
import User from "@/models/User";
import Link from "@/models/Link";

const { handleRequest } = createYoga({
  schema: schema,
  context: async ({ request }) => {
    await dbConnect();
    const token = request.headers.get("authorization") || "";

    let user = null;
    if (token !== "") {
      user = verifyToken(token);
    }

    return {
      loaders,
      user,
      User,
      Link,
    };
  },

  graphqlEndpoint: "/api/graphql",
  fetchAPI: { Response },
});

export {
  handleRequest as GET,
  handleRequest as POST,
  handleRequest as OPTIONS,
};
