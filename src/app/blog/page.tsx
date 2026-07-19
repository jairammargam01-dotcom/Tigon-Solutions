import type { Metadata } from "next";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: "Blog | Tygon Solutions",
  description:
    "Read the latest articles on AI, software development, cloud computing, cybersecurity, digital marketing, and business technology from Tygon Solutions.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog | Tygon Solutions",
    description:
      "Insights on AI, software engineering, cloud computing, and digital transformation.",
    url: "/blog",
    type: "website",
  },
};

export default function BlogPage() {
  return <BlogClient />;
}