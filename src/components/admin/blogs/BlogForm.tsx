"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import type { Blog } from "@/types/blog";

interface BlogFormProps {
  blog?: Blog;
  isEditing?: boolean;
}

export default function BlogForm({
  blog,
  isEditing = false,
}: BlogFormProps) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);

  const [form, setForm] = useState({
    title: blog?.title ?? "",
    slug: blog?.slug ?? "",
    excerpt: blog?.excerpt ?? "",
    content: blog?.content ?? "",
    coverImage: blog?.coverImage ?? "",
    category: blog?.category ?? "",
    tags: blog?.tags.join(", ") ?? "",
    featured: blog?.featured ?? false,
    published: blog?.published ?? false,
    seoTitle: blog?.seoTitle ?? "",
    seoDescription: blog?.seoDescription ?? "",
    author:
      blog?.author ??
      "Tygon Solutions Editorial Team",
  });

  const [slugEdited, setSlugEdited] = useState(
    Boolean(blog?.slug)
  );

  function generateSlug(text: string) {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
  }



  function update(
    field: keyof typeof form,
    value: string | boolean
  ) {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  /**
   * Automatic Read Time
   * 220 WPM
   */
  const readTime = useMemo(() => {
    const words = form.content
      .replace(/<[^>]+>/g, "")
      .trim()
      .split(/\s+/)
      .filter(Boolean).length;

    return `${Math.max(
      1,
      Math.ceil(words / 220)
    )} min read`;
  }, [form.content]);

  /**
   * Upload Cover Image
   */
  async function handleUpload(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = e.target.files?.[0];

    if (!file) return;

    setUploading(true);

    try {
      const body = new FormData();

      body.append("file", file);

      const res = await fetch(
        "/api/admin/upload",
        {
          method: "POST",
          body,
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(
          data.error ??
            "Upload failed."
        );
      }

      setForm((prev) => ({
        ...prev,
        coverImage: data.url,
      }));
    } catch (err: unknown) {
        if (err instanceof Error) {
          alert(err.message);
        } else {
          alert("Image upload failed.");
        }
      } finally {
        setUploading(false);
      }
  }

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    setLoading(true);

    try {
      const payload = {
        ...form,

        readTime,

        tags: form.tags
          .split(",")
          .map((tag) => tag.trim())
          .filter(Boolean),
      };

      const url = isEditing
        ? `/api/admin/blogs/${blog?._id}`
        : "/api/admin/blogs";

      const method = isEditing
        ? "PATCH"
        : "POST";

      const res = await fetch(url, {
        method,

        headers: {
          "Content-Type":
            "application/json",
        },

        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const error =
          await res.json();

        throw new Error(
          error.message ??
            "Something went wrong."
        );
      }

      router.push("/admin/blogs");

      router.refresh();
    } catch (err: unknown) {
        if (err instanceof Error) {
          alert(err.message);
        } else {
          alert("Something went wrong.");
        }
      } finally {
        setLoading(false);
      }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-8"
    >
      <div className="grid gap-6 md:grid-cols-2">

        <Input
          label="Title"
          value={form.title}
          onChange={(title) => {
            setForm((prev) => ({
              ...prev,
              title,
              slug: slugEdited
                ? prev.slug
                : generateSlug(title),
            }));
          }}
        />

        <div>
          <div className="mb-2 flex items-center justify-between">
            <label className="text-sm font-medium">
              Slug
            </label>

            {slugEdited && (
              <button
                type="button"
                onClick={() => {
                  setSlugEdited(false);

                  setForm((prev) => ({
                    ...prev,
                    slug: generateSlug(prev.title),
                  }));
                }}
                className="text-xs text-blue-500 hover:underline"
              >
                Reset
              </button>
            )}
          </div>

          <input
            value={form.slug}
            onChange={(e) => {
              setSlugEdited(true);
              update("slug", e.target.value);
            }}
            className="w-full rounded-lg border border-gray-700 bg-transparent p-3"
          />

          <p className="mt-2 text-xs text-gray-300">
            URL:
            {" "}
            /blog/{form.slug || "your-blog-slug"}
          </p>
        </div>

        <Input
          label="Category"
          value={form.category}
          onChange={(v) =>
            update("category", v)
          }
        />

        <Input
          label="Author"
          value={form.author}
          onChange={(v) =>
            update("author", v)
          }
        />
      </div>

      <div className="rounded-xl border border-gray-700 p-5">

        <label className="mb-3 block text-sm font-semibold">
          Cover Image
        </label>

        <input
          type="file"
          accept="image/*"
          onChange={handleUpload}
          className="block w-full rounded-lg border border-gray-700 p-3"
        />

        {uploading && (
          <p className="mt-3 text-sm text-blue-500">
            Uploading image...
          </p>
        )}

        {form.coverImage && (
          <div className="mt-5">
            <Image
              src={form.coverImage}
              alt="Cover Preview"
              width={1200}
              height={630}
              className="h-64 w-full rounded-xl border border-gray-700 object-cover"
            />

            <p className="mt-2 text-xs text-gray-500 break-all">
              {form.coverImage}
            </p>
          </div>
        )}
      </div>

      <Input
        label="Excerpt"
        value={form.excerpt}
        onChange={(v) =>
          update("excerpt", v)
        }
      />

      <Input
        label="Tags"
        value={form.tags}
        onChange={(v) =>
          update("tags", v)
        }
      />

      <div className="rounded-xl border border-gray-700 p-5">

        <div className="mb-4 flex items-center justify-between">

          <label className="text-sm font-semibold">
            Content
          </label>

          <span className="rounded-full bg-blue-600/20 px-3 py-1 text-xs font-medium text-blue-400">
            {readTime}
          </span>

        </div>

        <textarea
          rows={20}
          value={form.content}
          onChange={(e) =>
            update(
              "content",
              e.target.value
            )
          }
          className="w-full rounded-lg border border-gray-700 bg-transparent p-4"
        />

      </div>

      <div className="grid gap-6 md:grid-cols-2">

        <Input
          label="SEO Title"
          value={form.seoTitle}
          onChange={(v) =>
            update("seoTitle", v)
          }
        />

        <Input
          label="SEO Description"
          value={form.seoDescription}
          onChange={(v) =>
            update(
              "seoDescription",
              v
            )
          }
        />

      </div>

      <div className="flex flex-wrap gap-8">

        <label className="flex items-center gap-3">

          <input
            type="checkbox"
            checked={form.featured}
            onChange={(e) =>
              update(
                "featured",
                e.target.checked
              )
            }
          />

          <span>Featured</span>

        </label>

        <label className="flex items-center gap-3">

          <input
            type="checkbox"
            checked={form.published}
            onChange={(e) =>
              update(
                "published",
                e.target.checked
              )
            }
          />

          <span>Published</span>

        </label>

      </div>

      <button
        type="submit"
        disabled={loading || uploading}
        className="rounded-xl bg-blue-600 px-8 py-3 font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {uploading
          ? "Uploading..."
          : loading
          ? "Saving..."
          : isEditing
          ? "Update Blog"
          : "Create Blog"}
      </button>

    </form>
  );
}
interface InputProps {
  label: string;
  value: string;
  onChange(value: string): void;
  type?: string;
  placeholder?: string;
}

function Input({
  label,
  value,
  onChange,
  type = "text",
  placeholder = "",
}: InputProps) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium">
        {label}
      </label>

      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-gray-700 bg-transparent p-3 outline-none transition-colors focus:border-blue-500"
      />
    </div>
  );
}