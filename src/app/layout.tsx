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

export const metadata: Metadata = {
  metadataBase: new URL("https://tygon-solutions.vercel.app"),

  title: {
    default: "Tygon Solutions | One Partner. Unlimited Digital Solutions.",
    template: "%s | Tygon Solutions",
  },

  description:
    "AI, Software Development, Web Development, Cloud, Mobile Apps, Digital Marketing and Business Consulting.",

  keywords: [
    "AI",
    "Software Development",
    "Web Development",
    "Cloud",
    "Digital Marketing",
  ],
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

          <main className="flex-1">
            {children}
          </main>

          <Footer />
        </Providers>
      </body>
    </html>
  );
}