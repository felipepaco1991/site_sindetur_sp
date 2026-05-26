const RECIPIENTS = [{ email: "saa@sindetursp.org.br", name: "Sindetur-SP" }];
const CC_RECIPIENTS = [
  { email: "contato@vbradvogados.com.br", name: "VBR Advogados" },
  { email: "joao.nascimento@copyconnect.com.br", name: "Joao Nascimento" },
  { email: "felipe@copyconnect.com.br", name: "Felipe Copyconnect" },
];

const MAX_TOTAL_ATTACHMENTS_BYTES = 15 * 1024 * 1024;

function escapeHtml(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function normalizeOrigins(raw) {
  return (raw || "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function buildCorsHeaders(request, env) {
  const origin = request.headers.get("Origin");
  const allowedOrigins = normalizeOrigins(env.ALLOWED_ORIGINS);

  if (!origin) {
    return {
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };
  }

  if (allowedOrigins.length === 0 || allowedOrigins.includes(origin)) {
    return {
      "Access-Control-Allow-Origin": origin,
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      Vary: "Origin",
    };
  }

  return null;
}

function jsonResponse(request, env, payload, status = 200) {
  const corsHeaders = buildCorsHeaders(request, env);

  if (!corsHeaders) {
    return new Response(JSON.stringify({ error: "Origin nao permitido." }), {
      status: 403,
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    });
  }

  return new Response(JSON.stringify(payload), {
    status,
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      ...corsHeaders,
    },
  });
}

function validateRequiredFields(fields, requiredKeys) {
  for (const key of requiredKeys) {
    if (!String(fields[key] || "").trim()) {
      throw new Error(`Campo obrigatorio ausente: ${key}.`);
    }
  }
}

function isSpamTrapFilled(fields) {
  return Boolean(String(fields.website || "").trim());
}

function bufferToBase64(buffer) {
  let binary = "";
  const bytes = new Uint8Array(buffer);
  const chunkSize = 0x8000;

  for (let i = 0; i < bytes.length; i += chunkSize) {
    binary += String.fromCharCode(...bytes.subarray(i, i + chunkSize));
  }

  return btoa(binary);
}

function formatMultiline(value) {
  return escapeHtml(value).replaceAll("\n", "<br />");
}

function buildBrevoPayload(env, subject, htmlContent, replyTo, attachment = []) {
  return {
    sender: {
      email: env.BREVO_SENDER_EMAIL,
      name: env.BREVO_SENDER_NAME || "Sindetur-SP",
    },
    to: RECIPIENTS,
    cc: CC_RECIPIENTS,
    subject,
    htmlContent,
    replyTo,
    attachment,
  };
}

async function sendBrevoEmail(env, payload) {
  const response = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      accept: "application/json",
      "api-key": env.BREVO_API_KEY,
      "content-type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Falha ao enviar e-mail: ${response.status} ${text}`);
  }
}

async function handleContact(request, env) {
  const data = await request.json();

  if (isSpamTrapFilled(data)) {
    return { success: true };
  }

  validateRequiredFields(data, ["nome", "email", "assunto", "mensagem"]);

  const replyTo = {
    email: String(data.email).trim(),
    name: String(data.nome).trim(),
  };

  const htmlContent = `
    <h2>Novo contato pelo site</h2>
    <p><strong>Nome:</strong> ${escapeHtml(data.nome)}</p>
    <p><strong>E-mail:</strong> ${escapeHtml(data.email)}</p>
    <p><strong>Telefone:</strong> ${escapeHtml(data.telefone || "Nao informado")}</p>
    <p><strong>Assunto:</strong> ${escapeHtml(data.assunto)}</p>
    <p><strong>Mensagem:</strong><br />${formatMultiline(data.mensagem)}</p>
  `;

  await sendBrevoEmail(
    env,
    buildBrevoPayload(env, `Contato via site - ${data.assunto}`, htmlContent, replyTo)
  );

  return { success: true };
}

async function readAttachments(formData) {
  const attachments = [];
  let totalBytes = 0;

  for (const entry of formData.getAll("files")) {
    if (!(entry instanceof File) || entry.size === 0) {
      continue;
    }

    totalBytes += entry.size;

    if (totalBytes > MAX_TOTAL_ATTACHMENTS_BYTES) {
      throw new Error("Os anexos ultrapassam o limite de 15 MB.");
    }

    attachments.push({
      name: entry.name,
      content: bufferToBase64(await entry.arrayBuffer()),
    });
  }

  return attachments;
}

async function handleAssociation(request, env) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData.entries());

  if (isSpamTrapFilled(data)) {
    return { success: true };
  }

  validateRequiredFields(data, ["empresa", "cnpj", "responsavel", "email", "telefone", "segmento"]);

  const attachments = await readAttachments(formData);
  const replyTo = {
    email: String(data.email).trim(),
    name: String(data.responsavel).trim(),
  };

  const htmlContent = `
    <h2>Nova solicitacao de associacao</h2>
    <p><strong>Empresa:</strong> ${escapeHtml(data.empresa)}</p>
    <p><strong>CNPJ:</strong> ${escapeHtml(data.cnpj)}</p>
    <p><strong>Responsavel:</strong> ${escapeHtml(data.responsavel)}</p>
    <p><strong>E-mail:</strong> ${escapeHtml(data.email)}</p>
    <p><strong>Telefone:</strong> ${escapeHtml(data.telefone)}</p>
    <p><strong>Segmento:</strong> ${escapeHtml(data.segmento)}</p>
    <p><strong>Mensagem:</strong><br />${formatMultiline(data.mensagem || "Nenhuma mensagem")}</p>
    <p><strong>Anexos:</strong> ${attachments.length > 0 ? `${attachments.length} arquivo(s)` : "Nenhum anexo enviado"}</p>
  `;

  await sendBrevoEmail(
    env,
    buildBrevoPayload(
      env,
      `Nova solicitacao de associacao - ${data.empresa}`,
      htmlContent,
      replyTo,
      attachments
    )
  );

  return { success: true };
}

export default {
  async fetch(request, env) {
    if (!env.BREVO_API_KEY || !env.BREVO_SENDER_EMAIL) {
      return jsonResponse(request, env, { error: "Configuracao do servidor incompleta." }, 500);
    }

    if (request.method === "OPTIONS") {
      return jsonResponse(request, env, { ok: true });
    }

    if (request.method !== "POST") {
      return jsonResponse(request, env, { error: "Metodo nao permitido." }, 405);
    }

    const url = new URL(request.url);

    try {
      if (url.pathname === "/api/forms/contact") {
        return jsonResponse(request, env, await handleContact(request, env));
      }

      if (url.pathname === "/api/forms/associe-se") {
        return jsonResponse(request, env, await handleAssociation(request, env));
      }

      return jsonResponse(request, env, { error: "Rota nao encontrada." }, 404);
    } catch (error) {
      return jsonResponse(request, env, { error: error.message || "Falha ao processar a solicitacao." }, 400);
    }
  },
};
