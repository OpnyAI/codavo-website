import Link from "next/link";

export default function Contact() {
  // ====== KONFIG (bitte anpassen) ======
  const PHONE_DISPLAY = "+49 1511 195 64 79";
  const PHONE_TEL = "+4915111956479";
  const WHATSAPP = "+4915111956479";
  const EMAIL = "kontakt@codavo-webstudio.de";
  // ====================================

  const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(
    "Anfrage Website / Web-App / Webentwicklung"
  )}&body=${encodeURIComponent(
    "Hallo Codavo Webstudio,\n\nich interessiere mich für eine neue Website oder Web-App bzw. einen Relaunch. Bitte melde dich bei mir.\n\nViele Grüße\n"
  )}`;

  const wa = `https://wa.me/${WHATSAPP.replace(
    /\D/g,
    ""
  )}?text=${encodeURIComponent(
    "Hallo! Ich habe Interesse an einer Website oder Web-App bzw. einem Relaunch."
  )}`;

  const tel = `tel:${PHONE_TEL}`;

  return (
    <section id="kontakt" className="section section-glow-bottom scroll-mt-24">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white">
            Lass uns dein Projekt starten
          </h2>
          <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
            Am liebsten direkt und unkompliziert: Ruf an, schreib eine
            WhatsApp-Nachricht oder eine E-Mail – und wir klären in Ruhe, was du
            brauchst und wie wir dir helfen können.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <a
            href={tel}
            className="card group hover:-translate-y-1 transition"
            aria-label="Anrufen"
          >
            <div className="text-sm text-slate-400">Telefon</div>
            <div className="mt-1 text-white text-lg font-medium">
              {PHONE_DISPLAY}
            </div>
            <div className="mt-3 text-slate-300 text-sm">
              Direkt sprechen – ideal für klare, schnelle Abstimmung.
            </div>
          </a>

          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="card group hover:-translate-y-1 transition"
            aria-label="WhatsApp Chat"
          >
            <div className="text-sm text-slate-400">WhatsApp</div>
            <div className="mt-1 text-white text-lg font-medium">
              Chat starten
            </div>
            <div className="mt-3 text-slate-300 text-sm">
              Perfekt für erste Fragen, Sprachnachrichten oder Links zu
              Beispielen.
            </div>
          </a>

          <a
            href={mailto}
            className="card group hover:-translate-y-1 transition"
            aria-label="E-Mail senden"
          >
            <div className="text-sm text-slate-400">E-Mail</div>
            <div className="mt-1 text-white text-lg font-medium">{EMAIL}</div>
            <div className="mt-3 text-slate-300 text-sm">
              Schick uns kurz Eckdaten, Wünsche und ggf. Seiten, die dir
              gefallen.
            </div>
          </a>
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Codavo Webstudio",
            url: "https://www.codavo-webstudio.de",
            contactPoint: [
              {
                "@type": "ContactPoint",
                contactType: "sales",
                telephone: PHONE_TEL,
                email: EMAIL,
                availableLanguage: ["de"],
              },
            ],
          }),
        }}
      />
    </section>
  );
}
