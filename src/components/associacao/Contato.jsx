import { motion } from "framer-motion";
import {
  MapPin,
  Facebook as FaFacebookF,
  Instagram as FaInstagram,
  Linkedin as FaLinkedinIn,
} from "lucide-react";
const socials = [
  {
    icon: FaInstagram,
    label: "@sindetursp",
    href: "https://www.instagram.com/sindetursp/",
  },
  {
    icon: FaLinkedinIn,
    label: "sindetursp",
    href: "https://www.linkedin.com/company/sindetursp/",
  },
  {
    icon: FaFacebookF,
    label: "Sindetur SP",
    href: "https://www.facebook.com/profile.php?id=100090638752815",
  },
];
export default function Contato() {
  return (
    <section id="contato" className="relative bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold uppercase tracking-widest text-primary"
          >
            Contato
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-balance text-3xl font-bold text-foreground sm:text-4xl"
          >
            Vamos conversar
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-14 grid max-w-3xl gap-6 sm:grid-cols-2"
        >
          <div className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-black/5">
            <div className="inline-flex rounded-xl bg-primary/10 p-3 text-primary">
              <MapPin size={22} />
            </div>
            <h3 className="mt-4 font-bold text-foreground">Endereço</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
              Av. Dr. Vieira de Carvalho, 115 — 11º andar
              <br />
              Centro, São Paulo/SP — CEP 01210-010
            </p>
          </div>

          <div className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-black/5">
            <h3 className="font-bold text-foreground">Redes sociais</h3>
            <div className="mt-4 flex flex-col gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  <span className="inline-flex rounded-lg bg-secondary p-2 text-foreground transition-colors group-hover:bg-primary group-hover:text-white">
                    <s.icon size={16} />
                  </span>
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
