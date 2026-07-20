import {
  HttpError,
  getRepoFile,
  handleError,
  json,
  putRepoFile,
  renderInsight,
  requireEditor,
  slugify,
} from "./_shared/content-agent.mjs";

const requiredFields = [
  "title",
  "description",
  "category",
  "readingTime",
  "bodyMarkdown",
  "linkedInPost",
  "instagramCaption",
];

async function assertNew(path) {
  try {
    await getRepoFile(path);
    throw new HttpError(409, `Er bestaat al content op ${path}.`);
  } catch (error) {
    if (error instanceof HttpError && error.status === 404) return;
    throw error;
  }
}

export default async (req, context) => {
  try {
    if (req.method !== "POST") throw new HttpError(405, "Alleen POST is toegestaan.");
    const user = await requireEditor(req, context);
    const input = await req.json();
    const pkg = input.package || {};

    for (const field of requiredFields) {
      if (!String(pkg[field] || "").trim()) {
        throw new HttpError(400, `Het veld ${field} ontbreekt.`);
      }
    }

    const slug = slugify(pkg.slug || pkg.title);
    if (!slug) throw new HttpError(400, "De slug is ongeldig.");

    const imageUrl = String(input.imageUrl || "").trim();
    if (!imageUrl) {
      throw new HttpError(
        400,
        "Voeg een publieke vierkante afbeelding toe. Instagram kan niet zonder afbeelding publiceren.",
      );
    }

    const blogPath = `src/content/insights/${slug}.md`;
    const queuePath = `src/content/social-queue/${slug}.json`;
    await assertNew(blogPath);
    await assertNew(queuePath);

    const blog = renderInsight(pkg, imageUrl);
    const queue = {
      version: 1,
      slug,
      title: pkg.title,
      status: "waiting_for_publish",
      publishAt: input.publishAt || null,
      articleUrl: `https://twinpixel.nl/insights/${slug}`,
      imageUrl,
      linkedIn: {
        organizationUrl: "https://www.linkedin.com/company/twinpixel",
        text: pkg.linkedInPost,
      },
      instagram: {
        caption: pkg.instagramCaption,
      },
      visualBrief: pkg.visualBrief || "",
      createdAt: new Date().toISOString(),
      createdBy: user.email || "unknown",
    };

    await putRepoFile(blogPath, blog, `Add draft insight: ${pkg.title}`);
    try {
      await putRepoFile(queuePath, JSON.stringify(queue, null, 2) + "\n", `Queue social copy: ${pkg.title}`);
    } catch (error) {
      throw new HttpError(
        500,
        "De blog is opgeslagen, maar de socialwachtrij niet. Verwijder het blogconcept niet; controleer de Netlify-log.",
      );
    }

    return json({
      ok: true,
      slug,
      decapUrl: "/admin/#/collections/insights",
      message: "Concept opgeslagen. Open Decap, controleer het artikel en zet Draft pas daarna uit.",
    });
  } catch (error) {
    return handleError(error);
  }
};

export const config = {
  path: "/api/content-agent/save",
  method: "POST",
};
