"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/content/site";

export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-[22px] sm:px-14 backdrop-blur-sm border-b transition-colors ${
        scrolled ? "border-border" : "border-transparent"
      }`}
      style={{ background: "oklch(98% 0.005 90 / 0.9)" }}
    >
      <Link
        href="/"
        className="font-display font-extrabold text-lg tracking-tight"
      >
        {site.name}
      </Link>
      {isHome ? (
        <nav className="flex items-center gap-9 text-sm text-muted">
          <a href="#work" className="hover:text-foreground transition-colors">
            Work
          </a>
          <a href="#about" className="hover:text-foreground transition-colors">
            About
          </a>
          <a href="#contact" className="hover:text-foreground transition-colors">
            Contact
          </a>
        </nav>
      ) : (
        <Link href="/" className="text-sm text-muted hover:text-foreground transition-colors">
          ← Back to work
        </Link>
      )}
    </header>
  );
}
