import Link from "next/link";
import ServiceLandingPage from "@/components/content/ServiceLandingPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  path: "/web-app-entwicklung",
  title: "Individuelle Web-App Entwicklung | Codavo Webstudio",
  description:
    "Individuelle Web-Apps, Kundenportale, Dashboards und interne Tools für Unternehmen – verständlich geplant, sicher entwickelt und langfristig erweiterbar.",
});

const faqs = [
  { q: "Was ist eine Web-App?", a: "Eine Web-App ist eine browserbasierte Anwendung, in der Nutzer Daten bearbeiten und konkrete Aufgaben erledigen. Typische Beispiele sind Portale, Dashboards, Konfiguratoren und interne Tools." },
  { q: "Wann braucht ein Unternehmen eine Web-App?", a: "Eine Web-App ist sinnvoll, wenn Nutzer sich anmelden, Daten bearbeiten oder einen wiederkehrenden Prozess zentral ausführen sollen und eine klassische Website dafür nicht ausreicht." },
  { q: "Was ist der Unterschied zwischen Website und Web-App?", a: "Eine Website informiert und führt zur Kontaktaufnahme. Eine Web-App ergänzt Anmeldungen, Rollen, Datenverarbeitung, Workflows oder Schnittstellen." },
  { q: "Was kostet Web-App-Entwicklung?", a: "Die Kosten hängen von Nutzerrollen, Funktionen, Datenmodellen, Schnittstellen und Sicherheitsanforderungen ab. Nach der Analyse erhalten Sie einen priorisierten Umfang und einen transparenten Budgetrahmen." },
  { q: "Welche Beispiele gibt es für Web-Apps?", a: "Typische Beispiele sind Kundenportale, interne Dashboards, Konfiguratoren, Buchungs- und Service-Systeme sowie klar abgegrenzte SaaS-Anwendungen." },
  { q: "Kann eine Web-App mit einer Website verbunden werden?", a: "Ja. Website und Anwendung können technisch und gestalterisch verbunden werden, während öffentliche Inhalte und geschützte Funktionen sauber getrennt bleiben." },
  { q: "Welche Systeme können angebunden werden?", a: "Technisch geeignete CRM-, ERP-, Buchhaltungs-, Kalender- oder Drittsysteme können über vorhandene Schnittstellen angebunden werden." },
  { q: "Wie läuft ein Web-App-Projekt ab?", a: "Nach Analyse und Priorisierung folgen UX/UI, technische Architektur, iterative Entwicklung, Tests und Launch. Weitere Funktionen werden anschließend anhand realer Nutzung geplant." },
];

export default function WebAppPage() {
  return (
    <ServiceLandingPage
      path="/web-app-entwicklung"
      eyebrow="Portale · Dashboards · interne Tools"
      h1="Web-App Entwicklung für individuelle digitale Abläufe"
      intro="Codavo entwickelt browserbasierte Anwendungen, die Kunden, Teams und Daten in klaren Prozessen zusammenbringen – passend zu Ihren Rollen, Systemen und Zielen."
      directAnswer="Eine individuelle Web-App ist sinnvoll, wenn Standardsoftware einen wichtigen Ablauf nicht sauber abbildet oder Informationen über Tabellen, E-Mails und Einzellösungen verteilt sind."
      serviceName="Web-App Entwicklung"
      serviceDescription="Individuelle Web-Apps, Portale, Dashboards und interne Tools für Unternehmen."
      sections={[
        { title: "Wann eine Web-App sinnvoll ist", text: "Wenn Nutzer sich anmelden, Daten bearbeiten, Status verfolgen oder wiederkehrende Aufgaben in einem zentralen System erledigen sollen." },
        { title: "Typische Anwendungen", text: "Kundenportale, interne Dashboards, Konfiguratoren, Angebotsstrecken, Service-Systeme und klar abgegrenzte SaaS-Produkte." },
        { title: "Vom Prozess zum Funktionsumfang", text: "Zuerst werden Ziele, Nutzergruppen und Engpässe verstanden. Daraus entsteht ein priorisierter Umfang statt einer langen, unklaren Wunschliste." },
        { title: "Schnittstellen und Daten", text: "Bestehende Systeme werden dort angebunden, wo Schnittstellen verfügbar sind und die Integration einen belastbaren Nutzen bietet." },
        { title: "Technische Qualität", text: "React und Next.js, klare Zugriffslogik, wartbare Komponenten und ein passendes Datenmodell schaffen eine erweiterbare Grundlage." },
        { title: "Iterative Weiterentwicklung", text: "Ein sinnvoll abgegrenzter erster Stand wird geprüft und anschließend anhand realer Nutzung und neuer Prioritäten ausgebaut." },
      ]}
      relatedLinks={[
        { href: "/softwareloesungen-fuer-kmu", label: "Software für KMU", description: "Individuelle Systeme im Unternehmenskontext." },
        { href: "/hosting-wartung", label: "Hosting und Wartung", description: "Betrieb und Weiterentwicklung einplanen." },
        { href: "/wissen/website-landingpage-funnel", label: "Website, Landingpage oder Funnel", description: "Die passende digitale Form einordnen." },
      ]}
      beforeFaq={<section className="section section--quiet"><div className="container max-w-5xl"><p className="eyebrow">Web-App als Baustein</p><h2 className="section-title mt-5 text-white">Wenn aus einer Anwendung ein Systembaustein wird</h2><p className="lede mt-6 max-w-3xl">Eine Web-App ist eine konkrete browserbasierte Anwendung. Sobald sie Daten aus Website, Funnel, CRM oder internen Prozessen übernimmt, wird sie Teil einer größeren Architektur.</p><p className="mt-5 max-w-3xl text-sm leading-7 text-slate-400 md:text-base">In diesem Fall hilft die Betrachtung als <Link href="/digitale-systeme" className="font-medium text-indigo-300 transition hover:text-white">digitales Unternehmenssystem</Link>, bevor einzelne Funktionen geplant werden.</p></div></section>}
      faqs={faqs}
      ctaTitle="Sie möchten einen konkreten Prozess digital abbilden?"
      ctaText="Im Erstgespräch klären wir Nutzer, Kernfunktionen und ob eine individuelle Web-App der wirtschaftlich sinnvolle Weg ist."
    />
  );
}
