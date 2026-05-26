import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://media.base44.com/images/public/6a0334e8fc336e4a6c562d3b/d8be717db_generated_56c1963c.png"
          alt="Turismo corporativo em São Paulo"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-white/90 text-xs font-medium tracking-wide uppercase">
                Sindicato Patronal das Empresas de Turismo
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight font-display">
              Juntos fortalecemos as empresas de turismo do Estado de São Paulo
            </h1>

            <p className="mt-6 text-lg text-white/75 leading-relaxed max-w-xl">
              O Sindetur-SP representa, defende e fortalece empresas do turismo, contribuindo para a profissionalização do setor e para o crescimento dos negócios.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Link to="/associe-se">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 h-12 rounded-lg group"
                >
                  Quero me associar
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/sobre">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 rounded-lg border-white/30 bg-transparent font-medium text-white hover:bg-white hover:text-foreground"
                >
                  Conheça nossa atuação
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
