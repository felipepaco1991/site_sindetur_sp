import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const actions = [
  "Negociação de convenção coletiva, atenuando o impacto sobre a folha de pagamento de todas as organizações do setor",
  "Adesão ao Regime Especial de Piso Salarial (REPIS), possibilitando contratação de empregados com piso diferenciado para micro e pequenas empresas",
  "Abertura de processos no SERCCO — serviço gratuito de apoio para empresas filiadas com dificuldades no recebimento de comissões",
  "Realização de seminários de capacitação técnica e atualização profissional sobre relações trabalhistas, legais e tributação no turismo",
  "Envio de boletins informativos com informações sobre licitações, concorrências e leilões para fornecimento de serviços turísticos",
  "Disponibilização de banco de currículos para diversas funções do setor",
];

export default function ActionsSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Ações realizadas
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-3 font-display leading-tight">
              Atuação concreta em defesa do setor
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              O Sindetur-SP atua de forma consistente na defesa dos interesses das empresas de turismo, com ações que geram resultados reais para o setor.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {actions.map((action, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
                className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50 border border-border/50"
              >
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <p className="text-sm text-foreground leading-relaxed">{action}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}