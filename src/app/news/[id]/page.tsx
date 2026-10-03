import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InfoPage } from "@/components/InfoPage";
import { createPageMetadata } from "@/config/seo";
import {
  announcementTypeLabels,
  formatAnnouncementDate,
  getAnnouncement,
  listAnnouncementsNewestFirst,
} from "@/data/announcements";
import styles from "../news.module.css";

type NewsArticlePageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return listAnnouncementsNewestFirst().map((item) => ({ id: item.id }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: NewsArticlePageProps): Promise<Metadata> {
  const item = getAnnouncement((await params).id);
  if (!item) {
    return {};
  }

  return createPageMetadata({
    title: item.title,
    description: item.summary,
    path: `/news/${item.id}`,
  });
}

export default async function NewsArticlePage({ params }: NewsArticlePageProps) {
  const item = getAnnouncement((await params).id);
  if (!item) {
    notFound();
  }

  return (
    <InfoPage
      eyebrow="NEWS"
      title={item.title}
      description={item.summary}
      relatedLinks={[{ href: "/news", label: "お知らせ一覧" }]}
    >
      <p className={styles.meta}>
        <time dateTime={item.publishedAt}>{formatAnnouncementDate(item.publishedAt)}</time>
        <span className={styles.type}>{announcementTypeLabels[item.type]}</span>
      </p>
      <div className={styles.body}>
        {item.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </InfoPage>
  );
}
