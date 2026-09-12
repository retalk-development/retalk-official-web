import type { Metadata } from "next";
import { FAQAccordion } from "@/components/FAQAccordion";
import { InfoPage } from "@/components/InfoPage";
import { JsonLd } from "@/components/JsonLd";
import { createPageMetadata } from "@/config/seo";
import { faqPageJsonLd } from "@/config/structured-data";

const description = "Re:Talkの料金、対応端末、失語症の訓練課題、医療・介護施設での利用、患者情報の保存、安全性に関する質問にお答えします。";

export const metadata: Metadata = createPageMetadata({
  title: "失語症リハビリアプリのよくあるご質問",
  description,
  path: "/faq",
});

export default function FAQPage() {
  return (
    <>
      <JsonLd data={faqPageJsonLd} />
      <InfoPage
        eyebrow="FAQ"
        title="よくあるご質問"
        description={description}
        relatedLinks={[
          { href: "/features", label: "訓練課題と教材を見る" },
          { href: "/safety", label: "安全性について" },
          { href: "/contact", label: "お問い合わせ" },
        ]}
      >
        <FAQAccordion />
      </InfoPage>
    </>
  );
}
