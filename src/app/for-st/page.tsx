import type { Metadata } from "next";
import { InfoPage } from "@/components/InfoPage";
import { createPageMetadata } from "@/config/seo";
import { productScreens } from "@/data/product-screens";

const description = "言語聴覚士・STの失語症リハビリを支える、教材準備、訓練記録、評価、課題分析などSTAMU Aphasiaの臨床向け機能をご紹介します。";

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
          title: "自主練習と臨床の流れをつなぐ",
          paragraphs: ["STAMU Aphasiaは患者さんの自主練習だけでなく、言語聴覚士・STが行う教材準備、訓練履歴の確認、評価、リハビリ記録を支える機能を備えています。"],
          screens: [productScreens.stSupportMenu, productScreens.stDashboard],
        },
        {
          title: "教材準備の手作業を減らす",
          paragraphs: ["失語症リハビリで使う課題語を、検索・カテゴリ・頻度・使用状態から絞り込めます。STAMU Aphasiaに収録された教材を利用者に合わせて選び、訓練設定まで同じ流れで進められます。"],
          screens: [productScreens.wordSettingsFilter, productScreens.wordSettingsList],
        },
        {
          title: "訓練履歴と課題分析を振り返る",
          paragraphs: ["STAMU Aphasiaで行った訓練の履歴、成績、正答率の推移を確認できます。結果を振り返り、傾向を確認し、誤りの特徴を整理するための材料として活用できます。"],
          screens: [productScreens.stTaskAnalysisTop, productScreens.stTaskAnalysisBottom],
        },
        {
          title: "評価記録を確認する",
          paragraphs: ["評価結果を記録し、同じ検査の2時点を比較できます。表示された結果は、専門職が経過を振り返るための情報であり、診断や予後予測を自動で行うものではありません。"],
          screens: [productScreens.sltaDetailGraph, productScreens.sltaComparisonTop],
        },
        {
          title: "Rehab Recordで記録をまとめる",
          paragraphs: ["実施した訓練と観察内容を記録し、SOAPやカルテ用テキストとして確認できます。教材準備や記録の手間を減らしながら、臨床判断は専門職が行う前提を保ちます。STAMU Aphasiaは電子カルテの代替ではありません。"],
          screens: [productScreens.rehabRecordTop, productScreens.rehabRecordSoap],
        },
        {
          title: "利用者ごとの設定を整える",
          paragraphs: ["課題語、問題数、選択肢数、文字・画像の大きさなどを、利用者や課題に応じて調整できます。"],
          screens: [productScreens.userInfo, productScreens.trainingSetupTop],
        },
      ]}
      relatedLinks={[
        { href: "/features", label: "訓練課題と教材を見る" },
        { href: "/safety", label: "安全性を確認する" },
      ]}
    />
  );
}
