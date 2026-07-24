"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  Home,
  Sparkles,
  FolderOpen,
  MessageCircle,
} from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      {/* Background */}

      <div className="absolute inset-0 -z-30 bg-background" />

      {/* Grid */}

      <div
        className="absolute inset-0 -z-20 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
        }}
      />

      {/* Gradient Glow */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-32 -z-10 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-primary/15 blur-[180px]"
      />

      {/* Floating Orb */}

      <motion.div
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -40, 30, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-20 top-40 h-56 w-56 rounded-full bg-cyan-500/10 blur-[100px]"
      />

      <motion.div
        animate={{
          x: [0, -60, 20, 0],
          y: [0, 30, -50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-24 bottom-32 h-72 w-72 rounded-full bg-violet-500/10 blur-[120px]"
      />

      {/* Huge Background 404 */}

      <motion.h1
        initial={{
          opacity: 0,
          scale: 0.95,
        }}
        animate={{
          opacity: [1, 0.92, 1],
          scale: 1,
        }}
        transition={{
          opacity: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          },
          scale: {
            duration: 1,
          },
        }}
        className="
          pointer-events-none
          absolute
          left-1/2
          top-24
          -translate-x-1/2
          select-none
          font-display
          text-[220px]
          font-black
          leading-none
          tracking-[-0.08em]
          text-white/[0.03]
          md:text-[420px]
        "
      >
        404
      </motion.h1>

      {/* Main Hero */}

      <section className="relative z-20 flex justify-center px-6 pt-44 pb-28">

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className="w-full max-w-5xl"
        >

          <div className="text-center">

            <div className="mb-6 inline-flex rounded-full border border-primary/20 bg-primary/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-primary">
              Error 404
            </div>

            <h2 className="font-display text-5xl font-bold leading-tight text-white md:text-7xl">

              Lost in the

              <br />

              <span className="text-gradient">
                Digital Universe
              </span>

            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/65">

              The page you’re looking for doesn’t exist,
              may have been moved,
              or the URL is incorrect.

              <br />

              Let’s get you back on track.

            </p>

            {/* CTA */}

            <div className="mt-12 flex flex-wrap justify-center gap-5">

              <Link
                href="/"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  rounded-2xl
                  bg-primary
                  px-8
                  py-4
                  font-semibold
                  text-white
                  shadow-lg
                  shadow-primary/20
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:scale-[1.03]
                  hover:bg-primary/90
                  hover:shadow-xl
                  hover:shadow-primary/40
                "
              >
                <Home className="h-5 w-5 transition-transform group-hover:-translate-x-1" />

                Back Home
              </Link>

              <Link
                href="/services"
                className="
                  inline-flex
                  items-center
                  gap-3
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  px-8
                  py-4
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-primary/40
                  hover:bg-primary/5
                  hover:shadow-lg
                  hover:shadow-primary/10
                "
              >
                Explore Services

                <ArrowRight className="h-5 w-5" />
              </Link>

            </div>
                        {/* Quick Navigation */}

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.2,
                duration: 0.7,
              }}
              className="mx-auto mt-24 max-w-4xl"
            >
              <div className="glass-card rounded-3xl p-8 md:p-10">
                <p className="mb-8 text-center text-sm font-semibold uppercase tracking-[0.35em] text-white/50">
                  Explore Tygon Solutions
                </p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  className="grid gap-5 md:grid-cols-3"
                >

                  <Link
                    href="/services"
                    className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-primary/40 hover:bg-primary/5 hover:shadow-xl hover:shadow-primary/10"
                  >
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                      <Sparkles className="h-7 w-7" />
                    </div>

                    <h3 className="text-lg font-semibold text-white">
                      Services
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-white/60">
                      Discover AI, software, cloud, automation and digital
                      solutions.
                    </p>
                  </Link>

                  <Link
                    href="/portfolio"
                    className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:bg-primary/5"
                  >
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                      <FolderOpen className="h-7 w-7" />
                    </div>

                    <h3 className="text-lg font-semibold text-white">
                      Portfolio
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-white/60">
                      Explore projects we’ve delivered for startups and
                      enterprises.
                    </p>
                  </Link>

                  <Link
                    href="/contact"
                    className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:bg-primary/5"
                  >
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                      <MessageCircle className="h-7 w-7" />
                    </div>

                    <h3 className="text-lg font-semibold text-white">
                      Contact
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-white/60">
                      Need help finding something? Our team is here to assist
                      you.
                    </p>
                  </Link>

                </motion.div>

                <div className="mt-10 border-t border-white/10 pt-8">
                  <div className="flex flex-wrap justify-center gap-4 text-sm">

                    {[
                      ["About", "/about"],
                      ["Process", "/process"],
                      ["Careers", "/careers"],
                      ["Blog", "/blog"],
                      ["FAQ", "/faq"],
                    ].map(([label, href]) => (
                      <Link
                        key={label}
                        href={href}
                        className="rounded-full border border-white/10 px-5 py-2 text-white/60 transition-all duration-300 hover:border-primary/40 hover:bg-primary/10 hover:text-white"
                      >
                        {label}
                      </Link>
                    ))}

                  </div>
                </div>
              </div>
            </motion.div>

          </div>

        </motion.div>

      </section>

    </main>
  );
}