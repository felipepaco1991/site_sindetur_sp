import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Scale,
  FileCheck,
  Award,
  Users,
  GraduationCap,
  ShieldCheck,
  Building,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Scale,
    title: "Assessoria jurídica consultiva",
    desc: "Uma equipe de advogados especializados no atendimento de empresas de turismo orienta associados em questões trabalhistas, tributárias, contratuais e regulamentações.",
  },
  {
    icon: FileCheck,
    title: "SERCCO — Serviço de apoio na cobrança de comissões",
    desc: "Serviço de auxílio às Agências de Turismo no recebimento de comissões, atuando na cobrança dos fornecedores de serviços turísticos conforme regulamentação da CPRL.",
  },
  {
    icon: Award,
    title: "Atestado de regularidade sindical",
    desc: "O Atestado de Regularidade Sindical é um documento solicitado em editais de licitação e processos de concorrência. O envio é feito diretamente pelo Sindetur-SP para as empresas que estejam com suas obrigações sindicais quites.",
  },
  {
    icon: Users,
    title: "Bolsa de currículos",
    desc: "Disponibiliza currículos de profissionais do mercado em diversas especializações. Serve às pretensões das empresas associadas, facilitando a busca por profissionais qualificados.",
  },
  {
    icon: GraduationCap,
    title: "Convênio de estágio",
    desc: "O Sindetur-SP mantém termos de uso para convênios com organizações e instituições de ensino, disponibilizando vagas de estágio para estudantes nas diversas áreas de capacitação do turismo.",
  },
  {
    icon: Building,
    title: "Coworking Sindetur-SP",
    desc: "Espaço de coworking que possibilita aos associados utilizarem nosso espaço para reuniões e trabalho. Agendamento prévio com 72 horas de antecedência.",
  },
  {
    icon: ShieldCheck,
    title: "Maré Seguros — Responsabilidade Civil e interrupção de renda",
    desc: "A Share Seguros é uma corretora brasileira no mercado de seguros, especializada em consultoria personalizada voltada a soluções específicas para profissionais do turismo.",
  },
];

const partners = [
  { name: "Share Seguros", logo: "https://media.base44.com/images/public/user_692dcbff3f71294a0de415ce/4b3881256_Share-Seguros-150x150.webp", category: "Seguros" },
  { name: "Monde", logo: "https://media.base44.com/images/public/user_692dcbff3f71294a0de415ce/3ec9c0114_Monde-150x150.webp", category: "Tecnologia" },
  { name: "Celer RH", logo: "https://media.base44.com/images/public/user_692dcbff3f71294a0de415ce/949969502_CellerRh-150x150.webp", category: "RH" },
  { name: "Qualicorp", logo: "https://media.base44.com/images/public/user_692dcbff3f71294a0de415ce/80a614373_Captura-de-tela-de-2023-06-02-18-21-44-e1685741735519-150x150.webp", category: "Saúde" },
  { name: "Sesc Senac", logo: "https://media.base44.com/images/public/user_692dcbff3f71294a0de415ce/f8f28a950_Untitled-1-150x150.webp", category: "Educação" },
  { name: "Mackenzie", logo: "https://media.base44.com/images/public/user_692dcbff3f71294a0de415ce/3b226d791_Mackenzie-150x150.webp", category: "Educação" },
];

export default function BeneficiosConvenios() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-foreground text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Serviços, Benefícios e Convênios
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold mt-3 font-display leading-tight">
              Tudo o que o Sindetur-SP oferece para seus associados
            </h1>
            <p className="mt-6 text-lg text-white/70 leading-relaxed">
              Conheça todos os serviços, benefícios e convênios disponíveis para empresas associadas ao sindicato.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Serviços</span>
            <h2 className="text-3xl font-bold text-foreground mt-2 font-display">Benefícios para associados</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-secondary/30 rounded-xl p-6 lg:p-8 border border-border/50 hover:shadow-lg hover:border-primary/20 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground">{service.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 lg:py-28 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Parceiros</span>
            <h2 className="text-3xl font-bold text-foreground mt-2 font-display">Convênios</h2>
            <p className="mt-3 text-muted-foreground max-w-xl">
              O Sindetur-SP mantém convênios com diversas empresas e instituições, oferecendo condições exclusivas para seus associados.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {partners.map((partner, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-white rounded-xl p-6 border border-border hover:shadow-lg hover:border-primary/20 transition-all duration-300 flex flex-col items-center text-center group"
              >
                <div className="w-20 h-20 flex items-center justify-center mb-3">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <h3 className="font-semibold text-foreground text-sm">{partner.name}</h3>
                <span className="text-xs text-primary font-medium mt-1 bg-primary/5 px-2 py-0.5 rounded-full">
                  {partner.category}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white font-display">
            Quer ter acesso a todos esses benefícios?
          </h2>
          <p className="mt-4 text-lg text-white/80 max-w-xl mx-auto">
            Associe-se ao Sindetur-SP e fortaleça sua empresa.
          </p>
          <Link to="/associe-se">
            <Button size="lg" className="mt-8 bg-white text-primary hover:bg-white/90 font-semibold px-8 h-12 rounded-lg group">
              Associe-se agora
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
