import { gql } from "@apollo/client";
import { SITE_LOGO_FRAGMENT } from "../fragments/siteLogo";

export const GET_SITE_LOGO_QUERY = gql`
  query GetSiteLogo($id: ID!) {
    getSiteLogo(id: $id) {
      ...SiteLogoFragment
    }
  }
  ${SITE_LOGO_FRAGMENT}
`;
export const GET_SITE_LOGOS_QUERY = gql`
  query GetSiteLogos {
    getSiteLogos {
      ...SiteLogoFragment
    }
  }
  ${SITE_LOGO_FRAGMENT}
`;

export const ADD_SITE_LOGO_MUTATION = gql`
  mutation AddSiteLogo($input: SiteLogoInput!) {
    addSiteLogo(input: $input) {
      ...SiteLogoFragment
    }
  }
  ${SITE_LOGO_FRAGMENT}
`;

export const UPDATE_SITE_LOGO_MUTATION = gql`
  mutation UpdateSiteLogo($id: ID!, $input: SiteLogoInput!) {
    updateSiteLogo(id: $id, input: $input) {
      ...SiteLogoFragment
    }
  }
  ${SITE_LOGO_FRAGMENT}
`;

export const DELETE_SITE_LOGO_MUTATION = gql`
  mutation DeleteSiteLogo($id: ID!) {
    deleteSiteLogo(id: $id)
  }
`;
