import mongoose from "mongoose";

const announcementSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Announcement ||
  mongoose.model("Announcement", announcementSchema);
