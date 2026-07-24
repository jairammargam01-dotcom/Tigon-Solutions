import type { Metadata } from "next";

import CareersClient from "./CareersClient";

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

export async function generateMetadata(): Promise<Metadata> {
  await connectDB();

  const jobs = await Career.find({
    published: true,
  })
    .sort({
      displayOrder: 1,
    })
    .lean();

  const titles = jobs
    .slice(0, 5)
    .map((job: CareerWithId) => job.title);

  const pageTitle =
    jobs.length === 1
      ? `${jobs[0].title} | Careers | Tygon Solutions`
      : "Careers | Tygon Solutions";

  const description =
    jobs.length > 0
      ? `Explore ${jobs.length} open position${
          jobs.length > 1 ? "s" : ""
        } at Tygon Solutions including ${titles.join(", ")}.`
      : "Explore career opportunities at Tygon Solutions.";

  return {
    metadataBase: new URL(
      "https://tygon-solutions.vercel.app"
    ),

    title: pageTitle,

    description,

    alternates: {
      canonical: "/careers",
    },

    robots: {
      index: true,
      follow: true,
    },

    openGraph: {
      title: pageTitle,

      description,

      url: "/careers",

      siteName: "Tygon Solutions",

      type: "website",
    },

    twitter: {
      card: "summary_large_image",

      title: pageTitle,

      description,
    },
  };
}

export default async function CareersPage() {
  await connectDB();

  const careers = await Career.find({
    published: true,
  })
    .sort({
      displayOrder: 1,
      createdAt: -1,
    })
    .lean();

  const serializedCareers = careers.map(
    (career: CareerWithId) => ({
      ...career,
      _id: career._id.toString(),
      createdAt:
        career.createdAt.toISOString(),
      updatedAt:
        career.updatedAt.toISOString(),
    })
  );

  return (
    <CareersClient
      careers={serializedCareers}
    />
  );
}