import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AppStoreCta } from "@/components/AppStoreCta";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { createPageMetadata } from "@/config/seo";
import { productScreens, type ProductScreen } from "@/data/product-screens";
import styles from "./features.module.css";

const description = "失語症の自主訓練に使える29課題、利用者記録、支援ダッシュボード、臨床情報、評価、リハビリ記録、データ移行など、STAMU Aphasiaの機能をご紹介します。";

export const metadata: Metadata = createPageMetadata({
  title: "失語症の訓練課題・自主訓練・SLTA記録の機能一覧",
  description,
  path: "/features",
});

type FeatureCategory = {
  id: string;
  number: string;
  title: string;
  lead: string;
  items: readonly string[];
  screens: readonly ProductScreen[];
  note?: string;
};

const categories: readonly FeatureCategory[] = [
  {
    id: "self-practice",
    number: "01",
    title: "自主練習",
    lead: "失語症のある方が、自分に合った課題を選んで繰り返し取り組めます。",
    items: ["6つの訓練カテゴリ", "29の訓練課題", "聞く・読む・話す・書く課題", "iPhone / iPad対応"],
    screens: [productScreens.trainingCategoriesTop, productScreens.trainingQuestion],
  },
  {
    id: "training-setup",
    number: "02",
    title: "訓練設定とフィードバック",
    lead: "課題と利用者に合わせて内容を調整し、回答後の確認まで取り組みやすく整えます。",
    items: ["問題数・選択肢数", "課題語の設定", "利用者別設定", "語彙・誤答フィードバック", "あなたの訓練"],
    screens: [productScreens.trainingSetupTop, productScreens.trainingCorrect],
  },
  {
    id: "result-record",
    number: "03",
    title: "結果と利用者記録",
    lead: "練習した結果を残し、本人や家族が取り組みを振り返れる形にします。",
    items: ["訓練結果", "正答率と実施回数", "訓練の実施履歴", "中断した訓練の再開"],
    screens: [productScreens.trainingResult, productScreens.patientRecord],
  },
  {
    id: "dashboard-profile",
    number: "04",
    title: "支援ダッシュボードと臨床情報",
    lead: "訓練履歴や傾向と、利用者の基本情報・臨床情報を利用者ごとに確認できます。",
    items: ["概要・課題別・分析", "正答率の推移", "リハビリ時間", "基本情報・臨床情報"],
    screens: [productScreens.stDashboard, productScreens.userInfo],
    note: "リハビリ時間は課題セッション中の推定値です。診療報酬上の実施時間を証明するものではありません。",
  },
  {
    id: "assessment-evaluation",
    number: "05",
    title: "導入判定と評価",
    lead: "STAMU導入判定と評価の元データを記録し、訂正履歴や検査の経過を確認できます。",
    items: ["STAMU導入判定", "導入判定の訂正履歴", "SLTA・RCPM", "SLTAの2時点比較", "SLTAのPDF"],
    screens: [productScreens.evaluationRecords, productScreens.sltaComparisonTop],
  },
  {
    id: "rehab-record",
    number: "06",
    title: "リハビリ記録",
    lead: "実施した訓練と観察内容を、臨床で振り返れる記録にまとめます。",
    items: ["実施訓練と条件", "SOAP", "リハビリ記録一覧", "カルテ用テキスト", "コピー・OS共有"],
    screens: [productScreens.rehabRecordSoap, productScreens.rehabRecordKarte],
    note: "STAMU Aphasiaは電子カルテの代替ではありません。共有先と送信完了はアプリが保証するものではありません。",
  },
  {
    id: "training-transfer",
    number: "07",
    title: "自主練習データの移行",
    lead: "患者端末で行った自主練習データを書き出し、ST側で対象利用者を確認して取り込めます。",
    items: ["自主練習データの書き出し・取り込み", "期間を指定した書き出し", "取り込み先の明示確認", "重複・別利用者の安全処理"],
    screens: [productScreens.patientHomeBottom, productScreens.stSupportMenu],
    note: "患者端末からST側へデータを受け渡す機能です。クラウド同期やリアルタイム同期ではありません。",
  },
  {
    id: "clinical-transfer",
    number: "08",
    title: "臨床データ移行",
    lead: "患者単位の臨床データを暗号化ファイルへ書き出し、別の端末で確認して取り込めます。",
    items: ["臨床情報・評価・リハビリ記録", "訓練セッション一式", "パスフレーズによる暗号化", "取り込み先の明示確認"],
    screens: [productScreens.userInfo, productScreens.stSupportMenu],
    note: "院内などで端末間のデータ移送に使う機能です（Clinical Transfer）。自動同期、遠隔削除、STAMU独自クラウドへの保存は行いません。",
  },
  {
    id: "research-mode",
    number: "09",
    title: "研究モード（試験提供）",
    lead: "研究用の訓練・評価・設定・履歴とデータ書き出しを、Ver.1.4で試験提供中です。",
    items: ["研究用の訓練・評価", "研究設定", "研究履歴", "研究用CSVの書き出し"],
    screens: [productScreens.stSupportMenu],
    note: "試験提供は、研究用途としての妥当性や動作を保証するものではありません。",
  },
];

function FeatureScreens({ screens }: { screens: readonly ProductScreen[] }) {
  return (
    <div className={styles.screenGroup}>
      {screens.map((screen, index) => (
        <figure key={`${screen.src}-${index}`} className={index === 1 ? styles.offsetScreen : ""}>
          <div>
            <Image
              src={screen.src}
              alt={screen.alt}
              width={592}
              height={1280}
              sizes="(max-width: 640px) 45vw, 15rem"
              style={{ objectPosition: screen.objectPosition }}
            />
          </div>
          <figcaption>{screen.label}</figcaption>
        </figure>
      ))}
    </div>
  );
}

export default function FeaturesPage() {
  return (
    <>
      <SiteHeader />
      <main className={styles.page}>
        <header className={styles.hero}>
          <div>
            <p>機能一覧</p>
            <h1>できること</h1>
            <p>{description}</p>
          </div>
          <div className={styles.heroIllustration}>
            <Image
              src="/brand/features-overview.png"
              alt="利用者ホーム、STダッシュボード、評価記録、リハビリ記録など、STAMU Aphasiaの機能を俯瞰した画面イメージ"
              width={2172}
              height={724}
              priority
              sizes="(max-width: 840px) 92vw, 72rem"
            />
          </div>
        </header>

        <nav className={styles.index} aria-label="機能カテゴリ">
          {categories.map((category) => (
            <a key={category.id} href={`#${category.id}`}>
              <span>{category.number}</span>{category.title}
            </a>
          ))}
        </nav>

        <div className={styles.catalog}>
          {categories.map((category) => (
            <section key={category.id} id={category.id} className={styles.category}>
              <div className={styles.copy}>
                <p>機能 <strong>{category.number}</strong></p>
                <h2>{category.title}</h2>
                <p>{category.lead}</p>
                <ul>
                  {category.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
                {category.note && <p className={styles.featureNote}>{category.note}</p>}
              </div>
              <FeatureScreens screens={category.screens} />
            </section>
          ))}
        </div>

        <aside className={styles.boundary}>
          <h2>記録は、判断を支えるために。</h2>
          <p>STAMU Aphasiaは診断、予後予測、治療判断を行わず、電子カルテを置き換えるものではありません。表示された情報は、本人の振り返りや専門職による支援を補助するためのものです。</p>
          <div>
            <Link href="/for-st">ST向け機能を見る <span aria-hidden="true">→</span></Link>
            <Link href="/safety">安全性を見る <span aria-hidden="true">→</span></Link>
          </div>
        </aside>

        <section className={styles.download} aria-labelledby="features-download-title">
          <div>
            <p>FREE DOWNLOAD</p>
            <h2 id="features-download-title">29の訓練課題を、毎日の練習に。</h2>
            <span className={styles.deviceNote}>STAMU Aphasiaは無料。iPhone / iPad対応です。</span>
          </div>
          <AppStoreCta />
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
