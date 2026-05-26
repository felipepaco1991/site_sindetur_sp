import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, Loader2, CheckCircle2, Clock } from "lucide-react";
import { submitContactForm } from "@/lib/forms-api";
import { toast } from "sonner";

export default function Contato() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    assunto: "",
    mensagem: "",
    website: "",
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (field, value) => setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    try {
      await submitContactForm(form);
      setSent(true);
      toast.success("Mensagem enviada com sucesso.");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setSending(false);
    }
  };

  const contactInfo = [
    { icon: Phone, label: "Telefone", value: "(11) 3350-8080", href: "tel:+551133508080" },
    { icon: Mail, label: "E-mail", value: "saa@sindetursp.org.br", href: "mailto:saa@sindetursp.org.br" },
    { icon: MapPin, label: "Endereco", value: "Av. Vieira de Carvalho, 115 - 11º andar - Centro Historico de Sao Paulo, SP, 01210-010" },
    { icon: Clock, label: "Horario", value: "Segunda a sexta, das 9h as 18h" },
  ];

  return (
    <>
      <section className="py-20 lg:py-28 bg-foreground text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Contato
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold mt-3 font-display leading-tight">
              Fale com o Sindetur-SP
            </h1>
            <p className="mt-6 text-lg text-white/70 leading-relaxed">
              Entre em contato conosco para duvidas, informacoes ou suporte.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-foreground font-display mb-8">
                Informacoes de contato
              </h2>
              <div className="space-y-6">
                {contactInfo.map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-foreground font-medium hover:text-primary transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-3">
              {sent ? (
                <div className="text-center py-16">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground font-display">Mensagem enviada!</h3>
                  <p className="mt-3 text-muted-foreground">
                    Recebemos seu contato e vamos responder o quanto antes.
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-foreground font-display mb-8">
                    Envie sua mensagem
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="nome">Nome *</Label>
                        <Input id="nome" required value={form.nome} onChange={(e) => handleChange("nome", e.target.value)} placeholder="Seu nome" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">E-mail *</Label>
                        <Input id="email" type="email" required value={form.email} onChange={(e) => handleChange("email", e.target.value)} placeholder="seu@email.com" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="telefone">Telefone</Label>
                        <Input id="telefone" value={form.telefone} onChange={(e) => handleChange("telefone", e.target.value)} placeholder="(11) 00000-0000" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="assunto">Assunto *</Label>
                        <Input id="assunto" required value={form.assunto} onChange={(e) => handleChange("assunto", e.target.value)} placeholder="Ex: Duvida sobre associacao" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="mensagem">Mensagem *</Label>
                      <Textarea id="mensagem" required value={form.mensagem} onChange={(e) => handleChange("mensagem", e.target.value)} placeholder="Descreva sua duvida ou solicitacao" rows={5} />
                    </div>
                    <input
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      value={form.website}
                      onChange={(e) => handleChange("website", e.target.value)}
                      className="hidden"
                      aria-hidden="true"
                    />
                    <Button type="submit" disabled={sending} size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-12 px-8 rounded-lg">
                      {sending ? <Loader2 className="w-5 h-5 animate-spin mr-2" /> : <Send className="w-5 h-5 mr-2" />}
                      {sending ? "Enviando..." : "Enviar mensagem"}
                    </Button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="h-[400px] bg-secondary">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.5!2d-46.644!3d-23.54!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMyJzI0LjAiUyA0NsKwMzgnMzguNCJX!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localizacao Sindetur-SP"
        />
      </section>
    </>
  );
}
