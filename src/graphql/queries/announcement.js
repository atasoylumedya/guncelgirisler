import { gql } from "@apollo/client";
import { ANNOUNCEMENT_FRAGMENT } from "../fragments/announcement";

export const GET_ALL_ANNOUNCEMENTS_QUERY = gql`
  query GetAllAnnouncements {
    allAnnouncements {
      ...AnnouncementFragment
    }
  }
  ${ANNOUNCEMENT_FRAGMENT}
`;

export const GET_ANNOUNCEMENT_QUERY = gql`
  query GetAnnouncement($id: ID!) {
    announcement(id: $id) {
      ...AnnouncementFragment
    }
  }
  ${ANNOUNCEMENT_FRAGMENT}
`;

export const ADD_ANNOUNCEMENT_MUTATION = gql`
  mutation AddAnnouncement($input: AnnouncementInput!) {
    addAnnouncement(input: $input) {
      ...AnnouncementFragment
    }
  }
  ${ANNOUNCEMENT_FRAGMENT}
`;

export const UPDATE_ANNOUNCEMENT_MUTATION = gql`
  mutation UpdateAnnouncement($id: ID!, $input: AnnouncementInput!) {
    updateAnnouncement(id: $id, input: $input) {
      ...AnnouncementFragment
    }
  }
  ${ANNOUNCEMENT_FRAGMENT}
`;

export const DELETE_ANNOUNCEMENT_MUTATION = gql`
  mutation DeleteAnnouncement($id: ID!) {
    deleteAnnouncement(id: $id)
  }
`;

export const GET_PUBLIC_ANNOUNCEMENTS = gql`
  query GetPublicAnnouncements {
    getPublicAnnouncements {
      ...AnnouncementFragment
    }
  }
  ${ANNOUNCEMENT_FRAGMENT}
`;
