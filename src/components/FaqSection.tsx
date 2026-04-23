import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AnimatedSection from "./AnimatedSection";

const faqs = [
  { q: "Quanto tempo leva para ficar pronto?", a: "Até 15 dias úteis." },
  { q: "Vocês trabalham com qual plataforma?", a: "Utilizamos as melhores tecnologias do mercado: Shopify (somente essa)." },
  { q: "Posso acompanhar o desenvolvimento?", a: "Sim! Por grupo de WhatsApp e reuniões de alinhamento ao longo do projeto." },
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
              <AccordionTrigger className="px-3 py-2.5 text-left text-xs font-heading font-semibold text-foreground hover:no-underline hover:text-primary transition-colors sm:text-sm">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="px-3 pb-2.5 text-xs text-muted-foreground leading-relaxed sm:text-sm">
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
