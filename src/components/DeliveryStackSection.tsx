import AnimatedSection from "./AnimatedSection";

const items = [
  { icon: "🎨", title: "Design UI/UX Premium", desc: "Interface moderna e profissional criada sob medida." },
  { icon: "⚡", title: "Desenvolvimento High-End", desc: "Código limpo, rápido e otimizado para performance." },
  { icon: "✍️", title: "Copywriting Estratégico", desc: "Textos persuasivos que convertem visitantes em clientes." },
  { icon: "📊", title: "SEO & Analytics", desc: "Otimização para mecanismos de busca e rastreamento completo." },
  { icon: "🔗", title: "Integrações", desc: "Pagamento, CRM, email marketing e automações." },
  { icon: "🛡️", title: "Suporte & Manutenção", desc: "Acompanhamento contínuo pós-lançamento." },
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

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <AnimatedSection key={i} delay={i * 0.08}>
            <div className="card-glass h-full relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <span className="mb-4 block text-3xl">{item.icon}</span>
                <h3 className="heading-md mb-2 text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default DeliveryStackSection;
