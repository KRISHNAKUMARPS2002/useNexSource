// src/app/page.tsx
import FeatureSection from "@/components/landing/FeatureSection";
import HeroSection from "@/components/landing/HeroSection";
import LandingNavbar from "@/components/landing/LandingNavbar";

export default function Home() {
  return (
    <section>
      <LandingNavbar />
      <HeroSection />
      <FeatureSection />
    </section>
  );
}
