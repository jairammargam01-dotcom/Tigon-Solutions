"use client";

import { motion } from "motion/react";

const industries = [
  "Healthcare",
  "Education",
  "Finance",
  "Retail",
  "Manufacturing",
  "Construction",
  "Real Estate",
  "Hospitality",
  "Automotive",
  "Logistics",
  "Agriculture",
  "Government",
  "Startups",
  "Enterprise",
  "E-commerce",
  "Media",
  "Telecommunications",
];

export default function IndustriesClient() {
  return (
    <section className="container mx-auto px-4 pt-40 pb-20">
      <div className="mx-auto mb-16 max-w-3xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display mb-6 text-4xl font-bold text-white md:text-6xl"
        >
          Expertise Across <span className="text-gradient">Every Sector</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-white/70"
        >
          We deliver tailored digital solutions that address the unique
          regulatory, operational, and scaling challenges of your specific
          industry.
        </motion.p>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {industries.map((industry, index) => (
          <motion.div
            key={industry}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="glass-card flex items-center justify-center p-6 text-center transition-colors hover:bg-white/10"
          >
            <span className="font-medium text-white">{industry}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}