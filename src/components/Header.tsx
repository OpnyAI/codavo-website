"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/webdesign", label: "Webdesign" },
  { href: "/#leistungen", label: "Leistungen" },
  { href: "/#prozess", label: "Prozess" },
  { href: "/cases", label: "Case Studies" },
  { href: "/faq", label: "FAQ" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const menuRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  // Scroll-Hintergrund
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Beim Routenwechsel Mobile-Menü schließen
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Click outside: überall tippen -> Menü zu (außer auf Button / Panel)
  useEffect(() => {
    if (!open) return;

    const handleClick = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node | null;
      if (!target) return;

      const menuEl = menuRef.current;
      const buttonEl = buttonRef.current;

      const clickInMenu = menuEl?.contains(target);
      const clickOnButton = buttonEl?.contains(target);

      if (!clickInMenu && !clickOnButton) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);
    document.addEventListener("touchstart", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("touchstart", handleClick);
    };
  }, [open]);

  return (
    <>
      {/* fixierter Header */}
      <header
        className={[
          "fixed inset-x-0 top-0 z-50 border-b border-white/5",
          "transition-colors duration-300",
          scrolled
            ? "bg-[#050816]/95 backdrop-blur-md"
            : "bg-gradient-to-b from-[#050816]/95 via-[#050816]/80 to-transparent",
        ].join(" ")}
      >
        <div className="mx-auto flex h-14 md:h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link
            href="/"
            aria-label="Codavo Webstudio – Startseite"
            className="flex items-center gap-2"
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
          <nav className="hidden items-center gap-6 text-sm text-slate-200 md:flex">
            {navLinks.map((link) => {
              const baseHref = link.href.replace(/#.*/, "");
              const isActive =
                (baseHref === "/" && pathname === "/") ||
                (baseHref !== "/" && pathname.startsWith(baseHref));

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={[
                    "transition hover:text-white",
                    isActive ? "text-white" : "text-slate-200",
                  ].join(" ")}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop-CTA */}
          <Link
            href="/kontakt"
            className="hidden md:inline-flex rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-4 py-2 text-xs md:text-sm font-medium text-white shadow hover:shadow-lg transition"
          >
            Projekt anfragen
          </Link>

          {/* Mobile: Burger */}
          <button
            type="button"
            ref={buttonRef}
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
            className="inline-flex items-center justify-center rounded-full border border-white/10 p-1.5 text-slate-100 hover:bg-white/10 md:hidden"
          >
            {open ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile-Menü + Overlay */}
      {open && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Dimmer */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

          {/* Panel – hängt am ref für Click-Outside */}
          <div
            ref={menuRef}
            className="absolute inset-x-0 top-14 border-b border-white/10 bg-[#050816]/98 backdrop-blur-xl"
          >
            <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 pb-4 pt-3 text-sm">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-3 py-2 text-slate-100 hover:bg-white/10"
                >
                  {link.label}
                </Link>
              ))}

              <div className="mt-3 border-t border-white/10 pt-3">
                <Link
                  href="/kontakt"
                  className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-4 py-2 text-sm font-medium text-white shadow hover:shadow-lg transition"
                >
                  Projekt anfragen
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
