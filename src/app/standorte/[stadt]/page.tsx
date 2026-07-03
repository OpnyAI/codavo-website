import { notFound } from "next/navigation";
import LocationLandingPage from "@/components/locations/LocationLandingPage";
import { locationBySlug, locationProfiles } from "@/lib/locations";
import { createPageMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ stadt: string }>;
};

export function generateStaticParams() {
  return locationProfiles.map((location) => ({ stadt: location.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { stadt } = await params;
  const location = locationBySlug.get(stadt);

  if (!location) {
    return createPageMetadata({ path: `/standorte/${stadt}`, noIndex: true });
  }

  return createPageMetadata({
    path: `/standorte/${location.slug}`,
    title: location.title,
    description: location.description,
    imageAlt: `Codavo Webstudio – digitale Lösungen für ${location.city}`,
  });
}

export default async function LocationPage({ params }: Props) {
  const { stadt } = await params;
  const location = locationBySlug.get(stadt);

  if (!location) notFound();

  return <LocationLandingPage location={location} />;
}
