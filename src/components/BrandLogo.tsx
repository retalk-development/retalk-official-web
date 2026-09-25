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
      aria-label="STAMU Aphasia"
    >
      <span className={styles.crop}>
        <Image
          className={styles.wordmark}
          src="/brand/stamu-aphasia-wordmark.png"
          alt=""
          width={1168}
          height={439}
          sizes={compact ? "144px" : "184px"}
        />
      </span>
    </span>
  );
}
