# Codavo – vorbereiteter Website-Stand für Montag, 9. November 2026

Stand: 9. November 2026. Die Umsetzung liegt im primären Projekt `Website/Code`. Kein Commit, Push oder Deployment wurde ausgeführt. Die lokale Vorschau auf Port 3100 wird aus diesem Projekt bereitgestellt.

## Aktuelle Positionierung

KI-Automatisierung ist das zentrale Angebot auf Leistungsübersicht, Kontakt, FAQ, Wissen und im allgemeinen Footer. Die vier Leistungen werden vor den ergänzenden Website-Angeboten gezeigt. Die Startseite behält ausdrücklich den bisherigen Webdesign-Fokus einschließlich ihres Footer-Texts. Der Header nennt den neuen Bereich „KI-Automatisierung“. Spezielle Website-Leistungsseiten und Referenzen bleiben als solche erhalten.

## Ergebnis

- Startseite: Der bisherige Webdesign-Auftritt wurde aus dem bestehenden Git-Stand wiederhergestellt. Hero, Referenzen, Video, Kundenstimmen, Vorgehen, FAQs und Gestaltung bleiben bestehen. Nur die angefragte Angebotsnavigation und ihre Linkziele wurden angepasst.
- `/automatisierung`: Die neu entwickelte Industriemittelstands-Seite mit Porträts, OPNY-Vorstellung, Potenzialzahlen, Rechner und FAQs liegt vorerst als Unterseite vor.
- `/webdesign`: Die bisherige eigenständige Webdesign-Leistungsseite bleibt erhalten; keine doppelte Kopie der Startseite.
- Vier ausführliche Leistungsseiten: `/prozessautomatisierung`, `/crm-automatisierung`, `/ki-beratung`, `/individuelle-ki-loesungen`. Jede erläutert konkrete Einsatzfelder, Vorgehen, Grenzen und nächste Schritte.
- `/digitale-systeme` wird dauerhaft auf `/automatisierung` weitergeleitet; `/softwareloesungen-fuer-kmu` auf `/individuelle-ki-loesungen`. Die alten Inhaltsseiten wurden entfernt. `/leistungen`, Footer, Software-/Web-App-Seiten, Wissen und regionale Website-Seiten sind entsprechend eingebunden.
- `/faq` enthält die zwölf Automatisierungsfragen und einen eigenen Bereich für Website-Projekte. Die Akkordeons haben eindeutige IDs.
- Kontakt: ursprünglicher siebenstufiger Baulig-Erstgespräch-Funnel vollständig wiederhergestellt, inklusive Pflichttelefonnummer und Qualifizierungsfragen. Ausschließlich die Projektart „KI-Automatisierung“ wurde im Dropdown ergänzt. Anfrage und Bestätigung mit isoliertem Versand geprüft. Auch der Website-Check weist ungültige JSON-Werte kontrolliert zurück.
- Sprunglink zum Inhalt und Schließen des mobilen Menüs per Escape ergänzt. Sitemap und Vorschaubild auf den neuen Stand gebracht.
- Veralteten TMG-Verweis im Impressum auf § 5 DDG aktualisiert und den überholten TMG-Haftungsabsatz entfernt. Maßgebliche Quelle: https://www.gesetze-im-internet.de/ddg/__5.html

## Prüfungen

- `npm ci --ignore-scripts`: erfolgreich im primären Projekt.
- `npm run lint`: erfolgreich.
- `npm run build`: erfolgreich mit Next.js 15.5.29; 101 generierte Build-Einträge.
- Paketprüfung: 0 bekannte Sicherheitslücken nach Patch-Updates und gezielten kompatiblen Korrekturen für PostCSS und minimatch. npm- und pnpm-Sperrdatei synchronisiert.
- `python3 scripts/audit-site.py`: 94 HTML-Seiten und 47 im HTML referenzierte Medien-/Skriptadressen geprüft; keine Fehler bei Statuscodes, H1-Anzahl, Titel/Beschreibung, Canonicals, JSON-LD, internen Links und Sprungzielen. Einzelheiten: `site-audit.json`.
- 20 zentrale Seitentypen mit 390 Pixel Breite geprüft: kein horizontaler Überlauf. Einzelheiten: `mobile-layout-checks.json`. Desktopansichten von Webdesign und Prozessautomatisierung sowie mobile KI-Beratung visuell geprüft.
- Menü geöffnet und mit Escape geschlossen; FAQ geöffnet und auf doppelte IDs geprüft; Kontaktformular bis zum letzten Schritt einschließlich Pflichtfeldvalidierung durchlaufen. Keine Anfrage im Browser abgeschickt.
- `node scripts/check-contact.mjs`: Kontakt- und Website-Check-Backend mit isoliertem Mailanbieter-Mock geprüft. Pflichtfelder, ungültiges JSON, Datenschutzabfrage beim Kontakt, E-Mail-Prüfung, Bot-Feld und erfolgreiche Versandpfade geprüft. Keine externen E-Mails oder Marketingereignisse erzeugt.

## Produktionskonfiguration und tatsächlicher Livegang

Das verbundene Vercel-Projekt `codavo-website` wurde ausschließlich lesend geprüft. Node.js 24.x und Next.js sind konfiguriert. Die Produktionsvariablen für Resend, Website-Check-Absender und -Empfänger sowie Tag Manager sind vorhanden. Die Kontaktanfrage nutzt die bestehenden Website-Check-Versandwerte als vorgesehenen Fallback. Keine Geheimnisse entschlüsselt, heruntergeladen oder in diesem Bericht gespeichert.

Noch nicht durchgeführt: Veröffentlichung dieses Stands, tatsächliche E-Mail-Zustellung aus dem neuen Deployment und Prüfung des ausgelieferten Produktions-Trackings. Diese Prüfungen gehören zum Umschalten auf die produktive Domain. Die lokale Vorschau enthält keine echten Versandzugänge und keine produktiven Trackingvariablen.

Für das Umschalten: vorbereiteten Diff veröffentlichen, erfolgreichen Produktionsbuild abwarten, Webdesign-Startseite und Automatisierungs-Unterseite auf der Domain prüfen, anschließend mit einem ausdrücklich vereinbarten Empfänger den tatsächlichen Formularversand und die Bestätigung testen. Die bestehenden Domain-URLs, Website-Landingpages, Wissensartikel und regionalen Seiten bleiben erhalten.

## Einordnung der Potenzialzahlen

Die Zahlen sind das abgestimmte Modell, keine gemessenen Kundenergebnisse: 40 Personen, 8 manuelle Stunden pro Woche, 50 Euro je Stunde, 48 Wochen pro Jahr, 80 % weniger Bearbeitungszeit, 50 % realisierte Ausgabenvermeidung, 20.000 Euro laufende Kosten und 30.000 Euro Umsetzung; 10 Mio. Euro Umsatz und 800.000 Euro operativer Ausgangsgewinn. Frei werdende Kapazität und tatsächlich entfallende Ausgaben werden in FAQ und Rechner unterschieden. Die Modellannahmen sind auf `/automatisierung` direkt sichtbar.

Die öffentlich geprüfte OPNY-Seite verwendet die Produktnamen NodeX und TrustArch (https://www.opny.ai/). Auf Codavo wird NodeX verlinkt; die zweite Produktbeschreibung bleibt allgemein, ohne eine ungeprüfte AuthenticTrust-Produktadresse zu behaupten.
