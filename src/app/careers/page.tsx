/*import type { Metadata } from "next";
import CareersClient from "./CareersClient";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join the Tygon Solutions network of developers, designers, AI specialists, marketers, consultants, and innovators building world-class digital solutions.",
  alternates: {
    canonical: "/careers",
  },
};

export default function CareersPage() {
  return <CareersClient />;
}
*/


import type { Metadata } from "next";
import CareersClient from "./CareersClient";

export const metadata: Metadata = {
  metadataBase: new URL("https://tygon-solutions.vercel.app"),

  title:
    "Remote Motion Graphics Designer & Video Editor Jobs | Full-Time",

  description:
    "Tygon Solutions is hiring a full-time remote Motion Graphics Designer & Video Editor. Create engaging motion graphics, advertisements, YouTube videos, social media reels, animations, and branded visual content. Apply today.",

  keywords: [
    "Motion Graphics Designer Jobs",
    "Video Editor Jobs",
    "Motion Graphics Jobs",
    "Motion Designer",
    "Remote Motion Graphics Designer",
    "Remote Video Editor",
    "Remote Creative Jobs",
    "Remote Jobs India",
    "Adobe After Effects Jobs",
    "Adobe Premiere Pro Jobs",
    "YouTube Video Editor",
    "Social Media Video Editor",
    "Animation Jobs",
    "Creative Careers",
    "Video Editing Careers",
    "Creative Designer Jobs",
    "Tygon Solutions Careers",
  ],

  alternates: {
    canonical: "/careers",
  },

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

  openGraph: {
    title:
      "Remote Motion Graphics Designer & Video Editor | Careers ",

    description:
      "We're hiring a full-time remote Motion Graphics Designer & Video Editor. Join Tygon Solutions and work on exciting motion graphics, advertisements, YouTube videos, animations, and social media content.",

    url: "/careers",

    siteName: "Tygon Solutions",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Remote Motion Graphics Designer & Video Editor ",

    description:
      "Apply for our full-time remote Motion Graphics Designer & Video Editor position and become part of the Tygon Solutions creative team.",
  },
};

export default function CareersPage() {
  return <CareersClient />;
}