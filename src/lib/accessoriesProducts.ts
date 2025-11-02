// lib/accessoriesProducts.ts

export interface AccessoryProduct {
  id: string;
  slug: string;
  name: string;
  description: string;
  fullDescription: string;
  price: number;
  currency: string;
  image: string;
  images: string[];
  category: string[];
  specifications: {
    label: string;
    value: string;
  }[];
  features: string[];
  compatibility: string[];
  inStock: boolean;
  sizes?: string[];
  colors?: string[];
}

export const accessoriesProducts: AccessoryProduct[] = [
  {
    id: "1",
    slug: "jobobike-front-rack",
    name: "JOBOBIKE Frontbagasjebrett",
    description: "Lett aluminiums frontbagasjebrett med holdbar matt svart pulverlakkering, rustfritt og perfekt for alle værforhold.",
    fullDescription: "JOBOBIKE frontbagasjebrett er laget av lett aluminium med holdbar, matt svart pulverlakkering. Det er rustfritt, noe som gjør det perfekt for alle værforhold. Uansett om du reiser i røft terreng eller i byen - JOBOBIKE bagasjebrettet er garantert ikke å falle ned ved plutselig svinging eller hard bremsing.",
    price: 45,
    currency: "kr",
    image: "/images/front-rack/front-1.png",
    images: [
      "/images/front-rack/front-1.png",
      "/images/front-rack/front-2.png",
     
     
    ],
    category: ["Bagasjebrett og bærere"],
    specifications: [
      { label: "Materiale", value: "Aluminiumslegering" },
      { label: "Finish", value: "Matt svart pulverlakkering" },
      { label: "Vektkapasitet", value: "15kg" },
      { label: "Montering", value: "Front gaffel montering" }
    ],
    features: [
      "Rustfri konstruksjon",
      "Lett aluminiumsdesign",
      "Holdbar matt svart finish",
      "Sikkert monteringssystem",
      "All-vær ytelse"
    ],
    compatibility: [
      "JOBOBIKE Robin",
      "JOBOBIKE Robin ST",
      "JOBOBIKE Transer",
      "JOBOBIKE Commuter",
      "JOBOBIKE Linda",
      "JOBOBIKE Lyon",
      "JOBOBIKE Eddy",
      "JOBOBIKE Eddy X"
    ],
    inStock: true
  },
  {
    id: "2",
    slug: "jobobike-basket-with-wooden",
    name: "JOBOBIKE Kurv med trehåndtak",
    description: "Stilig integrert kurv med trehåndtak, perfekt for å bære dagligvarer og personlige gjenstander på el-sykkelen din.",
    fullDescription: "JOBOBIKE kurv med trehåndtak kombinerer funksjonalitet med elegant design. Laget av holdbare materialer med et vakkert trehåndtak, kan den monteres på både front- og bakre bagasjebrett. Det integrerte designet sikrer rask og enkel installasjon uten ekstra utstyr.",
    price: 55,
    currency: "kr",
    image: "/images/basket/basket-1.png",
    images: [
      "/images/basket/basket-1.png",
      "/images/basket/basket-2.png",
     
    ],
    category: ["Kurver og oppbevaring"],
    specifications: [
      { label: "Materiale", value: "Aluminiumslegering med trehåndtak" },
      { label: "Finish", value: "Matt svart" },
      { label: "Kapasitet", value: "20L" },
      { label: "Montering", value: "Front/bakre bagasjebrett kompatibel" }
    ],
    features: [
      "Elegant trehåndtak",
      "Integrert monteringssystem",
      "Rask installasjon",
      "Værbestandig",
      "Romslig 20L kapasitet"
    ],
    compatibility: [
      "JOBOBIKE Robin",
      "JOBOBIKE Transer",
      "JOBOBIKE Commuter",
      "JOBOBIKE Linda",
      "JOBOBIKE Lyon",
      "JOBOBIKE Eddy",
      "JOBOBIKE Sam"
    ],
    inStock: true
  },
  {
    id: "3",
    slug: "jobobike-cover-bag-sam",
    name: "JOBOBIKE Dekkeveske for Sam",
    description: "Vanntett dekkeveske som beskytter din sammenleggbare sykkel mot støv, vann og riper. Spesielt designet for JOBOBIKE Sam.",
    fullDescription: "Denne vanntette dekkevesken er spesielt designet for å beskytte din JOBOBIKE Sam sammenleggbare sykkel mot støv, vann og riper. Det holdbare materialet sikrer langvarig beskyttelse, mens det kompakte designet gjør det lett å oppbevare og transportere sykkelen din. Perfekt for reise og oppbevaring.",
    price: 65,
    currency: "kr",
    image: "/images/Thermal/thermal-bag-1.png",
    images: [
      "/images/Thermal/thermal-bag-1.png",
      "/images/Thermal/thermal-bag-2.png",
      "/images/Thermal/thermal-bag-3.png",
     
    ],
    category: ["Beskyttelse og oppbevaring"],
    specifications: [
      { label: "Materiale", value: "600D Oxford stoff" },
      { label: "Vannmotstand", value: "IPX4" },
      { label: "Størrelse", value: "85cm x 43cm x 72cm" },
      { label: "Vekt", value: "1,2kg" }
    ],
    features: [
      "Vanntett beskyttelse",
      "Støv- og ripebestandig",
      "Forsterkede bærehåndtak",
      "Kompakt oppbevaring",
      "Lett å rengjøre"
    ],
    compatibility: ["JOBOBIKE Sam"],
    inStock: true
  },
  {
    id: "4",
    slug: "jobobike-lock",
    name: "JOBOBIKE Lås",
    description: "Robust sykkellås som gir maksimal sikkerhet for el-sykkelen din med tyverisikring og værbestandig konstruksjon.",
    fullDescription: "JOBOBIKE låsen tilbyr premium sikkerhet for din elektriske sykkel. Med herdet stålkonstruksjon med anti-dirk og anti-bor beskyttelse, sikrer denne låsen at sykkelen din forblir trygg. Det værbestandige designet fungerer i alle forhold, og den kompakte størrelsen gjør den lett å bære.",
    price: 35,
    currency: "kr",
    image: "/images/lock/lock-1.png",
    images: [
      "/images/lock/lock-1.png",
      "/images/lock/lock-2.png",
      
    ],
    category: ["Sikkerhet"],
    specifications: [
      { label: "Materiale", value: "Herdet stål" },
      { label: "Sikkerhetsnivå", value: "Nivå 9" },
      { label: "Lengde", value: "120cm" },
      { label: "Diameter", value: "12mm" }
    ],
    features: [
      "Herdet stålkonstruksjon",
      "Anti-dirk sylinder",
      "Anti-bor beskyttelse",
      "Værbestandig belegg",
      "Inkluderer 3 nøkler"
    ],
    compatibility: ["Universal - All JOBOBIKE Models"],
    inStock: true
  },
  {
    id: "5",
    slug: "jobobike-phone-holder-waterproof",
    name: "JOBOBIKE Phone Holder (Waterproof Cover)",
    description: "Sikker telefonholder med vanntett deksel som lar deg bruke telefonen til navigasjon mens den beskyttes mot værforhold.",
    fullDescription: "Hold telefonen din tilgjengelig og beskyttet med JOBOBIKE telefonholderen. Det vanntette dekselet tillater full berøringsskjermfunksjonalitet mens det beskytter mot regn og støv. Det sikre monteringssystemet sikrer at telefonen din holder seg på plass selv i røft terreng, noe som gjør den perfekt for GPS-navigasjon.",
    price: 25,
    currency: "kr",
    image: "/images/holder/holder-1.png",
    images: [
      "/images/holder/holder-1.png",
      "/images/holder/holder-2.png",
      "/images/holder/holder-3.png",
      
    ],
    category: ["Electronics & Holders"],
    specifications: [
      { label: "Compatibility", value: "Phones up to 6.7 inches" },
      { label: "Water Resistance", value: "IPX6" },
      { label: "Mounting", value: "Handlebar Mount" },
      { label: "Rotation", value: "360°" }
    ],
    features: [
      "Vanntett berøringsskjerm deksel",
      "360° rotasjon",
      "Sikker låsemekanisme",
      "Hurtigutløsningssystem",
      "Universal telefonkompatibilitet"
    ],
    compatibility: ["Universal - All JOBOBIKE Models"],
    inStock: true
  },
  {
    id: "6",
    slug: "jobobike-bicycle-mirror",
    name: "JOBOBIKE Sykkelspeil",
    description: "Høykvalitets bakspeil som gir utmerket sikt og sikkerhet når du kjører el-sykkelen din.",
    fullDescription: "JOBOBIKE sykkelspeilet forbedrer kjøresikkerheten din med et bredt synsfelt og splintfritt glass. Den justerbare armen lar deg finne den perfekte visningsvinkelen, mens det robuste monteringssystemet holder det sikkert selv på humpete veier. Det elegante designet kompletterer sykkelens estetikk.",
    price: 20,
    currency: "kr",
    image: "/images/mirror/mirror-1.png",
    images: [
      "/images/mirror/mirror-1.png",
      "/images/mirror/mirror-2.png",
      
    ],
    category: ["Safety & Visibility"],
    specifications: [
      { label: "Mirror Size", value: "80mm diameter" },
      { label: "Material", value: "Shatterproof Glass" },
      { label: "Mounting", value: "Handlebar Mount" },
      { label: "Adjustment", value: "Multi-angle" }
    ],
    features: [
      "Splintfritt speilglass",
      "Bred synsvinkel",
      "Justerbar posisjonering",
      "Robust monteringsbrakkett",
      "Enkel installasjon"
    ],
    compatibility: ["Universal - All JOBOBIKE Models"],
    inStock: true
  },
  {
    id: "7",
    slug: "jobobike-helmet",
    name: "JOBOBIKE Sykkelhjelm",
    description: "CE EN 1078 og CPSC sertifisert sikkerhetshjelm med støtbestandig konstruksjon og optimal ventilasjon for komfortabel kjøring.",
    fullDescription: "JOBOBIKE sykkelhjelmen ble testet for sikkerhet av CE EN 1078 i Europa og CPSC i USA. Støtbestandig PC-materiale på utsiden og en støtabsorberende EPS unibody på innsiden gir maksimal beskyttelse. Hjelmen har optimal ventilasjon, justerbart passformsystem og avtakbar polstring for komfort under lange turer.",
    price: 49,
    currency: "kr",
    image: "/images/helmet/helmet-1.png",
    images: [
      "/images/helmet/helmet-1.png",
      "/images/helmet/helmet-2.png",
      
    ],
    category: ["Safety & Visibility"],
    specifications: [
      { label: "Certification", value: "CE EN 1078, CPSC" },
      { label: "Material", value: "PC Shell + EPS Foam" },
      { label: "Weight", value: "280g" },
      { label: "Ventilation", value: "18 Air Vents" }
    ],
    features: [
      "Dobbel sikkerhetssertifisering",
      "Støtbestandig konstruksjon",
      "Optimalt ventilasjonssystem",
      "Justerbar passform skive",
      "Avtakbar polstring",
      "Reflekterende elementer"
    ],
    compatibility: ["Universal"],
    inStock: true,
    sizes: ["S (52-56cm)", "M (56-60cm)", "L (60-64cm)"],
    colors: ["Black", "White", "Blue", "Red"]
  },
  {
    id: "8",
    slug: "jobobike-bottle-holder",
    name: "JOBOBIKE Flaskeholder",
    description: "Holdbar aluminium flaskeholder som sikkert holder vannflasken din under turer, lett å installere og kompatibel med de fleste flasker.",
    fullDescription: "Hold deg hydrert på turene dine med JOBOBIKE flaskeholderen. Laget av lett aluminium med sikkert grepdesign, holder den flasker fast på plass selv i røft terreng. Det universelle monteringssystemet passer alle JOBOBIKE-rammer, og det elegante designet matcher sykkelens estetikk.",
    price: 15,
    currency: "kr",
    image: "/images/bottle/bottle-1.png",
    images: [
      "/images/bottle/bottle-1.png",
      "/images/bottle/bottle-2.png",
     
    ],
    category: ["Tilbehør"],
    specifications: [
      { label: "Material", value: "Aluminum Alloy" },
      { label: "Finish", value: "Matte Black" },
      { label: "Bottle Capacity", value: "500-750ml" },
      { label: "Mounting", value: "Frame Mount" }
    ],
    features: [
      "Lett aluminiumskonstruksjon",
      "Sikkert grepdesign",
      "Universal flaskekompatibilitet",
      "Enkel installasjon",
      "Elegant utseende"
    ],
    compatibility: ["Universal - All JOBOBIKE Models"],
    inStock: true
  },
 


  // 3. Integrated Front Basket
  {
    id: "acc-integrated-basket-001",
    slug: "integrated-front-basket",
    name: "JOBOBIKE Integrert frontkurv",
    description: "Integrert kurv spesielt designet for el-sykler. Monteres direkte på front- eller bakre bagasjebrett uten ekstra utstyr. Rask og enkel installasjon.",
    fullDescription: "Integrert kurv, spesielt designet for el-sykler. Den kan monteres direkte på front- eller bakre bagasjebrett på el-sykkelen uten behov for ekstra frontbagasjebrett. Installasjonen er rask og enkel. Kurven er laget av aluminiumslegering og har en holdbar matt svart pulverlakkering for utmerket rustmotstand. Dette gjør den egnet for alle værforhold og sikrer lang levetid. Kurvens design kombinerer moderne bystil med naturlige treelementer.",
    price: 88,
    currency: "NOK",
    image: "/images/Integrated-basket/basket.png.png",
    images: [
     "/images/Integrated-basket/basket.png",
    ],
    category: ["Kurver", "Oppbevaring", "Last"],
    specifications: [
      { label: "Material", value: "Aluminum alloy with wood accents" },
      { label: "Finish", value: "Matte black powder coating" },
      { label: "Base Dimensions", value: "30 x 19.5 cm" },
      { label: "Top Dimensions", value: "36.5 x 26.5 cm" },
      { label: "Height", value: "14 cm" },
      { label: "Load Capacity", value: "25 kg" },
      { label: "Mounting", value: "Direct rack mount (no additional rack needed)" },
      { label: "Installation", value: "Tool-free quick install" }
    ],
    features: [
      "Ingen ekstra frontbagasjebrett nødvendig - monteres direkte",
      "Rask og enkel verktøyfri installasjon",
      "Aluminiumslegering med holdbar pulverlakkering",
      "Rustfri for alle værforhold",
      "Naturlige treelementer for estetisk appell",
      "Sikker montering - løsner ikke under svinger eller bremsing",
      "25 kg lastekapasitet",
      "Romslig innvendig for daglige gjenstander"
    ],
    compatibility: [
      "Romer",
      "Romer Pro",
      "Linda",
      "Eddy X",
      "Viva",
      "Henry",
      "Commuter",
      "Transer"
    ],
    inStock: true,
    colors: ["Black"]
  },

 
  // 7. Phone Holder (Shockproof)
  {
    id: "acc-phone-holder-shockproof-001",
    slug: "phone-holder-shockproof",
    name: "JOBOBIKE Støtsikker telefonholder",
    description: "Universal støtsikker telefonholder med anti-skli silikonputer og 360° rotasjon. Verktøyfri installasjon, passer telefoner 4,8\"-7,0\".",
    fullDescription: "Sikre telefonen din på hver tur med denne støtsikre, universelle el-sykkel telefonholderen. Bygget for å håndtere røffe veier og daglig pendling, har den en anti-skli klemme, 360° justerbar visning og et hurtiginstallasjonssystem - ingen verktøy nødvendig. Kompatibel med telefoner 132-182mm lange (ca 4,8\" til 7,0\") og monteres på styre opptil 46mm i diameter. Full silikonpolstring beskytter telefonen din mot riper og støt, mens sikkerhetslåseklipsen forbedrer grep og stabilitet under turer.",
    price: 29,
    currency: "NOK",
    image: "/images/holder-shock/holder.png.png",
    images: [
     "/images/holder-shock/holder.png",
    ],
    category: ["Telefonholdere", "Tilbehør", "Navigasjon"],
    specifications: [
      { label: "Phone Size", value: "132-182mm (4.8\"-7.0\")" },
      { label: "Handlebar Diameter", value: "Up to 46mm" },
      { label: "Rotation", value: "360° adjustable" },
      { label: "Installation", value: "Tool-free quick install" },
      { label: "Padding", value: "Full silicone protection" },
      { label: "Grip System", value: "Anti-slip silicone pads + locking clamp" },
      { label: "Safety Feature", value: "Lock clip for enhanced stability" },
      { label: "Material", value: "High-grade plastic with silicone padding" }
    ],
    features: [
      "Passer de fleste telefoner 4,8\" til 7,0\"",
      "Bred styrekompatibilitet (opptil 46mm)",
      "Anti-skli silikonputer forhindrer telefonbevegelse",
      "Låseklemme forhindrer risting på røft terreng",
      "360° rotasjon for optimal visningsvinkel",
      "Verktøyfri installasjon - rask og enkel oppsett",
      "Full silikonpolstring beskytter mot riper og støt",
      "Sikkerhetslåseklips for forbedret stabilitet",
      "Holdbar konstruksjon for daglig bruk"
    ],
    compatibility: ["All models"],
    inStock: true,
    colors: ["Black"]
  },

  

  // 11. Water Bottle Holder (JOBOBIKE Logo)
  {
    id: "acc-bottle-holder-logo-001",
    slug: "water-bottle-holder-jobobike-logo",
    name: "JOBOBIKE Logo vannflaskeholder",
    description: "Premium vannflaskeholder med JOBOBIKE merking. Holdbar konstruksjon med sikkert grep for standardflasker.",
    fullDescription: "Premium vannflaskeholder med JOBOBIKE logo. Laget av høykvalitetsmaterialer med holdbar svart finish. Gir sikker oppbevaring for standard vannflasker samtidig som den tilfører et merket præg til el-sykkelen din. Enkel installasjon med inkludert monteringsutstyr.",
    price: 19,
    currency: "NOK",
    image: "/images/bottle-logo/bottle-logo.png.png",
    images: [
      "/images/bottle-logo/bottle-logo.png",
    ],
    category: ["Tilbehør", "Hydrering", "Flaskeholdere"],
    specifications: [
      { label: "Material", value: "High-grade plastic/composite" },
      { label: "Bottle Compatibility", value: "Standard 500-750ml bottles" },
      { label: "Mounting", value: "Frame bolt-on" },
      { label: "Branding", value: "JOBOBIKE logo" },
      { label: "Weight", value: "~70g" },
      { label: "Hardware", value: "Mounting screws included" }
    ],
    features: [
      "Har JOBOBIKE merking",
      "Holdbar svart finish",
      "Sikker flaskeoppbevaringsmekanisme",
      "Passer standard 500-750ml vannflasker",
      "Enkel rammeMontering",
      "Værbestandige materialer",
      "Stilig merket design"
    ],
    compatibility: [
      "Transer",
      "Linda",
      "Sam",
      "Commuter",
      "Henry",
      "Dyno",
      "Dyno GT",
      "Astra",
      "Luxe",
      "Lyon Pro"
    ],
    inStock: true,
    colors: ["Black"]
  },

  // 12. Magnet Water Bottle Holder
  {
    id: "acc-bottle-holder-magnet-001",
    slug: "magnet-water-bottle-holder",
    name: "Magnetisk vannflaskeholder",
    description: "Innovativ magnetisk vannflaskeholder for rask tilgang. Sterkt magnetisk grep med enkel enhåndsbetjening.",
    fullDescription: "Revolusjonær magnetisk vannflaskeholder som tillater rask, enhånds tilgang til vannflasken din under kjøring. Har kraftige magneter som sikkert holder flasken på plass, men slipper lett når det trengs. Perfekt for syklister som trenger hyppig hydrering uten å stoppe. Kompatibel med spesielle magnetiske vannflasker eller magnetiske flaskeadaptere.",
    price: 35.99,
    currency: "NOK",
    image: "/images/magnet-holder/magnet-holder.png.png",
    images: [
     "/images/magnet-holder/magnet-holder.png",
    ],
    category: ["Tilbehør", "Hydrering", "Flaskeholdere", "Magnetisk"],
    specifications: [
      { label: "Type", value: "Magnetic mounting system" },
      { label: "Mounting", value: "Frame bolt-on" },
      { label: "Magnetic Strength", value: "High-power neodymium magnets" },
      { label: "Bottle Compatibility", value: "Magnetic bottles or with adapter" },
      { label: "Operation", value: "One-hand quick release" },
      { label: "Weight Capacity", value: "Up to 1kg" },
      { label: "Material", value: "Reinforced polymer with magnets" }
    ],
    features: [
      "Kraftig magnetisk grep holder flasken sikkert",
      "Enhånds rask tilgang under kjøring",
      "Lett å gripe og erstatte uten å se",
      "Kompatibel med magnetiske vannflasker",
      "Robust rammeMontering",
      "Værbestandig konstruksjon",
      "Reduserer distraksjon mens hydrering opprettholdes",
      "Universal kompatibilitet med alle modeller"
    ],
    compatibility: ["All models"],
    inStock: true,
    colors: ["Black", "Grey"]
  },

  // 13. Single Side Pannier Bag
  {
    id: "acc-pannier-single-001",
    slug: "single-side-pannier-bag",
    name: "Ensidig sykkelveske",
    description: "Vanntett ensidig sykkelveske for bakre bagasjebrett. Perfekt for daglig pendling og dagligvarehandel.",
    fullDescription: "Allsidig ensidig sykkelveske designet for å festes til ditt bakre bagasjebrett. Har vanntett konstruksjon, reflekterende striper for sikkerhet og flere rom for organisert oppbevaring. Ideell for pendlere som trenger moderat lastekapasitet uten volumet av doble sykkelvesker. Hurtigutløsningssystem tillater enkel festing og fjerning.",
    price: 66,
    currency: "NOK",
    image: "/images/pannier/pannier-1.png",
    images: [
      "/images/pannier/pannier-1.png",
      "/images/pannier/pannier-2.png",
      "/images/pannier/pannier-3.png",
    ],
    category: ["Vesker", "Sykkelvesker", "Oppbevaring", "Last"],
    specifications: [
      { label: "Capacity", value: "~15-20L" },
      { label: "Material", value: "Waterproof fabric" },
      { label: "Mounting", value: "Quick-release rack hooks" },
      { label: "Compartments", value: "Main compartment + pockets" },
      { label: "Closure", value: "Roll-top or zipper" },
      { label: "Reflective Elements", value: "Yes" },
      { label: "Carry Handle", value: "Integrated" },
      { label: "Shoulder Strap", value: "Optional/removable" }
    ],
    features: [
      "Vanntett konstruksjon beskytter innhold",
      "Hurtigutløsning for enkel på/av",
      "Reflekterende striper forbedrer synlighet",
      "Flere rom for organisering",
      "Integrert bærehåndtak",
      "Kompatibel med alle bakre bagasjebrett",
      "Holdbart, rivebestandig materiale",
      "Perfekt for daglig pendling"
    ],
    compatibility: ["All models with rear rack"],
    inStock: true,
    colors: ["Blue"]
  },

  // 14. Double Side Pannier Bag
  {
    id: "acc-pannier-double-001",
    slug: "double-side-pannier-bag",
    name: "Dobbel sykkelveske sett",
    description: "Vanntett dobbel sykkelveske sett for maksimal lastekapasitet. Ideell for sykkelturer, shopping og tunge laster.",
    fullDescription: "Komplett dobbeltsidig sykkelveske system for seriøse lastebehov. Har to romslige vesker som festes til begge sider av ditt bakre bagasjebrett, og gir balansert vektfordeling og maksimal lagringskapasitet. Vanntett konstruksjon med rull-topp låser, reflekterende sikkerhetselementer og hurtigutløsning. Perfekt for sykkelturer, store shoppingturer eller transport av utstyr.",
    price: 119,
    currency: "NOK",
    image: "/images/double-bag/bag.png.png",
    images: [
     "/images/double-bag/bag.png",
    ],
    category: ["Vesker", "Sykkelvesker", "Oppbevaring", "Last", "Sykkelturer"],
    specifications: [
      { label: "Total Capacity", value: "~40-50L (20-25L per side)" },
      { label: "Material", value: "Waterproof 600D polyester" },
      { label: "Mounting", value: "Quick-release rack hooks" },
      { label: "Compartments", value: "Multiple pockets each side" },
      { label: "Closure", value: "Roll-top + buckle closure" },
      { label: "Reflective Elements", value: "3M reflective strips" },
      { label: "Carry Handles", value: "Reinforced handles on both bags" },
      { label: "Shoulder Straps", value: "Removable and adjustable" }
    ],
    features: [
      "Komplett sett - to vesker for begge sider",
      "40-50L total lagringskapasitet",
      "Helt vanntett med forseglede sømmer",
      "Hurtigutløsningssystem",
      "Balansert vektfordeling",
      "3M reflekterende striper for nattsynlighet",
      "Forsterkede bærehåndtak og skulderstropper",
      "Flere rom og lommer",
      "Rull-topp lås med sikre spenner",
      "Ideell for sykkelturer og tung last"
    ],
    compatibility: ["All models with rear rack"],
    inStock: true,
    colors: ["Black", "Grey"]
  },

  // 15. Canopy
  {
    id: "acc-canopy-001",
    slug: "bike-canopy",
    name: "JOBOBIKE Baldakin",
    description: "Værbeskyttelse baldakin for lastesykler. Skjermer rytter og last fra regn, sol og vind.",
    fullDescription: "JOBOBIKE baldakinen gir omfattende værbeskyttelse for lastesykkel-rytterne. Denne holdbare baldakinen skjermer deg og lasten din fra regn, sterk sol og vind, noe som gjør årsrund kjøring mer komfortabel. Har en robust aluminiumsramme med vanntett stoffdeksel, enkel installasjon og justerbar posisjonering. Perfekt for leveringssyklister, foreldre som transporterer barn, eller alle som sykler i alle værforhold.",
    price: 259,
    currency: "NOK",
    image: "/images/canopy/canopy.png.png",
    images: [
      "/images/canopy/canopy.png",
    ],
    category: ["Værbeskyttelse", "Last", "Tilbehør"],
    specifications: [
      { label: "Frame Material", value: "Aluminum alloy" },
      { label: "Cover Material", value: "Waterproof PVC/polyester" },
      { label: "UV Protection", value: "UPF 50+" },
      { label: "Waterproof Rating", value: "IPX5" },
      { label: "Dimensions", value: "Approx. 140cm x 90cm" },
      { label: "Mounting", value: "Frame-specific brackets" },
      { label: "Adjustability", value: "Height and angle adjustable" },
      { label: "Weight", value: "~3-4 kg" }
    ],
    features: [
      "Komplett værbeskyttelse fra regn, sol og vind",
      "UPF 50+ UV-beskyttelse",
      "Vanntett og vindtett stoff",
      "Robust aluminiumsramme konstruksjon",
      "Justerbar høyde og vinkel",
      "Enkel installasjon med inkludert utstyr",
      "Gjennomsiktig frontpanel for synlighet",
      "Sammenleggbart design for oppbevaring",
      "Årsrund kjørekomfort"
    ],
    compatibility: ["Transer", "Mover"],
    inStock: true,
    colors: ["Black"]
  },

  // 16. Monkey Bar
  {
    id: "acc-monkey-bar-001",
    slug: "monkey-bar",
    name: "JOBOBIKE Barnestyre",
    description: "Front styrefeste for barnpassasjer. Sikker og komfortabel sittestilling for unge rytterne.",
    fullDescription: "JOBOBIKE barnestyre er et frontmontert styrefeste som lar deg trygt transportere et barn på lastesykkelen din. Dette innovative tilbehøret gir en sikker holdestang for barn å gripe mens de sykler, posisjonert foran rytteren for maksimal overvåking og interaksjon. Har polstrede grep, justerbar posisjonering og robust konstruksjon for å sikre sikkerhet og komfort.",
    price: 220,
    currency: "NOK",
    image: "/images/monkey-bar/bar.png.png",
    images: [
      "/images/monkey-bar/bar.png",
    ],
    category: ["Barnetransport", "Sikkerhet", "Last", "Tilbehør"],
    specifications: [
      { label: "Material", value: "Steel tube with padding" },
      { label: "Finish", value: "Powder-coated" },
      { label: "Grip Material", value: "Soft foam padding" },
      { label: "Mounting", value: "Frame clamp system" },
      { label: "Weight Capacity", value: "Suitable for children up to ~25kg" },
      { label: "Adjustability", value: "Height and width adjustable" },
      { label: "Age Range", value: "Approximately 2-7 years" }
    ],
    features: [
      "Sikkert frontmontert styre for barn",
      "Polstrede skumgrep for komfort",
      "Justerbar høyde og bredde",
      "Robust stålkonstruksjon med pulverlakkering",
      "Lar foreldre overvåke barn under kjøring",
      "Enkel installasjon med rammeklemmer",
      "Forbedrer kjøreopplevelsen for foreldre og barn",
      "Kompatibel med kapteinsstol og sikkerhetstilbehør"
    ],
    compatibility: ["Transer", "Mover"],
    inStock: true,
    colors: ["Black"]
  },

  // 17. Captain Chair
  {
    id: "acc-captain-chair-001",
    slug: "captain-chair",
    name: "JOBOBIKE Kapteinsstol",
    description: "Premium barnesete med full ryggstøtte og sikkerhetssele. Komfortabel og sikker sitting for unge passasjerer.",
    fullDescription: "JOBOBIKE kapteinsstol er en premium barnesete løsning for lastesykler. Har full ryggstøtte, komfortabel polstring, integrert sikkerhetssele og fotstøtter for sikker og komfortabel transport av barn. Designet for å fungere sømløst med barnestyre for den ultimate familiekjøreopplevelsen. Høykvalitets konstruksjon sikrer holdbarhet og sikkerhet i årevis.",
    price: 245,
    currency: "NOK",
    image: "/images/chair/chair.png.png",
    images: [
      "/images/chair/chair.png",
    ],
    category: ["Barnetransport", "Sitteplasser", "Sikkerhet", "Last"],
    specifications: [
      { label: "Material", value: "High-density foam with waterproof cover" },
      { label: "Backrest", value: "Full back support" },
      { label: "Safety Harness", value: "5-point harness system" },
      { label: "Footrests", value: "Adjustable footrests included" },
      { label: "Weight Capacity", value: "Up to 25-30kg" },
      { label: "Age Range", value: "Approximately 1-7 years" },
      { label: "Mounting", value: "Cargo platform mounting" },
      { label: "Cushion", value: "Weather-resistant padded cushion" }
    ],
    features: [
      "Full ryggstøtte for komfort og sikkerhet",
      "Integrert 5-punkts sikkerhetssele",
      "Høytetthet skumpolstring",
      "Vanntett og værbestandig deksel",
      "Justerbare fotstøtter for voksende barn",
      "Kompatibel med barnestyre",
      "Enkel installasjon på lasteplattform",
      "Holdbar konstruksjon for langtidsbruk",
      "Avtakbar pute for rengjøring"
    ],
    compatibility: ["Transer", "Mover"],
    inStock: true,
    colors: ["Black"]
  },

  // 18. Armrest
  {
    id: "acc-armrest-001",
    slug: "armrest",
    name: "JOBOBIKE Armstøtte",
    description: "Komfortable armstøtter for lastesykkel sitting. Tilfører ekstra komfort og sikkerhet for passasjerer.",
    fullDescription: "JOBOBIKE armstøtte settet gir ekstra komfort og sikkerhet for lastesykkel passasjerer. Disse polstrede armstøttene festes til sidene av lasteplattformen, og gir passasjerer noe å holde seg til og lene seg mot under turen. Spesielt nyttig når man transporterer voksne eller eldre barn, eller når man bruker lasteområdet for lengre turer.",
    price: 59,
    currency: "NOK",
    image: "/images/arm/arm.png.png",
    images: [
      "/images/arm/arm.png",
    ],
    category: ["Comfort", "Cargo", "Accessories", "Seating"],
    specifications: [
      { label: "Material", value: "Padded foam with vinyl cover" },
      { label: "Mounting", value: "Clamp or bolt-on system" },
      { label: "Quantity", value: "Pair (left and right)" },
      { label: "Adjustability", value: "Height adjustable" },
      { label: "Padding", value: "Weather-resistant foam" },
      { label: "Cover Material", value: "Waterproof vinyl" }
    ],
    features: [
      "Selges som par (venstre og høyre)",
      "Komfortabel polstret konstruksjon",
      "Værbestandig vinyldeksel",
      "Høydejusterbar for forskjellige rytterne",
      "Gir ekstra sikkerhet for passasjerer",
      "Enkel installasjon med klemmesystem",
      "Tilfører komfort for lengre turer",
      "Holdbare materialer for utendørs bruk"
    ],
    compatibility: ["Transer"],
    inStock: true,
    colors: ["Black"]
  },

  // 19. Safety Belt
  {
    id: "acc-safety-belt-001",
    slug: "safety-belt",
    name: "JOBOBIKE Sikkerhetsbelte",
    description: "Justerbart sikkerhetsbelte for å sikre last eller passasjerer på bakre bagasjebrett. Essensielt sikkerhetstilbehør.",
    fullDescription: "JOBOBIKE sikkerhetsbelte er et essensielt sikkerhetstilbehør for å sikre last eller passasjerer på ditt bakre bagasjebrett. Har justerbar lengde, hurtigutløsningsspenne og holdbar vevning som tåler utendørs forhold. Perfekt for å sikre vesker, bokser eller gi ekstra sikkerhet for bakre-monterte barneseter.",
    price: 15,
    currency: "NOK",
    image: "/images/belt/belt.png.png",
    images: [
     "/images/belt/belt.png",
    ],
    category: ["Safety", "Cargo", "Accessories"],
    specifications: [
      { label: "Material", value: "Heavy-duty nylon webbing" },
      { label: "Buckle Type", value: "Quick-release plastic buckle" },
      { label: "Length", value: "Adjustable, ~150cm max" },
      { label: "Width", value: "~25-38mm webbing" },
      { label: "Weight Capacity", value: "Suitable for light to medium loads" },
      { label: "Weather Resistance", value: "Water and UV resistant" }
    ],
    features: [
      "Kraftig nylon vevkonstruksjon",
      "Hurtigutløsningsspenne for enkel bruk",
      "Justerbar lengde passer forskjellige laststørrelser",
      "Vann- og UV-bestandige materialer",
      "Sikrer last eller gir ekstra passasjersikkerhet",
      "Kompatibel med alle bakre bagasjebrettsystemer",
      "Lett og bærbar",
      "Essensielt sikkerhetstilbehør"
    ],
    compatibility: ["All models with rear rack"],
    inStock: true,
    colors: ["Black"]
  },

  // 20. Cushion
  {
    id: "acc-cushion-001",
    slug: "rear-rack-cushion",
    name: "JOBOBIKE Bakre bagasjebrett pute",
    description: "Komfortabel pute for bakre bagasjebrett passasjersitting. Vanntett og polstret for utvidet komfort.",
    fullDescription: "Transformer ditt bakre bagasjebrett til en komfortabel passasjersete med JOBOBIKE bakre bagasjebrett pute. Denne polstrede puten har vanntett deksel, anti-skli bunn og sikre festestropper. Perfekt for å gi venner en tur eller skape et komfortabelt sitteområde på bagasjebrettet ditt. Puten er værbestandig og lett å rengjøre.",
    price: 40,
    currency: "NOK",
    image: "/images/cushion/cushion.png.png",
    images: [
      "/images/cushion/cushion.png",
    ],
    category: ["Comfort", "Seating", "Accessories"],
    specifications: [
      { label: "Material", value: "High-density foam with waterproof cover" },
      { label: "Dimensions", value: "Approx. 35cm x 25cm x 5cm thick" },
      { label: "Cover Material", value: "Waterproof vinyl/PU leather" },
      { label: "Bottom", value: "Anti-slip texture" },
      { label: "Attachment", value: "Adjustable straps" },
      { label: "Weight Capacity", value: "Suitable for adults up to 100kg" },
      { label: "Weather Resistance", value: "Waterproof and UV resistant" }
    ],
    features: [
      "Høytetthet skumpolstring for komfort",
      "Vanntett og værbestandig deksel",
      "Anti-skli bunn holder puten på plass",
      "Justerbare stropper for sikker festing",
      "Lett å installere og fjerne",
      "Lett å rengjøre - bare tørk av",
      "Egnet for bakre bagasjebrett passasjersitting",
      "Holdbar konstruksjon for langtidsbruk"
    ],
    compatibility: ["All models with rear rack"],
    inStock: true,
    colors: ["Black"]
  },

  // 21. Loading-Bearing Plate
  {
    id: "acc-loading-plate-001",
    slug: "loading-bearing-plate",
    name: "JOBOBIKE Lastebærende plate",
    description: "Robust lasteplattform utvidelse for lastesykler. Øker lastekapasitet og gir flat lasteoverflate.",
    fullDescription: "JOBOBIKE lastebærende plate er en robust plattform utvidelse designet for seriøse lastebehov. Denne forsterkede platen monteres til lastesykkelens plattform, og gir en stabil, flat overflate for transport av større gjenstander, bokser eller utstyr. Laget av holdbare materialer som kan håndtere betydelig vekt, er den perfekt for leveringssyklister, forretningsbruk eller alle som trenger maksimal lastekapasitet.",
    price: 99,
    currency: "NOK",
    image: "/images/plate/plate.png.png",
    images: [
      "/images/plate/plate.png",
    ],
    category: ["Cargo", "Accessories", "Heavy Duty"],
    specifications: [
      { label: "Material", value: "Reinforced steel or aluminum" },
      { label: "Dimensions", value: "Custom fit for Transer/Mover platform" },
      { label: "Load Capacity", value: "Up to 100kg" },
      { label: "Surface", value: "Anti-slip textured surface" },
      { label: "Mounting", value: "Bolt-on platform mount" },
      { label: "Finish", value: "Powder-coated for weather resistance" },
      { label: "Thickness", value: "~3-5mm" }
    ],
    features: [
      "Kraftig konstruksjon for maksimal lastekapasitet",
      "Flat, stabil plattform for større lastgjenstander",
      "Anti-skli overflate holder gjenstander sikre",
      "Værbestandig pulverlakkering",
      "Bolt-på installasjon for sikker montering",
      "Kompatibel med andre lastetilbehør",
      "Ideell for levering og forretningsbruk",
      "Betydelig øker lastekapasitet"
    ],
    compatibility: ["Transer", "Mover"],
    inStock: true,
    colors: ["Black"]
  }
];

// Helper function to get product by slug
export const getAccessoryBySlug = (slug: string): AccessoryProduct | undefined => {
  return accessoriesProducts.find(product => product.slug === slug);
};

// Helper function to get products by category
export const getAccessoriesByCategory = (category: string[]): AccessoryProduct[] => {
  return accessoriesProducts.filter(product => product.category === category);
};

