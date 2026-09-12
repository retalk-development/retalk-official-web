import type { Metadata } from "next";
import { InfoPage } from "@/components/InfoPage";
import { createPageMetadata } from "@/config/seo";

const description = "言語聴覚士・STの失語症リハビリを支える、教材準備、訓練記録、評価、課題分析などRe:Talkの臨床向け機能をご紹介します。";

export const metadata: Metadata = createPageMetadata({
  title: "言語聴覚士・STの失語症リハビリ支援",
  description,
  path: "/for-st",
});

export default function ForStPage() {
  return (
    <InfoPage
      eyebrow="FOR ST"
      title="言語聴覚士・STの方へ"
      description={description}
      sections={[
        {
          title: "教材準備の手作業を減らす",
          paragraphs: ["失語症リハビリで使う課題語を、検索・カテゴリ・頻度・使用状態から絞り込めます。Re:Talkに収録された教材を利用者に合わせて選び、訓練設定まで同じ流れで進められます。"],
        },
        {
          title: "訓練履歴と課題分析を振り返る",
          paragraphs: ["Re:Talkで行った訓練の履歴、成績、正答率の推移を確認できます。構造化して残る情報を、誤りの傾向や次の支援を考えるための材料として活用できます。"],
        },
        {
          title: "評価・リハビリ記録を同じ利用者の流れに",
          paragraphs: ["SLTAの評価記録と2時点比較、実施した訓練、SOAP、カルテ用テキストを、同じ利用者に関わる情報として扱えます。Re:Talkは診断や治療判断を行わず、電子カルテを置き換えるものではありません。"],
        },
      ]}
      relatedLinks={[
        { href: "/features", label: "訓練課題と教材を見る" },
        { href: "/safety", label: "安全性を確認する" },
      ]}
    />
  );
}
