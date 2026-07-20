import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { Lead } from "@/models/Lead";
import { inngest } from "@/inngest/client";
import { contactSchema } from "@/lib/validation";

import type { ContactFormData } from "@/types/contact";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const data: ContactFormData = {
      name: formData.get("name")?.toString() ?? "",
      company: formData.get("company")?.toString() ?? "",
      email: formData.get("email")?.toString() ?? "",
      phone: formData.get("phone")?.toString() ?? "",
      service: formData.get("service")?.toString() ?? "",
      budget: formData.get("budget")?.toString() ?? "",
      description: formData.get("description")?.toString() ?? "",
    };

    console.log(data);

    const validation = contactSchema.safeParse(data);

    if (!validation.success) {
      console.log(validation.error.flatten().fieldErrors);

      return NextResponse.json(
        {
          success: false,
          message: "Validation failed.",
          errors: validation.error.flatten().fieldErrors,
        },
        {
          status: 400,
        }
      );
    }

    await connectDB();

    const lead = await Lead.create({
      ...validation.data,
      status: "pending",
    });

    await inngest.send({
      name: "contact/lead.created",
      data: {
        leadId: lead._id.toString(),
      },
    });

    return NextResponse.json({
      success: true,
      message: "Your enquiry has been submitted successfully.",
    });

  } catch (error) {
    console.error("Contact API Error:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          "We're unable to process your request right now. Please try again later.",
      },
      {
        status: 500,
      }
    );
  }
}