import type { Metadata } from "next";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: "Technology Blog | AI, Software & Digital Insights",

  description:
    "Explore expert articles, guides, and insights from Tygon Solutions covering artificial intelligence, software development, cloud computing, cybersecurity, digital marketing, DevOps, emerging technologies, and digital transformation.",

  keywords: [
    "Technology Blog",
    "AI Blog",
    "Artificial Intelligence",
    "Software Development",
    "Web Development",
    "Cloud Computing",
    "Cybersecurity",
    "Digital Marketing",
    "DevOps",
    "Business Technology",
    "Digital Transformation",
    "Technology Trends",
    "Programming",
    "Enterprise Software",
    "Software Development Blog",
  ],

  alternates: {
    canonical: "/blog",
  },

  openGraph: {
    title: "Technology Blog | AI, Software & Digital Insights",
    description:
      "Read expert insights on AI, software engineering, cloud computing, cybersecurity, digital marketing, and emerging technologies.",
    url: "/blog",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Technology Blog | AI, Software & Digital Insights",
    description:
      "Expert articles and practical insights on AI, software development, cloud technologies, cybersecurity, and digital innovation.",
  },
};

export default function BlogPage() {
  return <BlogClient />;
}