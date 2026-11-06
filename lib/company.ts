export const company = {
  name: "Ecobed Insurance Brokers Ltd.",
  legalName: "Economy Bedrock Insurance Brokers",
  mark: "EBIB",
  blurb:
    "An insurance brokerage for individuals, families, and businesses, with a head office in Ikeja, Lagos and an office in Garki, Abuja.",
  leader: {
    name: "Ibikunle Eyinloye",
    title: "MD/CEO",
  },
  email: "ecobedinsbrokersltd@gmail.com",
  phones: [
    {
      display: "+234 701 297 4437",
      href: "tel:+2347012974437",
      whatsapp: "https://wa.me/2347012974437",
    },
    {
      display: "+234 803 712 4475",
      href: "tel:+2348037124475",
      whatsapp: "https://wa.me/2348037124475",
    },
  ],
  offices: [
    {
      label: "Head Office",
      lines: [
        "7, Atinuke Olabanji Street,",
        "Off John Olugbo Street,",
        "Ikeja, Lagos.",
      ],
      street: "7, Atinuke Olabanji Street, Off John Olugbo Street",
      locality: "Ikeja",
      region: "Lagos",
      map: "https://www.google.com/maps/search/?api=1&query=7+Atinuke+Olabanji+Street+Off+John+Olugbo+Street+Ikeja+Lagos",
    },
    {
      label: "Abuja Office",
      lines: [
        "Effab Mail Extension Block D,",
        "First Floor, Suite D30,",
        "Area II, Garki, Abuja.",
      ],
      street: "Effab Mail Extension Block D, First Floor, Suite D30",
      locality: "Garki",
      region: "Abuja",
      map: "https://www.google.com/maps/search/?api=1&query=Effab+Mail+Extension+Block+D+Suite+D30+Area+11+Garki+Abuja",
    },
  ],
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
] as const;

export const brokerDuties = [
  {
    title: "Take the instruction",
    body: "Individuals, families, and organisations instruct the brokerage. We work out the risk with you before any insurer is approached.",
  },
  {
    title: "Place the policy",
    body: "We arrange the cover with an insurance company. The insurer underwrites the risk, sets the terms, and issues the policy. Ecobed does not underwrite.",
  },
  {
    title: "Stay with the claim",
    body: "When a loss happens, you call the brokerage. We follow the claim with the insurer and keep you informed until the file is closed.",
  },
] as const;

export const practiceLines = [
  {
    title: "Personal lines",
    summary: "Cover arranged for individuals and families.",
    links: [
      { href: "/services#motor", label: "Motor" },
      { href: "/services#home", label: "Home" },
      { href: "/services#people", label: "Personal accident and group life" },
      { href: "/services#travel", label: "Travel" },
    ],
  },
  {
    title: "Commercial lines",
    summary: "Cover arranged for businesses and other organisations.",
    links: [
      { href: "/services#commercial-property", label: "Business property" },
      { href: "/services#public-liability", label: "Liability" },
      { href: "/services#marine", label: "Marine cargo" },
      { href: "/services#engineering", label: "Contractors’ all risks" },
    ],
  },
] as const;

export const placementSteps = [
  {
    title: "You describe the risk",
    body: "The car, the shop, the contract, the stock, or the people on the payroll. Bring whatever you already know. We will ask for the rest.",
  },
  {
    title: "We set out the cover",
    body: "We say what fits, in plain language, including the limits and the things a policy of that kind does not do.",
  },
  {
    title: "An insurer issues the policy",
    body: "We place the cover with an insurance company. When the documents come, we check them and send them to you.",
  },
  {
    title: "A claim comes back to us",
    body: "Call either line and have the policy number ready. We follow the file with you and with the insurer.",
  },
] as const;

export type Service = {
  slug: string;
  group: string;
  title: string;
  summary: string;
  body: string;
  forWhom: string;
};

export const serviceGroups = [
  "Vehicles",
  "Property",
  "People",
  "Goods",
  "Liability and projects",
] as const;

export const services: Service[] = [
  {
    slug: "motor",
    group: "Vehicles",
    title: "Motor",
    summary: "Private cars, commercial vehicles, and fleets.",
    body: "Third party, third party fire and theft, and comprehensive cover. The right one depends on the vehicle, who drives it, and whether it is used for private or business journeys. We arrange single vehicles and fleets.",
    forWhom: "Households, drivers, and companies with vehicles on the road.",
  },
  {
    slug: "home",
    group: "Property",
    title: "Home",
    summary: "Buildings and contents, on fire and special perils.",
    body: "Fire and special perils for a house or flat, with contents added when you want the things inside covered on the same policy. We will ask about the building, how it is used, and what you want named.",
    forWhom: "Homeowners and tenants who want the building, the contents, or both covered.",
  },
  {
    slug: "commercial-property",
    group: "Property",
    title: "Business property",
    summary: "Shops, offices, warehouses, stock, and machinery.",
    body: "Fire and special perils for business premises. Stock, fixtures, and machinery can sit on the schedule when the insurer agrees the sums. We start from what is in the building and what it would cost to replace.",
    forWhom: "Traders, offices, warehouses, and other businesses with premises or stock.",
  },
  {
    slug: "burglary",
    group: "Property",
    title: "Burglary",
    summary: "Loss following forcible entry at named premises.",
    body: "Cover for theft that follows forcible or violent entry at the address on the policy. It is not the same thing as fire cover, and the premises and security details matter to the insurer.",
    forWhom: "Homes and businesses that need theft cover as well as fire cover.",
  },
  {
    slug: "money",
    group: "Property",
    title: "Money",
    summary: "Cash on the premises and cash in transit.",
    body: "Cover for cash while it is on the premises and while it is being moved, within the limits an insurer will set. We will ask how cash is kept and how often it moves.",
    forWhom: "Businesses that hold or move cash.",
  },
  {
    slug: "people",
    group: "People",
    title: "Personal accident and group life",
    summary: "Benefits for injury, and group life for a workforce.",
    body: "Personal accident pays a stated benefit for death or specified injury caused by accident. Group life is arranged for employees as a group. Both depend on the insurer’s terms and on the people named.",
    forWhom: "Individuals, families, and employers arranging benefits for staff.",
  },
  {
    slug: "travel",
    group: "People",
    title: "Travel",
    summary: "Medical and baggage cover for trips outside Nigeria.",
    body: "Travel policies for trips abroad, typically including emergency medical treatment and baggage, on a plan an insurer is willing to issue for the destination and the length of stay.",
    forWhom: "People travelling outside Nigeria who need cover for the journey.",
  },
  {
    slug: "goods-in-transit",
    group: "Goods",
    title: "Goods in transit",
    summary: "Goods moving by road inside the country.",
    body: "Cover for goods while they are on the road, on the journey described to the insurer. We will ask what is being carried, how often, and on whose vehicle.",
    forWhom: "Traders and haulage businesses moving goods inland.",
  },
  {
    slug: "marine",
    group: "Goods",
    title: "Marine cargo",
    summary: "Imports and exports on the voyage described.",
    body: "Cargo cover for goods on a sea or air voyage, for the journey and the interests named in the policy. The invoice, the route, and the terms of sale are what the insurer will want to see.",
    forWhom: "Importers and exporters with goods on a voyage.",
  },
  {
    slug: "public-liability",
    group: "Liability and projects",
    title: "Public liability",
    summary: "Injury or damage claimed by a third party.",
    body: "Cover for a business’s legal liability if a third party is injured or their property is damaged in connection with the business. The limit and the business activity have to match what the insurer accepts.",
    forWhom: "Shops, offices, contractors, and other businesses open to the public or working on other people’s sites.",
  },
  {
    slug: "employers-liability",
    group: "Liability and projects",
    title: "Employers’ liability",
    summary: "Liability to employees for injury at work.",
    body: "Cover for claims by employees for injury arising out of their work, including workmen’s compensation where that is the form required. We will ask for the nature of the work and the number of staff.",
    forWhom: "Employers with people working for them.",
  },
  {
    slug: "professional-indemnity",
    group: "Liability and projects",
    title: "Professional indemnity",
    summary: "Claims arising from professional work or advice.",
    body: "Cover for claims that a professional service or piece of advice caused a client a loss. Insurers underwrite this on the profession, the fees, and the work actually done.",
    forWhom: "Practices and consultants whose work is advice or a professional service.",
  },
  {
    slug: "fidelity",
    group: "Liability and projects",
    title: "Fidelity guarantee",
    summary: "Loss from the dishonesty of an employee.",
    body: "Cover for direct financial loss caused by a dishonest act of an employee, where that act is within the policy. The staff roles and the controls around money and stock are part of the proposal.",
    forWhom: "Businesses that want cover for employee dishonesty.",
  },
  {
    slug: "engineering",
    group: "Liability and projects",
    title: "Contractors’ all risks",
    summary: "Building works, plant, and machinery on a site.",
    body: "Contractors’ all risks and plant cover for building work and for machinery in use on a site. The contract value, the period, and the plant list are the usual starting point.",
    forWhom: "Contractors and project owners with work in progress.",
  },
];

export const homeServiceSlugs = [
  "motor",
  "home",
  "commercial-property",
  "burglary",
  "goods-in-transit",
  "marine",
  "public-liability",
  "people",
] as const;
