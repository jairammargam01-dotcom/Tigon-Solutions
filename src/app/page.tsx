import type { Metadata } from "next";

import CTA from "@/components/sections/CTA";
import Hero from "@/components/sections/Hero";
import ServicesPreview from "@/components/sections/ServicesPreview";
import Stats from "@/components/sections/Stats";
import WhyChooseUs from "@/components/sections/WhyChooseUs";

export const metadata: Metadata = {
  title: "Tygon Solutions | One Partner. Unlimited Digital Solutions.",
  description:
    "Tygon Solutions helps businesses build, automate, market, and scale through AI, software development, cloud, digital marketing, and expert technology services.",
  alternates: {
    canonical: "/",
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