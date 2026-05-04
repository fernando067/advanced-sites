import AnimatedSection from "./AnimatedSection";

const BeliefBreakSection = () => (
  <section
    className="relative overflow-hidden px-5 py-20 md:px-14 md:py-28"
    style={{ background: "#f0ece4", color: "#060606" }}
  >
    <div className="mx-auto max-w-[1180px]">
      <AnimatedSection>
        {/* Label */}
        <div
          className="mb-3 flex items-center gap-2.5 text-[10px] font-semibold uppercase"
          style={{
            letterSpacing: "0.16em",
            color: "rgba(37,99,255,.75)",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          <span
            aria-hidden="true"
            className="block h-px w-4"
            style={{ background: "#2563ff" }}
          />
          A Verdade
        </div>

        {/* Headline */}
        <h2
          className="mb-4"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(42px, 10vw, 84px)",
            lineHeight: 0.95,
            letterSpacing: "0.02em",
            color: "#060606",
          }}
        >
          O PROBLEMA<br />
          NÃO É SEU<br />
          <span style={{ color: "#3b7eff" }}>PRODUTO.</span>
        </h2>

        {/* Subcopy */}
        <p
          className="max-w-2xl"
          style={{
            color: "#444",
            fontSize: "15px",
            lineHeight: 1.75,
            fontWeight: 300,
            fontFamily: "'DM Sans', sans-serif",
            marginBottom: "32px",
          }}
        >
          Empresários com ótimos produtos perdem vendas porque seus sites não foram
          construídos para converter. Um design bonito sem estratégia é apenas uma vitrine vazia.
        </p>

        {/* List */}
        <ul
          className="mb-10 flex max-w-2xl list-none flex-col gap-3"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          {[
            "Design premium focado em conversão",
            "Copywriting persuasivo e estratégico",
            "Otimização de velocidade e SEO",
            "Integração com ferramentas de marketing",
            "Responsivo e perfeito no mobile",
          ].map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 text-sm font-light"
              style={{ color: "#1a1a1a" }}
            >
              <span
                aria-hidden="true"
                className="flex h-[22px] min-w-[22px] items-center justify-center rounded-[2px] text-[11px] font-bold"
                style={{
                  color: "#2563ff",
                  background: "rgba(37,99,255,.12)",
                }}
              >
                →
              </span>
              {item}
            </li>
          ))}
        </ul>

        {/* Stats grid */}
        <div className="mt-8 grid grid-cols-2 gap-2.5">
          <div
            className="relative col-span-2 overflow-hidden rounded-lg p-6"
            style={{ background: "#2563ff", border: "0.5px solid #2563ff" }}
          >
            <div
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "48px",
                lineHeight: 1,
                letterSpacing: "0.02em",
                color: "#fff",
                marginBottom: "4px",
              }}
            >
              +340%
            </div>
            <div className="text-[11px]" style={{ color: "rgba(255,255,255,.7)", lineHeight: 1.4 }}>
              Aumento médio de conversão
            </div>
          </div>

          {[
            { n: "<2s", l: "Tempo de carregamento" },
            { n: "100%", l: "Mobile-first" },
            { n: "12+", l: "E-commerces entregues" },
            { n: "5+", l: "Landing pages entregues" },
          ].map((s) => (
            <div
              key={s.l}
              className="relative overflow-hidden rounded-lg p-5"
              style={{
                background: "#ffffff",
                border: "0.5px solid rgba(0,0,0,0.08)",
              }}
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(37,99,255,.06), transparent)",
                }}
              />
              <div
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "40px",
                  color: "#3b7eff",
                  lineHeight: 1,
                  letterSpacing: "0.02em",
                  marginBottom: "4px",
                }}
              >
                {s.n}
              </div>
              <div className="text-[11px]" style={{ color: "#666", lineHeight: 1.4 }}>
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default BeliefBreakSection;
