import type { Metadata } from "next";
import IndustriesClient from "./IndustriesClient";

export const metadata: Metadata = {
  title: "Industries We Serve | AI & Technology Solutions",

  description:
    "Explore how Tygon Solutions delivers industry-specific AI, software development, cloud, automation, and digital transformation solutions for healthcare, finance, retail, manufacturing, education, logistics, real estate, startups, and enterprise businesses.",

  keywords: [
    "Industries We Serve",
    "Healthcare Technology",
    "Finance Software",
    "Retail Technology",
    "Manufacturing Software",
    "Education Technology",
    "Logistics Solutions",
    "Real Estate Technology",
    "Startup Technology",
    "Enterprise Software",
    "Digital Transformation",
    "AI Solutions",
    "Industry Solutions",
  ],

  alternates: {
    canonical: "/industries",
  },

  openGraph: {
    title: "Industries We Serve ",
    description:
      "Discover tailored AI, software engineering, cloud, and digital transformation solutions built for businesses across multiple industries.",
    url: "/industries",
  },

  twitter: {
    title: "Industries We Serve ",
    description:
      "Industry-focused AI, software, cloud, and digital solutions designed to help businesses innovate and grow.",
  },
};

export default function IndustriesPage() {
  return <IndustriesClient />;
}