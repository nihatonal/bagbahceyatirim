import HomeHero from "@/components/home/HomeHero";
import InvestmentIntroSection from "@/components/home/InvestmentIntroSection";
import StatsSection from "@/components/home/StatsSection";
import ProcessSection from "@/components/home/ProcessSection";
import FeaturedVineyardSection from "@/components/home/FeaturedVineyardSection";
import PhilosophySection from "@/components/home/PhilosophySection";
import JournalPreviewSection from "@/components/home/JournalPreviewSection";
import HomeCtaSection from "@/components/home/HomeCtaSection";

export default function HomePage() {
  return (
    <main>
      <HomeHero />
      <InvestmentIntroSection />
      <StatsSection />
      <ProcessSection />
      <FeaturedVineyardSection />
      <PhilosophySection />
      <JournalPreviewSection />
      <HomeCtaSection />
    </main>
  );
}
