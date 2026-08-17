import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Instagram, Linkedin, FileSearch, ChevronDown, FileText, BookOpen, Handshake, GraduationCap, Landmark } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navLinks = [
  { label: "Início", path: "/" },
  { label: "Sobre", path: "/sobre" },
  {
    label: "Convênios",
    children: [
      { label: "Convênios", path: "/beneficios", icon: Handshake },
      { label: "Radix", path: "/radix", icon: GraduationCap },
    ],
  },
  { label: "CCT'S", path: "/cct" },
  {
    label: "Circulares",
    children: [
      { label: "Circulares", path: "/circulares", icon: FileText },
      { label: "Guia NR-01", path: "/guia-nr01", icon: BookOpen },
      { label: "Reforma Tributária", path: "/reforma-tributaria", icon: Landmark },
    ],
  },
  { label: "Turismo em Números", path: "/turismo-em-numeros" },
  { label: "Contato", path: "/contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpandedMenu, setMobileExpandedMenu] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileExpandedMenu(null);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0">
            <img
              src="https://media.base44.com/images/public/6a0334e8fc336e4a6c562d3b/0b46eb1ba_Logo75Anos.png"
              alt="Sindetur SP 75 Anos"
              className="h-10 lg:h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = link.children
                ? link.children.some((child) => location.pathname === child.path)
                : location.pathname === link.path;

              if (link.children) {
                return (
                  <DropdownMenu key={link.label}>
                    <DropdownMenuTrigger asChild>
                      <button
                        type="button"
                        className={`flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                          isActive
                            ? "bg-primary/5 text-primary"
                            : "text-muted-foreground hover:bg-muted hover:text-foreground"
                        }`}
                      >
                        {link.label}
                        <ChevronDown className="h-3.5 w-3.5" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-52 p-1.5">
                      {link.children.map((child) => {
                        const Icon = child.icon;
                        return (
                          <DropdownMenuItem key={child.path} asChild className="cursor-pointer px-3 py-2.5">
                            <Link to={child.path} className={location.pathname === child.path ? "text-primary" : ""}>
                              <Icon className="h-4 w-4" />
                              {child.label}
                            </Link>
                          </DropdownMenuItem>
                        );
                      })}
                    </DropdownMenuContent>
                  </DropdownMenu>
                );
              }

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive
                      ? "text-primary bg-primary/5"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://www.instagram.com/sindetursp?igsh=dWRiYzh6ajl6Zmgy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/company/sindetursp/?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://sindetursp.gersin.com.br/public/login"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-medium gap-1.5">
                <FileSearch className="w-3.5 h-3.5" />
                Situação Financeira
              </Button>
            </a>
            <Link to="/associe-se">
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium">
                Associe-se
              </Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-foreground"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-border overflow-hidden"
          >
            <nav className="px-4 py-4 space-y-1">
              {navLinks.map((link) => {
                const isActive = link.children
                  ? link.children.some((child) => location.pathname === child.path)
                  : location.pathname === link.path;

                if (link.children) {
                  return (
                    <div key={link.label}>
                      <button
                        type="button"
                        onClick={() => setMobileExpandedMenu((openMenu) => openMenu === link.label ? null : link.label)}
                        className={`flex w-full items-center justify-between rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                          isActive ? "bg-primary/5 text-primary" : "text-muted-foreground hover:bg-muted"
                        }`}
                        aria-expanded={mobileExpandedMenu === link.label}
                      >
                        {link.label}
                        <ChevronDown className={`h-4 w-4 transition-transform ${mobileExpandedMenu === link.label ? "rotate-180" : ""}`} />
                      </button>
                      <AnimatePresence initial={false}>
                        {mobileExpandedMenu === link.label && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden pl-4"
                          >
                            {link.children.map((child) => {
                              const Icon = child.icon;
                              return (
                                <Link
                                  key={child.path}
                                  to={child.path}
                                  className={`flex items-center gap-2 rounded-lg px-4 py-3 text-sm transition-colors ${
                                    location.pathname === child.path
                                      ? "text-primary"
                                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                                  }`}
                                >
                                  <Icon className="h-4 w-4" />
                                  {child.label}
                                </Link>
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? "text-primary bg-primary/5"
                        : "text-muted-foreground hover:bg-muted"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="pt-3 border-t border-border mt-3 space-y-2">
                <a href="https://sindetursp.gersin.com.br/public/login" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground gap-2">
                    <FileSearch className="w-4 h-4" />
                    Minha Situação Financeira
                  </Button>
                </a>
                <Link to="/associe-se">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Associe-se ao Sindetur-SP
                  </Button>
                </Link>
              </div>
              <div className="flex gap-4 pt-3 justify-center">
                <a href="https://www.instagram.com/sindetursp/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/company/sindetur-sp/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
