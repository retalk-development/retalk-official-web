export const siteConfig = {
  name: "Re:Talk",
  tagline: "ことばのリハビリを、もっと日常へ。",
  description:
    "失語症のある方の自主訓練を支え、訓練・記録・評価・支援をつなぐリハビリテーションプラットフォーム。",
  // TODO(copy-review): Set the official App Store URL before production release.
  appStoreUrl: null as string | null,
  navigation: [
    { label: "Re:Talkについて", href: "/about" },
    { label: "できること", href: "/features" },
    { label: "STの方へ", href: "/for-st" },
    { label: "安全性", href: "/safety" },
    { label: "FAQ", href: "/#faq" },
  ],
  footerNavigation: [
    { label: "利用規約", href: "/terms" },
    { label: "プライバシーポリシー", href: "/privacy" },
    { label: "お問い合わせ", href: "/contact" },
  ],
} as const;

export const motionConfig = {
  sequenceMs: 2300,
  heroSequenceMs: 1900,
  easing: "cubic-bezier(0.22, 1, 0.36, 1)",
  revealDistancePx: 28,
  staggerMs: 90,
} as const;
