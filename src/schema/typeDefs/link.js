import { gql } from "graphql-tag";

export const linkypeDefs = gql`
  scalar File

  type Link {
    id: ID!
    title: String
    link: String
    order: String
    banner: SiteLogo
    bannerLeftText: String
    bannerRightText: String
    borderColor: String
    highlights: Boolean
  }

  input LinkInput {
    title: String
    link: String!
    banner: String
    order: String
    bannerLeftText: String
    bannerRightText: String
    borderColor: String
    highlights: Boolean
  }

  extend type Query {
    getLink(id: ID!): Link
    getLinks: [Link]
    getPublicLinks: [Link]
  }

  extend type Mutation {
    addLink(input: LinkInput!): Link
    updateLink(id: ID!, input: LinkInput!): Link
    deleteLink(id: ID!): Boolean
  }
`;
