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
  { q: "Was kostet individuelle Softwareentwicklung?", a: "Die Kosten hängen von Funktionen, Rollen, Daten, Schnittstellen und Betriebsanforderungen ab. Nach der Analyse erhalten Sie einen priorisierten Umfang und einen nachvollziehbaren Budgetrahmen." },
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
