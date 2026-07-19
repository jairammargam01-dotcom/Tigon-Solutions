"use client";

import { motion } from "motion/react";

const benefits = [
  "Elite network of vetted professionals across all tech domains.",
  "Transparent, agile process from discovery to deployment.",
  "Focus on scalable architecture and enterprise-grade security.",
  "Dedicated support and continuous innovation partnership.",
];

export default function WhyChooseUs() {
  return (
    <section className="relative z-10 overflow-hidden bg-gradient-to-b from-background to-dark py-32">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-6 font-display text-3xl font-bold text-white md:text-5xl">
              Not Just Builders.
              <br />
              <span className="text-gradient">
                Problem Solvers.
              </span>
            </h2>

            <p className="mb-8 text-lg leading-relaxed text-white/70">
              We don’t just write code or design interfaces. We deeply
              understand your business objectives and engineer scalable
              solutions that drive measurable growth.
            </p>

            <ul className="space-y-6">
              {benefits.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-4"
                >
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-success/20">
                    <div className="h-2 w-2 rounded-full bg-success" />
                  </div>

                  <span className="text-white/80">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="glass aspect-square overflow-hidden rounded-3xl p-1 md:aspect-video lg:aspect-square">
              <div className="group relative h-full w-full overflow-hidden rounded-3xl border border-white/10 bg-dark/80 p-8 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 opacity-50 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="absolute h-[200%] w-[200%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#2563EB_100%)] opacity-20" />

                <div className="relative z-10 flex h-full items-center justify-center text-center">
                  <div className="max-w-sm">
                    <h3 className="mb-4 text-2xl font-bold text-white">
                      Enterprise Grade by Default
                    </h3>

                    <p className="text-white/60">
                      Every line of code, every pixel, and every infrastructure
                      decision is made with scalability and security in mind.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}