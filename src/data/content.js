export const farms = [
  {
    name: 'Fjellgården Finstad',
    lat: 60.94,
    lng: 10.02,
    location: 'Nord-Torpa',
    slug: 'fjellgarden-finstad',
    services: ['Oppfølging for barn og unge', 'Hjelpetiltak og fritidsmiljø'],
    animals: 'Sauer, småfe og stor utmarksbeite',
    region: 'Innlandet',
    url: 'https://fjellgardenfinstad.no',
    description: 'Beskrivelse kommer.',
  },
  {
    name: 'Østre Kjærnes Gård',
    lat: 59.55,
    lng: 10.7,
    location: 'Sperrebotn, Våler',
    slug: 'ostre-kaernes-gard',
    services: ['Aktiviteter for barn og unge', 'Rideskole og hestebaserte tilbud'],
    animals: 'Alpakkaer, hest og rideskole',
    region: 'Vestfold',
    url: 'https://alpakkagaarden.no',
    description: 'Beskrivelse kommer.',
  },
  {
    name: 'Vestgardn Wien',
    lat: 60.63,
    lng: 10.5,
    location: 'Vestgarn',
    slug: 'vestgardn-wien',
    services: ['Arbeidstrening', 'Dagaktivitetstilbud for voksne'],
    animals: 'Kyr og smådyr på tradisjonsrik gård',
    region: 'Innlandet',
    url: 'https://innpatunet.no/vestgarn-wien/',
    description: 'Beskrivelse kommer.',
  },
  {
    name: 'Småbruket Ringeli',
    lat: 60.83,
    lng: 10.68,
    location: 'Snertingdal',
    slug: 'smabruket-ringeli',
    services: ['Oppfølging for barn', 'unge og voksne', 'Trygg og oversiktlig ramme'],
    animals: 'Småskala gårdsdrift med flere dyrearter',
    region: 'Buskerud',
    url: 'https://www.smabruket-ringeli.com/',
    description: 'Beskrivelse kommer.',
  },
  {
    name: 'Buggegården',
    lat: 59.28,
    lng: 10.42,
    location: 'Nykirke',
    slug: 'buggegarden',
    services: ['Individuell oppfølging', 'Aktiviteter i rolig tempo'],
    animals: 'Hest og landbruksaktiviteter',
    region: 'Vestfold',
    url: 'https://www.buggegarden.no/',
    description: 'Beskrivelse kommer.',
  },
  {
    name: 'Fladmark Gård',
    lat: 59.59,
    lng: 11.2,
    location: 'Askim',
    slug: 'fladmark-gard',
    services: ['Dagtilbud for barn og voksne', 'Samarbeid med skole og barnehage'],
    animals: 'Gårdsbarnehage og IPT-tilbud samme sted',
    region: 'Buskerud',
    url: 'https://www.fladmarkgard.no',
    description: 'Beskrivelse kommer.',
  },
  {
    name: 'Skårød Gård',
    lat: 59.24,
    lng: 11.06,
    location: 'Evenrød, Råde',
    slug: 'skaarod-gard',
    services: ['Sesongbaserte aktiviteter', 'Oppfølging gjennom hele året'],
    animals: 'Sauføll, hønseproduksjon og skog',
    region: 'Vestfold',
    url: 'https://skaarodgaard.no',
    description: 'Beskrivelse kommer.',
  },
  {
    name: 'Brautertunet',
    lat: 59.28,
    lng: 11.12,
    location: 'Østfold',
    slug: 'brautertunet',
    services: ['Dagsopphold', 'Kortere opphold'],
    animals: 'Gårdstun med flere dyrearter',
    region: 'Østfold',
    url: 'https://www.tombrauter.no/brautertunet/',
    description: 'Beskrivelse kommer.',
  },
  {
    name: 'Bjugstadhøiden Gård',
    lat: 60.78,
    lng: 10.63,
    location: 'Hunndalen',
    slug: 'bjugstadhoiden-gard',
    services: ['Friluftsliv og håndverksaktiviteter', 'Oppfølging i naturnære omgivelser'],
    animals: 'Fjelsgård med stor utmark',
    region: 'Innlandet',
    url: 'https://inn-pa-tunet.no/finn-gaard/bjugstadhoiden-gard-geir-bratberg/',
    description: 'Beskrivelse kommer.',
  },
  {
    name: 'Søndre Grøset Gård',
    lat: 60.9,
    lng: 10.1,
    location: 'Innlandet',
    slug: 'sondre-groset-gard',
    services: ['Dagtilbud og avlastning', 'Omsorgstilbud'],
    animals: 'Hage, dyr og fellesskap',
    region: 'Innlandet',
    url: 'https://sondre-groset-gard.no',
    description: 'Beskrivelse kommer.',
  },
];

export const services = [
  {
    slug: 'barn-og-unge',
    title: 'Barn og unge',
    short: 'Et trygt sted å mestre, vokse og høre til — utenfor skolemiljøet.',
    description:
      'Vi tilbyr aktiviteter og oppfølging for barn og unge som trenger en annerledes og tilrettelagt arena. På gården møter de forutsigbare dyr, tydelige voksne og oppgaver de kan lykkes med — fra dyrestell til vedklipbing og matlaging.',
    bullets: [
      'Individuell oppfølging av erfne IPT-gårdbrukere',
      'Bufdir-støttede gratisaktiviteter for barn og unge',
      'Tettere samarbeid med skole, PPT og BUP',
      'Fokus på mestring, trygghet og godene relasjoner',
    ],
  },
  {
    slug: 'voksne',
    title: 'Voksne',
    short: 'Meningsfull arbeidstrening og dagsaktiviteter i gårdens rytme.',
    description:
      'For voksne som trenger struktur, aktivitet og tilhørighet i hverdagen, tilbyr gårdene arbeidstrening og dagtilbud. Gårdens rytme — mating, stell, høsting, vedlikehold — gir forutsigbarhet og en opplevelse av å være til nytte.',
    bullets: [
      'Arbeidstrening og dagaktivitetstilbud',
      'Tilrettelagt etter interesser og funksjonsnivå',
      'Samarbeid med NAV og habilitetstjenesten',
      'Mulighet for progresjon mot arbeid eller videre tiltak',
    ],
  },
  {
    slug: 'omsorg',
    title: 'Omsorg og avlastning',
    short: 'Ro, natur og omsorg for mennesker som trenger det.',
    description:
      'Flere av gårdene tilbyr omsorg og avlastning for voksne og eldre, samt for personer med demens. Samværet med dyr, kjente rutiner og stille natur gir trygghet og trivsel — både for den som deltar og for pårørende.',
    bullets: [
      'Avlastning for pårørende',
      'Dagsopphold med omsorgstjenester',
      'Tilrettelagt for personer med demens',
      'Trygge omgivelser med kvalifiserte voksne',
    ],
  },
];

export const contactPersons = [
  { name: 'Espen A. Johansen', role: 'Styreleder', email: 'post@spire-innpaatunet.no', phone: '+47 988 16 111' },
  { name: 'Linda T. Skårød', role: 'Nestleder', email: 'linda.th.skaarod@gmail.com', phone: '+47 959 66 110' },
  { name: 'Merethe Næsbø', role: 'Styremedlem', email: 'merethe.nesbo@gmail.com', phone: '+47 993 94 436' },
  { name: 'Janne E. M. Lie', role: 'Økonomi, anbud og søknader', email: 'janne@spire-innpaatunet.no', phone: '+47 483 67 431' },
];

export const news = [
  {
    slug: 'bufdir-stotte',
    title: 'Gode opplevelser og fellesskap med støtte fra Bufdir',
    date: '2026-10-02',
    excerpt:
      'Med støtte fra Bufdir kan gårder i Spire IPT tilby gratis aktiviteter for barn og unge. Målet er å gi flere mulighet til å delta, oppleve mestring og bli en del av et trygt fellesskap — uavhengig av familiens økonomi.',
  },
  {
    slug: 'ny-strategi-ipt',
    title: 'Ny nasjonal strategi for Inn på tunet',
    date: '2026-06-17',
    excerpt:
      'Regjeringen har lansert ny nasjonal strategi for Inn på tunet. Satsingen styrker rammevilkårene for gårdsbaserte tjenester og er god nytt for både tilbydere og oppdragsgivere.',
  },
  {
    slug: 'ny-eiergard',
    title: 'Spire vokser — ny medlemsgård',
    date: '2026-09-01',
    excerpt:
      'Vi er nå 10 godkjente gårder i samvirket. Den nyeste eiergården ble godtatt inn i september, og styrker tilbudet i sin region.',
  },
];

export const documents = [
  {
    section: 'Styremøteprotokoller',
    items: [
      { title: 'Styremøte 2026-05 — 08.09.26' },
      { title: 'Styremøte 2026-04 — 18.06.26' },
      { title: 'Styremøte 2026-03 — 14.04.26' },
      { title: 'Styremøte 2026-02 — 26.02.26' },
      { title: 'Styremøte 2026-01 — 18.02.26' },
      { title: 'Styremøte 2025-12 — 25.11.25' },
      { title: 'Styremøte 2025-10 — 28.07.25' },
      { title: 'Styremøte 2025-09 — 24.06.25' },
      { title: 'Styremøte 2025-08 — 04.06.25' },
    ],
  },
  {
    section: 'Årsmøte 2026',
    items: [
      { title: 'Årsregnskap 2025' },
      { title: 'Budsjett 2026' },
      { title: 'Årsberetning 2025' },
      { title: 'Protokoll årsmøte 2026' },
    ],
  },
  {
    section: 'Vedtekter og godkjenninger',
    items: [
      { title: 'Vedtekter for Spire IPT' },
      { title: 'Oversikt over medlemsgårdenes IPT-godkjenninger' },
    ],
  },
];
