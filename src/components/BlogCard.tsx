"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  CalendarDays,
  Clock,
} from "lucide-react";

import type { Blog } from "@/types/blog";

interface BlogCardProps {
  blog: Blog;
}

export default function BlogCard({
  blog,
}: BlogCardProps) {
  const formattedDate =
    new Intl.DateTimeFormat("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }).format(new Date(blog.createdAt));

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="glass-card group flex h-full flex-col overflow-hidden rounded-2xl border border-white/5 transition-all duration-300 hover:border-primary/30"
    >
      <Link
        href={`/blog/${blog.slug}`}
        className="block overflow-hidden"
      >
        <Image
          src={
            blog.coverImage && blog.coverImage.trim() !== ""
              ? blog.coverImage
              : "/images/blog-placeholder.jpg"
          }
          alt={blog.title}
          width={800}
          height={500}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <span className="mb-4 inline-flex w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
          {blog.category}
        </span>

        <Link href={`/blog/${blog.slug}`}>
          <h2 className="mb-3 line-clamp-2 text-2xl font-display font-bold text-white transition-colors group-hover:text-primary">
            {blog.title}
          </h2>
        </Link>

        <p className="mb-6 line-clamp-3 flex-1 leading-relaxed text-white/60">
          {blog.excerpt}
        </p>

        <div className="mb-6 flex items-center gap-5 text-sm text-white/40">
          <div className="flex items-center gap-2">
            <CalendarDays className="h-4 w-4" />
            {formattedDate}
          </div>

          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            {blog.readTime}
          </div>
        </div>

        <Link
          href={`/blog/${blog.slug}`}
          className="inline-flex items-center font-semibold text-primary transition-colors group-hover:text-white"
        >
          Read Article

          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.article>
  );
}