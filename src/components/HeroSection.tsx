import { motion } from "framer-motion";
import heroMockup from "@/assets/hero-mockup.png";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center section-padding pt-28 overflow-hidden">
    {/* Background effects */}
    <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
    <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] animate-pulse-glow" />
    <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px] animate-pulse-glow" />

    <div className="container-narrow relative z-10 grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
      <div>
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
          <p className="body-lg mb-8 max-w-lg">
            Desenvolvemos e-commerces e landing pages estratégicas que geram resultados reais. 
            Design premium, foco em conversão e tecnologia de ponta.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
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

      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="relative"
      >
        <div className="relative rounded-2xl overflow-hidden glow-primary">
          <img src={heroMockup} alt="Dashboard e-commerce moderno" className="w-full animate-float" />
        </div>
        {/* Floating stat cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="absolute -bottom-4 -left-4 glass-strong rounded-xl p-4 shadow-lg"
        >
          <p className="text-xs text-muted-foreground">Taxa de Conversão</p>
          <p className="text-2xl font-bold gradient-text">+340%</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute -top-4 -right-4 glass-strong rounded-xl p-4 shadow-lg"
        >
          <p className="text-xs text-muted-foreground">Vendas Online</p>
          <p className="text-2xl font-bold gradient-text">R$2.4M</p>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
