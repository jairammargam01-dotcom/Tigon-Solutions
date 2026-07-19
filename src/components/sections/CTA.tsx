"use client";

import Link from "next/link";
import { motion } from "motion/react";

import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="relative z-10 border-t border-white/10 py-32">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-primary/5" />

      <div className="container relative mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card mx-auto max-w-4xl p-12 text-center md:p-20"
        >
          <h2 className="mb-6 font-display text-3xl font-bold text-white md:text-5xl">
            Ready to transform your business?
          </h2>

          <p className="mx-auto mb-10 max-w-2xl text-lg text-white/70">
            Tell us about your project. Our experts will get back to you
            within 24 hours with a comprehensive technical consultation.
          </p>

          <Button
            asChild
            variant="gradient"
            size="lg"
            className="px-10 text-lg"
          >
            <Link href="/contact">
              Let’s Discuss Your Project
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}