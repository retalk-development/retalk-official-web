export const siteConfig = {
  name: "STAMU Aphasia",
  masterBrand: "STAMU",
  tagline: "ことばのリハビリを、もっと日常へ。",
  description:
    "STAMU Aphasiaは、失語症のある方の自主練習・自主訓練を支え、訓練・記録・評価・支援をつなぐリハビリテーションアプリです。",
  // TODO(copy-review): Set the official App Store URL before production release.
  appStoreUrl: null as string | null,
  navigation: [
    { label: "STAMU Aphasiaについて", href: "/about" },
    { label: "できること", href: "/features" },
    { label: "STの方へ", href: "/for-st" },
    { label: "安全性", href: "/safety" },
    { label: "FAQ", href: "/faq" },
    { label: "お問い合わせ", href: "/contact" },
  ],
  footerNavigation: [
    { label: "利用規約", href: "/terms" },
    { label: "プライバシーポリシー", href: "/privacy" },
    { label: "お問い合わせ", href: "/contact" },
  ],
} as const;

const PRODUCTION_SITE_URL = "https://retalk-app.com";

function resolveSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }

  const context = process.env.CONTEXT;
  if (context === "deploy-preview" || context === "branch-deploy") {
    const previewUrl = process.env.DEPLOY_PRIME_URL ?? process.env.DEPLOY_URL;
    if (previewUrl) {
      return previewUrl;
    }
  }

  if (context === "production") {
    return PRODUCTION_SITE_URL;
  }

  if (process.env.NETLIFY === "true") {
    return process.env.URL ?? PRODUCTION_SITE_URL;
  }

  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }

  return "http://localhost:3000";
}

export const siteUrl = resolveSiteUrl().replace(/\/$/, "");

export const publicPages = [
  { path: "/", changeFrequency: "monthly", priority: 1 },
  { path: "/about", changeFrequency: "yearly", priority: 0.7 },
  { path: "/features", changeFrequency: "monthly", priority: 0.9 },
  { path: "/for-st", changeFrequency: "monthly", priority: 0.8 },
  { path: "/safety", changeFrequency: "yearly", priority: 0.7 },
  { path: "/faq", changeFrequency: "monthly", priority: 0.8 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.5 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
] as const;

export const motionConfig = {
  sequenceMs: 2300,
  heroSequenceMs: 1900,
  easing: "cubic-bezier(0.22, 1, 0.36, 1)",
  revealDistancePx: 28,
  staggerMs: 90,
} as const;
