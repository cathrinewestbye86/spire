export const farms = [
  {
    name: 'Fjellgården Finstad',
    region: 'Innlandet',
    url: 'https://fjellgardenfinstad.no',
    description: 'Fjellgård med sauer og småfe. Tilbyr oppfølging for barn og unge.',
  },
  {
    name: 'Østre Kjærnes Gård',
    region: 'Vestfold',
    url: 'https://alpakkagaarden.no',
    description: 'Kjent som Alpakkegården. Alpakkaer, hest og rideskole. Tilrettelagt for de fleste.',
  },
  {
    name: 'Vestgardn Wien',
    region: 'Innlandet',
    url: 'https://innpatunet.no/vestgarn-wien/',
    description: 'Tradisjonsrik gård med kyr og smådyr. Fokus på arbeidstrening og mestring.',
  },
  {
    name: 'Småbruket Ringeli',
    region: 'Buskerud',
    url: 'https://www.smabruket-ringeli.com/',
    description: 'Lite og oversiktlig småbruk. Trygg ramme for barn, unge og voksne.',
  },
  {
    name: 'Buggegården',
    region: 'Vestfold',
    url: 'https://www.buggegarden.no/',
    description: 'Gård med hest og landbruksaktiviteter. Individuell oppfølging i rolig tempo.',
  },
  {
    name: 'Fladmark Gård',
    region: 'Buskerud',
    url: 'https://www.fladmarkgard.no',
    description: 'Gårdsbarnehage og IPT-tilbud samme sted. Natur, dyr og praktiske gjøremål.',
  },
  {
    name: 'Skårød Gård',
    region: 'Vestfold',
    url: 'https://skaarodgaard.no',
    description: 'Sauføll, hønseproduksjon og skog. Sesongbaserte aktiviteter gjennom hele året.',
  },
  {
    name: 'Brautertunet',
    region: 'Østfold',
    url: 'https://www.tombrauter.no/brautertunet/',
    description: 'Gårdstun med flere dyrearter. Tilbyr både dagsopphold og kortere opphold.',
  },
  {
    name: 'Bjugstadhøiden Gård',
    region: 'Innlandet',
    url: 'https://inn-pa-tunet.no/finn-gaard/bjugstadhoiden-gard-geir-bratberg/',
    description: 'Fjelsgård med stor utmark. Friluftsliv, dyrestell og håndverksaktiviteter.',
  },
  {
    name: 'Søndre Grøset Gård',
    region: 'Innlandet',
    url: 'https://sondre-groset-gard.no',
    description: 'Gård med fokus på hage, dyr og fellesskap. Egnet for dagtilbud og avlastning.',
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
      { title: 'Styremøte 2026-05 — 08.09.26', href: '#' },
      { title: 'Styremøte 2026-04 — 18.06.26', href: '#' },
      { title: 'Styremøte 2026-03 — 14.04.26', href: '#' },
      { title: 'Styremøte 2026-02 — 26.02.26', href: '#' },
      { title: 'Styremøte 2026-01 — 18.02.26', href: '#' },
      { title: 'Styremøte 2025-12 — 25.11.25', href: '#' },
      { title: 'Styremøte 2025-10 — 28.07.25', href: '#' },
      { title: 'Styremøte 2025-09 — 24.06.25', href: '#' },
      { title: 'Styremøte 2025-08 — 04.06.25', href: '#' },
    ],
  },
  {
    section: 'Årsmøte 2026',
    items: [
      { title: 'Årsregnskap 2025', href: '#' },
      { title: 'Budsjett 2026', href: '#' },
      { title: 'Årsberetning 2025', href: '#' },
      { title: 'Protokoll årsmøte 2026', href: '#' },
    ],
  },
  {
    section: 'Vedtekter og godkjenninger',
    items: [
      { title: 'Vedtekter for Spire IPT', href: '#' },
      { title: 'Oversikt over medlemsgårdenes IPT-godkjenninger', href: '#' },
    ],
  },
];
