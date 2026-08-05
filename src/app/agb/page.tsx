import Footer from "@/components/Footer";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  path: "/agb",
  title: "AGB | Codavo Webstudio",
  description:
    "Allgemeine Geschäftsbedingungen von Codavo Webstudio für Leistungen gegenüber Unternehmen.",
  noIndex: true,
});

const sectionClassName = "space-y-3";
const headingClassName = "text-lg font-semibold text-white";
const paragraphClassName = "text-slate-300";

export default function AgbPage() {
  return (
    <>
      <main className="min-h-screen pb-20 pt-28 md:pt-32 lg:pt-36">
        <div className="container mt-10 md:mt-6 lg:mt-4">
          <h1 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Allgemeine Geschäftsbedingungen
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300 md:text-base">
            für Leistungen von Codavo Webstudio gegenüber Unternehmern
          </p>

          <div className="mt-10 max-w-4xl space-y-10 text-sm leading-7 text-slate-200 md:text-base">
            <section className={sectionClassName}>
              <h2 className={headingClassName}>1. Geltungsbereich</h2>
              <p className={paragraphClassName}>
                Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge
                zwischen Codavo Webstudio, Inhaber Mehmet Çatalsakal,
                Naumannstraße 3, 73663 Berglen (nachfolgend „Codavo“), und
                seinen Kunden über Webdesign, Website- und
                Landingpage-Erstellung, Funnel, Web- und Softwareentwicklung,
                Beratung, Hosting, Wartung sowie damit verbundene Leistungen.
              </p>
              <p className={paragraphClassName}>
                Das Angebot richtet sich ausschließlich an Unternehmer im Sinne
                des § 14 BGB, juristische Personen des öffentlichen Rechts und
                öffentlich-rechtliche Sondervermögen. Verträge mit Verbrauchern
                werden nicht geschlossen.
              </p>
              <p className={paragraphClassName}>
                Individuelle Vereinbarungen und das jeweilige Angebot gehen
                diesen AGB vor. Abweichende Geschäftsbedingungen des Kunden
                gelten nur, wenn Codavo ihnen ausdrücklich in Textform
                zugestimmt hat.
              </p>
            </section>

            <section className={sectionClassName}>
              <h2 className={headingClassName}>2. Vertragsschluss und Leistungsumfang</h2>
              <p className={paragraphClassName}>
                Ein Vertrag kommt durch die Annahme eines Angebots von Codavo in
                Textform, durch eine Auftragsbestätigung oder durch den Beginn
                der Leistungserbringung auf Wunsch des Kunden zustande. Art und
                Umfang der geschuldeten Leistungen ergeben sich vorrangig aus
                dem jeweiligen Angebot und der darin vereinbarten
                Leistungsbeschreibung.
              </p>
              <p className={paragraphClassName}>
                Nicht ausdrücklich vereinbarte Leistungen, insbesondere
                zusätzliche Seiten, Funktionen, Schnittstellen, Texte,
                Bildproduktionen, Übersetzungen, Rechtsprüfungen oder laufende
                Optimierungen, sind nicht Bestandteil des Auftrags.
                Änderungs- und Erweiterungswünsche nach Vertragsschluss werden
                als Change Request gesondert geprüft und nach Angebot oder
                Aufwand vergütet.
              </p>
              <p className={paragraphClassName}>
                Sofern im Angebot nichts anderes vereinbart ist, sind zwei
                gebündelte Korrekturschleifen enthalten. Die Beseitigung von
                Mängeln zählt nicht als Korrekturschleife.
              </p>
            </section>

            <section className={sectionClassName}>
              <h2 className={headingClassName}>3. Mitwirkungspflichten des Kunden</h2>
              <p className={paragraphClassName}>
                Der Kunde stellt alle für das Projekt erforderlichen
                Informationen, Inhalte, Zugänge, Freigaben und Ansprechpartner
                vollständig und rechtzeitig zur Verfügung. Er prüft
                Zwischenstände innerhalb der vereinbarten Fristen und bündelt
                Rückmeldungen nach Möglichkeit in einer abgestimmten
                Stellungnahme.
              </p>
              <p className={paragraphClassName}>
                Verzögerungen, die durch verspätete oder unvollständige
                Mitwirkung des Kunden entstehen, verlängern vereinbarte Fristen
                angemessen. Hierdurch verursachter zusätzlicher Aufwand kann
                nach vorherigem Hinweis gesondert berechnet werden.
              </p>
            </section>

            <section className={sectionClassName}>
              <h2 className={headingClassName}>4. Inhalte, Rechte Dritter und rechtliche Prüfung</h2>
              <p className={paragraphClassName}>
                Der Kunde ist für die sachliche Richtigkeit, Vollständigkeit und
                rechtliche Zulässigkeit der veröffentlichten Inhalte
                verantwortlich. Dies gilt insbesondere für Texte, Aussagen,
                Preise, Angebote, Marken, Logos, Fotos, Videos, Grafiken,
                Schriftarten, Musik, Bewertungen und sonstige Medien.
              </p>
              <p className={paragraphClassName}>
                Der Kunde versichert, dass er über die zur vertragsgemäßen
                Nutzung erforderlichen Rechte an den von ihm bereitgestellten
                Materialien verfügt und deren Verwendung keine Rechte Dritter
                verletzt. Er prüft und genehmigt sämtliche Inhalte vor der
                Veröffentlichung.
              </p>
              <p className={paragraphClassName}>
                Dies gilt auch für Inhalte, Texte und Bilder, die ganz oder
                teilweise mithilfe künstlicher Intelligenz erstellt oder
                bearbeitet wurden. KI-generierte Ergebnisse können sachliche,
                rechtliche oder gestalterische Fehler sowie Ähnlichkeiten mit
                geschützten Inhalten enthalten. Der Kunde ist verpflichtet,
                solche Ergebnisse vor ihrer Freigabe eigenständig zu prüfen
                oder fachkundig prüfen zu lassen.
              </p>
              <p className={paragraphClassName}>
                Soweit Codavo Muster, Formulierungshilfen oder technische
                Vorlagen für Impressum, Datenschutzerklärung, Cookie-Banner oder
                sonstige Pflichtinformationen bereitstellt oder einbindet,
                handelt es sich nicht um Rechts- oder Steuerberatung. Der Kunde
                bleibt für die auf sein Unternehmen, seine Leistungen und die
                tatsächlich eingesetzten Systeme abgestimmte rechtliche
                Prüfung, Vollständigkeit und laufende Aktualisierung
                verantwortlich.
              </p>
              <p className={paragraphClassName}>
                Der Kunde stellt Codavo von berechtigten Ansprüchen Dritter frei,
                die auf vom Kunden bereitgestellten, angewiesenen oder
                freigegebenen Inhalten beruhen. Dies gilt nicht, soweit Codavo
                den Anspruch zu vertreten hat. Codavo wird den Kunden über
                entsprechende Ansprüche unverzüglich informieren und ihm die
                angemessene Mitwirkung an der Rechtsverteidigung ermöglichen.
              </p>
            </section>

            <section className={sectionClassName}>
              <h2 className={headingClassName}>5. Drittanbieter und externe Kosten</h2>
              <p className={paragraphClassName}>
                Für die Umsetzung können Leistungen Dritter erforderlich sein,
                etwa Hosting, Domains, E-Mail-Versand, Schriftarten, Bild- und
                Videolizenzen, Analyse-, Werbe-, Consent-, CRM- oder sonstige
                Softwaredienste. Soweit nicht ausdrücklich anders vereinbart,
                trägt der Kunde die hierfür anfallenden einmaligen und laufenden
                Kosten.
              </p>
              <p className={paragraphClassName}>
                Verträge mit Drittanbietern werden nach Möglichkeit unmittelbar
                zwischen dem Kunden und dem jeweiligen Anbieter geschlossen.
                Für Verfügbarkeit, Preisänderungen und Leistungsänderungen
                dieser Drittanbieter haftet Codavo nur, soweit Codavo diese
                Umstände zu vertreten hat.
              </p>
            </section>

            <section className={sectionClassName}>
              <h2 className={headingClassName}>6. Vergütung und Zahlungsbedingungen</h2>
              <p className={paragraphClassName}>
                Alle Preise verstehen sich zuzüglich der jeweils geltenden
                gesetzlichen Umsatzsteuer, sofern im Angebot nicht ausdrücklich
                etwas anderes angegeben ist.
              </p>
              <p className={paragraphClassName}>
                Bei Projektleistungen werden 50 Prozent der vereinbarten
                Vergütung als Anzahlung bei Beauftragung fällig. Codavo ist
                berechtigt, mit der Leistungserbringung erst nach Eingang der
                Anzahlung zu beginnen. Die verbleibenden 50 Prozent werden mit
                Projektabschluss, also mit ausdrücklicher oder fingierter
                Abnahme, fällig und sind innerhalb von sieben Werktagen ohne
                Abzug zu zahlen.
              </p>
              <p className={paragraphClassName}>
                Werktage im Sinne dieser AGB sind Montag bis Freitag mit
                Ausnahme gesetzlicher Feiertage am Sitz von Codavo. Für
                wiederkehrende Leistungen gelten die im Angebot vereinbarten
                Abrechnungsintervalle.
              </p>
            </section>

            <section className={sectionClassName}>
              <h2 className={headingClassName}>7. Termine und Projektverzögerungen</h2>
              <p className={paragraphClassName}>
                Termine und Leistungsfristen sind nur verbindlich, wenn sie im
                Angebot oder in einer Auftragsbestätigung ausdrücklich als
                verbindlich bezeichnet wurden. Voraussetzung für die Einhaltung
                ist die rechtzeitige Mitwirkung des Kunden.
              </p>
              <p className={paragraphClassName}>
                Unvorhersehbare Ereignisse außerhalb des Einflussbereichs von
                Codavo, insbesondere Ausfälle von Drittanbietern, höhere Gewalt,
                Arbeitskampf oder behördliche Maßnahmen, verlängern die
                Leistungsfrist angemessen, soweit Codavo sie nicht zu vertreten
                hat.
              </p>
            </section>

            <section className={sectionClassName}>
              <h2 className={headingClassName}>8. Abnahme</h2>
              <p className={paragraphClassName}>
                Nach Fertigstellung stellt Codavo das Werk zur Prüfung bereit
                und fordert den Kunden in Textform zur Abnahme auf. Der Kunde
                hat die Leistung innerhalb von zehn Werktagen zu prüfen und die
                Abnahme zu erklären oder mindestens einen abnahmehindernden
                Mangel nachvollziehbar in Textform zu benennen.
              </p>
              <p className={paragraphClassName}>
                Wegen unwesentlicher Mängel darf die Abnahme nicht verweigert
                werden. Erfolgt innerhalb der Abnahmefrist weder die Abnahme
                noch eine begründete Verweigerung unter Benennung mindestens
                eines Mangels, gilt die Leistung nach Ablauf der Frist als
                abgenommen. Codavo weist in der Abnahmeaufforderung auf diese
                Rechtsfolge hin.
              </p>
              <p className={paragraphClassName}>
                Die Leistung gilt ebenfalls als abgenommen, wenn der Kunde sie
                produktiv einsetzt, veröffentlicht oder Dritten zugänglich
                macht, ohne zuvor einen wesentlichen Mangel angezeigt zu haben.
                Vereinbarte, eigenständig nutzbare Teilleistungen können
                gesondert abgenommen werden.
              </p>
            </section>

            <section className={sectionClassName}>
              <h2 className={headingClassName}>9. Mängelrechte</h2>
              <p className={paragraphClassName}>
                Codavo behebt reproduzierbare Mängel, durch die die vereinbarte
                Beschaffenheit oder Funktion wesentlich beeinträchtigt wird,
                innerhalb einer angemessenen Frist. Der Kunde unterstützt die
                Fehleranalyse durch eine nachvollziehbare Beschreibung und die
                erforderlichen Informationen.
              </p>
              <p className={paragraphClassName}>
                Kein Mangel liegt vor, wenn eine Beeinträchtigung auf nicht von
                Codavo zu vertretenden Änderungen durch den Kunden oder Dritte,
                nicht unterstützte technische Umgebungen, Drittanbieter,
                fehlerhafte Inhalte oder eine vertragswidrige Nutzung
                zurückzuführen ist.
              </p>
            </section>

            <section className={sectionClassName}>
              <h2 className={headingClassName}>10. Nutzungsrechte und Herausgabe von Dateien</h2>
              <p className={paragraphClassName}>
                Bis zur vollständigen Zahlung verbleiben sämtliche
                Nutzungsrechte bei Codavo. Nach vollständiger Zahlung erhält
                der Kunde an den individuell für ihn erstellten und final
                abgenommenen Arbeitsergebnissen ein zeitlich und räumlich
                unbeschränktes, einfaches Nutzungsrecht für den vertraglich
                vorausgesetzten Zweck. Weitergehende oder ausschließliche Rechte
                bedürfen einer ausdrücklichen Vereinbarung.
              </p>
              <p className={paragraphClassName}>
                Vorbestehende Bestandteile, allgemeine Konzepte, Methoden,
                wiederverwendbare Module, Bibliotheken, Open-Source-Software und
                Inhalte Dritter bleiben von der Rechteübertragung unberührt. Für
                sie gelten die jeweiligen Lizenzbedingungen.
              </p>
              <p className={paragraphClassName}>
                Der Kunde kann auf Wunsch den zu seinem Projekt gehörenden
                Quellcode und vorhandene Projektdateien erhalten, soweit Codavo
                darüber verfügen darf und keine Rechte Dritter,
                Sicherheitsinteressen oder Geheimhaltungspflichten
                entgegenstehen. Zugangsdaten, interne Werkzeuge, nicht für den
                Kunden lizenzierte Komponenten sowie Geheimnisse und
                Zugangsschlüssel sind von der Herausgabe ausgeschlossen.
              </p>
            </section>

            <section className={sectionClassName}>
              <h2 className={headingClassName}>11. Referenznutzung</h2>
              <p className={paragraphClassName}>
                Codavo ist berechtigt, abgeschlossene und veröffentlichte
                Projekte unter Nennung des Kunden sowie unter Verwendung von
                Namen, Logo, Screenshots und einer sachlichen
                Projektbeschreibung als Referenz auf der eigenen Website, in
                Präsentationen und in sozialen Netzwerken zu zeigen. Abweichende
                Vertraulichkeitsvereinbarungen gehen dieser Regelung vor.
              </p>
            </section>

            <section className={sectionClassName}>
              <h2 className={headingClassName}>12. Hosting- und Wartungsleistungen</h2>
              <p className={paragraphClassName}>
                Der konkrete Umfang von Hosting, Wartung, Monitoring,
                Aktualisierungen, Reaktionszeiten und Inhaltsänderungen ergibt
                sich aus dem jeweiligen Angebot. Eine jederzeit vollständig
                unterbrechungsfreie Erreichbarkeit wird nur geschuldet, wenn
                dies ausdrücklich vereinbart wurde.
              </p>
              <p className={paragraphClassName}>
                Monatliche Hosting- und Wartungsmodelle haben eine
                Mindestlaufzeit von sechs Monaten. Nach Ablauf der
                Mindestlaufzeit können sie von beiden Parteien mit einer Frist
                von einem Monat zum Monatsende in Textform gekündigt werden.
              </p>
              <p className={paragraphClassName}>
                Nach Vertragsende endet die Pflicht von Codavo zur laufenden
                Betreuung. Die Übergabe vorhandener Projektdateien und Zugänge
                erfolgt nach Maßgabe dieser AGB und des jeweiligen Angebots.
                Offene Forderungen sowie laufende Kosten von Drittanbietern
                bleiben unberührt.
              </p>
            </section>

            <section className={sectionClassName}>
              <h2 className={headingClassName}>13. Datenschutz und Auftragsverarbeitung</h2>
              <p className={paragraphClassName}>
                Beide Parteien beachten die jeweils anwendbaren
                Datenschutzbestimmungen. Verarbeitet Codavo im Auftrag des
                Kunden personenbezogene Daten, schließen die Parteien bei
                Bedarf vor Beginn der Verarbeitung eine gesonderte Vereinbarung
                zur Auftragsverarbeitung.
              </p>
              <p className={paragraphClassName}>
                Der Kunde bleibt für die Rechtmäßigkeit der über seine Website,
                Formulare, Tracking-Systeme und angebundenen Dienste
                verarbeiteten Daten sowie für erforderliche Informationen und
                Einwilligungen verantwortlich, soweit nicht ausdrücklich eine
                andere Verantwortung vereinbart ist.
              </p>
            </section>

            <section className={sectionClassName}>
              <h2 className={headingClassName}>14. Haftung</h2>
              <p className={paragraphClassName}>
                Codavo haftet unbeschränkt für Vorsatz und grobe Fahrlässigkeit,
                für Schäden aus der Verletzung von Leben, Körper oder
                Gesundheit, nach dem Produkthaftungsgesetz sowie im Umfang einer
                ausdrücklich übernommenen Garantie.
              </p>
              <p className={paragraphClassName}>
                Bei leicht fahrlässiger Verletzung wesentlicher
                Vertragspflichten ist die Haftung auf den vertragstypischen,
                bei Vertragsschluss vorhersehbaren Schaden begrenzt. Im Übrigen
                ist die Haftung für leichte Fahrlässigkeit ausgeschlossen.
              </p>
              <p className={paragraphClassName}>
                Für Datenverluste haftet Codavo nur im vorstehenden Umfang und
                begrenzt auf den Aufwand, der bei ordnungsgemäßer und
                regelmäßiger Datensicherung zur Wiederherstellung erforderlich
                gewesen wäre. Gesetzlich zwingende Haftung bleibt unberührt.
              </p>
            </section>

            <section className={sectionClassName}>
              <h2 className={headingClassName}>15. Schlussbestimmungen</h2>
              <p className={paragraphClassName}>
                Es gilt das Recht der Bundesrepublik Deutschland unter
                Ausschluss des UN-Kaufrechts. Erfüllungsort ist der Sitz von
                Codavo.
              </p>
              <p className={paragraphClassName}>
                Ist der Kunde Kaufmann, eine juristische Person des öffentlichen
                Rechts oder ein öffentlich-rechtliches Sondervermögen, ist der
                Sitz von Codavo ausschließlicher Gerichtsstand. Codavo bleibt
                berechtigt, den Kunden auch an seinem allgemeinen Gerichtsstand
                zu verklagen.
              </p>
              <p className={paragraphClassName}>
                Sollten einzelne Bestimmungen unwirksam sein oder werden, bleibt
                die Wirksamkeit der übrigen Bestimmungen unberührt. An die Stelle
                der unwirksamen Bestimmung treten die gesetzlichen Vorschriften.
              </p>
            </section>

            <section className="border-t border-white/10 pt-6">
              <p className="text-sm text-slate-400">Stand: August 2026</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
