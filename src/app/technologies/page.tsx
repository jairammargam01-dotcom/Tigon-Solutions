import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technologies",
  description:
    "Explore the modern technology stack used by Tygon Solutions, including frontend, backend, AI, cloud, databases, DevOps, and mobile technologies.",
  alternates: {
    canonical: "/technologies",
  },
};

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
    name: "AI & ML",
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

export default function TechnologiesPage() {
  return (
    <section className="pt-40 pb-20 container mx-auto px-4 max-w-5xl">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
          Our Technology <span className="text-gradient">Stack</span>
        </h1>

        <p className="text-lg text-white/70">
          We leverage modern, enterprise-grade technologies to build secure,
          scalable, and high-performance solutions.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stacks.map((stack) => (
          <div key={stack.name} className="glass-card p-8">
            <h3 className="text-xl font-bold text-white mb-6 pb-4 border-b border-white/10">
              {stack.name}
            </h3>

            <ul className="space-y-3">
              {stack.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-white/80"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}