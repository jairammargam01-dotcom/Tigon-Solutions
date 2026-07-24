"use client";

interface StatusBadgeProps {
  published: boolean;
}

export default function StatusBadge({
  published,
}: StatusBadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${
        published
          ? "bg-emerald-500/15 text-emerald-400 ring-1 ring-emerald-500/30"
          : "bg-amber-500/15 text-amber-400 ring-1 ring-amber-500/30"
      }`}
    >
      {published ? "Published" : "Draft"}
    </span>
  );
}