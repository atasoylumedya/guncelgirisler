import { gql } from "graphql-tag";

export const announcementTypeDefs = gql`
  type Announcement {
    id: ID!
    content: String!
  }

  input AnnouncementInput {
    content: String!
  }

  type Query {
    getPublicAnnouncements: [Announcement]
    announcement(id: ID!): Announcement
    allAnnouncements: [Announcement!]
  }

  type Mutation {
    addAnnouncement(input: AnnouncementInput!): Announcement
    updateAnnouncement(id: ID!, input: AnnouncementInput!): Announcement
    deleteAnnouncement(id: ID!): Boolean
  }
`;
