import Announcement from "@/models/Announcement";

export const announcementResolvers = {
  Query: {
    getPublicAnnouncements: async (_, __, {}) => {
      return await Announcement.find({}).sort({
        createdAt: -1,
      });
    },
    announcement: async (_, { id }, {}) => {
      return await Announcement.findById(id);
    },
    allAnnouncements: async (_, __, {}) => {
      return await Announcement.find().sort({ createdAt: -1 });
    },
  },
  Mutation: {
    addAnnouncement: async (_, { input }, {}) => {
      const newAnnouncement = new Announcement(input);
      return await newAnnouncement.save();
    },
    updateAnnouncement: async (_, { id, input }, {}) => {
      return await Announcement.findByIdAndUpdate(id, input, { new: true });
    },
    deleteAnnouncement: async (_, { id }, {}) => {
      await Announcement.findByIdAndDelete(id);
      return true;
    },
  },
};
