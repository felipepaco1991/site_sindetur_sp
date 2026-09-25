import { motion } from "framer-motion";
import { ArrowRight, Plane, ShieldCheck, Sparkles } from "lucide-react";
const saoPaulo = "/images/associacao/sao-paulo.jpg";
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
};
export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-brand-ink pt-20 pb-24 sm:pt-24 sm:pb-32"
    >
      {/* animated background */}
      <div className="pointer-events-none absolute inset-0">
        <img
          src={saoPaulo}
          alt=""
          className="absolute inset-0 h-full w-full scale-105 object-cover object-center opacity-60"
        />
        <div className="absolute inset-0 bg-brand-ink/55 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-ink via-brand-ink/50 to-brand-ink" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-ink via-brand-ink/10 to-brand-ink/70" />
        <div className="absolute -top-32 -right-32 h-[32rem] w-[32rem] rounded-full bg-brand-red/30 blur-[120px]" />
        <div className="absolute -bottom-40 -left-24 h-[28rem] w-[28rem] rounded-full bg-brand-green/20 blur-[130px]" />
        <div className="bg-noise absolute inset-0" />

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute top-16 right-[8%] hidden sm:block"
        >
          <svg
            width="120"
            height="120"
            viewBox="0 0 120 120"
            className="opacity-20"
          >
            <polygon
              points="60,4 110,34 110,86 60,116 10,86 10,34"
              fill="none"
              stroke="#ff1b24"
              strokeWidth="2"
            />
          </svg>
        </motion.div>

        <motion.div className="absolute bottom-24 left-[6%] hidden sm:block animate-float-slow">
          <Plane size={40} className="rotate-45 text-brand-red/40" />
        </motion.div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <motion.div
              custom={0}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-red/40 bg-brand-red/10 px-4 py-1.5 text-sm font-semibold text-brand-red"
            >
              <Sparkles size={16} />
              75 anos ao lado do turismo paulista
            </motion.div>

            <motion.h1
              custom={1}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="text-balance text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl lg:text-6xl"
            >
              Representamos e defendemos quem move o{" "}
              <span className="relative inline-block text-brand-red">
                turismo
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 12"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 9C40 2 160 2 198 9"
                    stroke="#ff1b24"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              de São Paulo
            </motion.h1>

            <motion.p
              custom={2}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="mt-6 max-w-xl text-lg text-white/70"
            >
              Há 75 anos o Sindetur-SP representa, defende os interesses da
              categoria e contribui para a profissionalização do setor de
              turismo. Junte-se a centenas de empresas que já fazem parte dessa
              evolução.
            </motion.p>

            <motion.div
              custom={3}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#solicitar-associacao"
                className="group inline-flex items-center gap-2 rounded-full bg-brand-red px-7 py-3.5 font-bold text-white shadow-xl shadow-brand-red/30 transition-all hover:scale-105 hover:shadow-brand-red/50"
              >
                Eu quero fazer parte dessa evolução
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
              <a
                href="#sobre"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 font-semibold text-white transition-colors hover:bg-white/10"
              >
                Conheça o sindicato
              </a>
            </motion.div>

            <motion.div
              custom={4}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="mt-10 flex items-center gap-3 text-sm text-white/50"
            >
              <ShieldCheck size={18} className="text-brand-green" />
              Entidade oficial de representação sindical do turismo paulista
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="relative mx-auto flex aspect-square w-full max-w-md items-center justify-center"
          >
            <div className="absolute inset-0 rounded-full border border-white/10 animate-spin-slow" />
            <div className="absolute inset-8 rounded-full border border-dashed border-white/10" />

            <div className="absolute inset-0 flex items-center justify-center rounded-full bg-gradient-to-br from-brand-red/20 via-transparent to-brand-green/10">
              <span className="pointer-events-none absolute h-40 w-40 rounded-full bg-brand-red/30 animate-pulse-ring" />
              <div className="relative z-10 flex flex-col items-center justify-center rounded-full bg-white/5 p-10 text-center backdrop-blur-sm">
                <span className="text-7xl font-extrabold text-white sm:text-8xl">
                  75
                </span>
                <span className="mt-1 text-sm font-bold uppercase tracking-[0.3em] text-brand-red">
                  Anos
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
