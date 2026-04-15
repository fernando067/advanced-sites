import AnimatedSection from "./AnimatedSection";

const rows = [
  { label: "Design", them: "Template genérico", us: "Design premium sob medida" },
  { label: "Estratégia", them: "Apenas visual", us: "Focado em conversão e vendas" },
  { label: "Performance", them: "Site lento e pesado", us: "Carregamento em menos de 2s" },
  { label: "Suporte", them: "Sem acompanhamento", us: "Suporte contínuo pós-lançamento" },
  { label: "Resultados", them: "Sem garantias", us: "Métricas e otimização constante" },
];

const DifferentialsSection = () => (
  <section className="section-padding" style={{ background: "var(--gradient-section-alt)" }}>
    <div className="container-narrow">
      <AnimatedSection className="text-center mb-16">
        <span className="text-sm font-medium uppercase tracking-widest text-primary">Por que nós</span>
        <h2 className="heading-lg mt-3">
          Não somos mais uma{" "}
          <span className="gradient-text">agência comum.</span>
        </h2>
      </AnimatedSection>

      <AnimatedSection>
        <div className="glass rounded-2xl overflow-hidden">
          <div className="grid grid-cols-3 gap-px bg-border/30">
            <div className="bg-card/60 p-4 text-sm font-medium text-muted-foreground" />
            <div className="bg-card/60 p-4 text-center text-sm font-medium text-muted-foreground">Mercado Comum</div>
            <div className="bg-primary/10 p-4 text-center text-sm font-bold text-primary">Advanced MKT</div>
          </div>
          {rows.map((r, i) => (
            <div key={i} className="grid grid-cols-3 gap-px bg-border/20">
              <div className="bg-card/40 p-4 text-sm font-medium text-foreground">{r.label}</div>
              <div className="bg-card/40 p-4 text-center text-sm text-muted-foreground">{r.them}</div>
              <div className="bg-primary/5 p-4 text-center text-sm font-medium text-foreground">{r.us}</div>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default DifferentialsSection;
