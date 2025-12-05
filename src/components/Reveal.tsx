"use client";

import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number; // wird ignoriert, bleibt aber für Kompatibilität
  y?: number;
  once?: boolean;
};

export default function Reveal({ children }: Props) {
  // Kein Motion, keine InView-Logik – Inhalt wird direkt gerendert
  return <>{children}</>;
}
