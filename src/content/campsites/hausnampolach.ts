import type { CampsiteConfig } from "../types";

/**
 * Haus & Camperplatz Nampolach — Nampolach 3, 9624 Egg bei Hermagor, Kärnten.
 * Alle Texte/Fakten belegt aus hausnampolach.com (Stand-Scrape 2026-06; DE/EN/NL-Seiten).
 * Bilder = ausschließlich eigene Fotos der Familie de Jong in /public/campsites/hausnampolach/.
 *
 * EHRLICH:
 * - KEIN See am Platz: der Pressegger See liegt 3 km entfernt → nie als "am See" geframt,
 *   `see` bleibt weg; in der Copy klar als "3 km zum Pressegger See" benannt.
 * - Niederländische Gastfamilie (Arjen & Christine de Jong, Töchter Fleur & Maud), seit Okt 2022.
 * - Kleiner Platz: nur 4 Wohnmobilstellplätze (April–Oktober) + 2 ganzjährige Ferienwohnungen.
 * - Preise real von der Quelle (Camper 14,60/19,60 €; FeWo ab 70 € Sommer / ab 100 € Winter)
 *   → pricesArePlaceholder=false. Keine Auszeichnung belegt → awards leer.
 */
const IMG = "/campsites/hausnampolach";

export const hausnampolach: CampsiteConfig = {
  name: "Haus & Camperplatz Nampolach",
  shortName: "Haus Nampolach",
  slug: "hausnampolach",
  ort: "Nampolach bei Hermagor",
  region: "Kärnten",
  brandKind: "Camperplatz & Ferienwohnungen",
  regionLong: "Region Nassfeld–Pressegger See · Kärnten · Österreich",

  claim: "Dein ruhiger Bergurlaub im sonnigen Süden Kärntens",
  claimEmphasis: "im sonnigen Süden Kärntens",
  intro:
    "Kleiner, ruhiger Camperplatz und neue, komplett renovierte Ferienwohnungen mitten in der Natur — im sonnigen Gailtal nahe Hermagor, 3 km vom Pressegger See und nur rund 20 Minuten vom Skigebiet Nassfeld.",

  logo: { src: `${IMG}/logo-nampolach.webp`, alt: "Haus & Camperplatz Nampolach Logo" },

  statement: {
    text: "Ruhe, Raum und Gastfreundschaft stehen bei uns im Mittelpunkt — damit Sie Ihren wohlverdienten Urlaub wirklich genießen.",
    emphasis: "Ruhe, Raum und Gastfreundschaft",
  },

  pillars: [
    { title: "Camperplatz in der Natur", text: "Unser kleiner Camperplatz bietet Platz für 4 Wohnmobile — mitten in der Natur, mit Bauernhof und Blick auf Wald und Berge.", image: { src: `${IMG}/pillar-camperplatz.webp`, alt: "Wohnmobile auf dem Camperplatz Nampolach mit Bergblick" } },
    { title: "Neue Ferienwohnungen", text: "Zwei komplett renovierte Ferienwohnungen für bis zu 5 bzw. 4 Personen — mehr Platz, mehr Ruhe, mehr Entspannung.", image: { src: `${IMG}/pillar-ferienwohnung.webp`, alt: "Moderne Ferienwohnung im Haus Nampolach mit offener Küche" } },
    { title: "Sonniger Süden Kärntens", text: "Im idyllischen Nampolach bei Hermagor — in der Region mit den meisten Sonnenstunden Österreichs, 3 km vom Pressegger See.", image: { src: `${IMG}/pillar-garten.webp`, alt: "Haus Nampolach mit Garten und Bergblick im Sommer" } },
  ],

  usps: [
    "Familiär geführt von Familie de Jong",
    "Wir sprechen Deutsch, Niederländisch & Englisch",
    "Nur 4 ruhige Wohnmobilstellplätze",
    "Frischer Brötchenservice am Morgen",
    "Schwimmbad, Trampolin & Spielplatz",
    "3 km zum Pressegger See · ~20 Min. zum Nassfeld",
    "Hunde am Stellplatz willkommen (gratis)",
  ],

  trust: {
    heading: "Worauf Sie sich bei uns verlassen können",
    headingEmphasis: "verlassen",
    intro:
      "Persönlich geführt von der niederländischen Familie de Jong: ehrliche Gastfreundschaft, eine absolut ruhige Lage mit Bergblick und frische Brötchen am Morgen — bestätigt von zahlreichen 5-Sterne-Bewertungen auf Google, Booking.com, Campercontact und Park4night.",
  },

  // Keine belegbare offizielle Auszeichnung auf der Quelle → ehrlich leer (Band zeigt nur USP-Pills).
  awards: [],

  // Ferienwohnungen ganzjährig; Camperplatz 1. April–31. Oktober (siehe Camping-Intro & Preis-Hinweis).
  saison: { von: "Jänner", bis: "Dezember" },

  hero: {
    aerial: { src: `${IMG}/hero-camperwiese.webp`, alt: "Blühende Wiese, Wohnmobile und Berge am Camperplatz Nampolach" },
    sunset: { src: `${IMG}/hero-abend.webp`, alt: "Abendstimmung über dem Camperplatz Nampolach" },
  },

  camping: {
    heading: "Unser Camperplatz",
    intro:
      "Vier geräumige, gepflasterte Stellplätze für Wohnmobile bis 7 Meter — mitten in der Natur mit angrenzendem Bauernhof. Geöffnet von 1. April bis 31. Oktober. Genießen Sie die Sonne, die den ganzen Tag über das Feld wärmt, und beobachten Sie die Rehe am Waldrand.",
    features: [
      { title: "Mitten in der Natur", text: "Ruhige Lage mit angrenzendem Bauernhof und herrlichem Rundumblick auf Wald, Wiesen und Berge — Rehe am Waldrand inklusive.", image: { src: `${IMG}/camping-blumenwiese.webp`, alt: "Blühende Blumenwiese am Camperplatz Nampolach mit Wohnmobilen und Bergblick" } },
      { title: "Gepflasterte Stellplätze", text: "Geräumige, befestigte Stellplätze mit Platz für Wohnmobile bis zu 7 Metern — sonnig den ganzen Tag.", image: { src: `${IMG}/camping-stellplaetze.webp`, alt: "Gepflasterte Wohnmobilstellplätze auf der Wiese" } },
      { title: "Strom, Wasser & WLAN", text: "Jeder Stellplatz hat Strom- und Wasseranschluss inkl. Wasser und WLAN; zum Frischmachen steht eine Außendusche bereit.", image: { src: `${IMG}/camping-versorgung.webp`, alt: "Außendusche am Camperplatz mit Bergblick" } },
      { title: "Frische Brötchen", text: "Brötchen bis 17:00 Uhr bestellen — am nächsten Morgen bringen wir sie frisch zu Ihnen.", image: { src: `${IMG}/camping-broetchen.webp`, alt: "Frische Brötchen mit Blick über den Camperplatz" } },
      { title: "Platz & Ruhe für nur 4 Camper", text: "Spannen Sie die Markise aus, genießen Sie ein Getränk oder ein Buch — mehr Ruhe geht kaum.", image: { src: `${IMG}/camping-sonne.webp`, alt: "Sonniger Camperplatz mit Sitzgelegenheiten und Haus" } },
    ],
  },

  mobilheime: {
    heading: "Unsere Ferienwohnungen",
    intro:
      "Lieber feste Wände als Wohnmobil? Unsere zwei komplett renovierten Ferienwohnungen sind modern eingerichtet und voll ausgestattet — mit Küche, Smart-TV, kostenlosem WLAN und Brötchenservice. Auf Wunsch stellen wir gerne Kinderbett und Hochstuhl bereit.",
    items: [
      { name: "Ferienwohnung 1", kind: "bis 5 Personen", text: "Geräumige Wohnung mit Küche, Smart-TV, zwei Schlafzimmern mit Boxspringbett und Etagenbett sowie renoviertem Bad.", image: { src: `${IMG}/fewo1.webp`, alt: "Wohnzimmer der Ferienwohnung 1 im Haus Nampolach" }, priceFrom: 70, features: ["bis 5 Personen", "2 Schlafzimmer", "Küche · Smart-TV · WLAN"] },
      { name: "Ferienwohnung 2", kind: "bis 4 Personen", text: "Renovierte Wohnung mit Küche, Smart-TV, zwei Schlafzimmern und modernem Bad — Bettwäsche inklusive.", image: { src: `${IMG}/fewo2.webp`, alt: "Helles Wohnzimmer der Ferienwohnung 2 im Haus Nampolach" }, priceFrom: 70, features: ["bis 4 Personen", "2 Schlafzimmer", "komplett renoviert"] },
    ],
  },

  kinder: {
    heading: "Für die ganze Familie",
    intro:
      "Bei uns dürfen Kinder Kinder sein: im großen Garten gibt es ein Trampolin, eine Schaukel, eine Rutsche und seit Sommer 2024 sogar ein eigenes Schwimmbad. Und im Winter wartet der Schnee direkt vor der Tür.",
    features: [
      { title: "Trampolin, Schaukel & Rutsche", text: "Im großen Gemeinschaftsgarten können die Kinder nach Herzenslust spielen und toben.", image: { src: `${IMG}/kinder-spielplatz.webp`, alt: "Spielplatz mit Trampolin, Schaukel und Rutsche am Haus Nampolach" } },
      { title: "Eigenes Schwimmbad", text: "Seit Sommer 2024 sorgt unser Schwimmbad an heißen Tagen für die perfekte Abkühlung.", image: { src: `${IMG}/kinder-pool.webp`, alt: "Schwimmbad am Camperplatz Nampolach" } },
      { title: "Winterspaß im Schnee", text: "Schlitten schnappen und los: rund ums Haus gibt es im Winter jede Menge Platz zum Spielen im Schnee.", image: { src: `${IMG}/kinder-winter.webp`, alt: "Kinder spielen im Schnee rund um Nampolach" } },
    ],
  },

  aktivitaeten: {
    heading: "Sommer & Winter in Kärnten",
    intro:
      "Ob Baden, Wandern, Radfahren, Skifahren oder Eislaufen — rund um Nampolach ist zu jeder Jahreszeit etwas los. Das Skigebiet Nassfeld liegt nur rund 20 Autominuten entfernt.",
    items: [
      { title: "Baden am Pressegger See", text: "Nur 3 km entfernt: der Pressegger See hat Trinkwasserqualität, rund 28 °C und SUP-Verleih am Strandbad Passriach.", image: { src: `${IMG}/aktiv-presseggersee.webp`, alt: "Stand-up-Paddeln am Pressegger See" } },
      { title: "Wandern & Bergbahnen am Nassfeld", text: "Mit der kostenlosen „+Card Holiday“ fahren Sie gratis auf die Nassfelder Bergbahnen — Wanderungen und Familientouren inklusive.", image: { src: `${IMG}/aktiv-nassfeld-sommer.webp`, alt: "Bergbahn am Nassfeld im Sommer" } },
      { title: "Skifahren am Nassfeld", text: "110 Pistenkilometer in allen Schwierigkeitsgraden mit Kinderpisten „The Wave“ und „The Snake“ — nur 20 Minuten entfernt.", image: { src: `${IMG}/aktiv-skifahren.webp`, alt: "Pistenpanorama im Skigebiet Nassfeld" } },
      { title: "Eislaufen am Weißensee", text: "Drehen Sie Ihre Runden auf der größten präparierten Natureisfläche Europas — ein besonderes Wintererlebnis für Groß und Klein.", image: { src: `${IMG}/aktiv-weissensee.webp`, alt: "Eislaufen auf dem zugefrorenen Weißensee" } },
      { title: "Winterzauber mit den Gondeln", text: "Langlaufen, Rodeln und Schneewandern: ein präpariertes Loipennetz und urige Hütten machen jeden Wintertag besonders.", image: { src: `${IMG}/aktiv-winter-gondel.webp`, alt: "Gondeln im verschneiten Skigebiet Nassfeld" } },
    ],
  },

  anreise: {
    heading: "So finden Sie uns",
    modes: [
      { title: "Mit dem Auto", text: "Nampolach 3, 9624 Egg bei Hermagor — im sonnigen Gailtal in Kärnten, mit kostenlosen Parkplätzen direkt am Haus." },
      { title: "Skigebiet Nassfeld", text: "Die Nassfeldbahn erreichen Sie in rund 20 Autominuten, Hermagor mit seinen Einkaufsmöglichkeiten in etwa 15 Minuten." },
      { title: "Pressegger See", text: "Zum Strandbad Passriach am Pressegger See sind es nur 3 km — im Sommer ideal zum Radeln und Baden." },
    ],
  },

  galerie: {
    heading: "Ein Zuhause in den Bergen",
    headingEmphasis: "Zuhause",
    intro:
      "Moderne Ferienwohnungen, ein ruhiger Camperplatz und herrliche Natur — ein paar Eindrücke aus Nampolach.",
    tag: "Nampolach · Kärnten",
    moreCount: 12,
    images: [
      { src: `${IMG}/galerie-essen.webp`, alt: "Gedeckter Esstisch in der Ferienwohnung" },
      { src: `${IMG}/galerie-kueche.webp`, alt: "Moderne, voll ausgestattete Küche der Ferienwohnung" },
      { src: `${IMG}/galerie-bad.webp`, alt: "Komplett renoviertes Bad mit Regendusche" },
      { src: `${IMG}/galerie-schlafzimmer.webp`, alt: "Helles Doppelschlafzimmer mit Boxspringbett in der Ferienwohnung" },
      { src: `${IMG}/galerie-pool-haus.webp`, alt: "Schwimmbad und Haus Nampolach mit Bergblick" },
      { src: `${IMG}/galerie-familie.webp`, alt: "Familie de Jong am Gipfelkreuz in den Bergen" },
    ],
  },

  booking: {
    heading: "Verfügbarkeit & Anfrage",
    intro:
      "Wählen Sie Zeitraum, Unterkunft und Personen — Familie de Jong meldet sich mit Ihrer persönlichen Verfügbarkeit.",
    pricesArePlaceholder: false,
    priceNote:
      "Wohnmobilstellplatz ab 14,60 €/Nacht (Vor-/Nachsaison), 19,60 € in der Hochsaison — inkl. Wasser & WLAN, Strom 3,50 €/Nacht, Hunde gratis. Ferienwohnungen ab 70 €/Nacht im Sommer (inkl. +Card Holiday), im Winter ab 100 €. Zzgl. Kurtaxe 2,70 €/Person/Nacht (ab 17 J.) und Endreinigung (Wohnung 50–55 €). Preise bitte mit den Gastgebern bestätigen.",
    highlight: {
      title: "Inklusive +Card Holiday",
      text: "Im Sommer nutzen Sie mit der kostenlosen „+Card Holiday“ die Nassfelder Bergbahnen und die Strände des Pressegger Sees gratis.",
    },
    categories: [
      // Reale Quelle: Camperplatz Vor-/Nachsaison 14,60 € · Hochsaison 19,60 € (perNight = aufgerundet, exakt im priceNote).
      { id: "camper", label: "Wohnmobilstellplatz", perNight: 15, perExtraGuest: 0 },
      // Reale Quelle: Ferienwohnung Sommer Vor-/Nachsaison ab 70 € (Startpreis "ab").
      { id: "fewo1", label: "Ferienwohnung 1 (bis 5 Pers.)", perNight: 70, perExtraGuest: 0 },
      { id: "fewo2", label: "Ferienwohnung 2 (bis 4 Pers.)", perNight: 70, perExtraGuest: 0 },
    ],
  },

  kontakt: {
    coords: { lat: 46.605556, lng: 13.464432 },
    tel: "+43 676 4239981",
    telHref: "tel:+436764239981",
    mail: "info@hausnampolach.com",
    facebook: "https://www.facebook.com/profile.php?id=100093501194212",
    adresse: "Nampolach 3 · 9624 Egg bei Hermagor · Kärnten",
  },

  story: {
    kicker: "Über uns",
    heading: "Die Familie de Jong",
    intro:
      "Abenteuerlustig, unternehmungslustig — und seit Oktober 2022 ausgewandert. Aus Liebe zu Österreich haben wir uns in Nampolach einen Traum erfüllt.",
    chapters: [
      { no: "01", kicker: "Auswanderung", title: "Aus den Niederlanden nach Kärnten", text: "Vor Jahren haben wir uns in Österreich verliebt — jeder Urlaub fühlte sich an wie nach Hause kommen. Nach langer Suche fanden wir Kärnten, Hermagor, Nampolach: ein idyllisches Dorf mit Ruhe und Raum." },
      { no: "02", kicker: "Wir", title: "Arjen, Christine, Fleur & Maud", text: "Arjen, ein echter Friese aus Bolsward, und Christine aus Papendrecht haben sich beim Skitraining in Österreich kennengelernt. Mit den Töchtern Fleur (2015) und Maud (2018) leben wir heute hier — Arjen als Skilehrer und im Outdoor-Sport, Christine in der Nachmittagsbetreuung." },
      { no: "03", kicker: "Der Traum", title: "Vom Camper-Leben zum Camperplatz", text: "Kurz vor Corona bauten wir einen alten Camper komplett um — so wurde die Liebe zum Camper-Leben geboren. Daraus entstand die Idee, in Nampolach einen kleinen Camperplatz und renovierte Ferienwohnungen zu eröffnen." },
    ],
  },

  languages: ["DE"],

  nav: [
    {
      label: "Ferienwohnungen",
      href: "#mobilheime",
      children: [
        { label: "Ferienwohnung 1", href: "#mobilheime" },
        { label: "Ferienwohnung 2", href: "#mobilheime" },
        { label: "Ausstattung", href: "#mobilheime" },
      ],
    },
    {
      label: "Camperplatz",
      href: "#camping",
      children: [
        { label: "Stellplätze", href: "#camping" },
        { label: "Brötchenservice", href: "#camping" },
        { label: "Versorgung", href: "#camping" },
      ],
    },
    {
      label: "Familie",
      href: "#kinder",
      children: [
        { label: "Spielplatz", href: "#kinder" },
        { label: "Schwimmbad", href: "#kinder" },
        { label: "Winterspaß", href: "#kinder" },
      ],
    },
    {
      label: "Aktiv",
      href: "#aktivitaeten",
      children: [
        { label: "Pressegger See", href: "#aktivitaeten" },
        { label: "Nassfeld", href: "#aktivitaeten" },
        { label: "Winter", href: "#aktivitaeten" },
      ],
    },
    {
      label: "Preise & Lage",
      href: "#booking",
      children: [
        { label: "Preise", href: "#booking" },
        { label: "Anreise", href: "#anreise" },
        { label: "Kontakt", href: "#anreise" },
      ],
    },
  ],
};

export default hausnampolach;
