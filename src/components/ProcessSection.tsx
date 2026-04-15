import AnimatedSection from "./AnimatedSection";

const steps = [
  { num: "01", title: "Diagnóstico", desc: "Analisamos seu negócio, concorrência e público para criar a estratégia ideal." },
  { num: "02", title: "Estratégia", desc: "Definimos a estrutura, copy e funil de conversão do seu projeto." },
  { num: "03", title: "Design & Desenvolvimento", desc: "Criamos o design premium e desenvolvemos com tecnologia de ponta." },
  { num: "04", title: "Lançamento & Otimização", desc: "Publicamos, monitoramos métricas e otimizamos para máxima performance." },
];

const ProcessSection = () => (
  <section id="processo" className="section-padding">
    <div className="container-narrow">
      <AnimatedSection className="text-center mb-16">
        <span className="text-sm font-medium uppercase tracking-widest text-primary">Processo</span>
        <h2 className="heading-lg mt-3">
          Do zero ao resultado em{" "}
          <span className="gradient-text">4 etapas.</span>
        </h2>
      </AnimatedSection>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-accent/40 to-transparent hidden md:block" />

        <div className="space-y-8 md:space-y-12">
          {steps.map((s, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <div className="flex gap-6 items-start">
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-card font-heading font-bold text-primary text-sm">
                  {s.num}
                </div>
                <div className="card-glass flex-1">
                  <h3 className="heading-md mb-2 text-foreground">{s.title}</h3>
                  <p className="text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ProcessSection;
