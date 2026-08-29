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
      <span className={styles.arc} aria-hidden="true" />
      Re:Talk
    </span>
  );
}
