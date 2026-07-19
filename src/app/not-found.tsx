import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 - Page Not Found | Tygon Solutions",
  description:
    "The page you are looking for could not be found.",
};

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="max-w-2xl text-center">
        <h1 className="mb-6 text-8xl font-display font-bold text-gradient">
          404
        </h1>

        <h2 className="mb-6 text-3xl font-semibold text-white">
          Page Not Found
        </h2>

        <p className="mx-auto mb-10 max-w-xl text-lg text-white/60">
          The page you are looking for might have been removed, renamed,
          or is temporarily unavailable.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="rounded-xl bg-primary px-6 py-3 font-semibold text-white transition hover:bg-primary/90"
          >
            Back to Home
          </Link>

          <Link
            href="/contact"
            className="rounded-xl border border-white/15 px-6 py-3 font-semibold text-white transition hover:border-primary/50 hover:bg-white/5"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}