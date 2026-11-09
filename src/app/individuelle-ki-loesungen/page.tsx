import AutomationServicePage from "@/components/AutomationServicePage";
import { automationServices } from "@/lib/automation-services";
import { createPageMetadata } from "@/lib/seo";
const slug = "individuelle-ki-loesungen";
const service = automationServices[slug];
export const metadata = createPageMetadata({ path: `/${slug}`, title: `${service.eyebrow} für den Mittelstand | Codavo`, description: service.description, automationImage: true });
export default function Page() { return <AutomationServicePage slug={slug} />; }
