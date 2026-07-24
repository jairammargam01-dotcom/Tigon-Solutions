import { notFound } from "next/navigation";

import CareerForm from "@/components/admin/careers/CareerForm";
import { connectDB } from "@/lib/mongodb";
import Career from "@/models/Career";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export const metadata = {
  title: "Edit Job | Admin",
};

export default async function EditCareerPage({
  params,
}: PageProps) {
  await connectDB();

  const { id } = await params;

  const career = await Career.findById(id).lean();

  if (!career) {
    notFound();
  }

  const serializedCareer = {
    ...career,
    _id: career._id.toString(),
    createdAt: career.createdAt.toISOString(),
    updatedAt: career.updatedAt.toISOString(),
  };

  return (
    <div className="mx-auto max-w-5xl">

      <h1 className="mb-8 text-3xl font-bold">
        Edit Job
      </h1>

      <CareerForm
        career={serializedCareer}
        isEditing
      />

    </div>
  );
}