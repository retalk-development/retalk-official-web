import type { Metadata } from "next";
import { InfoPage } from "@/components/InfoPage";
import { createPageMetadata } from "@/config/seo";

const description = "失語症の自主練習に使える訓練課題・教材と、練習結果の記録・振り返りをつなぐRe:Talkの主な機能をご紹介します。";

export const metadata: Metadata = createPageMetadata({
  title: "失語症の訓練課題・教材と記録機能",
  description,
  path: "/features",
});

export default function FeaturesPage() {
  return (
    <InfoPage
      eyebrow="FEATURES"
      title="できること"
      description={description}
      sections={[
        {
          title: "自分に合った訓練を選ぶ",
          paragraphs: ["6つの訓練カテゴリと29の訓練課題から、取り組みたい領域や目的に合わせて選べます。課題ごとに用意された設定を使い、その人に合った自主練習・自主訓練へ進めます。"],
        },
        {
          title: "訓練課題や教材を、アプリ内にまとめる",
          paragraphs: ["失語症リハビリで使う訓練課題や教材をアプリ内にまとめ、教材を探す・準備する負担を減らします。すべての臨床教材を網羅するものではなく、Re:Talkに収録された内容から目的に合う課題語を選んで使用します。"],
        },
        {
          title: "練習の結果を記録し、振り返る",
          paragraphs: ["実施した訓練の結果を記録し、これまでの自主練習を振り返れます。言語聴覚士・STは訓練履歴や成績を確認し、次の支援を考えるための情報として活用できます。"],
        },
      ]}
      relatedLinks={[
        { href: "/for-st", label: "ST向け機能を見る" },
        { href: "/safety", label: "情報の扱いと安全性" },
      ]}
    />
  );
}
