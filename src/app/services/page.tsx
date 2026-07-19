import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore AI, software development, web development, mobile apps, cloud, cybersecurity, and digital marketing services from Tygon Solutions.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}