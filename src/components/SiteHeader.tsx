"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AppStoreCta } from "@/components/AppStoreCta";
import { BrandLogo } from "@/components/BrandLogo";
import { siteConfig } from "@/config/site";
import styles from "./site-header.module.css";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link className={styles.logoLink} href="/" aria-label="STAMU Aphasia トップへ">
          <BrandLogo compact />
        </Link>
        <nav className={styles.desktopNav} aria-label="メインナビゲーション">
          {siteConfig.navigation.map((item) => (
            <Link key={item.href} href={item.href}>{item.label}</Link>
          ))}
        </nav>
        <div className={styles.actions}>
          <AppStoreCta compact />
          <button
            type="button"
            className={styles.menuButton}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "メニューを閉じる" : "メニューを開く"}
            onClick={() => setOpen((current) => !current)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
      <nav
        id="mobile-navigation"
        className={`${styles.mobileNav} ${open ? styles.mobileNavOpen : ""}`}
        aria-label="モバイルナビゲーション"
      >
        {siteConfig.navigation.map((item) => (
          <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}<span aria-hidden="true">↗</span>
          </Link>
        ))}
      </nav>
    </header>
  );
}
