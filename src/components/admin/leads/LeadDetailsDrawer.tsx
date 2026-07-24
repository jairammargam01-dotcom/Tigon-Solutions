"use client";

import type { Lead } from "@/types/lead";

interface Props {
  lead: Lead | null;
  open: boolean;
  onClose: () => void;
}

export default function LeadDetailsDrawer({
  lead,
  open,
  onClose,
}: Props) {
  return (
    <>
      {open && (
        <>
          <div
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/60"
          />

          <div className="fixed right-0 top-0 z-50 h-screen w-full max-w-lg overflow-y-auto border-l border-slate-800 bg-slate-950 shadow-2xl transition-all">
            <div className="flex items-center justify-between border-b border-slate-800 p-6">
              <h2 className="text-2xl font-bold">
                Lead Details
              </h2>

              <button
                onClick={onClose}
                className="text-2xl text-slate-400 hover:text-white"
              >
                ×
              </button>
            </div>

            {lead && (
              <div className="space-y-6 p-6">
                <Field
                  label="Name"
                  value={lead.name}
                />

                <Field
                  label="Email"
                  value={lead.email}
                />

                <Field
                  label="Phone"
                  value={lead.phone}
                />

                <Field
                  label="Company"
                  value={
                    lead.company || "-"
                  }
                />

                <Field
                  label="Service"
                  value={lead.service}
                />

                <Field
                  label="Budget"
                  value={lead.budget}
                />

                <Field
                  label="Submitted"
                  value={new Date(
                    lead.createdAt
                  ).toLocaleString()}
                />

                <div>
                  <p className="mb-2 text-sm font-medium text-slate-400">
                    Description
                  </p>

                  <div className="rounded-xl border border-slate-800 bg-slate-900 p-4 leading-7 text-slate-200">
                    {lead.description}
                  </div>
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
}

function Field({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <p className="mb-2 text-sm font-medium text-slate-400">
        {label}
      </p>

      <div className="rounded-xl border border-slate-800 bg-slate-900 p-3 text-slate-100">
        {value}
      </div>
    </div>
  );
}