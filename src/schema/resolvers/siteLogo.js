import SiteLogo from "@/models/SiteLogo";
import { processFileUpload } from "@/utils/fileUpload";

export const siteLogoResolvers = {
  Query: {
    // getPublicSiteLogos: async (_, __, {}) => {
    //   return await SiteLogo.find().sort({ startDate: -1 });
    // },
    getSiteLogo: async (_, { id }, {}) => {
      return await SiteLogo.findById(id);
    },
    getSiteLogos: async (_, __, {}) => {
      return await SiteLogo.find().sort({ createdAt: -1 });
    },
  },
  Mutation: {
    addSiteLogo: async (_, { input }, {}) => {
      const filePath = await processFileUpload(input.image);
      return await SiteLogo.create({ ...input, image: filePath });
    },
    updateSiteLogo: async (_, { id, input }, {}) => {
      if (input.image && typeof input.image === "object") {
        input.image = await processFileUpload(input.image);
      }
      return await SiteLogo.findByIdAndUpdate(id, input, { new: true });
    },
    deleteSiteLogo: async (_, { id }, {}) => {
      await SiteLogo.findByIdAndDelete(id);
      return true;
    },
  },
};
