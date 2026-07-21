import nodemailer from "nodemailer";

import type { ContactFormData } from "@/types/contact";

import { adminEmailTemplate } from "@/templates/adminEmail";
import { autoReplyTemplate } from "@/templates/autoReply";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function verifyMailConnection() {
  console.log("========== SMTP VERIFY ==========");

  try {
    const result = await transporter.verify();

    console.log("SMTP VERIFY SUCCESS");
    console.log(result);
  } catch (err) {
    console.error("SMTP VERIFY FAILED");
    console.error(err);

    throw err;
  }
}

export async function sendAdminEmail(
  data: ContactFormData
): Promise<void> {
  console.log("========== SENDING ADMIN EMAIL ==========");

  console.log({
    smtpUser: process.env.SMTP_USER,
    contactEmail: process.env.CONTACT_EMAIL,
  });

  const info = await transporter.sendMail({
    from: `"Tygon Solutions Website" <${process.env.SMTP_USER}>`,
    to: process.env.CONTACT_EMAIL,
    replyTo: data.email,
    subject: `🚀 New Project Enquiry • ${data.service}`,
    html: adminEmailTemplate(data),
  });

  console.log("ADMIN EMAIL SENT");
  console.log(info);
}

export async function sendAutoReply(
  data: ContactFormData
): Promise<void> {
  console.log("========== SENDING AUTO REPLY ==========");

  const info = await transporter.sendMail({
    from: `"Tygon Solutions" <${process.env.SMTP_USER}>`,
    to: data.email,
    subject: "We've received your enquiry | Tygon Solutions",
    html: autoReplyTemplate(data),
  });

  console.log("AUTO REPLY SENT");
  console.log(info);
}