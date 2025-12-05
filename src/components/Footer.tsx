import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      className="border-t border-white/10 bg-[#090e19] py-12 mt-20 text-sm text-slate-400"
    >
      <div className="container mx-auto px-5 grid gap-12 md:grid-cols-3">
        {/* SPALTE 1 – Logo + Text */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/images/logo/codavo-logo-light.png"
              alt="Codavo Logo"
              width={110} // ← gleiche Größe wie im Header
              height={28}
              className="opacity-95"
            />
          </div>

          <h3 className="text-white font-semibold mb-3 text-lg">
            Codavo Webstudio
          </h3>

          <p className="text-slate-400 leading-relaxed">
            Wir entwickeln moderne Websites & Web-Apps mit klarer UX,
            performanter Technik und Fokus auf Ergebnisse – für
            Solo-Selbstständige, Unternehmen und Teams.
          </p>
        </div>

        {/* SPALTE 2 – Navigation */}
        <div>
          <h4 className="text-white font-medium mb-3">Navigation</h4>
          <ul className="space-y-2">
            <li>
              <Link href="#leistungen" className="hover:text-white">
                Leistungen
              </Link>
            </li>
            <li>
              <Link href="#prozess" className="hover:text-white">
                Prozess
              </Link>
            </li>
            <li>
              <Link href="#cases" className="hover:text-white">
                Case Studies
              </Link>
            </li>
            <li>
              <Link href="#faq" className="hover:text-white">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="#kontakt" className="hover:text-white">
                Kontakt
              </Link>
            </li>
          </ul>
        </div>

        {/* SPALTE 3 – Kontakt */}
        <div>
          <h4 className="text-white font-medium mb-3">Kontakt</h4>
          <ul className="space-y-2">
            <li>
              <a href="tel:+4915111956479" className="hover:text-white">
                +49 1511 195 64 79
              </a>
            </li>
            <li>
              <a
                href="mailto:kontakt@codavo-webstudio.de"
                className="hover:text-white"
              >
                kontakt@codavo-webstudio.de
              </a>
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

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Codavo Webstudio. Alle Rechte vorbehalten.
      </div>
    </footer>
  );
}
