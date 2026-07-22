import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | Let's Build Something Great",

  description:
    "Get in touch with Tygon Solutions to discuss AI solutions, custom software development, web and mobile applications, cloud services, digital marketing, branding, and technology consulting. Let's turn your ideas into reality.",

  keywords: [
    "Contact Tygon Solutions",
    "Software Development Company Contact",
    "AI Consulting",
    "Web Development Services",
    "Mobile App Development",
    "Cloud Consulting",
    "Digital Marketing Agency",
    "Technology Consulting",
    "Business Automation",
    "Request a Quote",
    "Technology Partner",
  ],

  alternates: {
    canonical: "/contact",
  },

  openGraph: {
    title: "Contact Us | Let's Build Something Great",
    description:
      "Ready to start your next project? Contact Tygon Solutions for AI, software development, cloud, digital marketing, and business consulting services.",
    url: "/contact",
  },

  twitter: {
    title: "Contact Us",
    description:
      "Let's discuss your next technology project and build something exceptional together.",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}