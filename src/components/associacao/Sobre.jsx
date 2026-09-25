import { motion } from "framer-motion";
import { Handshake, Scale, TrendingUp } from "lucide-react";
const directorPhoto0 = "/images/diretoria/Carlos-Schwartzman.jpeg";
const directorPhoto1 = "/images/diretoria/Auro-Nardelli.jpeg";
const directorPhoto2 = "/images/diretoria/Flavia-Pirola.webp";
const directorPhoto3 = "/images/diretoria/Gregorio-Polaino.png";
const directorPhoto4 = "/images/diretoria/Juarez-Cintra.jpg";
const directorPhoto5 = "/images/diretoria/Karin-Rocha.jpeg";
const directorPhoto6 = "/images/diretoria/Oskar-Kedor.webp";
const directorPhoto7 = "/images/diretoria/Renata-Esteves.webp";
const directorPhoto8 = "/images/diretoria/Sergio-Fumioka.webp";
const directorPhoto9 = "/images/diretoria/Tomas-Perez.webp";
const directors = [
  {
    name: "Carlos Schwartzmann",
    company: "Costa Brava",
    photo: directorPhoto0,
    position: "center top",
  },
  {
    name: "Auro Wandermüren",
    company: "Paxtour",
    photo: directorPhoto1,
    position: "center top",
  },
  {
    name: "Flávia Pirola da Costa",
    company: "Tyller",
    photo: directorPhoto2,
    position: "25% top",
  },
  {
    name: "Gregorio Polaino",
    company: "Ad Creatives",
    photo: directorPhoto3,
    position: "center top",
  },
  {
    name: "Juarez Cintra Neto",
    company: "Ancoradouro",
    photo: directorPhoto4,
    position: "center top",
  },
  {
    name: "Karin Rocha",
    company: "CVC Corp",
    photo: directorPhoto5,
    position: "center top",
  },
  {
    name: "Oskar Kedor",
    company: "Mobility",
    photo: directorPhoto6,
    position: "center top",
  },
  {
    name: "Renata Esteves dos Santos",
    company: "BeFly",
    photo: directorPhoto7,
    position: "right top",
  },
  {
    name: "Sérgio Masaki Fumioka",
    company: "Quickly Travel",
    photo: directorPhoto8,
    position: "center top",
  },
  {
    name: "Tomas Martins Perez",
    company: "Teresa Perez Tours",
    photo: directorPhoto9,
    position: "center top",
  },
];
const pillars = [
  {
    icon: Scale,
    title: "Representar",
    text: "Defendemos os interesses da categoria em negociações, convenções coletivas e frente ao poder público.",
  },
  {
    icon: Handshake,
    title: "Defender",
    text: "Orientação jurídica especializada e atuação institucional em nome das empresas associadas.",
  },
  {
    icon: TrendingUp,
    title: "Profissionalizar",
    text: "Contribuímos para o crescimento e a profissionalização contínua do setor de turismo paulista.",
  },
];
export default function Sobre() {
  return (
    <section
      id="sobre"
      className="relative overflow-hidden bg-white py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-4xl">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-sm font-bold uppercase tracking-widest text-brand-red"
            >
              Quem somos
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-3 text-balance text-3xl font-extrabold text-brand-ink sm:text-4xl"
            >
              75 anos contribuindo para o crescimento do turismo em São Paulo
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg leading-relaxed text-brand-gray"
            >
              O Sindicato das Empresas de Turismo do Estado de São Paulo
              (Sindetur-SP) é a entidade que representa e defende os interesses
              da categoria, contribuindo para a profissionalização do setor. Ao
              longo de sete décadas e meia, consolidamos nossa posição como voz
              institucional do turismo paulista — atuando ao lado de operadoras,
              centros de convenções e empresas do setor em todo o estado.
            </motion.p>

            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {pillars.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 * i }}
                  className="group rounded-2xl border border-black/5 p-5 transition-colors hover:border-brand-red/30 hover:bg-brand-mist"
                >
                  <p.icon size={22} className="text-brand-red" />
                  <h3 className="mt-3 font-bold text-brand-ink">{p.title}</h3>
                  <p className="mt-1 text-sm text-brand-gray">{p.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 border-t border-black/5 pt-16">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-brand-red">
              Diretoria
            </span>
            <h3 className="mt-3 text-3xl font-extrabold text-brand-ink sm:text-4xl">
              Quem nos representa
            </h3>
            <p className="mt-4 text-brand-gray">
              Empresários do setor de turismo que lideram o Sindetur-SP com
              comprometimento e visão estratégica.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
            {directors.map((director, i) => (
              <motion.div
                key={director.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 5) * 0.05 }}
                className="group text-center"
              >
                <div className="mb-3 aspect-square overflow-hidden rounded-2xl border border-black/10 shadow-sm">
                  <img
                    src={director.photo}
                    alt={director.name}
                    loading="lazy"
                    style={{ objectPosition: director.position }}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <p className="text-sm font-bold leading-snug text-brand-ink">
                  {director.name}
                </p>
                <p className="mt-1 text-xs font-semibold text-brand-red">
                  {director.company}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
