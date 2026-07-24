"use client";

import LeadStatusBadge from "./LeadStatusBadge";

import type { Lead } from "@/types/lead";

interface Props {
  lead: Lead;
  onView: (lead: Lead) => void;
}

export default function LeadRow({
  lead,
  onView,
}: Props) {
  const submittedDate =
    new Intl.DateTimeFormat("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }).format(new Date(lead.createdAt));

  return (
    <tr className="border-b border-slate-800 transition hover:bg-slate-900/50">
      <td className="px-5 py-4">
        <div>
          <p className="font-medium text-white">
            {lead.name}
          </p>

          <p className="text-sm text-slate-400">
            {lead.email}
          </p>
        </div>
      </td>

      <td className="px-5 py-4">
        {lead.company || "-"}
      </td>

      <td className="px-5 py-4">
        {lead.phone}
      </td>

      <td className="px-5 py-4">
        {lead.service}
      </td>

      <td className="px-5 py-4">
        {lead.budget}
      </td>

      <td className="px-5 py-4">
        <LeadStatusBadge
          status={lead.status}
        />
      </td>

      <td className="px-5 py-4 whitespace-nowrap">
        {submittedDate}
      </td>

      <td className="px-5 py-4">
        <button
          type="button"
          aria-label={`View details for ${lead.name}`}
          onClick={() => onView(lead)}
          className="rounded-lg border border-blue-500 bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
        >
          View Details
        </button>
      </td>
    </tr>
  );
}