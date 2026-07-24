import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

import { connectDB } from "@/lib/mongodb";
import { requireAdmin } from "@/lib/require-admin";

import { Admin } from "@/models/Admin";

export async function PUT(req: Request) {
  const session = await requireAdmin();

  if (session instanceof NextResponse) {
    return session;
  }

  await connectDB();

  const {
    currentPassword,
    newPassword,
  } = await req.json();

  if (!currentPassword || !newPassword) {
    return NextResponse.json(
      { error: "Missing fields" },
      { status: 400 }
    );
  }

  const admin = await Admin.findOne();

  if (!admin) {
    return NextResponse.json(
      { error: "Admin not found" },
      { status: 404 }
    );
  }

  const valid = await bcrypt.compare(
    currentPassword,
    admin.password
  );

  if (!valid) {
    return NextResponse.json(
      { error: "Current password is incorrect" },
      { status: 400 }
    );
  }

  admin.password = await bcrypt.hash(
    newPassword,
    10
  );

  await admin.save();

  return NextResponse.json({
    success: true,
  });
}