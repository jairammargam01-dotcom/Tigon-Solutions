import type { Metadata } from "next";

import CTA from "@/components/sections/CTA";
import Hero from "@/components/sections/Hero";
import ServicesPreview from "@/components/sections/ServicesPreview";
import Stats from "@/components/sections/Stats";
import WhyChooseUs from "@/components/sections/WhyChooseUs";

export const metadata: Metadata = {
  title: "Tygon Solutions | One Partner. Unlimited Digital Solutions.",

  description:
    "Tygon Solutions helps startups, SMEs, and enterprises build, automate, market, and scale through AI solutions, custom software development, web and mobile applications, cloud services, cybersecurity, digital marketing, branding, and technology consulting.",

  keywords: [
    "Tygon Solutions",
    "Software Development Company",
    "AI Solutions",
    "Artificial Intelligence",
    "Custom Software Development",
    "Web Development",
    "Website Development",
    "Mobile App Development",
    "Cloud Services",
    "Cloud Computing",
    "Cybersecurity",
    "Digital Marketing",
    "SEO Services",
    "UI UX Design",
    "Business Consulting",
    "Technology Consulting",
    "IT Services",
    "Digital Transformation",
    "Business Automation",
    "Enterprise Software",
    "Technology Partner",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Tygon Solutions | One Partner. Unlimited Digital Solutions.",
    description:
      "Helping businesses build, automate, market, and scale through AI, software engineering, cloud, cybersecurity, digital marketing, and innovative technology solutions.",
    url: "/",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Tygon Solutions | One Partner. Unlimited Digital Solutions.",
    description:
      "Your trusted technology partner for AI, software engineering, cloud, cybersecurity, digital marketing, and business growth.",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <ServicesPreview />
      <WhyChooseUs />
      <CTA />
    </>
  );
}