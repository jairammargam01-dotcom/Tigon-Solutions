"use client";

import { motion } from "motion/react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const positions = [
  {
    title: "Motion Graphics Designer & Video Editor",
    type: "Full-time",
    location: "Remote",
    department: "Tygon Studios",
  },
];

export default function CareersClient() {
  return (
    <section className="container mx-auto max-w-5xl px-4 pt-40 pb-20">
      <div className="mb-16 text-center">
        <h1 className="font-display mb-6 text-4xl font-bold text-white md:text-6xl">
          Join <span className="text-gradient">Tygon Solutions</span>
        </h1>

        <p className="mx-auto max-w-2xl text-lg text-white/70">
          We’re hiring a creative{" "}
          <strong>Motion Graphics Designer &amp; Video Editor</strong> to join
          <strong> Tygon Studios</strong>, our creative division. You’ll create
          engaging motion graphics, advertisements, YouTube videos, social media
          reels, animations, and branded visual content for clients across
          multiple industries. If you’re passionate about storytelling through
          design and video, we’d love to hear from you.
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
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSeaKztvzQSHEsRFeHMGky4nSET248Ifs4E-zL_YLuOdYTEFWg/viewform"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apply Now
              </Link>
            </Button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}