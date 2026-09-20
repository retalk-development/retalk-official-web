import type { Metadata } from "next";
import {
  AnalysisSection,
  EfficiencySection,
  EvolutionSection,
  FAQSection,
  FinalCTASection,
  FreeSection,
  HeroSection,
  PatientExperienceSection,
  PlatformSection,
  PointToLineSection,
  SafetySection,
  StorySection,
} from "@/components/home/HomeSections";
import { JsonLd } from "@/components/JsonLd";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { siteConfig } from "@/config/site";
import { createPageMetadata } from "@/config/seo";
import {
  faqPageJsonLd,
  organizationJsonLd,
  softwareApplicationJsonLd,
  websiteJsonLd,
} from "@/config/structured-data";

export const metadata: Metadata = createPageMetadata({
  title: "Re:Talk | 失語症の自主練習を支えるリハビリアプリ",
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
        <PointToLineSection />
        <PatientExperienceSection />
        <AnalysisSection />
        <EfficiencySection />
        <PlatformSection />
        <FreeSection />
        <SafetySection />
        <StorySection />
        <EvolutionSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <SiteFooter />
    </>
  );
}
