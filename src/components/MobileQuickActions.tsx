"use client";

import { useEffect, useRef, useState } from "react";
import { Phone, MessageCircle } from "lucide-react";
import Link from "next/link";

const TEL = "+49-0000-000000"; // <— DEINE NUMMER
const WHATSAPP = "https://wa.me/4900000000000"; // <— DEIN LINK

export default function MobileQuickActions() {
  const [hidden, setHidden] = useState(false);
  const ticking = useRef(false);

  useEffect(() => {
    const footerEl =
      document.querySelector("footer, [data-footer], [role='contentinfo']") ||
      null;

    const SPACER = 24; // px Abstand, wann wir „am Ende“ sind

    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        const scrollBottom = window.scrollY + window.innerHeight;
        const docHeight = document.documentElement.scrollHeight;

        // 1) Fallback: nahe Seitenende?
        const nearEnd = scrollBottom >= docHeight - SPACER;

        // 2) Falls „footer“ existiert, zusätzlich prüfen ob im Viewport
        let footerVisible = false;
        if (footerEl) {
          const rect = footerEl.getBoundingClientRect();
          footerVisible = rect.top < window.innerHeight && rect.bottom > 0;
        }

        setHidden(nearEnd || footerVisible);
        ticking.current = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // initial
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`md:hidden fixed inset-x-0 bottom-0 z-[60] transition-transform duration-300
      ${hidden ? "translate-y-full" : "translate-y-0"}`}
      aria-hidden={hidden}
    >
      <div className="pointer-events-none px-3 pb-[calc(env(safe-area-inset-bottom)+10px)]">
        <div className="mx-auto max-w-md pointer-events-auto">
          <div className="flex gap-2 justify-center">
            <a
              href={`tel:${TEL.replace(/\s+/g, "")}`}
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-black/50 ring-1 ring-white/15 text-white px-4 py-2.5 backdrop-blur-sm"
            >
              <Phone size={16} />
              <span>Anrufen</span>
            </a>
            <Link
              href={WHATSAPP}
              target="_blank"
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-4 py-2.5"
            >
              <MessageCircle size={16} />
              <span>WhatsApp</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
