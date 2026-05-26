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
  ArrowRight,
} from "lucide-react";

const services = [
  { icon: Scale, title: "Assessoria jurídica consultiva", desc: "Orientação especializada para empresas do setor turístico." },
  { icon: Handshake, title: "Convênios exclusivos", desc: "Condições diferenciadas em diversas áreas para associados." },
  { icon: FileCheck, title: "SERCCO", desc: "Serviço de apoio na cobrança de comissões de fornecedores." },
  { icon: Award, title: "Atestado de regularidade", desc: "Certificado de regularidade sindical para sua empresa." },
  { icon: ScrollText, title: "Convenções coletivas", desc: "Negociação de convenções coletivas de trabalho." },
  { icon: Users, title: "Bolsa de currículos", desc: "Acesso a banco de profissionais qualificados do setor." },
  { icon: GraduationCap, title: "Convênio de estágio", desc: "Facilitação de estágios para empresas associadas." },
  { icon: Plane, title: "Mundo Afora — Seguro Viagem", desc: "Seguro viagem SABEMI com condições especiais." },
  { icon: ShieldCheck, title: "Maré Seguros", desc: "Responsabilidade Civil Profissional e interrupção de renda." },
];

export default function ServicesPreview() {
  return (
    <section className="py-20 lg:py-28 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Serviços e Benefícios
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-3 font-display">
            O que oferecemos aos associados
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-white rounded-xl p-6 border border-border/50 hover:shadow-lg hover:border-primary/20 transition-all duration-300 group"
            >
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground text-base">{service.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/beneficios">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground group">
              Ver todos os benefícios
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}