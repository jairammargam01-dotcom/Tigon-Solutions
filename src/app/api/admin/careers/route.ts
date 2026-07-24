import { NextRequest, NextResponse } from "next/server";

import { requireAdmin } from "@/lib/require-admin";
import { connectDB } from "@/lib/mongodb";
import { careerSchema } from "@/lib/validation";
import Career from "@/models/Career";

export async function GET() {
  try {
    const session = await requireAdmin();

    if (session instanceof NextResponse) {
      return session;
    }

    await connectDB();

    const careers = await Career.find()
      .sort({
        displayOrder: 1,
        createdAt: -1,
      })
      .lean();

    return NextResponse.json(careers);
  } catch (error) {
    console.error("GET CAREERS ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch careers.",
      },
      {
        status: 500,
      }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await requireAdmin();

    if (session instanceof NextResponse) {
      return session;
    }

    await connectDB();

    const body = await request.json();

    const parsed = careerSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          message: parsed.error.issues[0]?.message,
        },
        {
          status: 400,
        }
      );
    }

    const existing = await Career.findOne({
      slug: parsed.data.slug,
    });

    if (existing) {
      return NextResponse.json(
        {
          success: false,
          message: "A job with this slug already exists.",
        },
        {
          status: 409,
        }
      );
    }

    const career = await Career.create(parsed.data);

    return NextResponse.json(
      {
        success: true,
        career,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error("CREATE CAREER ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to create career.",
      },
      {
        status: 500,
      }
    );
  }
}