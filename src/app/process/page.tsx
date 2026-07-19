import type { Metadata } from "next";
import ProcessClient from "./ProcessClient";

export const metadata: Metadata = {
  title: "Our Process | Tygon Solutions",
  description:
    "Discover Tygon Solutions' transparent and agile software development process—from discovery and planning to deployment and long-term support.",
  alternates: {
    canonical: "/process",
  },
};

export default function ProcessPage() {
  return <ProcessClient />;
}