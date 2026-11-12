# Technische SEO-, GAIO- und AEO-Prüfung

Stand: 12. November 2026. Geprüft im primären Repository Website/Code sowie auf https://www.codavo-webstudio.de/.

## Verifizierter Ausgangsstand

- Öffentliche HTML-Prüfung: 93 Seiten und 47 verlinkte Dateien, keine Fehler bei Status, Canonical, H1-Anzahl, Metadaten, internen Links, Ankern und JSON-LD-Syntax.
- robots.txt erlaubt Suchcrawler. Öffentliche Abrufe mit User-Agent Googlebot, Bingbot, OAI-SearchBot und PerplexityBot lieferten HTTP 200 ohne X-Robots-Tag-Sperre. Das ist ein Abrufcheck, kein Nachweis eines echten Crawls aus den IP-Netzen der Anbieter.
- HTTP-, alternative Domain- und Nicht-www-Einstiege leiten zur HTTPS-Hauptdomain weiter.
- Search Console: bestätigter Inhaber der Domain-Property codavo-webstudio.de; Übersicht zeigt 70 indexierte und 6 nicht indexierte Seiten. Diese zeitversetzten Zahlen sind keine vollständige Bestandsliste des aktuellen Releases.
- URL-Prüfung für /automatisierung: vor dieser Maßnahme nicht indexiert, URL ist Google nicht bekannt, keine zugehörige Sitemap erkannt.
- Eingereichte Sitemap: https://www.codavo-webstudio.de/sitemap.xml, Status erfolgreich, zuletzt gelesen 09.07.2026, 85 erkannte Seiten.
- Generative KI-Funktionen der Google Suche: Einschließen ist ausgewählt.
- Core Web Vitals: keine ausreichenden Felddaten in der Search Console. Keine Performancebewertung oder Punktzahl daraus ableitbar.

## Umgesetzte Änderungen

- Eindeutige H1 zur KI-Automatisierung für den industriellen Mittelstand.
- Sichtbare Kurzantwort zu KI-Automatisierung und Abgrenzung zu regelbasierter Automatisierung.
- Verbundene WebPage- und Service-Daten auf fünf KI-Seiten, Leistungskatalog der vier Angebote auf der zentralen Seite, sichtbare und strukturierte Breadcrumbs.
- Präzise Seitentitel für Prozessautomatisierung, CRM-Automatisierung, KI-Beratung und individuelle KI-Lösungen.
- Direkte thematische Verlinkung aus dem Wissensbereich.
- Explizite Freigabe von Text-, Bild- und Videovorschauen bei indexierbaren Seiten; bestehende noindex-Seiten bleiben ausgeschlossen.
- Tatsächliche Änderungsdaten der betroffenen KI-Seiten in der Sitemap aktualisiert. Keine erfundenen Crawling- oder Publikationsdaten.
- Keine Änderung an Startseitenpositionierung, Funnel, Formularvalidierung, Einwilligung oder Tracking.

## Prüfungen

Produktionsbuild inklusive TypeScript und Lint erfolgreich. scripts/check-seo.mjs prüft ausgeliefertes HTML, verknüpfte Schema-IDs, Canonicals, Vorschau-Freigaben, Sitemap, robots.txt, Webdesign-Startseite und siebenstufigen Funnel. Versand und Pflichtfelder mit isoliertem Mailanbieter-Mock erfolgreich; keine Testbewerbung gesendet.

## Quellen und Grenzen

- https://developers.google.com/search/docs/appearance/ai-features
- https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
- https://support.google.com/webmasters/answer/16908024?hl=en
- https://developers.openai.com/api/docs/bots

Google entscheidet über Crawling, Indexierung und Ranking. Sitemap-Einreichung und Indexierungsantrag sind keine Bestätigung einer erfolgten Aufnahme. FAQ- und Service-Daten garantieren weder Rich Results noch Erwähnungen durch KI-Systeme.
