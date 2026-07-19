import type { Metadata } from "next";
import CareersClient from "./CareersClient";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join the Tygon Solutions network of developers, designers, AI specialists, marketers, consultants, and innovators building world-class digital solutions.",
  alternates: {
    canonical: "/careers",
  },
};

export default function CareersPage() {
  return <CareersClient />;
}