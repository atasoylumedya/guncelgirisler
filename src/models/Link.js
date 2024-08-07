import mongoose from "mongoose";
// import slugify from "slugify";

const linkSchema = new mongoose.Schema(
  {
    link: { type: String },
    title: { type: String },
    order: { type: String },
    // banner: { type: String },
    banner: { type: mongoose.Schema.Types.ObjectId, ref: "SiteLogo" },
    bannerLeftText: { type: String },
    bannerRightText: { type: String },
    borderColor: { type: String },
    highlights: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.models.Link || mongoose.model("Link", linkSchema);
