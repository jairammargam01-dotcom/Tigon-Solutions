import { NextResponse } from "next/server";

import { requireAdmin } from "@/lib/require-admin";
import { connectDB } from "@/lib/mongodb";
import Blog from "@/models/Blog";

interface RouteContext {
  params: Promise<{
    id: string;
  }>;
}

export async function GET(
  request: Request,
  { params }: RouteContext
) {
  try {
    const session = await requireAdmin();

    if (session instanceof NextResponse) {
      return session;
    }

    await connectDB();

    const { id } = await params;

    const blog = await Blog.findById(id).lean();

    if (!blog) {
      return NextResponse.json(
        {
          message: "Blog not found.",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json(blog);
  } catch (error) {
    console.error("GET BLOG ERROR:", error);

    return NextResponse.json(
      {
        message: "Failed to fetch blog.",
      },
      {
        status: 500,
      }
    );
  }
}

export async function PATCH(
  request: Request,
  { params }: RouteContext
) {
  try {
    const session = await requireAdmin();

    if (session instanceof NextResponse) {
      return session;
    }

    await connectDB();

    const { id } = await params;

    const body = await request.json();

    if (
      !body.title?.trim() ||
      !body.slug?.trim() ||
      !body.excerpt?.trim() ||
      !body.content?.trim() ||
      !body.category?.trim()
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

    const duplicateSlug = await Blog.findOne({
      slug: body.slug.trim().toLowerCase(),
      _id: { $ne: id },
    });

    if (duplicateSlug) {
      return NextResponse.json(
        {
          message:
            "Another blog already uses this slug.",
        },
        {
          status: 409,
        }
      );
    }

    const updatedBlog = await Blog.findByIdAndUpdate(
      id,
      {
        title: body.title.trim(),
        slug: body.slug.trim().toLowerCase(),
        excerpt: body.excerpt.trim(),
        content: body.content,
        coverImage: body.coverImage || "",
        category: body.category.trim(),
        tags: body.tags ?? [],
        featured: body.featured ?? false,
        published: body.published ?? false,
        seoTitle: body.seoTitle?.trim() || "",
        seoDescription:
          body.seoDescription?.trim() || "",
        author:
          body.author?.trim() ||
          "Tygon Solutions Editorial Team",
      },
      {
        returnDocument: "after",
        runValidators: true,
      }
    );

    if (!updatedBlog) {
      return NextResponse.json(
        {
          message: "Blog not found.",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json(updatedBlog);
  } catch (error) {
    console.error("UPDATE BLOG ERROR:", error);

    return NextResponse.json(
      {
        message: "Failed to update blog.",
      },
      {
        status: 500,
      }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: RouteContext
) {
  try {
    const session = await requireAdmin();

    if (session instanceof NextResponse) {
      return session;
    }

    await connectDB();

    const { id } = await params;

    const deletedBlog = await Blog.findByIdAndDelete(id);

    if (!deletedBlog) {
      return NextResponse.json(
        {
          message: "Blog not found.",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json({
      message: "Blog deleted successfully.",
    });
  } catch (error) {
    console.error("DELETE BLOG ERROR:", error);

    return NextResponse.json(
      {
        message: "Failed to delete blog.",
      },
      {
        status: 500,
      }
    );
  }
}