import type { Metadata } from "next";
import { InfoPage } from "@/components/InfoPage";
import { createPageMetadata } from "@/config/seo";

const description = "Re:Talkの利用方法、不具合、安全性、医療・介護施設での利用に関するお問い合わせについてご案内します。";

export const metadata: Metadata = createPageMetadata({
  title: "お問い合わせ",
  description,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <InfoPage
      eyebrow="CONTACT"
      title="お問い合わせ"
      description={description}
      status="正式なお問い合わせ窓口は、App Storeでの公開に合わせて本ページに掲載します。"
      sections={[
        {
          title: "お問い合わせの前に",
          paragraphs: ["よくあるご質問と安全性ページに、対応端末、訓練内容、患者情報の保存、診断・治療判断との境界をまとめています。"],
        },
        {
          title: "患者さんを特定できる情報は送らないでください",
          paragraphs: ["お問い合わせの際は、氏名、生年月日、施設内の識別番号など、患者さん個人を特定できる情報を記載しないでください。"],
        },
      ]}
      relatedLinks={[
        { href: "/faq", label: "よくあるご質問" },
        { href: "/safety", label: "安全性について" },
      ]}
    />
  );
}
