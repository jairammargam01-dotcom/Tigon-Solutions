import { notFound } from "next/navigation";

import BlogForm from "@/components/admin/blogs/BlogForm";
import { connectDB } from "@/lib/mongodb";
import Blog from "@/models/Blog";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export const metadata = {
  title: "Edit Blog | Admin",
};

export default async function EditBlogPage({
  params,
}: PageProps) {
  await connectDB();

  const { id } = await params;

  const blog = await Blog.findById(id).lean();

  if (!blog) {
    notFound();
  }

  const serializedBlog = {
    ...blog,
    _id: blog._id.toString(),
    createdAt: blog.createdAt.toISOString(),
    updatedAt: blog.updatedAt.toISOString(),
  };

  return (
    <div className="mx-auto max-w-5xl">

      <h1 className="mb-8 text-3xl font-bold">
        Edit Blog
      </h1>

      <BlogForm
        blog={serializedBlog}
        isEditing
      />

    </div>
  );
}