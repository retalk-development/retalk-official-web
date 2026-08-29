import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Re:Talk｜ことばのリハビリを、もっと日常へ。",
    template: "%s｜Re:Talk",
  },
  description:
    "失語症のある方の自主訓練を支え、訓練・記録・評価・支援をつなぐリハビリテーションプラットフォーム。",
  applicationName: "Re:Talk",
  keywords: ["Re:Talk", "失語症", "言語リハビリ", "言語聴覚士", "自主訓練"],
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
