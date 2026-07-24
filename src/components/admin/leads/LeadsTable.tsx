"use client";

import LeadRow from "./LeadRow";

import type { Lead } from "@/types/lead";

interface Props {
  leads: Lead[];
  onView: (lead: Lead) => void;
}

export default function LeadsTable({
  leads,
  onView,
}: Props) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="border-b border-slate-800 bg-slate-950">
            <tr className="text-left text-sm uppercase tracking-wide text-slate-400">
              <th className="px-5 py-4">Lead</th>

              <th className="px-5 py-4">
                Company
              </th>

              <th className="px-5 py-4">
                Phone
              </th>

              <th className="px-5 py-4">
                Service
              </th>

              <th className="px-5 py-4">
                Budget
              </th>

              <th className="px-5 py-4">
                Status
              </th>

              <th className="px-5 py-4">
                Submitted
              </th>

              <th className="px-5 py-4">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {leads.length === 0 ? (
              <tr>
                <td
                  colSpan={8}
                  className="py-12 text-center text-slate-400"
                >
                  No leads found.
                </td>
              </tr>
            ) : (
              leads.map((lead) => (
                <LeadRow
                  key={lead._id}
                  lead={lead}
                  onView={onView}
                />
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}