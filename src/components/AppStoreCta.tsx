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
      <button type="button" className={classes} aria-disabled="true">
        <span className={styles.storeMark} aria-hidden="true">A</span>
        <span><small>App Store</small>公開準備中</span>
      </button>
    );
  }

  return (
    <Link className={classes} href={siteConfig.appStoreUrl} aria-label="App StoreからSTAMU Aphasiaをダウンロード">
      <span className={styles.storeMark} aria-hidden="true">A</span>
      <span>
        <small>App Storeから</small>
        ダウンロード
      </span>
    </Link>
  );
}
