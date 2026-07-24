"use client";

import { motion } from "motion/react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import JobPostingJsonLd from "@/components/seo/JobPostingJsonLd";

import type { Career } from "@/types/career";

interface CareersClientProps {
  careers: Career[];
}

export default function CareersClient({
  careers,
}: CareersClientProps) {
  return (
    <>
      <JobPostingJsonLd jobs={careers} />

      <section className="container mx-auto max-w-5xl px-4 pt-40 pb-20">
        <div className="mb-16 text-center">
          <h1 className="font-display mb-6 text-4xl font-bold text-white md:text-6xl">
            Join{" "}
            <span className="text-gradient">
              Tygon Solutions
            </span>
          </h1>

          <p className="mx-auto max-w-2xl text-lg text-white/70">
            Explore exciting opportunities across engineering,
            AI, design, marketing, consulting, and creative
            teams. Join us in building world-class digital
            products and helping businesses transform with
            technology.
          </p>
        </div>

        {careers.length === 0 ? (
          <div className="glass-card rounded-2xl p-12 text-center">
            <h2 className="mb-4 text-2xl font-bold text-white">
              No Open Positions
            </h2>

            <p className="text-white/60">
              We don’t have any openings right now.
              Please check back later.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {careers.map((career, index) => (
              <motion.div
                key={career._id}
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.05,
                }}
                className="glass-card flex flex-col items-start justify-between gap-5 p-6 transition-colors hover:bg-white/10 md:flex-row md:items-center md:p-8"
              >
                <div className="flex-1">
                  <div className="mb-3 flex flex-wrap items-center gap-3">
                    <h2 className="text-xl font-bold text-white">
                      {career.title}
                    </h2>

                    {career.featured && (
                      <span className="rounded-full bg-blue-600/20 px-3 py-1 text-xs font-medium text-blue-400">
                        Featured
                      </span>
                    )}
                  </div>

                  <p className="mb-5 leading-7 text-white/70">
                    {career.shortDescription}
                  </p>

                  <div className="flex flex-wrap items-center gap-3 text-sm text-white/60">
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                      {career.department}
                    </span>

                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                      {career.employmentType}
                    </span>

                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                      {career.location}
                    </span>
                  </div>
                </div>

                <Button
                  asChild
                  variant="outline"
                  className="shrink-0"
                >
                  <Link
                    href={career.applyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Apply Now
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}