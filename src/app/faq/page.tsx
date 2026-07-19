import type { Metadata } from "next";
import FAQClient from "./FAQClient";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Find answers to common questions about Tygon Solutions, our services, pricing, timelines, support, and partnership model.",
  alternates: {
    canonical: "/faq",
  },
};

export default function FAQPage() {
  return <FAQClient />;
}