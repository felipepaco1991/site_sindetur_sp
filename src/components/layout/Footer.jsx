import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <img
                src="https://media.base44.com/images/public/6a0334e8fc336e4a6c562d3b/0b46eb1ba_Logo75Anos.png"
                alt="Sindetur SP 75 Anos"
                className="h-14 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Sindicato das Empresas de Turismo no Estado de São Paulo. Representando e fortalecendo o setor desde 1953.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="https://www.instagram.com/sindetursp?igsh=dWRiYzh6ajl6Zmgy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/sindetursp/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Site */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Site</h4>
            <nav className="space-y-3">
              {[
                { label: "Início", path: "/" },
                { label: "Sobre", path: "/sobre" },
                { label: "Benefícios", path: "/beneficios" },
                { label: "Associe-se", path: "/associe-se" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-sm text-white/60 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Links Úteis */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Links Úteis</h4>
            <nav className="space-y-3">
              <Link to="/turismo-em-numeros" className="block text-sm text-white/60 hover:text-white transition-colors">
                Turismo em Números
              </Link>
              <Link to="/convenios" className="block text-sm text-white/60 hover:text-white transition-colors">
                Convênios
              </Link>
              <Link to="/contato" className="block text-sm text-white/60 hover:text-white transition-colors">
                Contato
              </Link>
            </nav>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                <span className="text-sm text-white/60">(11) 3350-8080</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                <a href="mailto:saa@sindetursp.org.br" className="text-sm text-white/60 hover:text-white transition-colors">
                  saa@sindetursp.org.br
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                <span className="text-sm text-white/60 leading-relaxed">
                  Av. Vieira de Carvalho, 115 — 11º andar — Centro Histórico de São Paulo, SP, 01210-010
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} Sindetur-SP — Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}