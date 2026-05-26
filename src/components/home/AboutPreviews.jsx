import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutPreview() {
  return (
    <section className="py-20 lg:py-28 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src="https://sindetursp.org.br/wp-content/uploads/2026/05/716f4fde9_generated_be87a3fb.png"
                alt="Reunião institucional Sindetur-SP"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Quem somos
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-3 font-display leading-tight">
              Uma entidade que entende a realidade do setor
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
              O Sindicato das Empresas de Turismo no Estado de São Paulo é formado por empresários e tem a missão de representar e defender os interesses da categoria, contribuir para a profissionalização do setor, apoiar empresas associadas e fortalecer o desenvolvimento do turismo.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Com 75 anos de atuação, o Sindetur-SP é o representante legal da categoria econômica das empresas de turismo do Estado de São Paulo, composto por mais de 13 mil CNPJs filiados em sua base territorial.
            </p>
            <Link to="/sobre">
              <Button
                variant="outline"
                className="mt-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground group"
              >
                Saiba mais sobre nós
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
