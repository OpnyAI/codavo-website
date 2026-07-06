import { notFound } from "next/navigation";
import KnowledgeArticle from "@/components/content/KnowledgeArticle";
import { knowledgeArticles, type KnowledgeSlug } from "@/lib/knowledge";
import { createPageMetadata } from "@/lib/seo";
export function generateStaticParams() { return Object.keys(knowledgeArticles).map((slug) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const article = knowledgeArticles[slug as KnowledgeSlug]; if (!article) return {}; return createPageMetadata({ path: "/wissen/" + slug, title: article.title + " | Codavo Wissen", description: article.description }); }
export default async function Page({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const article = knowledgeArticles[slug as KnowledgeSlug]; if (!article) notFound(); const related = article.related.map((key) => { const relatedArticle = knowledgeArticles[key as KnowledgeSlug]; return { href: "/wissen/" + key, label: relatedArticle.title }; }); return <KnowledgeArticle path={"/wissen/" + slug} h1={article.title} intro={article.intro} directAnswer={article.answer} sections={article.sections} faqs={[...article.faqs]} related={related} primaryMoneyPage={article.primaryMoneyPage} secondaryLinks={article.secondaryLinks} />; }
