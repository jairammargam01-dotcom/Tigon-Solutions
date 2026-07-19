"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  Bot,
  Code2,
  Smartphone,
  BarChart,
  Cloud,
  Shield,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const services = [
  {
    icon: <Bot className="h-8 w-8 text-primary" />,
    title: "Artificial Intelligence",
    description:
      "AI & Automation, Machine Learning, Generative AI, LLM Integration, AI Agents, Workflow Automation, and Intelligent Business Solutions.",
    href: "/services#ai",
    linkText: "Explore Artificial Intelligence",
  },
  {
    icon: <Code2 className="h-8 w-8 text-secondary" />,
    title: "Software & Product Development",
    description:
      "Custom Software, SaaS Platforms, Enterprise Applications, Web Development, Mobile Apps, APIs, and Full-Stack Engineering.",
    href: "/services#software",
    linkText: "Explore Software Development",
  },
  {
    icon: <Smartphone className="h-8 w-8 text-accent" />,
    title: "Design & Brand Experience",
    description:
      "UI/UX Design, Brand Identity, Graphic Design, Logo Design, Marketing Assets, and Digital Product Experiences.",
    href: "/services#uiux",
    linkText: "Explore Design Services",
  },
  {
    icon: <BarChart className="h-8 w-8 text-primary" />,
    title: "Marketing & Digital Growth",
    description:
      "SEO, Performance Marketing, Social Media Management, Content Creation, Video Production, Lead Generation, and Brand Growth.",
    href: "/services#marketing",
    linkText: "Explore Marketing Services",
  },
  {
    icon: <Cloud className="h-8 w-8 text-secondary" />,
    title: "Data, Cloud & Security",
    description:
      "Business Intelligence, Data Analytics, Cloud Infrastructure, DevOps, Cyber Security, Monitoring, and Scalable Architecture.",
    href: "/services#data",
    linkText: "Explore Data & Cloud",
  },
  {
    icon: <Shield className="h-8 w-8 text-accent" />,
    title: "Business & Innovation",
    description:
      "Technology Consulting, Recruitment & Staffing, Digital Transformation, Emerging Technologies, and Business Strategy.",
    href: "/services#staffing",
    linkText: "Explore Business Solutions",
  },
];

export default function ServicesPreview() {
  return (
    <section className="relative z-10 py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <h2 className="mb-6 font-display text-3xl font-bold text-white md:text-5xl">
            Comprehensive Capabilities
          </h2>

          <p className="text-lg text-white/60">
            From artificial intelligence to enterprise software, we provide
            end-to-end expertise to solve complex business challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
              }}
              className="glass-card group cursor-pointer p-8 transition-colors duration-300 hover:bg-white/10"
            >
              <div className="mb-6 inline-block rounded-2xl bg-white/5 p-4 transition-transform duration-300 group-hover:scale-110">
                {service.icon}
              </div>

              <h3 className="mb-3 text-xl font-bold text-white">
                {service.title}
              </h3>

              <p className="mb-6 leading-relaxed text-white/60">
                {service.description}
              </p>

              <Link
                href={service.href}
                className="inline-flex items-center text-sm font-medium text-primary transition-colors group-hover:text-white"
              >
                {service.linkText}

                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </div>
                <div className="mt-12 text-center">
          <Button
            asChild
            variant="outline"
            className="glass-card px-8"
          >
            <Link href="/services">
              View All 40+ Services
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}