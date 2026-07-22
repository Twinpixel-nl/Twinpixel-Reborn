import { HttpError } from "./content-agent.mjs";

export async function generateSocialImage(pkg) {
  const baseUrl = Netlify.env.get("GOOGLE_GEMINI_BASE_URL");
  const apiKey = Netlify.env.get("GEMINI_API_KEY");
  if (!baseUrl || !apiKey) {
    throw new HttpError(503, "Gemini via Netlify AI Gateway is niet beschikbaar.");
  }

  const prompt = [
    "Maak een professionele vierkante editorial afbeelding voor een Nederlands technisch webbureau.",
    `Artikel: ${pkg.title}`,
    `Beeldrichting: ${pkg.visualBrief}`,
    "Stijl: premium, rustig, modern, abstracte digitale architectuur, subtiele diepte, donker marineblauw met helder elektrisch blauw en een klein warm accent.",
    "Geen tekst, geen letters, geen logo, geen watermerk, geen interfacescreenshot, geen herkenbare personen en geen cliché stockfoto.",
    "De afbeelding moet bruikbaar zijn als blogheader én als Instagram-post.",
  ].join("\n");

  const response = await fetch(
    `${baseUrl.replace(/\/$/, "")}/v1beta/models/gemini-3.1-flash-image:generateContent`,
    {
      method: "POST",
      headers: {
        "x-goog-api-key": apiKey,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
          responseModalities: ["TEXT", "IMAGE"],
        },
      }),
    },
  );

  if (!response.ok) {
    throw new HttpError(502, `Afbeeldingsmodel: ${(await response.text()).slice(0, 300)}`);
  }

  const result = await response.json();
  const parts = result.candidates?.[0]?.content?.parts || [];
  const imagePart = parts.find((part) => part.inlineData?.data);
  if (!imagePart) throw new HttpError(502, "Het afbeeldingsmodel gaf geen afbeelding terug.");

  return {
    base64: imagePart.inlineData.data,
    mimeType: imagePart.inlineData.mimeType || "image/png",
  };
}
