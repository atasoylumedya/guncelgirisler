import { gql } from "@apollo/client";

export const LINK_FRAGMENT = gql`
  fragment LinkFragment on Link {
    id
    title
    link
    banner {
      id
      image
      title
      color
    }
    order
    bannerLeftText
    bannerRightText
    borderColor
    highlights
  }
`;
