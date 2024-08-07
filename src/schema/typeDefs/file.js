import { gql } from "graphql-tag";

export const fileTypeDefs = gql`
  scalar File

  extend type Mutation {
    readTextFile(file: File!): String!
    saveFile(file: File!): Boolean!
  }
`;
