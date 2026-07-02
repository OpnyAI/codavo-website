import { notFound } from "next/navigation";
import KnowledgeArticle from "@/components/content/KnowledgeArticle";
import { knowledgeArticles, type KnowledgeSlug } from "@/lib/knowledge";
import { createPageMetadata } from "@/lib/seo";
export function generateStaticParams() { return Object.keys(knowledgeArticles).map((slug) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const article = knowledgeArticles[slug as KnowledgeSlug]; if (!article) return {}; return createPageMetadata({ path: "/wissen/" + slug, title: article.title + " | Codavo Wissen", description: article.description }); }
export default async function Page({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const article = knowledgeArticles[slug as KnowledgeSlug]; if (!article) notFound(); const related = Object.entries(knowledgeArticles).filter(([key]) => key !== slug).slice(0, 3).map(([key, value]) => ({ href: "/wissen/" + key, label: value.title })); return <KnowledgeArticle path={"/wissen/" + slug} h1={article.title} intro={article.intro} directAnswer={article.answer} sections={article.sections} faqs={[...article.faqs]} related={related} />; }
