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
