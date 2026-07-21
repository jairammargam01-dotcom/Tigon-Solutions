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

export async function verifyMailConnection(): Promise<void> {
  console.log("========== SMTP ENV ==========");

  console.log({
    SMTP_HOST: process.env.SMTP_HOST,
    SMTP_PORT: process.env.SMTP_PORT,
    SMTP_USER: process.env.SMTP_USER,
    CONTACT_EMAIL: process.env.CONTACT_EMAIL,
    HAS_PASSWORD: !!process.env.SMTP_PASS,
    PASSWORD_LENGTH: process.env.SMTP_PASS?.length ?? 0,
  });

  console.log("========== TRANSPORT CONFIG ==========");

  console.log({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: true,
  });

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
    from: process.env.SMTP_USER,
    to: process.env.CONTACT_EMAIL,
    replyTo: data.email,
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

  console.log({
    from: process.env.SMTP_USER,
    to: data.email,
  });

  const info = await transporter.sendMail({
    from: `"Tygon Solutions" <${process.env.SMTP_USER}>`,
    to: data.email,
    subject: "We've received your enquiry | Tygon Solutions",
    html: autoReplyTemplate(data),
  });

  console.log("AUTO REPLY SENT");
  console.log(info);
}