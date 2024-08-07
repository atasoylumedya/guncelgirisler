import { gql } from "graphql-tag";

export const settingLogoypeDefs = gql`
  scalar File

  type Setting {
    id: ID!
    bannerLeft: String
    bannerRight: String
    logo: String
    telegram: String
    twitter: String
    instagram: String
    skype: String
  }

  input SettingInput {
    bannerLeft: File
    bannerRight: File
    logo: File
    telegram: String
    twitter: String
    instagram: String
    skype: String
  }

  extend type Query {
    getSetting: Setting
    getPublicSetting: Setting
  }

  extend type Mutation {
    updateSetting(input: SettingInput!): Setting
  }
`;
