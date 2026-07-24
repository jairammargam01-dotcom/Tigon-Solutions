import {
  Schema,
  model,
  models,
  type InferSchemaType,
  type Model,
} from "mongoose";

const AdminSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      enum: ["super_admin", "admin"],
      default: "admin",
    },
  },
  {
    timestamps: true,
  }
);

export type AdminDocument = InferSchemaType<typeof AdminSchema>;

export const Admin =
  (models.Admin as Model<AdminDocument>) ||
  model<AdminDocument>("Admin", AdminSchema);