"use client";

import type { Career } from "@/types/career";

import CareerRow from "./CareerRow";

interface CareersTableProps {
  careers: Career[];
  onDelete(id: string): void;
}

export default function CareersTable({
  careers,
  onDelete,
}: CareersTableProps) {
  if (careers.length === 0) {
    return (
      <div className="rounded-xl border border-slate-800 py-16 text-center text-white/50">
        No jobs found.
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border border-slate-800">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-white/5">
            <tr className="text-left text-sm text-white/60">
              <th className="px-5 py-4">
                Job
              </th>

              <th className="px-5 py-4">
                Department
              </th>

              <th className="px-5 py-4">
                Location
              </th>

              <th className="px-5 py-4">
                Type
              </th>

              <th className="px-5 py-4">
                Status
              </th>

              <th className="px-5 py-4">
                Featured
              </th>

              <th className="px-5 py-4">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {careers.map((career) => (
              <CareerRow
                key={career._id}
                career={career}
                onDelete={onDelete}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}