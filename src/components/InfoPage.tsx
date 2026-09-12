import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import styles from "./info-page.module.css";

type InfoSection = {
  title: string;
  paragraphs?: readonly string[];
  items?: readonly string[];
};

type RelatedLink = {
  href: string;
  label: string;
};

export function InfoPage({
  eyebrow,
  title,
  description,
  sections = [],
  relatedLinks = [],
  updatedAt,
  status,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  sections?: readonly InfoSection[];
  relatedLinks?: readonly RelatedLink[];
  updatedAt?: string;
  status?: string;
  children?: React.ReactNode;
}) {
  return (
    <>
      <SiteHeader />
      <main className={styles.page}>
        <article className={styles.panel}>
          <header className={styles.intro}>
            <p className={styles.eyebrow}>{eyebrow}</p>
            <h1>{title}</h1>
            <p className={styles.description}>{description}</p>
            {updatedAt && <p className={styles.updated}>最終更新：{updatedAt}</p>}
          </header>

          {status && <p className={styles.status}>{status}</p>}

          {sections.length > 0 && (
            <div className={styles.sections}>
              {sections.map((section) => (
                <section key={section.title}>
                  <h2>{section.title}</h2>
                  {section.paragraphs?.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.items && (
                    <ul>
                      {section.items.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  )}
                </section>
              ))}
            </div>
          )}

          {children && <div className={styles.customContent}>{children}</div>}

          {relatedLinks.length > 0 && (
            <nav className={styles.related} aria-label="関連ページ">
              <p>関連ページ</p>
              <div>
                {relatedLinks.map((link) => (
                  <Link key={link.href} href={link.href}>{link.label}<span aria-hidden="true">→</span></Link>
                ))}
              </div>
            </nav>
          )}

          <Link className={styles.back} href="/">← トップページへ戻る</Link>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
