import type { Metadata } from "next";
import { InfoPage } from "@/components/InfoPage";
import { createPageMetadata } from "@/config/seo";

const description = "Re:Talkの利用条件と、診断・治療判断を行わないことなど利用上の基本的な位置づけをご案内します。";

export const metadata: Metadata = createPageMetadata({
  title: "利用規約",
  description,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <InfoPage
      eyebrow="TERMS"
      title="利用規約"
      description={description}
      updatedAt="2026年9月13日"
      status="承認済みの利用規約本文は未提供です。公開前に法務・公開文言の確認済み本文を掲載する必要があります。"
      sections={[
        {
          title: "Re:Talkの位置づけ",
          paragraphs: ["Re:Talkは、失語症の訓練・記録・評価・支援を補助するリハビリテーションアプリです。診断、予後予測、治療判断を行うものではありません。"],
        },
      ]}
      relatedLinks={[
        { href: "/safety", label: "安全性について" },
        { href: "/privacy", label: "プライバシーポリシー" },
      ]}
    />
  );
}
