"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Phone, MessageCircle } from "lucide-react";

const PHONE_HREF = "tel:+4915111956479";
const WHATSAPP_HREF = "https://wa.me/4915111956479";

// Routen, auf denen die Floating-CTAs komplett ausgeblendet werden sollen
const HIDE_ROUTES = ["/kontakt", "/impressum", "/datenschutz"];

export default function MobileQuickActions() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  const isHiddenRoute = HIDE_ROUTES.some((route) => pathname.startsWith(route));

  useEffect(() => {
    // Auf den "Hidden"-Routen alles ausblenden und keine Listener setzen
    if (isHiddenRoute) {
      setVisible(false);
      return;
    }

    const SHOW_SCROLL_Y = 200; // ab wann generell anzeigen
    const FOOTER_THRESHOLD = 160; // Abstand zum Seitenende, ab dem ausgeblendet wird

    let contactInView = false;

    const computeBottomDistance = () => {
      const doc = document.documentElement;
      const body = document.body;
      const scrollTop = window.scrollY || doc.scrollTop || body.scrollTop || 0;
      const viewport = window.innerHeight;
      const fullHeight = Math.max(
        body.scrollHeight,
        doc.scrollHeight,
        body.offsetHeight,
        doc.offsetHeight,
        body.clientHeight,
        doc.clientHeight
      );
      return fullHeight - (scrollTop + viewport);
    };

    const sync = () => {
      const nearFooter = computeBottomDistance() < FOOTER_THRESHOLD;
      const shouldShow =
        window.scrollY > SHOW_SCROLL_Y && !nearFooter && !contactInView;
      setVisible(shouldShow);
    };

    const onScroll = () => sync();
    const onResize = () => sync();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    // Kontakt-Sektion auf der Startseite beobachten (#kontakt)
    const el = document.querySelector("#kontakt");
    const io = el
      ? new IntersectionObserver(
          (entries) => {
            contactInView = entries.some((e) => e.isIntersecting);
            sync();
          },
          { rootMargin: "0px 0px -40% 0px", threshold: 0.01 }
        )
      : null;

    if (el && io) io.observe(el);

    // Initialer Zustand
    sync();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      io?.disconnect();
    };
  }, [isHiddenRoute]);

  // Nach dem Hook: hier ist ein conditional return ok
  if (isHiddenRoute) return null;

  return (
    <div
      className={[
        "md:hidden fixed inset-x-3 z-50",
        // nah am unteren Rand + Safe Area
        "bottom-[calc(env(safe-area-inset-bottom)_+_6px)]",
        "transition-all duration-250",
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-3 pointer-events-none",
      ].join(" ")}
    >
      <div className="pointer-events-auto mx-auto max-w-md rounded-full bg-black/80 backdrop-blur-md border border-white/15 shadow-[0_10px_30px_-10px_rgba(0,0,0,.9)] p-1 flex gap-1">
        {/* 📞 Telefon – schwarzer Button */}
        <a
          href={PHONE_HREF}
          className="flex-1 inline-flex items-center justify-center gap-2 rounded-full px-3 py-2 bg-black text-white text-sm font-medium border border-white/15 active:scale-[0.98] transition-transform"
        >
          <Phone className="w-4 h-4" />
          Anrufen
        </a>

        {/* 💬 WhatsApp – Magenta-Gradient */}
        <a
          href={WHATSAPP_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 rounded-full px-3 py-2 bg-gradient-to-r from-pink-500 via-fuchsia-500 to-violet-500 text-white text-sm font-medium shadow-sm active:scale-[0.98] transition-transform"
        >
          <MessageCircle className="w-4 h-4" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
