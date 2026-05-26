import React from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, BarChart3, TrendingUp, Globe } from "lucide-react";
import { motion } from "framer-motion";

export default function TurismoEmNumeros() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-foreground text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Turismo em Números
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold mt-3 font-display leading-tight">
              Dados e análises para o mercado de turismo
            </h1>
            <p className="mt-6 text-lg text-white/70 leading-relaxed">
              Acompanhe dados, análises e informações relevantes para o mercado de turismo. Agora em formato digital.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://media.base44.com/images/public/user_692dcbff3f71294a0de415ce/6fa7844da_turismo-em-numeros-300x212.png"
                alt="Turismo em Números"
                className="h-20 w-auto object-contain mb-8"
              />
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground font-display">
                Informação estratégica para decisões inteligentes
              </h2>
              <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
                O Turismo em Números é uma plataforma de dados e análises sobre o setor turístico brasileiro. Com informações atualizadas periodicamente, é uma ferramenta essencial para gestores e empresários do turismo.
              </p>
              <a href="https://turismosemnumeros.com.br" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 h-12 rounded-lg group">
                  Acessar Turismo em Números
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 gap-6"
            >
              {[
                { icon: BarChart3, title: "Dados do setor", desc: "Estatísticas atualizadas sobre o desempenho do turismo no Estado de São Paulo e no Brasil." },
                { icon: TrendingUp, title: "Tendências", desc: "Análises de tendências e indicadores relevantes para o planejamento estratégico das empresas." },
                { icon: Globe, title: "Mercado global", desc: "Informações sobre o cenário internacional do turismo e seus impactos no mercado local." },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-6 rounded-xl bg-secondary/50 border border-border/50"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}