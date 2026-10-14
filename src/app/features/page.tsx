import type { Metadata } from "next";
import { InfoPage } from "@/components/InfoPage";
import { createPageMetadata } from "@/config/seo";
import { productScreens } from "@/data/product-screens";

const description = "STAMU Aphasiaの訓練・記録・分析・評価・研究・データ受け渡し機能をご紹介します。";

export const metadata: Metadata = createPageMetadata({
  title: "STAMU Aphasiaの機能",
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
          title: "自主練習・訓練",
          paragraphs: [
            "6つの訓練カテゴリと29の訓練課題から、取り組む課題を選べます。問題数、選択肢数、課題語などを調整し、その人に合わせた自主練習・自主訓練へ進めます。",
            "お気に入り機能「あなたの訓練」を使い、よく行う訓練へ戻りやすくすることもできます。",
          ],
          screens: [
            productScreens.trainingCategoriesTop,
            productScreens.trainingQuestion,
          ],
        },
        {
          title: "記録・振り返り",
          paragraphs: [
            "訓練結果を保存し、Patient Recordから正答率、実施回数、課題ごとの履歴を振り返れます。",
            "自主練習をやりっぱなしにせず、次の訓練や支援へつなげるための記録として扱います。",
          ],
          screens: [
            productScreens.trainingResult,
            productScreens.patientRecord,
          ],
        },
        {
          title: "ST Dashboard・課題分析",
          paragraphs: [
            "言語聴覚士・STは、ST Dashboardから訓練履歴と成績を確認できます。課題別の成績や推移を見ながら、支援を考えるための情報を整理できます。",
            "Clinical Profileと合わせて、その人の背景と訓練結果を同じ流れで確認できます。",
          ],
          screens: [
            productScreens.stDashboard,
            productScreens.stTaskAnalysisTop,
          ],
        },
        {
          title: "評価・SLTA・臨床記録",
          paragraphs: [
            "実施済み評価結果を記録し、SLTAでは2時点比較やPDF出力に対応しています。",
            "Rehab Recordでは、実施した訓練、観察内容、SOAP、カルテ用テキストを同じ利用者の流れで扱えます。STAMU Aphasiaは診断や治療判断を行わず、電子カルテを置き換えるものではありません。",
          ],
          screens: [
            productScreens.sltaComparisonTop,
            productScreens.rehabRecordSoap,
          ],
        },
        {
          title: "研究モード・Research CSV",
          paragraphs: [
            "研究用訓練、研究用評価、研究設定、研究履歴、研究データ書き出しに対応しています。",
            "Research CSVは英語コード列を保ちつつ、日本語ラベルや課題名・課題説明を付加し、研究者が内容を確認しやすい形で出力します。",
          ],
          screens: [
            productScreens.stSupportMenu,
            productScreens.evaluationRecords,
          ],
        },
        {
          title: "データ受け渡し",
          paragraphs: [
            "自主練習データを書き出し・取り込みできるTransfer Packageに対応しています。",
            "患者端末とST側端末の間でデータを受け渡す際、誤った利用者への取り込みや重複取り込みを避けるための安全処理を備えています。",
          ],
          screens: [
            productScreens.patientRecord,
            productScreens.stDashboard,
          ],
        },
      ]}
      relatedLinks={[
        { href: "/for-st", label: "ST向け機能を見る" },
        { href: "/safety", label: "情報の扱いと安全性" },
      ]}
    />
  );
}
