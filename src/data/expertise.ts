export type ExpertiseItem = {
  slug: string;
  accent: string;
  chipClass: "purple" | "blue" | "cyan";

  // content
  title: string;
  intro: string;

  whatYouGet: string[];
  steps: { nr: string; text: string }[];

  panel: { label: string; value: string }[];

  // NEW: decision info
  timeline: string;          // bv "3–5 weken"
  idealFor: string[];        // herkenning
  includes: string[];        // wat zit er in
  notIncluded: string[];     // wat niet (kort, eerlijk)

  costs: {
    price: string;           // "€1.000"
    isStartingAt?: boolean;  // default true
    description: string;
    features: string[];
  };

  // optional: CTA per item
  cta?: { primaryLabel?: string; primaryHref?: string; secondaryLabel?: string; secondaryHref?: string };
};

export const expertiseItems: ExpertiseItem[] = [

  {
    slug: "brand-basis",
    accent: "#7c3aed",
    chipClass: "purple",
    title: "Brand Basis",
    intro: "Een consistente visuele basis: logo, typografie, kleuren en richtlijnen. Zodat je merk direct professioneel voelt.",

    whatYouGet: [
      "Brand direction + look & feel",
      "Mini design system (buttons, spacing, componenten)",
      "Templates voor pagina’s en content",
    ],
    steps: [
      { nr: "01", text: "Analyse van doel, doelgroep en context" },
      { nr: "02", text: "Richtingen uitwerken (2–3 routes) en kiezen" },
      { nr: "03", text: "Uitwerking + styleguide + assets opleveren" },
    ],
    panel: [
      { label: "Deliverables", value: "Brand kit • UI kit • Styleguide" },
      { label: "Resultaat", value: "Consistentie + trust + sneller bouwen" },
      { label: "Wanneer", value: "als je merk net niet klopt of inconsistent is" },
    ],

    timeline: "2–4 weken",
    idealFor: ["Nieuwe identiteit", "Logo/stijl opschonen", "Consistentie over kanalen"],
    includes: [
      "Kleuren + typografie + usage rules",
      "Logo (polish of light refresh) + exports",
      "UI kit (basis componenten)",
      "Mini styleguide (PDF of Notion)",
      "2–3 templates (bv. hero/sectie/CTA)",
    ],
    notIncluded: [
      "Volledige rebrand met uitgebreid traject",
      "Illustraties op maat (veel)",
      "Printwerk/drukwerkbegeleiding",
    ],

    costs: {
      price: "€950 – €1.450",
      isStartingAt: false,
      description: "De visuele fundering die je overal consistent kunt doorvoeren.",
      features: ["Logo & merkstijl", "Basis UI kit", "Mini styleguide + exports"],
    },

    cta: { primaryLabel: "Plan kennismaking", primaryHref: "/contact", secondaryLabel: "Bekijk cases", secondaryHref: "/cases" },
  },
  {
   slug: "website-launch",
    accent: "#2F89FF",
    chipClass: "blue",
    title: "Website Launch",
    intro: "Marketing sites en landingspagina’s die snel laden, logisch lezen en gericht zijn op aanvragen.",

    whatYouGet: [
      "Homepage + diensten + contact (heldere flow)",
      "SEO basis: titles, headings, interne links",
      "Performance-first build (Astro)",
    ],
    steps: [
      { nr: "01", text: "Contentstructuur: wat moet waar staan en waarom" },
      { nr: "02", text: "Design uitwerken met focus op hiërarchie en rust" },
      { nr: "03", text: "Build + SEO basis + performance checks" },
    ],
    panel: [
      { label: "Perfect voor", value: "MKB • studios • personal brands" },
      { label: "Focus", value: "Design • snelheid • conversie" },
      { label: "Wanneer", value: "als je site traag, rommelig of weinig overtuigend is" },
    ],

    timeline: "3–5 weken (content bepaalt tempo)",
    idealFor: ["Nieuwe website", "Herbouw van rommelige site", "Landingspagina’s voor campagnes"],
    includes: [
      "Structuur + wireframe op hoofdlijnen",
      "Design (1–2 iteraties per pagina)",
      "Build (Astro) + basis SEO",
      "Formulier + leadflow (incl. dankpagina)",
      "Performance check (Core Web Vitals)",
    ],
    notIncluded: [
      "Grote copy-trajecten (kan via copywriter)",
      "Fotografie/video",
      "Hosting/onderhoud (los of abonnement)",
    ],

    costs: {
      price: "€2.450 – €3.750",
      isStartingAt: false,
      description: "Complete, snelle site die klaar is om te converteren.",
      features: ["Astro performance build", "SEO basis", "Leadflow & formulieren"],
    },

    cta: { primaryLabel: "Plan kennismaking", primaryHref: "/contact", secondaryLabel: "Bekijk cases", secondaryHref: "/cases" },
  },
  { slug: "technical-build",
    accent: "#22c55e",
    chipClass: "cyan",
    title: "Technical Build",
    intro: "Koppelingen, portalen en complexe flows. Gebouwd zodat het simpel voelt voor de gebruiker en onderhoudbaar blijft.",

    whatYouGet: [
      "Koppelingen (CRM, formulieren, analytics, automatisering)",
      "Maatwerk flows (filters, portals, dashboards)",
      "Schaalbare component-architectuur",
    ],
    steps: [
      { nr: "01", text: "Inventarisatie van flows, data en afhankelijkheden" },
      { nr: "02", text: "UX voor complexiteit: simpel aanvoelen voor de gebruiker" },
      { nr: "03", text: "Build met onderhoudbare componenten + QA checks" },
    ],
    panel: [
      { label: "Gebruikscases", value: "SaaS • platforms • portals" },
      { label: "Resultaat", value: "Schaalbaar zonder rommel" },
      { label: "Wanneer", value: "als je meer nodig hebt dan een standaard marketing site" },
    ],

    timeline: "4–8 weken (afhankelijk van scope)",
    idealFor: ["Portalen en dashboards", "Koppelingen met bestaande systemen", "Webapp-achtige flows"],
    includes: [
      "Flow + datainventarisatie",
      "Wireframes voor kritieke schermen",
      "Build + integraties + foutafhandeling",
      "Performance & accessibility checks",
      "Korte overdracht (beheer/updates)",
    ],
    notIncluded: [
      "Copywriting (volledig traject)",
      "Fotografie/video",
      "Doorlopende support/onderhoud (kan wél)",
      "Licenties van externe tools",
    ],

    costs: {
      price: "€4.900 – €12.000",
      isStartingAt: false,
      description: "Voor projecten waar techniek, data en flows leidend zijn.",
      features: ["Custom API integraties", "Portals & dashboards", "Uitgebreide QA / testing"],
    },

    cta: { primaryLabel: "Plan kennismaking", primaryHref: "/contact", secondaryLabel: "Bekijk cases", secondaryHref: "/cases" },
  },
];
