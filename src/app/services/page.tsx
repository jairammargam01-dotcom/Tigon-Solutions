import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title:
    "Technology Services | AI, Software Development & Digital Solutions",

  description:
    "Discover Tygon Solutions' comprehensive technology services, including AI solutions, custom software development, web and mobile applications, UI/UX design, cloud services, DevOps, cybersecurity, digital marketing, branding, staffing, and business consulting.",

  keywords: [
    "Technology Services",
    "AI Solutions",
    "Artificial Intelligence Services",
    "Custom Software Development",
    "Software Development Company",
    "Web Development",
    "Website Development",
    "Mobile App Development",
    "UI UX Design",
    "Cloud Services",
    "Cloud Migration",
    "DevOps Services",
    "Cybersecurity Services",
    "Digital Marketing Services",
    "SEO Services",
    "Branding Services",
    "Business Consulting",
    "IT Consulting",
    "Technology Consulting",
    "Business Automation",
    "Digital Transformation",
    "Technology Partner",
    "Tygon Solutions Services",
  ],

  alternates: {
    canonical: "/services",
  },

  openGraph: {
    title:
      "Technology Services | AI, Software Development & Digital Solutions",
    description:
      "Explore AI, software engineering, cloud, cybersecurity, branding, digital marketing, consulting, and technology services from Tygon Solutions.",
    url: "/services",
  },

  twitter: {
    title: "Technology Services ",
    description:
      "End-to-end technology services that help businesses build, automate, market, and scale.",
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}