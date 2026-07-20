import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Escapes HTML characters to prevent HTML injection
 * inside email templates.
 */
export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * Returns a safe string for optional values.
 * Empty values become "-".
 */
export function safeValue(value?: string | null): string {
  if (!value) return "-";

  const trimmed = value.trim();

  return trimmed.length ? escapeHtml(trimmed) : "-";
}

/**
 * Formats the submission timestamp.
 */
export function formatSubmissionDate(date: Date = new Date()): string {
  return new Intl.DateTimeFormat("en-IN", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: "Asia/Kolkata",
  }).format(date);
}