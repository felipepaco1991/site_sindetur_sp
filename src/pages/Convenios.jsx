import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, ExternalLink } from "lucide-react";
import CircularesSection from "@/components/home/CircularesSection";

const partners = [
  { name: "Share Seguros", logo: "https://media.base44.com/images/public/user_692dcbff3f71294a0de415ce/4b3881256_Share-Seguros-150x150.webp", category: "Seguros" },
  { name: "Monde", logo: "https://media.base44.com/images/public/user_692dcbff3f71294a0de415ce/3ec9c0114_Monde-150x150.webp", category: "Tecnologia" },
  { name: "Celer RH", logo: "https://media.base44.com/images/public/user_692dcbff3f71294a0de415ce/949969502_CellerRh-150x150.webp", category: "RH" },
  { name: "Qualicorp", logo: "https://media.base44.com/images/public/user_692dcbff3f71294a0de415ce/80a614373_Captura-de-tela-de-2023-06-02-18-21-44-e1685741735519-150x150.webp", category: "Saúde" },
  { name: "Sesc Senac", logo: "https://media.base44.com/images/public/user_692dcbff3f71294a0de415ce/f8f28a950_Untitled-1-150x150.webp", category: "Educação" },
  { name: "Mackenzie", logo: "https://media.base44.com/images/public/user_692dcbff3f71294a0de415ce/3b226d791_Mackenzie-150x150.webp", category: "Educação" },
];

export default function Convenios() {
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
              Convênios
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold mt-3 font-display leading-tight">
              Parceiros que agregam valor ao seu negócio
            </h1>
            <p className="mt-6 text-lg text-white/70 leading-relaxed">
              O Sindetur-SP mantém convênios com diversas empresas e instituições, oferecendo condições exclusivas para seus associados.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {partners.map((partner, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-white rounded-xl p-8 border border-border hover:shadow-lg hover:border-primary/20 transition-all duration-300 flex flex-col items-center text-center group"
              >
                <div className="w-24 h-24 flex items-center justify-center mb-5">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <h3 className="font-semibold text-foreground">{partner.name}</h3>
                <span className="text-xs text-primary font-medium mt-1 bg-primary/5 px-3 py-1 rounded-full">
                  {partner.category}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Convenções Coletivas */}
      <section className="py-12 bg-white border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <a href="https://sindetursp.org.br/sistema/" target="_blank" rel="noopener noreferrer">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 h-12 rounded-lg gap-2 text-base">
              <FileText className="w-5 h-5" />
              Convenções Coletivas de Trabalho
              <ExternalLink className="w-4 h-4" />
            </Button>
          </a>
        </div>
      </section>

      {/* Circulares */}
      <CircularesSection />

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground font-display">
            Quer ter acesso a condições exclusivas?
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            Associe-se ao Sindetur-SP e aproveite todos os convênios disponíveis.
          </p>
          <Link to="/associe-se">
            <Button className="mt-6 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 h-12 rounded-lg group">
              Associe-se agora
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
