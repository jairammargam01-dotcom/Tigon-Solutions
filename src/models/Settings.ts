import mongoose, { Schema, type InferSchemaType } from "mongoose";

const settingsSchema = new Schema(
  {
    branding: {
      logo: {
        type: String,
        default: "",
      },

      favicon: {
        type: String,
        default: "",
      },

      appleTouchIcon: {
        type: String,
        default: "",
      },

      ogImage: {
        type: String,
        default: "",
      },
    },

    site: {
      siteUrl: {
        type: String,
        required: true,
        default: process.env.NEXT_PUBLIC_SITE_URL ?? "",
      },
    },
  },
  {
    timestamps: true,
  }
);

export type SettingsDocument = InferSchemaType<
  typeof settingsSchema
>;

export default mongoose.models.Settings ||
  mongoose.model("Settings", settingsSchema);