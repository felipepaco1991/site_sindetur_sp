// Condições publicadas nas circulares fornecidas pelo Sindetur-SP.
export const contribuicoes2026 = {
  associativa: {
    nome: "Contribuição Associativa",
    ano: 2026,
    aVista: "R$ 1.100,00",
    total: "R$ 1.300,00",
    parcelas: "10 parcelas de R$ 130,00",
    vencimento: "15/03/2026",
    circular: "/materiais/circulares/2026/0032026-contribuicao-associativa-2026.pdf",
  },
  sindical: {
    nome: "Contribuição Sindical Patronal",
    vencimento: "31/01/2026",
    circular: "/materiais/circulares/2025/0092025-contribuicao-sindical-patronal-2026.pdf",
    // A sobreposição das duas primeiras faixas consta no PDF original.
    // Preservar os dados até receber uma retificação do sindicato.
    faixas: [
      ["R$ 0,01 a R$ 42.312,75", "Mínima", "0", "R$ 338,50"],
      ["R$ 40.312,76 a R$ 84.625,50", "0,80%", "0,008", "Não se aplica"],
      ["R$ 84.625,51 a R$ 846.255,00", "0,20%", "0,002", "R$ 507,75"],
      ["R$ 846.255,01 a R$ 84.625.500,00", "0,10%", "0,001", "R$ 1.354,01"],
      ["R$ 84.625.500,01 a R$ 451.336.000,00", "0,02%", "0,0002", "R$ 69.054,41"],
      ["A partir de R$ 451.336.000,01", "Máxima", "0", "R$ 159.321,61"],
    ],
  },
  patronal: {
    nome: "Contribuição Patronal",
    vencimento: "15/01/2026",
    circular: "/materiais/circulares/2025/0072025-contribuicao-patronal-2026.pdf",
    faixas: [
      ["De zero a R$ 81.000,00", "R$ 393,47"],
      ["R$ 81.000,01 a R$ 360.000,00", "R$ 790,00"],
      ["R$ 360.000,01 a R$ 4.800.000,00", "R$ 2.372,33"],
      ["Acima de R$ 4.800.000,00", "R$ 4.744,66"],
    ],
  },
};
