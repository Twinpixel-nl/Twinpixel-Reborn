import {
  HttpError,
  decodeRepoContent,
  getRepoFile,
  githubRequest,
  putRepoBase64,
  putRepoFile,
  renderInsight,
  slugify,
} from "./_shared/content-agent.mjs";
import { generateContentPackage } from "./_shared/content-generation.mjs";
import { generateSocialImage } from "./_shared/social-image.mjs";

const STATE_PATH = ".content-agent/automation-state.json";
const INSIGHTS_PATH = "src/content/insights";
const QUEUE_PATH = "src/content/social-queue";

function isoWeekKey(date = new Date()) {
  const d = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
  const day = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - day);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  const week = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
  return `${d.getUTCFullYear()}-W${String(week).padStart(2, "0")}`;
}

async function optionalFile(path) {
  try {
    return await getRepoFile(path);
  } catch (error) {
    if (error instanceof HttpError && error.status === 404) return null;
    throw error;
  }
}

async function existingTitles() {
  const repository = Netlify.env.get("GITHUB_CONTENT_REPOSITORY") || "Twinpixel-nl/Twinpixel-Reborn";
  const branch = Netlify.env.get("GITHUB_CONTENT_BRANCH") || "main";
  let entries;
  try {
    entries = await githubRequest(
      `/repos/${repository}/contents/${INSIGHTS_PATH}?ref=${encodeURIComponent(branch)}`,
    );
  } catch (error) {
    if (error instanceof HttpError && error.status === 404) return [];
    throw error;
  }

  const recent = (Array.isArray(entries) ? entries : [])
    .filter((entry) => entry.type === "file" && entry.name.endsWith(".md"))
    .slice(-40);

  const files = await Promise.all(recent.map((entry) => getRepoFile(`${INSIGHTS_PATH}/${entry.name}`)));
  return files.map((file) => {
    const markdown = decodeRepoContent(file);
    return markdown.match(/^title:\s*["']?(.+?)["']?\s*$/m)?.[1] || file.name.replace(/\.md$/, "");
  });
}

function extensionFor(mimeType) {
  if (mimeType.includes("jpeg")) return "jpg";
  if (mimeType.includes("webp")) return "webp";
  return "png";
}

export default async (req) => {
  const expected = Netlify.env.get("CONTENT_AUTOMATION_SECRET");
  if (!expected || req.headers.get("x-automation-secret") !== expected) {
    console.error("Autopublish geweigerd: ongeldig automation secret.");
    return;
  }

  const week = isoWeekKey();
  const stateFile = await optionalFile(STATE_PATH);
  const state = stateFile ? JSON.parse(decodeRepoContent(stateFile)) : {};
  if (state.week === week && state.status === "completed") {
    console.log(`Autopublish voor ${week} was al voltooid.`);
    return;
  }
  if (
    state.week === week &&
    state.status === "running" &&
    Date.now() - new Date(state.startedAt).getTime() < 2 * 60 * 60 * 1000
  ) {
    console.log(`Autopublish voor ${week} draait al.`);
    return;
  }

  const runningState = {
    week,
    status: "running",
    startedAt: new Date().toISOString(),
  };
  const runningResult = await putRepoFile(
    STATE_PATH,
    JSON.stringify(runningState, null, 2) + "\n",
    `Start content autopilot ${week}`,
    stateFile?.sha,
  );

  try {
    const pkg = await generateContentPackage({
      autonomous: true,
      existingTitles: await existingTitles(),
    });
    const image = await generateSocialImage(pkg);

    let slug = slugify(pkg.slug || pkg.title);
    if (await optionalFile(`${INSIGHTS_PATH}/${slug}.md`)) {
      slug = `${slug}-${new Date().toISOString().slice(0, 10)}`;
    }
    pkg.slug = slug;

    const extension = extensionFor(image.mimeType);
    const imagePath = `public/uploads/agent/${slug}.${extension}`;
    const publicImageUrl = `/uploads/agent/${slug}.${extension}`;
    const queuePath = `${QUEUE_PATH}/${slug}.json`;
    const blogPath = `${INSIGHTS_PATH}/${slug}.md`;

    const queue = {
      version: 1,
      slug,
      title: pkg.title,
      status: "waiting_for_publish",
      publishAt: null,
      articleUrl: `https://twinpixel.nl/insights/${slug}`,
      imageUrl: publicImageUrl,
      linkedIn: {
        organizationUrl: "https://www.linkedin.com/company/twinpixel",
        text: pkg.linkedInPost,
      },
      instagram: { caption: pkg.instagramCaption },
      visualBrief: pkg.visualBrief,
      createdAt: new Date().toISOString(),
      createdBy: "TwinPixel content autopilot",
    };

    await putRepoFile(
      queuePath,
      JSON.stringify(queue, null, 2) + "\n",
      `Queue automated social posts: ${pkg.title}`,
    );
    await putRepoBase64(
      imagePath,
      image.base64,
      `Add automated insight image: ${pkg.title}`,
    );
    await putRepoFile(
      blogPath,
      renderInsight(pkg, publicImageUrl, { draft: false }),
      `Publish automated insight: ${pkg.title}`,
    );

    const completedState = {
      week,
      status: "completed",
      slug,
      title: pkg.title,
      completedAt: new Date().toISOString(),
    };
    await putRepoFile(
      STATE_PATH,
      JSON.stringify(completedState, null, 2) + "\n",
      `Complete content autopilot ${week}`,
      runningResult.content?.sha,
    );
    console.log(`Automatisch gepubliceerd: ${pkg.title}`);
  } catch (error) {
    console.error("Content autopilot mislukt:", error);
    throw error;
  }
};

export const config = {};
