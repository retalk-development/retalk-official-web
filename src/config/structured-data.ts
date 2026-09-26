import { siteConfig, siteUrl } from "@/config/site";
import { faqItems } from "@/data/homepage";

const organizationId = `${siteUrl}/#organization`;

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": organizationId,
  name: siteConfig.masterBrand,
  url: siteUrl,
  description: siteConfig.description,
  logo: `${siteUrl}/brand/stamu-aphasia-wordmark.png`,
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: siteConfig.name,
  url: siteUrl,
  inLanguage: "ja-JP",
  description: siteConfig.description,
  publisher: { "@id": organizationId },
};

export const softwareApplicationJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": `${siteUrl}/#app`,
  name: siteConfig.name,
  url: siteUrl,
  applicationCategory: "HealthApplication",
  operatingSystem: "iOS, iPadOS",
  inLanguage: "ja-JP",
  description: siteConfig.description,
  brand: {
    "@type": "Brand",
    name: siteConfig.masterBrand,
  },
  publisher: { "@id": organizationId },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "JPY",
  },
};

export const faqPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${siteUrl}/faq#faq`,
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};
