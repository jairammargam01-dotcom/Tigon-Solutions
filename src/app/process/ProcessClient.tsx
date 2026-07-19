"use client";

import { motion } from "motion/react";

const steps = [
  {
    num: "01",
    title: "Discovery",
    desc: "Understanding your business goals, target audience, and technical requirements.",
  },
  {
    num: "02",
    title: "Consultation",
    desc: "Deep dive into architecture, strategy, and feasibility with our technical leads.",
  },
  {
    num: "03",
    title: "Planning",
    desc: "Creating comprehensive roadmaps, wireframes, and project milestones.",
  },
  {
    num: "04",
    title: "Proposal",
    desc: "Delivering a transparent, detailed scope of work and resource allocation plan.",
  },
  {
    num: "05",
    title: "Development",
    desc: "Agile execution by our vetted network of specialized developers and designers.",
  },
  {
    num: "06",
    title: "Testing",
    desc: "Rigorous QA, security auditing, and performance optimization.",
  },
  {
    num: "07",
    title: "Deployment",
    desc: "Smooth launch with zero downtime architecture and CI/CD pipelines.",
  },
  {
    num: "08",
    title: "Support",
    desc: "Ongoing maintenance, monitoring, and continuous iterative improvement.",
  },
];

export default function ProcessClient() {
  return (
    <section className="container mx-auto px-4 pt-40 pb-20">
      <div className="mx-auto mb-20 max-w-3xl text-center">
        <h1 className="mb-6 text-4xl font-display font-bold text-white md:text-6xl">
          The Tygon <span className="text-gradient">Methodology</span>
        </h1>

        <p className="text-lg text-white/70">
          A transparent, agile, and battle-tested delivery process designed to
          mitigate risk and accelerate time-to-market.
        </p>
      </div>

      <div className="mx-auto max-w-4xl">
        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
            viewport={{ once: true }}
            className="relative mb-12 flex gap-6 last:mb-0 md:gap-10"
          >
            {i !== steps.length - 1 && (
              <div className="absolute left-[27px] top-16 bottom-[-48px] w-px bg-white/10 md:left-[39px]" />
            )}

            <div className="shrink-0">
              <div className="glass relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl text-xl font-bold text-primary md:h-20 md:w-20 md:text-2xl">
                {step.num}
              </div>
            </div>

            <div className="pt-2 md:pt-4">
              <h3 className="mb-3 text-2xl font-display font-bold text-white md:text-3xl">
                {step.title}
              </h3>

              <p className="text-lg text-white/60">
                {step.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}