interface BreadcrumbJsonLdProps {
  title: string;
  url: string;
}

export default function BreadcrumbJsonLd({
  title,
  url,
}: BreadcrumbJsonLdProps) {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://tygon-solutions.vercel.app";

  const schema = {
    "@context": "https://schema.org",

    "@type": "BreadcrumbList",

    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${baseUrl}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: title,
        item: url,
      },
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