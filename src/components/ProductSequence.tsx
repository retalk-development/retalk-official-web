"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { ProductScreen } from "@/data/product-screens";
import styles from "./product-sequence.module.css";

type ProductSequenceProps = {
  screens: readonly ProductScreen[];
  intervalMs?: number;
  variant?: "default" | "hero" | "dark" | "compact";
  showLabels?: boolean;
  className?: string;
  priority?: boolean;
};

export function ProductSequence({
  screens,
  intervalMs = 2300,
  variant = "default",
  showLabels = true,
  className = "",
  priority = false,
}: ProductSequenceProps) {
  const rootRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const [inView, setInView] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: "15% 0px", threshold: 0.18 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView || reducedMotion || screens.length < 2) return;
    const timer = window.setInterval(
      () => setActive((current) => (current + 1) % screens.length),
      intervalMs,
    );
    return () => window.clearInterval(timer);
  }, [inView, intervalMs, reducedMotion, screens.length]);

  return (
    <figure
      ref={rootRef}
      className={`${styles.sequence} ${styles[variant]} ${className}`}
      aria-label="Re:Talk製品画面の流れ"
    >
      <div className={styles.device}>
        <div className={styles.speaker} aria-hidden="true" />
        <div className={styles.viewport}>
          {screens.map((item, index) => (
            <Image
              key={item.src}
              className={`${styles.screen} ${index === active ? styles.active : ""}`}
              src={item.src}
              alt={item.alt}
              width={592}
              height={1280}
              sizes={variant === "hero" ? "(max-width: 700px) 76vw, 31vw" : "(max-width: 700px) 72vw, 26vw"}
              style={{ objectPosition: item.objectPosition }}
              priority={priority && index === 0}
              loading={priority && index === 0 ? "eager" : "lazy"}
            />
          ))}
        </div>
      </div>
      {showLabels && (
        <figcaption className={styles.labels} aria-live="polite">
          {screens.map((item, index) => (
            <button
              key={`${item.src}-label`}
              type="button"
              className={index === active ? styles.labelActive : ""}
              onClick={() => setActive(index)}
              aria-label={`${item.label}の画面を表示`}
              aria-pressed={index === active}
            >
              <span aria-hidden="true" />
              {item.label}
            </button>
          ))}
        </figcaption>
      )}
    </figure>
  );
}
