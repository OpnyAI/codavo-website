import type { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Datenschutz | Codavo",
  description:
    "Datenschutzhinweise zur Nutzung dieser Website und zu den eingesetzten Diensten.",
  alternates: {
    canonical: "/datenschutz",
  },
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    url: "/datenschutz",
    title: "Datenschutz | Codavo",
    description:
      "Datenschutzhinweise zur Nutzung dieser Website und zu den eingesetzten Diensten.",
  },
  twitter: {
    title: "Datenschutz | Codavo",
    description:
      "Datenschutzhinweise zur Nutzung dieser Website und zu den eingesetzten Diensten.",
  },
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
                Codavo Webstudio <br />
                Inhaber: Mehmet Çatalsakal <br />
                Naumannstraße 3 <br />
                73663 Berglen <br />
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
                Personenbezogene Daten werden nur so lange gespeichert, wie es
                für den jeweiligen Zweck erforderlich ist oder gesetzliche
                Aufbewahrungspflichten bestehen.
              </p>
            </section>

            {/* 3. Server-Logfiles & Hosting */}
            <section>
              <h2 className="text-lg font-semibold text-white">
                3. Server-Logfiles & Hosting
              </h2>
              <p className="mt-2 text-slate-300">
                Beim Aufruf unserer Website werden durch unseren
                Hosting-Provider automatisch Informationen erfasst und in
                sogenannten Server-Logfiles gespeichert.
              </p>
              <ul className="mt-2 list-disc list-inside text-slate-300">
                <li>IP-Adresse</li>
                <li>Datum und Uhrzeit des Abrufs</li>
                <li>aufgerufene Seite</li>
                <li>Browsertyp und Betriebssystem</li>
                <li>Referrer-URL</li>
              </ul>
              <p className="mt-2 text-slate-300">
                Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f
                DSGVO (berechtigtes Interesse an technisch fehlerfreier
                Darstellung und Optimierung).
              </p>
            </section>

            {/* 4. Cookies & Einwilligung */}
            <section>
              <h2 className="text-lg font-semibold text-white">
                4. Cookies & Einwilligung
              </h2>
              <p className="mt-2 text-slate-300">
                Unsere Website verwendet technisch notwendige Cookies sowie –
                nach deiner ausdrücklichen Einwilligung – Analyse-Technologien.
              </p>
              <p className="mt-2 text-slate-300">
                Die Einwilligung erfolgt über ein Consent-Banner beim
                erstmaligen Besuch unserer Website. Ohne deine Zustimmung werden
                keine Analyse-Dienste aktiviert.
              </p>
              <p className="mt-2 text-slate-300">
                Deine Auswahl wird lokal im Browser gespeichert. Du kannst deine
                Einwilligung jederzeit widerrufen, indem du den lokalen Speicher
                deines Browsers löschst.
              </p>
            </section>

            {/* 5. Google Tag Manager */}
            <section>
              <h2 className="text-lg font-semibold text-white">
                5. Google Tag Manager
              </h2>
              <p className="mt-2 text-slate-300">
                Wir verwenden den Google Tag Manager. Anbieter ist die Google
                Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.
              </p>
              <p className="mt-2 text-slate-300">
                Der Tag Manager speichert selbst keine personenbezogenen Daten,
                sondern dient ausschließlich der Verwaltung und Ausspielung von
                Website-Tags.
              </p>
            </section>

            {/* 6. Google Analytics 4 */}
            <section>
              <h2 className="text-lg font-semibold text-white">
                6. Google Analytics 4
              </h2>
              <p className="mt-2 text-slate-300">
                Sofern du eingewilligt hast, verwenden wir Google Analytics 4.
                Anbieter ist die Google Ireland Limited.
              </p>
              <p className="mt-2 text-slate-300">
                Google Analytics ermöglicht die Analyse des Nutzungsverhaltens
                (z. B. Seitenaufrufe, Interaktionen). Die IP-Adresse wird
                innerhalb der EU anonymisiert.
              </p>
              <p className="mt-2 text-slate-300">
                Rechtsgrundlage ist Art. 6 Abs. 1 lit. a DSGVO (Einwilligung).
              </p>
              <p className="mt-2 text-slate-300">
                Eine Datenübertragung in die USA kann nicht ausgeschlossen
                werden. Google ist nach dem EU-U.S. Data Privacy Framework
                zertifiziert.
              </p>
            </section>

            {/* 7. Kontakt */}
            <section>
              <h2 className="text-lg font-semibold text-white">
                7. Kontaktaufnahme
              </h2>
              <p className="mt-2 text-slate-300">
                Wenn du uns per E-Mail, Telefon oder WhatsApp kontaktierst,
                verarbeiten wir deine Angaben zur Bearbeitung deiner Anfrage.
              </p>
              <p className="mt-2 text-slate-300">
                Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO
                (Vertragsanbahnung/-durchführung) bzw. Art. 6 Abs. 1 lit. f
                DSGVO.
              </p>
            </section>

            {/* 8. Dienstleister */}
            <section>
              <h2 className="text-lg font-semibold text-white">
                8. Einsatz von Dienstleistern
              </h2>
              <p className="mt-2 text-slate-300">
                Wir setzen externe Dienstleister (z. B. Hosting-Provider) ein,
                die im Rahmen einer Auftragsverarbeitung gemäß Art. 28 DSGVO
                tätig sind.
              </p>
            </section>

            {/* 9. Deine Rechte */}
            <section>
              <h2 className="text-lg font-semibold text-white">
                9. Deine Rechte
              </h2>
              <ul className="mt-2 list-disc list-inside text-slate-300">
                <li>Recht auf Auskunft</li>
                <li>Recht auf Berichtigung</li>
                <li>Recht auf Löschung</li>
                <li>Recht auf Einschränkung</li>
                <li>Recht auf Datenübertragbarkeit</li>
                <li>Widerspruchsrecht</li>
                <li>Beschwerderecht bei einer Aufsichtsbehörde</li>
              </ul>
            </section>

            {/* 10. Stand */}
            <section>
              <h2 className="text-lg font-semibold text-white">
                10. Stand dieser Datenschutzerklärung
              </h2>
              <p className="mt-2 text-slate-300">
                Diese Datenschutzerklärung ist aktuell gültig. Änderungen können
                sich durch technische oder gesetzliche Anpassungen ergeben.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
