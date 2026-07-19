"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, CalendarDays, Clock } from "lucide-react";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
  component: string;
}

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="glass-card rounded-2xl overflow-hidden group h-full flex flex-col border border-white/5 hover:border-primary/30 transition-all duration-300"
    >
      {/* Image */}

      <Link
        href={`/blog/${post.slug}`}
        className="overflow-hidden block"
      >
        <Image
          src={post.image}
          alt={post.title}
          width={800}
          height={500}
          className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>

      {/* Content */}

      <div className="p-6 flex flex-col flex-1">
        <span className="inline-flex w-fit px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
          {post.category}
        </span>

        <Link href={`/blog/${post.slug}`}>
          <h2 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-primary transition-colors line-clamp-2">
            {post.title}
          </h2>
        </Link>

        <p className="text-white/60 leading-relaxed mb-6 flex-1 line-clamp-3">
          {post.excerpt}
        </p>

        {/* Meta */}

        <div className="flex items-center gap-5 text-sm text-white/40 mb-6">
          <div className="flex items-center gap-2">
            <CalendarDays className="w-4 h-4" />
            {post.date}
          </div>

          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            {post.readTime}
          </div>
        </div>

        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center text-primary font-semibold group-hover:text-white transition-colors"
        >
          Read Article

          <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.article>
  );
}