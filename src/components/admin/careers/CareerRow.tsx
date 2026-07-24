"use client";

import Link from "next/link";

import type { Career } from "@/types/career";

import StatusBadge from "./StatusBadge";

interface CareerRowProps {
  career: Career;
  onDelete(id: string): void;
}

export default function CareerRow({
  career,
  onDelete,
}: CareerRowProps) {
  return (
    <tr className="border-b border-slate-800 hover:bg-white/5 transition-colors">
      <td className="px-5 py-4">
        <div>
          <p className="font-medium text-white">
            {career.title}
          </p>

          <p className="mt-1 text-sm text-white/50">
            /careers/{career.slug}
          </p>
        </div>
      </td>

      <td className="px-5 py-4">
        {career.department}
      </td>

      <td className="px-5 py-4">
        {career.location}
      </td>

      <td className="px-5 py-4">
        {career.employmentType}
      </td>

      <td className="px-5 py-4">
        <StatusBadge
          published={career.published}
        />
      </td>

      <td className="px-5 py-4">
        {career.featured ? (
          <span className="text-yellow-400">
            ★ Featured
          </span>
        ) : (
          <span className="text-white/40">
            —
          </span>
        )}
      </td>

      <td className="px-5 py-4">
        <div className="flex items-center gap-3">
          <Link
            href={`/admin/careers/edit/${career._id}`}
            className="text-blue-400 hover:text-blue-300"
          >
            Edit
          </Link>

          <button
            onClick={() =>
              onDelete(career._id)
            }
            className="text-red-400 hover:text-red-300"
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
}