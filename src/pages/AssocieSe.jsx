import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "framer-motion";
import { CheckCircle2, Upload, Send, FileText, Loader2 } from "lucide-react";
import { submitAssociationForm } from "@/lib/forms-api";
import { toast } from "sonner";

const docs = [
  "Ficha proposta de associação preenchida e assinada digitalmente ou fisicamente",
  "Cópia do contrato social consolidado ou da última alteração contratual registrada",
  "Cópia do Registro no Ministério do Turismo",
  "Cópia do CNPJ - Cadastro Nacional da Pessoa Jurídica",
];

const segmentos = [
  "Agência de Viagens",
  "Operadora de Turismo",
  "Transportadora Turística",
  "Centro de Convenções",
  "Consultoria em Turismo",
  "Outro",
];

export default function AssocieSe() {
  const [form, setForm] = useState({
    empresa: "",
    cnpj: "",
    responsavel: "",
    email: "",
    telefone: "",
    segmento: "",
    mensagem: "",
    website: "",
  });
  const [files, setFiles] = useState([]);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (field, value) => setForm((prev) => ({ ...prev, [field]: value }));

  const handleFiles = (e) => {
    const newFiles = Array.from(e.target.files || []);
    setFiles(newFiles);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    try {
      await submitAssociationForm(form, files);
      setSent(true);
      setFiles([]);
      toast.success("Solicitação enviada com sucesso.");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setSending(false);
    }
  };

  if (sent) {
    return (
      <section className="py-32 lg:py-40">
        <div className="max-w-xl mx-auto px-4 text-center">
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-foreground font-display">Solicitação enviada!</h1>
          <p className="mt-4 text-muted-foreground text-lg">
            Recebemos sua solicitação de associação. Nossa equipe fará o retorno pelo e-mail informado.
          </p>
        </div>
      </section>
    );
  }

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
              Associe-se
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold mt-3 font-display leading-tight">
              Faça parte do Sindetur-SP
            </h1>
            <p className="mt-6 text-lg text-white/70 leading-relaxed">
              Podem se associar empresas de turismo constituídas como sociedades, simples ou empresárias, públicas ou privadas, desde que exerçam atividades relacionadas ao setor turístico.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-foreground mb-6">Documentos necessários:</h2>
          <div className="space-y-3">
            {docs.map((doc, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-border/50">
                <FileText className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-foreground">{doc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground font-display mb-8">
              Enviar solicitação de associação
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="empresa">Nome da empresa *</Label>
                  <Input
                    id="empresa"
                    required
                    value={form.empresa}
                    onChange={(e) => handleChange("empresa", e.target.value)}
                    placeholder="Razão social"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cnpj">CNPJ *</Label>
                  <Input
                    id="cnpj"
                    required
                    value={form.cnpj}
                    onChange={(e) => handleChange("cnpj", e.target.value)}
                    placeholder="00.000.000/0000-00"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="responsavel">Nome do responsável *</Label>
                  <Input
                    id="responsavel"
                    required
                    value={form.responsavel}
                    onChange={(e) => handleChange("responsavel", e.target.value)}
                    placeholder="Nome completo"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="contato@empresa.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="telefone">Telefone / WhatsApp *</Label>
                  <Input
                    id="telefone"
                    required
                    value={form.telefone}
                    onChange={(e) => handleChange("telefone", e.target.value)}
                    placeholder="(11) 00000-0000"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Segmento de atuação *</Label>
                  <Select value={form.segmento} onValueChange={(v) => handleChange("segmento", v)} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      {segmentos.map((s) => (
                        <SelectItem key={s} value={s}>{s}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="mensagem">Mensagem</Label>
                <Textarea
                  id="mensagem"
                  value={form.mensagem}
                  onChange={(e) => handleChange("mensagem", e.target.value)}
                  placeholder="Informações adicionais (opcional)"
                  rows={4}
                />
              </div>

              <div className="space-y-2">
                <Label>Documentos</Label>
                <div className="border-2 border-dashed border-border rounded-xl p-6 text-center hover:border-primary/40 transition-colors">
                  <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-3" />
                  <p className="text-sm text-muted-foreground mb-2">
                    Arraste arquivos ou clique para selecionar
                  </p>
                  <input
                    type="file"
                    multiple
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                    onChange={handleFiles}
                    className="hidden"
                    id="file-upload"
                  />
                  <label htmlFor="file-upload">
                    <Button type="button" variant="outline" size="sm" className="cursor-pointer" asChild>
                      <span>Selecionar arquivos</span>
                    </Button>
                  </label>
                </div>
                {files.length > 0 && (
                  <div className="mt-3 space-y-2">
                    {files.map((file, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground bg-secondary/50 rounded-lg px-3 py-2">
                        <FileText className="w-4 h-4 text-primary" />
                        {file.name}
                      </div>
                    ))}
                  </div>
                )}
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

              <Button
                type="submit"
                disabled={sending}
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-12 rounded-lg"
              >
                {sending ? (
                  <Loader2 className="w-5 h-5 animate-spin mr-2" />
                ) : (
                  <Send className="w-5 h-5 mr-2" />
                )}
                {sending ? "Enviando..." : "Enviar solicitação de associação"}
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
}
