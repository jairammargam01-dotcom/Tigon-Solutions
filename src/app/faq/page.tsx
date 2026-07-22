import type { Metadata } from "next";
import FAQClient from "./FAQClient";

export const metadata: Metadata = {
  title: "Frequently Asked Questions ",

  description:
    "Find answers to frequently asked questions about Tygon Solutions, including AI solutions, software development, digital marketing, project timelines, pricing, support, technologies, and our collaboration process.",

  keywords: [
    "Tygon Solutions FAQ",
    "Frequently Asked Questions",
    "Software Development FAQ",
    "AI Development FAQ",
    "Digital Marketing FAQ",
    "Project Pricing",
    "Project Timeline",
    "Technology Consulting",
    "Support Services",
    "Business Automation",
    "Cloud Services",
  ],

  alternates: {
    canonical: "/faq",
  },

  openGraph: {
    title: "Frequently Asked Questions",
    description:
      "Everything you need to know about our AI, software development, cloud, digital marketing, consulting services, pricing, and project delivery process.",
    url: "/faq",
  },

  twitter: {
    title: "Frequently Asked Questions ",
    description:
      "Get answers to the most common questions about working with Tygon Solutions.",
  },
};

export default function FAQPage() {
  return <FAQClient />;
}