import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export type PortfolioProject = {
  title: string;
  tag: string;
  url: string;
  visitUrl?: string;
  desktopImg: string;
  mobileImg: string;
};

interface PortfolioCarouselProps {
  title: string;
  projects: PortfolioProject[];
}

const PortfolioCarousel = ({ title, projects }: PortfolioCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: "start" });
  const [selected, setSelected] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const total = projects.length;
  const counter = String(selected + 1).padStart(2, "0");
  const totalStr = String(total).padStart(2, "0");

  return (
    <div className="mb-20 last:mb-0">
      <header className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <h3 className="heading-lg">{title}</h3>
        <div className="flex items-center gap-4">
          <span className="font-mono text-sm text-muted-foreground">
            <b className="text-foreground">{counter}</b> / {totalStr}
          </span>
          <div className="flex gap-2">
            <button
              onClick={() => emblaApi?.scrollPrev()}
              disabled={!canPrev}
              aria-label="Anterior"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/50 text-foreground transition hover:border-primary/50 hover:bg-primary/10 disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => emblaApi?.scrollNext()}
              disabled={!canNext}
              aria-label="Próximo"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/50 text-foreground transition hover:border-primary/50 hover:bg-primary/10 disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {projects.map((p, i) => (
            <div key={i} className="min-w-0 shrink-0 grow-0 basis-full pr-4 sm:pr-6">
              <ProjectCard project={p} />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex justify-center gap-2">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            aria-label={`Ir para slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              i === selected ? "w-8 bg-primary" : "w-1.5 bg-border hover:bg-muted-foreground"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const ProjectCard = ({ project }: { project: PortfolioProject }) => (
  <motion.article
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5 }}
    className="card-glass overflow-hidden p-6 md:p-8"
  >
    <div className="mb-6 flex flex-wrap items-start justify-between gap-3">
      <div>
        <span className="mb-2 inline-block rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          {project.tag}
        </span>
        <h4 className="heading-md">{project.title}</h4>
      </div>
      {project.visitUrl && (
        <a
          href={project.visitUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition hover:text-primary"
        >
          visitar site
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      )}
    </div>

    <div className="grid grid-cols-1 items-end gap-6 md:grid-cols-[1fr_auto]">
      {/* Desktop mockup */}
      <div>
        <span className="mb-2 block text-xs uppercase tracking-wider text-muted-foreground">Desktop</span>
        <div className="overflow-hidden rounded-lg border border-border bg-secondary shadow-[var(--shadow-card)]">
          <div className="flex items-center gap-3 border-b border-border bg-muted/30 px-3 py-2">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
            </div>
            <div className="flex-1 truncate rounded bg-background/50 px-2 py-0.5 text-center text-[10px] text-muted-foreground sm:text-xs">
              {project.url}
            </div>
          </div>
          <div className="aspect-video bg-background">
            <img
              src={project.desktopImg}
              alt={`${project.title} — desktop`}
              loading="lazy"
              className="h-full w-full object-cover object-top"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
              }}
            />
          </div>
        </div>
      </div>

      {/* Mobile mockup */}
      <div className="justify-self-start md:justify-self-center">
        <span className="mb-2 block text-xs uppercase tracking-wider text-muted-foreground">Mobile</span>
        <div className="w-[140px] overflow-hidden rounded-2xl border-4 border-secondary bg-secondary shadow-[var(--shadow-card)] md:w-[160px]">
          <div className="aspect-[9/19] bg-background">
            <img
              src={project.mobileImg}
              alt={`${project.title} — mobile`}
              loading="lazy"
              className="h-full w-full object-cover object-top"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
              }}
            />
          </div>
        </div>
      </div>
    </div>
  </motion.article>
);

const landingPages: PortfolioProject[] = [
  { title: "Ethos", tag: "Landing Page", url: "www.ethos.symgente.com.br", desktopImg: "/assets/ethos.png", mobileImg: "/assets/ethosmobile.png" },
  { title: "Importadora Biglines", tag: "Landing Page", url: "www.lp.importadorabiglines.com.br", desktopImg: "/assets/importadorabiglines.png", mobileImg: "/assets/biglinesmobile.png" },
  { title: "My Charm", tag: "Landing Page", url: "www.flaviamycharm.com.br", desktopImg: "/assets/mycharm.png", mobileImg: "/assets/mycharmmobile.png" },
  { title: "Sym", tag: "Landing Page", url: "www.symgente.com.br", desktopImg: "/assets/sym.png", mobileImg: "/assets/symmobile.png" },
  { title: "Madiolu", tag: "Landing Page", url: "www.grupovipmadiolu.com.br", desktopImg: "/assets/madiolu.png", mobileImg: "/assets/madiolumobile.png" },
];

const ecommerces: PortfolioProject[] = [
  { title: "Madame San", tag: "E-commerce", url: "www.madamesan.com.br", desktopImg: "/assets/madamesan.png", mobileImg: "/assets/madamesanmobile.png" },
  { title: "Empório Boho", tag: "E-commerce", url: "www.emporioboho.com.br", desktopImg: "/assets/emporioboho.png", mobileImg: "/assets/emporiobohomobile.png" },
  { title: "Olive Gold Joias", tag: "E-commerce", url: "www.livegoldjoias.com.br", desktopImg: "/assets/olivegold.png", mobileImg: "/assets/oivegoldmobile.png" },
  { title: "Evoque 18k", tag: "E-commerce", url: "www.evoque18k.com.br", desktopImg: "/assets/evoque18k.png", mobileImg: "/assets/evoque18lmobie.png" },
  { title: "Labelle Semijoias", tag: "E-commerce", url: "www.labellesemijoias.com.br", desktopImg: "/assets/labelle.png", mobileImg: "/assets/labellemobile.png" },
  { title: "Use Joias", tag: "E-commerce", url: "www.usejoias.com.br", desktopImg: "/assets/usejoias.png", mobileImg: "/assets/usejoiasmobile.png" },
  { title: "Beautings", tag: "E-commerce", url: "www.beautings.com.br", desktopImg: "/assets/beautings.png", mobileImg: "/assets/beautingsmobile.png" },
];

const PortfolioSection = () => (
  <section id="portfolio" className="section-padding">
    <div className="container-narrow">
      <div className="mb-16 text-center">
        <span className="mb-3 inline-block text-sm font-medium uppercase tracking-widest text-primary">
          Portfólio
        </span>
        <h2 className="heading-xl">
          Alguns dos <span className="gradient-text">nossos trabalhos</span>
        </h2>
      </div>

      <PortfolioCarousel title="Páginas de venda" projects={landingPages} />
      <PortfolioCarousel title="E-commerces" projects={ecommerces} />
    </div>
  </section>
);

export default PortfolioSection;
