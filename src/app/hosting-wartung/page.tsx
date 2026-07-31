import ServiceLandingPage from "@/components/content/ServiceLandingPage";
import { createPageMetadata } from "@/lib/seo";
export const metadata = createPageMetadata({ path: "/hosting-wartung", title: "Hosting, Wartung und Updates für Websites | Codavo", description: "Betreuter Betrieb, Wartung, Updates und Weiterentwicklung für professionelle Unternehmenswebsites." });
const faqs = [
  { q: "Warum ist Website-Wartung wichtig?", a: "Wartung hält eine Website technisch stabil, aktuell und zuverlässig. Sie hilft, Fehler und veraltete Abhängigkeiten früh zu erkennen." },
  { q: "Was gehört zur Wartung?", a: "Je nach Modell gehören Updates, Funktionsprüfungen, Monitoring, Performance-Kontrolle und kleinere technische Anpassungen dazu." },
  { q: "Übernimmt Codavo auch das Hosting?", a: "Ja. Codavo kann Hosting und technische Betreuung zentral koordinieren." },
  { q: "Was ist der Unterschied zwischen Hosting und Wartung?", a: "Hosting ist der technische Betrieb. Wartung umfasst laufende Pflege, Kontrolle und Fehlerbehebung." },
  { q: "Kann ich selbst hosten?", a: "Ja. Vorher sollte geklärt werden, wer Verantwortung für Updates, Betrieb und Fehlerbehebung übernimmt." },
  { q: "Sind Inhaltsänderungen enthalten?", a: "Das hängt vom Betreuungsumfang ab. Größere Inhalte, Seiten und Funktionen werden meist separat geplant." },
  { q: "Wie wird der passende Betreuungsumfang festgelegt?", a: "Der Betreuungsumfang richtet sich nach Website, technischer Komplexität, Änderungsbedarf und gewünschter Reaktionszeit. Im Erstgespräch klären wir, welche Verantwortung Codavo sinnvoll übernehmen soll." },
  { q: "Ist Hosting günstiger bei klassischen Anbietern?", a: "Reines Hosting kann bei klassischen Anbietern günstiger sein. Bei Codavo geht es jedoch nicht nur um Speicherplatz, sondern um technische Betreuung, Wartung, Prüfung, Ansprechpartner und Weiterentwicklung." },
  { q: "Übernimmt Codavo auch Tracking und Auswertung?", a: "Je nach Betreuungsumfang kann Codavo Performance- und Tracking-Daten prüfen und daraus Optimierungsvorschläge ableiten. Tracking wird dabei projektbezogen und passend zur Einwilligungslogik umgesetzt, zum Beispiel mit Google Analytics, Google Ads Conversion Tracking oder anderen geeigneten Tools nach Bedarf." },
  { q: "Kann Codavo bestehende Websites übernehmen?", a: "Das ist nach Prüfung der technischen Grundlage, Systeme und Wartbarkeit häufig möglich." },
];
export default function Page() { return <ServiceLandingPage path="/hosting-wartung" eyebrow="Betrieb · Wartung · Weiterentwicklung" h1="Hosting, Wartung und Updates für professionelle Websites" intro="Eine professionelle Website endet nicht mit dem Launch. Codavo unterstützt beim zuverlässigen Betrieb, bei Updates, Anpassungen und Weiterentwicklung." directAnswer="Hosting stellt den Betrieb bereit; Wartung hält Technik und Funktionen aktuell. Ein betreutes Modell bündelt Verantwortung und schafft klare Ansprechpartner." serviceName="Hosting und Website-Wartung" serviceDescription="Hosting, Wartung, Updates und technische Betreuung für professionelle Websites." sections={[
  { title: "Betreuung nach dem Launch", text: "Regelmäßige Kontrollen und klare Zuständigkeiten reduzieren das Risiko unbemerkter technischer Probleme." },
  { title: "Hosting", text: "Die technische Plattform wird passend zur Website gewählt und für zuverlässigen, performanten Betrieb eingerichtet." },
  { title: "Wartung und Updates", text: "Abhängigkeiten, Funktionen und zentrale Nutzerwege werden im vereinbarten Umfang geprüft und aktualisiert." },
  { title: "Technische Anpassungen", text: "Kleinere Änderungen lassen sich planbar umsetzen; größere Funktionen werden als eigene Erweiterung konzipiert." },
  { title: "Weiterentwicklung", text: "Neue Leistungsseiten, Landingpages, Funnel oder Schnittstellen können auf einer sauberen Grundlage ergänzt werden." },
  { title: "Betreuungsmodelle", text: "Umfang und Reaktionswege richten sich nach Kritikalität, Änderungsbedarf und technischer Komplexität." },
]} relatedLinks={[{ href: "/webdesign", label: "Neue Website", description: "Professionelle Grundlage schaffen." },{ href: "/kontakt", label: "Kostenloses Erstgespräch", description: "Ausgangslage und nächsten Schritt klären." },{ href: "/wissen/individuelle-website-vs-baukasten", label: "Individuell oder Baukasten?", description: "Technische Grundlagen vergleichen." }]} faqs={faqs} />; }
