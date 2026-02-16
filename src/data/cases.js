// src/data/cases.js
import brittImg from '../assets/cases/by-britt-nails.webp';
import wurImg from '../assets/cases/wur.webp';
import vvdImg from '../assets/cases/vvdwageningen.webp';
import stadImg from '../assets/cases/stadspartijwageningen.webp';
import traumaImg from '../assets/cases/hettraumavoorbij.webp';
import bjornosImg from '../assets/cases/bjornos.webp';
import smmImg from '../assets/cases/socialmediamanager.webp';
import jongerenImg from '../assets/cases/jongerenraadwageningen.webp';
import staalImg from '../assets/cases/dewetvanstaal.webp';
import nullImg from '../assets/cases/svnull.webp';
import benneImg from '../assets/cases/debennekamer.webp';

export const cases = [
  // FEATURED (3)
  {
    slug: "by-britt-nails",
    title: "By Britt Nails",
    website: "https://bybrittnails.nl",
    description: "Dominantie in de lokale zoekresultaten door een SEO-gedreven design.",
    extra: "Het succes van By Britt Nails laat zien wat er gebeurt als techniek en uitstraling perfect samenkomen. Maar liefst 81% van haar bezoekers komt binnen via 'Organic Search'. In begrijpelijke taal betekent dit dat het overgrote deel van haar klanten haar vindt door simpelweg in Google te zoeken op termen als 'nagelstudio Wageningen'. Ze hoeft hiervoor niet te betalen voor dure advertenties en ze is niet afhankelijk van de grillen van social media algoritmes. De website doet het werk voor haar: dag en nacht trekt het nieuwe klanten aan die actief op zoek zijn naar haar diensten.",
    challenge: "Britt wilde de onbetwiste nummer 1 worden in Wageningen. Haar hoofdvraag was: 'Hoe zorg ik dat ik direct bovenaan sta als iemand een nagelstudio zoekt?' Tegelijkertijd zocht ze een digitale plek die de rust en luxe van haar studio uitstraalt, waar klanten in één oogopslag de prijzen kunnen zien en haar werk kunnen bewonderen zonder te hoeven zoeken op verschillende platformen.",
    challenge: "De hoofdvraag van Britt was: 'Hoe word ik de eerste optie in Google als men lokaal zoekt?' Tegelijkertijd wilde ze de drempel voor klanten verlagen door prijzen en voorbeeldfoto's direct op één plek te tonen, volledig in de stijl van haar paarse logo-identiteit.",
    tags: ["Lokaal SEO", "Web Design", "Conversion"],
    image: brittImg, 
    featured: true,
    accent: "#7c3aed", 
    client: "Britt Nails",
    year: "2025",
    stats: [
      { label: "Actieve gebruikers", value: "1.6k+", icon: "users" },
      { label: "Organic Search", value: "81%", icon: "chart" },
      { label: "Ranking Wageningen", value: "#2", icon: "plus" },
    ],
    overview: [
      { title: "Lokaal SEO Plan", desc: "Optimalisatie voor specifieke zoektermen zoals 'Nagelstudio Wageningen', waardoor de studio direct boven de concurrentie verschijnt." },
      { title: "Visuele Prijslijst", desc: "Realisatie van een 'all-in-one' overzicht waar prijzen en portfolio-foto's samenkomen in de luxe sfeer van het merk." }
    ],
    outcome: "Een website die niet alleen prachtig oogt, maar ook echt als acquisitie-kanaal dient. Britt is nu onafhankelijk van social media voor haar instroom van nieuwe klanten."
  },
  {
        slug: "wur-optare",
    title: "Wageningen University & Research Optare Tool",
    website: "https://wuroptarerekentool.netlify.app/",
    description: "Een high-end interactieve simulatietool voor complexe secundaire arbeidsvoorwaarden.",
    extra: "Binnen een grote organisatie als Wageningen University & Research (WUR) is het Optare-systeem een essentieel onderdeel van het arbeidscontract, maar door de honderden CAO-regels was het voor medewerkers vaak een 'black box'. Wij kregen de opdracht om dit complexe proces te digitaliseren. Het resultaat is een interactieve web-app die duizenden medewerkers helpt om met een paar klikken hun financiële keuzes te simuleren. Of het nu gaat om het uitruilen van vakantiedagen of het berekenen van reiskostenvergoedingen: de tool maakt de impact op het salarisstrookje direct visueel en begrijpelijk.",
    challenge: "De grootste uitdaging was de achterliggende logica. We moesten een enorme hoeveelheid variabelen en rekenregels uit de CAO vertalen naar een foutloos algoritme. Tegelijkertijd mocht de gebruiker niets merken van deze complexiteit. De interface moest aanvoelen als een moderne 'fintech' app: snel, overzichtelijk en betrouwbaar, zodat medewerkers zelfverzekerd hun keuzes kunnen maken zonder de HR-afdeling te hoeven raadplegen.",
    tags: ["Custom Tooling", "Fintech Design", "Digital Transformation"],
    image: wurImg,
    featured: true,
    accent: "#14b8a6",
    client: "WUR (HR-Afdeling)",
    year: "2025",
    stats: [
      { label: "Interacties", value: "3.8k+", icon: "plus" },
      { label: "Financieel Inzicht", value: "Direct", icon: "chart" },
      { label: "Gebruikers", value: "WUR Personeel", icon: "users" }
    ],
    overview: [
      { 
        title: "Van CAO naar Code", 
        desc: "We hebben de papieren bureaucratie omgezet in een slim rekenmodel. Door gebruik te maken van moderne webtechnieken worden vele combinaties aan keuzes binnen milliseconden berekend, waardoor de medewerker direct resultaat ziet." 
      },
      { 
        title: "Interactief Dashboard", 
        desc: "In plaats van statische formulieren hebben we gekozen voor sliders en visuele feedback. Medewerkers kunnen 'spelen' met hun arbeidsvoorwaarden en direct de impact op hun netto-inkomen zien, wat de betrokkenheid enorm heeft verhoogd." 
      }
    ],
    outcome: "Een professionele tool die de kloof tussen complexe HR-regels en de medewerker heeft gedicht. Het heeft niet alleen de medewerkerservaring verbeterd, maar ook de administratieve druk op de HR-afdeling aanzienlijk verlaagd."
  },
  {
    slug: "vvd-wageningen",
    title: "VVD Wageningen",
    website: "https://vvdwageningen.nl",
    description: "De digitale koploper in de lokale politiek: autoriteit door techniek.",
    extra: "Online aanwezigheid is voor een politieke partij geen luxe, maar een noodzaak. Voor de VVD Wageningen hebben we een platform gebouwd dat technisch zo superieur is, dat Google het direct herkent als de meest relevante bron voor lokale politiek. Zoek je in Wageningen op de term 'partij Wageningen'? Dan staat de VVD op nummer 1. Dit is geen toeval, maar het resultaat van een strategie waarbij we een razendsnel fundament (Astro) hebben gecombineerd met een messcherpe content-structuur. Hierdoor is de partij niet alleen vindbaar, maar ook de onbetwiste digitale autoriteit in de regio.",
    challenge: "Politieke partijen hebben vaak te maken met een enorme hoeveelheid 'zware' documenten en complexe standpunten. De uitdaging was om al deze data zo te structureren dat zoekmachines de relevantie direct begrijpen, terwijl de burger op een telefoon binnen drie seconden het antwoord op zijn vraag vindt. Het moest een platform worden dat autoriteit uitstraalt, maar tegelijkertijd laagdrempelig en extreem snel is.",
    tags: ["Politiek", "Local SEO", "UX"],
    image: vvdImg,
    featured: true,
    accent: "#2F89FF",
    client: "VVD Wageningen",
    year: "2025",
    stats: [
      { label: "Google Ranking", value: "#1", icon: "plus" },
      { label: "Mobiel Bereik", value: "82%", icon: "chart" },
      { label: "Laadsnelheid", value: "Instant", icon: "users" }
    ],
   overview: [
      { 
        title: "SEO-Architectuur", 
        desc: "Door gebruik te maken van semantische code en een 'zero-JS' benadering, begrijpt Google de hiërarchie van de site beter dan die van de concurrentie. Dit heeft geresulteerd in de nummer 1 positie op de meest relevante lokale zoekterm." 
      },
      { 
        title: "Kiezer-Centraal Design", 
        desc: "De interface is volledig geoptimaliseerd voor de 'snelle kiezer'. Standpunten zijn gecategoriseerd op thema, waardoor informatie niet alleen vindbaar is voor Google, maar ook direct bruikbaar voor de burger." 
      }
    ],
    outcome: "Een digitaal hoofdkwartier dat de VVD Wageningen direct bovenaan de zoekresultaten heeft geplaatst. De partij is nu de meest zichtbare politieke kracht in de stad, met een website die sneller laadt dan die van elke andere lokale fractie."
  },

  // REST (9)
  {
    slug: "stadspartij-wageningen",
    title: "Stadspartij Wageningen",
    website: "https://stadspartijwageningen.nl",
    description: "Informatief portaal voor lokale politiek en verkiezingen.",
    challenge: "De oude website was verouderd en onoverzichtelijk. De Stadspartij had een platform nodig dat meebeweegt met de actualiteit.",
    tags: ["Politiek", "Local SEO", "UX"],
    image: stadImg,
    featured: false,
    accent: "#2F89FF",
    client: "Stadspartij Wageningen",
    year: "2025",
    stats: [{ label: "Groei Gebr.", value: "+115,8%", icon: "chart" }],
    overview: [{ title: "Verkiezingsmodules", desc: "Speciale pagina's ontwikkeld om partijthema's uit te lichten." }],
    outcome: "Maximale lokale zichtbaarheid en een platform dat burgerparticipatie inzichtelijk maakt."
  },
  {
    slug: "hettraumavoorbij",
    title: "Het trauma voorbij",
    website: "https://hettraumavoorbij.nl",
    description: "Een schaalbaar platform om specialistische kennis te delen met grote groepen.",
    extra: "Als psycholoog liep de eigenaresse van 'Het trauma voorbij' tegen een fysieke grens aan: er zaten simpelweg niet genoeg uren in haar dag om iedereen 1-op-1 te helpen. Wij hebben dit opgelost door een academy-omgeving te creëren waar zij haar expertise kan delen met grote groepen tegelijk. Sinds de lancering hebben al meer dan 370 unieke gebruikers hun weg naar het platform gevonden, wat resulteerde in ruim 1.800 actieve interacties. Zij kan nu eenvoudig zelf nieuwe cursussen en video's toevoegen om haar bereik te vergroten, terwijl wij op de achtergrond fungeren als haar vaste technische partner voor support en onderhoud.",
    challenge: "De hoofdvraag was: 'Hoe kan ik mijn kennis delen met een groter publiek zonder dat mijn agenda overloopt?' Er was behoefte aan een professionele omgeving waar grote groepen cliënten zelfstandig aan de slag kunnen, gecombineerd met de zekerheid dat de techniek altijd blijft draaien.",
    tags: ["Online Academy", "Video Platform", "Zorg"],
    image: traumaImg,
    featured: true,
    accent: "#14b8a6", 
    client: "Het trauma voorbij",
    year: "2025",
    stats: [
      { label: "Unieke gebruikers", value: "370+", icon: "users" }, // Uit je screenshot
      { label: "Interacties", value: "1.8k+", icon: "chart" }, // Totaal acties uit screenshot
      { label: "Support", value: "Technisch vangnet", icon: "plus" } // Jouw rol
    ],
    overview: [
      { 
        title: "Video-Academy voor Groepen", 
        desc: "Een overzichtelijke cursusomgeving waar cliënten op hun eigen tempo modules kunnen volgen, waardoor de psycholoog honderden mensen tegelijk kan bedienen." 
      },
      { 
        title: "Zelfstandig Contentbeheer", 
        desc: "De omgeving is zo ingericht dat de klant zonder technische kennis zelfstandig nieuwe lessen en video's kan uploaden, waardoor het platform met haar praktijk meegroeit." 
      }
    ],
    outcome: "Door de focus te verleggen van uurtje-factuurtje naar een schaalbaar online model, helpt zij nu grotere groepen mensen met minder tijdsdruk. Wij zorgen dat zij zich volledig kan focussen op haar cliënten, terwijl wij de techniek bewaken."
  },
  {
   slug: "bjornos",
    title: "DJ Bjornos",
    website: "https://bjornos.nl",
    description: "High-performance portfolio voor een elektronische muziekartiest.",
    extra: "Een DJ-website moet de energie van de muziek reflecteren zonder in te leveren op techniek. Voor Bjornos bouwden we een visueel krachtig platform dat direct streamt vanaf SoundCloud en Spotify.",
    challenge: "De wens was een 'vette' website die direct indruk maakt, maar tegelijkertijd extreem snel laadt op mobiele apparaten (bijvoorbeeld op festivals). De integratie van externe muziekplayers moest naadloos en gebruiksvriendelijk zijn.",
    tags: ["Entertainment", "Performance", "Music"],
    image: bjornosImg,
    featured: false,
    accent: "#7c3aed",
    client: "Bjornos",
    year: "2025",
    stats: [
      { label: "Response Time", value: "0.03s", icon: "chart" },
      { label: "Lighthouse", value: "100/100", icon: "plus" },
      { label: "Integraties", value: "Spotify & soundcloud", icon: "users" }
    ],
    overview: [
      { title: "Audio Integration", desc: "Directe API-koppelingen met SoundCloud en Spotify voor een naadloze luisterervaring." },
      { title: "Edge Performance", desc: "Geadviseerd en gebouwd op een architectuur die een responstijd van 0.03 seconden garandeert." }
    ],
    outcome: "Een flitsende, moderne showcase die de identiteit van de artiest versterkt en wereldwijd razendsnel toegankelijk is."
  },
  {
    slug: "social-media-manager",
    title: "Socialmediamanager.nl",
    website: "https://socialmediamanager.nl",
    description: "Van losse gedachte naar een high-end autoriteitsmerk in de marketingwereld.",
    extra: "In een verzadigde markt als social media marketing is je visuele identiteit je belangrijkste visitekaartje. Voor socialmediamanager.nl hebben we niet alleen een website gebouwd, we hebben een volledig merk neergezet. Van het allereerste logo-ontwerp tot een compleet brandbook met kleurcodes, typografie en visuele richtlijnen: alles is tot in de puntjes op elkaar afgestemd. Het resultaat is een platform dat onmiddellijk autoriteit en professionaliteit uitstraalt, waardoor de klant met vol vertrouwen de grootste opdrachten kan binnenhalen.",
    challenge: "De opdracht was om een identiteit te creëren die zowel creativiteit als zakelijke stabiliteit uitstraalt. In een wereld waar iedereen zich 'expert' noemt, moest socialmediamanager.nl visueel boven het maaiveld uitsteken. De uitdaging was om een balans te vinden tussen een flitsend modern design en een technisch fundament dat razendsnel laadt.",
    tags: ["Full Branding", "Brandbook", "Web Design"],
    image: smmImg,
    featured: false,
    accent: "#7c3aed",
    client: "SMM Platform",
    year: "2025",
    stats: [
      { label: "Huisstijl", value: "100% Uniek", icon: "chart" }, // Focus op kwaliteit
      { label: "Identiteit", value: "Full Brandbook", icon: "chart" }, // Jouw extra werk benadrukken
    ],
    overview: [
      { 
        title: "Complete Merk-Identiteit", 
        desc: "Ontwikkeling van een volledig brandbook. Hierin hebben we de visuele koers bepaald die in alle uitingen van het bedrijf terugkomt, wat zorgt voor een ijzersterke herkenbaarheid." 
      },
      { 
        title: "High-End UI Design", 
        desc: "Een pixel-perfect ontwerp waarbij elk detail is afgestemd op de nieuwe huisstijl. De focus lag hier op het creëren van een 'wow-effect' bij de eerste kennismaking." 
      }
    ],
    outcome: "Een compleet nieuwe merkbeleving die de klant positioneert als een top-speler in zijn vakgebied. De website is nu niet alleen een informatiebron, maar een krachtig bewijs van de design-standaarden van het bedrijf."
  },
  {
     slug: "jongerenraad-wageningen",
    title: "Jongerenraad Wageningen",
    website: "https://jrwageningen.nl",
    description: "Van een standaard WordPress-site naar een krachtig en herkenbaar jongerenmerk.",
    extra: "De Jongerenraad Wageningen werkte voorheen met een simpele WordPress-website die weinig eigen identiteit uitstraalde. Wij hebben dit volledig getransformeerd door eerst terug te gaan naar de tekentafel voor een complete branding. Van een nieuw logo tot een energiek kleurenpalet en een moderne beeldtaal: we hebben een merk neergezet dat spreekt naar de jeugd van Wageningen. Dit hebben we vertaald naar een razendsnel platform dat niet meer aanvoelt als een stoffig politiek orgaan, maar als een dynamisch centrum voor jongerenparticipatie.",
    challenge: "De grootste uitdaging was om politiek toegankelijk en aantrekkelijk te maken voor jongeren. De oude website was statisch en mobiel onvriendelijk. Er was behoefte aan een omgeving die energie uitstraalt, waarbij informatie over evenementen en standpunten binnen één klik vindbaar is op een smartphone.",
    tags: ["Full Branding", "Youth Engagement", "Web Design"],
    image: jongerenImg,
    featured: false, // Je kunt deze op true zetten als je hem in de top 3 wilt
    accent: "#2F89FF",
    client: "Jongerenraad Wageningen",
    year: "2025",
    stats: [
      { label: "Mobiel gebruik", value: "85%", icon: "chart" },
      { label: "Identiteit", value: "100% Custom", icon: "plus" },
      { label: "Platform", value: "Modern Web", icon: "users" }
    ],
    overview: [
      { 
        title: "Complete Branding Sprint", 
        desc: "Ontwikkeling van een nieuwe visuele identiteit (logo, typografie, kleuren) die serieus genoeg is voor de gemeente, maar fris genoeg voor de doelgroep." 
      },
      { 
        title: "UX voor de Jeugd", 
        desc: "Een mobile-first interface die breekt met de traditionele politieke lay-out, met focus op snelle interactie en heldere call-to-actions." 
      }
    ],
    outcome: "De Jongerenraad heeft nu een professionele uitstraling die de betrokkenheid onder jongeren aanzienlijk heeft vergroot. Het platform fungeert nu als een volwaardig communicatiekanaal tussen de jeugd en de lokale overheid."
  },
  {
    slug: "de-wet-van-staal",
    title: "De Wet van Staal",
    website: "https://dewetvanstaal.nl",
    description: "Een robuust digitaal portfolio voor industrieel vakmanschap en lastechniek.",
    extra: "De Wet van Staal is het merk van Harvey Meurs, een vakman die letterlijk met vuur en staal werkt. Harvey had een platform nodig dat net zo onverwoestbaar en strak aanvoelt als zijn eigen werk. Geen standaard website, maar een visueel krachtig portfolio om zijn laswerk en zijn expertise als professional te verkopen. Wij hebben een omgeving gecreëerd waar de details van zijn vakmanschap — van de perfecte lasnaad tot het eindproduct — de hoofdrol spelen, waardoor hij direct indruk maakt op high-end zakelijke klanten.",
    challenge: "Hoe vertaal je een rauw, fysiek ambacht naar een verfijnde digitale ervaring? De uitdaging was om Harvey niet alleen als 'iemand die last' te positioneren, maar als een betrouwbare partner in metaalbewerking. De site moest stoer en industrieel zijn, maar tegelijkertijd de precisie en professionaliteit uitstralen die nodig is voor grote opdrachten.",
    tags: ["Industrieel Design", "Portfolio", "Personal Branding"],
    image: staalImg,
    featured: false,
    accent: "#2F89FF", // Een krachtig, industrieel blauw
    client: "Harvey Meurs",
    year: "2025",
    stats: [
      { label: "Design", value: "Industrieel", icon: "chart" },
      { label: "Focus", value: "Portfolio & Expertise", icon: "plus" },
    ],
    overview: [
      { 
        title: "Visuele Showcase", 
        desc: "Focus op high-quality fotografie van projecten, waardoor potentiële klanten direct de kwaliteit van het laswerk kunnen beoordelen." 
      },
      { 
        title: "Personal Brand Building", 
        desc: "Positionering van Harvey als hét gezicht achter de kwaliteit, wat zorgt voor vertrouwen en een kortere weg naar een offerte-aanvraag." 
      }
    ],
    outcome: "Een technisch visitekaartje dat staat als een huis. Harvey heeft nu een professionele showcase waarmee hij zijn werk en zichzelf als expert in de markt zet, wat de drempel voor zakelijke aanvragen aanzienlijk heeft verlaagd."
  },
  {
    slug: "sv-null",
    title: "SV Null Platform",
    website: "https://svnull.nl",
    description: "Het digitale zenuwcentrum voor de modernste studentenvereniging van Ede.",
    extra: "Voor SV Null was de uitdaging helder: stop de versnippering van informatie. Van losse Excel-lijsten en losse formulieren zijn we overgestapt naar één centraal dashboard. Dit platform digitaliseert de volledige ledenadministratie, evenementenregistratie en interne communicatie. Het resultaat is een omgeving die niet alleen technisch onberispelijk is voor de IT-studenten die het gebruiken, maar ook een bestuur dat 60% minder tijd kwijt is aan handmatige administratie.",
    challenge: "Hoe beheer je een groeiende vereniging van honderden studenten zonder de menselijke maat te verliezen? De oude systemen waren traag en foutgevoelig. Er was behoefte aan een robuust portaal dat veilig omgaat met persoonsgegevens, razendsnel laadt en een moderne UI biedt die aansluit bij de tech-identiteit van de vereniging.",
    tags: ["Dashboard", "Ledenbeheer", "Automatisering"],
    image: nullImg,
    featured: false,
    accent: "#14b8a6",
    client: "SV Null Bestuur",
    year: "2025",
    stats: [
      { label: "Admin-tijd", value: "-60%", icon: "chart" }, // De grootste winst voor het bestuur
      { label: "Uptime", value: "99.9%", icon: "plus" }, // Belangrijk voor IT-studenten
      { label: "Ledeninteractie", value: "Direct", icon: "users" }
    ],
    overview: [
      { 
        title: "Gecentraliseerd Dashboard", 
        desc: "Alle vitale informatie — van inschrijvingen tot evenementen — op één plek, toegankelijk voor zowel het bestuur als de leden met specifieke rechten." 
      },
      { 
        title: "Automatiseringstools", 
        desc: "Slimme koppelingen die handmatige taken zoals mailings en data-verwerking automatiseren, waardoor er meer tijd overblijft voor de verenigingsactiviteiten." 
      }
    ],
    outcome: "SV Null beschikt nu over een schaalbaar platform dat meegroeit met de vereniging. De overstap naar een professionele digitale structuur heeft gezorgd voor meer overzicht, een hogere betrokkenheid van leden en een enorme efficiëntieslag voor het bestuur."
  },
    {
    slug: "de-bennekamer",
    title: "De Bennekamer",
    website: "https://debennekamer.nl",
    description: "Een gastvrij digitaal portaal voor de buurt: sneller, netter en toegankelijker.",
    extra: "De Bennekamer is het kloppend hart van de wijk, maar de oude website vormde een drempel in plaats van een brug. Het platform was traag en informatie over activiteiten was moeilijk te vinden. Wij hebben de volledige site herzien met één hoofddoel: rust en snelheid. Door de chaos te vervangen voor een strak design en een eenvoudig, betrouwbaar contactformulier toe te voegen, is de drempel voor buurtbewoners om contact op te nemen nu lager dan ooit. Het is nu een plek waar iedere generatie direct de weg vindt naar wijkactiviteiten en informatie.",
    challenge: "De vraag was helder: 'Maak het netter en sneller'. De oude omgeving was verouderd en onoverzichtelijk, waardoor belangrijke informatie over zaalhuur en wijkagenda's niet overkwam. Er was behoefte aan een technisch solide basis die op elk apparaat, van tablet tot smartphone,  direct een professionele en warme indruk achterlaat.",
    tags: ["Lokaal Platform", "UX Design", "Toegankelijkheid"],
    image: benneImg,
    featured: false,
    accent: "#7c3aed",
    client: "Stichting De Bennekamer",
    year: "2026",
    stats: [
      { label: "Snelheid", value: "Instant", icon: "plus" },
      { label: "Gebruiksgemak", value: "Hoog", icon: "users" },
    ],
    overview: [
      { 
        title: "Gebruiksvriendelijke Structuur", 
        desc: "Een logische indeling van de wijkagenda en faciliteiten, zodat bezoekers binnen twee klikken de gewenste informatie of de juiste contactpersoon vinden." 
      },
      { 
        title: "Interactief Contactformulier", 
        desc: "Realisatie van een modern en veilig formulier voor zaalverhuur en algemene vragen, wat de administratieve verwerking voor de vrijwilligers enorm vergemakkelijkt." 
      }
    ],
    outcome: "De Bennekamer beschikt nu over een digitaal visitekaartje dat de professionaliteit van de stichting onderstreept. De site laadt flitsendsnel, ziet er netjes uit en nodigt buurtbewoners uit om actief deel te nemen aan het wijkleven."
  },
];