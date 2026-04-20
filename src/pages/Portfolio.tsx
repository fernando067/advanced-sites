import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PortfolioSection from "@/components/PortfolioSection";

const AnimatedGradient = lazy(() => import("@/components/ui/animated-gradient"));

const Portfolio = () => (
  <div className="relative min-h-screen text-foreground">
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
    <main className="pt-24">
      <PortfolioSection />
    </main>
    <Footer />
  </div>
);

export default Portfolio;
