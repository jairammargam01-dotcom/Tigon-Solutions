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

/**
 * Verify SMTP connection.
 * Useful during development.
 */
export async function verifyMailConnection() {
  await transporter.verify();
}

/**
 * Send notification email to Tygon Solutions.
 */
export async function sendAdminEmail(
  data: ContactFormData
): Promise<void> {
  await transporter.sendMail({
    from: `"Tygon Solutions Website" <${process.env.SMTP_USER}>`,

    to: process.env.CONTACT_EMAIL,

    replyTo: data.email,

    subject: `🚀 New Project Enquiry • ${data.service}`,

    html: adminEmailTemplate(data),
  });
}

/**
 * Auto reply to customer.
 */
export async function sendAutoReply(
  data: ContactFormData
): Promise<void> {
  await transporter.sendMail({
    from: `"Tygon Solutions" <${process.env.SMTP_USER}>`,

    to: data.email,

    subject: "We've received your enquiry | Tygon Solutions",

    html: autoReplyTemplate(data),
  });
}