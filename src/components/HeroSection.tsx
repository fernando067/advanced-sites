import { motion } from "framer-motion";
import { lazy, Suspense, useState, useEffect } from "react";

const FuturisticCanvas = lazy(() => import("@/components/ui/hero-futuristic"));

const HeroSection = () => {
  const [webglSupported, setWebglSupported] = useState(false);

  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl2") || canvas.getContext("webgl");
      setWebglSupported(!!gl);
    } catch {
      setWebglSupported(false);
    }
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block mb-4 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            🚀 Transforme visitantes em clientes
          </span>
          <h1 className="heading-xl mb-6">
            Seu site não vende?{" "}
            <span className="gradient-text">Nós criamos o que converte.</span>
          </h1>
          <p className="body-lg mb-8 max-w-lg mx-auto">
            Desenvolvemos e-commerces e landing pages estratégicas que geram resultados reais.
            Design premium, foco em conversão e tecnologia de ponta.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#cta-final" className="btn-cta text-center text-lg">
              Quero Vender Mais Online
            </a>
            <a
              href="#processo"
              className="rounded-xl border border-border px-8 py-4 text-center font-medium transition-all duration-300 hover:border-primary/50 hover:bg-primary/5"
            >
              Como Funciona
            </a>
          </div>
        </motion.div>
      </div>

      {/* 3D animation below CTA */}
      {webglSupported && (
        <motion.div
          className="relative z-10 w-full max-w-2xl mx-auto mt-12 px-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden border border-border/30">
            <Suspense fallback={null}>
              <FuturisticCanvas />
            </Suspense>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default HeroSection;
