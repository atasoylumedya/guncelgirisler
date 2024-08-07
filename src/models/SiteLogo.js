import mongoose from "mongoose";
// import slugify from "slugify";

const siteLogoSchema = new mongoose.Schema(
  {
    title: { type: String },
    image: { type: String },
    color: { type: String },
  },
  { timestamps: true }
);

export default mongoose.models.SiteLogo ||
  mongoose.model("SiteLogo", siteLogoSchema);
