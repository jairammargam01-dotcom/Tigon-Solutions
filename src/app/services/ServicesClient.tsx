"use client";

import { motion } from "motion/react";
import Link from "next/link";
import {
  Sparkles,
  Code,
  Layout,
  Smartphone,
  Palette,
  TrendingUp,
  Video,
  Share2,
  Database,
  Cloud,
  Shield,
  Users,
  Briefcase,
  Cpu,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const categories = [
  {
    id: "ai",
    title: "AI & Automation",
    icon: <Sparkles className="h-6 w-6" />,
    color: "from-purple-500 to-indigo-500",
    items: [
      "AI Chatbots",
      "AI Agents",
      "Generative AI",
      "LLM Integration",
      "Prompt Engineering",
      "AI Evaluation",
      "AI Training",
      "RAG Systems",
      "Workflow Automation",
      "Business Automation",
      "CRM Automation",
      "Email Automation",
      "Voice AI",
      "Custom AI Solutions",
    ],
  },
  {
    id: "software",
    title: "Software Development",
    icon: <Code className="h-6 w-6" />,
    color: "from-blue-500 to-cyan-500",
    items: [
      "Custom Software",
      "Enterprise Software",
      "SaaS Development",
      "CRM Systems",
      "ERP Systems",
      "Backend Development",
      "Frontend Development",
      "Full Stack Development",
      "REST APIs",
      "GraphQL APIs",
      "Microservices",
      "Desktop Applications",
    ],
  },
  {
    id: "web",
    title: "Web Development",
    icon: <Layout className="h-6 w-6" />,
    color: "from-emerald-500 to-teal-500",
    items: [
      "Corporate Websites",
      "Business Websites",
      "Landing Pages",
      "Portfolio Websites",
      "Custom Web Apps",
      "E-commerce Websites",
      "WordPress",
      "Shopify",
      "Website Maintenance",
      "Website Redesign",
      "Website Optimization",
    ],
  },
  {
    id: "mobile",
    title: "Mobile Development",
    icon: <Smartphone className="h-6 w-6" />,
    color: "from-orange-500 to-red-500",
    items: [
      "Android",
      "iOS",
      "Flutter",
      "React Native",
      "Cross Platform Apps",
    ],
  },
  {
    id: "uiux",
    title: "UI / UX & Branding",
    icon: <Palette className="h-6 w-6" />,
    color: "from-pink-500 to-rose-500",
    items: [
      "UI Design",
      "UX Design",
      "Brand Identity",
      "Logo Design",
      "Graphic Design",
      "Posters",
      "Flyers",
      "Business Cards",
      "Brochures",
      "Packaging Design",
      "Presentations",
      "Pitch Decks",
    ],
  },
  {
    id: "marketing",
    title: "Digital Marketing",
    icon: <TrendingUp className="h-6 w-6" />,
    color: "from-amber-500 to-yellow-500",
    items: [
      "SEO",
      "Local SEO",
      "Google Ads",
      "Meta Ads",
      "Instagram Marketing",
      "Facebook Marketing",
      "LinkedIn Marketing",
      "YouTube Marketing",
      "Email Marketing",
      "WhatsApp Marketing",
      "Lead Generation",
      "Performance Marketing",
    ],
  },
  {
    id: "content",
    title: "Content Creation",
    icon: <Video className="h-6 w-6" />,
    color: "from-violet-500 to-purple-500",
    items: [
      "Video Editing",
      "YouTube Editing",
      "Instagram Reels",
      "Short-form Videos",
      "Motion Graphics",
      "Animation",
      "Podcast Editing",
      "Thumbnail Design",
      "Content Strategy",
    ],
  },
  {
    id: "social",
    title: "Social Media",
    icon: <Share2 className="h-6 w-6" />,
    color: "from-blue-400 to-blue-600",
    items: [
      "Social Media Management",
      "Monthly Planning",
      "Content Calendar",
      "Community Management",
      "Analytics",
      "Brand Growth",
    ],
  },
  {
    id: "data",
    title: "Data & Analytics",
    icon: <Database className="h-6 w-6" />,
    color: "from-cyan-500 to-blue-500",
    items: [
      "Power BI",
      "Tableau",
      "Dashboards",
      "Data Engineering",
      "Business Intelligence",
      "Machine Learning",
      "Predictive Analytics",
    ],
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    icon: <Cloud className="h-6 w-6" />,
    color: "from-sky-400 to-indigo-500",
    items: [
      "AWS",
      "Azure",
      "Google Cloud",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "Cloud Migration",
      "Monitoring",
    ],
  },
  {
    id: "security",
    title: "Cyber Security",
    icon: <Shield className="h-6 w-6" />,
    color: "from-red-500 to-rose-600",
    items: [
      "Security Audits",
      "Penetration Testing",
      "Security Consulting",
      "Infrastructure Security",
    ],
  },
  {
    id: "staffing",
    title: "Recruitment & Staffing",
    icon: <Users className="h-6 w-6" />,
    color: "from-emerald-400 to-green-600",
    items: [
      "IT Recruitment",
      "Dedicated Developers",
      "Remote Teams",
      "Contract Staffing",
      "Technical Hiring",
      "Resource Augmentation",
      "Interview Management",
    ],
  },
  {
    id: "consulting",
    title: "Business Consulting",
    icon: <Briefcase className="h-6 w-6" />,
    color: "from-slate-400 to-slate-600",
    items: [
      "Technology Consulting",
      "Startup Consulting",
      "Digital Transformation",
      "Product Strategy",
      "Business Process Optimization",
    ],
  },
  {
    id: "emerging",
    title: "Emerging Technologies",
    icon: <Cpu className="h-6 w-6" />,
    color: "from-fuchsia-500 to-pink-600",
    items: [
      "Blockchain",
      "Internet of Things",
      "AR",
      "VR",
      "Computer Vision",
      "Machine Learning",
      "Robotics Integration",
    ],
  },
];

export default function ServicesClient() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-40 pb-20">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />

        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display mb-6 text-4xl font-bold text-white md:text-6xl lg:text-7xl"
          >
            Unlimited <span className="text-gradient">Capabilities.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mx-auto mb-10 max-w-3xl text-lg text-white/70 md:text-xl"
          >
            We deploy specialized teams across 14 technology domains to build,
            scale, and secure your digital ecosystem.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-32">
            {categories.map((category) => (
              <div key={category.id} id={category.id} className="scroll-mt-32">
                <div className="mb-10 flex items-center gap-4">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${category.color} text-white shadow-lg`}
                  >
                    {category.icon}
                  </div>

                  <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
                    {category.title}
                  </h2>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {category.items.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="glass-card flex items-center gap-3 rounded-xl border border-white/5 p-4 transition-colors hover:bg-white/10"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-primary/50" />

                      <span className="font-medium text-white/80">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Services */}
      <section className="relative z-10 overflow-hidden border-t border-white/10 py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-dark to-primary/10" />

        <div className="container relative mx-auto px-4 text-center">
          <div className="glass mx-auto max-w-4xl rounded-3xl p-12 md:p-20">
            <h2 className="font-display mb-6 text-3xl font-bold text-white md:text-5xl">
              Need Something Beyond Our Listed Services?
            </h2>

            <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-white/70">
              Every business has unique challenges. If your required service
              isn’t listed, simply tell us your idea. Through our trusted
              network of developers, designers, engineers, AI specialists,
              marketers, consultants, and recruiters, we’ll assemble the right
              team to deliver a complete solution tailored to your needs.
            </p>

            <p className="mb-10 text-xl font-medium text-white">
              No project is too small or too complex.
            </p>

            <Button asChild variant="gradient" size="lg" className="px-10 text-lg">
              <Link href="/contact">Discuss Your Custom Needs</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}