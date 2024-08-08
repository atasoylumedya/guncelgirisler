import { gql } from "@apollo/client";

export const ANNOUNCEMENT_FRAGMENT = gql`
  fragment AnnouncementFragment on Announcement {
    id
    content
  }
`;
