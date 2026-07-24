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

    const [
      totalLeads,
      pendingLeads,
      emailedLeads,
      failedLeads,
    ] = await Promise.all([
      Lead.countDocuments(),
      Lead.countDocuments({
        status: "pending",
      }),
      Lead.countDocuments({
        status: "emailed",
      }),
      Lead.countDocuments({
        status: "failed",
      }),
    ]);

    return NextResponse.json({
      totalLeads,
      pendingLeads,
      emailedLeads,
      failedLeads,
    });
  } catch (error) {
    console.error("DASHBOARD ERROR:", error);

    return NextResponse.json(
      {
        message: "Failed to fetch dashboard data.",
      },
      {
        status: 500,
      }
    );
  }
}