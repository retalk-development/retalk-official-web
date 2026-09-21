import type { Metadata } from "next";
import { withPreviewRobots } from "@/config/seo";
import { siteConfig, siteUrl } from "@/config/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Re:Talk | 失語症の自主練習を支えるリハビリアプリ",
    template: "%s | Re:Talk",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "Re:Talk",
    "失語症",
    "失語症リハビリ",
    "自主練習",
    "自主訓練",
    "言語訓練",
    "訓練課題",
    "教材",
    "言語聴覚士",
  ],
  robots: withPreviewRobots({ index: true, follow: true }),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
