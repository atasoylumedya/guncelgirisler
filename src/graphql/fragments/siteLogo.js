import { gql } from "@apollo/client";

export const SITE_LOGO_FRAGMENT = gql`
  fragment SiteLogoFragment on SiteLogo {
    id
    image
    title
    color
  }
`;
