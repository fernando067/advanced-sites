import AnimatedSection from "./AnimatedSection";

const pains = [
  { icon: "📉", title: "Tráfego sem conversão", desc: "Gasta com anúncios mas não vê retorno real nas vendas." },
  { icon: "🐌", title: "Site lento e desatualizado", desc: "Design antigo que afasta clientes ao invés de atrair." },
  { icon: "🔧", title: "Manutenção constante", desc: "Vive com bugs e problemas que nunca são resolvidos." },
  { icon: "📱", title: "Não funciona no mobile", desc: "Mais de 80% dos acessos são mobile e seu site não está pronto." },
  { icon: "💸", title: "Investimento sem resultado", desc: "Já contratou freelancers e agências sem resultados concretos." },
  { icon: "😤", title: "Zero suporte estratégico", desc: "Não tem ninguém para orientar o que funciona de verdade." },
];

const PainSection = () => (
  <section className="section-padding" style={{ background: "var(--gradient-section-alt)" }}>
    <div className="container-narrow">
      <AnimatedSection className="text-center mb-16">
        <span className="text-sm font-medium uppercase tracking-widest text-primary">O problema</span>
        <h2 className="heading-lg mt-3">
          Isso parece familiar?
        </h2>
        <p className="body-lg mx-auto mt-4 max-w-2xl">
          A maioria dos empresários enfrenta os mesmos problemas quando tenta vender online.
        </p>
      </AnimatedSection>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {pains.map((p, i) => (
          <AnimatedSection key={i} delay={i * 0.1}>
            <div className="card-glass group h-full">
              <span className="mb-4 block text-3xl">{p.icon}</span>
              <h3 className="heading-md mb-2 text-foreground">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default PainSection;
