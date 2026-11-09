import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import Footer from "@/components/Footer";
import FAQAccordion from "@/components/FAQAccordion";
import { automationServices, type AutomationServiceSlug } from "@/lib/automation-services";
import { automationOffers } from "@/lib/automation";
import { absoluteUrl, ORGANIZATION_ID } from "@/lib/seo";

export default function AutomationServicePage({ slug }: { slug: AutomationServiceSlug }) {
  const service = automationServices[slug];
  const path = `/${slug}`;
  const schema = { "@context": "https://schema.org", "@type": "Service", "@id": absoluteUrl(`${path}#service`), name: service.eyebrow, description: service.description, url: absoluteUrl(path), provider: { "@id": ORGANIZATION_ID } };
  const breadcrumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Startseite", item: absoluteUrl("/") }, { "@type": "ListItem", position: 2, name: "KI-Automatisierung", item: absoluteUrl("/automatisierung") }, { "@type": "ListItem", position: 3, name: service.eyebrow, item: absoluteUrl(path) }] };
  return <>
    <main className="overflow-x-hidden pt-20">
      <section className="section section--feature">
        <div className="container container--wide">
          <nav aria-label="Brotkrümelnavigation" className="mb-10 flex flex-wrap gap-2 text-sm text-slate-400"><Link href="/">Startseite</Link><span aria-hidden>/</span><Link href="/automatisierung">KI-Automatisierung</Link><span aria-hidden>/</span><span className="text-slate-200">{service.eyebrow}</span></nav>
          <div className="grid items-start gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div><p className="eyebrow">{service.eyebrow}</p><h1 className="display-title mt-5 text-white">{service.title}</h1><p className="lede mt-6 max-w-2xl">{service.intro}</p><Link href="/kontakt" className="cta-primary mt-8" data-track-event="cta_contact_click" data-track-label={service.eyebrow}>Kostenloses Erstgespräch <ArrowRight className="ml-2 size-4" aria-hidden /></Link></div>
            <aside className="rounded-3xl border border-indigo-300/20 bg-indigo-400/[0.07] p-6 sm:p-8"><p className="eyebrow">So wird ein Ablauf daraus</p><ol className="mt-6 divide-y divide-white/10">{service.flow.map((step, index) => <li key={step} className="flex gap-4 py-5"><span className="font-mono text-indigo-300">0{index + 1}</span><span className="text-lg text-white">{step}</span></li>)}</ol></aside>
          </div>
          <ul className="mt-12 grid gap-5 border-y border-white/10 py-7 md:grid-cols-3">{service.outcomes.map((outcome) => <li key={outcome} className="flex gap-3 text-slate-200"><Check className="size-5 shrink-0 text-indigo-300" aria-hidden />{outcome}</li>)}</ul>
        </div>
      </section>
      <section className="section section--quiet"><div className="container container--wide"><p className="eyebrow">Konkrete Einsatzfelder</p><h2 className="section-title mt-4 text-white">Wo Ihr Team entlastet werden kann</h2><div className="mt-10 grid gap-8 md:grid-cols-3">{service.cases.map((item) => <article key={item.title} className="border-t border-indigo-300/30 pt-6"><h3 className="text-2xl font-semibold text-white">{item.title}</h3><p className="mt-4 leading-7 text-slate-300">{item.text}</p></article>)}</div></div></section>
      <section className="section section--alt"><div className="container max-w-6xl"><p className="eyebrow">Von der Aufgabe zur Umsetzung</p><h2 className="section-title mt-4 text-white">Ein überschaubarer Einstieg. Klare nächste Schritte.</h2><ol className="mt-10 divide-y divide-white/15 border-y border-white/15">{service.steps.map((item, index) => <li key={item.title} className="grid gap-4 py-7 md:grid-cols-[3rem_1fr_1.4fr]"><span className="font-mono text-indigo-300">0{index + 1}</span><h3 className="text-xl font-semibold text-white">{item.title}</h3><p className="leading-7 text-slate-300">{item.text}</p></li>)}</ol></div></section>
      <section className="section section--quiet"><div className="container max-w-4xl"><h2 className="section-title text-white">Ihre Fragen zu {service.eyebrow}</h2><div className="mt-8"><FAQAccordion items={[...service.faqs]} /></div></div></section>
      <section className="section section--feature" data-mobile-cta-stop><div className="container max-w-4xl"><h2 className="section-title text-white">Lassen Sie uns Ihren konkreten Ablauf ansehen.</h2><p className="lede mt-5">Im kostenlosen Erstgespräch klären wir Ausgangslage, mögliche Ansatzpunkte und ob eine genauere Analyse sinnvoll ist.</p><Link href="/kontakt" className="cta-primary mt-7" data-track-event="cta_contact_click" data-track-label={`${service.eyebrow} Abschluss`}>Erstgespräch anfragen <ArrowRight className="ml-2 size-4" aria-hidden /></Link><div className="mt-10 flex flex-wrap gap-x-6 gap-y-3">{automationOffers.filter((offer) => offer.href !== path).map((offer) => <Link key={offer.id} href={offer.href} className="text-sm text-indigo-300 hover:text-white">{offer.title} →</Link>)}</div></div></section>
    </main><Footer /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  </>;
}
