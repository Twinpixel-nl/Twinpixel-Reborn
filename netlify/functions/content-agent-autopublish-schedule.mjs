export default async (_req, context) => {
  const secret = Netlify.env.get("CONTENT_AUTOMATION_SECRET");
  if (!secret) {
    console.error("CONTENT_AUTOMATION_SECRET ontbreekt.");
    return;
  }

  const siteUrl = context.site?.url || Netlify.env.get("URL");
  const response = await fetch(
    new URL("/.netlify/functions/content-agent-autopublish-background", siteUrl),
    {
      method: "POST",
      headers: { "x-automation-secret": secret },
    },
  );

  if (!response.ok && response.status !== 202) {
    console.error(`Autopublish starten mislukte: ${response.status}`);
  }
};

export const config = {
  schedule: "0 7 * * *",
};
