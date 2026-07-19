import type { Metadata } from "next";
import IndustriesClient from "./IndustriesClient";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "Discover how Tygon Solutions delivers tailored AI, software, cloud, and digital transformation solutions across healthcare, finance, retail, manufacturing, education, and more.",
  alternates: {
    canonical: "/industries",
  },
};

export default function IndustriesPage() {
  return <IndustriesClient />;
}