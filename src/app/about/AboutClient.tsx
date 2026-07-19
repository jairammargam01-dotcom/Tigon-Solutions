"use client";

import { motion } from "motion/react";
import { Target, Lightbulb, ShieldCheck, Users2 } from "lucide-react";

export default function AboutClient() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-40 pb-20">
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass-card mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2"
            >
              <span className="text-sm font-medium text-white/90">
                Our Story
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display mb-6 text-4xl leading-tight font-bold text-white md:text-6xl lg:text-7xl"
            >
              We don't just build products.
              <br />
              <span className="text-gradient">
                We solve business problems.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl"
            >
              Tygon Solutions was founded on a simple principle: technology
              should empower, not complicate. We serve as the ultimate bridge
              between complex business challenges and scalable digital
              realities.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card border-t-primary border-t-4 p-10 md:p-12"
            >
              <Target className="mb-6 h-12 w-12 text-primary" />

              <h2 className="font-display mb-4 text-3xl font-bold text-white">
                Our Mission
              </h2>

              <p className="text-lg leading-relaxed text-white/70">
                To equip businesses of all sizes with enterprise-grade
                technology, elite talent, and innovative strategies, enabling
                them to scale rapidly and operate efficiently in a digital-first
                world.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card border-t-secondary border-t-4 p-10 md:p-12"
            >
              <Lightbulb className="mb-6 h-12 w-12 text-secondary" />

              <h2 className="font-display mb-4 text-3xl font-bold text-white">
                Our Vision
              </h2>

              <p className="text-lg leading-relaxed text-white/70">
                To become the world's most trusted single-source partner for
                digital transformation, where any idea can be architected,
                built, and scaled under one roof.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Network & Approach */}
      <section className="relative z-10 border-y border-white/5 bg-white/[0.02] py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="font-display mb-6 text-3xl font-bold text-white md:text-5xl">
              The Power of the Network
            </h2>

            <p className="text-lg text-white/70">
              Unlike traditional agencies limited by their in-house roster,
              Tygon Solutions operates a dynamic, vetted network of global
              experts.
            </p>
          </div>

          <div className="grid gap-8 text-center md:grid-cols-3">
            <div className="p-8">
              <Users2 className="text-accent mx-auto mb-4 h-10 w-10" />

              <h3 className="mb-3 text-xl font-bold text-white">
                Expert Assembly
              </h3>

              <p className="text-white/60">
                We curate custom teams specifically tailored to the unique
                technical requirements of your project.
              </p>
            </div>

            <div className="p-8">
              <ShieldCheck className="text-success mx-auto mb-4 h-10 w-10" />

              <h3 className="mb-3 text-xl font-bold text-white">
                Vetted Quality
              </h3>

              <p className="text-white/60">
                Every engineer, designer, and consultant in our network
                undergoes rigorous technical and professional vetting.
              </p>
            </div>

            <div className="p-8">
              <Target className="mx-auto mb-4 h-10 w-10 text-primary" />

              <h3 className="mb-3 text-xl font-bold text-white">
                Single Point of Contact
              </h3>

              <p className="text-white/60">
                Despite the vast network, you deal with a dedicated project
                manager who ensures seamless delivery.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}