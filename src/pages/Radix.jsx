import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ArrowRight,
  BadgePercent,
  BrainCircuit,
  BriefcaseBusiness,
  Check,
  Clock3,
  ExternalLink,
  GraduationCap,
  Landmark,
  Map,
  Plane,
  Sparkles,
} from "lucide-react";

const featuredCourses = [
  { title: "Formação em Travel Designer", duration: "60h", icon: GraduationCap },
  { title: "Aperfeiçoamento em Travel Designer", duration: "60h", icon: Sparkles },
  { title: "Super Concierge: London", icon: Landmark },
  { title: "Super Concierge: New York", icon: Map },
  { title: "Bootcamp Travel Design de Luxo", icon: Plane },
];

const additionalTopics = [
  "Safáris",
  "Japão",
  "Ski",
  "Gestão de negócios",
  "Encantamento de clientes",
  "Inteligência artificial para agências de luxo",
];

const reveal = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
};

export default function Radix() {
  return (
    <>
      <section className="relative overflow-hidden bg-foreground py-20 text-white lg:py-28">
        <div className="absolute -right-24 -top-28 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-28 left-1/3 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <Link
              to="/beneficios"
              className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-white/60 transition-colors hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar para Convênios
            </Link>
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
                <GraduationCap className="h-5 w-5" />
              </span>
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Parceria Sindetur-SP + Radix
              </span>
            </div>
            <h1 className="max-w-3xl font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Sindetur-SP divulga cursos da Radix para profissionais do turismo
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/70 lg:text-xl">
              Uma programação voltada ao desenvolvimento de competências estratégicas para o mercado de turismo.
            </p>
            <a href="https://programaradix.com" target="_blank" rel="noopener noreferrer">
              <Button className="mt-8 h-12 gap-2 rounded-lg bg-primary px-7 font-semibold text-primary-foreground hover:bg-primary/90">
                Ver programação completa
                <ExternalLink className="h-4 w-4" />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.25fr_0.75fr] lg:px-8">
          <motion.div {...reveal} transition={{ duration: 0.55 }}>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Sobre a iniciativa</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground lg:text-4xl">
              Formação para um mercado em constante evolução
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground lg:text-lg">
              <p>
                Como parte da parceria entre o Sindetur-SP e a Radix, disponibilizamos aos profissionais do setor uma programação de cursos e formações voltados ao desenvolvimento de competências estratégicas para o mercado de turismo.
              </p>
              <p>
                Reconhecida pela formação de Travel Designers e especialistas em turismo de alto padrão, a Radix reúne cursos de curta duração, aperfeiçoamentos e formações completas. A programação aborda gestão de negócios, destinos internacionais, atendimento consultivo, inteligência artificial e tendências do mercado de viagens.
              </p>
            </div>
          </motion.div>

          <motion.aside
            {...reveal}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="rounded-2xl border border-primary/15 bg-primary/[0.04] p-7 lg:p-8"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <BadgePercent className="h-6 w-6" />
            </div>
            <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-primary">Benefício exclusivo</p>
            <h2 className="mt-2 font-display text-2xl font-bold text-foreground">Condições para associados</h2>
            <div className="mt-6 space-y-4">
              <div className="flex gap-3">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <p className="text-muted-foreground"><strong className="text-foreground">15% de desconto</strong> para pagamentos via PIX</p>
              </div>
              <div className="flex gap-3">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <p className="text-muted-foreground">Parcelamento em até <strong className="text-foreground">4 vezes sem juros</strong></p>
              </div>
            </div>
          </motion.aside>
        </div>
      </section>

      <section className="bg-secondary/40 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div {...reveal} className="max-w-2xl">
            <div className="flex items-center gap-2 text-primary">
              <Clock3 className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-wider">Primeiras turmas</span>
            </div>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground lg:text-4xl">Cursos em destaque</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">As primeiras turmas têm início já na próxima semana.</p>
          </motion.div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {featuredCourses.map((course, index) => {
              const Icon = course.icon;
              return (
                <motion.article
                  key={course.title}
                  {...reveal}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className="group flex min-h-44 flex-col justify-between rounded-2xl border border-border bg-white p-6 transition-all hover:-translate-y-1 hover:border-primary/25 hover:shadow-lg"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                    {course.duration && (
                      <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-muted-foreground">{course.duration}</span>
                    )}
                  </div>
                  <h3 className="mt-6 text-lg font-bold leading-snug text-foreground">{course.title}</h3>
                </motion.article>
              );
            })}
          </div>

          <motion.div {...reveal} className="mt-10 rounded-2xl border border-border bg-white p-6 lg:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <div className="flex items-center gap-2 text-primary">
                  <BrainCircuit className="h-5 w-5" />
                  <h3 className="font-semibold">E muito mais</h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  A programação também contempla temas essenciais para ampliar repertório, atendimento e competitividade.
                </p>
              </div>
              <div className="flex max-w-2xl flex-wrap gap-2">
                {additionalTopics.map((topic) => (
                  <span key={topic} className="rounded-full border border-border bg-secondary/50 px-3.5 py-2 text-sm font-medium text-foreground">
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <motion.div {...reveal} className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <BriefcaseBusiness className="h-6 w-6" />
          </span>
          <h2 className="mt-5 font-display text-3xl font-bold text-foreground lg:text-4xl">Qualificação que fortalece o turismo</h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            O Sindetur-SP incentiva a qualificação contínua dos profissionais do turismo e acredita que iniciativas como essa fortalecem o desenvolvimento do setor, ampliando conhecimento, competitividade e oportunidades de negócios.
          </p>
        </motion.div>
      </section>

      <section className="bg-primary py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-white lg:text-4xl">Confira a programação completa e faça sua inscrição</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/80">Conheça os cursos, datas e condições disponíveis no Programa Radix.</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="https://programaradix.com" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="h-12 min-w-56 gap-2 bg-white px-7 font-semibold text-primary hover:bg-white/90">
                Programa Radix
                <ArrowRight className="h-4 w-4" />
              </Button>
            </a>
            <a
              href="https://www.panrotas.com.br/agencias-de-viagens/treinamento/2026/08/radix-abre-inscricoes-para-tres-cursos-voltados-a-travel-designers-em-agosto_230789.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="outline" className="h-12 min-w-56 gap-2 border-white/40 bg-transparent px-7 font-semibold text-white hover:bg-white/10 hover:text-white">
                Ler matéria da PANROTAS
                <ExternalLink className="h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
