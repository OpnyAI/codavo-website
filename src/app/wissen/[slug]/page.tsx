import { notFound } from "next/navigation";
import KnowledgeArticle from "@/components/content/KnowledgeArticle";
import {
  knowledgeArticleDates,
  knowledgeArticles,
  type KnowledgeSlug,
} from "@/lib/knowledge";
import { createPageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return Object.keys(knowledgeArticles).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = knowledgeArticles[slug as KnowledgeSlug];

  if (!article) return {};

  const title =
    "seoTitle" in article
      ? article.seoTitle
      : `${article.title} | Codavo Wissen`;

  return createPageMetadata({
    path: `/wissen/${slug}`,
    title,
    description: article.description,
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const typedSlug = slug as KnowledgeSlug;
  const article = knowledgeArticles[typedSlug];

  if (!article) notFound();

  const related = article.related.map((key) => {
    const relatedArticle = knowledgeArticles[key as KnowledgeSlug];
    return { href: `/wissen/${key}`, label: relatedArticle.title };
  });
  const dates = knowledgeArticleDates[typedSlug];
  const sources = "sources" in article ? article.sources : undefined;

  return (
    <KnowledgeArticle
      path={`/wissen/${slug}`}
      h1={article.title}
      intro={article.intro}
      directAnswer={article.answer}
      sections={article.sections}
      faqs={[...article.faqs]}
      related={related}
      primaryMoneyPage={article.primaryMoneyPage}
      secondaryLinks={article.secondaryLinks}
      publishedAt={dates.publishedAt}
      updatedAt={dates.updatedAt}
      sources={sources}
    />
  );
}
