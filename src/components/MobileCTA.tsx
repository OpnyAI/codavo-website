"use client";

import { useEffect, useState } from "react";
import { Phone, MessageCircle } from "lucide-react";

const PHONE_TEL = "+4915111956479";
const WHATSAPP_INTL = "4915111956479"; // ohne + für wa.me

export default function MobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const SHOW_SCROLL_Y = 200;
    const FOOTER_THRESHOLD = 160;

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

    sync();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      io?.disconnect();
    };
  }, []);

  return (
    <div
      className={[
        "md:hidden fixed inset-x-4 z-50",
        // etwas näher an den unteren Rand gesetzt (8px statt 16px)
        "bottom-[calc(env(safe-area-inset-bottom)_+_8px)]",
        "transition-all duration-300",
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-3 pointer-events-none",
      ].join(" ")}
    >
      <div className="pointer-events-auto mx-auto max-w-sm rounded-2xl bg-white/8 backdrop-blur-md border border-white/10 shadow-[0_8px_28px_-6px_rgba(0,0,0,.45)] p-2 flex gap-2 justify-center">
        {/* 📞 Telefon */}
        <a
          href={`tel:${PHONE_TEL}`}
          className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl px-3 py-2 bg-white/10 hover:bg-white/15 active:bg-white/20 text-white text-sm font-medium"
        >
          <Phone className="w-4 h-4" />
          Anrufen
        </a>

        {/* 💬 WhatsApp */}
        <a
          href={`https://wa.me/${WHATSAPP_INTL}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl px-3 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-95 active:opacity-90 text-white text-sm font-medium"
        >
          <MessageCircle className="w-4 h-4" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
