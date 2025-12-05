"use client";
import Reveal from "@/components/Reveal";

function Logo({ label }: { label: string }) {
  // Abstraktes, neutrales „Logo“ (inline SVG), wirkt clean
  return (
    <div className="flex items-center justify-center h-10 rounded-md bg-white/5 border border-white/10">
      <svg width="90" height="18" viewBox="0 0 90 18" className="opacity-80">
        <rect x="0" y="6" width="30" height="6" rx="3" fill="white" />
        <rect x="36" y="6" width="18" height="6" rx="3" fill="white" />
        <rect x="58" y="6" width="32" height="6" rx="3" fill="white" />
      </svg>
      <span className="sr-only">{label}</span>
    </div>
  );
}

export default function Trust() {
  return (
    <section id="trust" className="section section-glow-bottom">
      <div className="container">
        <Reveal>
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white">
              Ausgewählte Kunden & Stimmen
            </h2>
            <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
              Wir arbeiten mit Unternehmen, die digital wachsen wollen – von KMU
              bis Tech-Startup. Hier ein Auszug.
            </p>
          </div>
        </Reveal>

        {/* Logos */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          <Logo label="Kunde 1" />
          <Logo label="Kunde 2" />
          <Logo label="Kunde 3" />
          <Logo label="Kunde 4" />
          <Logo label="Kunde 5" />
          <Logo label="Kunde 6" />
        </div>

        {/* Zitate */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <Reveal delay={0.05}>
            <blockquote className="card">
              <p className="text-slate-200">
                „Klare Struktur, modernes Design – und wir erhalten spürbar mehr
                qualifizierte Anfragen.“
              </p>
              <footer className="mt-3 text-sm text-slate-400">
                Geschäftsführer, Dienstleistungs-KMU
              </footer>
            </blockquote>
          </Reveal>

          <Reveal delay={0.1}>
            <blockquote className="card">
              <p className="text-slate-200">
                „Die Seite ist schnell, SEO-ready und wir können Inhalte selbst
                pflegen. Genau, was wir brauchten.“
              </p>
              <footer className="mt-3 text-sm text-slate-400">
                Produktlead, Tech-Startup
              </footer>
            </blockquote>
          </Reveal>

          <Reveal delay={0.15}>
            <blockquote className="card">
              <p className="text-slate-200">
                „Fokussiert, zuverlässig, professionell – Zusammenarbeit auf
                Agenturniveau.“
              </p>
              <footer className="mt-3 text-sm text-slate-400">
                Inhaber, regionales Unternehmen
              </footer>
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
