import { motion } from "framer-motion";
import { useState } from "react";
import { useCountUp } from "./useCountUp";
const stats = [
  { value: 75, suffix: "", label: "Anos de atuação" },
  { value: 9, suffix: "+", label: "Frentes de benefícios" },
  { value: 100, suffix: "%", label: "Foco no setor de turismo" },
  { value: 1951, suffix: "", label: "Fundação do sindicato" },
];
function Stat({ value, suffix, label, start, delay }) {
  const count = useCountUp(value, start);
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="text-center"
    >
      <p className="text-4xl font-extrabold text-white sm:text-5xl">
        {count}
        <span className="text-brand-red">{suffix}</span>
      </p>
      <p className="mt-2 text-sm font-medium text-white/60">{label}</p>
    </motion.div>
  );
}
export default function Numeros() {
  const [start, setStart] = useState(false);
  return (
    <section
      id="numeros"
      className="relative overflow-hidden bg-brand-ink py-24"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-red/10 blur-[140px]" />
      </div>

      <motion.div
        onViewportEnter={() => setStart(true)}
        viewport={{ once: true, amount: 0.5 }}
        className="relative mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 sm:grid-cols-4"
      >
        {stats.map((s, i) => (
          <Stat key={s.label} {...s} start={start} delay={i * 0.1} />
        ))}
      </motion.div>
    </section>
  );
}
