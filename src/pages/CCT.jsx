import React from "react";
import { motion } from "framer-motion";
import { FileText, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import CircularesAccordion from "@/components/circulares/CircularesAccordion";

export default function CCT() {
  return (
    <>
      <section className="py-20 lg:py-28 bg-foreground text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Relações do Trabalho
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold mt-3 font-display leading-tight">
              Convenções Coletivas de Trabalho e Circulares
            </h1>
            <p className="mt-6 text-lg text-white/70 leading-relaxed">
              Acesse as CCT&apos;s, circulares e comunicados emitidos pelo Sindetur-SP.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-14 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Acesso ao sistema</span>
            <h2 className="text-3xl font-bold text-foreground mt-2 font-display mb-4">
              Convenções Coletivas de Trabalho
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              O Sindetur-SP celebra a cada ano 12 Convenções Coletivas de Trabalho, com 11 Sindicatos e a Federação
              dos Empregados em Turismo. Por meio de negociações livres e democráticas com os representantes dos
              empregados, garantindo estabilidade e segurança jurídica ao setor há mais de duas décadas.
            </p>
            <a href="https://sindetursp.org.br/sistema/" target="_blank" rel="noopener noreferrer">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 h-12 rounded-lg gap-2 text-base">
                <FileText className="w-5 h-5" />
                Acessar Convenções Coletivas de Trabalho
                <ExternalLink className="w-4 h-4" />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Comunicados
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-3 font-display">
              Circulares
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Acesse as circulares emitidas pelo Sindetur-SP organizadas por ano.
            </p>
          </motion.div>

          <CircularesAccordion />
        </div>
      </section>
    </>
  );
}
