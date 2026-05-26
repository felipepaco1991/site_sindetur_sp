import React from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export default function TurismoNumeros() {
  return (
    <section className="py-20 lg:py-28 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-border/50 overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 lg:p-12 flex flex-col justify-center"
            >
              <img
                src="https://media.base44.com/images/public/user_692dcbff3f71294a0de415ce/6fa7844da_turismo-em-numeros-300x212.png"
                alt="Turismo em Números"
                className="h-16 w-auto object-contain mb-6"
              />
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground font-display">
                Turismo em Números
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Acompanhe dados, análises e informações relevantes para o mercado de turismo. Agora em formato digital.
              </p>
              <a href="https://turismosemnumeros.com.br" target="_blank" rel="noopener noreferrer">
                <Button className="mt-6 bg-primary hover:bg-primary/90 text-primary-foreground group w-fit">
                  Acessar Turismo em Números
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative min-h-[300px] lg:min-h-0"
            >
              <img
                src="https://media.base44.com/images/public/6a0334e8fc336e4a6c562d3b/c8caf324c_generated_f4a3f324.png"
                alt="São Paulo panorâmica"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white/10" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}