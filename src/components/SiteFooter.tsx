import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { siteConfig } from "@/config/site";
import styles from "./site-footer.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer} id="site-footer">
      <div className={styles.top}>
        <div className={styles.brand}>
          <BrandLogo inverse />
          <p>{siteConfig.tagline}</p>
        </div>
        <nav aria-label="フッターナビゲーション" className={styles.links}>
          <div>
            <small>EXPLORE</small>
            {siteConfig.navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
          </div>
          <div>
            <small>INFORMATION</small>
            {siteConfig.footerNavigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
          </div>
        </nav>
      </div>
      <div className={styles.bottom}>
        <span>© {new Date().getFullYear()} {siteConfig.masterBrand}</span>
        <span>Clinical rehabilitation, connected.</span>
      </div>
    </footer>
  );
}
