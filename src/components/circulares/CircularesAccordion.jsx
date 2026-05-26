import React, { useState } from "react";
import { FileText, ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";
import { circulares } from "@/data/circulares";

export default function CircularesAccordion() {
  const [openAno, setOpenAno] = useState(circulares[0]?.ano ?? null);

  return (
    <div className="max-w-3xl mx-auto space-y-3">
      {circulares.map((grupo, i) => (
        <motion.div
          key={grupo.ano}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05 }}
          className="bg-white rounded-xl border border-border overflow-hidden"
        >
          <button
            onClick={() => setOpenAno(openAno === grupo.ano ? null : grupo.ano)}
            className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-secondary/30 transition-colors"
          >
            <span className="font-bold text-foreground text-lg">{grupo.ano}</span>
            {openAno === grupo.ano ? (
              <ChevronUp className="w-5 h-5 text-primary" />
            ) : (
              <ChevronDown className="w-5 h-5 text-muted-foreground" />
            )}
          </button>

          {openAno === grupo.ano && (
            <div className="border-t border-border divide-y divide-border/50">
              {grupo.items.map((item) => (
                <div
                  key={item.numero}
                  className="flex items-start gap-3 px-6 py-4 hover:bg-secondary/20 transition-colors"
                >
                  <FileText className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <div>
                    <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                      {item.numero}
                    </span>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-0.5 block text-sm text-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
                    >
                      {item.titulo}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}
