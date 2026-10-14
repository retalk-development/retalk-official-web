import type { Metadata } from "next";
import {
  AboutProductSection,
  ConcernsSection,
  FAQSection,
  FinalCTASection,
  ForStSection,
  HeroSection,
  HowToSection,
  PointsSection,
  ResearchSection,
  SafetySection,
} from "@/components/home/HomeSections";
import { JsonLd } from "@/components/JsonLd";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { createPageMetadata } from "@/config/seo";
import { siteConfig } from "@/config/site";
import {
  faqPageJsonLd,
  organizationJsonLd,
  softwareApplicationJsonLd,
  websiteJsonLd,
} from "@/config/structured-data";

export const metadata: Metadata = createPageMetadata({
  title: "STAMU Aphasia | 失語症の自主練習を支える無料リハビリアプリ",
  description: siteConfig.description,
  path: "/",
  absoluteTitle: true,
});

export default function Home() {
  return (
    <>
      <JsonLd data={organizationJsonLd} />
      <JsonLd data={websiteJsonLd} />
      <JsonLd data={softwareApplicationJsonLd} />
      <JsonLd data={faqPageJsonLd} />
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutProductSection />
        <PointsSection />
        <ConcernsSection />
        <HowToSection />
        <ResearchSection />
        <ForStSection />
        <SafetySection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <SiteFooter />
    </>
  );
}
