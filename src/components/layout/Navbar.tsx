"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { AnimatePresence, motion } from "motion/react";
import { ChevronRight, Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Process", href: "/process" },
  { name: "Portfolio", href: "/portfolio" },
];

export default function Navbar() {
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          isScrolled ? "py-4" : "py-6"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <nav
            className={`flex items-center justify-between rounded-full px-6 py-3 transition-all duration-300 ${
              isScrolled ? "glass shadow-xl" : "bg-transparent"
            }`}
          >
            {/* Logo */}

            <Link
              href="/"
              className="group flex items-center gap-3"
            >
              <Image
                src="/logo.png"
                alt="Tygon Solutions"
                width={512}
                height={512}
                priority
                className="h-16 w-auto object-contain transition-all duration-300 group-hover:scale-105"
              />

              <div className="flex flex-col leading-none transition-all duration-300 group-hover:translate-x-1">
                <span className="font-display text-2xl font-bold tracking-tight text-white">
                  Tygon Solutions
                </span>

                <span className="hidden text-xs tracking-wide text-white/70 xl:block">
                  One Partner. Unlimited Digital Solutions.
                </span>
              </div>
            </Link>

            {/* Desktop */}

            <div className="hidden items-center gap-8 md:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`group relative text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? "text-white"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.name}

                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 rounded-full bg-primary transition-all duration-300 ${
                      pathname === link.href
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              ))}
            </div>

            {/* CTA */}

            <div className="flex items-center gap-4">
              <Button
                asChild
                variant="gradient"
                size="sm"
                className="hidden md:flex"
              >
                <Link href="/contact">
                  Get Started
                </Link>
              </Button>

              <button
                aria-label={
                  mobileMenuOpen
                    ? "Close navigation menu"
                    : "Open navigation menu"
                }
                className="p-2 text-white/80 hover:text-white md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 flex flex-col bg-dark/95 px-4 pt-24 pb-6 backdrop-blur-xl"
          >
            <div className="flex flex-1 flex-col items-center justify-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="font-display text-3xl font-medium text-white/90 hover:text-white"
                >
                  {link.name}
                </Link>
              ))}

              <div className="my-4 h-px w-24 bg-white/20" />

              <Button
                asChild
                variant="gradient"
                size="lg"
                className="w-full max-w-xs text-lg"
              >
                <Link href="/contact">
                  Let's Talk
                  <ChevronRight />
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}