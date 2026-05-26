import React from "react";
import { motion } from "framer-motion";
import { Building2, Calendar, Handshake } from "lucide-react";

const stats = [
  {
    icon: Calendar,
    number: "75",
    unit: "anos",
    label: "de existência",
    description: "Representando o turismo paulista com 75 anos de história",
  },
  {
    icon: Building2,
    number: "+13 mil",
    unit: "",
    label: "CNPJs filiados",
    description: "Empresas do setor turístico em todo o Estado de São Paulo",
  },
  {
    icon: Handshake,
    number: "27",
    unit: "anos",
    label: "de negociações amigáveis",
    description: "Convenções coletivas sem interferência da Justiça do Trabalho",
  },
];

export default function StatsSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Nossa trajetória
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-3 font-display">
            Números que refletem nossa força
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center p-8 rounded-2xl bg-secondary/50 border border-border/50 hover:shadow-lg hover:border-primary/20 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <stat.icon className="w-7 h-7 text-primary" />
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-primary font-display">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-foreground mt-1">
                {stat.unit} {stat.label}
              </div>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}