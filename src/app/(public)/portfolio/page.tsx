import type { Metadata } from "next";
import PortfolioClient from "./PortfolioClient";

export const metadata: Metadata = {
  title: "Portfolio & Case Studies",

  description:
    "Explore AI solutions, custom software, web applications, cloud platforms, digital marketing campaigns, and innovative technology projects delivered by Tygon Solutions for startups, businesses, and enterprise clients.",

  keywords: [
    "Tygon Solutions Portfolio",
    "Software Development Portfolio",
    "AI Projects",
    "Web Development Portfolio",
    "Mobile App Projects",
    "Cloud Solutions",
    "Digital Marketing Portfolio",
    "Technology Projects",
    "Case Studies",
    "Digital Transformation",
    "Innovation Showcase",
    "Business Solutions",
  ],

  alternates: {
    canonical: "/portfolio",
  },

  openGraph: {
    title: "Portfolio & Case Studies ",
    description:
      "Explore our portfolio of AI, software engineering, cloud, web development, and digital transformation projects.",
    url: "/portfolio",
  },

  twitter: {
    title: "Portfolio & Case Studies ",
    description:
      "Discover innovative technology projects delivered by Tygon Solutions.",
  },
};

export default function PortfolioPage() {
  return <PortfolioClient />;
}