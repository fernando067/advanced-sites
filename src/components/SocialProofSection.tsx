import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import testimonialWhatsapp1 from "@/assets/testimonial-whatsapp-1.png";

type TextTestimonial = {
  type: "text";
  name: string;
  role: string;
  text: string;
};

type ImageTestimonial = {
  type: "image";
  src: string;
  alt: string;
};

type Testimonial = TextTestimonial | ImageTestimonial;

const testimonials: Testimonial[] = [
  {
    type: "image",
    src: testimonialWhatsapp1,
    alt: "Depoimento de cliente via WhatsApp agradecendo pelo trabalho e elogiando o resultado do site",
  },
  {
    type: "text",
    name: "Rafael Mendes",
    role: "CEO — TechStore",
    text: "Em 60 dias, nossas vendas online cresceram 280%. O investimento se pagou no primeiro mês.",
  },
  {
    type: "text",
    name: "Camila Santos",
    role: "Fundadora — Bella Cosméticos",
    text: "A landing page que criaram converteu 4x mais que nosso site anterior. Resultado impressionante.",
  },
  {
    type: "text",
    name: "Lucas Ferreira",
    role: "Diretor — LF Consultoria",
    text: "Profissionalismo de outro nível. Cada detalhe foi pensado para gerar resultado.",
  },
];

const TestimonialCard = ({ t }: { t: Testimonial }) => {
  if (t.type === "image") {
    return (
      <div className="card-glass h-full flex flex-col overflow-hidden">
        <div className="rounded-lg overflow-hidden bg-background/40 border border-border/50">
          <img
            src={t.src}
            alt={t.alt}
            loading="lazy"
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="mt-4 pt-4 border-t border-border/50">
          <p className="text-sm text-muted-foreground">Depoimento real via WhatsApp</p>
        </div>
      </div>
    );
  }

  return (
    <div className="card-glass h-full flex flex-col">
      <div className="mb-4 flex gap-1">
        {Array.from({ length: 5 }).map((_, j) => (
          <span key={j} className="text-primary">★</span>
        ))}
      </div>
      <p className="text-foreground leading-relaxed flex-1">"{t.text}"</p>
      <div className="mt-6 pt-4 border-t border-border/50">
        <p className="font-semibold text-foreground">{t.name}</p>
        <p className="text-sm text-muted-foreground">{t.role}</p>
      </div>
    </div>
  );
};

const SocialProofSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="section-padding">
      <div className="container-narrow">
        <AnimatedSection className="text-center mb-16">
          <span className="text-sm font-medium uppercase tracking-widest text-primary">Depoimentos</span>
          <h2 className="heading-lg mt-3">
            Quem já trabalhou conosco{" "}
            <span className="gradient-text">recomenda.</span>
          </h2>
        </AnimatedSection>

        <div className="relative">
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="min-w-0 shrink-0 grow-0 basis-[88%] pr-4 sm:basis-1/2 sm:pr-6 md:basis-1/3"
                >
                  <TestimonialCard t={t} />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={() => emblaApi?.scrollPrev()}
              aria-label="Anterior"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/50 text-foreground transition hover:border-primary/50 hover:bg-primary/10"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => emblaApi?.scrollTo(i)}
                  aria-label={`Ir para depoimento ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === selected ? "w-8 bg-primary" : "w-1.5 bg-border hover:bg-muted-foreground"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => emblaApi?.scrollNext()}
              aria-label="Próximo"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/50 text-foreground transition hover:border-primary/50 hover:bg-primary/10"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
