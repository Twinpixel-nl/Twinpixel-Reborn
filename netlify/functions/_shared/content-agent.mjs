const REPOSITORY = "Twinpixel-nl/Twinpixel-Reborn";
const BRANCH = "main";

export class HttpError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
  }
}

export async function requireEditor(req, context) {
  const authorization = req.headers.get("authorization");
  if (!authorization?.startsWith("Bearer ")) {
    throw new HttpError(401, "Log eerst in via Netlify Identity.");
  }

  const siteUrl = context.site?.url || Netlify.env.get("URL");
  if (!siteUrl) throw new HttpError(500, "De Netlify site-URL ontbreekt.");

  const response = await fetch(new URL("/.netlify/identity/user", siteUrl), {
    headers: { authorization },
  });

  if (!response.ok) throw new HttpError(401, "Je sessie is verlopen. Log opnieuw in.");
  const user = await response.json();

  const allowed = (Netlify.env.get("CONTENT_AGENT_ALLOWED_EMAILS") || "")
    .split(",")
    .map((email) => email.trim().toLowerCase())
    .filter(Boolean);

  if (allowed.length && !allowed.includes(String(user.email || "").toLowerCase())) {
    throw new HttpError(403, "Dit account heeft geen toegang tot de contentagent.");
  }

  return user;
}

export function json(data, status = 200) {
  return Response.json(data, {
    status,
    headers: {
      "cache-control": "no-store",
      "x-content-type-options": "nosniff",
    },
  });
}

export function handleError(error) {
  console.error(error);
  return json(
    { error: error instanceof Error ? error.message : "Er ging iets mis." },
    error instanceof HttpError ? error.status : 500,
  );
}

export function slugify(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 80);
}

export function yamlString(value) {
  return JSON.stringify(String(value ?? ""));
}

export function renderInsight(pkg, imageUrl) {
  const date = new Date().toISOString().slice(0, 10);
  const tags = Array.isArray(pkg.tags) ? pkg.tags.slice(0, 8) : [];
  const lines = [
    "---",
    `title: ${yamlString(pkg.title)}`,
    `description: ${yamlString(pkg.description)}`,
    `date: ${date}`,
    "draft: true",
  ];

  if (imageUrl) {
    lines.push("image:");
    lines.push(`  src: ${yamlString(imageUrl)}`);
    lines.push(`  alt: ${yamlString(pkg.imageAlt || pkg.title)}`);
    lines.push(`ogImage: ${yamlString(imageUrl)}`);
  }

  lines.push(`category: ${yamlString(pkg.category)}`);
  if (tags.length) lines.push(`tags: [${tags.map(yamlString).join(", ")}]`);
  lines.push(`readingTime: ${yamlString(pkg.readingTime)}`);
  lines.push("---", "", String(pkg.bodyMarkdown || "").trim(), "");
  return lines.join("\n");
}

function githubSettings() {
  const token = Netlify.env.get("GITHUB_CONTENT_TOKEN");
  if (!token) throw new HttpError(503, "GITHUB_CONTENT_TOKEN is nog niet ingesteld.");
  return {
    token,
    repository: Netlify.env.get("GITHUB_CONTENT_REPOSITORY") || REPOSITORY,
    branch: Netlify.env.get("GITHUB_CONTENT_BRANCH") || BRANCH,
  };
}

export async function githubRequest(path, options = {}) {
  const { token } = githubSettings();
  const response = await fetch(`https://api.github.com${path}`, {
    ...options,
    headers: {
      accept: "application/vnd.github+json",
      authorization: `Bearer ${token}`,
      "x-github-api-version": "2022-11-28",
      "content-type": "application/json",
      ...(options.headers || {}),
    },
  });

  if (!response.ok) {
    const detail = await response.text();
    throw new HttpError(response.status, `GitHub: ${detail.slice(0, 300)}`);
  }
  return response.status === 204 ? null : response.json();
}

export async function getRepoFile(path) {
  const { repository, branch } = githubSettings();
  const encodedPath = path.split("/").map(encodeURIComponent).join("/");
  return githubRequest(`/repos/${repository}/contents/${encodedPath}?ref=${encodeURIComponent(branch)}`);
}

export async function putRepoFile(path, content, message, sha) {
  const { repository, branch } = githubSettings();
  const encodedPath = path.split("/").map(encodeURIComponent).join("/");
  return githubRequest(`/repos/${repository}/contents/${encodedPath}`, {
    method: "PUT",
    body: JSON.stringify({
      message,
      branch,
      content: Buffer.from(content, "utf8").toString("base64"),
      ...(sha ? { sha } : {}),
    }),
  });
}

export function decodeRepoContent(file) {
  return Buffer.from(String(file.content || "").replace(/\n/g, ""), "base64").toString("utf8");
}

export function absoluteSiteUrl(path) {
  const site = Netlify.env.get("URL") || "https://twinpixel.nl";
  return new URL(path, site).toString();
}
