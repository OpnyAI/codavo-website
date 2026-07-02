"use client";

import Link from "next/link";
import TrackedContactLink from "@/components/TrackedContactLink";

export default function Contact() {
  const PHONE_DISPLAY = "+49 1511 195 64 79";
  const PHONE_TEL = "+4915111956479";
  const WHATSAPP = "+4915111956479";
  const EMAIL = "kontakt@codavo-webstudio.de";

  const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(
    "Anfrage Strategie-Call: Website / Softwarelösung / digitales System",
  )}&body=${encodeURIComponent(
    "Hallo Codavo,\n\nich möchte ein Strategiegespräch für ein digitales System buchen.\n\nViele Grüße\n",
  )}`;

  const wa = `https://wa.me/${WHATSAPP.replace(
    /\D/g,
    "",
  )}?text=${encodeURIComponent(
    "Hallo! Ich möchte ein Strategiegespräch zu einer Website- und Softwarelösung buchen.",
  )}`;

  const tel = `tel:${PHONE_TEL}`;

  return (
    <section id="kontakt" className="section section--alt scroll-mt-24">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white">
            Strategiegespräch vereinbaren
          </h2>
          <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
            Sprechen wir über Ihre Ziele, Engpässe und den effizientesten Weg zu
            einem skalierbaren digitalen System.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <TrackedContactLink
            url={tel}
            dataTrackEvent="cta_contact_click"
            dataTrackLabel="Kontakt Telefon"
            className="card group hover:-translate-y-1 transition"
            ariaLabel="Anrufen"
            contactMethod="phone"
          >
            <div className="text-sm text-slate-400">Telefon</div>
            <div className="mt-1 text-white text-lg font-medium">
              {PHONE_DISPLAY}
            </div>
            <div className="mt-3 text-slate-300 text-sm">
              Direkt sprechen und erste Prioritäten in wenigen Minuten klären.
            </div>
          </TrackedContactLink>

          <TrackedContactLink
            url={wa}
            dataTrackEvent="cta_contact_click"
            dataTrackLabel="Kontakt WhatsApp"
            className="card group hover:-translate-y-1 transition"
            ariaLabel="WhatsApp Chat"
            contactMethod="whatsapp"
          >
            <div className="text-sm text-slate-400">WhatsApp</div>
            <div className="mt-1 text-white text-lg font-medium">
              Chat starten
            </div>
            <div className="mt-3 text-slate-300 text-sm">
              Schnell Rückfragen klären oder Use-Cases per Nachricht teilen.
            </div>
          </TrackedContactLink>

          <TrackedContactLink
            url={mailto}
            dataTrackEvent="cta_contact_click"
            dataTrackLabel="Kontakt E-Mail"
            className="card group hover:-translate-y-1 transition"
            ariaLabel="E-Mail senden"
            contactMethod="email"
          >
            <div className="text-sm text-slate-400">E-Mail</div>
            <div className="mt-1 text-white text-lg font-medium">{EMAIL}</div>
            <div className="mt-3 text-slate-300 text-sm">
              Ideal für strukturierte Anforderungen und kurze Projektkontexte.
            </div>
          </TrackedContactLink>
        </div>

        <p className="mt-6 text-xs text-slate-400 text-center">
          Hinweis: Mit Klick auf eine Kontaktoption erklärst du dich mit unserer{" "}
          <Link href="/datenschutz" className="underline hover:text-slate-300">
            Datenschutzerklärung
          </Link>{" "}
          einverstanden. Anbieterkennzeichnung:{" "}
          <Link href="/impressum" className="underline hover:text-slate-300">
            Impressum
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
