import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BadgePercent,
  BriefcaseBusiness,
  CalendarDays,
  ExternalLink,
  HeartHandshake,
  Lightbulb,
  Mail,
  MapPin,
  Network,
  Sparkles,
  UsersRound,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const MEETING_URL = "https://www.festurisgramado.com/meeting";
const FESTURIS_ART_URL = "https://cdn.prod.website-files.com/602bd3abd7ec5127354e0f26/6915dcd5947ae6043fe620fd_ac5195a24beb683541c59e22ab0bfc03_og-2026.jpg";
const DISCOUNT_EMAIL_URL = "mailto:atendimento@sindetursp.org.br?subject=Cupom%20de%20desconto%20-%20Meeting%20Festuris%202026";

const experiences = [
  {
    icon: BriefcaseBusiness,
    title: "Negócios",
    description: "Um ambiente preparado para conectar empresas, destinos, marcas e profissionais do turismo.",
  },
  {
    icon: Sparkles,
    title: "Turismo de luxo",
    description: "Experiências e soluções voltadas a um dos segmentos mais estratégicos do mercado.",
  },
  {
    icon: HeartHandshake,
    title: "Diversidade e casamentos",
    description: "Espaços especializados para novos públicos, tendências e oportunidades de atuação.",
  },
  {
    icon: Lightbulb,
    title: "Inovação",
    description: "Conteúdos e conexões para acompanhar as transformações que estão moldando o setor.",
  },
];

const reveal = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
};

export default function FesturisGramado() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#090909] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_25%,rgba(255,62,25,0.23),transparent_31%),radial-gradient(circle_at_12%_85%,rgba(175,10,0,0.16),transparent_34%)]" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.2)_1px,transparent_1px)] [background-size:52px_52px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="min-w-0"
          >
            <Link
              to="/beneficios"
              className="mb-8 flex w-fit items-center gap-2 text-sm font-medium text-white/60 transition-colors hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar para Convênios
            </Link>

            <div className="mb-5 flex w-fit max-w-full items-center gap-2 rounded-full border border-[#ff4b27]/30 bg-[#ff4b27]/10 px-4 py-1.5">
              <HeartHandshake className="h-4 w-4 text-[#ff5b37]" />
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#ffb8a9]">
                Entidade apoiadora
              </span>
            </div>

            <h1 className="max-w-3xl font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Sindetur-SP é uma das entidades apoiadoras do Festuris Gramado 2026
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
              De 12 a 15 de novembro, profissionais, empresas, destinos e marcas do turismo nacional e internacional se encontram em Gramado (RS).
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-12 rounded-lg bg-primary px-7 font-semibold text-white hover:bg-primary/90">
                <a href={MEETING_URL} target="_blank" rel="noopener noreferrer">
                  Garanta sua participação
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <a href="#beneficio" className="inline-flex h-12 items-center justify-center gap-2 px-3 text-sm font-medium text-white/70 transition-colors hover:text-white">
                Ver benefício para associados
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, rotate: 1 }}
            animate={{ opacity: 1, scale: 1, rotate: -1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative hidden lg:block"
          >
            <div className="absolute -inset-5 rotate-3 rounded-[2rem] border border-[#ff4b27]/20 bg-[#ff4b27]/5" />
            <img
              src={FESTURIS_ART_URL}
              alt="Festuris Gramado 2026, de 12 a 15 de novembro"
              className="relative w-full rounded-2xl border border-white/15 shadow-2xl shadow-black/50"
            />
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.18fr_0.82fr] lg:px-8">
          <motion.div {...reveal} transition={{ duration: 0.55 }}>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Festuris Gramado 2026</span>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-foreground lg:text-4xl">
              Conexões que movimentam o turismo
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground lg:text-lg">
              <p>
                O Sindetur-SP é uma das entidades apoiadoras do Festuris Gramado 2026, que acontece de 12 a 15 de novembro, em Gramado (RS), reunindo profissionais, empresas, destinos e marcas do turismo nacional e internacional.
              </p>
              <p>
                Reconhecido como um dos grandes eventos de negócios turísticos das Américas, o Festuris proporciona um ambiente voltado à geração de negócios, relacionamento, troca de conhecimento e desenvolvimento de novas oportunidades para o setor.
              </p>
              <p>
                Durante quatro dias, profissionais do turismo terão a oportunidade de se conectar com destinos, marcas e empresas, acompanhar tendências do mercado e ampliar sua rede de relacionamentos.
              </p>
            </div>
          </motion.div>

          <motion.aside
            {...reveal}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="self-start overflow-hidden rounded-2xl border border-border bg-secondary/35"
          >
            <div className="border-b border-border bg-[#111] px-7 py-6 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#ff6847]">Serviço</p>
              <h2 className="mt-2 font-display text-2xl font-bold">Festuris Gramado 2026</h2>
            </div>
            <div className="space-y-5 p-7">
              <div className="flex gap-3">
                <CalendarDays className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="font-semibold text-foreground">12 a 15 de novembro de 2026</p>
                  <p className="mt-0.5 text-sm text-muted-foreground">Meeting: 13 e 14 de novembro</p>
                </div>
              </div>
              <div className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="font-semibold text-foreground">Gramado, Rio Grande do Sul</p>
                  <p className="mt-0.5 text-sm text-muted-foreground">Serra Park</p>
                </div>
              </div>
              <Button asChild className="h-11 w-full gap-2 rounded-lg bg-primary font-semibold text-white hover:bg-primary/90">
                <a href={MEETING_URL} target="_blank" rel="noopener noreferrer">
                  Garanta sua participação
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </motion.aside>
        </div>
      </section>

      <section className="bg-secondary/40 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div {...reveal} className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Um ambiente para quem faz o turismo</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground lg:text-4xl">
              Segmentos, experiências e oportunidades
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Além da feira de negócios, o Festuris conta com diferentes espaços e experiências voltados a segmentos estratégicos do mercado.
            </p>
          </motion.div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {experiences.map((experience, index) => {
              const Icon = experience.icon;
              return (
                <motion.article
                  key={experience.title}
                  {...reveal}
                  transition={{ duration: 0.42, delay: index * 0.06 }}
                  className="rounded-2xl border border-border bg-white p-6 transition-all hover:-translate-y-1 hover:border-primary/25 hover:shadow-lg"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-foreground">{experience.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{experience.description}</p>
                </motion.article>
              );
            })}
          </div>

          <motion.div
            {...reveal}
            className="mt-8 grid items-center gap-8 overflow-hidden rounded-2xl bg-[#111] p-7 text-white lg:grid-cols-[0.72fr_1.28fr] lg:p-10"
          >
            <div className="flex items-center gap-4">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#ff4b27]/15 text-[#ff6847]">
                <Network className="h-7 w-7" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#ff6847]">13 e 14 de novembro</p>
                <h3 className="mt-1 font-display text-2xl font-bold">Meeting Festuris</h3>
              </div>
            </div>
            <p className="leading-relaxed text-white/70">
              Espaço dedicado a conteúdo, tendências, insights e debates sobre temas que estão transformando o turismo. Uma oportunidade para ampliar repertório e acompanhar os novos caminhos do setor.
            </p>
          </motion.div>
        </div>
      </section>

      <section id="beneficio" className="bg-white py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:px-8">
          <motion.div
            {...reveal}
            className="relative overflow-hidden rounded-2xl bg-primary p-8 text-white shadow-xl shadow-primary/15 lg:p-10"
          >
            <div className="absolute -right-14 -top-14 h-44 w-44 rounded-full border border-white/15" />
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full border border-white/15" />
            <BadgePercent className="relative h-10 w-10" />
            <p className="relative mt-7 text-sm font-semibold uppercase tracking-[0.18em] text-white/70">Associados Sindetur-SP</p>
            <h2 className="relative mt-2 font-display text-3xl font-bold">Desconto exclusivo</h2>
            <p className="relative mt-4 leading-relaxed text-white/80">
              Condição especial para aquisição do ingresso do Meeting Festuris 2026.
            </p>
          </motion.div>

          <motion.div {...reveal} transition={{ duration: 0.55, delay: 0.08 }}>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Benefício exclusivo para associados</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground lg:text-4xl">
              Solicite seu cupom de desconto
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Como parte da parceria, associados do Sindetur-SP contam com desconto exclusivo para aquisição do ingresso do Meeting Festuris 2026. Para utilizar o benefício, entre em contato conosco por e-mail e iremos encaminhar o cupom de desconto.
            </p>
            <a
              href={DISCOUNT_EMAIL_URL}
              className="mt-7 inline-flex items-center gap-3 rounded-xl border border-primary/20 bg-primary/[0.04] px-5 py-4 font-semibold text-primary transition-colors hover:bg-primary/10"
            >
              <Mail className="h-5 w-5 shrink-0" />
              atendimento@sindetursp.org.br
            </a>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#0b0b0b] py-16 text-white lg:py-20">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <UsersRound className="mx-auto h-10 w-10 text-[#ff5b37]" />
          <h2 className="mt-5 font-display text-3xl font-bold lg:text-4xl">Conecte-se ao futuro do turismo</h2>
          <p className="mx-auto mt-5 max-w-3xl leading-relaxed text-white/70">
            O Sindetur-SP segue trabalhando para ampliar o acesso de seus associados a eventos, conteúdos, oportunidades de negócios e iniciativas que contribuam para o desenvolvimento das empresas e dos profissionais do turismo.
          </p>
          <Button asChild size="lg" className="mt-8 h-12 rounded-lg bg-primary px-8 font-semibold text-white hover:bg-primary/90">
            <a href={MEETING_URL} target="_blank" rel="noopener noreferrer">
              Garanta sua participação
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>
    </>
  );
}
