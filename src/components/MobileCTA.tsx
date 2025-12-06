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
        "bottom-[calc(env(safe-area-inset-bottom)_+_10px)]",
        "transition-all duration-300",
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-3 pointer-events-none",
      ].join(" ")}
    >
      <div className="pointer-events-auto mx-auto max-w-md rounded-3xl bg-slate-950/80 backdrop-blur-xl border border-white/12 shadow-[0_18px_40px_-18px_rgba(0,0,0,0.85)] px-2 py-2 flex items-center gap-2">
        {/* Label links – optional, gibt Kontext */}
        <div className="hidden xs:flex flex-col flex-[0.9] pl-1">
          <span className="text-[10px] uppercase tracking-[0.14em] text-slate-400">
            Direktkontakt
          </span>
          <span className="text-[11px] text-slate-300">
            Rückmeldung meist in 24–48&nbsp;Std.
          </span>
        </div>

        {/* Button-Gruppe */}
        <div className="flex flex-1 xs:flex-[1.1] gap-2">
          {/* 📞 Telefon */}
          <a
            href={`tel:${PHONE_TEL}`}
            aria-label="Anrufen"
            className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-2xl px-3 py-2 bg-white/6 hover:bg-white/10 active:bg-white/15 text-white text-[13px] font-medium transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>Anrufen</span>
          </a>

          {/* 💬 WhatsApp */}
          <a
            href={`https://wa.me/${WHATSAPP_INTL}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Per WhatsApp schreiben"
            className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-2xl px-3 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:brightness-110 active:brightness-95 text-white text-[13px] font-medium shadow-[0_0_0_1px_rgba(255,255,255,0.05)] transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
