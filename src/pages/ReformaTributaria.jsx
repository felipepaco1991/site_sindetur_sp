import React from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  BookOpen,
  Building2,
  ExternalLink,
  Landmark,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const CARTILHA_URL = "https://representa.fecomercio.com.br/orientacartilhas?utm_source=qr";

export default function ReformaTributaria() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#241b11] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(214,181,96,0.28),transparent_32%),linear-gradient(115deg,#19150f_0%,#3a2b18_58%,#705126_100%)]" />
        <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.35)_1px,transparent_1px)] [background-size:48px_48px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-200/25 bg-amber-100/10 px-4 py-1.5">
              <Landmark className="h-4 w-4 text-amber-200" />
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-50">
                Reforma Tributária
              </span>
            </div>

            <h1 className="max-w-3xl font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Informação para preparar sua empresa para as mudanças
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-amber-50/75">
              Acompanhar a implementação da Reforma Tributária será fundamental para que empresas e profissionais estejam preparados para o novo cenário de negócios brasileiro.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-12 rounded-lg bg-primary px-7 font-semibold text-white hover:bg-primary/90">
                <a href={CARTILHA_URL} target="_blank" rel="noopener noreferrer">
                  Acessar a cartilha
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <a href="#entenda" className="inline-flex h-12 items-center justify-center gap-2 px-3 text-sm font-medium text-white/75 transition-colors hover:text-white">
                Entenda a iniciativa
                <ArrowDown className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, rotate: 1 }}
            animate={{ opacity: 1, scale: 1, rotate: -1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative hidden lg:block"
            aria-hidden="true"
          >
            <div className="absolute -inset-6 rotate-3 rounded-[2rem] border border-amber-100/10 bg-amber-100/5" />
            <div className="relative mx-auto max-w-md rounded-2xl border border-white/20 bg-[#f7f1e4] p-9 shadow-2xl shadow-black/40">
              <div className="flex items-start justify-between border-b border-[#cdbd9d] pb-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#9b2c31]">Conteúdo especial</span>
                  <p className="mt-1 text-sm font-semibold text-[#5f513c]">FecomercioSP</p>
                </div>
                <div className="grid h-12 w-12 place-items-center rounded-full bg-[#9b2c31] text-white">
                  <BookOpen className="h-6 w-6" />
                </div>
              </div>
              <p className="mt-8 font-display text-5xl font-bold leading-[1.02] text-[#302719]">
                Reforma<br />Tributária
              </p>
              <p className="mt-6 max-w-xs text-base leading-relaxed text-[#71624a]">
                Orientações e materiais para apoiar empresários na compreensão das novas regras.
              </p>
              <div className="mt-8 h-1.5 w-20 rounded-full bg-[#9b2c31]" />
            </div>
          </motion.div>
        </div>
      </section>

      <section id="entenda" className="bg-white py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Contexto</span>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-foreground lg:text-4xl">
              Conhecimento para acompanhar um novo cenário
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-lg leading-relaxed text-muted-foreground"
          >
            <p>
              A Reforma Tributária traz mudanças importantes para o ambiente de negócios brasileiro e acompanhar sua implementação será fundamental para que empresas e profissionais estejam preparados para o novo cenário.
            </p>
            <p>
              Como parte de seu compromisso em levar informação, conhecimento e orientação sobre temas que impactam diretamente as empresas do setor de turismo, o Sindetur-SP disponibiliza acesso à cartilha sobre Reforma Tributária elaborada pela FecomercioSP.
            </p>
            <p>
              O material complementa os temas debatidos no workshop promovido pelo Sindetur-SP e contribui para que empresários e gestores aprofundem seus conhecimentos sobre as mudanças no sistema tributário e seus possíveis impactos sobre os negócios.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-secondary/45 py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          <motion.article
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-border bg-white p-7 shadow-sm lg:p-9"
          >
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
              <Building2 className="h-6 w-6" />
            </div>
            <h2 className="mt-6 font-display text-2xl font-bold text-foreground">Acompanhamento especializado</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              A FecomercioSP acompanha de perto o processo de implementação da Reforma Tributária e desenvolve conteúdos destinados a apoiar empresários na compreensão das novas regras e na preparação para seus efeitos.
            </p>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="rounded-2xl border border-border bg-white p-7 shadow-sm lg:p-9"
          >
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
              <BookOpen className="h-6 w-6" />
            </div>
            <h2 className="mt-6 font-display text-2xl font-bold text-foreground">Aprofunde seus conhecimentos</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Acesse o conteúdo disponibilizado pela FecomercioSP e confira as orientações e materiais sobre o tema.
            </p>
            <a href={CARTILHA_URL} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80">
              Acessar a cartilha da Reforma Tributária
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.article>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Sindetur-SP</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground lg:text-4xl">
            Informação para fortalecer as empresas do turismo
          </h2>
          <p className="mx-auto mt-5 max-w-3xl leading-relaxed text-muted-foreground">
            O Sindetur-SP seguirá acompanhando o tema e promovendo iniciativas que contribuam para manter associados, afiliados e profissionais do turismo informados e preparados para as transformações que impactam suas empresas.
          </p>
          <Button asChild size="lg" className="mt-8 h-12 rounded-lg bg-primary px-8 font-semibold text-white hover:bg-primary/90">
            <a href={CARTILHA_URL} target="_blank" rel="noopener noreferrer">
              Acessar a cartilha
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>
    </>
  );
}
