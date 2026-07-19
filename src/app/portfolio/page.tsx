import type { Metadata } from "next";
import PortfolioClient from "./PortfolioClient";

export const metadata: Metadata = {
  title: "Our Portfolio",
  description:
    "Explore representative projects, demo solutions, and innovation showcases from Tygon Solutions across AI, software engineering, cloud, and digital transformation.",
  alternates: {
    canonical: "/portfolio",
  },
};

export default function PortfolioPage() {
  return <PortfolioClient />;
}