"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-32 pb-20">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute left-[10%] top-[20%] h-[500px] w-[500px] animate-blob rounded-full bg-primary/20 blur-[120px]" />

        <div className="animation-delay-2000 absolute right-[10%] top-[30%] h-[400px] w-[400px] animate-blob rounded-full bg-secondary/20 blur-[100px]" />

        <div className="animation-delay-4000 absolute bottom-[10%] left-[30%] h-[600px] w-[600px] animate-blob rounded-full bg-accent/20 blur-[150px]" />

        <div className="absolute inset-0 bg-[url(’data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxyZWN0IHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0ibm9uZSI+PC9yZWN0Pgo8Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIj48L2NpcmNsZT4KPC9zdmc+’)] opacity-50" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-card mb-8 inline-flex items-center gap-2 rounded-full px-4 py-2"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-success" />

            <span className="text-sm font-medium text-white/90">
              Innovating the Future of Business
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.1,
            }}
            className="mb-6 font-display text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl"
          >
            Transforming Ideas Into
            <br className="hidden md:block" />
            <span className="text-gradient">
              Scalable Digital Solutions.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.2,
            }}
            className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl"
          >
            We connect businesses with expert specialists and deliver complete
            solutions from concept to deployment.

            <span className="block mt-2 font-semibold text-white">
              One Partner. Unlimited Digital Solutions.
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.3,
            }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button
              asChild
              variant="gradient"
              size="lg"
              className="w-full px-8 text-lg sm:w-auto"
            >
              <Link href="/contact">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full bg-white/5 px-8 text-lg backdrop-blur-md sm:w-auto"
            >
              <Link href="/services">
                Explore Services
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}