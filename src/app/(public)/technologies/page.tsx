import type { Metadata } from "next";
import TechnologiesClient from "./TechnologiesClient";

export const metadata: Metadata = {
  title: "Technology Stack | React, Next.js, AI, Cloud & DevOps",

  description:
    "Explore the modern technologies used by Tygon Solutions, including React, Next.js, Node.js, Python, AI, cloud platforms, databases, DevOps, mobile development, and enterprise software technologies.",

  keywords: [
    "Technology Stack",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Python",
    "Java",
    "MongoDB",
    "PostgreSQL",
    "Redis",
    "OpenAI",
    "TensorFlow",
    "PyTorch",
    "LangChain",
    "Hugging Face",
    "AWS",
    "Google Cloud",
    "Azure",
    "Docker",
    "Kubernetes",
    "React Native",
    "Flutter",
    "Enterprise Technology",
    "Modern Technology Stack",
    "Tygon Solutions Technologies",
  ],

  alternates: {
    canonical: "/technologies",
  },

  openGraph: {
    title: "Technology Stack | Modern Technologies We Use",
    description:
      "Discover the modern technologies and frameworks powering AI, software, cloud, mobile, and enterprise solutions at Tygon Solutions.",
    url: "/technologies",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Technology Stack ",
    description:
      "Explore our modern technology stack across AI, software engineering, cloud, DevOps, and mobile development.",
  },
};

export default function TechnologiesPage() {
  return <TechnologiesClient />;
}