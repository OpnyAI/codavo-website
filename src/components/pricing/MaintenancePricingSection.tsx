import PricingCard from "@/components/pricing/PricingCard";
import { maintenancePackages } from "@/lib/pricing";

export default function MaintenancePricingSection() {
  return (
    <section className="section section--feature">
      <div className="container max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <p className="eyebrow">Hosting, Wartung und Updates</p>
          <h2 className="section-title mt-5 text-white">Betreuung passend zu Website und Änderungsbedarf</h2>
          <p className="lede mx-auto mt-6 max-w-3xl">Vier Betreuungsstufen schaffen einen nachvollziehbaren Rahmen für technischen Betrieb, Wartung und Weiterentwicklung.</p>
        </div>
        <div className="mt-12 grid items-stretch gap-5 md:grid-cols-2 xl:grid-cols-4">
          {maintenancePackages.map((item) => (
            <PricingCard key={item.name} item={item} trackingContext="Hosting Paket" />
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-6 text-slate-500">
          Die Pakete dienen als Orientierung. Der finale Betreuungsumfang richtet sich nach technischer Grundlage, Website-Umfang und gewünschter Weiterentwicklung.
        </p>
      </div>
    </section>
  );
}
