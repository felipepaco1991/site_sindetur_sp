// @ts-nocheck
const API_BASE_URL = (import.meta.env.VITE_FORMS_API_BASE_URL || "").replace(/\/$/, "");

function buildUrl(path) {
  return `${API_BASE_URL}${path}`;
}

async function parseError(response) {
  try {
    const data = await response.json();
    return data.error || "Falha ao enviar o formulário.";
  } catch {
    return "Falha ao enviar o formulário.";
  }
}

async function submit(path, options) {
  const response = await fetch(buildUrl(path), options);

  if (!response.ok) {
    throw new Error(await parseError(response));
  }

  try {
    return await response.json();
  } catch {
    return { success: true };
  }
}

export function submitContactForm(form) {
  return submit("/api/forms/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  });
}

export function submitAssociationForm(form, files = []) {
  const formData = new FormData();

  Object.entries(form).forEach(([key, value]) => {
    formData.append(key, value ?? "");
  });

  files.forEach((file) => {
    formData.append("files", file);
  });

  return submit("/api/forms/associe-se", {
    method: "POST",
    body: formData,
  });
}
