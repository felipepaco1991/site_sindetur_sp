import React from "react";
import { motion } from "framer-motion";

const partners = [
  { name: "Share Seguros", logo: "https://media.base44.com/images/public/user_692dcbff3f71294a0de415ce/4b3881256_Share-Seguros-150x150.webp" },
  { name: "Monde", logo: "https://media.base44.com/images/public/user_692dcbff3f71294a0de415ce/3ec9c0114_Monde-150x150.webp" },
  { name: "Celer RH", logo: "https://media.base44.com/images/public/user_692dcbff3f71294a0de415ce/949969502_CellerRh-150x150.webp" },
  { name: "Qualicorp", logo: "https://media.base44.com/images/public/user_692dcbff3f71294a0de415ce/80a614373_Captura-de-tela-de-2023-06-02-18-21-44-e1685741735519-150x150.webp" },
  { name: "Sesc Senac", logo: "https://media.base44.com/images/public/user_692dcbff3f71294a0de415ce/f8f28a950_Untitled-1-150x150.webp" },
  { name: "Mackenzie", logo: "https://media.base44.com/images/public/user_692dcbff3f71294a0de415ce/3b226d791_Mackenzie-150x150.webp" },
  { name: "Radix", logo: "/assets/radix.jpg" },
];

export default function PartnersSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Convênios
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-3 font-display">
            Nossos parceiros e convênios
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {partners.map((partner, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="bg-secondary/30 rounded-xl p-6 flex items-center justify-center border border-border/50 hover:border-primary/20 hover:shadow-md transition-all duration-300 aspect-square"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-w-[100px] max-h-[80px] object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
