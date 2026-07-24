"use client";

import Link from "next/link";

import type { Blog } from "@/types/blog";

import PublishBadge from "./PublishBadge";

interface Props {
  blog: Blog;
  onDelete(id: string): void;
}

export default function BlogRow({
  blog,
  onDelete,
}: Props) {
  return (
    <tr className="border-t">

      <td className="p-4">

        <div className="font-medium">
          {blog.title}
        </div>

        <div className="text-sm text-gray-500">
          {blog.slug}
        </div>

      </td>

      <td className="p-4">
        {blog.category}
      </td>

      <td className="p-4">
        <PublishBadge
          published={blog.published}
        />
      </td>

      <td className="p-4">
        {blog.featured ? "⭐" : "—"}
      </td>

      <td className="p-4">
        {new Intl.DateTimeFormat("en-IN", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        }).format(new Date(blog.createdAt))}
      </td>

      <td className="p-4">

        <div className="flex justify-end gap-3">

          <Link
            href={`/admin/blogs/edit/${blog._id}`}
            className="text-blue-600 hover:underline"
          >
            Edit
          </Link>

          <button
            onClick={() => onDelete(blog._id)}
            className="text-red-600 hover:underline"
          >
            Delete
          </button>

        </div>

      </td>

    </tr>
  );
}