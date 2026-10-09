import Link from "next/link";
import { ArrowRight } from "lucide-react";
import HeroVideo from "@/components/HeroVideo";

export default function HomepageVideoSection() {
  return (
    <section className="section section--quiet section--compact">
      <div className="container container--wide grid items-center gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14 xl:gap-18">
        <div className="text-center lg:text-left">
          <p className="eyebrow">Die Strategie dahinter</p>
          <h2 className="section-title mt-5 text-white">
            Wie Ihre Website zum Wachstumshebel wird.
          </h2>
          <p className="lede mx-auto mt-5 max-w-xl lg:mx-0">
            In dieser kurzen Präsentation zeigt Mehmet, wie Positionierung,
            Inhalte und Technik zusammenspielen, damit eine Website Vertrauen
            aufbaut und qualifizierte Anfragen unterstützt.
          </p>

          <div className="mx-auto mt-7 flex max-w-md flex-col gap-3 sm:flex-row lg:mx-0">
            <Link
              href="/kontakt"
              data-track-event="cta_contact_click"
              data-track-label="Homepage Video Erstgespraech"
              className="cta-primary"
            >
              Kostenloses Erstgespräch
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="mx-auto w-full max-w-[860px] lg:max-w-none">
          <HeroVideo />
        </div>
      </div>
    </section>
  );
}
