"use client";

import { useState } from "react";

import LeadDetailsDrawer from "./LeadDetailsDrawer";
import LeadsTable from "./LeadsTable";

import type { Lead } from "@/types/lead";

interface Props {
  leads: Lead[];
}

export default function LeadsClient({ leads }: Props) {
  const [selectedLead, setSelectedLead] =
    useState<Lead | null>(null);

  return (
    <>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white">
          Leads
        </h1>

        <p className="mt-2 text-slate-400">
          Manage contact form submissions.
        </p>
      </div>

      <LeadsTable
        leads={leads}
        onView={setSelectedLead}
      />

      <LeadDetailsDrawer
        lead={selectedLead}
        open={selectedLead !== null}
        onClose={() => setSelectedLead(null)}
      />
    </>
  );
}