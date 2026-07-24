interface ArticleJsonLdProps {
  title: string;
  description: string;
  url: string;
  image: string;
  publishedAt: string;
  modifiedAt: string;
  author: string;
  category: string;
  tags: string[];
}

export default function ArticleJsonLd({
  title,
  description,
  url,
  image,
  publishedAt,
  modifiedAt,
  author,
  category,
  tags,
}: ArticleJsonLdProps) {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://tygon-solutions.vercel.app";

  const imageUrl = image.startsWith("http")
    ? image
    : `${baseUrl}${image}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",

    headline: title,

    description,

    articleSection: category,

    keywords: tags.join(", "),

    image: [imageUrl],

    datePublished: publishedAt,

    dateModified: modifiedAt,

    author: {
      "@type": "Person",
      name: author,
    },

    publisher: {
      "@type": "Organization",
      name: "Tygon Solutions",

      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/logo.png`,
      },
    },

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
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