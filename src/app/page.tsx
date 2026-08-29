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
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export default function Home() {
  return (
    <>
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
