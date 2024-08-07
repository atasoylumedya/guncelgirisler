import Link from "@/models/Link";
import { processFileUpload } from "@/utils/fileUpload";

export const linkResolvers = {
  Query: {
    getPublicLinks: async (_, __, {}) => {
      return await Link.find().sort({ order: 1 });
    },
    getLink: async (_, { id }, {}) => {
      return await Link.findById(id);
    },
    getLinks: async (_, __, {}) => {
      return await Link.find().sort({ createdAt: -1 });
    },
  },
  Mutation: {
    addLink: async (_, { input }, {}) => {
      // const filePath = await processFileUpload(input.banner);
      // return await Link.create({ ...input, banner: filePath });
      return await Link.create(input);
    },
    updateLink: async (_, { id, input }, {}) => {
      // if (input.banner && typeof input.banner === "object") {
      //   input.banner = await processFileUpload(input.banner);
      // }
      // return await Link.findByIdAndUpdate(id, input, { new: true });
      return await Link.findByIdAndUpdate(id, input, { new: true });
    },
    deleteLink: async (_, { id }, {}) => {
      await Link.findByIdAndDelete(id);
      return true;
    },
  },
  Link: {
    banner: async (link, _, { loaders }) => {
      return loaders.linkLoader.load(link.banner);
    },
  },
};
