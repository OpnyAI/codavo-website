import Link from "next/link";
import ServiceLandingPage from "@/components/content/ServiceLandingPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  path: "/softwareloesungen-fuer-kmu",
  title: "Individuelle Softwarelösungen für KMU | Codavo",
  description:
    "Individuelle webbasierte Software für KMU: Prozesse strukturieren, Systeme verbinden und wiederkehrende Arbeit sinnvoll reduzieren.",
});

const faqs = [
  { q: "Was sind individuelle Softwarelösungen für KMU?", a: "Das sind webbasierte Systeme, die auf einen konkreten Prozess, vorhandene Daten und die Rollen eines mittelständischen Unternehmens zugeschnitten werden." },
  { q: "Wann lohnt sich individuelle Software?", a: "Sie lohnt sich, wenn ein relevanter Ablauf dauerhaft durch Tabellen, E-Mails oder unpassende Standardsoftware gebremst wird und der erwartete Nutzen den Entwicklungsaufwand rechtfertigt." },
  { q: "Wie wird der Umfang einer individuellen Softwarelösung ermittelt?", a: "Der Umfang richtet sich nach Prozess, Nutzerrollen, Datenflüssen, Schnittstellen und dem wirtschaftlich sinnvollen ersten Funktionsumfang. Im Erstgespräch klären wir, welches Problem gelöst werden soll und ob eine individuelle Entwicklung dafür der richtige Weg ist." },
  { q: "Welche Prozesse können digitalisiert werden?", a: "Zum Beispiel Angebotsabläufe, Kundenportale, Freigaben, Statusverfolgung, Dokumentenaustausch, interne Aufgaben oder strukturierte Datenerfassung." },
  { q: "Ist individuelle Software besser als Standardsoftware?", a: "Nicht grundsätzlich. Standardsoftware ist sinnvoll, wenn sie den Prozess bereits gut abbildet. Individuelle Entwicklung lohnt sich bei spezifischen, geschäftlich relevanten Anforderungen." },
  { q: "Kann Codavo bestehende Systeme anbinden?", a: "Ja, wenn geeignete Schnittstellen vorhanden sind. Vor der Umsetzung prüfen wir Datenfluss, Verantwortlichkeiten und technische Grenzen." },
  { q: "Wie startet ein Softwareprojekt?", a: "Der Start besteht aus Prozessanalyse, Zielklärung und Priorisierung. Danach wird ein sinnvoll abgegrenzter erster Funktionsumfang geplant, gestaltet, entwickelt und getestet." },
  { q: "Wie bleibt individuelle Software wartbar?", a: "Durch klare Architektur, begrenzte Abhängigkeiten, dokumentierte Schnittstellen, automatisierte Prüfungen sowie einen geregelten Wartungs- und Updateprozess." },
];

export default function SoftwarePage() {
  return (
    <ServiceLandingPage
      path="/softwareloesungen-fuer-kmu"
      eyebrow="Prozesse · Schnittstellen · Automatisierung"
      h1="Individuelle Softwarelösungen für KMU"
      intro="Codavo entwickelt webbasierte Systeme für mittelständische Unternehmen, wenn Standardsoftware wichtige Abläufe nicht verständlich, effizient oder erweiterbar abbildet."
      directAnswer="Individuelle Software lohnt sich nicht für jedes Problem. Sie ist dann sinnvoll, wenn ein wiederkehrender, geschäftlich relevanter Prozess dauerhaft Reibung erzeugt und mit einer passenden Lösung messbar besser steuerbar wird."
      serviceName="Softwarelösungen für KMU"
      serviceDescription="Individuelle webbasierte Software, Schnittstellen und Automatisierung für mittelständische Unternehmen."
      sections={[
        { title: "Bestehende Abläufe verstehen", text: "Vor jeder technischen Entscheidung werden Prozess, Beteiligte, Medienbrüche und tatsächliche Engpässe analysiert." },
        { title: "Standard oder individuell", text: "Wenn ein bestehendes Produkt die Aufgabe wirtschaftlicher löst, ist eine Eigenentwicklung nicht sinnvoll. Individuell wird entwickelt, wenn der Kernprozess spezifisch und relevant ist." },
        { title: "Typische Einsatzfelder", text: "Angebotsprozesse, Kunden- und Serviceportale, interne Freigaben, Datenerfassung, Statussysteme und die Verbindung bestehender Werkzeuge." },
        { title: "KI mit klarem Zweck", text: "KI-Funktionen werden gezielt eingesetzt, wenn sie wiederkehrende Arbeit unterstützen. Nachvollziehbarkeit, Datenschutz und menschliche Kontrolle bleiben Teil des Konzepts." },
        { title: "Schrittweise Umsetzung", text: "Ein priorisierter erster Umfang reduziert Projektrisiko. Weitere Module folgen auf Basis realer Nutzung und wirtschaftlicher Prioritäten." },
        { title: "Langfristiger Betrieb", text: "Wartbare Architektur, dokumentierte Schnittstellen und ein geregelter Betrieb schaffen die Grundlage für verlässliche Weiterentwicklung." },
      ]}
      beforeFaq={<><section className="section section--quiet"><div className="container max-w-6xl"><p className="eyebrow">Arbeitsweise</p><h2 className="section-title mt-5 text-white">Qualität entsteht nicht zufällig</h2><div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">{["Ziele, Rollen und Anforderungen klären", "Prozesse und Datenflüsse nachvollziehbar machen", "Nutzerführung und Bedienlogik planen", "Individuell entwickeln statt Standardabläufe erzwingen", "Schnittstellen und technische Grenzen früh prüfen", "Performance und Stabilität berücksichtigen", "Qualitätssicherung vor dem Launch", "Betreuung und Weiterentwicklung einplanen"].map((item) => (<div key={item} className="rounded-2xl border border-white/8 bg-white/[0.025] p-5 text-sm leading-7 text-slate-300">{item}</div>))}</div></div></section><section className="section section--quiet"><div className="container max-w-5xl"><p className="eyebrow">Software im Unternehmenssystem</p><h2 className="section-title mt-5 text-white">Wenn Software mehrere Abläufe verbindet</h2><p className="lede mt-6 max-w-3xl">Individuelle Software wird besonders wertvoll, wenn sie nicht isoliert entsteht, sondern Web-Apps, Websites, Funnels, Daten und Automatisierungen sinnvoll verbindet.</p><p className="mt-5 max-w-3xl text-sm leading-7 text-slate-400 md:text-base">Für solche übergreifenden Zusammenhänge lohnt sich der Blick auf die <Link href="/digitale-systeme" className="font-medium text-indigo-300 transition hover:text-white">Architektur digitaler Unternehmenssysteme</Link>.</p></div></section></>}
      relatedLinks={[
        { href: "/web-app-entwicklung", label: "Web-App Entwicklung", description: "Portale, Dashboards und interne Tools." },
        { href: "/hosting-wartung", label: "Hosting und Wartung", description: "Betrieb und technische Betreuung." },
        { href: "/cases", label: "Cases", description: "Vorhandene digitale Projekte ansehen." },
      ]}
      faqs={faqs}
      ctaTitle="Welcher Prozess erzeugt heute unnötige Reibung?"
      ctaText="Im Erstgespräch prüfen wir, ob individuelle Software, eine Integration oder eine einfachere organisatorische Lösung der richtige nächste Schritt ist."
    />
  );
}
