import { mergeResolvers } from "@graphql-tools/merge";

import { userResolvers } from "./user";

import { fileResolvers } from "./file";
import { linkResolvers } from "./link";
import { announcementResolvers } from "./announcement";
import { siteLogoResolvers } from "./siteLogo";
import { settingResolvers } from "./setting";

export const resolvers = mergeResolvers([
  userResolvers,
  fileResolvers,
  linkResolvers,
  announcementResolvers,
  siteLogoResolvers,
  settingResolvers,
]);
