import Link from "next/link";
import { siteConfig } from "@/config/site";
import styles from "./app-store-cta.module.css";

type AppStoreCtaProps = {
  inverse?: boolean;
  compact?: boolean;
  className?: string;
};

export function AppStoreCta({ inverse = false, compact = false, className = "" }: AppStoreCtaProps) {
  const classes = `${styles.cta} ${inverse ? styles.inverse : ""} ${compact ? styles.compact : ""} ${className}`;

  if (!siteConfig.appStoreUrl) {
    return (
      <button
        type="button"
        className={classes}
        aria-disabled="true"
        title="App Store公開後にリンクを有効化します"
      >
        <span className={styles.icon} aria-hidden="true">…</span>
        <span>
          <small>正式URLを確認中です</small>
          App Store公開準備中
        </span>
      </button>
    );
  }

  return (
    <Link className={classes} href={siteConfig.appStoreUrl}>
      <span className={styles.icon} aria-hidden="true">↗</span>
      <span>
        <small>無料で利用できます</small>
        App Storeでダウンロード
      </span>
    </Link>
  );
}
