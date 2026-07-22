import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  Download,
  ShieldCheck,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const SLIDE_DURATION = 8000;

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return undefined;

    const timer = window.setTimeout(() => {
      setActiveSlide((current) => (current + 1) % 2);
    }, SLIDE_DURATION);

    return () => window.clearTimeout(timer);
  }, [activeSlide, isPaused]);

  const showPreviousSlide = () => {
    setActiveSlide((current) => (current - 1 + 2) % 2);
  };

  const showNextSlide = () => {
    setActiveSlide((current) => (current + 1) % 2);
  };

  return (
    <section
      className="relative min-h-[85vh] overflow-hidden bg-[#061d43]"
      aria-label="Destaques do Sindetur-SP"
      aria-roledescription="carrossel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false);
      }}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") showPreviousSlide();
        if (event.key === "ArrowRight") showNextSlide();
      }}
    >
      <AnimatePresence initial={false} mode="sync">
        {activeSlide === 0 ? (
          <motion.div
            key="institucional"
            className="absolute inset-0 flex items-center"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            transition={{ duration: 0.65, ease: "easeInOut" }}
            aria-hidden={activeSlide !== 0}
          >
            <div className="absolute inset-0">
              <img
                src="https://media.base44.com/images/public/6a0334e8fc336e4a6c562d3b/d8be717db_generated_56c1963c.png"
                alt="Turismo corporativo em São Paulo"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/30" />
            </div>

            <div className="relative mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
              <div className="max-w-2xl">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-sm">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-primary" />
                  <span className="text-xs font-medium uppercase tracking-wide text-white/90">
                    Sindicato Patronal das Empresas de Turismo
                  </span>
                </div>

                <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                  Juntos fortalecemos as empresas de turismo do Estado de São Paulo
                </h1>

                <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
                  O Sindetur-SP representa, defende e fortalece empresas do turismo, contribuindo para a profissionalização do setor e para o crescimento dos negócios.
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <Button asChild size="lg" className="h-12 rounded-lg bg-primary px-8 font-semibold text-primary-foreground hover:bg-primary/90">
                    <Link to="/associe-se" className="group">
                      Quero me associar
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="h-12 rounded-lg border-white/30 bg-transparent font-medium text-white hover:bg-white hover:text-foreground">
                    <Link to="/sobre">
                      Conheça nossa atuação
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="guia-nr01"
            className="absolute inset-0 flex items-center"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.65, ease: "easeInOut" }}
            aria-hidden={activeSlide !== 1}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_20%,rgba(29,112,205,0.48),transparent_33%),linear-gradient(115deg,#04142f_0%,#082c61_58%,#0b5fb4_100%)]" />
            <div className="absolute -right-24 top-1/2 h-[34rem] w-[34rem] -translate-y-1/2 rounded-full border border-white/15" />
            <div className="absolute -right-8 top-1/2 h-[27rem] w-[27rem] -translate-y-1/2 rounded-full border border-white/10" />

            <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 px-4 py-24 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-28">
              <div className="max-w-2xl">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-300/25 bg-sky-300/10 px-4 py-1.5 backdrop-blur-sm">
                  <ShieldCheck className="h-4 w-4 text-sky-300" />
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-sky-100">
                    Conteúdo gratuito • 17 páginas
                  </span>
                </div>

                <h2 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                  A nova NR-01, sem juridiquês e com aplicação prática
                </h2>

                <p className="mt-5 max-w-xl text-base leading-relaxed text-blue-50/80 sm:text-lg">
                  O Sindetur-SP, em parceria com a Abracorp, disponibiliza um guia gerencial para ajudar agências de turismo a compreender riscos psicossociais, orientar lideranças e transformar as exigências da norma em um plano de ação.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Button asChild size="lg" className="h-12 rounded-lg bg-primary px-7 font-semibold text-white shadow-lg shadow-black/20 hover:bg-primary/90">
                    <a href="/materiais/guia-nr01-sindetur-sp.pdf" download="Guia-NR01-Sindetur-SP.pdf">
                      <Download className="mr-1 h-4 w-4" />
                      Baixar guia gratuito
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="h-12 rounded-lg border-white/25 bg-transparent font-medium text-white hover:bg-white hover:text-[#061d43]">
                    <Link to="/guia-nr01">
                      Conheça o guia
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="relative hidden lg:block" aria-hidden="true">
                <div className="absolute -inset-5 rotate-3 rounded-2xl bg-sky-300/10 blur-sm" />
                <img
                  src="/materiais/guia-nr01-capa.png"
                  alt=""
                  className="relative w-full rotate-1 rounded-xl border border-white/25 shadow-2xl shadow-black/40"
                />
                <div className="absolute -bottom-5 -left-6 rounded-xl border border-white/15 bg-[#061d43]/85 px-5 py-3 text-sm font-medium text-white shadow-xl backdrop-blur-md">
                  Guia prático gerencial
                  <span className="mt-0.5 block text-xs font-normal text-blue-100/65">Riscos psicossociais e organização do trabalho</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3 sm:bottom-7">
        {[0, 1].map((slide) => (
          <button
            key={slide}
            type="button"
            onClick={() => setActiveSlide(slide)}
            className={`h-2.5 rounded-full border border-white/60 transition-all ${
              activeSlide === slide ? "w-8 bg-white" : "w-2.5 bg-white/25 hover:bg-white/60"
            }`}
            aria-label={`Ir para o slide ${slide + 1}`}
            aria-current={activeSlide === slide ? "true" : undefined}
          />
        ))}
      </div>

      <div className="absolute bottom-5 right-4 z-20 hidden gap-2 sm:bottom-7 sm:right-6 sm:flex lg:right-8">
        <button
          type="button"
          onClick={showPreviousSlide}
          className="grid h-10 w-10 place-items-center rounded-full border border-white/25 bg-black/15 text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-[#061d43]"
          aria-label="Slide anterior"
        >
          <ArrowLeft className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={showNextSlide}
          className="grid h-10 w-10 place-items-center rounded-full border border-white/25 bg-black/15 text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-[#061d43]"
          aria-label="Próximo slide"
        >
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
}
