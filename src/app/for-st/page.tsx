import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AppStoreCta } from "@/components/AppStoreCta";
import { IllustrationSlot } from "@/components/IllustrationSlot";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { createPageMetadata } from "@/config/seo";
import { productScreens, type ProductScreen } from "@/data/product-screens";
import styles from "./for-st.module.css";

const description = "言語聴覚士・STの失語症リハビリと自主練習の管理を支える、支援ダッシュボード、SLTA評価記録、リハビリ記録、研究モードなど、STAMU Aphasiaの臨床活用をご紹介します。";

export const metadata: Metadata = createPageMetadata({
  title: "言語聴覚士・STの失語症リハビリ支援",
  description,
  path: "/for-st",
});

type ClinicalFeature = {
  id: string;
  number: string;
  label: string;
  title: string;
  lead: string;
  perspective: string;
  items: readonly string[];
  screens: readonly ProductScreen[];
  note?: string;
};

const clinicalFeatures: readonly ClinicalFeature[] = [
  {
    id: "dashboard",
    number: "01",
    label: "支援ダッシュボード",
    title: "自主練習の経過を、支援の材料に。",
    lead: "利用者ごとの訓練履歴と成績をまとめ、課題別の傾向や時間の流れを振り返れます。",
    perspective: "「実施したか」「どの課題でどう取り組んだか」を同じ画面の流れで確認し、次の支援を考えるための情報を整理します。",
    items: ["訓練履歴", "正答率", "課題別分析", "経時的な振り返り"],
    screens: [productScreens.stDashboard, productScreens.stTaskAnalysisTop],
  },
  {
    id: "evaluation",
    number: "02",
    label: "評価・SLTA",
    title: "評価記録を、時間の流れで比べる。",
    lead: "評価の元データを記録し、同じ検査の2時点を比較して経過を確認できます。",
    perspective: "SLTAの記録、プロフィール表示、2時点比較、PDF出力を、利用者ごとの評価記録からたどれます。",
    items: ["評価記録", "SLTA", "2時点比較", "PDF"],
    screens: [productScreens.evaluationRecords, productScreens.sltaComparisonTop],
    note: "表示結果は専門職による振り返りを補助するもので、診断や予後予測を自動で行うものではありません。",
  },
  {
    id: "rehab-record",
    number: "03",
    label: "リハビリ記録",
    title: "一回の介入を、振り返れる記録へ。",
    lead: "実施した訓練と観察を同じ記録にまとめ、臨床で確認しやすい形に整えます。",
    perspective: "実施訓練と観察内容から、SOAPやカルテ用テキストまでを一つのリハビリ記録の流れで確認できます。",
    items: ["実施訓練", "観察内容", "SOAP", "カルテ用テキスト"],
    screens: [productScreens.rehabRecordTop, productScreens.rehabRecordSoap, productScreens.rehabRecordKarte],
    note: "STAMU Aphasiaは電子カルテの代替ではありません。施設の記録方針に沿ってご利用ください。",
  },
  {
    id: "clinical-profile",
    number: "04",
    label: "臨床情報",
    title: "利用者背景と臨床情報を、同じ場所に。",
    lead: "利用者の背景と臨床情報を、訓練・評価・記録へ進む前提情報として確認できます。",
    perspective: "利用者ごとの情報を一つのプロフィールに整理し、別の方の記録と混同しにくい臨床導線を支えます。",
    items: ["利用者背景", "臨床情報", "利用者ごとの確認", "訓練・評価・記録への接続"],
    screens: [productScreens.userInfo],
  },
  {
    id: "research-mode",
    number: "05",
    label: "研究モード",
    title: "研究用の流れを、通常の臨床導線と分けて扱う。",
    lead: "研究用訓練・評価・設定・履歴とデータ書き出しを、研究モードにまとめています。",
    perspective: "通常の訓練記録と研究目的のセッションを区別し、研究条件と履歴を確認して研究用CSVを書き出せます。",
    items: ["研究用訓練", "研究用評価", "研究設定", "研究履歴", "研究用CSV"],
    screens: [productScreens.stSupportMenu],
    note: "研究計画、同意取得、データ管理は、所属機関の手続きと研究倫理に沿って行ってください。",
  },
  {
    id: "transfer-package",
    number: "06",
    label: "データ受け渡し",
    title: "患者端末の自主練習データを、確認して受け取る。",
    lead: "患者端末から書き出した自主練習データを、ST側の端末で対象利用者を確認して取り込めます。",
    perspective: "内容を先に読み込み、取り込み先を明示してから取り込みます。重複データは取り込みを見送り、既存データを自動上書きしません。",
    items: ["自主練習データの書き出し・取り込み", "取り込み先の明示確認", "重複取り込みの防止", "別利用者への誤取り込みを防ぐ安全処理"],
    screens: [productScreens.patientHomeBottom, productScreens.stSupportMenu],
    note: "現在の公開機能は、患者端末から医療機関側への自主練習データ受け渡しです。双方向同期や病院間の臨床情報移行ではありません。",
  },
];

function PhoneScreen({ screen, priority = false }: { screen: ProductScreen; priority?: boolean }) {
  return (
    <figure className={styles.phoneFigure}>
      <div className={styles.phoneFrame}>
        <Image
          src={screen.src}
          alt={screen.alt}
          width={592}
          height={1280}
          sizes="(max-width: 640px) 72vw, (max-width: 960px) 42vw, 18rem"
          style={{ objectPosition: screen.objectPosition }}
          priority={priority}
          loading={priority ? "eager" : undefined}
        />
      </div>
      <figcaption>{screen.label}</figcaption>
    </figure>
  );
}

function ScreenGallery({ screens }: { screens: readonly ProductScreen[] }) {
  return (
    <div className={styles.screenGallery} data-count={screens.length}>
      {screens.map((screen, index) => (
        <div key={screen.src} className={index > 0 ? styles.screenOffset : ""}>
          <PhoneScreen screen={screen} />
        </div>
      ))}
    </div>
  );
}

export default function ForStPage() {
  return (
    <>
      <SiteHeader />
      <main className={styles.page}>
        <header className={styles.hero}>
          <div className={styles.heroCopy}>
            <p>言語聴覚士・支援者の方へ</p>
            <h1>
              <span><span className={styles.noBreak}>訓練から</span><wbr /><span className={styles.noBreak}>記録まで、</span></span>
              <span><span className={styles.noBreak}>STの臨床を</span><wbr /><span className={styles.noBreak}>ひとつの流れに。</span></span>
            </h1>
            <p>{description}</p>
            <div className={styles.heroLinks}>
              <a href="#dashboard">臨床活用を見る <span aria-hidden="true">↓</span></a>
              <Link href="/safety">情報の扱いと安全性 <span aria-hidden="true">→</span></Link>
            </div>
            <dl className={styles.heroFacts}>
              <div><dt>訓練</dt><dd>訓練履歴と課題分析</dd></div>
              <div><dt>評価</dt><dd>評価・SLTAの記録</dd></div>
              <div><dt>記録</dt><dd>SOAPと臨床記録</dd></div>
            </dl>
            <div className={styles.heroIllustration}>
              <IllustrationSlot slot="for-st-clinical-flow" caption="臨床で振り返るイメージ" />
            </div>
          </div>
          <div className={styles.heroVisual}>
            <p>自主練習の結果を、<br />次の支援へ。</p>
            <div className={styles.heroPhones}>
              <div className={styles.heroMainScreen}><PhoneScreen screen={productScreens.stDashboard} priority /></div>
              <div className={styles.heroSubScreen}><PhoneScreen screen={productScreens.rehabRecordSoap} priority /></div>
            </div>
          </div>
        </header>

        <nav className={styles.index} aria-label="ST向け機能">
          {clinicalFeatures.map((feature) => (
            <a key={feature.id} href={`#${feature.id}`}>
              <span>{feature.number}</span>{feature.label}
            </a>
          ))}
        </nav>

        <div className={styles.clinicalFlow}>
          {clinicalFeatures.map((feature, index) => (
            <section key={feature.id} id={feature.id} className={styles.featureSection}>
              <div className={styles.featureInner}>
                <div className={styles.featureCopy}>
                  <p className={styles.featureNumber}>CLINICAL USE <strong>{feature.number}</strong></p>
                  <p className={styles.featureLabel}>{feature.label}</p>
                  <h2>{feature.title}</h2>
                  <p className={styles.featureLead}>{feature.lead}</p>
                  <div className={styles.perspective}>
                    <span>臨床での見方</span>
                    <p>{feature.perspective}</p>
                  </div>
                  <ul aria-label={`${feature.label}の主な機能`}>
                    {feature.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                  {feature.note && <p className={styles.featureNote}>{feature.note}</p>}
                </div>
                <div className={styles.featureVisual} data-reverse={index % 2 === 1 ? "true" : "false"}>
                  <ScreenGallery screens={feature.screens} />
                </div>
              </div>
            </section>
          ))}
        </div>

        <aside className={styles.boundary}>
          <p>CLINICAL BOUNDARY</p>
          <h2>記録と可視化は、専門職の判断を補助するために。</h2>
          <p>STAMU Aphasiaは、診断、予後予測、治療判断を自動で行わず、電子カルテを置き換えるものではありません。表示された情報は、本人の振り返りや言語聴覚士による支援を補助するためのものです。</p>
          <div>
            <Link href="/features">全機能の一覧を見る <span aria-hidden="true">→</span></Link>
            <Link href="/safety">安全性を確認する <span aria-hidden="true">→</span></Link>
          </div>
        </aside>

        <section className={styles.download} aria-labelledby="for-st-download-title">
          <div>
            <p>FREE DOWNLOAD</p>
            <h2 id="for-st-download-title">自主練習と臨床の記録を、<br />同じアプリで。</h2>
            <span>STAMU Aphasiaは無料。iPhone / iPad対応です。</span>
          </div>
          <AppStoreCta />
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
