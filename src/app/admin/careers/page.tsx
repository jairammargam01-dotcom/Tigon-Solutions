import CareersClient from "@/components/admin/careers/CareersClient";
import { connectDB } from "@/lib/mongodb";
import Career from "@/models/Career";
import type { CareerDocument } from "@/models/Career";

type CareerWithId = CareerDocument & {
  _id: {
    toString(): string;
  };
  createdAt: Date;
  updatedAt: Date;
};

export const metadata = {
  title: "Career Management | Admin",
};

export default async function CareersPage() {
  await connectDB();

  const careers = await Career.find()
    .sort({
      displayOrder: 1,
      createdAt: -1,
    })
    .lean();

  const serializedCareers = careers.map((career: CareerWithId) => ({
    ...career,
    _id: career._id.toString(),
    createdAt: career.createdAt.toISOString(),
    updatedAt: career.updatedAt.toISOString(),
  }));

  return (
    <CareersClient
      initialCareers={serializedCareers}
    />
  );
}