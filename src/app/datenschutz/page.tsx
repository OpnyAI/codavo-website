import type { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | Codavo Webstudio",
  description:
    "Informationen zum Datenschutz bei Codavo Webstudio gemäß DSGVO – insbesondere zu Hosting, Logfiles, Kontaktaufnahme per E-Mail, Telefon und WhatsApp sowie deinen Rechten.",
};

export default function DatenschutzPage() {
  return (
    <>
      <main className="min-h-screen pt-28 md:pt-32 lg:pt-36 pb-20">
        <div className="container mt-10 md:mt-6 lg:mt-4">
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-white">
            Datenschutzerklärung
          </h1>

          <div className="mt-8 space-y-8 text-sm md:text-base text-slate-200">
            {/* 1. Verantwortlicher */}
            <section>
              <h2 className="text-lg font-semibold text-white">
                1. Verantwortlicher
              </h2>
              <p className="mt-2">
                Verantwortlich für die Datenverarbeitung auf dieser Website ist:
              </p>
              <p className="mt-2">
                Codavo Webstudio
                <br />
                Inhaber: Mehmet Çatalsakal
                <br />
                Naumannstraße 3
                <br />
                73663 Berglen
                <br />
                E-Mail: kontakt@codavo-webstudio.de
              </p>
            </section>

            {/* 2. Allgemeine Hinweise */}
            <section>
              <h2 className="text-lg font-semibold text-white">
                2. Allgemeine Hinweise zur Datenverarbeitung
              </h2>
              <p className="mt-2 text-slate-300">
                Wir verarbeiten personenbezogene Daten nur, soweit dies zur
                Bereitstellung dieser Website, zur Kommunikation mit dir oder
                zur Vorbereitung und Durchführung von Projekten erforderlich
                ist. Rechtsgrundlagen sind insbesondere Art. 6 Abs. 1 lit. a, b
                und f DSGVO.
              </p>
              <p className="mt-2 text-slate-300">
                Personenbezogene Daten werden von uns nur so lange gespeichert,
                wie es für den jeweiligen Zweck erforderlich ist oder wir dazu
                gesetzlich verpflichtet sind.
              </p>
            </section>

            {/* 3. Server-Logfiles & Hosting */}
            <section>
              <h2 className="text-lg font-semibold text-white">
                3. Server-Logfiles &amp; Hosting
              </h2>
              <p className="mt-2 text-slate-300">
                Unsere Website wird bei einem externen Dienstleister
                (Hosting-Provider) betrieben. Beim Aufruf unserer Website werden
                durch diesen Provider automatisch Informationen erfasst und in
                sogenannten Server-Logfiles gespeichert. Dies sind insbesondere:
              </p>
              <ul className="mt-2 list-disc list-inside text-slate-300">
                <li>IP-Adresse</li>
                <li>Datum und Uhrzeit des Abrufs</li>
                <li>aufgerufene Seite/Datei</li>
                <li>übertragene Datenmenge</li>
                <li>verwendeter Browser und Betriebssystem</li>
                <li>Referrer-URL (zuvor besuchte Seite, falls übermittelt)</li>
              </ul>
              <p className="mt-2 text-slate-300">
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6
                Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an der
                technisch fehlerfreien Darstellung und Optimierung unserer
                Website.
              </p>
            </section>

            {/* 4. Cookies & lokale Speicherung */}
            <section>
              <h2 className="text-lg font-semibold text-white">
                4. Cookies &amp; lokale Speicherung
              </h2>
              <p className="mt-2 text-slate-300">
                Wir setzen auf dieser Website keine Tracking- oder
                Marketing-Cookies von Drittanbietern ein. Technisch notwendige
                Cookies bzw. vergleichbare Technologien (z. B. lokale
                Speicherung im Browser) können eingesetzt werden, um Sicherheit,
                Spamschutz oder eine stabile Darstellung der Seite
                sicherzustellen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.
              </p>
            </section>

            {/* 5. Kontakt per E-Mail / Telefon / WhatsApp */}
            <section>
              <h2 className="text-lg font-semibold text-white">
                5. Kontaktaufnahme per E-Mail, Telefon oder WhatsApp
              </h2>
              <p className="mt-2 text-slate-300">
                Wenn du uns per E-Mail, Telefon oder WhatsApp kontaktierst,
                verarbeiten wir deine Angaben (z. B. Namen, Kontaktdaten,
                Inhalte der Anfrage) zum Zweck der Bearbeitung und Beantwortung
                deiner Anfrage sowie zur Vorbereitung bzw. Durchführung eines
                Projekts.
              </p>
              <p className="mt-2 text-slate-300">
                Rechtsgrundlage ist je nach Kontext Art. 6 Abs. 1 lit. b DSGVO
                (Vertrag oder Vertragsanbahnung) und/oder Art. 6 Abs. 1 lit. f
                DSGVO (berechtigtes Interesse an effizienter Kommunikation mit
                Interessent:innen und Kund:innen).
              </p>

              <h3 className="mt-4 text-base font-semibold text-white">
                E-Mail
              </h3>
              <p className="mt-2 text-slate-300">
                E-Mails werden auf den Servern unseres E-Mail-Providers sowie in
                unserer lokalen E-Mail-Software gespeichert. Wir bewahren die
                Korrespondenz so lange auf, wie es zur Bearbeitung deiner
                Anfrage, zur Vertragsdurchführung oder aufgrund gesetzlicher
                Aufbewahrungspflichten erforderlich ist.
              </p>

              <h3 className="mt-4 text-base font-semibold text-white">
                Telefon
              </h3>
              <p className="mt-2 text-slate-300">
                Wenn du uns anrufst, können wir – soweit erforderlich – Notizen
                zu deinem Anliegen erstellen (z. B. Projektskizze, Kontaktdaten,
                To-Dos). Diese Informationen werden nur intern verwendet und
                nicht an Dritte weitergegeben, sofern keine rechtliche
                Verpflichtung besteht.
              </p>

              <h3 className="mt-4 text-base font-semibold text-white">
                WhatsApp
              </h3>
              <p className="mt-2 text-slate-300">
                Für die Kommunikation nutzen wir die WhatsApp-Business-Variante
                des Messengers. Anbieter ist WhatsApp Ireland Limited, 4 Grand
                Canal Square, Grand Canal Harbour, Dublin 2, Irland. Die
                Kommunikation ist Ende-zu-Ende-verschlüsselt; WhatsApp erhält
                jedoch Metadaten der Kommunikation (z. B. Zeitpunkt,
                Telefonnummer, Geräteinformationen).
              </p>
              <p className="mt-2 text-slate-300">
                Wir verwenden WhatsApp ausschließlich zur direkten Kommunikation
                mit dir (z. B. zur Terminabstimmung, Projektanbahnung oder
                Klärung von Fragen). Rechtsgrundlage ist Art. 6 Abs. 1 lit. b
                DSGVO (Vertragsanbahnung/-durchführung) und Art. 6 Abs. 1 lit. f
                DSGVO (berechtigtes Interesse an einer schnellen und einfachen
                Kommunikation).
              </p>
              <p className="mt-2 text-slate-300">
                Bitte sende uns über WhatsApp keine besonders sensiblen Daten
                (z. B. vertrauliche Geschäftsgeheimnisse). Du kannst jederzeit
                verlangen, dass wir den Chatverlauf auf unseren Geräten löschen;
                die Löschung bei WhatsApp selbst liegt außerhalb unseres
                direkten Einflussbereichs.
              </p>
            </section>

            {/* 6. Dienstleister */}
            <section>
              <h2 className="text-lg font-semibold text-white">
                6. Einsatz von Dienstleistern / Auftragsverarbeitung
              </h2>
              <p className="mt-2 text-slate-300">
                Teilweise bedienen wir uns zur Verarbeitung deiner Daten
                externer Dienstleister (z. B. Hosting-Provider,
                E-Mail-Provider). Diese werden von uns sorgfältig ausgewählt und
                vertraglich nach Art. 28 DSGVO auf die Einhaltung des
                Datenschutzes verpflichtet.
              </p>
            </section>

            {/* 7. Rechte */}
            <section>
              <h2 className="text-lg font-semibold text-white">
                7. Deine Rechte
              </h2>
              <p className="mt-2 text-slate-300">
                Dir stehen im Rahmen der gesetzlichen Vorgaben folgende Rechte
                zu:
              </p>
              <ul className="mt-2 list-disc list-inside text-slate-300">
                <li>Recht auf Auskunft über die von uns verarbeiteten Daten</li>
                <li>Recht auf Berichtigung unrichtiger Daten</li>
                <li>
                  Recht auf Löschung (&quot;Recht auf Vergessenwerden&quot;)
                </li>
                <li>Recht auf Einschränkung der Verarbeitung</li>
                <li>Recht auf Datenübertragbarkeit</li>
                <li>
                  Widerspruchsrecht gegen die Verarbeitung auf Grundlage von
                  Art. 6 Abs. 1 lit. f DSGVO
                </li>
                <li>
                  Beschwerderecht bei einer Datenschutzaufsichtsbehörde, wenn du
                  der Ansicht bist, dass die Verarbeitung deiner
                  personenbezogenen Daten gegen die DSGVO verstößt
                </li>
              </ul>
              <p className="mt-2 text-slate-300">
                Zur Ausübung deiner Rechte genügt eine formlose Mitteilung, z.
                B. per E-Mail an: kontakt@codavo-webstudio.de
              </p>
            </section>

            {/* 8. Stand */}
            <section>
              <h2 className="text-lg font-semibold text-white">
                8. Stand dieser Datenschutzerklärung
              </h2>
              <p className="mt-2 text-slate-300">
                Diese Datenschutzerklärung ist aktuell gültig. Durch
                Weiterentwicklung unserer Website oder gesetzliche bzw.
                behördliche Vorgaben kann eine Anpassung erforderlich werden.
              </p>
              <p className="mt-2 text-xs text-slate-500">
                Hinweis: Diese Muster-Datenschutzerklärung ersetzt keine
                individuelle Rechtsberatung. Lass den Text im Zweifel von einer
                fachkundigen Stelle (z. B. Anwalt oder Datenschutzbeauftragte:r)
                prüfen.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
