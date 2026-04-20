import AnimatedSection from "./AnimatedSection";

const SolutionSection = () => (
  <section className="section-padding" style={{ background: "var(--gradient-section-alt)" }}>
    <div className="container-narrow">
      <div className="max-w-3xl mx-auto">
        <AnimatedSection>
          <span className="text-sm font-medium uppercase tracking-widest text-primary">A solução</span>
          <h2 className="heading-lg mt-3 mb-6">
            E-commerces e landing pages que{" "}
            <span className="gradient-text">vendem de verdade.</span>
          </h2>
          <p className="body-lg mb-6">
            Combinamos design de alto nível com estratégias de conversão comprovadas.
            Cada pixel é pensado para guiar o visitante até a compra.
          </p>
          <ul className="space-y-4">
            {[
              "Design premium focado em conversão",
              "Copywriting persuasivo e estratégico",
              "Otimização de velocidade e SEO",
              "Integração com ferramentas de marketing",
              "Responsivo e perfeito no mobile",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary text-xs">✓</span>
                <span className="text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default SolutionSection;
