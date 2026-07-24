import { NextResponse } from "next/server";

import { requireAdmin } from "@/lib/require-admin";
import { connectDB } from "@/lib/mongodb";
import { Lead } from "@/models/Lead";

export async function GET() {
  try {
    const session = await requireAdmin();

    if (session instanceof NextResponse) {
      return session;
    }

    await connectDB();

    const leads = await Lead.find().sort({
      createdAt: -1,
    });

    return NextResponse.json(leads);
  } catch (error) {
    console.error("GET LEADS ERROR:", error);

    return NextResponse.json(
      {
        message: "Failed to fetch leads.",
      },
      {
        status: 500,
      }
    );
  }
}