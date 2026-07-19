import { notFound } from "next/navigation";
import type { Metadata } from "next";

import ArticleLayout from "@/components/ArticleLayout";
import { blogPosts } from "@/content/blogPosts";

import AiBusinessCosts from "@/content/articles/AiBusinessCosts";
import ReactVsNext from "@/content/articles/ReactVsNext";
import DigitalTransformation from "@/content/articles/DigitalTransformation";

const articleComponents = {
  AiBusinessCosts,
  ReactVsNext,
  DigitalTransformation,
};

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const post = blogPosts.find(
    (post) => post.slug === slug
  );

  if (!post) {
    return {
      title: "Article Not Found | Tygon Solutions",
    };
  }

  return {
    title: `${post.title} | Tygon Solutions`,
    description: post.excerpt,

    alternates: {
      canonical: `/blog/${post.slug}`,
    },

    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://tygon-solutions.vercel.app/blog/${post.slug}`,
      type: "article",
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogArticlePage({
  params,
}: PageProps) {
  const { slug } = await params;

  const post = blogPosts.find(
    (post) => post.slug === slug
  );

  if (!post) {
    notFound();
  }

  const Article =
    articleComponents[
      post.component as keyof typeof articleComponents
    ];

  if (!Article) {
    notFound();
  }

  return (
    <ArticleLayout
      slug={post.slug}
      title={post.title}
      description={post.excerpt}
      category={post.category}
      date={post.date}
      readTime={post.readTime}
      image={post.image}
    >
      <Article />
    </ArticleLayout>
  );
}