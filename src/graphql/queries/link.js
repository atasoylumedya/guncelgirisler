import { gql } from "@apollo/client";
import { LINK_FRAGMENT } from "../fragments/link";

export const GET_LINK_QUERY = gql`
  query GetLink($id: ID!) {
    getLink(id: $id) {
      ...LinkFragment
    }
  }
  ${LINK_FRAGMENT}
`;
export const GET_LINKS_QUERY = gql`
  query GetLinks {
    getLinks {
      ...LinkFragment
    }
  }
  ${LINK_FRAGMENT}
`;

export const ADD_LINK_MUTATION = gql`
  mutation AddLink($input: LinkInput!) {
    addLink(input: $input) {
      ...LinkFragment
    }
  }
  ${LINK_FRAGMENT}
`;

export const UPDATE_LINK_MUTATION = gql`
  mutation UpdateLink($id: ID!, $input: LinkInput!) {
    updateLink(id: $id, input: $input) {
      ...LinkFragment
    }
  }
  ${LINK_FRAGMENT}
`;

export const DELETE_LINK_MUTATION = gql`
  mutation DeleteLink($id: ID!) {
    deleteLink(id: $id)
  }
`;

export const GET_PUBLIC_LINKS_QUERY = gql`
  query GetPublicLinks {
    getPublicLinks {
      ...LinkFragment
    }
  }
  ${LINK_FRAGMENT}
`;
