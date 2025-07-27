// src/app/page.tsx
import CertificateShowcase from "@/components/landing/CertificatesShowcase";
import FAQSection from "@/components/landing/FaqSection";
import FeatureSection from "@/components/landing/FeatureSection";
import FoodIndustryCoverage from "@/components/landing/FoodIndustryCoverage";
import HeroSection from "@/components/landing/HeroSection";
import LandingNavbar from "@/components/landing/LandingNavbar";
import ZigZagSection from "@/components/landing/ZigZagSection";

export default function Home() {
  return (
    <section>
      <LandingNavbar />
      <HeroSection />
      <FeatureSection />
      <ZigZagSection />
      <div className="px-6">
        <CertificateShowcase />
      </div>
      <FoodIndustryCoverage />
      <FAQSection />
    </section>
  );
}
