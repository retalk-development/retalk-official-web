import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import styles from "./info-page.module.css";

export function InfoPage({
  eyebrow,
  title,
  description,
  status = "正式な内容は公開準備中です。",
}: {
  eyebrow: string;
  title: string;
  description: string;
  status?: string;
}) {
  return (
    <main className={styles.page}>
      <div className={styles.panel}>
        <Link href="/" aria-label="トップページへ"><BrandLogo /></Link>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h1>{title}</h1>
        <p className={styles.description}>{description}</p>
        <div className={styles.status}>{status}</div>
        <Link className={styles.back} href="/">← トップページへ戻る</Link>
      </div>
    </main>
  );
}
