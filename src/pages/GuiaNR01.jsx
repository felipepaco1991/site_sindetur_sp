import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  BrainCircuit,
  CheckCircle2,
  ClipboardCheck,
  Download,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const guideTopics = [
  {
    icon: BookOpen,
    title: "NR-01 sem jargões",
    description: "Os principais conceitos da norma traduzidos para uma linguagem direta, acessível e conectada à rotina das agências.",
  },
  {
    icon: BrainCircuit,
    title: "Riscos psicossociais",
    description: "Orientações para reconhecer fatores relacionados à organização do trabalho, à sobrecarga, aos papéis e ao suporte às equipes.",
  },
  {
    icon: Users,
    title: "Liderança preparada",
    description: "Práticas de comunicação, escuta, feedback e desenvolvimento que ajudam a construir ambientes de trabalho mais saudáveis.",
  },
  {
    icon: ClipboardCheck,
    title: "Próximos passos",
    description: "Um checklist executivo para revisar processos, priorizar achados, criar um plano de ação e registrar cada etapa.",
  },
];

const actionSteps = [
  "Alinhar as rotinas de Saúde e Segurança do Trabalho com a empresa ou consultoria responsável.",
  "Revisar o PGR e avaliar como a AEP pode apoiar o diagnóstico da organização.",
  "Mapear os setores e priorizar os achados identificados nas avaliações.",
  "Sensibilizar lideranças, equipes, CIPA ou representantes sobre o tema.",
  "Criar e executar um plano de ação adequado à realidade da empresa.",
  "Registrar os passos realizados e revisar o processo após a execução.",
];

export default function GuiaNR01() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#061d43] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_25%,rgba(31,118,211,0.5),transparent_34%),linear-gradient(115deg,#04142f_0%,#082c61_62%,#0b5fb4_100%)]" />
        <div className="absolute -right-24 top-1/2 h-[34rem] w-[34rem] -translate-y-1/2 rounded-full border border-white/10" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-300/25 bg-sky-300/10 px-4 py-1.5">
              <ShieldCheck className="h-4 w-4 text-sky-300" />
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-sky-100">
                Material gratuito do Sindetur-SP
              </span>
            </div>

            <h1 className="max-w-3xl font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              A nova NR-01, sem jargões
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-blue-50/80">
              Um guia prático gerencial sobre riscos psicossociais e a nova organização do trabalho, desenvolvido pela Abracorp com o apoio do Sindetur-SP para ajudar empresas de turismo a se prepararem com clareza e responsabilidade.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-12 rounded-lg bg-primary px-7 font-semibold text-white hover:bg-primary/90">
                <a href="/materiais/guia-nr01-sindetur-sp.pdf" download="Guia-NR01-Sindetur-SP.pdf">
                  <Download className="mr-1 h-4 w-4" />
                  Baixar guia gratuito
                </a>
              </Button>
              <a href="#conteudo" className="inline-flex h-12 items-center justify-center gap-2 px-3 text-sm font-medium text-white/80 transition-colors hover:text-white">
                Ver o que você encontrará
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, rotate: 1 }}
            animate={{ opacity: 1, scale: 1, rotate: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative hidden lg:block"
          >
            <div className="absolute -inset-5 rotate-3 rounded-2xl bg-sky-300/10 blur-sm" />
            <img
              src="/materiais/guia-nr01-capa.png"
              alt="Capa do guia A nova NR-01 sem jargões"
              className="relative w-full rounded-xl border border-white/25 shadow-2xl shadow-black/40"
            />
          </motion.div>
        </div>
      </section>

      <section id="conteudo" className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Conteúdo do guia</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground lg:text-4xl">
              Informação para transformar exigências em boas práticas
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Em 17 páginas, o material reúne conceitos, exemplos do que fazer e do que evitar, orientações para gestores e um roteiro objetivo de implementação.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {guideTopics.map((topic, index) => {
              const Icon = topic.icon;
              return (
                <motion.article
                  key={topic.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="rounded-2xl border border-border bg-white p-6 shadow-sm"
                >
                  <div className="mb-5 grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{topic.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{topic.description}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Resumo executivo</span>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-foreground lg:text-4xl">
              Da compreensão à ação
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              O guia ajuda a organizar uma jornada de preparação contínua, envolvendo especialistas, gestores e representantes dos trabalhadores.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {actionSteps.map((step, index) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="flex gap-3 rounded-xl border border-border bg-white p-5"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <p className="text-sm leading-relaxed text-foreground/80">{step}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Conhecimento que fortalece o setor</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground lg:text-4xl">
            O Sindetur-SP aproxima sua empresa das informações que importam
          </h2>
          <p className="mx-auto mt-5 max-w-3xl leading-relaxed text-muted-foreground">
            Ao disponibilizar este material, o Sindetur-SP reforça seu compromisso com a profissionalização das empresas de turismo e com a construção de ambientes de trabalho mais seguros, saudáveis e sustentáveis.
          </p>
          <Button asChild size="lg" className="mt-8 h-12 rounded-lg bg-primary px-8 font-semibold text-white hover:bg-primary/90">
            <a href="/materiais/guia-nr01-sindetur-sp.pdf" download="Guia-NR01-Sindetur-SP.pdf">
              <Download className="mr-1 h-4 w-4" />
              Fazer download do guia
            </a>
          </Button>
        </div>
      </section>
    </>
  );
}
