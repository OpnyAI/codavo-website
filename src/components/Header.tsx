"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/webdesign", label: "Webdesign" },
  { href: "/softwareloesungen-fuer-kmu", label: "Softwarelösungen" },
  { href: "/digitale-systeme", label: "Digitale Systeme" },
  { href: "/leistungen", label: "Leistungen" },
  { href: "/cases", label: "Case Studies" },
  { href: "/wissen", label: "Wissen" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isWebsiteCheckPage = pathname.startsWith("/website-check");

  const menuRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

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

  if (isWebsiteCheckPage) {
    return (
      <header
        className={[
          "fixed inset-x-0 top-0 z-50 border-b border-white/8",
          "transition-colors duration-300",
          scrolled
            ? "bg-[#050816]/95 backdrop-blur-md"
            : "bg-gradient-to-b from-[#050816]/95 via-[#050816]/82 to-transparent",
        ].join(" ")}
      >
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-16 lg:px-8">
          <Link
            href="/"
            scroll
            aria-label="Codavo Webstudio - Startseite"
            className="flex items-center gap-2"
          >
            <Image
              src="/images/logo/codavo-logo-light.png"
              alt="Codavo Webstudio"
              width={140}
              height={32}
              priority
              className="h-6 w-auto md:h-7"
            />
            <span className="sr-only">Codavo Webstudio</span>
          </Link>

          <div className="flex items-center">
            <Link
              href="#website-check-form"
              className="inline-flex rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white sm:px-4 sm:py-2"
            >
              Zum Formular
            </Link>
          </div>
        </div>
      </header>
    );
  }

  return (
    <>
      <header
        className={[
          "fixed inset-x-0 top-0 z-50 border-b",
          "transition-all duration-300",
          scrolled
            ? "border-white/8 bg-[#060b16]/88 shadow-[0_12px_40px_rgba(0,0,0,0.18)] backdrop-blur-xl"
            : "border-transparent bg-gradient-to-b from-[#050816]/88 via-[#050816]/55 to-transparent",
        ].join(" ")}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6 lg:h-[4.5rem] lg:px-8">
          <Link
            href="/"
            scroll
            aria-label="Codavo Webstudio - Startseite"
            className="flex items-center gap-2"
          >
            <Image
              src="/images/logo/codavo-logo-light.png"
              alt="Codavo Webstudio"
              width={140}
              height={32}
              priority
              className="h-6 w-auto lg:h-7"
            />
            <span className="sr-only">Codavo Webstudio</span>
          </Link>

          <nav className="hidden items-center gap-7 text-[13px] font-medium text-slate-300 xl:flex">
            {navLinks.map((link) => {
              const baseHref = link.href.replace(/#.*/, "");
              const isAnchorLink = link.href.includes("#");
              const isActive =
                (baseHref === "/" && pathname === "/") ||
                (baseHref !== "/" && pathname.startsWith(baseHref));

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  {...(!isAnchorLink ? { scroll: true } : {})}
                  className={[
                    "relative py-2 transition hover:text-white",
                    isActive ? "text-white" : "text-slate-200",
                  ].join(" ")}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 xl:flex">
            <Link
              href="/website-check"
              scroll
              data-track-event="cta_website_check_click"
              data-track-label="Header Website Check"
              className="hidden rounded-full border border-white/15 px-3 py-2 text-xs font-medium text-slate-200 transition hover:bg-white/10 hover:text-white xl:inline-flex"
            >
              Website-Check
            </Link>
            <Link
              href="/kontakt"
              scroll
              data-track-event="nav_contact_click"
              data-track-label="Header Erstgespraech"
              className="inline-flex min-h-10 items-center rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 px-4 py-2 text-sm font-medium text-white shadow-[0_8px_24px_rgba(99,102,241,0.24)] transition hover:-translate-y-px hover:shadow-[0_12px_28px_rgba(99,102,241,0.3)]"
            >
              Kostenloses Erstgespräch
            </Link>
          </div>

          <button
            type="button"
            ref={buttonRef}
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-slate-100 transition hover:bg-white/8 xl:hidden"
          >
            {open ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-40 xl:hidden">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

          <div
            ref={menuRef}
            className="absolute inset-x-0 top-16 border-b border-white/10 bg-[#060b16]/98 shadow-[0_24px_70px_rgba(0,0,0,0.35)] backdrop-blur-xl lg:top-[4.5rem]"
          >
            <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 pb-6 pt-4 text-sm sm:px-6 lg:px-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  {...(!link.href.includes("#") ? { scroll: true } : {})}
                  className="rounded-xl px-4 py-3 text-slate-200 transition hover:bg-white/[0.06] hover:text-white"
                >
                  {link.label}
                </Link>
              ))}

              <div className="mt-3 border-t border-white/10 pt-3">
                <Link
                  href="/website-check"
                  data-track-event="cta_website_check_click"
                  data-track-label="Mobile Header Website Check"
                  className="cta-secondary mb-3"
                >
                  Kostenloser Website-Check
                </Link>
                <Link
                  href="/kontakt"
                  data-track-event="nav_contact_click"
                  data-track-label="Mobile Header Erstgespraech"
                  className="cta-primary"
                >
                  Kostenloses Erstgespräch
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
