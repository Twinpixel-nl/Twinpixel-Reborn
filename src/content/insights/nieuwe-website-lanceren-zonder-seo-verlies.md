---
title: "Nieuwe website lanceren zonder SEO-verlies: zo pak je een websitemigratie aan"
description: "Een praktische gids voor mkb en organisaties die een nieuwe website lanceren zonder onnodig organisch verkeer, waardevolle URL’s en bestaande vindbaarheid kwijt te raken."
date: 2026-07-22
draft: false
image:
  src: "/uploads/agent/nieuwe-website-lanceren-zonder-seo-verlies.png"
  alt: "Laptop met een overzichtelijke website-migratieplanning, URL-schema’s en technische controles op een bureau"
ogImage: "/uploads/agent/nieuwe-website-lanceren-zonder-seo-verlies.png"
category: "SEO"
tags: ["technische SEO", "websitemigratie", "redirects", "website laten maken"]
readingTime: "6 min leestijd"
---

Een nieuwe website lanceren zonder verlies van organisch verkeer vraagt meer dan een nieuw ontwerp online zetten. Zeker als de bestaande site al bezoekers, aanvragen of belangrijke posities in Google oplevert.

De kern is eenvoudig: zorg dat zoekmachines én bezoekers elke oude, waardevolle pagina kunnen terugvinden op een passende nieuwe bestemming. In de praktijk gaat dat vaak mis door ontbrekende redirects, gewijzigde content of een testomgeving die per ongeluk wordt geïndexeerd.

Hieronder staat een praktische aanpak voor een websitemigratie waarbij SEO vanaf het begin onderdeel is van het project.

## Begin met de vraag: wat mag niet verdwijnen?

Niet iedere oude pagina is even belangrijk. Een verouderd nieuwsbericht zonder verkeer hoeft niet per se mee. Maar pagina’s die relevante bezoekers trekken, backlinks hebben of aanvragen ondersteunen, verdienen aandacht.

Maak vóór ontwerp en ontwikkeling een inventarisatie van:

- alle bestaande URL’s;
- pagina’s met organisch verkeer;
- pagina’s waarop je gevonden wordt voor relevante zoekvragen;
- pagina’s met externe links;
- conversiepagina’s, zoals diensten, cases, contact en downloads;
- media, documenten en eventueel lokale landingspagina’s.

Een sitemap alleen is hiervoor meestal onvoldoende. Daarin staan geregeld oude URL’s niet meer, terwijl die nog wel externe links of bezoekers kunnen hebben. Gebruik daarom beschikbare data uit bijvoorbeeld analytics, Search Console, een crawl van de bestaande site en het CMS.

Het doel is niet om alles blind te behouden. Het doel is om bewuste keuzes te maken. Een oude pagina over een dienst die je niet meer aanbiedt, hoeft niet naar een willekeurige nieuwe pagina. Soms is verwijderen de juiste keuze. Maar ook dan wil je weten wat de gevolgen zijn.

## Maak een URL-mapping voordat er gebouwd wordt

Een URL-mapping is een overzicht waarin elke relevante oude URL een bestemming krijgt. Dit document is een van de belangrijkste onderdelen van een SEO-veilige migratie.

Werk bij voorkeur met deze kolommen:

| Oude URL | Nieuwe URL | Actie | Toelichting |
| --- | --- | --- | --- |
| /oude-dienst | /expertise/dienst | 301 redirect | Dienst blijft bestaan, structuur verandert |
| /blog/oud-onderwerp | /insights/nieuw-onderwerp | 301 redirect | Nieuwe inhoud behandelt dezelfde zoekintentie beter |
| /vervallen-dienst | - | 410 of 404 | Dienst bestaat niet meer, geen logisch alternatief |

De beste redirect is bijna altijd een inhoudelijk logische redirect. Een bezoeker die op een oude pagina over onderhoudscontracten landt, verwacht geen algemene homepage. Stuur die persoon naar een actuele onderhoudspagina, als die er is.

Het doorsluizen van veel oude URL’s naar de homepage is een bekende noodoplossing. Voor gebruikers is dat verwarrend en voor zoekmachines is het een zwak signaal. Het kan bovendien waardevolle context van de oude pagina verloren laten gaan.

## Verander structuur, maar niet zonder reden

Een nieuwe navigatie en een helderder URL-patroon kunnen een website verbeteren. Bijvoorbeeld van:

`/diensten/websites/website-laten-maken-wageningen.html`

naar:

`/website-laten-maken-wageningen`

Dat is prima, mits je de oude URL permanent doorstuurt. Vermijd alleen grote wijzigingen die niets toevoegen. Als tegelijk de domeinnaam, URL-structuur, content, navigatie en techniek veranderen, wordt het lastiger om eventuele problemen te herleiden.

Moet ook het domein veranderen? Dan is extra zorg nodig. Houd de oude domeinregistratie actief, plaats server-side 301 redirects en controleer of elke belangrijke oude URL naar de juiste nieuwe URL verwijst. Een domeinwissel is geen moment om ook nog zonder plan pagina’s samen te voegen of teksten drastisch in te korten.

## Behoud de zoekintentie achter belangrijke pagina’s

SEO-migraties mislukken niet alleen door techniek. Een nieuwe website kan technisch netjes live gaan en toch organisch verkeer verliezen doordat belangrijke inhoud is verdwenen.

Stel dat een huidige pagina goed gevonden wordt op een specifieke dienstvraag. In het nieuwe ontwerp krijgt die dienst slechts een korte alinea op een algemene overzichtspagina. Dan is de kans groot dat zowel bezoekers als zoekmachines minder goed begrijpen waar de pagina over gaat.

Controleer bij iedere belangrijke pagina:

- beantwoordt de nieuwe pagina nog dezelfde hoofdvraag?
- is de dienst, oplossing of doelgroep nog duidelijk benoemd?
- blijft de inhoud voldoende concreet?
- staan belangrijke interne links nog op logische plekken?
- is de call-to-action passend bij de fase van de bezoeker?

Kopiëren is niet altijd nodig. Verbeteren mag en moet vaak. Maar herschrijf vanuit dezelfde zoekintentie, niet uitsluitend vanuit een nieuw visueel concept.

Een goede migratie kan juist een kans zijn om dunne, dubbele of verouderde content te verbeteren. Combineer vergelijkbare pagina’s wanneer dat logisch is, maar zorg dat de nieuwe pagina het onderwerp dan aantoonbaar volledig behandelt.

## Technische punten die vóór livegang gecontroleerd moeten worden

Een testomgeving mag niet zomaar in de zoekresultaten terechtkomen. Tegelijk wil je voorkomen dat de livewebsite na lancering per ongeluk geblokkeerd blijft voor zoekmachines.

Controleer daarom minimaal deze punten:

### Indexeerbaarheid

Tijdens ontwikkeling is het normaal om een testsite af te schermen. Gebruik daarvoor liefst toegangsbeveiliging. Een `noindex`-instelling kan aanvullend nuttig zijn, maar moet vóór of direct bij livegang bewust worden gecontroleerd.

Kijk na lancering of belangrijke pagina’s geen ongewenste `noindex`-tag hebben en of `robots.txt` geen essentiële delen van de site blokkeert.

### Canonical-tags

Elke indexeerbare pagina hoort doorgaans een canonical naar zichzelf te hebben, tenzij er bewust een alternatieve voorkeursversie is. Canonicals die nog naar het testdomein of naar oude URL’s wijzen, zijn een veelgemaakte migratiefout.

### Redirects

Gebruik permanente, server-side 301 redirects voor verhuizende pagina’s. Vermijd redirectketens zoals oud naar tussenpagina naar nieuwe pagina. Eén directe stap is overzichtelijker en sneller.

Test niet alleen een paar handmatige voorbeelden. Controleer de volledige URL-mapping na oplevering.

### Sitemap en interne links

Genereer een nieuwe XML-sitemap met uitsluitend de URL’s die je geïndexeerd wilt hebben. Dien deze na livegang in via Search Console, als dat beschikbaar is.

Werk ook interne links bij. Een menu of artikel dat nog naar een oude URL verwijst, veroorzaakt onnodige redirects. Dat lijkt klein, maar op grotere sites stapelt het op en maakt het beheer rommeliger.

### Performance en mobiele weergave

Een redesign voegt gemakkelijk grote beelden, animaties, externe scripts en zware lettertypes toe. Dat kan de gebruikerservaring vertragen, vooral op mobiel of bij minder stabiel internet.

Test belangrijke templates op echte mobiele schermen: de homepage, dienstpagina, case, artikel en contactformulier. Controleer of formulieren werken, knoppen goed bereikbaar zijn en inhoud niet verspringt tijdens het laden. Performance is niet alleen een technisch detail; het bepaalt of een geïnteresseerde bezoeker doorleest of afhaakt.

## Plan de lancering als een controleerbaar moment

Een migratie is geen knop die je vrijdagmiddag indrukt en maandag bekijkt. Plan ruimte voor controles direct na livegang en in de weken erna.

Een praktisch launchplan bevat:

1. een volledige back-up van de bestaande site;
2. een definitieve URL-mapping;
3. een technische pre-launchcontrole op de testomgeving;
4. een moment waarop redirects worden geactiveerd;
5. controles op formulieren, analytics, consent en foutpagina’s;
6. monitoring van crawlproblemen, 404’s en indexering;
7. een korte evaluatie van verkeer en belangrijke conversies.

Let bij de eerste controles vooral op onverwachte 404-fouten. Sommige komen van oude campagnes, bookmarks of externe websites en stonden mogelijk niet in je eerste inventarisatie. Voeg voor relevante URL’s alsnog een passende redirect toe.

Schommelingen direct na een lancering zijn mogelijk, maar geen reden om af te wachten wanneer er duidelijke technische fouten zijn. Een geblokkeerde site, ontbrekende redirects of foutieve canonicals moeten meteen worden opgelost.

## Wanneer is een pagina verwijderen beter dan redirecten?

Niet elke oude pagina verdient een nieuwe bestemming. Verwijderen kan passend zijn als de inhoud verouderd is, de dienst definitief vervallen is en er geen zinvol alternatief bestaat.

Kies dan niet automatisch voor een redirect naar de homepage. Een 404 of 410 is soms eerlijker: de gevraagde inhoud bestaat niet meer. De afweging hangt af van de waarde van de oude URL, de verwachting van de bezoeker en de beschikbaarheid van een echt relevant alternatief.

Dat vraagt om redactie, niet alleen om techniek. Juist daarom werkt SEO het best wanneer het onderdeel is van structuur, content en ontwikkeling — niet als controlelijstje op de dag voor livegang.

## Een nieuwe site is een kans, geen SEO-reset

Een nieuwe website hoeft geen verlies aan vindbaarheid te betekenen. Met een goede inventarisatie, doordachte URL-mapping, relevante content en zorgvuldige technische controle leg je juist een sterker fundament voor de komende jaren.

Overweeg je een nieuwe website, webapp of migratie? Bekijk onze [expertise](/expertise) of neem rustig [contact](/contact) op. Dan kijken we samen welke onderdelen voor jouw huidige site echt beschermd moeten worden.
