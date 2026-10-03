import type { MetadataRoute } from "next";
import { publicPages, siteUrl } from "@/config/site";
import { listAnnouncementsNewestFirst } from "@/data/announcements";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = publicPages.map(({ path, changeFrequency, priority }) => ({
    url: `${siteUrl}${path === "/" ? "" : path}`,
    changeFrequency,
    priority,
  }));
  const articles = listAnnouncementsNewestFirst().map((item) => ({
    url: `${siteUrl}/news/${item.id}`,
    changeFrequency: "yearly" as const,
    priority: 0.4,
  }));

  return [...pages, ...articles];
}
