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
    {/* Static gradient background — performant, no animation */}
    <div
      className="fixed inset-0 -z-10 bg-background bg-cover bg-center"
      style={{ backgroundImage: `url(${bgGradient})` }}
      aria-hidden="true"
    />

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
