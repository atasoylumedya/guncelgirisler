import { mergeTypeDefs } from "@graphql-tools/merge";
import { gql } from "graphql-tag";

import { fileTypeDefs } from "./file";
import { userTypeDefs } from "./user";
import { linkypeDefs } from "./link";
import { announcementTypeDefs } from "./announcement";
import { siteLogoypeDefs } from "./siteLogo";
import { settingLogoypeDefs } from "./setting";

const baseTypeDefs = gql`
  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }
`;

export const typeDefs = mergeTypeDefs([
  baseTypeDefs,
  fileTypeDefs,
  userTypeDefs,
  linkypeDefs,
  announcementTypeDefs,
  siteLogoypeDefs,
  settingLogoypeDefs,
]);
