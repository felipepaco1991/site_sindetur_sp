import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function WhyJoinSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Por que se associar?
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-3 font-display leading-tight">
              Mais representatividade, segurança e apoio para sua empresa
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Ao se associar ao Sindetur-SP, sua empresa passa a contar com suporte institucional, acesso a informações estratégicas, orientação e benefícios voltados ao fortalecimento do setor turístico.
            </p>
            <Link to="/beneficios">
              <Button className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 h-12 rounded-lg group">
                Conheça os benefícios
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}