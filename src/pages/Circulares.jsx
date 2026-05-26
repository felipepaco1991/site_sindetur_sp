import React from "react";
import { motion } from "framer-motion";
import CircularesAccordion from "@/components/circulares/CircularesAccordion";

export default function Circulares() {
  return (
    <>
      <section className="py-20 lg:py-28 bg-foreground text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Comunicados
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold mt-3 font-display leading-tight">
              Circulares
            </h1>
            <p className="mt-6 text-lg text-white/70 leading-relaxed">
              Acesse as circulares emitidas pelo Sindetur-SP organizadas por ano.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CircularesAccordion />
        </div>
      </section>
    </>
  );
}
