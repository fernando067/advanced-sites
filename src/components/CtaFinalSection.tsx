import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const CtaFinalSection = () => (
  <section id="cta-final" className="section-padding relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[150px]" />

    <div className="container-narrow relative z-10 text-center">
      <AnimatedSection>
        <span className="text-sm font-medium uppercase tracking-widest text-primary">
          Pronto para transformar seus resultados?
        </span>
        <h2 className="heading-xl mt-4 mb-6 max-w-3xl mx-auto">
          Pare de perder vendas.{" "}
          <span className="gradient-text">Comece a converter agora.</span>
        </h2>
        <p className="body-lg mb-10 max-w-xl mx-auto">
          Agende uma reunião estratégica gratuita e descubra como podemos multiplicar 
          suas vendas online com um projeto sob medida.
        </p>
        <motion.a
          href="https://wa.me/5500000000000"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="btn-cta inline-block text-lg"
        >
          Agendar Minha Reunião Gratuita →
        </motion.a>
        <p className="mt-4 text-sm text-muted-foreground">
          Vagas limitadas por mês • Sem compromisso
        </p>
      </AnimatedSection>
    </div>
  </section>
);

export default CtaFinalSection;
