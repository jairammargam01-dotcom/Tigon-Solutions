import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Providers } from "@/components/Providers";
import ScrollToHash from "@/components/ScrollToHash";

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
    "Tygon Solutions helps businesses build, automate, market, and scale through AI, software development, cloud, digital marketing, and expert technology services.",

  keywords: [
    "AI",
    "Artificial Intelligence",
    "Software Development",
    "Web Development",
    "Mobile App Development",
    "Cloud Computing",
    "Digital Marketing",
    "Business Consulting",
    "UI UX Design",
    "Automation",
    "Tygon Solutions",
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
      "Tygon Solutions helps businesses build, automate, market, and scale through AI, software development, cloud, digital marketing, and expert technology services.",
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
      "Tygon Solutions helps businesses build, automate, market, and scale through AI, software development, cloud, digital marketing, and expert technology services.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
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
      <body className="flex min-h-screen flex-col bg-background font-sans antialiased text-foreground">
        <ScrollToHash />

        <Providers>
          <Navbar />

          <main className="flex-1">{children}</main>

          <Footer />
        </Providers>
      </body>
    </html>
  );
}