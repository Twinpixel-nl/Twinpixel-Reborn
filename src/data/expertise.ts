export type ExpertiseItem = {
  slug: string;
  accent: string;
  chipClass: "purple" | "blue" | "cyan";
  title: string;
  intro: string;

  whatYouGet: string[];
  steps: { nr: string; text: string }[];

  panel: { label: string; value: string }[];
  costs: {
    price: string;
    description: string;
    features: string[];
  };
};

export const expertiseItems: ExpertiseItem[] = [
  {
    slug: "technical-websites",
    accent: "#22c55e",
    chipClass: "cyan",
    title: "Technical Websites",
    intro:
      "Custom integraties, complexe flows en webapp-achtige ervaringen — strak gebouwd en onderhoudbaar.",
      
    whatYouGet: [
      "Integraties (CRM, forms, analytics, automatisering)",
      "Custom UX flows (filters, portals, dashboards)",
      "Schaalbare component-architectuur",
    ],
    steps: [
      { nr: "01", text: "Inventarisatie van flows, data en afhankelijkheden" },
      { nr: "02", text: "UX voor complexiteit: simpel aanvoelen voor de gebruiker" },
      { nr: "03", text: "Build met onderhoudbare componenten + tests/checks" },
    ],
    panel: [
      { label: "Gebruikscases", value: "SaaS • platforms • portals" },
      { label: "Resultaat", value: "Schaalbaar zonder rommel" },
      { label: "Wanneer", value: "als je meer nodig hebt dan \"alleen pagina's\"" },
    ],
        costs: {
      price: "€2.500",
      description: "Voor complexe projecten waarbij techniek en data centraal staan.",
      features: ["Custom API integraties", "Dashboarding & Portals", "Uitgebreide QA & Testing"]
    }

  },
  {
    slug: "standard-websites",
    accent: "#2F89FF",
    chipClass: "blue",
    title: "Standard Websites",
    intro:
      "Strakke marketing sites en landingspagina's die snel laden, logisch lezen en gericht zijn op leads.",
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
    costs: {
      price: "€1.000",
      description: "Een complete, snelle website die klaar is om te converteren.",
      features: ["Astro Performance Build", "SEO Optimalisatie", "Lead-capture formulieren"]
    }
  },
  {
    slug: "branding",
    accent: "#7c3aed",
    chipClass: "purple",
    title: "Branding",
    intro:
      "Een identiteit die overal consistent is: logo, typografie, kleuren, componenten en tone of voice. Zodat je merk direct professioneel voelt.",
    whatYouGet: [
      "Brand direction + look & feel",
      "Design system (buttons, spacing, componenten)",
      "Templates voor pagina's en content",
    ],
    steps: [
      { nr: "01", text: "Analyse van doel, doelgroep en context" },
      { nr: "02", text: "Ontwerp & structuur met focus op helderheid" },
      { nr: "03", text: "Uitwerking en iteratie op details" },
    ],
    panel: [
      { label: "Deliverables", value: "Brand kit • UI kit • Styleguide" },
      { label: "Resultaat", value: "Consistentie + trust + sneller bouwen" },
      { label: "Wanneer", value: "als je merk \"net niet\" voelt of inconsistent is" },
    ],
     costs: {
      price: "€500",
      description: "De visuele fundering voor je bedrijf of product.",
      features: ["Logo & Visual Identity", "UI Kit / Design System", "Brand Styleguide"]
    }
  },
];