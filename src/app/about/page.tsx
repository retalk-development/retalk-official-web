import type { Metadata } from "next";
import { InfoPage } from "@/components/InfoPage";
import { createPageMetadata } from "@/config/seo";

const description = "Re:Talkは、失語症のある方の自主練習・自主訓練を支え、訓練・記録・評価・支援をつなぐリハビリテーションアプリです。";

export const metadata: Metadata = createPageMetadata({
  title: "失語症の自主練習を日常へつなぐ開発背景",
  description,
  path: "/about",
});

export default function AboutPage() {
  return (
    <InfoPage
      eyebrow="ABOUT"
      title="Re:Talkについて"
      description={description}
      sections={[
        {
          title: "現場から、つくりました。",
          paragraphs: ["Re:Talkは、言語聴覚士が失語症リハビリの現場で感じてきた課題から生まれました。教材を探して準備する。訓練結果を記録し、評価と照らして振り返る。利用者ごとに内容を調整する。こうした作業には、それぞれ時間がかかります。"],
        },
        {
          title: "だから、ひとつにつなげる。",
          paragraphs: ["自主練習・自主訓練だけで終わらせず、練習した結果を記録し、本人と支援者が振り返れる形にする。Re:Talkは、訓練・記録・評価・支援を同じ流れで扱い、日常の練習を次のリハビリ支援へつなぐことを目指しています。"],
        },
      ]}
      relatedLinks={[
        { href: "/features", label: "できること" },
        { href: "/for-st", label: "言語聴覚士・STの方へ" },
      ]}
    />
  );
}
