"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-40 transition-colors duration-300",
        scrolled ? "bg-[#0a0f1a]/95 backdrop-blur-sm" : "bg-[#0a0f1a]",
      ].join(" ")}
    >
      {/* Top-Bar */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 border-b border-white/5">
        <div className="h-14 md:h-16 flex items-center justify-between gap-3">
          {/* Logo / Brand */}
          <Link
            href="/"
            aria-label="Codavo Webstudio – Startseite"
            className="flex items-center"
          >
            <Image
              src="/images/logo/codavo-logo-light.png"
              alt="Codavo Webstudio Logo"
              width={140}
              height={32}
              priority
              className="h-6 w-auto md:h-7"
            />
            <span className="sr-only">Codavo Webstudio</span>
          </Link>

          {/* Desktop-Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-200">
            <Link href="/#leistungen" className="hover:text-white">
              Leistungen
            </Link>
            <Link href="/#prozess" className="hover:text-white">
              Prozess
            </Link>
            <Link href="/#cases" className="hover:text-white">
              Case Studies
            </Link>
            <Link href="/faq" className="hover:text-white">
              FAQ
            </Link>
            <Link href="/kontakt" className="hover:text-white">
              Kontakt
            </Link>
          </nav>

          {/* CTA rechts – führt auf Kontakt-Unterseite */}
          <Link
            href="/kontakt"
            className="
              rounded-full
              bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
              text-white px-3 py-1.5 md:px-4 md:py-2
              text-xs md:text-sm font-medium
              shadow hover:shadow-lg
              transition
            "
          >
            Projekt anfragen
          </Link>
        </div>
      </div>

      {/* Mobile Sub-Nav */}
      <div className="md:hidden border-b border-white/5 bg-[#0a0f1a]">
        <nav className="flex items-center gap-2 overflow-x-auto px-3 py-2 no-scrollbar">
          <Link
            href="/#leistungen"
            className="shrink-0 rounded-full border border-white/10 px-3 py-1.5 text-xs text-slate-200 hover:bg-white/10"
          >
            Leistungen
          </Link>
          <Link
            href="/#prozess"
            className="shrink-0 rounded-full border border-white/10 px-3 py-1.5 text-xs text-slate-200 hover:bg-white/10"
          >
            Prozess
          </Link>
          <Link
            href="/#cases"
            className="shrink-0 rounded-full border border-white/10 px-3 py-1.5 text-xs text-slate-200 hover:bg-white/10"
          >
            Case Studies
          </Link>
          <Link
            href="/faq"
            className="shrink-0 rounded-full border border-white/10 px-3 py-1.5 text-xs text-slate-200 hover:bg-white/10"
          >
            FAQ
          </Link>
          <Link
            href="/kontakt"
            className="shrink-0 rounded-full border border-white/10 px-3 py-1.5 text-xs text-slate-200 hover:bg-white/10"
          >
            Kontakt
          </Link>
        </nav>
      </div>
    </header>
  );
}
