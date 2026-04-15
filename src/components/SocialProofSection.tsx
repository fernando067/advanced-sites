import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    name: "Rafael Mendes",
    role: "CEO — TechStore",
    text: "Em 60 dias, nossas vendas online cresceram 280%. O investimento se pagou no primeiro mês.",
  },
  {
    name: "Camila Santos",
    role: "Fundadora — Bella Cosméticos",
    text: "A landing page que criaram converteu 4x mais que nosso site anterior. Resultado impressionante.",
  },
  {
    name: "Lucas Ferreira",
    role: "Diretor — LF Consultoria",
    text: "Profissionalismo de outro nível. Cada detalhe foi pensado para gerar resultado.",
  },
];

const SocialProofSection = () => (
  <section className="section-padding">
    <div className="container-narrow">
      <AnimatedSection className="text-center mb-16">
        <span className="text-sm font-medium uppercase tracking-widest text-primary">Depoimentos</span>
        <h2 className="heading-lg mt-3">
          Quem já trabalhou conosco{" "}
          <span className="gradient-text">recomenda.</span>
        </h2>
      </AnimatedSection>

      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <AnimatedSection key={i} delay={i * 0.15}>
            <div className="card-glass h-full flex flex-col">
              <div className="mb-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, j) => (
                  <span key={j} className="text-primary">★</span>
                ))}
              </div>
              <p className="text-foreground leading-relaxed flex-1">"{t.text}"</p>
              <div className="mt-6 pt-4 border-t border-border/50">
                <p className="font-semibold text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default SocialProofSection;
