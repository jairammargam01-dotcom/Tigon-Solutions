"use client";

import { useMemo, useState } from "react";

import type { Blog } from "@/types/blog";

import BlogsTable from "./BlogsTable";
import DeleteBlogDialog from "./DeleteBlogDialog";

interface BlogsClientProps {
  initialBlogs: Blog[];
}

export default function BlogsClient({
  initialBlogs,
}: BlogsClientProps) {
  const [blogs, setBlogs] = useState(initialBlogs);

  const [search, setSearch] = useState("");

  const [selectedBlog, setSelectedBlog] =
    useState<Blog | null>(null);

  const [deleteLoading, setDeleteLoading] =
    useState(false);

  const filteredBlogs = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) return blogs;

    return blogs.filter(
      (blog) =>
        blog.title.toLowerCase().includes(query) ||
        blog.slug.toLowerCase().includes(query) ||
        blog.category.toLowerCase().includes(query)
    );
  }, [blogs, search]);

  async function confirmDelete() {
    if (!selectedBlog) return;

    try {
      setDeleteLoading(true);

      const res = await fetch(
        `/api/admin/blogs/${selectedBlog._id}`,
        {
          method: "DELETE",
        }
      );

      if (!res.ok) {
        const error = await res.json();

        alert(
          error.message ??
            "Failed to delete blog."
        );

        return;
      }

      setBlogs((prev) =>
        prev.filter(
          (blog) =>
            blog._id !== selectedBlog._id
        )
      );

      setSelectedBlog(null);
    } catch (error) {
      console.error(error);

      alert("Something went wrong.");
    } finally {
      setDeleteLoading(false);
    }
  }

  return (
    <>
      <div className="space-y-6">

        <div className="flex items-center justify-between">

          <h1 className="text-3xl font-bold">
            Blogs
          </h1>

          <a
            href="/admin/blogs/new"
            className="rounded-lg bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700"
          >
            New Blog
          </a>

        </div>

        <input
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          placeholder="Search blogs..."
          className="w-full rounded-lg border border-slate-700 bg-transparent p-3 outline-none focus:border-blue-500"
        />

        <BlogsTable
          blogs={filteredBlogs}
          onDelete={(id) => {
            const blog = blogs.find(
              (b) => b._id === id
            );

            if (blog) {
              setSelectedBlog(blog);
            }
          }}
        />

      </div>

      <DeleteBlogDialog
        open={!!selectedBlog}
        blogTitle={selectedBlog?.title ?? ""}
        loading={deleteLoading}
        onCancel={() =>
          setSelectedBlog(null)
        }
        onConfirm={confirmDelete}
      />
    </>
  );
}