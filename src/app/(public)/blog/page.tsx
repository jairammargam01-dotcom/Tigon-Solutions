import type { Metadata } from "next";

import { connectDB } from "@/lib/mongodb";
import Blog from "@/models/Blog";

import BlogClient from "./BlogClient";
import type { BlogDocument } from "@/models/Blog";

type BlogWithId = BlogDocument & {
  _id: {
    toString(): string;
  };
  createdAt: Date;
  updatedAt: Date;
};

export const metadata: Metadata = {
  title: "Technology Blog | AI, Software & Digital Insights",

  description:
    "Explore expert articles, guides, and insights from Tygon Solutions covering artificial intelligence, software development, cloud computing, cybersecurity, digital marketing, DevOps, emerging technologies, and digital transformation.",

  keywords: [
    "Technology Blog",
    "AI Blog",
    "Artificial Intelligence",
    "Software Development",
    "Web Development",
    "Cloud Computing",
    "Cybersecurity",
    "Digital Marketing",
    "DevOps",
    "Business Technology",
    "Digital Transformation",
    "Technology Trends",
    "Programming",
    "Enterprise Software",
    "Software Development Blog",
  ],

  alternates: {
    canonical: "/blog",
  },

  openGraph: {
    title: "Technology Blog | AI, Software & Digital Insights",
    description:
      "Read expert insights on AI, software engineering, cloud computing, cybersecurity, digital marketing, and emerging technologies.",
    url: "/blog",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Technology Blog | AI, Software & Digital Insights",
    description:
      "Expert articles and practical insights on AI, software development, cloud technologies, cybersecurity, and digital innovation.",
  },
};

export default async function BlogPage() {
  await connectDB();

  const blogs = await Blog.find({
    published: true,
  })
    .sort({
      featured: -1,
      createdAt: -1,
    })
    .lean();

  const serializedBlogs = blogs.map((blog: BlogWithId) => ({
    _id: blog._id.toString(),
    title: blog.title,
    slug: blog.slug,
    excerpt: blog.excerpt,
    content: blog.content,
    coverImage: blog.coverImage,
    category: blog.category,
    tags: blog.tags ?? [],
    featured: blog.featured,
    published: blog.published,
    author: blog.author,
    seoTitle: blog.seoTitle,
    seoDescription: blog.seoDescription,
    readTime: blog.readTime,
    createdAt: blog.createdAt.toISOString(),
    updatedAt: blog.updatedAt.toISOString(),
  }));

  return <BlogClient blogs={serializedBlogs} />;
}