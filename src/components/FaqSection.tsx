import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AnimatedSection from "./AnimatedSection";

const faqs = [
  { q: "Quanto tempo leva para ficar pronto?", a: "Projetos de landing page levam de 7 a 14 dias. E-commerces completos de 21 a 45 dias, dependendo da complexidade." },
  { q: "Vocês trabalham com qual plataforma?", a: "Utilizamos as melhores tecnologias do mercado: Shopify, WordPress/WooCommerce, e soluções custom com React para performance máxima." },
  { q: "Posso acompanhar o desenvolvimento?", a: "Sim! Você recebe acesso a um painel de acompanhamento em tempo real e tem reuniões de check-in semanais." },
  { q: "E se eu não gostar do resultado?", a: "Trabalhamos com rodadas de revisão ilimitadas na fase de design. Nosso objetivo é que você fique 100% satisfeito." },
  { q: "Qual o investimento?", a: "Cada projeto é único. Agende uma reunião estratégica gratuita e receba uma proposta personalizada para o seu negócio." },
  { q: "Vocês oferecem suporte pós-lançamento?", a: "Sim, oferecemos planos de suporte contínuo com manutenção, otimização e atualizações mensais." },
];

const FaqSection = () => (
  <section className="section-padding" style={{ background: "var(--gradient-section-alt)" }}>
    <div className="container-narrow max-w-3xl">
      <AnimatedSection className="text-center mb-16">
        <span className="text-sm font-medium uppercase tracking-widest text-primary">Dúvidas</span>
        <h2 className="heading-lg mt-3">Perguntas frequentes</h2>
      </AnimatedSection>

      <AnimatedSection>
        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="card-glass border-border/50 overflow-hidden"
            >
              <AccordionTrigger className="px-4 py-3 text-left text-sm font-heading font-semibold text-foreground hover:no-underline hover:text-primary transition-colors sm:text-base">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-3 text-sm text-muted-foreground leading-relaxed">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </AnimatedSection>
    </div>
  </section>
);

export default FaqSection;
