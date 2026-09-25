import type { Metadata } from "next";
import { InfoPage } from "@/components/InfoPage";
import { LegalDocument } from "@/components/LegalDocument";
import { createPageMetadata } from "@/config/seo";
import { TERMS_DOCUMENT } from "@/content/legal/terms";

const description = "STAMU Aphasia 利用規約の全文をご案内します。";

export const metadata: Metadata = createPageMetadata({
  title: "利用規約",
  description,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <InfoPage
      eyebrow="TERMS"
      title={TERMS_DOCUMENT.title}
      description={description}
      relatedLinks={[
        { href: "/safety", label: "安全性について" },
        { href: "/privacy", label: "プライバシーポリシー" },
      ]}
    >
      <LegalDocument document={TERMS_DOCUMENT} />
    </InfoPage>
  );
}
