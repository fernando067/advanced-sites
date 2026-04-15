import AnimatedSection from "./AnimatedSection";
import ScrollStackCard from "./ScrollStackCard";
import { TrendingDown, Snail, Wrench, Smartphone, DollarSign, HeadsetOff } from "lucide-react";
import { ReactNode } from "react";

const pains: { icon: ReactNode; title: string; desc: string }[] = [
  { icon: <TrendingDown className="h-7 w-7" />, title: "Tráfego sem conversão", desc: "Gasta com anúncios mas não vê retorno real nas vendas." },
  { icon: <Snail className="h-7 w-7" />, title: "Site lento e desatualizado", desc: "Design antigo que afasta clientes ao invés de atrair." },
  { icon: <Wrench className="h-7 w-7" />, title: "Manutenção constante", desc: "Vive com bugs e problemas que nunca são resolvidos." },
  { icon: <Smartphone className="h-7 w-7" />, title: "Não funciona no mobile", desc: "Mais de 80% dos acessos são mobile e seu site não está pronto." },
  { icon: <DollarSign className="h-7 w-7" />, title: "Investimento sem resultado", desc: "Já contratou freelancers e agências sem resultados concretos." },
  { icon: <HeadsetOff className="h-7 w-7" />, title: "Zero suporte estratégico", desc: "Não tem ninguém para orientar o que funciona de verdade." },
];

const PainSection = () => (
  <section className="section-padding" style={{ background: "var(--gradient-section-alt)" }}>
    <div className="container-narrow">
      <AnimatedSection className="text-center mb-16">
        <span className="text-sm font-medium uppercase tracking-widest text-primary">O problema</span>
        <h2 className="heading-lg mt-3">Isso parece familiar?</h2>
        <p className="body-lg mx-auto mt-4 max-w-2xl">
          A maioria dos empresários enfrenta os mesmos problemas quando tenta vender online.
        </p>
      </AnimatedSection>

      <div className="space-y-6">
        {pains.map((p, i) => (
          <ScrollStackCard key={i} index={i} total={pains.length}>
            <div className="rounded-2xl border border-border/60 bg-card/80 backdrop-blur-xl p-6 shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-elevated)]">
              <div className="flex items-start gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  {p.icon}
                </div>
                <div>
                  <h3 className="heading-md mb-1 text-foreground">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </div>
            </div>
          </ScrollStackCard>
        ))}
      </div>
    </div>
  </section>
);

export default PainSection;
