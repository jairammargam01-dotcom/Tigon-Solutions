import { NextRequest, NextResponse } from "next/server";

import { requireAdmin } from "@/lib/require-admin";
import { connectDB } from "@/lib/mongodb";
import { Lead } from "@/models/Lead";

interface Context {
  params: Promise<{
    id: string;
  }>;
}

export async function PATCH(
  request: NextRequest,
  context: Context
) {
  try {
    const session = await requireAdmin();

    if (session instanceof NextResponse) {
      return session;
    }

    await connectDB();

    const { id } = await context.params;

    const body = await request.json();

    const lead = await Lead.findByIdAndUpdate(
      id,
      {
        status: body.status,
      },
      {
        returnDocument: "after",
        runValidators: true,
      }
    );

    if (!lead) {
      return NextResponse.json(
        {
          message: "Lead not found.",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json(lead);
  } catch (error) {
    console.error("UPDATE LEAD ERROR:", error);

    return NextResponse.json(
      {
        message: "Failed to update lead.",
      },
      {
        status: 500,
      }
    );
  }
}