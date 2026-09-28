import { FileText, Plus } from "lucide-react";
import { contribuicoes2026 } from "@/data/contribuicoes";

function Circular({ contribution, number }) {
  return (
    <a className="text-link circular-link" href={contribution.circular} target="_blank" rel="noopener noreferrer">
      <FileText size={18} aria-hidden="true" />
      Circular {number} — {contribution.nome} 2026 (PDF)
      <span className="sr-only"> (abre em nova aba)</span>
    </a>
  );
}

function Table({ label, headers, rows }) {
  return (
    <div className="table-scroll" tabIndex={0} role="region" aria-label={label}>
      <table>
        <thead><tr>{headers.map((header) => <th key={header} scope="col">{header}</th>)}</tr></thead>
        <tbody>{rows.map((row) => (
          <tr key={row[0]}>{row.map((cell, index) => <td key={index}>{cell}</td>)}</tr>
        ))}</tbody>
      </table>
    </div>
  );
}

export default function ContribuicaoValores() {
  const { sindical, associativa, patronal } = contribuicoes2026;
  return (
    <details className="contribution-values" id="valores-2026" open>
      <summary><span><FileText size={18} /> Valores e condições — 2026</span><Plus size={20} /></summary>
      <div className="contribution-values-body">
        <p>Valores, formas de pagamento e vencimentos do exercício de 2026, conforme as circulares do Sindetur-SP. Para pagamentos após os vencimentos informados, consulte as condições no Portal de Serviços ou com o Setor de Arrecadações.</p>

        <h4>{sindical.nome} — 2026</h4>
        <p><strong>Vencimento: {sindical.vencimento}.</strong> O cálculo multiplica o capital social pelo índice e soma a parcela adicional, respeitando as contribuições mínima e máxima da tabela.</p>
        <Table label="Tabela da Contribuição Sindical Patronal 2026" headers={["Capital social", "Alíquota", "Índice", "Parcela adicional"]} rows={sindical.faixas} />
        <p className="source-note">A circular apresenta sobreposição nas duas primeiras faixas: a primeira termina em R$ 42.312,75 e a segunda começa em R$ 40.312,76. Os valores acima reproduzem o documento; confirme o enquadramento com o Setor de Arrecadações pelo e-mail <a href="mailto:saa@sindetursp.org.br">saa@sindetursp.org.br</a>.</p>
        <p>Pagamento na Caixa Econômica Federal, na rede bancária, em casas lotéricas ou pela internet.</p>
        <Circular contribution={sindical} number="009/2025" />

        <h4>{associativa.nome} — 2026</h4>
        <p><strong>Vencimento: {associativa.vencimento}.</strong> Condições aprovadas na Assembleia Geral Extraordinária de 30/10/2025:</p>
        <ul className="payment-options">
          <li><strong>{associativa.aVista} à vista</strong> no boleto, com desconto de R$ 200,00 sobre a anuidade.</li>
          <li><strong>{associativa.total}</strong> no cartão de crédito, em até <strong>{associativa.parcelas}</strong>, sem desconto, exclusivamente pelo Portal de Serviços.</li>
        </ul>
        <Circular contribution={associativa} number="003/2026" />

        <h4>{patronal.nome} — 2026</h4>
        <p><strong>Vencimento: {patronal.vencimento}.</strong> Valores conforme o faturamento/porte da empresa no ano de 2025:</p>
        <Table label="Tabela da Contribuição Patronal 2026" headers={["Faixa de faturamento anual em 2025", "Valor sem desconto"]} rows={patronal.faixas} />
        <p>Pagamento à vista com 10% de desconto no boleto ou Pix (chave CNPJ: 60748811000105), ou em até 5 parcelas mensais sucessivas no cartão de crédito, sem desconto, com vencimento inicial em 15/01/2026.</p>
        <p>Para parcelar, acesse o Portal de Serviços e selecione a Contribuição Patronal e a opção de pagamento com cartão de crédito.</p>
        <Circular contribution={patronal} number="007/2025" />
      </div>
    </details>
  );
}
