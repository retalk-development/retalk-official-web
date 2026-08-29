"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type RefObject } from "react";
import { ProductSequence } from "@/components/ProductSequence";
import {
  analysisFlow,
  continuityFlow,
  efficiencyStories,
  heroScreens,
  patientFlow,
  platformItems,
} from "@/data/homepage";
import { productScreens, type ProductScreen } from "@/data/product-screens";
import styles from "./home.module.css";

function useMotionScene(ref: RefObject<HTMLDivElement | null>, length = 1, intervalMs = 2400) {
  const [internalActive, setInternalActive] = useState(0);
  const [inView, setInView] = useState(false);
  const [entered, setEntered] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
        if (entry.isIntersecting) setEntered(true);
      },
      { rootMargin: "12% 0px", threshold: 0.2 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [ref]);

  useEffect(() => {
    if (reducedMotion) return;
    if (!inView || length < 2) return;
    const timer = window.setInterval(
      () => setInternalActive((current) => (current + 1) % length),
      intervalMs,
    );
    return () => window.clearInterval(timer);
  }, [inView, intervalMs, length, reducedMotion]);

  return {
    active: reducedMotion ? Math.max(0, length - 1) : internalActive,
    entered,
    reducedMotion,
  };
}

export function HeroMotion() {
  const rootRef = useRef<HTMLDivElement>(null);
  const scene = useMotionScene(rootRef, heroScreens.length, 2050);

  return (
    <div ref={rootRef} className={styles.heroMotion} data-active={scene.active}>
      <div className={styles.heroField} aria-hidden="true"><i /><i /><i /></div>
      <div className={styles.heroContext} aria-hidden="true">
        <span>TRAINING</span><span>RECORD</span><span>SUPPORT</span>
      </div>
      <ProductSequence
        screens={heroScreens}
        variant="hero"
        motion="directional"
        showLabels={false}
        showContext
        activeIndex={scene.active}
        priority
      />
    </div>
  );
}

export function PointToLineMotion() {
  const rootRef = useRef<HTMLDivElement>(null);
  const scene = useMotionScene(rootRef, continuityFlow.length, 2200);
  const progress = scene.reducedMotion ? 100 : (scene.active / (continuityFlow.length - 1)) * 100;

  return (
    <div
      ref={rootRef}
      className={styles.pointLineScene}
      data-entered={scene.entered}
      style={{ "--line-progress": `${progress}%` } as React.CSSProperties}
    >
      <div className={styles.pointLineNodes} aria-label="練習から支援までをつなぐ流れ">
        <div className={styles.pointLineTrack} aria-hidden="true"><i /></div>
        {continuityFlow.map((item, index) => (
          <div key={item.src} className={index <= scene.active ? styles.pointLineNodeActive : ""}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{item.label}</strong>
          </div>
        ))}
      </div>
      <ProductSequence
        screens={continuityFlow}
        motion="directional"
        showLabels={false}
        showContext
        activeIndex={scene.active}
      />
    </div>
  );
}

export function PatientFlowMotion() {
  const rootRef = useRef<HTMLDivElement>(null);
  const scene = useMotionScene(rootRef, patientFlow.length, 2350);

  return (
    <div ref={rootRef} className={styles.patientMotion} data-active={scene.active}>
      <ProductSequence
        screens={patientFlow}
        motion="focus"
        showLabels={false}
        activeIndex={scene.active}
      />
      <div className={styles.journeyRail} aria-hidden="true">
        {patientFlow.map((item, index) => <span key={item.src} data-active={index <= scene.active} />)}
      </div>
      <p className={styles.patientAction} aria-live="polite">
        <span>{String(scene.active + 1).padStart(2, "0")}</span>{patientFlow[scene.active].label}
      </p>
    </div>
  );
}

export function AnalysisMotion() {
  const rootRef = useRef<HTMLDivElement>(null);
  const scene = useMotionScene(rootRef, analysisFlow.length, 2500);
  const stages = ["履歴", "分析", "傾向"];

  return (
    <div ref={rootRef} className={styles.analysisMotion} data-active={scene.active}>
      <div className={styles.analysisStages} aria-label="履歴から傾向までの分析の流れ">
        {stages.map((label, index) => (
          <span key={label} data-active={index <= scene.active}>{label}</span>
        ))}
      </div>
      <div className={styles.graphLine} aria-hidden="true"><i /><i /><i /><i /><i /></div>
      <ProductSequence
        screens={analysisFlow}
        motion="analysis"
        showLabels={false}
        showContext
        variant="dark"
        activeIndex={scene.active}
      />
    </div>
  );
}

const workflowLabels = [
  ["教材を探す", "語を選ぶ", "準備する"],
  ["集計する", "整理する", "比較する"],
  ["記録する", "まとめる", "共有用に整える"],
] as const;

export function WorkflowConvergence({ index }: { index: number }) {
  const story = efficiencyStories[index];
  const rootRef = useRef<HTMLDivElement>(null);
  const scene = useMotionScene(rootRef, story.screens.length, 2450 + index * 180);

  return (
    <div ref={rootRef} className={styles.workflowMotion} data-entered={scene.entered}>
      <div className={styles.workflowLabels} aria-hidden="true">
        {workflowLabels[index].map((label, labelIndex) => (
          <span key={label} style={{ "--label-index": labelIndex } as React.CSSProperties}>{label}</span>
        ))}
      </div>
      <ProductSequence
        screens={story.screens}
        motion="directional"
        variant="compact"
        showLabels={false}
        activeIndex={scene.active}
      />
    </div>
  );
}

export function PlatformMotion() {
  const rootRef = useRef<HTMLDivElement>(null);
  const scene = useMotionScene(rootRef);

  return (
    <div ref={rootRef} className={styles.platformMap} data-entered={scene.entered}>
      <svg viewBox="0 0 1000 620" aria-hidden="true" className={styles.connectorMap}>
        <path d="M190 120 C360 120 370 295 500 310" />
        <path d="M810 120 C640 120 630 295 500 310" />
        <path d="M190 500 C350 500 380 330 500 310" />
        <path d="M810 500 C650 500 620 330 500 310" />
      </svg>
      <div className={styles.platformCenter}>
        <span className={styles.personIcon} aria-hidden="true">人</span>
        <small>ONE PERSON</small>
        <strong>その人を中心に</strong>
      </div>
      {platformItems.map((item, index) => (
        <article key={item.label} className={`${styles.platformCard} ${styles[`platformCard${index + 1}`]}`}>
          <div className={styles.platformThumb}>
            <Image src={item.screen.src} alt={item.screen.alt} width={592} height={1280} sizes="(max-width: 700px) 78vw, 18vw" />
          </div>
          <div><small>{item.label}</small><h3>{item.caption}</h3></div>
        </article>
      ))}
    </div>
  );
}

export function FreeMotion() {
  const rootRef = useRef<HTMLDivElement>(null);
  const scene = useMotionScene(rootRef);
  return (
    <div ref={rootRef} className={styles.metrics} data-entered={scene.entered}>
      <div className={styles.metricMain}><strong>¥0</strong><span>Re:Talkは無料。</span></div>
      <div><strong>29</strong><span>訓練課題</span></div>
      <div><strong>6</strong><span>訓練カテゴリ</span></div>
    </div>
  );
}

export function SafetyMotion() {
  const rootRef = useRef<HTMLDivElement>(null);
  const scene = useMotionScene(rootRef);
  return (
    <div ref={rootRef} className={styles.localVisual} data-entered={scene.entered}>
      <div className={styles.localRings} aria-hidden="true"><span /><span /><span /></div>
      <div className={styles.localDevice}>
        <Image src={productScreens.userInfo.src} alt={productScreens.userInfo.alt} width={592} height={1280} sizes="(max-width: 700px) 68vw, 26vw" />
        <div className={styles.containedRecords} aria-hidden="true"><i /><i /><i /></div>
        <div className={styles.localBadge}><span aria-hidden="true">⌁</span><small>DATA LOCATION</small><strong>この端末内</strong></div>
      </div>
    </div>
  );
}

export function OriginMotion({ fragments }: { fragments: readonly ProductScreen[] }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const scene = useMotionScene(rootRef);
  return (
    <div ref={rootRef} className={styles.originVisual} data-entered={scene.entered}>
      {fragments.map((item, index) => (
        <div key={item.src} className={styles.originFragment} style={{ "--fragment-index": index } as React.CSSProperties}>
          <Image src={item.src} alt={item.alt} width={592} height={1280} sizes="(max-width: 700px) 40vw, 16vw" />
        </div>
      ))}
    </div>
  );
}

export function EvolutionMotion() {
  const rootRef = useRef<HTMLDivElement>(null);
  const scene = useMotionScene(rootRef);
  return (
    <div ref={rootRef} className={styles.evolutionPath} data-entered={scene.entered}>
      <div className={styles.evolutionFragments} aria-hidden="true">
        <span>TRAINING</span><span>RECORD</span><span>ANALYSIS</span>
      </div>
      <div className={styles.progressLine}><i /></div>
      <span className={styles.continueLabel}>CONTINUE</span>
    </div>
  );
}
