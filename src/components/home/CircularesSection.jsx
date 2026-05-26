import React from "react";
import { motion } from "framer-motion";
import CircularesAccordion from "@/components/circulares/CircularesAccordion";

export default function CircularesSection() {
  return (
    <section className="py-20 lg:py-28 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Comunicados
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-3 font-display">
            Circulares
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Acesse as circulares emitidas pelo Sindetur-SP organizadas por ano.
          </p>
        </motion.div>

        <CircularesAccordion />
      </div>
    </section>
  );
}
