export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;

  // Name of the article component
  component: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "how-ai-reduces-business-costs",
    title: "How AI Is Reducing Business Costs Across Every Industry",
    excerpt:
      "Discover how Artificial Intelligence is helping businesses reduce operational costs, automate repetitive work, and improve productivity.",
    category: "Artificial Intelligence",
    date: "July 15, 2026",
    readTime: "8 min read",
    image: "/blog/ai-business-costs.webp",
    featured: true,
    component: "AiBusinessCosts",
  },

  {
    slug: "react-vs-nextjs-business-websites",
    title: "React vs Next.js: Which Is Better for Modern Business Websites?",
    excerpt:
      "Compare React and Next.js for SEO, performance, scalability, and developer experience to determine which technology fits your business.",
    category: "Web Development",
    date: "July 15, 2026",
    readTime: "9 min read",
    image: "/blog/react-vs-next.webp",
    component: "ReactVsNext",
  },

  {
    slug: "digital-transformation-business-guide",
    title: "Digital Transformation: A Complete Guide for Modern Businesses",
    excerpt:
      "Learn how digital transformation helps companies improve efficiency, customer experience, automation, and long-term business growth.",
    category: "Digital Strategy",
    date: "July 15, 2026",
    readTime: "10 min read",
    image: "/blog/digital-transformation.webp",
    component: "DigitalTransformation",
  },
];