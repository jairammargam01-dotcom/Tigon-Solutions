import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const name = formData.get("name")?.toString() ?? "";
    const company = formData.get("company")?.toString() ?? "";
    const email = formData.get("email")?.toString() ?? "";
    const phone = formData.get("phone")?.toString() ?? "";
    const service = formData.get("service")?.toString() ?? "";
    const budget = formData.get("budget")?.toString() ?? "";
    const description = formData.get("description")?.toString() ?? "";

    // Basic validation
    if (!name || !email || !service || !description) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill all required fields.",
        },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Tygon Solutions Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `🚀 New Contact Form Submission - ${service}`,
      html: `
        <div style="font-family:Arial,sans-serif;padding:20px;">
          <h2 style="color:#1056e9;">New Website Inquiry</h2>

          <table cellpadding="8" cellspacing="0" border="1" style="border-collapse:collapse;width:100%;">
            <tr>
              <td><strong>Name</strong></td>
              <td>${name}</td>
            </tr>

            <tr>
              <td><strong>Company</strong></td>
              <td>${company || "-"}</td>
            </tr>

            <tr>
              <td><strong>Email</strong></td>
              <td>${email}</td>
            </tr>

            <tr>
              <td><strong>Phone</strong></td>
              <td>${phone || "-"}</td>
            </tr>

            <tr>
              <td><strong>Service</strong></td>
              <td>${service}</td>
            </tr>

            <tr>
              <td><strong>Budget</strong></td>
              <td>${budget || "-"}</td>
            </tr>

            <tr>
              <td><strong>Project Description</strong></td>
              <td>${description}</td>
            </tr>

            <tr>
              <td><strong>Submitted</strong></td>
              <td>${new Date().toLocaleString("en-IN", {
                dateStyle: "full",
                timeStyle: "short",
              })}</td>
            </tr>
          </table>

          <br>

          <p style="color:#666;">
            This enquiry was submitted through the Tygon Solutions website.
          </p>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong.",
      },
      {
        status: 500,
      }
    );
  }
}