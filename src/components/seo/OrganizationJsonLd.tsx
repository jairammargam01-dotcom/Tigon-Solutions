export default function OrganizationJsonLd() {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://tygon-solutions.vercel.app";

  const schema = {
    "@context": "https://schema.org",

    "@type": "Organization",

    name: "Tygon Solutions",

    url: baseUrl,

    logo: `${baseUrl}/logo.png`,

    sameAs: [
      // Add your official social profiles here
      // "https://www.linkedin.com/company/...",
      // "https://x.com/...",
      // "https://www.instagram.com/...",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}