import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

export default function LegalCTA() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://media.base44.com/images/public/6a0334e8fc336e4a6c562d3b/6bc59d540_generated_7ccef286.png"
          alt="Consultoria jurídica"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/85" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white font-display">
            Possui dúvidas jurídicas?
          </h2>
          <p className="mt-4 text-lg text-white/70 leading-relaxed">
            Conte com orientação consultiva para assuntos relacionados à atividade empresarial no turismo.
          </p>
          <Link to="/contato">
            <Button
              size="lg"
              className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 h-12 rounded-lg group"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Falar com o Sindetur-SP
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}