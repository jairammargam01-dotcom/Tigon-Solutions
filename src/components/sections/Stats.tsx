"use client";

import { motion } from "motion/react";

const stats = [
  {
    value: "14+",
    label: "Solution Categories",
  },
  {
    value: "100+",
    label: "Service Capabilities",
  },
  {
    value: "AI First",
    label: "Innovation Approach",
  },
  {
    value: "Global",
    label: "Remote Delivery",
  },
];

export default function Stats() {
  return (
    <section className="relative z-10 border-y border-white/10 bg-white/[0.02] py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: index * 0.1,
              }}
              className="text-center"
            >
              <div className="mb-2 font-display text-4xl font-bold text-white md:text-5xl">
                {stat.value}
              </div>

              <div className="text-sm font-medium text-white/60 md:text-base">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}