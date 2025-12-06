import type { Metadata } from "next";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "FAQ – Häufige Fragen | Codavo Webstudio",
  description:
    "Antworten zu Kosten, Ablauf, Dauer (1–4 Wochen) und SEO – alles Wichtige zu Websites & Web-Apps mit Codavo Webstudio für Kund:innen in Deutschland und der DACH-Region.",
};

const faqs = [
  {
    q: "Was kostet eine Website bei Codavo Webstudio?",
    a: "Das hängt vom Umfang und der Komplexität ab. Kleine Websites beginnen meist ab etwa 1.500–2.000 €, während umfangreichere Projekte oder Web-Apps individuell kalkuliert werden. Nach einem kurzen Kennenlerngespräch erhältst du ein transparentes, verbindliches Angebot.",
  },
  {
    q: "In welchen Regionen arbeitet ihr?",
    a: "Wir arbeiten remote mit Kund:innen in ganz Deutschland und der gesamten DACH-Region. Persönliche Termine sind im Großraum Stuttgart möglich, die meisten Projekte laufen aber effizient digital.",
  },
  {
    q: "Wie läuft der Projektprozess ab?",
    a: "Wir starten mit einem strukturierten Briefing, definieren Ziele, Zielgruppen und Inhalte. Danach folgen Konzeption und Design, anschließend die technische Umsetzung. Vor dem Go-Live testen wir Performance, Darstellung auf Mobilgeräten und SEO-Grundlagen.",
  },
  {
    q: "Wie lange dauert die Entwicklung meiner Website?",
    a: "Je nach Umfang liegt die typische Dauer bei etwa 1–4 Wochen vom Start bis zum Launch. Unser Fokus liegt auf klaren Entscheidungen, schlanken Prozessen und kurzen Feedbackschleifen – Geschwindigkeit ist ein wichtiger Teil unseres Angebots.",
  },
  {
    q: "Übernehmt ihr auch bestehende Websites oder Relaunches?",
    a: "Ja, wir modernisieren bestehende Auftritte, migrieren Inhalte und optimieren Technik, SEO und UX. Auch Teilrelaunches (z. B. Design, Struktur oder Ladezeit) sind möglich.",
  },
  {
    q: "Wie wird meine Website bei Google sichtbar?",
    a: "Bereits beim Aufbau achten wir auf SEO-Technik, schnelle Ladezeiten, strukturierte Inhalte und semantische HTML-Struktur. Auf Wunsch unterstützen wir zusätzlich bei lokaler Sichtbarkeit und weiteren SEO-Maßnahmen.",
  },
  {
    q: "Erstellt ihr auch Online-Shops?",
    a: "Ja. Wir entwickeln performante Shops auf Basis geeigneter Systeme oder binden Shop-Funktionalitäten in bestehende Setups ein – immer mit Fokus auf Conversion, Usability und Performance.",
  },
  {
    q: "Was passiert nach dem Launch?",
    a: "Nach dem Go-Live stehen wir für Wartung, Support und Weiterentwicklung zur Verfügung. Dazu zählen z. B. kleinere Anpassungen, neue Unterseiten, technische Updates oder Optimierungen.",
  },
  {
    q: "Welche Leistungen sind im Angebot enthalten?",
    a: "Typischerweise: individuelles Design, technische Umsetzung, Performance-Optimierung, SEO-Grundlagen, Basis-Tracking, Kontaktmöglichkeiten und rechtliche Grundkonfiguration (Impressum/Datenschutz – die Inhalte sollten rechtlich geprüft werden).",
  },
  {
    q: "Bietet ihr auch Hosting und Domains an?",
    a: "Wir hosten nicht selbst, übernehmen aber gern die technische Einrichtung bei deinem Anbieter (z. B. IONOS, All-INKL, Vercel oder Netlify) und verbinden Domain, E-Mail und SSL-Zertifikat.",
  },
  {
    q: "Kann ich mit euch langfristig zusammenarbeiten?",
    a: "Ja. Viele Projekte entwickeln sich weiter – neue Landingpages, zusätzliche Funktionen oder Optimierungen. Wir können das flexibel über Stundenkontingente oder klare Pakete abbilden.",
  },
  {
    q: "Was unterscheidet Codavo Webstudio von anderen Webdesign-Agenturen?",
    a: "Wir kombinieren klares, modernes Design mit einem performanten Tech-Stack und einem Fokus auf Geschwindigkeit. Statt langer, schwerfälliger Projekte setzen wir auf kurze Wege, schnelle Iterationen und Ergebnisse, die messbar etwas bringen.",
  },
];

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <main className="min-h-screen pt-28 md:pt-32 lg:pt-36 pb-20">
      <div className="container mt-10 md:mt-6 lg:mt-4">
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-white">
          FAQ – Häufige Fragen
        </h1>
        <p className="mt-4 text-slate-300 max-w-2xl">
          Hier findest du Antworten auf die häufigsten Fragen rund um unsere
          Webdesign- und Web-App-Projekte für Kund:innen in Deutschland und der
          DACH-Region.
        </p>

        <div className="mt-10">
          <FAQAccordion items={faqs} />
        </div>
      </div>

      {/* Rich Snippets für Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
