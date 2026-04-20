import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PainSection from "@/components/PainSection";
import BeliefBreakSection from "@/components/BeliefBreakSection";
import SolutionSection from "@/components/SolutionSection";
import DeliveryStackSection from "@/components/DeliveryStackSection";
import PortfolioSection from "@/components/PortfolioSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import SocialProofSection from "@/components/SocialProofSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import ProcessSection from "@/components/ProcessSection";
import FaqSection from "@/components/FaqSection";
import CtaFinalSection from "@/components/CtaFinalSection";
import Footer from "@/components/Footer";
import bgGradient from "@/assets/bg-gradient.webp";

const Index = () => (
  <div className="relative min-h-screen text-foreground">
    {/* Full-page animated gradient background */}
    <Suspense fallback={<div className="fixed inset-0 bg-background" />}>
      <AnimatedGradient
        config={{
          preset: "custom",
          color1: "#050510",
          color2: "#1a3a6e",
          color3: "#0a0a1a",
          rotation: -50,
          proportion: 10,
          scale: 0.01,
          speed: 15,
          distortion: 0,
          swirl: 40,
          swirlIterations: 12,
          softness: 60,
          offset: -299,
          shape: "Checks",
          shapeSize: 45,
        }}
        noise={{ opacity: 0.03 }}
        className="!fixed inset-0 -z-10"
        style={{ width: "100vw", height: "100vh" }}
      />
    </Suspense>

    <Navbar />
    <HeroSection />
    <PainSection />
    <BeliefBreakSection />
    <SolutionSection />
    <DeliveryStackSection />
    <PortfolioSection />
    <DifferentialsSection />
    <SocialProofSection />
    <BeforeAfterSection />
    <ProcessSection />
    <FaqSection />
    <CtaFinalSection />
    <Footer />
  </div>
);

export default Index;
