import AnimatedSection from "./AnimatedSection";

const BeliefBreakSection = () => (
  <section className="section-padding relative overflow-hidden">
    <div className="absolute inset-0 bg-primary/[0.03]" />
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
    
    <div className="container-narrow relative z-10 max-w-3xl text-center">
      <AnimatedSection>
        <span className="text-sm font-medium uppercase tracking-widest text-accent">A verdade</span>
        <h2 className="heading-lg mt-3 mb-6">
          O problema <span className="gradient-text">não é o seu produto.</span>{" "}
          É como ele está sendo apresentado.
        </h2>
        <p className="body-lg">
          Empresários com ótimos produtos perdem vendas todos os dias porque seus sites não foram 
          construídos para converter. Um design bonito sem estratégia é apenas uma vitrine vazia.
        </p>
      </AnimatedSection>
    </div>
  </section>
);

export default BeliefBreakSection;
