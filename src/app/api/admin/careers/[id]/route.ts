import { NextRequest, NextResponse } from "next/server";

import { requireAdmin } from "@/lib/require-admin";
import { connectDB } from "@/lib/mongodb";
import { careerSchema } from "@/lib/validation";
import Career from "@/models/Career";

interface RouteContext {
  params: Promise<{
    id: string;
  }>;
}

export async function GET(
  _request: NextRequest,
  context: RouteContext
) {
  try {
    const session = await requireAdmin();

    if (session instanceof NextResponse) {
      return session;
    }

    await connectDB();

    const { id } = await context.params;

    const career = await Career.findById(id).lean();

    if (!career) {
      return NextResponse.json(
        {
          success: false,
          message: "Career not found.",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json(career);
  } catch (error) {
    console.error("GET CAREER ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch career.",
      },
      {
        status: 500,
      }
    );
  }
}

export async function PATCH(
  request: NextRequest,
  context: RouteContext
) {
  try {
    const session = await requireAdmin();

    if (session instanceof NextResponse) {
      return session;
    }

    await connectDB();

    const { id } = await context.params;

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

    const duplicate = await Career.findOne({
      slug: parsed.data.slug,
      _id: { $ne: id },
    });

    if (duplicate) {
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

    const career = await Career.findByIdAndUpdate(
      id,
      parsed.data,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!career) {
      return NextResponse.json(
        {
          success: false,
          message: "Career not found.",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json({
      success: true,
      career,
    });
  } catch (error) {
    console.error("UPDATE CAREER ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to update career.",
      },
      {
        status: 500,
      }
    );
  }
}

export async function DELETE(
  _request: NextRequest,
  context: RouteContext
) {
  try {
    const session = await requireAdmin();

    if (session instanceof NextResponse) {
      return session;
    }

    await connectDB();

    const { id } = await context.params;

    const career = await Career.findByIdAndDelete(id);

    if (!career) {
      return NextResponse.json(
        {
          success: false,
          message: "Career not found.",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Career deleted successfully.",
    });
  } catch (error) {
    console.error("DELETE CAREER ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to delete career.",
      },
      {
        status: 500,
      }
    );
  }
}