import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://tygon-solutions.vercel.app";

  return [
    {
      url: baseUrl,
      priority: 1,
      changeFrequency: "weekly",
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about`,
      priority: 0.9,
      changeFrequency: "monthly",
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/services`,
      priority: 0.9,
      changeFrequency: "weekly",
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/process`,
      priority: 0.8,
      changeFrequency: "monthly",
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/portfolio`,
      priority: 0.8,
      changeFrequency: "monthly",
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/technologies`,
      priority: 0.8,
      changeFrequency: "monthly",
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/industries`,
      priority: 0.8,
      changeFrequency: "monthly",
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/careers`,
      priority: 0.7,
      changeFrequency: "monthly",
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/blog`,
      priority: 0.9,
      changeFrequency: "weekly",
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contact`,
      priority: 0.9,
      changeFrequency: "monthly",
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/faq`,
      priority: 0.7,
      changeFrequency: "monthly",
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/privacy`,
      priority: 0.3,
      changeFrequency: "yearly",
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/terms`,
      priority: 0.3,
      changeFrequency: "yearly",
      lastModified: new Date(),
    },
  ];
}