"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Career } from "@/types/career";

interface CareerFormProps {
  career?: Career;
  isEditing?: boolean;
}

export default function CareerForm({
  career,
  isEditing = false,
}: CareerFormProps) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [slugEdited, setSlugEdited] = useState(
    Boolean(career?.slug)
  );

  const [form, setForm] = useState({
    title: career?.title ?? "",
    slug: career?.slug ?? "",
    department: career?.department ?? "",
    employmentType: career?.employmentType ?? "Full-time",
    location: career?.location ?? "Remote",
    shortDescription: career?.shortDescription ?? "",
    applyUrl: career?.applyUrl ?? "",
    displayOrder: career?.displayOrder ?? 1,
    featured: career?.featured ?? false,
    published: career?.published ?? false,
    seoTitle: career?.seoTitle ?? "",
    seoDescription: career?.seoDescription ?? "",
  });

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
    value: string | number | boolean
  ) {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  function validateGoogleFormUrl(url: string) {
    return (
      url.startsWith("https://forms.gle/") ||
      url.startsWith("https://docs.google.com/forms/")
    );
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!validateGoogleFormUrl(form.applyUrl)) {
      alert("Please enter a valid Google Form URL.");
      return;
    }

    setLoading(true);

    try {
      const payload = {
        ...form,
      };

      const url = isEditing
        ? `/api/admin/careers/${career?._id}`
        : "/api/admin/careers";

      const method = isEditing ? "PATCH" : "POST";

      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message ?? "Something went wrong.");
      }

      router.push("/admin/careers");
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
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid gap-6 md:grid-cols-2">
        <Input
          label="Job Title"
          value={form.title}
          onChange={(v) => update("title", v)}
        />

        <div>
          <div className="mb-2 flex items-center justify-between">
            <label className="text-sm font-medium">Slug</label>

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
            className="w-full rounded-lg border border-gray-700 bg-transparent p-3 outline-none transition-colors focus:border-blue-500"
          />

          <p className="mt-2 text-xs text-gray-300">
            URL: /careers/{form.slug || "job-slug"}
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Select
          label="Department"
          value={form.department}
          options={[
            "Tygon Studios",
            "Engineering",
            "AI",
            "Marketing",
            "Sales",
            "Operations",
            "Other",
          ]}
          onChange={(v) => update("department", v)}
        />

        <Select
          label="Employment Type"
          value={form.employmentType}
          options={[
            "Full-time",
            "Part-time",
            "Internship",
            "Contract",
            "Freelance",
          ]}
          onChange={(v) => update("employmentType", v)}
        />

        <Select
          label="Location"
          value={form.location}
          options={["Remote", "Hybrid", "On-site"]}
          onChange={(v) => update("location", v)}
        />
      </div>

      <Textarea
        label="Short Description"
        rows={8}
        value={form.shortDescription}
        onChange={(v) => update("shortDescription", v)}
      />

      <Input
        label="Google Form URL"
        placeholder="https://forms.gle/..."
        value={form.applyUrl}
        onChange={(v) => update("applyUrl", v)}
      />

      <div className="grid gap-6 md:grid-cols-3">
        <Input
          type="number"
          label="Display Order"
          value={String(form.displayOrder)}
          onChange={(v) => update("displayOrder", Number(v))}
        />

        <Input
          label="SEO Title"
          value={form.seoTitle}
          onChange={(v) => update("seoTitle", v)}
        />

        <Input
          label="SEO Description"
          value={form.seoDescription}
          onChange={(v) => update("seoDescription", v)}
        />
      </div>

      <div className="flex flex-wrap gap-8">
        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={form.featured}
            onChange={(e) => update("featured", e.target.checked)}
          />
          <span>Featured Job</span>
        </label>

        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={form.published}
            onChange={(e) => update("published", e.target.checked)}
          />
          <span>Published</span>
        </label>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="rounded-xl bg-blue-600 px-8 py-3 font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Saving..." : isEditing ? "Update Job" : "Create Job"}
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
      <label className="mb-2 block text-sm font-medium">{label}</label>
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

interface SelectProps {
  label: string;
  value: string;
  options: string[];
  onChange(value: string): void;
}

function Select({ label, value, options, onChange }: SelectProps) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-gray-700 bg-[#0f172a] p-3 outline-none transition-colors focus:border-blue-500"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

interface TextareaProps {
  label: string;
  value: string;
  onChange(value: string): void;
  rows?: number;
  placeholder?: string;
}

function Textarea({
  label,
  value,
  onChange,
  rows = 6,
  placeholder = "",
}: TextareaProps) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium">{label}</label>
      <textarea
        rows={rows}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-gray-700 bg-transparent p-3 outline-none transition-colors focus:border-blue-500"
      />
    </div>
  );
}