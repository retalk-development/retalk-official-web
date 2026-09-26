import type { Metadata } from "next";
import { InfoPage } from "@/components/InfoPage";
import { createPageMetadata } from "@/config/seo";
import { productScreens } from "@/data/product-screens";

const description = "失語症の自主練習に使える訓練課題・教材と、練習結果の記録・振り返りをつなぐSTAMU Aphasiaの主な機能をご紹介します。";

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
          title: "失語症の自主練習を選び、調整する",
          paragraphs: ["6つの訓練カテゴリと29の訓練課題から、取り組む課題を選べます。問題数、選択肢数など課題ごとの設定と、文字・画像の大きさなどの利用者別設定を使い、その人に合わせた自主練習・自主訓練へ進めます。"],
          screens: [productScreens.trainingCategoriesTop, productScreens.trainingSetupTop],
        },
        {
          title: "課題語を選び、教材準備につなげる",
          paragraphs: ["検索・カテゴリ・頻度・使用状態から課題語を絞り、STAMU Aphasiaに収録された語から訓練に使う内容を選べます。すべての臨床教材を網羅するものではありません。"],
          screens: [productScreens.wordSettingsList],
        },
        {
          title: "訓練結果を記録し、Patient Recordで振り返る",
          paragraphs: ["実施した訓練の結果を記録し、Patient Recordで正答率、実施回数、課題ごとの履歴を振り返れます。"],
          screens: [productScreens.trainingResult, productScreens.patientRecord],
        },
        {
          title: "ST Dashboardで履歴と傾向を確認する",
          paragraphs: ["言語聴覚士・STは、ST Dashboardから訓練履歴と成績を確認できます。課題分析では実施回数や正答率の推移を振り返り、支援を考えるための情報を整理できます。"],
          screens: [productScreens.stDashboard, productScreens.stTaskAnalysisTop],
        },
        {
          title: "評価記録とRehab Recordを同じ流れに",
          paragraphs: ["評価結果の記録・比較と、実施した訓練、観察内容、SOAP、カルテ用テキストを扱うRehab Recordを、同じ利用者の流れで確認できます。STAMU Aphasiaは診断や治療判断を行わず、電子カルテを置き換えるものではありません。"],
          screens: [productScreens.evaluationRecords, productScreens.rehabRecordTop],
        },
      ]}
      relatedLinks={[
        { href: "/for-st", label: "ST向け機能を見る" },
        { href: "/safety", label: "情報の扱いと安全性" },
      ]}
    />
  );
}
