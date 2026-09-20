import type { MetadataRoute } from "next";
import { publicPages, siteUrl } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return publicPages.map(({ path, changeFrequency, priority }) => ({
    url: `${siteUrl}${path === "/" ? "" : path}`,
    changeFrequency,
    priority,
  }));
}
