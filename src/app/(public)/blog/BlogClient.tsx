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

import type { Blog } from "@/types/blog";
import BlogCard from "@/components/BlogCard";

interface BlogClientProps {
  blogs: Blog[];
}

export default function BlogClient({
  blogs,
}: BlogClientProps) {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const categories = useMemo(
    () => [
      "All",
      ...Array.from(
        new Set(blogs.map((blog) => blog.category))
      ),
    ],
    [blogs]
  );

  const featuredPost =
    blogs.find((blog) => blog.featured) ??
    blogs[0];

  const filteredBlogs = useMemo(() => {
    const query = search.trim().toLowerCase();

    return blogs.filter((blog) => {
      const matchesCategory =
        selectedCategory === "All" ||
        blog.category === selectedCategory;

      const matchesSearch =
        blog.title
          .toLowerCase()
          .includes(query) ||
        blog.excerpt
          .toLowerCase()
          .includes(query) ||
        blog.category
          .toLowerCase()
          .includes(query);

      return (
        matchesCategory &&
        matchesSearch
      );
    });
  }, [
    blogs,
    search,
    selectedCategory,
  ]);

  return (
    <section className="pt-40 pb-20">
      <div className="container mx-auto px-4">

        {/* Hero */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto mb-16 max-w-4xl text-center"
        >
          <div className="glass-card mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2">
            <Sparkles className="h-4 w-4 text-primary" />

            <span className="text-sm text-white/80">
              Knowledge • Insights • Engineering
            </span>
          </div>

          <h1 className="mb-6 text-5xl font-display font-bold text-white md:text-7xl">
            Tygon{" "}
            <span className="text-gradient">
              Blog
            </span>
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-white/70">
            Practical articles about Artificial
            Intelligence, Software Development,
            Cloud Computing, Digital
            Transformation, Marketing,
            Cybersecurity and Business
            Technology.
          </p>
        </motion.div>

        {/* Search */}

        <div className="mx-auto mb-10 max-w-3xl">
          <div className="relative">
            <Search className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-white/40" />

            <input
              id="search"
              name="search"
              type="text"
              autoComplete="off"
              placeholder="Search articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-white/5 py-4 pl-14 pr-5 text-white placeholder:text-white/40 outline-none focus:border-primary"
            />
          </div>
        </div>

        {/* Categories */}

        <div className="mb-16 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() =>
                setSelectedCategory(category)
              }
              className={`rounded-full px-5 py-2 transition-all ${
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

        {featuredPost && (
          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            className="glass-card mb-24 overflow-hidden rounded-3xl"
          >
            <div className="grid lg:grid-cols-2">

              <div className="h-80 overflow-hidden lg:h-full">
                <Image
                  src={
                    featuredPost.coverImage &&
                    featuredPost.coverImage.trim() !== ""
                      ? featuredPost.coverImage
                      : "/images/blog-placeholder.jpg"
                  }
                  alt={featuredPost.title}
                  width={1200}
                  height={800}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-col justify-center p-10 lg:p-14">

                <span className="mb-6 inline-flex w-fit rounded-full bg-primary/20 px-4 py-1 text-sm font-medium text-primary">
                  Featured Article
                </span>

                <h2 className="mb-6 text-3xl font-display font-bold leading-tight text-white md:text-5xl">
                  {featuredPost.title}
                </h2>

                <p className="mb-8 leading-relaxed text-white/70">
                  {featuredPost.excerpt}
                </p>

                <div className="mb-10 flex flex-wrap gap-6 text-sm text-white/50">

                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {new Intl.DateTimeFormat(
                      "en-IN",
                      {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      }
                    ).format(
                      new Date(
                        featuredPost.createdAt
                      )
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {featuredPost.readTime}
                  </div>

                </div>

                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="inline-flex items-center font-medium text-primary transition-colors hover:text-white"
                >
                  Read Featured Article

                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>

              </div>

            </div>
          </motion.div>
        )}

        {/* Latest */}

        <div className="mb-12">
          <h2 className="mb-4 text-4xl font-display font-bold text-white">
            Latest Articles
          </h2>

          <p className="text-white/60">
            Browse our latest insights,
            engineering guides and
            technology articles.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {filteredBlogs.map((blog) => (
            <BlogCard
              key={blog._id}
              blog={blog}
            />
          ))}
        </div>

        {filteredBlogs.length === 0 && (
          <div className="py-24 text-center">
            <h3 className="mb-3 text-2xl text-white">
              No articles found
            </h3>

            <p className="text-white/60">
              Try another keyword or
              category.
            </p>
          </div>
        )}

        {/* CTA */}

        <section className="mt-28">
          <div className="glass-card rounded-3xl p-10 text-center md:p-16">

            <h2 className="mb-6 text-3xl font-display font-bold text-white md:text-5xl">
              Need Expert Help With Your
              Project?
            </h2>

            <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-white/70">
              Whether you’re planning an AI
              solution, custom software,
              cloud migration, mobile
              application, or digital
              marketing campaign, our experts
              are ready to help.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-primary px-8 py-4 font-semibold text-white transition hover:opacity-90"
              >
                Start Your Project

                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
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