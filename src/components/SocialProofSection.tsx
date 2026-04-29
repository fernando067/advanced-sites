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

        <div className="mx-auto max-w-md">
          <TestimonialCard t={testimonials[0]} />
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
