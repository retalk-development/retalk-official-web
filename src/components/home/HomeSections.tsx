import Image from "next/image";
import Link from "next/link";
import { AppStoreCta } from "@/components/AppStoreCta";
import { BrandLogo } from "@/components/BrandLogo";
import { FAQAccordion } from "@/components/FAQAccordion";
import {
  concernGroups,
  homepagePoints,
  patientSteps,
  researchEvidenceGroups,
  stFeatureCards,
  supporterSteps,
} from "@/data/homepage";
import { productScreens, type ProductScreen } from "@/data/product-screens";
import styles from "./home.module.css";

function SectionHeading({
  eyebrow,
  title,
  copy,
  centered = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  copy?: string;
  centered?: boolean;
}) {
  return (
    <header className={`${styles.sectionHeading} ${centered ? styles.centered : ""}`}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h2>{title}</h2>
      {copy && <p className={styles.sectionLead}>{copy}</p>}
    </header>
  );
}

function PhoneScreen({ screen, priority = false }: { screen: ProductScreen; priority?: boolean }) {
  return (
    <figure className={styles.phoneFigure}>
      <div className={styles.phoneFrame}>
        <Image
          src={screen.src}
          alt={screen.alt}
          width={592}
          height={1280}
          sizes="(max-width: 640px) 58vw, (max-width: 1024px) 30vw, 18rem"
          style={{ objectPosition: screen.objectPosition }}
          priority={priority}
        />
      </div>
      <figcaption>{screen.label}</figcaption>
    </figure>
  );
}

function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link className={styles.textLink} href={href}>
      {children}<span aria-hidden="true">→</span>
    </Link>
  );
}

function HeroFactIcon({ kind }: { kind: "device" | "training" | "category" }) {
  if (kind === "device") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3.5" y="5" width="10" height="14" rx="2" />
        <path d="M7 16.5h3" />
        <rect x="15.5" y="2.5" width="5" height="10" rx="1.3" />
      </svg>
    );
  }

  if (kind === "training") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4" y="5" width="13" height="14" rx="2" />
        <path d="M8 9h5M8 13h5M8 17h3M8 3h12v13" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="4" y="4" width="6" height="6" rx="1.2" />
      <rect x="14" y="4" width="6" height="6" rx="1.2" />
      <rect x="4" y="14" width="6" height="6" rx="1.2" />
      <rect x="14" y="14" width="6" height="6" rx="1.2" />
    </svg>
  );
}

export function HeroSection() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.heroInner}>
        <div className={styles.heroMedia} aria-hidden="true">
          <Image
            className={styles.heroBackdrop}
            src="/brand/home-hero-tech2.png"
            alt=""
            fill
            priority
            sizes="(max-width: 820px) 100vw, 1280px"
          />
        </div>
        <div className={styles.heroCopy}>
          <div className={styles.heroLogo}><BrandLogo /></div>
          <p className={styles.heroKicker}>失語症の自主練習と支援を、ひとつのアプリで</p>
          <h1 id="hero-title">
            <span>ことばのリハビリを、</span>
            <span>もっと日常へ。</span>
          </h1>
          <p className={styles.heroLead}>
            STAMU Aphasiaは、<span className={styles.noBreak}>失語症のある方の自主練習</span>と、
            <span className={styles.noBreak}>言語聴覚士による記録・振り返り</span>を支える<span className={styles.noBreak}>無料アプリ</span>です。
          </p>
          <div className={styles.heroCtaRow}>
            <AppStoreCta prominent />
            <p className={styles.heroFreeNote}>
              <strong>無料で利用できます</strong>
            </p>
          </div>
          <ul className={styles.heroFacts} aria-label="STAMU Aphasiaの概要">
            <li className={styles.heroFactDevice}>
              <span className={styles.heroFactIcon}><HeroFactIcon kind="device" /></span>
              <span className={styles.heroFactValue}><strong>iPhone / iPad</strong><span>対応</span></span>
            </li>
            <li>
              <span className={styles.heroFactIcon}><HeroFactIcon kind="training" /></span>
              <span className={styles.heroFactValue}><strong>29</strong><span>の訓練課題</span></span>
            </li>
            <li>
              <span className={styles.heroFactIcon}><HeroFactIcon kind="category" /></span>
              <span className={styles.heroFactValue}><strong>6</strong><span>カテゴリ</span></span>
            </li>
          </ul>
          <TextLink href="/features">できることを詳しく見る</TextLink>
        </div>

      </div>
    </section>
  );
}

export function AboutProductSection() {
  const items = [
    {
      number: "01",
      title: "自主練習を、もっと取り組みやすく",
      copy: "失語症の訓練課題をアプリにまとめ、その人に合わせて繰り返し練習できます。",
    },
    {
      number: "02",
      title: "練習を、次の支援につなげる",
      copy: "練習した結果を記録し、本人の振り返りやSTによる支援につなげます。",
    },
  ];

  return (
    <section className={`${styles.section} ${styles.aboutSection}`} id="about-product">
      <div className={styles.container}>
        <SectionHeading eyebrow="ABOUT" title="STAMU Aphasiaとは？" centered />
        <div className={styles.aboutGrid}>
          {items.map((item) => (
            <article key={item.number} className={styles.aboutCard}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
        <div className={styles.illustrationWrap}>
          <Image
            src="/brand/home-practice-support.png"
            alt="言語聴覚士、失語症のある方、ご家族がタブレットを囲み、練習と支援を一緒に振り返る様子"
            width={1448}
            height={1086}
            sizes="(max-width: 640px) 88vw, 36rem"
          />
        </div>
      </div>
    </section>
  );
}

export function PointsSection() {
  return (
    <section className={`${styles.section} ${styles.pointsSection}`} id="points">
      <div className={styles.container}>
        <SectionHeading
          eyebrow="4 POINTS"
          title="練習する人にも、支える人にも。"
          copy="必要な機能を、一つずつ分かりやすくつなぎました。"
          centered
        />
        <div className={styles.pointList}>
          {homepagePoints.map((point) => (
            <article key={point.number} className={styles.pointRow}>
              <div className={styles.pointCopy}>
                <p className={styles.pointNumber}>POINT <strong>{point.number}</strong></p>
                <h3>{point.title}</h3>
                <p className={styles.pointDescription}>{point.description}</p>
                <ul className={styles.tagList} aria-label={`${point.title}の要点`}>
                  {point.tags.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
              </div>
              <div className={styles.screenPair}>
                <PhoneScreen screen={point.screens[0]} />
              </div>
            </article>
          ))}
        </div>
        <div className={styles.midCta}>
            <div>
            <p>無料で始められます</p>
            <h3>毎日の練習を、今日から。</h3>
            <span className={styles.deviceNote}>iPhone / iPad対応</span>
          </div>
          <AppStoreCta />
        </div>
      </div>
    </section>
  );
}

export function ConcernsSection() {
  return (
    <section className={`${styles.section} ${styles.concernsSection}`} id="concerns">
      <div className={styles.container}>
        <SectionHeading eyebrow="FOR YOU" title="こんなお悩みはありませんか？" centered />
        <div className={styles.concernGrid}>
          {concernGroups.map((group, index) => (
            <article key={group.label} className={styles.concernCard} data-audience={index === 0 ? "patient" : "supporter"}>
              <p>{group.label}</p>
              <ul>
                {group.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          ))}
        </div>
        <p className={styles.bridgeCopy}>
          STAMU Aphasiaは、<br />
          <strong>「練習する」と「支援する」をつなぎます。</strong>
        </p>
      </div>
    </section>
  );
}

function StepList({
  steps,
}: {
  steps: readonly { number: string; title: string; description: string }[];
}) {
  return (
    <ol className={styles.stepList} data-count={steps.length}>
      {steps.map((step) => (
        <li key={step.number}>
          <p className={styles.stepBadge}>
            <span>STEP</span>
            <strong>{step.number}</strong>
          </p>
          <h3>{step.title}</h3>
          <span>{step.description}</span>
        </li>
      ))}
    </ol>
  );
}

export function HowToSection() {
  return (
    <section className={`${styles.section} ${styles.howToSection}`} id="how-to-use">
      <div className={styles.container}>
        <SectionHeading
          eyebrow="HOW TO USE"
          title="使う人に合わせた、はじめ方。"
          copy="患者・ご家族の方は5つの手順、言語聴覚士・支援者の方は4つの手順です。"
          centered
        />
        <div className={styles.stepGroup}>
          <p className={styles.stepAudience}>患者・ご家族の方<span>5 STEP</span></p>
          <StepList steps={patientSteps} />
        </div>
        <div className={styles.stepGroup}>
          <p className={styles.stepAudience}>言語聴覚士・支援者の方<span>4 STEP</span></p>
          <StepList steps={supporterSteps} />
        </div>
        <div className={styles.centerLink}><TextLink href="/features">使い方と機能を詳しく見る</TextLink></div>
      </div>
    </section>
  );
}

export function ResearchSection() {
  return (
    <section className={`${styles.section} ${styles.researchSection}`} id="research">
      <div className={styles.container}>
        <SectionHeading
          eyebrow="RESEARCH EVIDENCE"
          title={(
            <>
              <span className={styles.researchTitleLine}>研究から見る、</span>
              <span className={styles.researchTitleLine}>デジタル自主練習</span>
            </>
          )}
          copy="失語症領域では、コンピューターやタブレットを使った訓練・評価の研究が進められています。"
        />
        <p className={styles.researchBoundary}>
          ここで紹介するのはデジタル支援全般の先行研究です。STAMU Aphasia自体の治療効果を示すものではありません。
        </p>
        {researchEvidenceGroups.map((group) => (
          <div key={group.id} className={styles.evidenceGrid}>
            {group.items.map((evidence) => (
              <article key={evidence.href} className={styles.evidenceCard}>
                <div className={styles.evidenceMeta}>
                  <span>{evidence.region}</span><span>{evidence.type}</span>
                </div>
                <h3>{evidence.title}</h3>
                <p>{evidence.summary}</p>
                <p className={styles.limit}><strong>研究の限界</strong>{evidence.limitation}</p>
                <a href={evidence.href} target="_blank" rel="noreferrer">
                  {evidence.citation}<span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export function ForStSection() {
  return (
    <section className={`${styles.section} ${styles.forStSection}`} id="for-st">
      <div className={styles.container}>
        <div className={styles.forStIntro}>
          <SectionHeading
            eyebrow="言語聴覚士・支援者向け"
            title="STの臨床を、ひとつの流れに。"
            copy="訓練、評価、記録、研究。それぞれの情報を同じ利用者の流れで扱えます。"
          />
          <TextLink href="/for-st">ST向け機能を詳しく見る</TextLink>
        </div>
        <div className={styles.stGrid}>
          {stFeatureCards.map((card, index) => (
            <article key={card.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{card.title}</h3>
              <p>{card.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SafetySection() {
  const items = [
    { title: "端末内保存を基本に", copy: "患者・臨床情報は、端末内のSQLiteに保存する設計を基本としています。" },
    { title: "独自の患者データクラウドなし", copy: "患者情報を同期するSTAMU独自クラウドや、外部AIへの患者情報送信はありません。" },
    { title: "診断・治療判断を行わない", copy: "訓練・記録・評価を補助するアプリで、電子カルテの代替ではありません。" },
  ];

  return (
    <section className={`${styles.section} ${styles.safetySection}`} id="safety">
      <div className={styles.container}>
        <SectionHeading
          eyebrow="SAFETY"
          title="大切な情報だから、慎重に。"
          copy="local-firstの考え方を基本に、必要な情報だけを扱います。"
          centered
        />
        <div className={styles.safetyGrid}>
          {items.map((item, index) => (
            <article key={item.title}>
              <span aria-hidden="true">0{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
        <div className={styles.centerLink}><TextLink href="/safety">情報の扱いと安全性を見る</TextLink></div>
      </div>
    </section>
  );
}

export function FAQSection() {
  return (
    <section className={`${styles.section} ${styles.faqSection}`} id="faq">
      <div className={styles.faqGrid}>
        <div>
          <SectionHeading
            eyebrow="FAQ"
            title="よくあるご質問"
            copy="料金、対応端末、患者情報の扱いなど、よくいただく質問をまとめました。"
          />
          <TextLink href="/faq">FAQをすべて見る</TextLink>
        </div>
        <FAQAccordion />
      </div>
    </section>
  );
}

export function FinalCTASection() {
  return (
    <section className={styles.finalCta} id="download" aria-labelledby="final-cta-title">
      <div className={styles.finalCtaInner}>
        <div className={styles.finalCopy}>
          <BrandLogo />
          <h2 id="final-cta-title">
            <span>リハビリをする。振り返る。</span>
            <span>その流れを、もっと身近に。</span>
          </h2>
          <p>STAMU Aphasiaは無料。<br />まずは使ってみてください。</p>
          <div className={styles.finalDownload}>
            <AppStoreCta />
            <small className={styles.deviceNote}>iPhone / iPad対応</small>
          </div>
        </div>
        <div className={styles.finalVisual}>
          <PhoneScreen screen={productScreens.trainingResult} />
          <div className={styles.finalVisualBack}><PhoneScreen screen={productScreens.patientRecord} /></div>
        </div>
      </div>
    </section>
  );
}
