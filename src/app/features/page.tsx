import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AppStoreCta } from "@/components/AppStoreCta";
import { IllustrationSlot } from "@/components/IllustrationSlot";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { createPageMetadata } from "@/config/seo";
import { productScreens, type ProductScreen } from "@/data/product-screens";
import styles from "./features.module.css";

const description = "失語症の自主訓練に使える29課題、課題語設定、利用者記録、支援ダッシュボード、SLTA記録、リハビリ記録など、STAMU Aphasiaの機能をご紹介します。";

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
};

const categories: readonly FeatureCategory[] = [
  {
    id: "self-practice",
    number: "01",
    title: "自主練習",
    lead: "失語症のある方が、自分に合った課題を選んで繰り返し取り組めます。",
    items: ["6つの訓練カテゴリ", "29の訓練課題", "ホームから迷いにくい導線", "iPhone / iPad対応"],
    screens: [productScreens.trainingCategoriesTop, productScreens.taskListTop],
  },
  {
    id: "training-setup",
    number: "02",
    title: "訓練設定",
    lead: "課題と利用者に合わせて、取り組む内容や見え方を整えます。",
    items: ["問題数・選択肢数", "課題語の設定", "文字・画像などの利用者別設定", "あなたの訓練"],
    screens: [productScreens.trainingSetupTop, productScreens.wordSettingsList],
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
    id: "st-dashboard",
    number: "04",
    title: "支援ダッシュボード",
    lead: "言語聴覚士が、訓練履歴と傾向を利用者ごとに確認できます。",
    items: ["概要・課題別・分析", "課題分析", "正答率の推移", "臨床情報"],
    screens: [productScreens.stDashboard, productScreens.stTaskAnalysisTop],
  },
  {
    id: "evaluation-slta",
    number: "05",
    title: "評価・SLTA",
    lead: "評価の元データを記録し、同じ検査の経過を比較できます。",
    items: ["評価記録", "SLTA記録", "SLTAの2時点比較", "SLTAのPDF"],
    screens: [productScreens.evaluationRecords, productScreens.sltaComparisonTop],
  },
  {
    id: "rehab-record",
    number: "06",
    title: "リハビリ記録",
    lead: "実施した訓練と観察内容を、臨床で振り返れる記録にまとめます。",
    items: ["実施訓練", "SOAP", "リハビリ記録一覧", "カルテ用テキスト"],
    screens: [productScreens.rehabRecordSoap, productScreens.rehabRecordKarte],
  },
  {
    id: "research",
    number: "07",
    title: "研究",
    lead: "通常の臨床導線と区別した研究モードで、研究用データを扱います。",
    items: ["研究用の訓練・評価", "研究設定", "研究履歴", "研究用CSVの書き出し"],
    screens: [productScreens.stSupportMenu],
  },
  {
    id: "transfer-package",
    number: "08",
    title: "データ受け渡し",
    lead: "自主練習データを書き出し・取り込みし、支援先での振り返りにつなげます。",
    items: ["データの書き出し・取り込み", "内容を確認してから取り込む", "取り込み先の明示確認", "別利用者・重複取り込みの安全処理"],
    screens: [productScreens.patientHomeBottom, productScreens.stSupportMenu],
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
            <IllustrationSlot slot="features-catalog" caption="各機能のイメージ" />
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
                <p>FEATURE <strong>{category.number}</strong></p>
                <h2>{category.title}</h2>
                <p>{category.lead}</p>
                <ul>
                  {category.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
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
            <span>STAMU Aphasiaは無料。iPhone / iPad対応です。</span>
          </div>
          <AppStoreCta />
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
