import Image from "next/image";
import Link from "next/link";
import SocialLinks from "@/components/SocialLinks";
import TrackedContactLink from "@/components/TrackedContactLink";

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      className="border-t border-white/10 bg-[#090e19] py-12 mt-20 text-sm text-slate-400"
    >
      <div className="container mx-auto px-5 grid gap-12 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/images/logo/codavo-logo-light.png"
              alt="Codavo Logo"
              width={140}
              height={32}
              className="opacity-95 h-7 w-auto"
            />
          </div>

          <h3 className="text-white font-semibold mb-3 text-lg">
            Codavo Webstudio
          </h3>

          <p className="text-slate-400 leading-relaxed">
            Codavo entwickelt individuelle Unternehmenswebsites, Landingpages,
            Funnel und webbasierte Software mit klarer Nutzerführung und einer
            sauberen technischen Grundlage.
          </p>

          <div className="mt-6 flex flex-col items-center gap-3 md:items-start">
            <h4 className="mb-4 text-sm font-medium tracking-normal text-white">
              Social
            </h4>
            <SocialLinks size="md" variant="footer" />
          </div>
        </div>

        <div>
          <h4 className="text-white font-medium mb-3">Navigation</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-white">
                Startseite
              </Link>
            </li>
            <li>
              <Link href="/leistungen" className="hover:text-white">
                Leistungen
              </Link>
            </li>
            <li>
              <Link href="/webdesign" className="hover:text-white">
                Webdesign
              </Link>
            </li>
            <li className="pl-3 text-xs text-slate-500">
              <Link href="/webdesign-stuttgart" className="hover:text-white">
                Webdesign Stuttgart
              </Link>
            </li>
            <li>
              <Link href="/web-app-entwicklung" className="hover:text-white">
                Web App Entwicklung
              </Link>
            </li>
            <li>
              <Link href="/landingpage-erstellen-lassen" className="hover:text-white">
                Landingpage erstellen lassen
              </Link>
            </li>
            <li>
              <Link href="/funnel-erstellen-lassen" className="hover:text-white">
                Funnel erstellen lassen
              </Link>
            </li>
            <li>
              <Link href="/hosting-wartung" className="hover:text-white">
                Hosting &amp; Wartung
              </Link>
            </li>
            <li>
              <Link href="/softwareloesungen-fuer-kmu" className="hover:text-white">
                Softwarelösungen für KMU
              </Link>
            </li>
            <li>
              <Link href="/digitale-systeme" className="hover:text-white">
                Digitale Systeme
              </Link>
            </li>
            <li>
              <Link
                href="/website-check"
                data-track-event="cta_website_check_click"
                data-track-label="Footer Website Check"
                className="hover:text-white"
              >
                Kostenloser Website-Check
              </Link>
            </li>
            <li>
              <Link href="/cases" className="hover:text-white">
                Cases
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-white">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/wissen" className="hover:text-white">
                Wissen
              </Link>
            </li>
            <li>
              <Link
                href="/kontakt"
                data-track-event="nav_contact_click"
                data-track-label="Footer Navigation Kontakt"
                className="hover:text-white"
              >
                Kontakt
              </Link>
            </li>
            <li>
              <Link href="/impressum" className="hover:text-white">
                Impressum
              </Link>
            </li>
            <li>
              <Link href="/datenschutz" className="hover:text-white">
                Datenschutz
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-medium mb-3">Kontakt</h4>
          <ul className="space-y-2">
            <li>
              <TrackedContactLink
                url="tel:+4915111956479"
                dataTrackEvent="cta_contact_click"
                dataTrackLabel="Footer Telefon"
                className="hover:text-white"
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
                className="hover:text-white"
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
                className="hover:text-white"
              >
                www.codavo-webstudio.de
              </a>
            </li>
            <li>Naumannstr. 3</li>
            <li>73663 Berglen</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Codavo Webstudio. Alle Rechte vorbehalten.
      </div>
    </footer>
  );
}
