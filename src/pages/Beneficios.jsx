import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Scale,
  Handshake,
  FileCheck,
  Award,
  ScrollText,
  Users,
  GraduationCap,
  Plane,
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
    icon: Handshake,
    title: "Convênios com condições exclusivas",
    desc: "O Sindetur-SP oferece a seus associados um amplo portfólio de serviços conveniados em Saúde e Odontologia, Qualicorp, Tecnologia (MONDE e WTS), Educação (Mackenzie), além de Seguros (Share Seguros, Região Viagens, Globo Seguros, Orientação Viagem e Santos, CELION).",
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
    icon: ScrollText,
    title: "Convenções coletivas de trabalho",
    desc: "O Sindetur-SP celebra a cada ano 12 Convenções Coletivas de Trabalho, com 11 Sindicatos e a Federação dos Empregados em Turismo. Por meio de negociações livres e democráticas, garantindo estabilidade ao setor.",
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
    icon: Plane,
    title: "Mundo Afora — Seguro Viagem SABEMI",
    desc: "Um dos fundamentos da SABEMI Seguradora é fortalecer o mercado de seguros, e mantém convênio e parceria com o Sindetur-SP para oferecer seguro viagem com condições especiais.",
  },
  {
    icon: ShieldCheck,
    title: "Maré Seguros — Responsabilidade Civil e interrupção de renda",
    desc: "A Share Seguros é uma corretora brasileira no mercado de seguros, especializada em consultoria personalizada voltada a soluções específicas para profissionais do turismo.",
  },
];

export default function Beneficios() {
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
              Serviços e Benefícios
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold mt-3 font-display leading-tight">
              Tudo o que o Sindetur-SP oferece para seus associados
            </h1>
            <p className="mt-6 text-lg text-white/70 leading-relaxed">
              Conheça todos os serviços e benefícios disponíveis para empresas associadas ao sindicato.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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