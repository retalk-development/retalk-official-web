import type { Metadata } from "next";
import { InfoPage } from "@/components/InfoPage";
import { createPageMetadata } from "@/config/seo";

const description = "Re:Talkが患者情報をできるだけ端末内で扱う基本方針と、プライバシー情報の公開予定をご案内します。";

export const metadata: Metadata = createPageMetadata({
  title: "プライバシーポリシー",
  description,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <InfoPage
      eyebrow="PRIVACY"
      title="プライバシーポリシー"
      description={description}
      updatedAt="2026年9月13日"
      status="承認済みのプライバシーポリシー本文は未提供です。公開前にアプリの実装事実と整合する確認済み本文を掲載する必要があります。"
      sections={[
        {
          title: "現在確認できている基本方針",
          paragraphs: ["Re:Talkは、患者さんの情報をできるだけ端末内で扱う設計を基本にしています。独自の患者データ送信や外部AIへの送信は行いません。詳しい前提と利用時の注意事項は、安全性ページをご確認ください。"],
        },
      ]}
      relatedLinks={[
        { href: "/safety", label: "安全性について" },
        { href: "/contact", label: "お問い合わせ" },
      ]}
    />
  );
}
