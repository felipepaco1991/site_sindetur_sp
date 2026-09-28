import { motion } from "framer-motion";
import { contribuicoes2026 } from "@/data/contribuicoes";
import { Check, ArrowRight } from "lucide-react";
const included = [
  "Orientação jurídica especializada",
  "Convênios exclusivos para associados",
  "Coworking Espaço Sindetur SP",
  "Participação em convenções coletivas",
  "Palestras, seminários e capacitações",
  "Direito a voto em assembleias",
];
export default function Associese() {
  const associativa = contribuicoes2026.associativa;
  return (
    <section
      id="associese"
      className="relative overflow-hidden bg-white py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold uppercase tracking-widest text-primary"
          >
            Associe-se
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-balance text-3xl font-bold text-foreground sm:text-4xl"
          >
            Faça parte dos 75 anos de história do turismo paulista
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-16 overflow-hidden rounded-3xl bg-foreground shadow-2xl"
        >
          <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-lg bg-primary/30 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-primary/15 blur-[100px]" />

          <div className="relative grid gap-10 p-8 sm:p-12 lg:grid-cols-[1.3fr_1fr] lg:items-center">
            <div>
              <h3 className="text-xl font-bold text-white">
                O que está incluso
              </h3>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {included.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-white/80"
                  >
                    <Check
                      size={18}
                      className="mt-0.5 shrink-0 text-primary"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-white/5 p-7 text-center backdrop-blur-sm ring-1 ring-white/10">
              <p className="text-sm font-semibold uppercase tracking-wide text-white/80">
                {associativa.nome} {associativa.ano}
              </p>
              <p className="mt-3 text-4xl font-bold text-white">
                {associativa.aVista}
              </p>
              <p className="mt-1 text-sm text-white/80">à vista</p>
              <p className="mt-2 text-sm text-white/90">
                ou até {associativa.parcelas} no cartão
              </p>

              <p className="mt-2 text-sm text-white/80">
                Total parcelado: {associativa.total}.
              </p>
              <p className="mt-3 text-xs leading-relaxed text-white/70">
                Vencimento da anuidade: {associativa.vencimento}. Para adesão após essa data, consulte as condições com a equipe.
              </p>
              <a href={associativa.circular} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-sm text-white underline underline-offset-4 hover:text-white/80">
                Consultar Circular 003/2026 (PDF)
                <span className="sr-only"> (abre em nova aba)</span>
              </a>

              <a
                href="#solicitar-associacao"
                className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 font-bold text-white shadow-lg shadow-primary/30 transition-transform hover:bg-primary/90"
              >
                Quero me associar
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
              <p className="mt-4 text-xs text-white/70">
                Empresas de turismo formalmente constituídas, registradas no
                Ministério do Turismo.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
