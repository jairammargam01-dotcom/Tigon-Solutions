"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  ArrowLeft,
  CalendarDays,
  Clock,
  ChevronDown,
  Link as LinkIcon,
} from "lucide-react";

import {
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

import BlogCard from "@/components/BlogCard";
import type { Blog } from "@/types/blog";

interface FAQItem {
  question: string;
  answer: string;
}

interface ArticleLayoutProps {
  blog: Blog;
  relatedBlogs: Blog[];
  previousBlog?: Blog | null;
  nextBlog?: Blog | null;
  faq?: FAQItem[];
}

export default function ArticleLayout({
  blog,
  relatedBlogs,
  previousBlog,
  nextBlog,
  faq = [],
}: ArticleLayoutProps) {
  const [progress, setProgress] = useState(0);
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  useEffect(() => {
    const handleScroll = () => {
      const total =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const current = window.scrollY;

      const percentage =
        total <= 0 ? 0 : (current / total) * 100;

      setProgress(percentage);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  const formattedDate = new Intl.DateTimeFormat(
    "en-IN",
    {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }
  ).format(new Date(blog.createdAt));

  const articleUrl = `https://tygon-solutions.vercel.app/blog/${blog.slug}`;

  const shareLinkedIn =
    `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      articleUrl
    )}`;

  const shareFacebook =
    `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      articleUrl
    )}`;

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(articleUrl);
      alert("Article URL copied.");
    } catch {
      alert("Unable to copy the URL.");
    }
  }

  return (
    <>
      {/* Reading Progress */}

      <div className="fixed left-0 top-0 z-[999] h-1 w-full bg-white/5">
        <div
          className="h-full bg-primary transition-all duration-150"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>

      <section className="pb-24 pt-40">
        <div className="container mx-auto max-w-6xl px-4">

          {/* Breadcrumb */}

          <nav className="mb-8 flex flex-wrap items-center gap-2 text-sm text-white/50">
            <Link
              href="/"
              className="hover:text-primary"
            >
              Home
            </Link>

            <span>/</span>

            <Link
              href="/blog"
              className="hover:text-primary"
            >
              Blog
            </Link>

            <span>/</span>

            <span className="text-white">
              {blog.title}
            </span>
          </nav>

          {/* Back */}

          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-2 text-primary transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

          {/* Category */}

          <span className="mb-6 inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            {blog.category}
          </span>

          {/* Title */}

          <h1 className="mb-6 font-display text-5xl font-bold leading-tight text-white lg:text-6xl">
            {blog.title}
          </h1>

          {/* Description */}

          <p className="mb-10 max-w-4xl text-xl leading-relaxed text-white/60">
            {blog.excerpt}
          </p>

          {/* Meta */}

          <div className="mb-10 flex flex-wrap items-center gap-8 text-sm text-white/50">
            <div className="flex items-center gap-2">
              <CalendarDays className="h-4 w-4" />
              {formattedDate}
            </div>

            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {blog.readTime}
            </div>

            <div>
              Tygon Solutions Editorial Team
            </div>
          </div>

          {/* Share */}

          <div className="mb-12 flex flex-wrap gap-3">
            <button
              onClick={copyLink}
              className="glass-card flex items-center gap-2 rounded-xl px-4 py-2 hover:bg-white/10"
            >
              <LinkIcon className="h-4 w-4" />
              Copy Link
            </button>

            <a
              href={shareLinkedIn}
              target="_blank"
              rel="noreferrer"
              className="glass-card flex items-center gap-2 rounded-xl px-4 py-2 hover:bg-white/10"
            >
              <FaLinkedinIn className="h-4 w-4" />
              LinkedIn
            </a>

            <a
              href={shareFacebook}
              target="_blank"
              rel="noreferrer"
              className="glass-card flex items-center gap-2 rounded-xl px-4 py-2 hover:bg-white/10"
            >
              <FaFacebookF className="h-4 w-4" />
              Facebook
            </a>
          </div>

          {/* Hero */}

          <Image
            src={
              blog.coverImage && blog.coverImage.trim() !== ""
                ? blog.coverImage
                : "/images/blog-placeholder.jpg"
            }
            alt={blog.title}
            width={1400}
            height={800}
            priority
            sizes="100vw"
            className="mb-16 h-[450px] w-full rounded-3xl object-cover"
          />

          {/* Author */}

          <div className="glass-card mb-16 rounded-3xl p-8">
            <h3 className="mb-3 text-2xl font-bold text-white">
              About the Author
            </h3>

            <p className="leading-relaxed text-white/70">
              Tygon Solutions Editorial Team publishes
              practical insights on Artificial Intelligence,
              Software Engineering, Cloud Computing,
              Digital Marketing, Enterprise Technology,
              Cyber Security and Digital Transformation.
              Every article is reviewed by experienced
              technology professionals before publication.
            </p>
          </div>

          {/* Article */}

          <article
            className="
              prose
              prose-invert
              prose-lg
              lg:prose-xl
              max-w-none
              prose-headings:font-display
              prose-headings:text-white
              prose-headings:font-bold
              prose-h2:mt-14
              prose-h2:mb-6
              prose-h2:border-b
              prose-h2:border-white/10
              prose-h2:pb-3
              prose-p:text-white/80
              prose-p:leading-8
              prose-a:text-primary
              prose-a:no-underline
              prose-strong:text-white
              prose-li:text-white/80
              prose-img:rounded-2xl
              prose-img:shadow-xl
            "
            dangerouslySetInnerHTML={{
              __html: blog.content,
            }}
          />
                    {/* FAQ */}

          {faq.length > 0 && (
            <section className="mt-24">
              <h2 className="mb-10 font-display text-4xl font-bold text-white">
                Frequently Asked Questions
              </h2>

              <div className="space-y-5">
                {faq.map((item, index) => {
                  const isOpen = openFAQ === index;

                  return (
                    <div
                      key={index}
                      className="glass-card overflow-hidden rounded-2xl"
                    >
                      <button
                        onClick={() =>
                          setOpenFAQ(
                            isOpen ? null : index
                          )
                        }
                        className="flex w-full items-center justify-between p-6 text-left"
                      >
                        <span className="text-lg font-semibold text-white">
                          {item.question}
                        </span>

                        <ChevronDown
                          className={`h-5 w-5 transition-transform ${
                            isOpen
                              ? "rotate-180"
                              : ""
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div className="px-6 pb-6">
                          <p className="leading-relaxed text-white/70">
                            {item.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* Previous / Next */}

          {(previousBlog || nextBlog) && (
            <section className="mt-24">
              <div className="grid gap-6 md:grid-cols-2">

                {previousBlog && (
                  <Link
                    href={`/blog/${previousBlog.slug}`}
                    className="glass-card rounded-2xl border border-white/10 p-6 transition-all hover:border-primary"
                  >
                    <p className="mb-2 text-sm text-white/40">
                      Previous Article
                    </p>

                    <h3 className="text-xl font-bold text-white">
                      {previousBlog.title}
                    </h3>
                  </Link>
                )}

                {nextBlog && (
                  <Link
                    href={`/blog/${nextBlog.slug}`}
                    className="glass-card rounded-2xl border border-white/10 p-6 transition-all hover:border-primary"
                  >
                    <p className="mb-2 text-sm text-white/40">
                      Next Article
                    </p>

                    <h3 className="text-xl font-bold text-white">
                      {nextBlog.title}
                    </h3>
                  </Link>
                )}

              </div>
            </section>
          )}

          {/* Related Articles */}

          {relatedBlogs.length > 0 && (
            <section className="mt-28">
              <h2 className="mb-10 font-display text-4xl font-bold text-white">
                Related Articles
              </h2>

              <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                {relatedBlogs.map((relatedBlog) => (
                  <BlogCard
                    key={relatedBlog._id}
                    blog={relatedBlog}
                  />
                ))}
              </div>
            </section>
          )}

          {/* CTA */}

          <section className="mt-28">
            <div className="glass-card rounded-3xl p-10 text-center md:p-16">
              <h2 className="mb-6 font-display text-4xl font-bold text-white">
                Ready to Build Your Next Digital Product?
              </h2>

              <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-white/70">
                Whether you’re planning an AI solution,
                business website, enterprise software,
                mobile application, cloud platform, or
                complete digital transformation, our team
                is ready to help you build secure,
                scalable and future-ready solutions.
              </p>

              <div className="flex flex-col justify-center gap-4 sm:flex-row">

                <Link
                  href="/contact"
                  className="rounded-xl bg-primary px-8 py-4 font-semibold text-white transition hover:opacity-90"
                >
                  Schedule a Consultation
                </Link>

                <Link
                  href="/services"
                  className="rounded-xl border border-white/20 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
                >
                  Explore Services
                </Link>

              </div>
            </div>
          </section>

        </div>
      </section>
    </>
  );
}