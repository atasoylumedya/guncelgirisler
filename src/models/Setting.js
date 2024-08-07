import mongoose from "mongoose";

const settingSchema = new mongoose.Schema({
  bannerLeft: {
    type: String,
  },
  bannerRight: {
    type: String,
  },
  logo: {
    type: String,
  },
  telegram: {
    type: String,
  },
  twitter: {
    type: String,
  },
  instagram: {
    type: String,
  },
  skype: {
    type: String,
  },
});

export default mongoose.models.Setting ||
  mongoose.model("Setting", settingSchema);
