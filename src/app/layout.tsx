import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import { Providers } from "@/components/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://tygon-solutions.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Tygon Solutions | One Partner. Unlimited Digital Solutions.",
    template: "%s | Tygon Solutions",
  },

  description:
    "Tygon Solutions helps businesses build, automate, market, and scale through AI solutions, custom software development, cloud services, cybersecurity, digital marketing, branding, and technology consulting.",

  keywords: [
    "Tygon Solutions",
    "Technology Company",
    "Software Development Company",
    "AI Solutions",
    "Artificial Intelligence",
    "Custom Software Development",
    "Web Development",
    "Mobile App Development",
    "Cloud Services",
    "DevOps",
    "Cybersecurity",
    "Digital Marketing",
    "SEO Services",
    "Business Consulting",
    "Technology Consulting",
    "Digital Transformation",
    "Business Automation",
    "Enterprise Software",
    "Technology Partner",
    "Software Company India",
    "Social Media Marketing",
    "Social Media Management",
  ],

  applicationName: "Tygon Solutions",

  authors: [
    {
      name: "Tygon Solutions",
      url: siteUrl,
    },
  ],

  creator: "Tygon Solutions",

  publisher: "Tygon Solutions",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Tygon Solutions",
    title: "Tygon Solutions | One Partner. Unlimited Digital Solutions.",
    description:
      "Helping businesses build, automate, market, and scale through AI, software engineering, cloud, digital marketing, and innovative technology solutions.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tygon Solutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Tygon Solutions | One Partner. Unlimited Digital Solutions.",
    description:
      "Helping businesses build, automate, market, and scale through AI, software engineering, cloud, digital marketing, and innovative technology solutions.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    apple: "/apple-touch-icon.png",
  },

  manifest: "/manifest.webmanifest",

  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="bg-background font-sans antialiased text-foreground">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}