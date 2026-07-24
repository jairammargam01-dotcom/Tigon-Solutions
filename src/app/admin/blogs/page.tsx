import { connectDB } from "@/lib/mongodb";
import Blog from "@/models/Blog";
import BlogsClient from "@/components/admin/blogs/BlogsClient";
import type { BlogDocument } from "@/models/Blog";

type BlogWithId = BlogDocument & {
  _id: {
    toString(): string;
  };
  createdAt: Date;
  updatedAt: Date;
};

export const metadata = {
  title: "Blog Management | Admin",
};

export default async function BlogsPage() {
  await connectDB();

  const blogs = await Blog.find()
    .sort({ createdAt: -1 })
    .lean();

  const serializedBlogs = blogs.map((blog: BlogWithId) => ({
    ...blog,
    _id: blog._id.toString(),
    createdAt: blog.createdAt.toISOString(),
    updatedAt: blog.updatedAt.toISOString(),
  }));

  return <BlogsClient initialBlogs={serializedBlogs} />;
}