import AnimatedSection from "./AnimatedSection";
import ScrollStackCard from "./ScrollStackCard";
import { Palette, Zap, PenTool, BarChart3, Link, ShieldCheck } from "lucide-react";
import { ReactNode } from "react";

const items: { icon: ReactNode; title: string; desc: string }[] = [
  { icon: <Palette className="h-7 w-7" />, title: "Design UI/UX Premium", desc: "Interface moderna e profissional criada sob medida." },
  { icon: <Zap className="h-7 w-7" />, title: "Desenvolvimento High-End", desc: "Código limpo, rápido e otimizado para performance." },
  { icon: <PenTool className="h-7 w-7" />, title: "Copywriting Estratégico", desc: "Textos persuasivos que convertem visitantes em clientes." },
  { icon: <BarChart3 className="h-7 w-7" />, title: "SEO & Analytics", desc: "Otimização para mecanismos de busca e rastreamento completo." },
  { icon: <Link className="h-7 w-7" />, title: "Integrações", desc: "Pagamento, CRM, email marketing e automações." },
  { icon: <ShieldCheck className="h-7 w-7" />, title: "Suporte & Manutenção", desc: "Acompanhamento contínuo pós-lançamento." },
];

const DeliveryStackSection = () => (
  <section className="section-padding">
    <div className="container-narrow">
      <AnimatedSection className="text-center mb-16">
        <span className="text-sm font-medium uppercase tracking-widest text-primary">O que você recebe</span>
        <h2 className="heading-lg mt-3">
          Tudo que você precisa em{" "}
          <span className="gradient-text">um só lugar.</span>
        </h2>
      </AnimatedSection>

      <div className="space-y-6">
        {items.map((item, i) => (
          <ScrollStackCard key={i} index={i} total={items.length}>
            <div className="rounded-2xl border border-border/60 bg-card/80 backdrop-blur-xl p-6 shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-elevated)]">
              <div className="flex items-start gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  {item.icon}
                </div>
                <div>
                  <h3 className="heading-md mb-1 text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </div>
          </ScrollStackCard>
        ))}
      </div>
    </div>
  </section>
);

export default DeliveryStackSection;
