import Image from "next/image";
import Link from "next/link";
import SocialLinks from "@/components/SocialLinks";
import TrackedContactLink from "@/components/TrackedContactLink";

const serviceLinks = [
  ["/leistungen", "Leistungen"],
  ["/webdesign", "Webdesign"],
  ["/landingpage-erstellen-lassen", "Landingpage erstellen lassen"],
  ["/funnel-erstellen-lassen", "Funnel erstellen lassen"],
  ["/web-app-entwicklung", "Web App Entwicklung"],
  ["/softwareloesungen-fuer-kmu", "Softwarelösungen für KMU"],
  ["/digitale-systeme", "Digitale Systeme"],
  ["/hosting-wartung", "Hosting & Wartung"],
] as const;

const locationLinks = [
  ["/standorte/berlin", "Berlin"],
  ["/standorte/hamburg", "Hamburg"],
  ["/standorte/muenchen", "München"],
  ["/standorte/koeln", "Köln"],
  ["/standorte/frankfurt", "Frankfurt"],
  ["/standorte/stuttgart", "Stuttgart"],
  ["/standorte/duesseldorf", "Düsseldorf"],
  ["/standorte/leipzig", "Leipzig"],
  ["/standorte/dortmund", "Dortmund"],
  ["/standorte/essen", "Essen"],
  ["/standorte/hannover", "Hannover"],
  ["/standorte/nuernberg", "Nürnberg"],
] as const;

export default function Footer() {
  return (
    <footer role="contentinfo" className="border-t border-white/8 bg-[#060a13] text-sm text-slate-400">
      <div className="container max-w-7xl py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[1.2fr_1fr_0.8fr_0.8fr_1.15fr] xl:gap-10 2xl:gap-12">
          <div className="max-w-sm">
            <Image
              src="/images/logo/codavo-logo-light.png"
              alt="Codavo Logo"
              width={140}
              height={32}
              className="h-7 w-auto opacity-95"
            />
            <h3 className="mt-7 text-lg font-semibold tracking-tight text-white">
              Codavo Webstudio
            </h3>
            <p className="mt-4 leading-7 text-slate-400">
              Codavo entwickelt individuelle Unternehmenswebsites, Landingpages,
              Funnel und webbasierte Software mit klarer Nutzerführung und einer
              sauberen technischen Grundlage.
            </p>
            <SocialLinks size="md" variant="footer" className="mt-7" />
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-200">
              Leistungen
            </h4>
            <ul className="mt-6 space-y-3.5">
              {serviceLinks.map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="transition hover:text-white">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-200">
              Entdecken
            </h4>
            <ul className="mt-6 space-y-3.5">
              <li><Link href="/" className="transition hover:text-white">Startseite</Link></li>
              <li><Link href="/wissen" className="transition hover:text-white">Wissen</Link></li>
              <li><Link href="/cases" className="transition hover:text-white">Cases</Link></li>
              <li><Link href="/faq" className="transition hover:text-white">FAQ</Link></li>
              <li>
                <Link
                  href="/kontakt"
                  data-track-event="nav_contact_click"
                  data-track-label="Footer Navigation Kontakt"
                  className="font-medium text-indigo-300 transition hover:text-white"
                >
                  Kostenloses Erstgespräch
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-200">
              Standorte
            </h4>
            <ul className="mt-6 space-y-3.5">
              {locationLinks.map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="transition hover:text-white">
                    {label}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link href="/standorte" className="font-medium text-indigo-300 transition hover:text-white">
                  Alle Standorte →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-200">
              Kontakt
            </h4>
            <ul className="mt-6 space-y-3.5 leading-6">
              <li>
                <TrackedContactLink
                  url="tel:+4915111956479"
                  dataTrackEvent="cta_contact_click"
                  dataTrackLabel="Footer Telefon"
                  className="transition hover:text-white"
                  contactMethod="phone"
                >
                  +49 1511 195 64 79
                </TrackedContactLink>
              </li>
              <li>
                <TrackedContactLink
                  url="mailto:kontakt@codavo-webstudio.de"
                  dataTrackEvent="cta_contact_click"
                  dataTrackLabel="Footer E-Mail"
                  className="max-w-full break-words text-left text-xs leading-5 transition [overflow-wrap:anywhere] hover:text-white xl:text-sm"
                  contactMethod="email"
                >
                  kontakt@codavo-webstudio.de
                </TrackedContactLink>
              </li>
              <li>
                <a
                  href="https://www.codavo-webstudio.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-white"
                >
                  www.codavo-webstudio.de
                </a>
              </li>
              <li className="pt-2 text-slate-500">Naumannstr. 3<br />73663 Berglen</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/8 pt-7 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Codavo Webstudio. Alle Rechte vorbehalten.</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link href="/impressum" className="transition hover:text-slate-300">Impressum</Link>
            <Link href="/datenschutz" className="transition hover:text-slate-300">Datenschutz</Link>
            <Link href="/agb" className="transition hover:text-slate-300">AGB</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
