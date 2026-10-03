import type { Metadata } from "next";
import Link from "next/link";
import { InfoPage } from "@/components/InfoPage";
import { createPageMetadata } from "@/config/seo";
import {
  announcementTypeLabels,
  formatAnnouncementDate,
  listAnnouncementsNewestFirst,
} from "@/data/announcements";
import styles from "./news.module.css";

const description = "STAMU Aphasiaの公開と更新に関するお知らせです。";

export const metadata: Metadata = createPageMetadata({
  title: "お知らせ",
  description,
  path: "/news",
});

export default function NewsPage() {
  const items = listAnnouncementsNewestFirst();

  return (
    <InfoPage
      eyebrow="NEWS"
      title="お知らせ"
      description={description}
      relatedLinks={[{ href: "/contact", label: "お問い合わせ" }]}
    >
      {items.length === 0 ? (
        <p className={styles.empty}>現在、お知らせはありません。</p>
      ) : (
        <ul className={styles.list}>
          {items.map((item) => (
            <li key={item.id}>
              <Link className={styles.card} href={`/news/${item.id}`}>
                <p className={styles.meta}>
                  <time dateTime={item.publishedAt}>{formatAnnouncementDate(item.publishedAt)}</time>
                  <span className={styles.type}>{announcementTypeLabels[item.type]}</span>
                </p>
                <h2>{item.title}</h2>
                <p>{item.summary}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </InfoPage>
  );
}
