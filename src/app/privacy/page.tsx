import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Tygon Solutions",
  description:
    "Read the Privacy Policy explaining how Tygon Solutions collects, uses, and protects your personal information.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <section className="container mx-auto max-w-3xl px-4 pb-20 pt-40">
      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-display font-bold text-white md:text-5xl">
          Privacy Policy
        </h1>

        <p className="text-white/70">
          Last updated: July 2026
        </p>
      </div>

      <div className="prose prose-invert prose-lg max-w-none text-white/70">
        <p>
          Tygon Solutions ("we", "our", or "us") is committed to protecting
          your privacy. This Privacy Policy explains how your personal
          information is collected, used, and disclosed.
        </p>

        <h3>1. Information We Collect</h3>

        <p>
          We collect information you provide when requesting a consultation,
          submitting forms, or communicating with us, including your name,
          email address, phone number, company information, and project
          requirements.
        </p>

        <h3>2. How We Use Your Information</h3>

        <p>
          We use your information to respond to inquiries, provide services,
          improve our website, communicate project updates, and comply with
          legal obligations.
        </p>

        <h3>3. Data Security</h3>

        <p>
          We implement appropriate technical and organizational safeguards to
          protect your information. However, no internet transmission or
          electronic storage method is completely secure.
        </p>

        <h3>4. Third-Party Services</h3>

        <p>
          We may use trusted third-party providers for analytics, hosting,
          email delivery, payment processing, and cloud infrastructure. These
          providers process data only as necessary to deliver their services.
        </p>

        <h3>5. Contact</h3>

        <p>
          Questions regarding this Privacy Policy may be sent to
          legal@tygonsolutions.com.
        </p>
      </div>
    </section>
  );
}