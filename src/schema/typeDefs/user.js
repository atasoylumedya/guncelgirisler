import { gql } from "graphql-tag";

export const userTypeDefs = gql`
  type User {
    id: ID!
    username: String!
    name: String!
    email: String!
  }

  type AuthPayload {
    token: String!
    user: User!
  }

  extend type Query {
    users: [User!]!
    user(id: ID!): User
    me: User
  }

  extend type Mutation {
    register(
      name: String!
      username: String!
      email: String!
      password: String!
    ): AuthPayload
    login(username: String!, password: String!): AuthPayload
  }
`;
