"use client";
import { useEffect } from "react";

/** Nativer Smooth-Scroll (keine externe Lib nötig) */
export default function SmoothScroll() {
  useEffect(() => {
    const el = document.documentElement;
    const prev = el.style.scrollBehavior;
    el.style.scrollBehavior = "smooth";
    return () => {
      el.style.scrollBehavior = prev;
    };
  }, []);
  return null;
}
