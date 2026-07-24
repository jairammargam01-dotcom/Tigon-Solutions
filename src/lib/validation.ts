import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must contain at least 2 characters.")
    .max(80, "Name cannot exceed 80 characters."),

  company: z
    .string()
    .trim()
    .max(100, "Company name cannot exceed 100 characters.")
    .optional()
    .or(z.literal("")),

  email: z
    .string()
    .trim()
    .email("Please enter a valid email address."),

  phone: z
    .string()
    .trim()
    .regex(
      /^[+]?[0-9\s\-()]{8,20}$/,
      "Please enter a valid phone number."
    )
    .optional()
    .or(z.literal("")),

  service: z
    .string()
    .trim()
    .min(2, "Please select a service."),

  budget: z
    .string()
    .trim()
    .optional()
    .or(z.literal("")),

  description: z
    .string()
    .trim()
    .min(
      5,
      "Project description should contain at least 5 characters."
    )
    .max(
      3000,
      "Project description cannot exceed 3000 characters."
    ),
});

export const careerSchema = z.object({
  title: z
    .string()
    .trim()
    .min(3, "Job title is required."),

  slug: z
    .string()
    .trim()
    .min(3, "Slug is required.")
    .regex(
      /^[a-z0-9-]+$/,
      "Slug can contain lowercase letters, numbers and hyphens only."
    ),

  department: z
    .string()
    .trim()
    .min(2, "Department is required."),

  employmentType: z
    .string()
    .trim()
    .min(2, "Employment type is required."),

  location: z
    .string()
    .trim()
    .min(2, "Location is required."),

  shortDescription: z
    .string()
    .trim()
    .min(10, "Please enter a short description.")
    .max(
      500,
      "Short description cannot exceed 500 characters."
    ),

  applyUrl: z
    .string()
    .trim()
    .url("Please enter a valid URL."),

  displayOrder: z.number().default(0),

  featured: z.boolean().default(false),

  published: z.boolean().default(false),

  seoTitle: z.string().trim().default(""),

  seoDescription: z.string().trim().default(""),
});

export type CareerSchema = z.infer<
  typeof careerSchema
>;

export type ContactSchema = z.infer<typeof contactSchema>;