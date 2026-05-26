import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function JoinCTA() {
  return (
    <section className="py-20 lg:py-28 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white font-display">
            Faça parte do Sindetur-SP
          </h2>
          <p className="mt-4 text-lg text-white/80 max-w-xl mx-auto">
            Fortaleça sua empresa e o setor turístico de São Paulo.
          </p>
          <Link to="/associe-se">
            <Button
              size="lg"
              className="mt-8 bg-white text-primary hover:bg-white/90 font-semibold px-8 h-12 rounded-lg group"
            >
              Associe-se agora
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}