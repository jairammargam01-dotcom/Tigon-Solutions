"use client";

import { useMemo, useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  ArrowRight,
  Calendar,
  Clock,
  Sparkles,
} from "lucide-react";

import { blogPosts } from "@/content/blogPosts";
import BlogCard from "@/components/BlogCard";

const categories = [
  "All",
  ...Array.from(new Set(blogPosts.map((post) => post.category))),
];

// NOTE:
// Next.js doesn’t allow exporting metadata from a Client Component.
// We’ll move metadata to a separate layout in a later step if needed.

export default function BlogPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const featuredPost =
    blogPosts.find((post) => post.featured) ?? blogPosts[0];

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory =
        selectedCategory === "All" ||
        post.category === selectedCategory;

      const query = search.toLowerCase();

      const matchesSearch =
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [search, selectedCategory]);

  return (
    <section className="pt-40 pb-20">
      <div className="container mx-auto px-4">
        {/* Hero */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <Sparkles className="w-4 h-4 text-primary" />

            <span className="text-sm text-white/80">
              Knowledge • Insights • Engineering
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
            Tygon <span className="text-gradient">Blog</span>
          </h1>

          <p className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
            Practical articles about Artificial Intelligence,
            Software Development, Cloud Computing,
            Digital Transformation, Marketing,
            Cyber Security and Business Technology.
          </p>
        </motion.div>

        {/* Search */}

        <div className="max-w-3xl mx-auto mb-10">
          <div className="relative">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />

            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-14 pr-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 outline-none focus:border-primary"
            />
          </div>
        </div>

        {/* Categories */}

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-primary text-white"
                  : "bg-white/5 text-white/70 hover:bg-white/10"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card overflow-hidden rounded-3xl mb-24"
        >
          <div className="grid lg:grid-cols-2">
            <div className="h-80 lg:h-full overflow-hidden">
              <Image
                src={featuredPost.image}
                alt={featuredPost.title}
                width={1200}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-10 lg:p-14 flex flex-col justify-center">
              <span className="inline-flex w-fit px-4 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6">
                Featured Article
              </span>

              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
                {featuredPost.title}
              </h2>

              <p className="text-white/70 leading-relaxed mb-8">
                {featuredPost.excerpt}
              </p>

              <div className="flex flex-wrap gap-6 text-sm text-white/50 mb-10">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {featuredPost.date}
                </div>

                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {featuredPost.readTime}
                </div>
              </div>

              <Link
                href={`/blog/${featuredPost.slug}`}
                className="inline-flex items-center text-primary hover:text-white transition-colors font-medium"
              >
                Read Featured Article

                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Latest */}

        <div className="mb-12">
          <h2 className="text-4xl font-display font-bold text-white mb-4">
            Latest Articles
          </h2>

          <p className="text-white/60">
            Browse our latest insights, engineering guides and
            technology articles.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <BlogCard
              key={post.slug}
              post={post}
            />
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-24">
            <h3 className="text-2xl text-white mb-3">
              No articles found
            </h3>

            <p className="text-white/60">
              Try another keyword or category.
            </p>
          </div>
        )}

        {/* CTA */}

        <section className="mt-28">
          <div className="glass-card rounded-3xl p-10 md:p-16 text-center">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              Need Expert Help With Your Project?
            </h2>

            <p className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed mb-10">
              Whether you’re planning an AI solution,
              custom software, cloud migration,
              mobile application, or digital marketing campaign,
              our experts are ready to help you build it.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-primary px-8 py-4 font-semibold text-white hover:opacity-90 transition"
              >
                Start Your Project

                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white hover:bg-white/10 transition"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}