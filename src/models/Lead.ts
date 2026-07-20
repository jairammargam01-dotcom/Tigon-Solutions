import mongoose, { Schema, model, models } from "mongoose";

const LeadSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    company: {
      type: String,
      default: "",
    },

    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },

    phone: {
      type: String,
      default: "",
    },

    service: {
      type: String,
      required: true,
    },

    budget: {
      type: String,
      default: "",
    },

    description: {
      type: String,
      default: "",
    },

    status: {
      type: String,
      enum: [
        "pending",
        "emailed",
        "failed",
      ],
      default: "pending",
    },

    emailedAt: Date,
  },
  {
    timestamps: true,
  }
);

export const Lead =
  models.Lead || model("Lead", LeadSchema);