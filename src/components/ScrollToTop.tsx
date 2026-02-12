"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    try {
      window.history.scrollRestoration = "manual";
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    if (window.location.hash) return;

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto" as ScrollBehavior,
    });
  }, [pathname]);

  return null;
}
