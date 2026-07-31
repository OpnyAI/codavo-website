import FAQAccordion from "@/components/FAQAccordion";
import Footer from "@/components/Footer";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  path: "/faq",
  title: "FAQ | Codavo Webstudio",
  description: "Antworten zu Ablauf, Budget, Zeitplan, Technik und Zusammenarbeit bei Website- und Softwareprojekten.",
});

const faqs = [
  { q: "Wie entsteht das Angebot für eine Website?", a: "Zuerst klären wir im kostenlosen Erstgespräch Ausgangslage, Ziele, Inhalte, Funktionen und den gewünschten Anfrageweg. Daraus entsteht ein nachvollziehbares Angebot, das zum tatsächlichen Projektumfang passt." },
  { q: "In welchen Regionen arbeitet Codavo?", a: "Codavo arbeitet mit Unternehmen in ganz Deutschland und der DACH-Region. Projekttermine finden digital oder nach Absprache persönlich statt." },
  { q: "Wie läuft der Projektprozess ab?", a: "Der Prozess beginnt mit einem strukturierten Briefing zu Zielen, Zielgruppen und Inhalten. Danach folgen Konzeption, Design, technische Umsetzung und Qualitätssicherung vor dem Launch." },
  { q: "Wie lange dauert die Entwicklung einer Website?", a: "Die Dauer richtet sich nach Umfang, Inhalten, Funktionen und Freigaben. Zu Projektbeginn erhalten Sie einen realistischen Zeitplan mit nachvollziehbaren Meilensteinen." },
  { q: "Übernimmt Codavo auch bestehende Websites oder Relaunches?", a: "Ja. Codavo prüft bestehende Inhalte, Technik und Nutzerführung und entwickelt daraus einen sinnvollen Optimierungs- oder Relaunch-Umfang." },
  { q: "Wie wird eine Website bei Google und in KI-Suchen sichtbar?", a: "Technische SEO-Grundlagen, schnelle Ladezeiten, semantisches HTML, klare Leistungsseiten und hilfreiche Inhalte schaffen starke Voraussetzungen für gute Platzierungen bei Google und die Einordnung durch KI-Systeme." },
  { q: "Entwickelt Codavo auch Online-Shops?", a: "Shop-Funktionen können je nach Anforderungen und geeignetem System integriert werden. Umfang, Betrieb und Schnittstellen werden vorab projektspezifisch geprüft." },
  { q: "Was passiert nach dem Launch?", a: "Nach dem Launch stehen Hosting-, Wartungs- und Weiterentwicklungspakete zur Verfügung. Der passende Umfang richtet sich nach technischer Grundlage und gewünschtem Betreuungsgrad." },
  { q: "Welche Leistungen sind im Angebot enthalten?", a: "Der genaue Leistungsumfang wird transparent im Angebot definiert. Möglich sind Strategie, UX/UI, Entwicklung, SEO-/AEO-/LLMO-Grundlagen, Kontaktfunktionen und ein Tracking-Grundsetup nach Bedarf und passend zur Einwilligungslogik." },
  { q: "Bietet Codavo Hosting und Wartung an?", a: "Ja. Der passende Betreuungsumfang richtet sich nach technischer Grundlage, Änderungsbedarf und gewünschter Reaktionszeit und wird im Angebot transparent beschrieben." },
  { q: "Ist eine langfristige Zusammenarbeit möglich?", a: "Ja. Websites und digitale Systeme können über Wartung, neue Landingpages, zusätzliche Funktionen oder strukturierte Optimierungsschritte weiterentwickelt werden." },
  { q: "Was unterscheidet Codavo von klassischen Webdesign-Agenturen?", a: "Codavo verbindet Website-Strategie, UX/UI und individuelle Next.js-Entwicklung mit einer klaren Projektstruktur. Die passende Lösung wird am Geschäftsziel und nicht an einer möglichst langen Featureliste ausgerichtet." },
];

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <>
      <main className="min-h-screen pb-20 pt-28 md:pt-32 lg:pt-36">
        <div className="container section mt-10 md:mt-6 lg:mt-4">
          <h1 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">FAQ Webdesign & Websites – Häufige Fragen</h1>
          <p className="mt-4 max-w-2xl text-slate-300">Antworten auf häufige Fragen zu Webdesign, Web-Apps, Projektumfang, Ablauf und langfristiger Betreuung.</p>
          <div className="mt-10"><FAQAccordion items={faqs} /></div>
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </main>
      <Footer />
    </>
  );
}
