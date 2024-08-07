import { gql } from "graphql-tag";

export const siteLogoypeDefs = gql`
  scalar File

  type SiteLogo {
    id: ID!
    title: String
    image: String
    color: String
  }

  input SiteLogoInput {
    title: String
    image: File
    color: String
  }

  extend type Query {
    getSiteLogo(id: ID!): SiteLogo
    getSiteLogos: [SiteLogo]
  }

  extend type Mutation {
    addSiteLogo(input: SiteLogoInput!): SiteLogo
    updateSiteLogo(id: ID!, input: SiteLogoInput!): SiteLogo
    deleteSiteLogo(id: ID!): Boolean
  }
`;
