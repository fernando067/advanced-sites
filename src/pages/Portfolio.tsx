import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PortfolioSection from "@/components/PortfolioSection";
import bgGradient from "@/assets/bg-gradient.webp";

const Portfolio = () => (
  <div className="relative min-h-screen text-foreground">
    <div
      className="fixed inset-0 -z-10 bg-background bg-cover bg-center"
      style={{ backgroundImage: `url(${bgGradient})` }}
      aria-hidden="true"
    />

    <Navbar />
    <main className="pt-24">
      <PortfolioSection />
    </main>
    <Footer />
  </div>
);

export default Portfolio;
