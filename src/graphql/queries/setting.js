import { gql } from "@apollo/client";
import { SETTING_FRAGMENT } from "../fragments/setting";

export const GET_SETTING_QUERY = gql`
  query GetSetting {
    getSetting {
      ...SettingFragment
    }
  }
  ${SETTING_FRAGMENT}
`;

export const GET_PUBLIC_SETTING_QUERY = gql`
  query GetPublicSetting {
    getPublicSetting {
      ...SettingFragment
    }
  }
  ${SETTING_FRAGMENT}
`;

export const UPDATE_SETTING_MUTATION = gql`
  mutation UpdateSetting($input: SettingInput!) {
    updateSetting(input: $input) {
      ...SettingFragment
    }
  }
  ${SETTING_FRAGMENT}
`;
