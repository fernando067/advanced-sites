import AnimatedSection from "./AnimatedSection";
import ScrollStackCard from "./ScrollStackCard";
import MobileCardCarousel from "./MobileCardCarousel";
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

      {/* Desktop: scroll stack */}
      <div className="hidden md:block space-y-6">
        {items.map((item, i) => (
          <ScrollStackCard key={i} index={i}>
            <DeliveryCard item={item} />
          </ScrollStackCard>
        ))}
      </div>

      {/* Mobile: carousel */}
      <div className="md:hidden">
        <MobileCardCarousel>
          {items.map((item, i) => <DeliveryCard key={i} item={item} />)}
        </MobileCardCarousel>
      </div>
    </div>
  </section>
);

const DeliveryCard = ({ item }: { item: { icon: ReactNode; title: string; desc: string } }) => (
  <div className="rounded-2xl border border-border/60 bg-card/80 backdrop-blur-xl p-5 sm:p-6 shadow-[var(--shadow-card)] h-full">
    <div className="flex items-start gap-4 sm:gap-5">
      <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
        {item.icon}
      </div>
      <div>
        <h3 className="heading-md mb-1 text-foreground">{item.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
      </div>
    </div>
  </div>
);

export default DeliveryStackSection;
