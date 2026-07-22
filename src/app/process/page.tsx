import type { Metadata } from "next";
import ProcessClient from "./ProcessClient";

export const metadata: Metadata = {
  title: "Our Process | From Idea to Deployment ",

  description:
    "Discover Tygon Solutions' proven development process—from strategy and discovery to design, development, testing, deployment, and long-term support. Transparent communication, agile execution, and measurable results at every stage.",

  keywords: [
    "Software Development Process",
    "Agile Development",
    "Project Workflow",
    "Digital Product Development",
    "AI Development Process",
    "Web Development Process",
    "Technology Consulting",
    "Software Engineering",
    "Deployment",
    "Quality Assurance",
    "Project Delivery",
    "Tygon Solutions Process",
  ],

  alternates: {
    canonical: "/process",
  },

  openGraph: {
    title: "Our Process ",
    description:
      "Learn how we transform ideas into scalable digital solutions through a transparent, agile, and client-focused development process.",
    url: "/process",
  },

  twitter: {
    title: "Our Process ",
    description:
      "See how Tygon Solutions delivers successful AI, software, and digital transformation projects from concept to launch.",
  },
};

export default function ProcessPage() {
  return <ProcessClient />;
}