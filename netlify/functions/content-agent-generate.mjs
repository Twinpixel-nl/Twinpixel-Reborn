import {
  HttpError,
  handleError,
  json,
  requireEditor,
} from "./_shared/content-agent.mjs";
import { generateContentPackage } from "./_shared/content-generation.mjs";

export default async (req, context) => {
  try {
    if (req.method !== "POST") throw new HttpError(405, "Alleen POST is toegestaan.");
    await requireEditor(req, context);

    const input = await req.json();
    if (!String(input.topic || "").trim()) {
      throw new HttpError(400, "Vul een onderwerp in.");
    }

    return json({ package: await generateContentPackage(input) });
  } catch (error) {
    return handleError(error);
  }
};

export const config = {
  path: "/api/content-agent/generate",
  method: "POST",
};
