"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import { FaLinkedin, FaInstagram } from "react-icons/fa6";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-dark pt-20 pb-10">
      {/* Background Glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[450px] w-[900px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px] opacity-50" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <h2 className="sr-only">
          Footer Navigation
        </h2>

        {/* ======================================================= */}
        {/* TOP SECTION */}
        {/* ======================================================= */}

        <div className="mb-16 flex flex-col gap-16 lg:flex-row lg:items-start lg:justify-between">

          {/* Brand */}

          <div className="max-w-md">

            <Link
              href="/"
              className="group mb-6 flex items-center gap-4"
            >
              <Image
                src="/logo.png"
                alt="Tygon Solutions"
                width={512}
                height={512}
                className="h-20 w-auto object-contain transition-all duration-300 group-hover:scale-105"
              />

              <div>
                <h3 className="font-display text-3xl font-bold text-white">
                  Tygon Solutions
                </h3>

                <p className="text-xs text-white/50">
                  One Partner. Unlimited Digital Solutions.
                </p>
              </div>
            </Link>

            <p className="mb-8 leading-8 text-white/65">
              Helping startups, SMEs, and enterprises build scalable software,
              AI-powered applications, cloud infrastructure, business
              automation, digital marketing strategies, and custom web
              solutions that drive measurable growth.
            </p>

            {/* Contact */}

            <div className="space-y-5">
              <a
                href="mailto:tygonsolutions@gmail.com"
                className="inline-flex items-center gap-3 text-white/70 transition-colors hover:text-primary"
              >
                <Mail className="h-5 w-5" />
                Email Us
              </a>

              <div className="flex items-center gap-5">
                <a
                  href="https://www.linkedin.com/in/tygon-solutions-07b780422"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-white/60 transition-colors hover:text-primary"
                >
                  <FaLinkedin className="h-5 w-5" />
                </a>

                <a
                  href="https://www.instagram.com/tacito_voice_055?igsh=ZW82bTliNGlsZmZl"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-white/60 transition-colors hover:text-primary"
                >
                  <FaInstagram  className="h-5 w-5" />
                </a>
              </div>
            </div>

          </div>

          {/* Navigation */}

          <div className="grid flex-1 grid-cols-2 gap-12 md:grid-cols-4">

            {/* Company */}

            <div>

              <h3 className="mb-6 text-lg font-semibold text-white">
                Company
              </h3>

              <ul className="space-y-4 text-white/60">

                <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>

                <li><Link href="/careers" className="hover:text-primary transition-colors">Careers</Link></li>

                <li><Link href="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link></li>

                <li><Link href="/process" className="hover:text-primary transition-colors">Our Process</Link></li>

              </ul>

            </div>

            {/* Services */}

            <div>

              <h3 className="mb-6 text-lg font-semibold text-white">
                Services
              </h3>

              <ul className="space-y-4 text-white/60">

                <li><Link href="/services#ai" className="hover:text-primary transition-colors">AI & Automation</Link></li>

                <li><Link href="/services#software" className="hover:text-primary transition-colors">Software Development</Link></li>

                <li><Link href="/services#web" className="hover:text-primary transition-colors">Web Development</Link></li>

                <li><Link href="/services#marketing" className="hover:text-primary transition-colors">Digital Marketing</Link></li>

              </ul>

            </div>

            {/* Resources */}

            <div>

              <h3 className="mb-6 text-lg font-semibold text-white">
                Resources
              </h3>

              <ul className="space-y-4 text-white/60">

                <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>

                <li><Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>

                <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>

                <li><Link href="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link></li>

              </ul>

            </div>

            {/* Contact */}

            <div>

              <h3 className="mb-6 text-lg font-semibold text-white">
                Contact
              </h3>

              <ul className="space-y-4 text-white/60">

                <li>
                  <Link href="/contact" className="hover:text-primary transition-colors">
                    Contact Us
                  </Link>
                </li>

                <li>
                  <Link href="/contact" className="hover:text-primary transition-colors">
                    Request a Quote
                  </Link>
                </li>

                <li>
                  <a
                    href="mailto:tygonsolutions@gmail.com"
                    className="inline-flex items-center gap-2 transition-colors hover:text-primary"
                  >
                    <Mail className="h-4 w-4" />
                    Email Us
                  </a>
                </li>

              </ul>

            </div>

          </div>

        </div>

                {/* ======================================================= */}
        {/* BOTTOM FOOTER */}
        {/* ======================================================= */}

        <div className="flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row">

          <p className="text-center text-sm text-white/60 md:text-left">
            © {currentYear}{" "}
            <span className="font-semibold text-white">
              Tygon Solutions
            </span>
            . All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">

            <Link
              href="/privacy"
              className="text-white/60 transition-colors hover:text-primary"
            >
              Privacy
            </Link>

            <Link
              href="/terms"
              className="text-white/60 transition-colors hover:text-primary"
            >
              Terms
            </Link>

            <Link
              href="/blog"
              className="text-white/60 transition-colors hover:text-primary"
            >
              Blog
            </Link>

            <a
              href="https://www.instagram.com/tacito_voice_055?igsh=ZW82bTliNGlsZmZl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 transition-colors hover:text-primary"
            >
              Instagram
            </a>

            <a
              href="https://www.linkedin.com/in/tygon-solutions-07b780422"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 transition-colors hover:text-primary"
            >
              LinkedIn
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
}