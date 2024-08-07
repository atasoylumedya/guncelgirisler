import Setting from "@/models/Setting";
import { processFileUpload } from "@/utils/fileUpload";

export const settingResolvers = {
  Query: {
    getSetting: async (_, {}, {}) => {
      return await Setting.findOne({});
    },

    getPublicSetting: async (_, {}, {}) => {
      return await Setting.findOne({});
    },
  },
  Mutation: {
    updateSetting: async (_, { id, input }, {}) => {
      if (input.logo && typeof input.logo === "object") {
        input.logo = await processFileUpload(input.logo);
      }

      if (input.bannerLeft && typeof input.bannerLeft === "object") {
        input.bannerLeft = await processFileUpload(input.bannerLeft);
      }

      if (input.bannerRight && typeof input.bannerRight === "object") {
        input.bannerRight = await processFileUpload(input.bannerRight);
      }

      return await Setting.findOneAndUpdate({}, input, {
        new: true,
        upsert: true,
      });
    },
  },
};
