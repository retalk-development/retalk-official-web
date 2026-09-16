import Image from "next/image";
import styles from "./brand-logo.module.css";

type BrandLogoProps = {
  inverse?: boolean;
  compact?: boolean;
};

export function BrandLogo({ inverse = false, compact = false }: BrandLogoProps) {
  return (
    <span
      className={`${styles.logo} ${inverse ? styles.inverse : ""} ${compact ? styles.compact : ""}`}
      aria-label="Re:Talk"
    >
      <Image
        className={styles.wordmark}
        src="/brand/retalk-wordmark.png"
        alt=""
        width={851}
        height={243}
        sizes={compact ? "124px" : "156px"}
      />
    </span>
  );
}
