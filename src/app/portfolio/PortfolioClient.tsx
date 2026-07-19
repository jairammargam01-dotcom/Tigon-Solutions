"use client";

import { motion } from "motion/react";

const projects = [
  {
    title: "Enterprise Resource Planner",
    category: "Concept Project",
    tech: "React, Node.js, PostgreSQL",
  },
  {
    title: "AI-Powered CRM",
    category: "Demo Solution",
    tech: "OpenAI, Next.js, Tailwind",
  },
  {
    title: "Global Logistics Tracker",
    category: "Representative Project",
    tech: "React Native, AWS, Google Maps API",
  },
  {
    title: "Fintech Dashboard",
    category: "Concept Project",
    tech: "Vue.js, D3.js, Supabase",
  },
  {
    title: "Healthcare Telemetry App",
    category: "Internal Product",
    tech: "Flutter, Firebase, WebRTC",
  },
  {
    title: "E-commerce Scale Architecture",
    category: "Innovation Showcase",
    tech: "Microservices, Kubernetes, Redis",
  },
];

export default function PortfolioClient() {
  return (
    <section className="container mx-auto px-4 pt-40 pb-20">
      <div className="mx-auto mb-16 max-w-3xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display mb-6 text-4xl font-bold text-white md:text-6xl"
        >
          Our <span className="text-gradient">Work</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-white/70"
        >
          Explore our representative projects, demo solutions, and innovation
          showcases demonstrating our technical capabilities.
        </motion.p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass-card group overflow-hidden"
          >
            <div className="relative flex h-48 items-center justify-center overflow-hidden border-b border-white/10 bg-dark p-6">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 transition-transform duration-500 group-hover:scale-110" />

              <h3 className="font-display z-10 text-center text-2xl font-bold text-white/20 transition-colors group-hover:text-white/70">
                {project.title}
              </h3>
            </div>

            <div className="p-6">
              <div className="mb-2 text-xs font-bold uppercase tracking-wider text-accent">
                {project.category}
              </div>

              <h3 className="mb-2 text-xl font-bold text-white">
                {project.title}
              </h3>

              <p className="text-sm text-white/70">{project.tech}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}