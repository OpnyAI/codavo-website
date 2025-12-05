import type { Metadata } from "next";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "FAQ – Häufige Fragen | Lunova",
  description:
    "Antworten zu Kosten, Ablauf, CMS und SEO – alles, was du über Webdesign & Webentwicklung bei Lunova wissen musst.",
};

const faqs = [
  {
    q: "Was kostet eine Website bei Lunova?",
    a: "Das hängt vom Umfang und der Komplexität ab. Kleine Websites beginnen ab etwa 1.500 €, während umfangreiche Projekte oder Web-Apps individuell kalkuliert werden. Nach einem kurzen Kennenlerngespräch erhältst du ein transparentes, verbindliches Angebot.",
  },
  {
    q: "Wie läuft der Projektprozess ab?",
    a: "Wir starten mit einem Briefing, definieren Ziele und Struktur, entwickeln dann Design und Inhalte, bevor die technische Umsetzung folgt. Nach dem Go-Live unterstützen wir dich auf Wunsch weiter mit Wartung, SEO und Optimierung.",
  },
  {
    q: "Wie lange dauert die Entwicklung meiner Website?",
    a: "Die Dauer hängt vom Umfang ab – in der Regel zwischen 4 und 8 Wochen vom ersten Gespräch bis zum Launch. Express-Projekte sind nach Absprache möglich.",
  },
  {
    q: "Kann ich meine Website später selbst bearbeiten?",
    a: "Ja. Wir setzen auf pflegbare Systeme wie Headless CMS (z. B. Sanity) oder WordPress, damit du Texte und Bilder jederzeit selbst anpassen kannst – ohne Programmierkenntnisse.",
  },
  {
    q: "Übernehmt ihr auch bestehende Websites oder Relaunches?",
    a: "Ja, wir modernisieren bestehende Auftritte, migrieren Inhalte und optimieren Technik, SEO und UX. Auch Teilrelaunches (z. B. Design oder Ladezeit) sind möglich.",
  },
  {
    q: "Wie wird meine Website bei Google sichtbar?",
    a: "Bereits beim Aufbau achten wir auf SEO-Technik, schnelle Ladezeiten, strukturierte Inhalte und semantische HTML-Struktur. Auf Wunsch übernehmen wir auch fortlaufende SEO-Betreuung.",
  },
  {
    q: "Erstellt ihr auch Online-Shops?",
    a: "Ja. Wir entwickeln performante Shops auf Basis von Shopify, WooCommerce oder maßgeschneiderten Headless-Setups – immer mit Fokus auf Conversion und Performance.",
  },
  {
    q: "Was passiert nach dem Launch?",
    a: "Nach dem Go-Live stehen wir für Wartung, Support und Weiterentwicklung zur Verfügung. Wir kümmern uns um Sicherheit, Updates und technische Betreuung.",
  },
  {
    q: "Welche Leistungen sind im Angebot enthalten?",
    a: "Standardmäßig: Design, Umsetzung, SEO-Grundlagen, technische Optimierung, CMS-Einrichtung, Performance-Setup und rechtliche Grundkonfiguration (DSGVO, Impressum, Datenschutz).",
  },
  {
    q: "Bietet ihr auch Hosting und Domains an?",
    a: "Wir selbst hosten nicht, aber wir übernehmen gern die technische Einrichtung bei deinem Anbieter (z. B. IONOS, All-INKL, Vercel oder Netlify) und verbinden Domain, E-Mail und SSL-Zertifikat.",
  },
  {
    q: "Kann ich mit euch langfristig zusammenarbeiten?",
    a: "Natürlich. Viele unserer Kunden betreuen wir über Jahre hinweg – mit regelmäßigen Optimierungen, neuen Landingpages, SEO oder Marketing-Integrationen.",
  },
  {
    q: "Was unterscheidet Lunova von anderen Webdesign-Agenturen?",
    a: "Wir kombinieren strategisches Denken, ästhetisches Design und technische Exzellenz. Keine Baukastenseiten, sondern individuelle, performante Lösungen – entwickelt mit Liebe zum Detail.",
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
    <main className="container py-16">
      <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-white">
        FAQ – Häufige Fragen
      </h1>
      <p className="mt-4 text-slate-300 max-w-2xl">
        Hier findest du Antworten auf die häufigsten Fragen rund um unsere
        Webdesign- und Entwicklungsprojekte.
      </p>

      <FAQAccordion items={faqs} />

      {/* Rich Snippets für Google */}
      <script
        type="application/ld+json"
        // @ts-ignore
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
