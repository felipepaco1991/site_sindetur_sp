import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  AnimatePresence,
  motion,
  MotionConfig,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  ArrowUpRight,
  ArrowDown,
  ShieldCheck,
  UsersRound,
  TrendingUp,
  Globe2,
  Plus,
  Minus,
  Check,
  LockKeyhole,
  Building2,
  Landmark,
  Handshake,
  Plane,
  FileText,
} from "lucide-react";
import "@/styles/contribuicao.css";
import ContribuicaoValores from "@/components/ContribuicaoValores";
import { contribuicoes2026 } from "@/data/contribuicoes";
const PORTAL = "https://sindetursp.gersin.com.br/public/login";
const contributions = [
  {
    icon: Landmark,
    title: contribuicoes2026.sindical.nome,
    label: "Representação que faz a diferença",
    text: "Apoia as atividades sindicais e a defesa dos interesses das empresas de turismo do estado de São Paulo.",
    detail:
      "O cálculo considera o capital social da empresa e a tabela da Circular 009/2025, com vencimento em 31/01/2026. Consulte abaixo os valores da Contribuição Sindical Patronal 2026 e acesse o portal para verificar a situação da empresa.",
    bullets: [
      "Custeio das atividades sindicais",
      "Representação dos interesses da categoria",
      "Cálculo com base no capital social",
    ],
  },
  {
    icon: UsersRound,
    title: contribuicoes2026.associativa.nome,
    label: "Mais perto de quem representa você",
    text: "Fortalece a relação entre sua empresa e o sindicato, contribuindo para a profissionalização e o desenvolvimento do setor.",
    detail:
      `${contribuicoes2026.associativa.aVista} à vista no boleto, ou ${contribuicoes2026.associativa.total} em até ${contribuicoes2026.associativa.parcelas} no cartão de crédito. Vencimento informado na Circular 003/2026: ${contribuicoes2026.associativa.vencimento}.`,
    bullets: [
      "Participação na vida associativa",
      "Fortalecimento do setor de turismo",
      "Apoio à atuação institucional",
    ],
  },
  {
    icon: Handshake,
    title: contribuicoes2026.patronal.nome,
    label: "Diálogo que se transforma em segurança",
    text: "Sustenta as negociações coletivas que levam mais estabilidade e segurança às relações de trabalho no turismo.",
    detail:
      "A Contribuição Patronal 2026 considera o faturamento de 2025, com vencimento em 15/01/2026. Pagamento à vista com 10% de desconto no boleto ou Pix, ou em até 5 parcelas no cartão, sem desconto, conforme a Circular 007/2025.",
    bullets: [
      "Custeio das negociações coletivas",
      "Condições conforme o faturamento",
      "Mais estabilidade nas relações de trabalho",
    ],
  },
];
const questions = [
  [
    "Quem é representado pelo Sindetur-SP?",
    "O Sindetur-SP representa a categoria econômica das empresas de turismo no estado de São Paulo. Sua atuação abrange a defesa de interesses coletivos e individuais, as relações trabalhistas e a profissionalização do setor.",
  ],
  [
    "Qual é a diferença entre as contribuições?",
    "A Contribuição Sindical Patronal apoia as atividades sindicais; a Contribuição Associativa se relaciona à participação das empresas associadas; e a Contribuição Patronal é destinada ao custeio das negociações coletivas. Consulte o Sindetur-SP para confirmar o enquadramento da sua empresa e as condições do exercício atual.",
  ],
  [
    "Como consultar pendências e emitir boletos?",
    "Acesse o Portal de Serviços no botão “Acessar portal”. Entre com seus dados para consultar a situação da empresa e os boletos disponíveis. Mantenha o cadastro atualizado para receber as informações do sindicato.",
  ],
  [
    "É meu primeiro acesso. Como me cadastrar?",
    "No Portal de Serviços, selecione “Cadastre-se”, preencha o CNPJ, nome, e-mail e senha. A confirmação será enviada ao e-mail principal da empresa já cadastrado no Sindetur-SP; o responsável por esse e-mail deve liberar o acesso. Com o acesso liberado, consulte as contribuições da empresa e as formas de pagamento disponíveis.",
  ],
  [
    "Onde encontro os valores atualizados?",
    "Os valores e vencimentos de 2026 estão na seção “Valores e condições — 2026”, junto aos PDFs das circulares. Para consultar pendências e condições após o vencimento, acesse o Portal de Serviços ou fale com o Setor de Arrecadações: saa@sindetursp.org.br.",
  ],
  [
    "Como posso falar com o sindicato?",
    "Entre em contato pelo telefone (11) 3350-8080. Para contribuições, envie um e-mail para saa@sindetursp.org.br. Para assuntos associativos, utilize saa@sindetursp.org.br.",
  ],
];
function Reveal({ children, className = "", delay = 0 }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduced ? 0 : 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
function Counter({ value, suffix = "", prefix = "" }) {
  const ref = useRef(null);
  const visible = useInView(ref, { once: true });
  const reduced = useReducedMotion();
  const [count, setCount] = useState(value);
  useEffect(() => {
    if (!visible || reduced) return;
    let frame = 0;
    const start = performance.now();
    function update(now) {
      const p = Math.min((now - start) / 1500, 1);
      setCount(Math.round(value * (1 - Math.pow(1 - p, 3))));
      if (p < 1) frame = requestAnimationFrame(update);
    }
    frame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frame);
  }, [visible, reduced, value]);
  return (
    <span ref={ref}>
      <span className="sr-only">
        {prefix}
        {value}
        {suffix}
      </span>
      <span aria-hidden="true">
        {prefix}
        {count}
        {suffix}
      </span>
    </span>
  );
}
function External({ children, className = "", href = PORTAL }) {
  return (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
      <span className="sr-only"> (abre em nova aba)</span>
    </a>
  );
}
export default function Contribuicao() {
  const [activeTab, setActiveTab] = useState(0);
  const [openQuestion, setOpenQuestion] = useState(0);
  const [emailDraft, setEmailDraft] = useState("");
  const [phone, setPhone] = useState("");
  const hero = useRef(null);
  const reduced = useReducedMotion();
  const { scrollYProgress: heroProgress } = useScroll({
    target: hero,
    offset: ["start start", "end start"],
  });
  const photoY = useTransform(
    heroProgress,
    [0, 1],
    ["0%", reduced ? "0%" : "16%"],
  );
  const active = contributions[activeTab];
  function prepareEmail(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = `Olá, equipe Sindetur-SP!\n\nQuero saber mais sobre as contribuições e como fortalecer o setor de turismo.\n\nNome: ${data.get("name")}\nE-mail: ${data.get("email")}\nTelefone: ${data.get("phone")}\nAgência: ${data.get("agency")}\n\nAguardo as orientações. Obrigado(a)!`;
    setEmailDraft(
      `mailto:saa@sindetursp.org.br?subject=${encodeURIComponent("Interesse em contribuir — " + data.get("agency"))}&body=${encodeURIComponent(body)}`,
    );
  }
  return (
    <MotionConfig reducedMotion="user">
      <div className="contribution-page">
        <section className="hero container" id="inicio" ref={hero}>
          <div className="hero-copy">
            <Reveal>
              <div className="eyebrow">
                <span className="live-dot" /> HÁ 75 ANOS, AO SEU LADO
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h1>
                O turismo nos
                <br />
                move.
                <br />
                <span>
                  A união nos
                  <br />
                  fortalece.
                </span>
                <svg
                  className="heading-swoosh"
                  viewBox="0 0 390 15"
                  aria-hidden="true"
                >
                  <motion.path
                    d="M3 11Q180 -4 385 7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                  />
                </svg>
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="hero-description">
                Sua contribuição vai além de um compromisso.
                <br className="desktop-break" /> Ela fortalece a voz de quem
                defende a sua empresa
                <br className="desktop-break" /> e constrói o futuro do turismo
                em São Paulo.
              </p>
            </Reveal>
            <Reveal delay={0.3} className="hero-actions">
              <a href="#contribuir" className="button button-red">
                Quero fazer parte <ArrowUpRight size={19} />
              </a>
              <a href="#impacto" className="text-link">
                Entenda o impacto <ArrowDown size={17} />
              </a>
            </Reveal>
            <Reveal delay={0.4} className="hero-proof">
              <div className="proof-symbols">
                <Building2 size={16} />
                <Globe2 size={16} />
                <Plane size={16} />
              </div>
              <span>
                <strong>+10 mil empresas.</strong> Uma só voz.
              </span>
            </Reveal>
          </div>
          <Reveal className="hero-visual" delay={0.15}>
            <div className="hero-photo-frame">
              <motion.img
                className="hero-photo"
                src="/images/contribuicao/travel-original.jpg"
                alt="Mala vermelha em um aeroporto, pronta para uma nova viagem"
                style={{ y: photoY }}
              />
              <div className="photo-shade" />
              <div className="photo-top">
                <span>
                  <span className="live-dot" /> CONECTADOS PELO TURISMO
                </span>
                <Globe2 size={22} />
              </div>
              <div className="photo-bottom">
                <span>
                  Juntos, vamos
                  <br />
                  <strong>mais longe.</strong>
                </span>
                <div className="photo-coordinate">
                  SÃO PAULO, BRASIL
                  <br />
                  23°33′ S &nbsp; 46°38′ O
                </div>
              </div>
            </div>
            <div className="anniversary">
              <span className="anniversary-top">NOSSA HISTÓRIA</span>
              <strong>
                75<span>anos</span>
              </strong>
              <span className="anniversary-bottom">O FUTURO É JUNTOS.</span>
              <span className="anniversary-spark">✳</span>
            </div>
            <motion.div
              className="floating-ticket"
              animate={reduced ? {} : { y: [0, -7, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            >
              <span className="ticket-icon">
                <ShieldCheck size={26} />
              </span>
              <div>
                <strong>Sua empresa bem representada.</strong>
                <span>Mais força para o seu próximo destino.</span>
              </div>
              <ArrowUpRight size={21} />
            </motion.div>
            <span className="visual-caption">
              QUEM MOVE O TURISMO MERECE IR MAIS LONGE.
            </span>
          </Reveal>
        </section>
        <section
          className="stats-section container"
          aria-label="Sindetur-SP em números"
        >
          <Reveal className="stats-intro">
            <span className="eyebrow">NOSSA FORÇA, EM NÚMEROS</span>
            <p>
              Uma história de união.
              <br />
              <strong>Um futuro de possibilidades.</strong>
            </p>
          </Reveal>
          <div className="stat">
            <strong>
              <Counter value={10} prefix="+" suffix=" mil" />
            </strong>
            <span>empresas em nossa base</span>
          </div>
          <div className="stat">
            <strong>
              <Counter value={75} />
              <span className="stat-unit"> anos</span>
            </strong>
            <span>de história e representação</span>
          </div>
          <div className="stat">
            <strong>
              <Counter value={12} />
            </strong>
            <span>convenções coletivas por ano</span>
          </div>
        </section>
        <div
          className="marquee"
          role="img"
          aria-label="Representar, defender, conectar e desenvolver"
        >
          <div className="marquee-track" aria-hidden="true">
            {[0, 1, 2, 3].map((i) => (
              <div className="marquee-set" key={i}>
                <span>REPRESENTAR</span>
                <span className="marquee-star">✳</span>
                <span>DEFENDER</span>
                <span className="marquee-star">✳</span>
                <span>CONECTAR</span>
                <span className="marquee-star">✳</span>
                <span>DESENVOLVER</span>
                <span className="marquee-star">✳</span>
              </div>
            ))}
          </div>
        </div>
        <section className="about section container" id="quem-somos">
          <Reveal className="about-art">
            <div className="art-grid" />
            <span className="art-label">SINDETUR-SP · 75 ANOS</span>
            <div className="giant-75">
              75
              <span>
                ANOS DE HISTÓRIA.
                <br />
                OLHOS NO FUTURO.
              </span>
            </div>
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <Globe2 className="art-globe" size={40} />
            <div className="art-foot">
              <span>
                FEITO POR EMPRESÁRIOS.
                <br />
                PARA EMPRESAS COMO A SUA.
              </span>
              <ArrowUpRight size={42} />
            </div>
          </Reveal>
          <Reveal className="about-copy">
            <span className="eyebrow">MUITO PRAZER, SOMOS O SINDETUR-SP</span>
            <h2>
              A força de um setor
              <br />
              começa com <span className="red">união.</span>
            </h2>
            <p>
              Somos o Sindicato das Empresas de Turismo no Estado de São Paulo.
              Formado por empresários, o Sindetur-SP existe para representar e
              defender os interesses de quem faz o turismo acontecer.
            </p>
            <p>
              Há <strong>75 anos</strong>, trabalhamos pela profissionalização
              do setor, pelo desenvolvimento da sociedade e por mais
              oportunidades para negócios como o seu.
            </p>
            <div className="about-note">
              <span className="note-line" />
              <p>
                A sua empresa tem um destino.
                <br />
                <strong>A nossa missão é ajudar você a chegar lá.</strong>
              </p>
            </div>
            <Link to="/sobre" className="text-link">
              Conheça o Sindetur-SP <ArrowUpRight size={18} />
            </Link>
          </Reveal>
        </section>
        <section id="impacto" className="impact section">
          <div className="container">
            <Reveal className="section-heading">
              <div>
                <span className="eyebrow">SUA CONTRIBUIÇÃO EM MOVIMENTO</span>
                <h2>
                  Quando você contribui,
                  <br />
                  <span className="red">todo o setor avança.</span>
                </h2>
              </div>
              <p>
                Por trás de cada conquista, existe um trabalho
                <br className="desktop-break" /> coletivo. E a sua empresa faz
                parte dele.
              </p>
            </Reveal>
            <div className="impact-grid">
              {[
                {
                  icon: ShieldCheck,
                  title: "Uma voz que defende você",
                  text: "Representação dos interesses da categoria nas questões trabalhistas, judiciais e administrativas.",
                  tag: "REPRESENTATIVIDADE",
                },
                {
                  icon: Handshake,
                  title: "Diálogo que gera segurança",
                  text: "12 convenções coletivas anuais, negociadas com 11 sindicatos e a Federação dos Empregados em Turismo.",
                  tag: "NEGOCIAÇÃO COLETIVA",
                },
                {
                  icon: TrendingUp,
                  title: "Mais futuro para seu negócio",
                  text: "Atuação pela profissionalização do setor e por um ambiente favorável ao crescimento das empresas.",
                  tag: "DESENVOLVIMENTO",
                },
              ].map((item, i) => (
                <Reveal
                  key={item.title}
                  delay={i * 0.1}
                  className="impact-card"
                >
                  <div className="card-top">
                    <item.icon size={27} strokeWidth={1.5} />
                    <span>0{i + 1}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <span className="card-tag">
                    {item.tag}
                    <ArrowUpRight size={16} />
                  </span>
                </Reveal>
              ))}
            </div>
            <Reveal className="impact-note">
              <span className="note-check">
                <Check size={15} />
              </span>
              <p>
                Mais de duas décadas de negociações sem a necessidade de
                interferência da Justiça do Trabalho.
              </p>
            </Reveal>
          </div>
        </section>
        <section className="section container contributions" id="contribuicoes">
          <Reveal className="section-heading">
            <div>
              <span className="eyebrow">ENTENDA COMO CONTRIBUIR</span>
              <h2>
                Formas de contribuir.
                <br />
                <span className="red">Um propósito em comum.</span>
              </h2>
            </div>
            <p>
              Cada contribuição apoia uma frente de atuação.
              <br className="desktop-break" /> Conheça o papel de cada uma.
            </p>
          </Reveal>
          <div
            className="contribution-tabs"
            role="tablist"
            aria-label="Tipos de contribuição"
          >
            {contributions.map((item, i) => (
              <button
                type="button"
                role="tab"
                key={item.title}
                id={`tab-${i}`}
                aria-selected={activeTab === i}
                aria-controls={`panel-${i}`}
                tabIndex={activeTab === i ? 0 : -1}
                onClick={() => setActiveTab(i)}
                onKeyDown={(e) => {
                  let next = i;
                  if (e.key === "ArrowRight") next = (i + 1) % 3;
                  else if (e.key === "ArrowLeft") next = (i + 2) % 3;
                  else if (e.key === "Home") next = 0;
                  else if (e.key === "End") next = 2;
                  else return;
                  e.preventDefault();
                  setActiveTab(next);
                  document.getElementById(`tab-${next}`)?.focus();
                }}
                className={activeTab === i ? "active" : ""}
              >
                <item.icon size={20} />
                {item.title}
                <ArrowUpRight size={17} />
              </button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              role="tabpanel"
              id={`panel-${activeTab}`}
              aria-labelledby={`tab-${activeTab}`}
              tabIndex={0}
              className="contribution-panel"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="contribution-main">
                <span className="eyebrow">
                  {active.title}
                </span>
                <h3>{active.label}</h3>
                <p>{active.text}</p>
                <ul>
                  {active.bullets.map((b) => (
                    <li key={b}>
                      <Check size={17} />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="contribution-side">
                <div className="portal-icon">
                  <FileText size={25} />
                </div>
                <h4>Seu próximo passo está aqui.</h4>
                <p>{active.detail}</p>
                <External className="button button-red">
                  Consultar minha contribuição <ArrowUpRight size={18} />
                </External>
                <span className="portal-secure">
                  <LockKeyhole size={12} /> Acesso ao portal oficial Sindetur-SP
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
          <ContribuicaoValores />
        </section>
        <section className="portal-strip">
          <div className="container">
            <Reveal className="portal-strip-inner">
              <div className="portal-strip-icon">
                <Globe2 size={33} strokeWidth={1.4} />
              </div>
              <div>
                <span className="eyebrow">
                  SIMPLES, DIGITAL E PERTO DE VOCÊ
                </span>
                <h3>Sua empresa em dia. Seu setor mais forte.</h3>
                <p>
                  Atualize seu cadastro, consulte pendências e emita seus
                  boletos online.
                </p>
              </div>
              <External className="button button-dark">
                Acessar portal de serviços <ArrowUpRight size={18} />
              </External>
            </Reveal>
          </div>
        </section>
        <section className="section container faq" id="duvidas">
          <Reveal className="faq-intro">
            <span className="eyebrow">PODE PERGUNTAR</span>
            <h2>
              Menos dúvidas.
              <br />
              <span className="red">Mais conexão.</span>
            </h2>
            <p>
              Reunimos as principais informações
              <br />
              para ajudar a sua empresa.
            </p>
            <a
              href="mailto:saa@sindetursp.org.br"
              className="text-link"
            >
              Fale com a nossa equipe <ArrowUpRight size={17} />
            </a>
          </Reveal>
          <div className="faq-list">
            {questions.map(([q, a], i) => (
              <div
                key={q}
                className={`faq-item ${openQuestion === i ? "is-open" : ""}`}
              >
                <h3>
                  <button
                    aria-expanded={openQuestion === i}
                    aria-controls={`answer-${i}`}
                    id={`question-${i}`}
                    onClick={() =>
                      setOpenQuestion(openQuestion === i ? null : i)
                    }
                  >
                    {q}
                    {openQuestion === i ? (
                      <Minus size={19} />
                    ) : (
                      <Plus size={19} />
                    )}
                  </button>
                </h3>
                <div
                  id={`answer-${i}`}
                  role="region"
                  aria-labelledby={`question-${i}`}
                  hidden={openQuestion !== i}
                >
                  <p>{a}</p>
                  {i === 2 || i === 3 ? (
                    <External className="text-link">
                      Acessar portal <ArrowUpRight size={15} />
                    </External>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="contact-section" id="contribuir">
          <div className="container contact-grid">
            <Reveal className="contact-copy">
              <span className="eyebrow">
                <span className="live-dot" /> O PRÓXIMO CAPÍTULO É NOSSO
              </span>
              <h2>
                O futuro do turismo
                <br />
                também leva a<br />
                <span>sua assinatura.</span>
              </h2>
              <p>
                Junte-se a quem trabalha todos os dias pela sua empresa. Vamos
                fortalecer, juntos, o turismo de São Paulo.
              </p>
              <div className="contact-promise">
                <ShieldCheck size={23} />
                <span>
                  75 anos de história.
                  <br />
                  <strong>O mesmo compromisso com você.</strong>
                </span>
              </div>
              <span className="contact-orbit" aria-hidden="true" />
            </Reveal>
            <Reveal className="contact-form-card">
              <h3>Faça parte desse movimento.</h3>
              <p>
                Deixe seus dados para preparar uma conversa com a nossa equipe.
              </p>
              <form onSubmit={prepareEmail} onChange={() => setEmailDraft("")}>
                <label htmlFor="name">
                  Seu nome
                  <input
                    id="name"
                    name="name"
                    placeholder="Como podemos chamar você?"
                    autoComplete="name"
                    required
                    maxLength={100}
                  />
                </label>
                <label htmlFor="email">
                  E-mail profissional
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="voce@suaempresa.com.br"
                    autoComplete="email"
                    required
                    maxLength={150}
                  />
                </label>
                <div className="form-row">
                  <label htmlFor="phone">
                    Telefone
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      inputMode="tel"
                      placeholder="(11) 99999-9999"
                      autoComplete="tel"
                      value={phone}
                      onChange={(e) => {
                        const n = e.target.value
                          .replace(/\D/g, "")
                          .slice(0, 11);
                        setPhone(
                          n.length > 6
                            ? `(${n.slice(0, 2)}) ${n.slice(2, n.length > 10 ? 7 : 6)}-${n.slice(n.length > 10 ? 7 : 6)}`
                            : n.length > 2
                              ? `(${n.slice(0, 2)}) ${n.slice(2)}`
                              : n,
                        );
                      }}
                      pattern="\([0-9]{2}\) [0-9]{4,5}-[0-9]{4}"
                      title="Informe o DDD e um telefone com 10 ou 11 dígitos"
                      required
                    />
                  </label>
                  <label htmlFor="agency">
                    Nome da agência
                    <input
                      id="agency"
                      name="agency"
                      placeholder="Sua empresa"
                      autoComplete="organization"
                      required
                      maxLength={150}
                    />
                  </label>
                </div>
                <button className="button button-red" type="submit">
                  Quero contribuir com o turismo <ArrowUpRight size={18} />
                </button>
                <p className="form-disclaimer">
                  <LockKeyhole size={13} /> Seus dados serão incluídos em um
                  e-mail que você poderá revisar antes de enviar.
                </p>
                <div aria-live="polite">
                  {emailDraft && (
                    <div className="email-ready">
                      <strong>
                        <Check size={17} /> Seu e-mail está pronto para revisão.
                      </strong>
                      <p>
                        Clique abaixo para abrir seu aplicativo de e-mail e
                        enviar a mensagem ao Sindetur-SP. Nenhum dado foi
                        enviado automaticamente.
                      </p>
                      <a className="text-link" href={emailDraft}>
                        Abrir e-mail para enviar <ArrowUpRight size={17} />
                      </a>
                    </div>
                  )}
                </div>
              </form>
            </Reveal>
          </div>
        </section>
      </div>
    </MotionConfig>
  );
}
