import type { Metadata } from "next";
import { InfoPage } from "@/components/InfoPage";
import { createPageMetadata } from "@/config/seo";

const description = "Re:Talkは、失語症のある方が日常の中で自主練習を続け、その記録を次のリハビリ支援へつなげるために生まれたアプリです。";

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
          title: "臨床の小さな不便から",
          paragraphs: ["Re:Talkは、言語聴覚士が失語症リハビリの現場で感じてきた課題から生まれました。教材を探して準備すること、訓練結果を記録・集計すること、利用者ごとに内容を調整すること。その一つひとつを、無理なく同じ流れにまとめることを目指しています。"],
        },
        {
          title: "自主練習を、支援につながる時間へ",
          paragraphs: ["自主練習・自主訓練だけで終わらせず、練習した結果を記録し、本人と支援者が振り返れる形にする。Re:Talkは、日常の練習と臨床での支援をつなぐリハビリテーションアプリです。"],
        },
      ]}
      relatedLinks={[
        { href: "/features", label: "できること" },
        { href: "/for-st", label: "言語聴覚士・STの方へ" },
      ]}
    />
  );
}
