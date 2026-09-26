import type { Metadata } from "next";
import { InfoPage } from "@/components/InfoPage";
import { contactCategories, publicContactEmail } from "@/config/contact";
import { createPageMetadata } from "@/config/seo";
import styles from "./contact-page.module.css";

const description = "STAMU Aphasiaの利用方法、不具合、安全性、医療・介護施設での利用に関するお問い合わせについてご案内します。";

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
      status={publicContactEmail ? undefined : "正式なお問い合わせ窓口は公開準備中です。連絡先が確定次第、このページに掲載します。"}
      sections={[
        {
          title: "お問い合わせの種類",
          items: contactCategories,
        },
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
    >
      {publicContactEmail && (
        <section className={styles.destination} aria-labelledby="contact-destination-title">
          <h2 id="contact-destination-title">メールで問い合わせる</h2>
          <p>お問い合わせの種類と内容を簡潔に記載してください。</p>
          <a href={`mailto:${publicContactEmail}`}>{publicContactEmail}</a>
        </section>
      )}
    </InfoPage>
  );
}
