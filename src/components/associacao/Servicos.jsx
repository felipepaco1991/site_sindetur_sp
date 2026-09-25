import { motion } from "framer-motion";
import {
  Award,
  BookOpen,
  Briefcase,
  Building2,
  FileCheck2,
  Gavel,
  Gift,
  Users,
  Vote,
} from "lucide-react";
const services = [
  {
    icon: Gavel,
    title: "Orientação jurídica",
    text: "Assessoria jurídica especializada para as empresas associadas.",
  },
  {
    icon: Gift,
    title: "Convênios exclusivos",
    text: "Educação, idiomas, tecnologia, seguros e saúde com condições especiais.",
  },
  {
    icon: Building2,
    title: "Coworking Sindetur",
    text: "Espaço de coworking exclusivo para associados na sede do sindicato.",
  },
  {
    icon: Briefcase,
    title: "Bolsa de currículos",
    text: "Convênio para estágios e banco de talentos do setor de turismo.",
  },
  {
    icon: FileCheck2,
    title: "Regularidade sindical",
    text: "Emissão de atestado de regularidade sindical para sua empresa.",
  },
  {
    icon: Award,
    title: "Convenções coletivas",
    text: "Participação ativa nas convenções coletivas de trabalho da categoria.",
  },
  {
    icon: Users,
    title: "Networking",
    text: "Conexão direta com outras empresas e lideranças do turismo paulista.",
  },
  {
    icon: BookOpen,
    title: "Palestras e seminários",
    text: "Conteúdo e capacitação gratuita para associados durante o ano todo.",
  },
  {
    icon: Vote,
    title: "Direito a voto",
    text: "Participe e vote nas assembleias e decisões do sindicato.",
  },
];
export default function Servicos() {
  return (
    <section id="servicos" className="relative bg-brand-mist py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold uppercase tracking-widest text-brand-red"
          >
            Vantagens
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-balance text-3xl font-extrabold text-brand-ink sm:text-4xl"
          >
            Tudo que sua empresa ganha ao se associar
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-brand-gray"
          >
            Benefícios pensados para fortalecer, proteger e impulsionar empresas
            de turismo em todo o estado de São Paulo.
          </motion.p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl bg-white p-7 shadow-sm ring-1 ring-black/5 transition-shadow hover:shadow-xl hover:shadow-brand-red/10"
            >
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-brand-red/5 transition-transform duration-500 group-hover:scale-150" />
              <div className="relative">
                <div className="inline-flex rounded-xl bg-brand-red/10 p-3 text-brand-red transition-colors group-hover:bg-brand-red group-hover:text-white">
                  <s.icon size={22} />
                </div>
                <h3 className="mt-4 font-bold text-brand-ink">{s.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-brand-gray">
                  {s.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
