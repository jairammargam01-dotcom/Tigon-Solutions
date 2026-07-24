import { NextResponse } from "next/server";

import { connectDB } from "@/lib/mongodb";
import { requireAdmin } from "@/lib/require-admin";

import Settings from "@/models/Settings";

export async function GET() {
  const session = await requireAdmin();

  if (session instanceof NextResponse) {
    return session;
  }

  await connectDB();

  let settings = await Settings.findOne();

  if (!settings) {
    settings = await Settings.create({
      branding: {
        logo: "",
        favicon: "",
        appleTouchIcon: "",
        ogImage: "",
      },

      site: {
        siteUrl:
          process.env.NEXT_PUBLIC_SITE_URL ?? "",
      },
    });
  }

  return NextResponse.json(settings);
}

export async function PUT(request: Request) {
  const session = await requireAdmin();

  if (session instanceof NextResponse) {
    return session;
  }

  await connectDB();

  const body = await request.json();

  let settings = await Settings.findOne();

  if (!settings) {
    settings = new Settings(body);
  } else {
    settings.branding = body.branding;
    settings.site = body.site;
  }

  await settings.save();

  return NextResponse.json({
    success: true,
    settings,
  });
}