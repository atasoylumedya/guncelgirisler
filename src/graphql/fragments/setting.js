import { gql } from "@apollo/client";

export const SETTING_FRAGMENT = gql`
  fragment SettingFragment on Setting {
    id
    bannerLeft
    bannerRight
    logo
    telegram
    twitter
    instagram
    skype
  }
`;
