"use client";

import { useMemo, useState } from "react";

import type { Career } from "@/types/career";

import CareersTable from "./CareersTable";
import DeleteCareerDialog from "./DeleteCareerDialog";

interface CareersClientProps {
  initialCareers: Career[];
}

export default function CareersClient({
  initialCareers,
}: CareersClientProps) {
  const [careers, setCareers] = useState(initialCareers);

  const [search, setSearch] = useState("");

  const [selectedCareer, setSelectedCareer] =
    useState<Career | null>(null);

  const [deleteLoading, setDeleteLoading] =
    useState(false);

  const filteredCareers = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) return careers;

    return careers.filter(
      (career) =>
        career.title.toLowerCase().includes(query) ||
        career.department
          .toLowerCase()
          .includes(query) ||
        career.location
          .toLowerCase()
          .includes(query)
    );
  }, [careers, search]);

  async function confirmDelete() {
    if (!selectedCareer) return;

    try {
      setDeleteLoading(true);

      const res = await fetch(
        `/api/admin/careers/${selectedCareer._id}`,
        {
          method: "DELETE",
        }
      );

      if (!res.ok) {
        const error = await res.json();

        alert(
          error.message ??
            "Failed to delete job."
        );

        return;
      }

      setCareers((prev) =>
        prev.filter(
          (career) =>
            career._id !==
            selectedCareer._id
        )
      );

      setSelectedCareer(null);
    } catch (error) {
      console.error(error);

      alert("Something went wrong.");
    } finally {
      setDeleteLoading(false);
    }
  }

  return (
    <>
      <div className="space-y-6">

        <div className="flex items-center justify-between">

          <h1 className="text-3xl font-bold">
            Careers
          </h1>

          <a
            href="/admin/careers/new"
            className="rounded-lg bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700"
          >
            New Job
          </a>

        </div>

        <input
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          placeholder="Search jobs..."
          className="w-full rounded-lg border border-slate-700 bg-transparent p-3 outline-none focus:border-blue-500"
        />

        <CareersTable
          careers={filteredCareers}
          onDelete={(id) => {
            const career =
              careers.find(
                (c) => c._id === id
              );

            if (career) {
              setSelectedCareer(career);
            }
          }}
        />

      </div>

      <DeleteCareerDialog
        open={!!selectedCareer}
        jobTitle={
          selectedCareer?.title ?? ""
        }
        loading={deleteLoading}
        onCancel={() =>
          setSelectedCareer(null)
        }
        onConfirm={confirmDelete}
      />
    </>
  );
}