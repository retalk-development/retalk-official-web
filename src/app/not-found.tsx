import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <main className={styles.page}>
      <div className={styles.panel}>
        <BrandLogo />
        <p className={styles.code}>404</p>
        <h1>ページが見つかりません</h1>
        <p>URLをご確認いただくか、トップページから目的のページをお探しください。</p>
        <Link href="/">トップページへ戻る</Link>
      </div>
    </main>
  );
}
