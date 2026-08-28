import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  ChevronRight,
  Download,
  ExternalLink,
  FileText,
  GraduationCap,
  Landmark,
  ShieldCheck,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const SLIDE_DURATION = 5000;
const SLIDE_COUNT = 5;

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return undefined;

    const timer = window.setTimeout(() => {
      setActiveSlide((current) => (current + 1) % SLIDE_COUNT);
    }, SLIDE_DURATION);

    return () => window.clearTimeout(timer);
  }, [activeSlide, isPaused]);

  const showPreviousSlide = () => {
    setActiveSlide((current) => (current - 1 + SLIDE_COUNT) % SLIDE_COUNT);
  };

  const showNextSlide = () => {
    setActiveSlide((current) => (current + 1) % SLIDE_COUNT);
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
        ) : activeSlide === 1 ? (
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
        ) : activeSlide === 2 ? (
          <motion.div
            key="reforma-tributaria"
            className="absolute inset-0 flex items-center"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.65, ease: "easeInOut" }}
            aria-hidden={activeSlide !== 2}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(214,181,96,0.23),transparent_30%),linear-gradient(115deg,#19150f_0%,#3a2b18_55%,#705126_100%)]" />
            <div className="absolute left-0 top-0 h-full w-full opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.35)_1px,transparent_1px)] [background-size:48px_48px]" />

            <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 px-4 py-24 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-28">
              <div className="max-w-2xl">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-200/25 bg-amber-100/10 px-4 py-1.5 backdrop-blur-sm">
                  <Landmark className="h-4 w-4 text-amber-200" />
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-50">
                    Reforma Tributária
                  </span>
                </div>

                <h2 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                  Entenda as mudanças e prepare sua empresa
                </h2>

                <p className="mt-5 max-w-xl text-base leading-relaxed text-amber-50/75 sm:text-lg">
                  Acesse a cartilha da FecomercioSP e aprofunde seus conhecimentos sobre as mudanças no sistema tributário brasileiro.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Button asChild size="lg" className="h-12 rounded-lg bg-primary px-7 font-semibold text-white shadow-lg shadow-black/20 hover:bg-primary/90">
                    <Link to="/reforma-tributaria">
                      Conheça o conteúdo
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="h-12 rounded-lg border-white/25 bg-transparent font-medium text-white hover:bg-white hover:text-[#3a2b18]">
                    <a href="https://representa.fecomercio.com.br/orientacartilhas?utm_source=qr" target="_blank" rel="noopener noreferrer">
                      Acessar a cartilha
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>

              <div className="relative hidden lg:block" aria-hidden="true">
                <div className="absolute -inset-6 rotate-3 rounded-[2rem] border border-amber-100/10 bg-amber-100/5" />
                <div className="relative mx-auto max-w-md -rotate-1 rounded-2xl border border-white/20 bg-[#f7f1e4] p-8 shadow-2xl shadow-black/40">
                  <div className="flex items-start justify-between border-b border-[#cdbd9d] pb-5">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#9b2c31]">Cartilha</span>
                      <p className="mt-1 text-sm font-semibold text-[#5f513c]">FecomercioSP</p>
                    </div>
                    <div className="grid h-12 w-12 place-items-center rounded-full bg-[#9b2c31] text-white">
                      <FileText className="h-6 w-6" />
                    </div>
                  </div>
                  <p className="mt-7 font-display text-4xl font-bold leading-[1.05] text-[#302719]">
                    Reforma<br />Tributária
                  </p>
                  <div className="mt-8 space-y-3">
                    <div className="h-2 w-full rounded-full bg-[#d8ccb4]" />
                    <div className="h-2 w-5/6 rounded-full bg-[#d8ccb4]" />
                    <div className="h-2 w-2/3 rounded-full bg-[#d8ccb4]" />
                  </div>
                  <div className="mt-8 rounded-xl bg-[#eadfc9] p-4 text-sm font-medium text-[#5f513c]">
                    Informação para preparar sua empresa para as mudanças.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ) : activeSlide === 3 ? (
          <motion.div
            key="radix"
            className="absolute inset-0 flex items-center"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.65, ease: "easeInOut" }}
            aria-hidden={activeSlide !== 3}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(77,160,126,0.24),transparent_31%),linear-gradient(115deg,#071c17_0%,#0b3329_56%,#145342_100%)]" />
            <div className="absolute -right-24 top-1/2 h-[34rem] w-[34rem] -translate-y-1/2 rounded-full border border-emerald-100/10" />
            <div className="absolute -right-8 top-1/2 h-[27rem] w-[27rem] -translate-y-1/2 rounded-full border border-emerald-100/10" />

            <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 px-4 py-24 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-28">
              <div className="max-w-2xl">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-200/25 bg-emerald-100/10 px-4 py-1.5 backdrop-blur-sm">
                  <GraduationCap className="h-4 w-4 text-emerald-200" />
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-emerald-50">
                    Parceria Sindetur-SP + Radix
                  </span>
                </div>

                <h2 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                  Formação para um mercado em constante evolução
                </h2>

                <p className="mt-5 max-w-xl text-base leading-relaxed text-emerald-50/75 sm:text-lg">
                  Conheça a programação de cursos e formações da Radix voltada ao desenvolvimento de competências estratégicas para profissionais do turismo.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Button asChild size="lg" className="h-12 rounded-lg bg-primary px-7 font-semibold text-white shadow-lg shadow-black/20 hover:bg-primary/90">
                    <Link to="/radix">
                      Conheça os cursos
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="h-12 rounded-lg border-white/25 bg-transparent font-medium text-white hover:bg-white hover:text-[#0b3329]">
                    <a href="https://programaradix.com" target="_blank" rel="noopener noreferrer">
                      Ver programação completa
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>

              <div className="relative hidden lg:block" aria-hidden="true">
                <div className="absolute -inset-6 rotate-3 rounded-[2rem] border border-emerald-100/10 bg-emerald-100/5" />
                <div className="relative mx-auto max-w-md -rotate-1 overflow-hidden rounded-2xl border border-white/20 bg-white shadow-2xl shadow-black/40">
                  <div className="relative h-48 overflow-hidden bg-white">
                    <img
                      src="/assets/radix.jpg"
                      alt=""
                      className="absolute left-1/2 top-1/2 w-full max-w-none -translate-x-1/2 -translate-y-1/2"
                    />
                  </div>
                  <div className="border-t border-emerald-950/10 bg-[#f5f7f6] px-7 py-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-900/55">Programa de formação</p>
                    <p className="mt-1 text-sm font-medium text-emerald-950">Travel Design e turismo de alto padrão</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="festuris-gramado"
            className="absolute inset-0 flex items-center"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.65, ease: "easeInOut" }}
            aria-hidden={activeSlide !== 4}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_24%,rgba(255,61,25,0.25),transparent_31%),linear-gradient(115deg,#050505_0%,#121212_58%,#2a0904_100%)]" />
            <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,.25)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.25)_1px,transparent_1px)] [background-size:52px_52px]" />

            <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 px-4 py-24 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-28">
              <div className="max-w-2xl">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#ff6847]/30 bg-[#ff4b27]/10 px-4 py-1.5 backdrop-blur-sm">
                  <CalendarDays className="h-4 w-4 text-[#ff6847]" />
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#ffb8a9]">
                    12 a 15 de novembro • Gramado/RS
                  </span>
                </div>

                <h2 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                  Sindetur-SP apoia o Festuris Gramado 2026
                </h2>

                <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
                  Conexões, negócios e conteúdo em um dos grandes encontros do turismo nas Américas, com benefício exclusivo para associados no Meeting Festuris.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Button asChild size="lg" className="h-12 rounded-lg bg-primary px-7 font-semibold text-white shadow-lg shadow-black/20 hover:bg-primary/90">
                    <Link to="/festuris-gramado-2026">
                      Conheça a parceria
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="h-12 rounded-lg border-white/25 bg-transparent font-medium text-white hover:bg-white hover:text-[#111]">
                    <a href="https://www.festurisgramado.com/meeting" target="_blank" rel="noopener noreferrer">
                      Meeting Festuris
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>

              <div className="relative hidden lg:block" aria-hidden="true">
                <div className="absolute -inset-6 rotate-3 rounded-[2rem] border border-[#ff6847]/15 bg-[#ff4b27]/5" />
                <img
                  src="https://cdn.prod.website-files.com/602bd3abd7ec5127354e0f26/6915dcd5947ae6043fe620fd_ac5195a24beb683541c59e22ab0bfc03_og-2026.jpg"
                  alt=""
                  className="relative w-full -rotate-1 rounded-2xl border border-white/15 shadow-2xl shadow-black/50"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3 sm:bottom-7">
        {Array.from({ length: SLIDE_COUNT }, (_, slide) => (
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
