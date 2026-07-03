const OWNER = "MSR-BR";
const REPO = "Universal-CNPq-2026";
const LABEL = "phase-5-5-response";

const MEMBERS = {
  "P-0001": { name: "Gabriel Fernandes Silva", institution: "UERJ" },
  "P-0002": { name: "Bruno de Pinho Alho", institution: "UERJ" },
  "P-0003": { name: "Mario de Souza Reis Junior", institution: "UFF" },
  "P-0004": { name: "Paula de Oliveira Ribeiro Alho", institution: "UERJ" },
  "P-0005": { name: "Pedro Jorge von Ranke Perlingeiro", institution: "UERJ" },
  "P-0006": { name: "Vinícius Gomes de Paula", institution: "UFF" },
  "P-0007": { name: "Vinícius da Silva Ramos de Sousa", institution: "UERJ" },
  "P-0008": { name: "Alan Fillipe de Souza Almeida", institution: "UERJ" },
  "P-0009": { name: "Clebson dos Santos Cruz", institution: "UFOB" },
  "P-0010": { name: "Gabriel Batista de Souza", institution: "UERJ" },
  "P-0011": { name: "João Vitor Almeida Tavares Cruz", institution: "UFOB" },
  "P-0012": { name: "Maron Freitas Anka", institution: "SENAI CIMATEC" },
  "P-0013": { name: "Tatiana de Jesus Braga", institution: "UFOB" },
  "P-0014": { name: "Wanisson Silva Santana", institution: "UFOB" },
  "P-0015": { name: "António F. Moreira dos Santos", institution: "ORNL", aliases: ["Antonio dos Santos"] },
  "P-0016": { name: "Paula Cristina Ferreira da Silva Brandão", institution: "Universidade de Aveiro", aliases: ["Paula Brandao"] },
};

const AXES = new Set([
  "Eixo 1 - Plataforma de complexos metálicos",
  "Eixo 2 - Barocalórico em spin crossover",
  "Eixo 3 - Pressão, estrutura e J",
  "Eixo 4 - Termodinâmica quântica e baterias quânticas",
  "Eixo 5 - Recursos quânticos e informação",
  "Apoio transversal",
]);

const RUBRICAS = new Set(["Custeio", "Capital", "Bolsa"]);
const ITENS = new Set([
  "Material de consumo",
  "Passagens (Total)",
  "Diárias (Total)",
  "Serviços de Terceiros (Total)",
  "Despesas acessórias com importação",
  "Equipamentos e Material permanente",
  "Material bibliográfico (Total)",
  "Bolsa IC/ITI/AT",
]);
const EIXOS = new Set(["Eixo 1", "Eixo 2", "Eixo 3", "Eixo 4", "Eixo 5", "Transversal"]);
const PRIORIDADES = new Set(["Alta", "Média", "Baixa"]);

function sendJson(res, status, body) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.end(JSON.stringify(body));
}

function cleanText(value, maxLength = 1200) {
  return String(value || "")
    .replace(/\r\n/g, "\n")
    .replace(/\r/g, "\n")
    .trim()
    .slice(0, maxLength);
}

function tableCell(value) {
  return cleanText(value, 800)
    .replace(/\|/g, "\\|")
    .replace(/\n+/g, "<br>");
}

function githubHeaders({ token, json = false } = {}) {
  const headers = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    "User-Agent": "universal-cnpq-2026-phase55-form",
  };
  if (token) headers.Authorization = `Bearer ${token}`;
  if (json) headers["Content-Type"] = "application/json";
  return headers;
}

function normalizeText(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function isPhase55Issue(issue) {
  const labels = Array.isArray(issue.labels) ? issue.labels.map((label) => label.name) : [];
  return labels.includes(LABEL) || String(issue.title || "").startsWith("Resposta Fase 5.5");
}

function issueMemberId(issue) {
  const bodyMatch = String(issue.body || "").match(/-\s*ID:\s*(P-\d{4})/);
  if (bodyMatch && MEMBERS[bodyMatch[1]]) return bodyMatch[1];

  const searchable = normalizeText(`${issue.title || ""}\n${issue.body || ""}`);
  for (const [id, member] of Object.entries(MEMBERS)) {
    const legacyTitle = `Resposta Fase 5.5 - ${member.name}`;
    const titleWithId = `Resposta Fase 5.5 - ${id} - ${member.name}`;
    if (issue.title === legacyTitle || issue.title === titleWithId) return id;

    const names = [member.name, ...(member.aliases || [])];
    if (names.some((name) => searchable.includes(normalizeText(name)))) return id;
  }

  return "";
}

async function submissionStatus(token) {
  const searchParams = new URLSearchParams({
    state: "all",
    per_page: "100",
  });
  const response = await fetch(`https://api.github.com/repos/${OWNER}/${REPO}/issues?${searchParams}`, {
    headers: githubHeaders({ token }),
  });
  const issues = await response.json().catch(() => []);

  if (!response.ok || !Array.isArray(issues)) {
    return {
      ok: false,
      status: response.status,
      error: issues.message || "Não foi possível consultar as issues no GitHub.",
    };
  }

  const byMember = {};
  issues
    .filter((issue) => !issue.pull_request && isPhase55Issue(issue))
    .forEach((issue) => {
      const id = issueMemberId(issue);
      if (!id || byMember[id]) return;
      byMember[id] = {
        issueNumber: issue.number,
        issueUrl: issue.html_url,
        state: issue.state,
        updatedAt: issue.updated_at,
      };
    });

  return {
    ok: true,
    members: Object.entries(MEMBERS).map(([id, member]) => ({
      id,
      name: member.name,
      institution: member.institution,
      submitted: Boolean(byMember[id]),
      issueNumber: byMember[id]?.issueNumber || null,
      issueUrl: byMember[id]?.issueUrl || "",
      state: byMember[id]?.state || "",
      updatedAt: byMember[id]?.updatedAt || "",
    })),
  };
}

function validate(payload) {
  const errors = [];

  if (payload.website) {
    errors.push("Falha de validação.");
  }

  if (!payload.memberId || !MEMBERS[payload.memberId]) {
    errors.push("Selecione um integrante válido.");
  }

  const axes = Array.isArray(payload.axes) ? payload.axes : [];
  if (axes.some((axis) => !AXES.has(axis))) {
    errors.push("A lista de eixos contém valor inválido.");
  }

  const budget = Array.isArray(payload.budget) ? payload.budget : [];
  if (budget.length > 20) {
    errors.push("Informe no máximo 20 itens de orçamento.");
  }

  for (const row of budget) {
    if (!RUBRICAS.has(row.rubrica)) errors.push("Rubrica inválida no orçamento.");
    if (!ITENS.has(row.item)) errors.push("Item de dispêndio inválido no orçamento.");
    if (!EIXOS.has(row.eixo)) errors.push("Eixo inválido no orçamento.");
    if (!PRIORIDADES.has(row.prioridade)) errors.push("Prioridade inválida no orçamento.");
  }

  return errors;
}

function buildIssueBody(payload) {
  const member = MEMBERS[payload.memberId];
  const axes = Array.isArray(payload.axes) && payload.axes.length ? payload.axes : ["Nenhum eixo selecionado."];
  const budget = Array.isArray(payload.budget) ? payload.budget : [];
  const comments = cleanText(payload.comments, 6000) || "Sem comentários gerais.";

  const lines = [];
  lines.push("# Resposta Fase 5.5 - Aprovação interna");
  lines.push("");
  lines.push("## Integrante");
  lines.push("");
  lines.push(`- Pessoa: ${member.name}`);
  lines.push(`- ID: ${payload.memberId}`);
  lines.push(`- Instituição: ${member.institution}`);
  lines.push("");
  lines.push("## Eixos de contribuição direta");
  lines.push("");
  axes.forEach((axis) => lines.push(`- ${axis}`));
  lines.push("");
  lines.push("## Orçamento");
  lines.push("");

  if (budget.length) {
    lines.push("| Rubrica CNPq | Item de dispêndio | Valor total estimado (R$) | Detalhamento Pt | Detalhamento En | Justificativa Pt | Justificativa En | Eixo | Prioridade |");
    lines.push("| --- | --- | ---: | --- | --- | --- | --- | --- | --- |");
    budget.forEach((row) => {
      lines.push(
        `| ${tableCell(row.rubrica)} | ${tableCell(row.item)} | ${tableCell(row.valor || "0,00")} | ${tableCell(row.detalhamentoPt)} | ${tableCell(row.detalhamentoEn)} | ${tableCell(row.justificativaPt)} | ${tableCell(row.justificativaEn)} | ${tableCell(row.eixo)} | ${tableCell(row.prioridade)} |`
      );
    });
  } else {
    lines.push("Sem demanda de orçamento informada.");
  }

  lines.push("");
  lines.push("## Comentários gerais");
  lines.push("");
  lines.push(comments);
  lines.push("");
  lines.push("## Observação de processamento");
  lines.push("");
  lines.push("Comentários gerais serão separados posteriormente pela coordenação e apontados para as seções correspondentes da proposta.");
  return lines.join("\n");
}

async function createIssue({ title, body, token, includeLabel = true }) {
  const response = await fetch(`https://api.github.com/repos/${OWNER}/${REPO}/issues`, {
    method: "POST",
    headers: githubHeaders({ token, json: true }),
    body: JSON.stringify({
      title,
      body,
      labels: includeLabel ? [LABEL] : undefined,
    }),
  });

  const data = await response.json().catch(() => ({}));
  return { response, data };
}

module.exports = async function handler(req, res) {
  if (req.method === "OPTIONS") {
    res.statusCode = 204;
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    return res.end();
  }

  const token = process.env.GITHUB_ISSUE_TOKEN;
  if (req.method === "GET") {
    const status = await submissionStatus(token);
    if (!status.ok) {
      return sendJson(res, status.status || 500, { ok: false, error: status.error });
    }
    return sendJson(res, 200, status);
  }

  if (req.method !== "POST") {
    return sendJson(res, 405, { ok: false, error: "Método não permitido." });
  }

  if (!token) {
    return sendJson(res, 500, {
      ok: false,
      error: "Variável GITHUB_ISSUE_TOKEN não configurada na Vercel.",
    });
  }

  let payload;
  try {
    payload = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};
  } catch (error) {
    return sendJson(res, 400, { ok: false, error: "JSON inválido." });
  }

  const errors = validate(payload);
  if (errors.length) {
    return sendJson(res, 400, { ok: false, error: errors[0] });
  }

  const member = MEMBERS[payload.memberId];
  const title = `Resposta Fase 5.5 - ${payload.memberId} - ${member.name}`;
  const body = buildIssueBody(payload);

  let result = await createIssue({ title, body, token, includeLabel: true });
  if (result.response.status === 422) {
    result = await createIssue({ title, body, token, includeLabel: false });
  }

  if (!result.response.ok) {
    return sendJson(res, result.response.status, {
      ok: false,
      error: result.data.message || "Não foi possível criar a issue no GitHub.",
    });
  }

  return sendJson(res, 200, {
    ok: true,
    issueUrl: result.data.html_url,
    issueNumber: result.data.number,
  });
};
