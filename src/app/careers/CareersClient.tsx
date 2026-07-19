"use client";

import { motion } from "motion/react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const positions = [
  {
    title: "Senior Full Stack Engineer",
    type: "Full-time",
    location: "Remote",
    department: "Engineering",
  },
  {
    title: "AI/ML Solutions Architect",
    type: "Full-time",
    location: "Remote",
    department: "Artificial Intelligence",
  },
  {
    title: "Lead Product Designer",
    type: "Full-time",
    location: "Remote",
    department: "Design",
  },
  {
    title: "Enterprise Account Executive",
    type: "Full-time",
    location: "Remote",
    department: "Sales",
  },
];

export default function CareersClient() {
  return (
    <section className="container mx-auto max-w-5xl px-4 pt-40 pb-20">
      <div className="mb-16 text-center">
        <h1 className="font-display mb-6 text-4xl font-bold text-white md:text-6xl">
          Join The <span className="text-gradient">Network</span>
        </h1>

        <p className="mx-auto max-w-2xl text-lg text-white/70">
          We are always looking for exceptional talent. Whether you’re a 
          seasoned engineer or a creative visionary, we provide the platform to
          build career-defining work.
        </p>
      </div>

      <div className="space-y-4">
        {positions.map((position, index) => (
          <motion.div
            key={position.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="glass-card flex flex-col items-start justify-between gap-4 p-6 transition-colors hover:bg-white/10 md:flex-row md:items-center md:p-8"
          >
            <div>
              <h2 className="mb-2 text-xl font-bold text-white">
                {position.title}
              </h2>

              <div className="flex flex-wrap items-center gap-3 text-sm text-white/60">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                  {position.department}
                </span>

                <span>{position.type}</span>

                <span>• {position.location}</span>
              </div>
            </div>

            <Button asChild variant="outline" className="shrink-0">
              <Link href="/contact">Apply Now</Link>
            </Button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}