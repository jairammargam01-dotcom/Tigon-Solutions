import {
  Schema,
  model,
  models,
  type InferSchemaType,
} from "mongoose";

const BlogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },

    excerpt: {
      type: String,
      required: true,
    },

    content: {
      type: String,
      required: true,
    },

    coverImage: {
      type: String,
      default: "",
    },

    category: {
      type: String,
      required: true,
    },

    tags: {
      type: [String],
      default: [],
    },

    featured: {
      type: Boolean,
      default: false,
    },

    published: {
      type: Boolean,
      default: false,
    },

    author: {
      type: String,
      default: "Tygon Solutions Editorial Team",
    },

    seoTitle: {
      type: String,
      default: "",
    },

    seoDescription: {
      type: String,
      default: "",
    },

    readTime: {
      type: String,
      default: "5 min read",
    },
  },
  {
    timestamps: true,
  }
);

export type BlogDocument = InferSchemaType<typeof BlogSchema>;

export default models.Blog || model("Blog", BlogSchema);