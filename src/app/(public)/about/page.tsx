import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Our Company & Technology Partner",

  description:
    "Learn about Tygon Solutions, our mission, vision, values, and commitment to delivering AI solutions, custom software, cloud technologies, digital marketing, and business consulting that help organizations innovate and grow.",

  keywords: [
    "About Tygon Solutions",
    "Technology Company",
    "Software Development Company",
    "AI Solutions Company",
    "Digital Transformation",
    "Business Technology Partner",
    "IT Consulting",
    "Cloud Solutions",
    "Digital Innovation",
    "Technology Services",
    "Software Company India",
  ],

  alternates: {
    canonical: "/about",
  },

  openGraph: {
    title: "About Our Company & Technology Partner",
    description:
      "Discover who we are, what we believe in, and how Tygon Solutions helps businesses build, automate, market, and scale through innovative technology solutions.",
    url: "/about",
  },  

  twitter: {
    title: "About Our Company & Technology Partner",
    description:
      "Learn about the people, mission, and vision behind Tygon Solutions.",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}