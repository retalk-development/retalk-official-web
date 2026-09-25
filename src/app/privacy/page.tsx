import type { Metadata } from "next";
import { InfoPage } from "@/components/InfoPage";
import { LegalDocument } from "@/components/LegalDocument";
import { createPageMetadata } from "@/config/seo";
import { PRIVACY_DOCUMENT } from "@/content/legal/privacy";

const description = "STAMU Aphasia プライバシーポリシーの全文をご案内します。";

export const metadata: Metadata = createPageMetadata({
  title: "プライバシーポリシー",
  description,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <InfoPage
      eyebrow="PRIVACY"
      title={PRIVACY_DOCUMENT.title}
      description={description}
      relatedLinks={[
        { href: "/safety", label: "安全性について" },
        { href: "/contact", label: "お問い合わせ" },
      ]}
    >
      <LegalDocument document={PRIVACY_DOCUMENT} />
    </InfoPage>
  );
}
