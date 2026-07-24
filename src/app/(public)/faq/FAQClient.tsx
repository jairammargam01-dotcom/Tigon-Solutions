"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What is your typical project timeline?",
    a: "Timelines vary depending on scope. A simple web presence might take 2–4 weeks, while a complex enterprise software solution or AI integration can take 3–6 months. We provide detailed timelines during the proposal phase.",
  },
  {
    q: "Do you offer post-launch support?",
    a: "Yes, we offer comprehensive post-launch support and maintenance packages, including uptime monitoring, security patching, and continuous iterative improvements.",
  },
  {
    q: "How does your pricing model work?",
    a: "We primarily work on fixed-price contracts for well-defined scopes, or time-and-materials for agile, evolving projects. We ensure total transparency regarding costs before any work begins.",
  },
  {
    q: "Are your team members in-house?",
    a: "We operate a hybrid model. We have core technical leadership in-house, supported by a highly vetted global network of specialists. This allows us to scale rapidly and provide niche expertise exactly when needed.",
  },
  {
    q: "What industries do you specialize in?",
    a: "While we are industry-agnostic, we have deep experience in Healthcare, Finance, E-commerce, Logistics, and SaaS. Our technology-first approach applies robust engineering principles to any vertical.",
  },
];

export default function FAQClient() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="pt-40 pb-20 container mx-auto px-4 max-w-3xl">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
          Frequently Asked <span className="text-gradient">Questions</span>
        </h1>

        <p className="text-lg text-white/70">
          Clear answers to common questions about our process, capabilities,
          and partnership model.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`glass-card overflow-hidden transition-all duration-300 ${
              openIndex === i ? "bg-white/10" : ""
            }`}
          >
            <button
              type="button"
              className="w-full p-6 text-left flex items-center justify-between"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <h3 className="text-lg font-bold text-white pr-8">
                {faq.q}
              </h3>

              <ChevronDown
                className={`shrink-0 w-5 h-5 text-white/70 transition-transform duration-300 ${
                  openIndex === i
                    ? "rotate-180 text-primary"
                    : ""
                }`}
              />
            </button>

            <div
              className={`px-6 transition-all duration-300 ease-in-out ${
                openIndex === i
                  ? "pb-6 max-h-96 opacity-100"
                  : "max-h-0 opacity-0 overflow-hidden"
              }`}
            >
              <p className="text-white/70 leading-relaxed">
                {faq.a}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}