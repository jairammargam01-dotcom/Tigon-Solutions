import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { connectDB } from "@/lib/mongodb";
import Blog from "@/models/Blog";
import type { BlogDocument } from "@/models/Blog";

import ArticleLayout from "@/components/ArticleLayout";
import ArticleJsonLd from "@/components/seo/ArticleJsonLd";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import OrganizationJsonLd from "@/components/seo/OrganizationJsonLd";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

type BlogWithId = BlogDocument & {
  _id: {
    toString(): string;
  };
  createdAt: Date;
  updatedAt: Date;
};

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://tygon-solutions.vercel.app";

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  await connectDB();

  const blog = await Blog.findOne({
    slug,
    published: true,
  }).lean();

  if (!blog) {
    return {
      title: "Article Not Found | Tygon Solutions",
    };
  }

  const coverImage =
    blog.coverImage?.trim() ||
    "/images/blog-placeholder.jpg";

  const imageUrl = coverImage.startsWith("http")
    ? coverImage
    : `${baseUrl}${coverImage}`;

  return {
    title:
      blog.seoTitle || `${blog.title} | Tygon Solutions`,

    description:
      blog.seoDescription || blog.excerpt,

    alternates: {
      canonical: `/blog/${blog.slug}`,
    },

    openGraph: {
      title: blog.seoTitle || blog.title,
      description:
        blog.seoDescription || blog.excerpt,
      url: `${baseUrl}/blog/${blog.slug}`,
      siteName: "Tygon Solutions",
      type: "article",
      publishedTime: blog.createdAt,
      modifiedTime: blog.updatedAt,
      authors: [blog.author],
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: blog.seoTitle || blog.title,
      description:
        blog.seoDescription || blog.excerpt,
      images: [imageUrl],
    },
  };
}

export default async function BlogArticlePage({
  params,
}: PageProps) {
  const { slug } = await params;

  await connectDB();

  const currentBlog = await Blog.findOne({
    slug,
    published: true,
  }).lean();

  if (!currentBlog) {
    notFound();
  }

  const relatedBlogs = await Blog.find({
    published: true,
    slug: { $ne: slug },
    category: currentBlog.category,
  })
    .sort({ createdAt: -1 })
    .limit(3)
    .lean();

  const allBlogs = await Blog.find({
    published: true,
  })
    .sort({ createdAt: -1 })
    .lean();

  const currentIndex = allBlogs.findIndex(
    (item) => item.slug === slug
  );

  const previousBlog =
    currentIndex < allBlogs.length - 1
      ? allBlogs[currentIndex + 1]
      : null;

  const nextBlog =
    currentIndex > 0
      ? allBlogs[currentIndex - 1]
      : null;

  const serialize = (blog: BlogWithId) => ({
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
  });

  const articleUrl = `${baseUrl}/blog/${currentBlog.slug}`;

  const articleImage =
    currentBlog.coverImage?.trim() ||
    "/images/blog-placeholder.jpg";

  return (
    <>
      <ArticleJsonLd
        title={
          currentBlog.seoTitle ||
          currentBlog.title
        }
        description={
          currentBlog.seoDescription ||
          currentBlog.excerpt
        }
        url={articleUrl}
        image={articleImage}
        publishedAt={currentBlog.createdAt.toISOString()}
        modifiedAt={currentBlog.updatedAt.toISOString()}
        author={currentBlog.author}
        category={currentBlog.category}
        tags={currentBlog.tags ?? []}
      />

      <BreadcrumbJsonLd
        title={currentBlog.title}
        url={articleUrl}
      />

      <OrganizationJsonLd />

      <ArticleLayout
        blog={serialize(currentBlog)}
        relatedBlogs={relatedBlogs.map(
          serialize
        )}
        previousBlog={
          previousBlog
            ? serialize(previousBlog)
            : null
        }
        nextBlog={
          nextBlog
            ? serialize(nextBlog)
            : null
        }
      />
    </>
  );
}