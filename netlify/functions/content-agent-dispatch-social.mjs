import {
  absoluteSiteUrl,
  decodeRepoContent,
  getRepoFile,
  githubRequest,
  putRepoFile,
} from "./_shared/content-agent.mjs";

const QUEUE_FOLDER = "src/content/social-queue";

async function listQueue() {
  const repository = Netlify.env.get("GITHUB_CONTENT_REPOSITORY") || "Twinpixel-nl/Twinpixel-Reborn";
  const branch = Netlify.env.get("GITHUB_CONTENT_BRANCH") || "main";
  return githubRequest(
    `/repos/${repository}/contents/${QUEUE_FOLDER}?ref=${encodeURIComponent(branch)}`,
  );
}

function isPublished(markdown) {
  const frontmatter = markdown.match(/^---\s*\n([\s\S]*?)\n---/);
  return Boolean(frontmatter && /^draft:\s*false\s*$/m.test(frontmatter[1]));
}

function isDue(value) {
  if (!value) return true;
  const timestamp = new Date(value).getTime();
  return Number.isFinite(timestamp) && timestamp <= Date.now();
}

async function urlIsLive(url) {
  const response = await fetch(url, { headers: { "user-agent": "TwinPixel content agent" } });
  return response.ok;
}

export default async () => {
  const webhook = Netlify.env.get("SOCIAL_WEBHOOK_URL");
  if (!webhook) {
    console.log("SOCIAL_WEBHOOK_URL ontbreekt; social dispatch overgeslagen.");
    return new Response(null, { status: 204 });
  }

  let files;
  try {
    files = await listQueue();
  } catch (error) {
    if (error?.status === 404) return new Response(null, { status: 204 });
    throw error;
  }

  const candidates = (Array.isArray(files) ? files : [])
    .filter((file) => file.type === "file" && file.name.endsWith(".json"));

  let dispatched = 0;
  for (const entry of candidates) {
    if (dispatched >= 10) break;
    const queueFile = await getRepoFile(`${QUEUE_FOLDER}/${entry.name}`);
    const queue = JSON.parse(decodeRepoContent(queueFile));
    if (queue.status !== "waiting_for_publish" || !isDue(queue.publishAt)) continue;

    const blogFile = await getRepoFile(`src/content/insights/${queue.slug}.md`);
    if (!isPublished(decodeRepoContent(blogFile))) continue;

    const articleUrl = absoluteSiteUrl(`/insights/${queue.slug}`);
    const imageUrl = new URL(queue.imageUrl, absoluteSiteUrl("/")).toString();

    if (!(await urlIsLive(articleUrl)) || !(await urlIsLive(imageUrl))) {
      console.log(`Wachten op live deploy of afbeelding voor ${queue.slug}.`);
      continue;
    }

    const response = await fetch(webhook, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        event: "twinpixel.insight.published",
        idempotencyKey: `insight:${queue.slug}`,
        article: {
          title: queue.title,
          url: articleUrl,
          imageUrl,
        },
        linkedin: queue.linkedIn,
        instagram: queue.instagram,
      }),
    });

    if (!response.ok) {
      console.error(`Social webhook faalde voor ${queue.slug}: ${response.status}`);
      continue;
    }

    dispatched += 1;
    queue.status = "sent_to_automation";
    queue.dispatchedAt = new Date().toISOString();
    await putRepoFile(
      `${QUEUE_FOLDER}/${entry.name}`,
      JSON.stringify(queue, null, 2) + "\n",
      `Mark social package dispatched: ${queue.slug}`,
      queueFile.sha,
    );
  }

  return new Response(null, { status: 204 });
};

export const config = {
  schedule: "*/15 * * * *",
};
