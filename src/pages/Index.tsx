import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PainSection from "@/components/PainSection";
import BeliefBreakSection from "@/components/BeliefBreakSection";
import SolutionSection from "@/components/SolutionSection";
import DeliveryStackSection from "@/components/DeliveryStackSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import SocialProofSection from "@/components/SocialProofSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import ProcessSection from "@/components/ProcessSection";
import FaqSection from "@/components/FaqSection";
import CtaFinalSection from "@/components/CtaFinalSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <HeroSection />
    <PainSection />
    <BeliefBreakSection />
    <SolutionSection />
    <DeliveryStackSection />
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
