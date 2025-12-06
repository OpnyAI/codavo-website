// src/app/page.tsx
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <Hero />

      {/* Kurz-Intro – ohne Wiederholung des Hero-Claim */}
      <section className="section">
        <div className="container max-w-2xl text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">
            Für wen wir arbeiten.
          </h2>
          <p className="mt-4 text-slate-300 text-sm md:text-base">
            Wir unterstützen Selbstständige, Dienstleister und Unternehmen
            dabei, moderne Websites, Landingpages und Web-Apps effizient
            umzusetzen. Die Zusammenarbeit läuft in der Regel remote – mit
            klaren Prozessen, schnellen Ladezeiten und Projektlaufzeiten von
            meist <span className="font-semibold text-white">1–4 Wochen</span>,
            egal ob du in Stuttgart, irgendwo in Deutschland oder in der
            DACH-Region sitzt.
          </p>
        </div>
      </section>

      {/* Services → Teaser, Details auf eigener Seite */}
      <Services />
      <div className="text-center mt-6">
        <Link
          href="/leistungen"
          className="text-indigo-300 hover:text-white underline-offset-2 hover:underline text-sm"
        >
          Alle Leistungen ansehen →
        </Link>
      </div>

      {/* Prozess */}
      <Process />

      {/* Case Studies mit Link zur Unterseite */}
      <CaseStudies />
      <div className="text-center mt-6">
        <Link
          href="/cases"
          className="text-indigo-300 hover:text-white underline-offset-2 hover:underline text-sm"
        >
          Weitere Case Studies →
        </Link>
      </div>

      {/* Testimonials */}
      <Testimonials />

      {/* Kontakt */}
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}
