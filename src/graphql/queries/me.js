import { gql } from "@apollo/client";
import { USER_FRAGMENT } from "../fragments/user";

export const ME_QUERY = gql`
  query Me {
    me {
      ...UserFragment
    }
  }
  ${USER_FRAGMENT}
`;
