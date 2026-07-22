"use client";

import { motion } from "motion/react";

const stacks = [
  {
    name: "Frontend",
    items: [
      "React",
      "Next.js",
      "Vue.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    name: "Backend",
    items: [
      "Node.js",
      "Python",
      "Go",
      "Java",
      "GraphQL",
      "REST APIs",
    ],
  },
  {
    name: "Database",
    items: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Elasticsearch",
      "Supabase",
      "Firebase",
    ],
  },
  {
    name: "AI & Machine Learning",
    items: [
      "OpenAI",
      "TensorFlow",
      "PyTorch",
      "Hugging Face",
      "LangChain",
    ],
  },
  {
    name: "Cloud & DevOps",
    items: [
      "AWS",
      "Google Cloud",
      "Azure",
      "Docker",
      "Kubernetes",
      "GitHub Actions",
    ],
  },
  {
    name: "Mobile",
    items: [
      "React Native",
      "Flutter",
      "Swift",
      "Kotlin",
    ],
  },
];

export default function TechnologiesClient() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-dark py-32">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-20 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/10 blur-[180px]" />
      </div>

      <div className="container relative mx-auto max-w-7xl px-4">
        {/* Hero */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-20 max-w-4xl text-center"
        >
          <span className="mb-6 inline-flex rounded-full border border-primary/20 bg-primary/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-primary">
            Technologies We Use
          </span>

          <h1 className="font-display text-5xl font-bold leading-tight text-white md:text-7xl">
            Modern Technology
            <br />
            <span className="text-gradient">Built for the Future.</span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/70">
            We leverage modern frameworks, enterprise-grade infrastructure,
            cloud platforms, AI technologies, and scalable architectures to
            build secure, high-performance digital products that grow with your
            business.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {stacks.map((stack, index) => (
            <motion.div
              key={stack.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className="group"
            >
              <div className="glass-card relative h-full overflow-hidden rounded-3xl border border-white/10 p-8 transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10">
                {/* Hover Glow */}

                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative z-10">
                  <h2 className="mb-6 border-b border-white/10 pb-5 text-2xl font-bold text-white">
                    {stack.name}
                  </h2>

                  <ul className="space-y-4">
                    {stack.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 text-white/75 transition-colors duration-300 group-hover:text-white"
                      >
                        <div className="h-2 w-2 rounded-full bg-primary transition-transform duration-300 group-hover:scale-150" />

                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Statement */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-24 max-w-5xl"
        >
          <div className="glass-card rounded-3xl border border-white/10 p-10 text-center">
            <h2 className="font-display text-3xl font-bold text-white md:text-5xl">
              Technology is only the beginning.
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/70">
              Choosing the right technology stack is important—but choosing the
              right technology partner matters even more. At Tygon Solutions, we
              combine modern engineering, AI, cloud expertise, and business
              strategy to deliver scalable digital solutions that create lasting
              impact.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}