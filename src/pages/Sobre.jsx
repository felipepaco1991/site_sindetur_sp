import React from "react";
import { motion } from "framer-motion";
import { Building2, Calendar, Handshake, CheckCircle2, Users, Target, Award, FileText } from "lucide-react";

const stats = [
  { icon: Calendar, number: "75 anos", label: "de existência" },
  { icon: Building2, number: "+13 mil", label: "CNPJs filiados" },
  { icon: Handshake, number: "27 anos", label: "de negociações amigáveis" },
];

const actions = [
  "Negociação dos 12 Termos Aditivos às CCT's (Convenção Coletiva de Trabalho), com 11 sindicatos de empregados e Federação de Empregados no Estado de São Paulo, para o período de 2025-2026",
  "Envio de 27 boletins com informações sobre Licitações, Concorrências e Leilões para fornecimento de serviços turísticos no Estado de São Paulo",
  "Atuação em 49 processos SERCCO – Serviço de Cobrança de Comissões de fornecedores de serviços turísticos",
  "Emissão de 28 Atestados de Regularidade Sindical",
  "Atendimento SAA (Serviço de Atendimento ao Associado e Afiliado), com mais de 830 acionamentos sobre assuntos diversos, de empresas associadas, afiliadas e contabilidades",
  "Publicação de 7 edições do newsletter digital 'Turismo em Números'",
  "Adesão de 20 empresas ao REPIS (Regime Especial de Piso Salarial)",
  "Admissão de 4 empresas ao quadro de associados",
  "Representação da categoria nos conselhos de turismo: CONTURESP, COMTUR, São Paulo Convention & Visitors Bureau (SPCVB) e Conselho de Turismo da FECOMERCIOSP",
];

const team = [
  { name: "Carlos Schwartzmann", company: "Costa Brava", photo: "https://sindetursp.org.br/wp-content/uploads/2026/05/Carlos-Swa.jpg" },
  { name: "Auro Wandermüren", company: "Paxtour", photo: "https://sindetursp.org.br/wp-content/uploads/2026/05/Auro.jpg" },
  { name: "Flávia Pirola da Costa", company: "Tyller", photo: "https://sindetursp.org.br/wp-content/uploads/2026/05/Flavia.jpg" },
  { name: "Gregorio Polaino", company: "Ad Creatives", photo: "https://sindetursp.org.br/wp-content/uploads/2026/05/Gregorio.jpg" },
  { name: "Juarez Cintra Neto", company: "Ancoradouro", photo: "https://sindetursp.org.br/wp-content/uploads/2026/05/Sem-Titulo-1.jpg" },
  { name: "Karin Rocha", company: "CVC Corp", photo: "https://sindetursp.org.br/wp-content/uploads/2026/05/Karin.jpg" },
  { name: "Oskar Kedor", company: "Mobility", photo: "https://sindetursp.org.br/wp-content/uploads/2026/05/Oskar.jpg" },
  { name: "Renata Esteves dos Santos", company: "BeFly", photo: "https://sindetursp.org.br/wp-content/uploads/2026/05/Renata.jpg" },
  { name: "Sérgio Masaki Fumioka", company: "Quickly Travel", photo: "https://sindetursp.org.br/wp-content/uploads/2026/05/Sergio.jpg" },
  { name: "Tomas Martins Perez", company: "Teresa Perez Tours", photo: "https://sindetursp.org.br/wp-content/uploads/2026/05/Tomaz.jpg" },
];

const values = [
  { icon: Target, title: "Missão", desc: "Representar e defender os interesses da categoria econômica das empresas de turismo, contribuir para a profissionalização do setor e apoiar o desenvolvimento dos negócios." },
  { icon: Users, title: "Representação", desc: "Somos o representante legal da categoria econômica das empresas de turismo do Estado de São Paulo, compostos por mais de 13 mil CNPJs filiados." },
  { icon: Award, title: "Tradição", desc: "Há 75 anos atuando de forma consistente em prol das empresas de turismo, com negociações coletivas amigáveis há 27 anos consecutivos." },
];

export default function Sobre() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://media.base44.com/images/public/6a0334e8fc336e4a6c562d3b/c8caf324c_generated_f4a3f324.png"
            alt="São Paulo"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/75 to-foreground/50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Sobre o Sindetur-SP
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mt-3 font-display leading-tight">
              Um grupo de empresários que entende a realidade do setor
            </h1>
            <p className="mt-6 text-lg text-white/70 leading-relaxed">
              O Sindetur-SP celebra 75 anos como representante legal da categoria econômica das empresas de turismo do Estado de São Paulo.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quem Somos */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">
                Quem somos
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-3 font-display leading-tight">
                Representatividade e força para o turismo paulista
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
                O sindicato das empresas de turismo no Estado de São Paulo é formado por empresários e tem a missão de <strong>representar</strong> e <strong>defender</strong> os interesses da categoria e <strong>contribuir</strong> para a profissionalização do setor e o aumento de negócios como o seu, além do desenvolvimento da sociedade.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Em suas atribuições legais, o Sindetur-SP celebra a cada ano 12 Convenções Coletivas de Trabalho, com 11 Sindicatos e a Federação dos Empregados em Turismo. Por meio de negociações livres e democráticas com os representantes dos empregados, tem sido desnecessária a interferência da Justiça do Trabalho nestas negociações há mais de duas décadas, garantindo estabilidade e segurança jurídica ao setor.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src="https://sindetursp.org.br/wp-content/uploads/2026/05/716f4fde9_generated_be87a3fb.png"
                alt="Diretoria Sindetur-SP"
                className="rounded-2xl shadow-lg w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 lg:py-28 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-border/50 shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground font-display">{item.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Números */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Nossos números
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-3 font-display">
              75 anos de atuação em dados
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-8 rounded-2xl bg-secondary/50 border border-border/50"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="text-4xl font-bold text-primary font-display">{stat.number}</div>
                <div className="text-base font-medium text-foreground mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Diretoria
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-3 font-display">
              Quem nos representa
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Empresários do setor de turismo que lideram o Sindetur-SP com comprometimento e visão estratégica.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-full aspect-square rounded-xl overflow-hidden border-2 border-border group-hover:border-primary/40 transition-colors shadow-sm mb-3">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <p className="font-semibold text-foreground text-sm leading-snug">{member.name}</p>
                <p className="text-primary text-xs font-medium mt-0.5">{member.company}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Estatuto */}
      <section className="py-20 lg:py-28 bg-white border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-8 bg-secondary/40 rounded-2xl p-8 border border-border/50">
            <div className="flex-1">
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">Documentos</span>
              <h2 className="text-2xl font-bold text-foreground mt-2 font-display">Estatuto Social</h2>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                Acesse o Estatuto Social do Sindetur-SP, consolidado com as deliberações da Assembleia Geral Extraordinária de 30 de outubro de 2023.
              </p>
              <a
                href="https://media.base44.com/files/public/6a0334e8fc336e4a6c562d3b/095d276fe_Estatuto_Social_do_Sindetur-SP_2023.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-5 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold text-sm hover:bg-primary/90 transition-colors"
              >
                <FileText className="w-4 h-4" />
                Baixar Estatuto Social (PDF)
              </a>
            </div>
            <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <FileText className="w-8 h-8 text-primary" />
            </div>
          </div>
        </div>
      </section>

      {/* Ações */}
      <section className="py-20 lg:py-28 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Realizações 2025
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-3 font-display">
              Ações realizadas pelo Sindetur-SP em 2025
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              O ano de 2025 foi intenso para o setor de viagens e turismo. Apesar de desafiador, o ambiente de negócios foi mais estável e observou-se uma melhora em praticamente todas as atividades que compõem o nosso setor, consolidando a retomada dos negócios em um nível superior ao período pré-pandemia. Este resultado reflete o trabalho árduo dos empresários do setor, que com criatividade, flexibilidade, ousadia e profissionalismo, superaram as adversidades, transformando os riscos em oportunidades de crescimento.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {actions.map((action, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="flex items-start gap-3 p-5 rounded-xl bg-white border border-border/50"
              >
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <p className="text-sm text-foreground leading-relaxed">{action}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
