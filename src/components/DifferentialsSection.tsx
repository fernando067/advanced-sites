import AnimatedSection from "./AnimatedSection";
import { X, Check, Palette, Target, Gauge, Headset, TrendingUp } from "lucide-react";
import { ReactNode } from "react";

const rows: { icon: ReactNode; label: string; them: string; us: string }[] = [
  { icon: <Palette className="h-4 w-4" />, label: "Design", them: "Template genérico", us: "Premium sob medida" },
  { icon: <Target className="h-4 w-4" />, label: "Estratégia", them: "Apenas visual", us: "Focado em conversão" },
  { icon: <Gauge className="h-4 w-4" />, label: "Performance", them: "Site lento e pesado", us: "Menos de 2s de load" },
  { icon: <Headset className="h-4 w-4" />, label: "Suporte", them: "Sem acompanhamento", us: "Suporte contínuo" },
  { icon: <TrendingUp className="h-4 w-4" />, label: "Resultados", them: "Sem garantias", us: "Otimização constante" },
];

const DifferentialsSection = () => (
  <section className="section-padding" style={{ background: "var(--gradient-section-alt)" }}>
    <div className="container-narrow">
      <AnimatedSection className="text-center mb-12 md:mb-16">
        <span className="text-sm font-medium uppercase tracking-widest text-primary">Por que nós</span>
        <h2 className="heading-lg mt-3">
          Não somos mais uma{" "}
          <span className="gradient-text">agência comum.</span>
        </h2>
        <p className="body-lg mx-auto mt-4 max-w-xl">
          Veja como nos diferenciamos do que o mercado oferece.
        </p>
      </AnimatedSection>

      {/* Desktop table */}
      <AnimatedSection>
        <div className="hidden md:block rounded-2xl border border-border/50 overflow-hidden backdrop-blur-xl bg-card/40">
          {/* Header */}
          <div className="grid grid-cols-[1fr_1fr_1fr] border-b border-border/40">
            <div className="p-5" />
            <div className="p-5 text-center border-x border-border/30">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Mercado Comum</span>
            </div>
            <div className="p-5 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-primary/[0.07]" />
              <span className="relative text-xs font-bold uppercase tracking-wider text-primary">Advanced MKT</span>
            </div>
          </div>

          {/* Rows */}
          {rows.map((r, i) => (
            <div
              key={i}
              className={`grid grid-cols-[1fr_1fr_1fr] transition-colors hover:bg-muted/20 ${
                i < rows.length - 1 ? "border-b border-border/30" : ""
              }`}
            >
              <div className="p-5 flex items-center gap-3">
                <span className="text-muted-foreground">{r.icon}</span>
                <span className="text-sm font-semibold text-foreground">{r.label}</span>
              </div>
              <div className="p-5 flex items-center justify-center gap-2 border-x border-border/30">
                <X className="h-4 w-4 text-destructive/70" />
                <span className="text-sm text-muted-foreground">{r.them}</span>
              </div>
              <div className="p-5 flex items-center justify-center gap-2 relative">
                <div className="absolute inset-0 bg-primary/[0.04]" />
                <Check className="h-4 w-4 text-primary relative z-10" />
                <span className="text-sm font-medium text-foreground relative z-10">{r.us}</span>
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* Mobile cards */}
      <div className="md:hidden space-y-4">
        {rows.map((r, i) => (
          <AnimatedSection key={i} delay={i * 0.08}>
            <div className="rounded-xl border border-border/50 bg-card/50 backdrop-blur-xl p-5">
              <div className="flex items-center gap-2.5 mb-4">
                <span className="text-primary">{r.icon}</span>
                <h3 className="text-sm font-bold text-foreground">{r.label}</h3>
              </div>
              <div className="space-y-2.5">
                <div className="flex items-center gap-2.5 rounded-lg bg-destructive/5 border border-destructive/10 px-3 py-2">
                  <X className="h-3.5 w-3.5 shrink-0 text-destructive/70" />
                  <span className="text-xs text-muted-foreground">{r.them}</span>
                </div>
                <div className="flex items-center gap-2.5 rounded-lg bg-primary/5 border border-primary/15 px-3 py-2">
                  <Check className="h-3.5 w-3.5 shrink-0 text-primary" />
                  <span className="text-xs font-medium text-foreground">{r.us}</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default DifferentialsSection;
