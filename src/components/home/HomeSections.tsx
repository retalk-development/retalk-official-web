import Image from "next/image";
import Link from "next/link";
import { AppStoreCta } from "@/components/AppStoreCta";
import { BrandLogo } from "@/components/BrandLogo";
import { FAQAccordion } from "@/components/FAQAccordion";
import { MotionReveal } from "@/components/MotionReveal";
import {
  efficiencyStories,
  patientFlow,
} from "@/data/homepage";
import { productScreens } from "@/data/product-screens";
import {
  AnalysisMotion,
  EvolutionMotion,
  FreeMotion,
  HeroMotion,
  OriginMotion,
  PatientFlowMotion,
  PlatformMotion,
  PointToLineMotion,
  SafetyMotion,
  WorkflowConvergence,
} from "./HomeMotionScenes";
import styles from "./home.module.css";

function SectionIntro({
  eyebrow,
  title,
  children,
  inverse = false,
  center = false,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  inverse?: boolean;
  center?: boolean;
}) {
  return (
    <MotionReveal className={`${styles.intro} ${inverse ? styles.introInverse : ""} ${center ? styles.center : ""}`}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h2>{title}</h2>
      <div className={styles.introCopy}>{children}</div>
    </MotionReveal>
  );
}

export function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroGlow} aria-hidden="true" />
      <div className={styles.heroGrid}>
        <MotionReveal className={styles.heroCopy}>
          <p className={styles.kicker}><span />失語症リハビリを支えるデジタルツール</p>
          <h1>ことばのリハビリを、<br /><em>もっと日常へ。</em></h1>
          <p className={styles.heroLead}>Re:Talkは、失語症のある方の自主練習・自主訓練を支え、訓練・記録・評価・支援をつなぐリハビリテーションアプリです。</p>
          <div className={styles.heroActions}>
            <AppStoreCta />
            <Link className={styles.textLink} href="/about">Re:Talkについて <span aria-hidden="true">↗</span></Link>
          </div>
          <div className={styles.heroProof}>
            <span><strong>¥0</strong> 無料</span>
            <span><strong>29</strong> 訓練課題</span>
            <span><strong>6</strong> カテゴリ</span>
          </div>
        </MotionReveal>
        <MotionReveal className={styles.heroVisual} delay={120}>
          <HeroMotion />
          <div className={styles.heroStatus}>
            <span className={styles.liveDot} />
            <p><small>PRODUCT FLOW</small>訓練から支援までを、ひとつの流れに</p>
          </div>
        </MotionReveal>
      </div>
      <div className={styles.scrollCue} aria-hidden="true"><span />SCROLL TO DISCOVER</div>
    </section>
  );
}

export function PointToLineSection() {
  return (
    <section className={`${styles.section} ${styles.continuity}`} id="continuity">
      <div className={styles.sectionGrid}>
        <SectionIntro eyebrow="01 / ONE CONTINUOUS CARE JOURNEY" title="リハビリを、点から線へ。">
          <p>自主練習・自主訓練だけで、終わらせない。<br />練習したことが記録になり、振り返りになり、次の支援につながっていく。</p>
        </SectionIntro>
        <MotionReveal className={styles.sequenceStage} delay={100}>
          <PointToLineMotion />
        </MotionReveal>
      </div>
    </section>
  );
}

export function PatientExperienceSection() {
  const copy = [
    "まずは、取り組みたい領域から。",
    "豊富な課題から、目的に合ったものを。",
    "その人に合わせて、訓練を整える。",
    "準備ができたら、すぐに始める。",
  ];
  return (
    <section className={`${styles.section} ${styles.patientSection}`} id="features">
      <SectionIntro eyebrow="02 / PATIENT EXPERIENCE" title="自分に合った訓練を、続けやすく。" center>
        <p>選ぶ。整える。始める。<br />Re:Talkなら、その人に合った失語症の訓練まで迷わずたどり着けます。</p>
        <Link className={styles.inlineLink} href="/features">訓練課題と教材を見る <span aria-hidden="true">→</span></Link>
      </SectionIntro>
      <div className={styles.patientJourney}>
        <MotionReveal className={styles.patientSteps}>
          {copy.map((item, index) => (
            <div key={item} className={styles.patientStep}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div><small>{patientFlow[index].label}</small><p>{item}</p>{index === 1 && <b>29の訓練課題</b>}</div>
            </div>
          ))}
        </MotionReveal>
        <MotionReveal className={styles.patientDevice} delay={100}>
          <PatientFlowMotion />
        </MotionReveal>
      </div>
    </section>
  );
}

export function AnalysisSection() {
  return (
    <section className={`${styles.section} ${styles.darkSection} ${styles.analysis}`} id="for-st">
      <div className={styles.darkGrid}>
        <SectionIntro eyebrow="03 / FOR SPEECH-LANGUAGE-HEARING THERAPISTS" title="訓練を、分析できる臨床データへ。" inverse>
          <p>Re:Talkで行った訓練は、あとから振り返れる。<br />言語聴覚士・STが履歴を見て、傾向を分析し、誤りの特徴まで捉えやすくします。</p>
          <div className={styles.analysisValues}>
            <span>履歴を見る。</span><span>分析する。</span><span>誤りの傾向を捉える。</span>
          </div>
          <p className={styles.note}>訓練時に構造化された情報が残るから、STが振り返り・分析できる。</p>
          <Link className={`${styles.inlineLink} ${styles.inlineLinkInverse}`} href="/for-st">ST向け機能を見る <span aria-hidden="true">→</span></Link>
        </SectionIntro>
        <MotionReveal className={styles.analysisVisual} delay={100}>
          <AnalysisMotion />
        </MotionReveal>
      </div>
    </section>
  );
}

export function EfficiencySection() {
  return (
    <section className={`${styles.section} ${styles.efficiency}`}>
      <SectionIntro eyebrow="04 / CLINICAL WORKFLOW" title="臨床の手作業を、減らす。" center>
        <p>失語症リハビリで使う訓練課題や教材をアプリ内にまとめ、教材を探す・準備する負担を減らします。<br />記録や集計まで、臨床の細かな手作業をひとつの流れにつなぎます。</p>
        <Link className={styles.inlineLink} href="/features">できることを詳しく見る <span aria-hidden="true">→</span></Link>
      </SectionIntro>
      <div className={styles.storyList}>
        {efficiencyStories.map((story, index) => (
          <MotionReveal key={story.title} className={styles.storyCard} delay={index * 70}>
            <div className={styles.storyCopy}>
              <p className={styles.storyEyebrow}>{story.eyebrow}</p>
              <h3>{story.title}</h3>
              <p>{story.copy}</p>
            </div>
            <WorkflowConvergence index={index} />
          </MotionReveal>
        ))}
      </div>
    </section>
  );
}

export function PlatformSection() {
  return (
    <section className={`${styles.section} ${styles.darkSection} ${styles.platform}`} id="platform">
      <SectionIntro eyebrow="05 / CLINICAL DATA PLATFORM" title="訓練だけでは、見えないことがある。" inverse center>
        <p>訓練、評価、リハビリ記録、プロフィール。<br />その人に関わる情報を、ひとつの流れとして見られるようにする。</p>
      </SectionIntro>
      <PlatformMotion />
      <p className={styles.platformStatement}>Re:Talkは、訓練アプリだけではない。</p>
    </section>
  );
}

export function FreeSection() {
  return (
    <section className={`${styles.section} ${styles.freeSection}`} id="free">
      <div className={styles.freeBackdrop} aria-hidden="true">
        <Image src={productScreens.trainingCategoriesTop.src} alt="" width={592} height={1280} />
        <Image src={productScreens.stDashboard.src} alt="" width={592} height={1280} />
      </div>
      <MotionReveal className={styles.freeContent}>
        <p className={styles.eyebrow}>06 / ACCESS FOR EVERYDAY REHABILITATION</p>
        <h2>無料で、ここまで。</h2>
        <FreeMotion />
      </MotionReveal>
    </section>
  );
}

export function SafetySection() {
  return (
    <section className={`${styles.section} ${styles.safety}`} id="safety">
      <div className={styles.safetyGrid}>
        <SectionIntro eyebrow="07 / DEVICE-LOCAL BY DESIGN" title="大切な記録だから、慎重に扱う。">
          <p>Re:Talkは、患者さんの情報をできるだけ端末内で扱う設計を基本にしています。<br />独自の患者データ送信や外部AIへの送信は行いません。</p>
          <div className={styles.safetyNotes}>
            <span><i aria-hidden="true">✓</i>端末内保存を基本に</span>
            <span><i aria-hidden="true">✓</i>個人情報を最小限に</span>
            <span><i aria-hidden="true">✓</i>診断・治療判断は行わない</span>
          </div>
          <Link className={styles.textLink} href="/safety">安全性について <span aria-hidden="true">↗</span></Link>
        </SectionIntro>
        <SafetyMotion />
      </div>
    </section>
  );
}

export function StorySection() {
  const fragments = [
    productScreens.wordSettingsList,
    productScreens.stDashboard,
    productScreens.sltaComparisonTop,
    productScreens.rehabRecordSoap,
  ];
  return (
    <section className={`${styles.section} ${styles.origin}`}>
      <div className={styles.originGrid}>
        <OriginMotion fragments={fragments} />
        <SectionIntro eyebrow="08 / BUILT FROM CLINICAL PRACTICE" title="現場から、つくりました。">
          <p>Re:Talkは、言語聴覚士が臨床の中で感じてきた不便や課題から生まれました。</p>
          <ul className={styles.issueList}>
            <li>教材を探す・準備する</li><li>訓練結果を手で記録・集計する</li>
            <li>利用者ごとに内容を調整する</li><li>訓練・評価・記録が分かれている</li>
          </ul>
          <p className={styles.originEnd}>だから、ひとつにつなげる。</p>
          <Link className={styles.inlineLink} href="/about">開発背景を読む <span aria-hidden="true">→</span></Link>
        </SectionIntro>
      </div>
    </section>
  );
}

export function EvolutionSection() {
  return (
    <section className={`${styles.section} ${styles.evolution}`}>
      <MotionReveal className={styles.evolutionCopy}>
        <p className={styles.eyebrow}>09 / CONTINUOUS EVOLUTION</p>
        <h2>Re:Talkは、進化を続けます。</h2>
        <p>訓練、記録、分析。<br />Re:Talkは、臨床の声をもとにこれからもアップデートを続けます。</p>
      </MotionReveal>
      <EvolutionMotion />
    </section>
  );
}

export function FAQSection() {
  return (
    <section className={`${styles.section} ${styles.faq}`} id="faq">
      <div className={styles.faqGrid}>
        <SectionIntro eyebrow="10 / FREQUENTLY ASKED QUESTIONS" title="よくあるご質問">
          <p>Re:Talkの利用や情報の扱いについて、基本的な内容をまとめています。</p>
          <Link className={styles.inlineLink} href="/faq">FAQページを見る <span aria-hidden="true">→</span></Link>
        </SectionIntro>
        <MotionReveal><FAQAccordion /></MotionReveal>
      </div>
    </section>
  );
}

export function FinalCTASection() {
  return (
    <section className={styles.finalCta} id="final-cta">
      <div className={styles.finalMark} aria-hidden="true">R</div>
      <MotionReveal className={styles.finalContent}>
        <BrandLogo />
        <h2>ことばのリハビリを、<br />もっと日常へ。</h2>
        <p>Re:Talkは無料。<br /><small>iPhone / iPad対応</small></p>
        <AppStoreCta />
      </MotionReveal>
    </section>
  );
}
