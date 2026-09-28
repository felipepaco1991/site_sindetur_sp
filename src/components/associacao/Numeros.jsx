import { motion } from "framer-motion";
import { useState } from "react";
import { Building2, Calendar, Handshake, Sparkles } from "lucide-react";
import { useCountUp } from "./useCountUp";
const stats = [
  { value: 75, suffix: "", label: "Anos de atuação", icon: Calendar, description: "Representando o turismo paulista" },
  { value: 9, suffix: "+", label: "Frentes de benefícios", icon: Sparkles, description: "Serviços para empresas associadas" },
  { value: 100, suffix: "%", label: "Foco no setor de turismo", icon: Building2, description: "Uma atuação dedicada à categoria" },
  { value: 1951, suffix: "", label: "Fundação do sindicato", icon: Handshake, description: "Uma história construída em conjunto" },
];
function Stat({ value, suffix, label, description, icon: Icon, start, delay }) {
  const count = useCountUp(value, start);
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group rounded-xl border border-border/50 bg-secondary/50 p-7 text-center transition-all duration-300 hover:border-primary/20 hover:bg-white hover:shadow-lg"
    >
      <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
        <Icon size={23} />
      </div>
      <p className="font-display text-4xl font-bold text-primary sm:text-5xl">
        {count}
        <span className="text-primary">{suffix}</span>
      </p>
      <p className="mt-2 text-base font-semibold text-foreground">{label}</p>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
    </motion.div>
  );
}
export default function Numeros() {
  const [start, setStart] = useState(false);
  return (
    <section
      id="numeros"
      className="relative overflow-hidden bg-white py-20 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[140px]" />
      </div>

      <motion.div
        onViewportEnter={() => setStart(true)}
        viewport={{ once: true, amount: 0.5 }}
        className="relative mx-auto grid max-w-7xl grid-cols-1 gap-5 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8"
      >
        {stats.map((s, i) => (
          <Stat key={s.label} {...s} start={start} delay={i * 0.1} />
        ))}
      </motion.div>
    </section>
  );
}
