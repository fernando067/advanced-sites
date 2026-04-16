import AnimatedSection from "./AnimatedSection";

const BeforeAfterSection = () => (
  <section className="section-padding" style={{ background: "var(--gradient-section-alt)" }}>
    <div className="container-narrow">
      <AnimatedSection className="text-center mb-16">
        <span className="text-sm font-medium uppercase tracking-widest text-primary">Transformação</span>
        <h2 className="heading-lg mt-3">
          Antes vs. <span className="gradient-text">Depois</span>
        </h2>
      </AnimatedSection>

      <div className="grid gap-8 md:grid-cols-2">
        <AnimatedSection>
          <div className="rounded-2xl border border-destructive/20 bg-destructive/5 p-8">
            <h3 className="heading-md mb-6 text-destructive">❌ Antes</h3>
            <ul className="space-y-4">
              {[
                "Design genérico e desatualizado",
                "Taxa de conversão abaixo de 1%",
                "Site lento e não responsivo",
                "Sem estratégia de vendas",
                "Clientes abandonam o carrinho",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive/60" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8">
            <h3 className="heading-md mb-6 text-primary">✅ Depois</h3>
            <ul className="space-y-4">
              {[
                "Design premium que gera confiança",
                "Estratégia focada em resultados reais",
                "Performance otimizada para o usuário",
                "Funil de vendas otimizado",
                "Checkout fluido e sem fricção",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-foreground">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default BeforeAfterSection;
