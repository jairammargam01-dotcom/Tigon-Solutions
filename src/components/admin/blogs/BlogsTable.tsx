"use client";

import type { Blog } from "@/types/blog";

import BlogRow from "./BlogRow";

interface Props {
  blogs: Blog[];
  onDelete(id: string): void;
}

export default function BlogsTable({
  blogs,
  onDelete,
}: Props) {
  return (
    <div className="overflow-hidden rounded-xl border">

      <table className="w-full">

        <thead className="bg-[#111827]">

          <tr>

            <th className="p-4 text-left font-semibold text-white">
              Title
            </th>

            <th className="p-4 text-left font-semibold text-white">
              Category
            </th>

            <th className="p-4 text-left font-semibold text-white">
              Published
            </th>

            <th className="p-4 text-left font-semibold text-white">
              Featured
            </th>

            <th className="p-4 text-left font-semibold text-white">
              Created
            </th>

            <th className="p-4 text-right font-semibold text-white">
              Actions
            </th>

          </tr>

        </thead>

        <tbody>

          {blogs.length === 0 ? (
            <tr>

              <td
                colSpan={6}
                className="p-8 text-center text-gray-500"
              >
                No blogs found.
              </td>

            </tr>
          ) : (
            blogs.map((blog) => (
              <BlogRow
                key={blog._id}
                blog={blog}
                onDelete={onDelete}
              />
            ))
          )}

        </tbody>

      </table>

    </div>
  );
}