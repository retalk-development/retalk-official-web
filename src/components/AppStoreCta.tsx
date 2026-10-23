import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import styles from "./app-store-cta.module.css";

type AppStoreCtaProps = {
  className?: string;
};

/**
 * Apple-provided Japanese App Store badge.
 * The artwork is kept intact and served unoptimized; CSS only scales it while
 * preserving its aspect ratio and required clear space.
 */
export function AppStoreCta({ className = "" }: AppStoreCtaProps) {
  if (!siteConfig.appStoreUrl) {
    return (
      <span className={`${styles.unavailable} ${className}`} aria-disabled="true">
        App Store公開準備中
      </span>
    );
  }

  return (
    <Link
      className={`${styles.cta} ${className}`}
      href={siteConfig.appStoreUrl}
      aria-label="App StoreでSTAMU Aphasiaを無料ダウンロード"
    >
      <Image
        src="/brand/download-on-the-app-store-ja.svg"
        alt="App Storeからダウンロード"
        width={109}
        height={40}
        unoptimized
      />
    </Link>
  );
}
