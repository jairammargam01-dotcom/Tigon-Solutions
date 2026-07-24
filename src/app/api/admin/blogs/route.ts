import { NextResponse } from "next/server";

import { requireAdmin } from "@/lib/require-admin";
import { connectDB } from "@/lib/mongodb";
import Blog from "@/models/Blog";

export async function GET() {
  try {
    const session = await requireAdmin();

    if (session instanceof NextResponse) {
      return session;
    }

    await connectDB();

    const blogs = await Blog.find()
      .sort({ createdAt: -1 })
      .lean();

    return NextResponse.json(blogs);
  } catch (error) {
    console.error("GET BLOGS ERROR:", error);

    return NextResponse.json(
      {
        message: "Failed to fetch blogs.",
      },
      {
        status: 500,
      }
    );
  }
}

export async function POST(request: Request) {
  try {
    const session = await requireAdmin();

    if (session instanceof NextResponse) {
      return session;
    }

    await connectDB();

    const body = await request.json();

    const {
      title,
      slug,
      excerpt,
      content,
      coverImage,
      category,
      tags,
      featured,
      published,
      seoTitle,
      seoDescription,
      author,
    } = body;

    if (
      !title?.trim() ||
      !slug?.trim() ||
      !excerpt?.trim() ||
      !content?.trim() ||
      !category?.trim()
    ) {
      return NextResponse.json(
        {
          message:
            "Title, slug, excerpt, content and category are required.",
        },
        {
          status: 400,
        }
      );
    }

    const existing = await Blog.findOne({
      slug: slug.trim().toLowerCase(),
    });

    if (existing) {
      return NextResponse.json(
        {
          message: "A blog with this slug already exists.",
        },
        {
          status: 409,
        }
      );
    }

    const blog = await Blog.create({
      title: title.trim(),
      slug: slug.trim().toLowerCase(),
      excerpt: excerpt.trim(),
      content,
      coverImage: coverImage || "",
      category: category.trim(),
      tags: tags ?? [],
      featured: featured ?? false,
      published: published ?? false,
      seoTitle: seoTitle?.trim() || "",
      seoDescription: seoDescription?.trim() || "",
      author:
        author?.trim() ||
        "Tygon Solutions Editorial Team",
    });

    return NextResponse.json(blog, {
      status: 201,
    });
  } catch (error) {
    console.error("CREATE BLOG ERROR:", error);

    return NextResponse.json(
      {
        message: "Failed to create blog.",
      },
      {
        status: 500,
      }
    );
  }
}