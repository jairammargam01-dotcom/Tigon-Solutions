"use client";

import Image from "next/image";
import {
  Upload,
  ImageIcon,
  Loader2,
  Trash2,
} from "lucide-react";
import { useState } from "react";

interface Branding {
  logo: string;
  favicon: string;
  appleTouchIcon: string;
  ogImage: string;
}

interface Props {
  value: Branding;
  onChange: (value: Branding) => void;
}

const DIMENSIONS: Record<keyof Branding, string> = {
  logo: "512 × 512 px",
  favicon: "32 × 32 px",
  appleTouchIcon: "180 × 180 px",
  ogImage: "1200 × 630 px",
};

const LABELS: Record<keyof Branding, string> = {
  logo: "Logo",
  favicon: "Favicon",
  appleTouchIcon: "Apple Touch Icon",
  ogImage: "Open Graph Image",
};

export default function BrandingCard({
  value,
  onChange,
}: Props) {
  const [uploading, setUploading] = useState<
    keyof Branding | null
  >(null);

  async function upload(
    file: File,
    key: keyof Branding
  ) {
    try {
      setUploading(key);

      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch(
        "/api/admin/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!res.ok) {
        throw new Error("Upload failed");
      }

      const data = await res.json();

      onChange({
        ...value,
        [key]: data.url,
      });
    } catch (error) {
      console.error(error);
      alert("Upload failed.");
    } finally {
      setUploading(null);
    }
  }

  function remove(key: keyof Branding) {
    onChange({
      ...value,
      [key]: "",
    });
  }

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white">
          Branding Assets
        </h2>

        <p className="mt-2 text-sm text-slate-400">
          Upload the official branding assets
          used throughout the website, SEO,
          social media previews and mobile
          devices.
        </p>
      </div>

      <div className="space-y-8">

        <UploadField
          id="logo"
          title={LABELS.logo}
          recommended={DIMENSIONS.logo}
          value={value.logo}
          uploading={uploading === "logo"}
          onUpload={(file) =>
            upload(file, "logo")
          }
          onRemove={() =>
            remove("logo")
          }
        />

        <UploadField
          id="favicon"
          title={LABELS.favicon}
          recommended={DIMENSIONS.favicon}
          value={value.favicon}
          uploading={uploading === "favicon"}
          onUpload={(file) =>
            upload(file, "favicon")
          }
          onRemove={() =>
            remove("favicon")
          }
        />

        <UploadField
          id="apple-touch-icon"
          title={LABELS.appleTouchIcon}
          recommended={
            DIMENSIONS.appleTouchIcon
          }
          value={value.appleTouchIcon}
          uploading={
            uploading ===
            "appleTouchIcon"
          }
          onUpload={(file) =>
            upload(
              file,
              "appleTouchIcon"
            )
          }
          onRemove={() =>
            remove(
              "appleTouchIcon"
            )
          }
        />

        <UploadField
          id="og-image"
          title={LABELS.ogImage}
          recommended={DIMENSIONS.ogImage}
          value={value.ogImage}
          uploading={uploading === "ogImage"}
          onUpload={(file) =>
            upload(file, "ogImage")
          }
          onRemove={() =>
            remove("ogImage")
          }
        />

      </div>

    </div>
  );
}

interface UploadFieldProps {
  id: string;
  title: string;
  recommended: string;
  value: string;
  uploading: boolean;
  onUpload: (file: File) => void;
  onRemove: () => void;
}

function UploadField({
  id,
  title,
  recommended,
  value,
  uploading,
  onUpload,
  onRemove,
}: UploadFieldProps) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-white">
            {title}
          </h3>

          <p className="mt-1 text-sm text-slate-400">
            Recommended Size:{" "}
            <span className="font-semibold text-blue-400">
              {recommended}
            </span>
          </p>
        </div>

        {value && (
          <button
            type="button"
            onClick={onRemove}
            className="flex items-center gap-2 rounded-lg border border-red-500 px-3 py-2 text-red-400 transition hover:bg-red-500 hover:text-white"
          >
            <Trash2 size={16} />
            Remove
          </button>
        )}
      </div>

      {value ? (
        <div className="rounded-xl border border-slate-700 bg-slate-900 p-5">
          <div className="flex flex-col gap-5 md:flex-row md:items-center">
            <div className="relative h-28 w-28 overflow-hidden rounded-xl border border-slate-700 bg-slate-800">
              <Image
                src={value}
                alt={title}
                fill
                className="object-contain p-2"
              />
            </div>

            <div className="flex-1">
              <label className="mb-2 block text-xs uppercase tracking-wide text-slate-400">
                Uploaded URL
              </label>

              <input
                readOnly
                value={value}
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white"
              />

              <div className="mt-4 flex gap-3">
                <button
                  type="button"
                  onClick={() =>
                    navigator.clipboard.writeText(value)
                  }
                  className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
                >
                  Copy URL
                </button>

                <label
                  htmlFor={id}
                  className="cursor-pointer rounded-lg border border-slate-700 px-4 py-2 text-sm font-medium text-white transition hover:border-blue-500 hover:bg-slate-800"
                >
                  Replace Image
                </label>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <label
          htmlFor={id}
          className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-700 bg-slate-900 px-8 py-12 transition duration-200 hover:border-blue-500 hover:bg-slate-800/50"
        >
          {uploading ? (
            <>
              <Loader2
                size={46}
                className="animate-spin text-blue-500"
              />

              <p className="mt-5 text-lg font-semibold text-white">
                Uploading...
              </p>

              <p className="mt-2 text-sm text-slate-400">
                Please wait while your image is uploaded.
              </p>
            </>
          ) : (
            <>
              <Upload
                size={48}
                className="text-blue-500"
              />

              <h4 className="mt-5 text-xl font-bold text-white">
                Upload {title}
              </h4>

              <p className="mt-2 text-center text-sm text-slate-400">
                Drag & Drop your image here
                <br />
                or click anywhere to browse
              </p>

              <div className="mt-6 rounded-xl border border-slate-700 bg-slate-800/60 px-6 py-4 text-center">
                <div className="flex items-center justify-center gap-2">
                  <ImageIcon
                    size={18}
                    className="text-blue-400"
                  />

                  <span className="text-sm font-semibold text-slate-300">
                    Recommended Image Size
                  </span>
                </div>

                <p className="mt-2 text-2xl font-bold text-white">
                  {recommended}
                </p>

                <p className="mt-3 text-xs text-slate-400">
                  PNG • JPG • SVG • WEBP
                </p>
              </div>
            </>
          )}
        </label>
      )}

      <input
        id={id}
        hidden
        type="file"
        accept="image/png,image/jpeg,image/webp,image/svg+xml,image/x-icon,image/vnd.microsoft.icon"
        onChange={(e) => {
          const file = e.target.files?.[0];

          if (file) {
            onUpload(file);
          }
        }}
      />
    </div>
  );
}