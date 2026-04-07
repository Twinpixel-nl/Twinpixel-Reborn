export type ExpertiseItem = {
  slug: string;
  accent: string;
  chipClass: "purple" | "blue" | "cyan";

  title: string;
  intro: string;

  whatYouGet: string[];
  steps: { nr: string; text: string }[];

  panel: { label: string; value: string }[];

  timeline: string;
  idealFor: string[];
  includes: string[];
  notIncluded: string[];

  costs: {
    price: string;
    isStartingAt?: boolean;
    description: string;
    features: string[];
  };

  cta?: {
    primaryLabel?: string;
    primaryHref?: string;
    secondaryLabel?: string;
    secondaryHref?: string;
  };
};

export const expertiseItems: ExpertiseItem[] = [

  {
    slug: "brand-basis",
    accent: "#7c3aed",
    chipClass: "purple",
    title: "Brand Basis",
    intro: "Een consistente visuele basis: logo, typografie, kleuren en richtlijnen. Zodat je merk direct professioneel voelt.",

    whatYouGet: [
      "Herkenbare visuele identiteit die vertrouwen uitstraalt",
      "Consistente stijl voor web en social",
      "Praktische basis om professioneel naar buiten te treden",
    ],
    steps: [
      { nr: "01", text: "Analyse van doel, doelgroep en context" },
      { nr: "02", text: "Richtingen uitwerken en samen kiezen" },
      { nr: "03", text: "Uitwerking en oplevering van alle assets" },
    ],
    panel: [
      { label: "Deliverables", value: "Brand kit • UI kit • Styleguide" },
      { label: "Resultaat", value: "Consistentie en professionele uitstraling" },
      { label: "Wanneer", value: "Als je merk nog niet scherp of consistent is" },
    ],

    timeline: "2–4 weken",
    idealFor: ["Nieuwe identiteit", "Logo/stijl verbeteren", "Consistentie over kanalen"],
    includes: [
      "Kleuren + typografie + richtlijnen",
      "Logo (polish of refresh) + exports",
      "Basis UI componenten",
      "Mini styleguide",
    ],
    notIncluded: [
      "Volledig rebrand traject",
      "Illustraties op maat",
      "Printwerk",
    ],

    costs: {
      price: "€250 – €450",
      isStartingAt: false,
      description: "De visuele basis waarmee alles samenkomt.",
      features: ["Logo & merkstijl", "Basis UI kit", "Styleguide + exports"],
    },

    cta: {
      primaryLabel: "Plan kennismaking",
      primaryHref: "/contact",
      secondaryLabel: "Bekijk cases",
      secondaryHref: "/cases",
    },
  },

  {
    slug: "website-launch",
    accent: "#2F89FF",
    chipClass: "blue",
    title: "Website Launch",
    intro: "Websites die vertrouwen opbouwen, snel laden en gericht zijn op aanvragen.",

    whatYouGet: [
      "Website die bezoekers overtuigt en richting actie stuurt",
      "Geoptimaliseerd voor Google en snelheid",
      "Duidelijke structuur en conversiegerichte flow",
    ],
    steps: [
      { nr: "01", text: "Structuur bepalen: wat moet waar en waarom" },
      { nr: "02", text: "Design met focus op rust en hiërarchie" },
      { nr: "03", text: "Build + SEO basis + performance checks" },
    ],
    panel: [
      { label: "Perfect voor", value: "MKB • studios • ondernemers" },
      { label: "Focus", value: "Design • snelheid • conversie" },
      { label: "Wanneer", value: "Als je site niet overtuigt of verouderd is" },
    ],

    timeline: "3–5 weken",
    idealFor: ["Nieuwe website", "Herbouw van bestaande site", "Landingspagina’s"],
    includes: [
      "Structuur en wireframe",
      "Design",
      "Build + SEO basis",
      "Formulier en leadflow",
      "Performance check",
    ],
    notIncluded: [
      "Uitgebreide copywriting",
      "Fotografie/video",
      "Hosting/onderhoud",
    ],

    costs: {
      price: "€1.450 – €2.750",
      isStartingAt: false,
      description: "Complete website die klaar is om te converteren.",
      features: ["Snelle build", "SEO basis", "Conversiegerichte flow"],
    },

    cta: {
      primaryLabel: "Plan kennismaking",
      primaryHref: "/contact",
      secondaryLabel: "Bekijk cases",
      secondaryHref: "/cases",
    },
  },

  {
    slug: "technical-build",
    accent: "#22c55e",
    chipClass: "cyan",
    title: "Webapplicaties & Tools",
    intro: "Voor organisaties die meer nodig hebben dan een website. We bouwen slimme tools en webapplicaties die processen automatiseren en beter laten werken.",

    whatYouGet: [
      "Slimme tools die handmatig werk automatiseren",
      "Webapplicaties die aansluiten op jouw processen",
      "Koppelingen met bestaande systemen en data",
    ],
    steps: [
      { nr: "01", text: "We brengen processen en logica scherp in kaart" },
      { nr: "02", text: "We vertalen dat naar een duidelijke en bruikbare flow" },
      { nr: "03", text: "We bouwen en testen tot het echt werkt in de praktijk" },
    ],
    panel: [
      { label: "Toepassingen", value: "Portals • dashboards • rekentools" },
      { label: "Resultaat", value: "Minder handmatig werk en meer overzicht" },
      { label: "Wanneer", value: "Als een website niet genoeg is" },
    ],

    timeline: "4–8 weken",
    idealFor: [
      "Interne tools of dashboards",
      "Rekentools of portals",
      "Koppelingen tussen systemen",
    ],
    includes: [
      "Analyse van processen en data",
      "Opzet van flows en schermen",
      "Bouw van webapplicatie of tool",
      "Koppelingen met systemen",
      "Tests en optimalisatie",
    ],
    notIncluded: [
      "Volledige copywriting",
      "Fotografie/video",
      "Doorlopend onderhoud",
      "Licenties externe tools",
    ],

    costs: {
      price: "€2.500 – €6.000",
      isStartingAt: false,
      description: "Voor maatwerk oplossingen die processen slimmer maken.",
      features: [
        "Webapplicaties op maat",
        "Integraties met systemen",
        "Grondig getest",
      ],
    },

    cta: {
      primaryLabel: "Plan kennismaking",
      primaryHref: "/contact",
      secondaryLabel: "Bekijk cases",
      secondaryHref: "/cases",
    },
  },
];