import type { Metadata } from "next";
import type { ReactNode } from "react";
import { withPreviewRobots } from "@/config/seo";
import { siteConfig, siteUrl } from "@/config/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "STAMU Aphasia | 失語症の自主練習を支えるリハビリアプリ",
    template: "%s | STAMU Aphasia",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "STAMU Aphasia",
    "STAMU",
    "失語症",
    "失語症アプリ",
    "失語症リハビリ",
    "失語症リハビリアプリ",
    "自主練習",
    "自主訓練",
    "言語訓練",
    "訓練課題",
    "教材",
    "言語聴覚士",
    "言語聴覚士アプリ",
  ],
  robots: withPreviewRobots({ index: true, follow: true }),
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
