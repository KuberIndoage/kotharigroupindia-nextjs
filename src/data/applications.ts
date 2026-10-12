export interface ApplicationProduct {
  name: string;
  url: string;
}

export interface ApplicationItem {
  title: string;
  description: string;
  image: string;
  products: ApplicationProduct[];
  detailSlug?: string;
}

export interface ApplicationGroup {
  title: string;
  intro: string;
  items: ApplicationItem[];
}

export interface DivisionApplications {
  id: 'pipe-division' | 'irrigation-division';
  metaTitle: string;
  metaDescription: string;
  heroEyebrow: string;
  h1: string;
  intro: string;
  heroImage: string;
  groups: ApplicationGroup[];
  cta: {
    heading: string;
    body: string;
    ctaText: string;
  };
}

export const irrigationApplications: DivisionApplications = {
  id: 'irrigation-division',
  metaTitle: 'Irrigation Applications | Crop, Water Management & Landscaping Solutions',
  metaDescription:
    'Explore Kothari irrigation solutions by application — crop-wise irrigation, drip & sprinkler systems, fertigation, and horticulture & landscaping needs.',
  heroEyebrow: 'Kothari Group',
  h1: 'Irrigation Applications',
  intro:
    'From individual crops to full-scale water management, our irrigation systems are engineered for the specific demands of Indian farming. Explore our full range of solutions below, organized by the application that matters most to you.',
  heroImage: '/heronew.jpg',
  groups: [
    {
      title: 'Water Management Applications',
      intro:
        'The right irrigation method depends on your land, crop, and water source. Explore our core water management systems below.',
      items: [
        {
          title: 'Drip Irrigation System',
          description:
            'Precision water delivery direct to the root zone, minimizing waste while maximizing yield. Drip irrigation is the foundation of efficient water use across crops, orchards, and plantations, reducing runoff and evaporation compared to conventional methods.',
          detailSlug: 'drip-irrigation-system',
          image: 'https://picsum.photos/seed/kothari-drip-irrigation/800/600',
          products: [
            { name: 'Dripline K-Lin PCAS', url: '/drip-line/dripline-k-lin-pcas' },
            { name: 'Dripline K-Gol NPC', url: '/drip-line/dripline-k-gol-npc' },
            { name: 'Turbo Dripper', url: '/emitters-drippers/turbo-dripper' },
            { name: 'Drip Poly Fittings', url: '/polyfittings-and-accessories/drip-poly-fittings' },
          ],
        },
        {
          title: 'Sprinkler Irrigation System',
          description:
            'Uniform overhead coverage designed for larger, open field areas. Sprinkler irrigation is ideal where crop density and field layout make drip less practical, delivering even water distribution across wide areas.',
          detailSlug: 'sprinkler-irrigation-system',
          image: 'https://picsum.photos/seed/kothari-sprinkler-irrigation/800/600',
          products: [
            { name: 'Metal Sprinkler', url: '/metal-sprinkler/metal-sprinkler' },
            { name: 'Mini Sprinkler', url: '/mini-sprinklers-and-assemblies/mini-sprinkler-rotating-mini-sprinkler-system-for-field-crops-kothari' },
            { name: 'K-Eco Sprinkler', url: '/k-eco-rain-pipes-and-k-flex-submain-pipes/k-eco-sprinkler' },
            { name: 'HDPE Pipe Sprinkler Set', url: '/sprinkler-connectors-and-accessories/hdpe-pipe-sprinkler-set' },
          ],
        },
        {
          title: 'Fertigation Systems',
          description:
            'Combined water and nutrient delivery through dosing pumps, Venturi injectors, and IoT-enabled fertigation machines.',
          image: 'https://picsum.photos/seed/kothari-fertigation/800/600',
          products: [
            { name: 'Nutrijet Fertigation Machine', url: '/fertigation-machines/nutrijet-fertigation-machines' },
            { name: 'Venturi Injector', url: '/dosing-pumps-and-fertilizer-injectors/venturi-injector' },
            { name: 'Dosing Pump', url: '/dosing-pumps-and-fertilizer-injectors/dozing-pump' },
          ],
        },
        {
          title: 'Water Saving & Efficient Irrigation',
          description:
            'Low-flow, high-uniformity systems designed to reduce water usage without compromising crop health.',
          image: 'https://picsum.photos/seed/kothari-water-saving/800/600',
          products: [
            { name: 'Dripline K-Lin NPC', url: '/drip-line/dripline-k-lin-npc' },
            { name: 'Micro Sprayer', url: '/micro-jets-and-assemblies/micro-sprayer' },
          ],
        },
        {
          title: 'Crop Water Management Systems',
          description:
            'Complete system design, from filtration to automation, for consistent, reliable irrigation scheduling.',
          image: 'https://picsum.photos/seed/kothari-crop-water-management/800/600',
          products: [
            { name: 'Irribeat Controllers', url: '/controllers/irribeat-controllers' },
            { name: 'GSI Galcon Smart Irrigation Controller', url: '/controllers/gsi-galcon-smart-irrigation-controller' },
            { name: 'Galpro Controller (AC/DC)', url: '/controllers/galpro-controller-ac-dc' },
          ],
        },
      ],
    },
    {
      title: 'Crop-wise Applications',
      intro:
        'Every crop has different water, spacing, and pressure needs. Our irrigation systems are matched to the specific requirements of major Indian crops.',
      items: [
        {
          title: 'Drip Irrigation for Sugarcane',
          description:
            "High-volume, consistent water delivery suited to sugarcane's long growing cycle, supported by our K-Lin dripline range.",
           detailSlug: 'drip-irrigation-for-sugarcane',
          image: 'https://picsum.photos/seed/kothari-sugarcane/800/600',
          products: [
            { name: 'Dripline K-Lin PCAS', url: '/drip-line/dripline-k-lin-pcas' },
            { name: 'Dripline K-Lin NPC', url: '/drip-line/dripline-k-lin-npc' },
          ],
        },
        {
          title: 'Cotton Irrigation Systems',
          description:
            'Uniform, low-CV drip irrigation that supports even boll development across the field.',
          image: 'https://picsum.photos/seed/kothari-cotton/800/600',
          products: [
            { name: 'Dripline K-Gol PC', url: '/drip-line/dripline-k-gol-pc' },
            { name: 'Turbo Dripper', url: '/emitters-drippers/turbo-dripper' },
          ],
        },
        {
          title: 'Vegetable Irrigation Systems',
          description:
            'Precise, gentle irrigation suited to onion, tomato, chilli, and other short-duration vegetable crops.',
          detailSlug: 'vegetable-irrigation-systems',
          image: 'https://picsum.photos/seed/kothari-vegetables/800/600',
          products: [
            { name: 'Thin Wall Dripline K-Slim', url: '/thinwall-drip-line/thin-wall-dripline-k-slim' },
            { name: 'Thinwall Dripline K-Slim Ultra', url: '/thinwall-drip-line/thinwall-dripline-k-slim-ultra' },
          ],
        },
        {
          title: 'Banana Irrigation Systems',
          description:
            'Reliable drip and micro sprinkler solutions for banana plantations, supporting consistent yield.',
           detailSlug: 'banana-irrigation-systems',
          image: 'https://picsum.photos/seed/kothari-banana/800/600',
          products: [
            { name: 'Dripline K-Lin PCND', url: '/drip-line/dripline-k-lin-pcnd' },
            { name: 'K-Mic Micro Sprinkler', url: '/micro-sprinklers-and-assemblies/k-mic-micro-sprinkler' },
          ],
        },
        {
          title: 'Pomegranate Irrigation Systems',
          description:
            'Targeted, trunk-safe irrigation for pomegranate orchards, including frost and heat protection options.',
          image: 'https://picsum.photos/seed/kothari-pomegranate/800/600',
          products: [
            { name: 'K-Mic Excel', url: '/micro-sprinklers-and-assemblies/k-mic-excel' },
            { name: 'Micro Sprayer', url: '/micro-jets-and-assemblies/micro-sprayer' },
          ],
        },
        {
          title: 'Grape Irrigation Systems (Vineyard Irrigation)',
          description:
            'Precision drip irrigation for vineyards, including pressure-compensated options for sloped terrain.',
          image: 'https://picsum.photos/seed/kothari-grapes/800/600',
          products: [
            { name: 'Dripline K-Lin PCAS', url: '/drip-line/dripline-k-lin-pcas' },
            { name: 'PC Dripper', url: '/emitters-drippers/pc-dripper' },
          ],
        },
        {
          title: 'Irrigation for Other Field Crops',
          description:
            'Flexible irrigation solutions adaptable to pulses, oilseeds, fodder, and other field crops.',
          detailSlug: 'irrigation-for-field-crops',
          image: 'https://picsum.photos/seed/kothari-field-crops/800/600',
          products: [
            { name: 'LD Krishi Pipe (Lay Flat Tubes)', url: '/pe-pipes-and-fittings/ld-krishi-pipe-lay-flat-tubes' },
            { name: 'Polytube', url: '/drip-tubes-polytube/polytube' },
          ],
        },
      ],
    },
    {
      title: 'Horticulture & Landscaping',
      intro:
        'Beyond field crops, our irrigation systems support nurseries, orchards, and landscaped spaces where precision and gentleness matter.',
      items: [
        {
          title: 'Orchard Irrigation Systems',
          description:
            'Overhead and drip irrigation solutions for fruit orchards, including frost protection micro sprinklers.',
          detailSlug: 'orchard-irrigation-systems',
          image: 'https://picsum.photos/seed/kothari-orchard/800/600',
          products: [
            { name: 'K-Mist', url: '/misters-and-assemblies/k-mist' },
            { name: 'K-Fogger', url: '/foggers-and-assemblies/k-fogger' },
            { name: 'K-Tuff Micro Sprinkler', url: '/micro-sprinklers-and-assemblies/k-tuff-micro-sprinkler' },
          ],
        },
        {
          title: 'Nursery Irrigation Systems',
          description:
            'Gentle, insect-proof micro sprinklers designed specifically for delicate nursery plants.',
           detailSlug: 'nursery-irrigation-systems',
          image: 'https://picsum.photos/seed/kothari-nursery/800/600',
          products: [
            { name: 'K-Fogger', url: '/foggers-and-assemblies/k-fogger' },
            { name: 'Micro Sprayer', url: '/micro-jets-and-assemblies/micro-sprayer' },
          ],
        },
        {
          title: 'Landscaping & Turf Irrigation',
          description:
            'Pop-up sprinklers, rotors, and turf irrigation systems for parks, gardens, and public landscaped areas.',
           detailSlug: 'landscaping-turf-irrigation',
          image: 'https://picsum.photos/seed/kothari-landscaping/800/600',
          products: [
            { name: 'Pop-up Spray Heads and Rotors', url: '/garden-and-landscape-sprinklers/pop-up-spray-heads-rotors-landscape-turf-sprinklers-kothari-group' },
            { name: 'Swing Joint', url: '/garden-and-landscape-sprinklers/swing-joint-flexible-connector-for-pop-up-sprinklers-kothari-group' },
          ],
        },
      ],
    },
  ],
  cta: {
    heading: 'Not Sure Which System Fits Your Crop?',
    body: "Talk to our team and we'll help you find the right irrigation solution for your specific application.",
    ctaText: 'Get in Touch',
  },
};

export const pipeApplications: DivisionApplications = {
  id: 'pipe-division',
  metaTitle: 'Pipe Applications | Plumbing, Industrial & Infrastructure Solutions',
  metaDescription:
    'Explore Kothari pipe solutions by application — residential plumbing, industrial water supply, municipal infrastructure, borewell, and drainage systems.',
  heroEyebrow: 'Kothari Group',
  h1: 'Pipe Applications',
  intro:
    'From residential plumbing to large-scale municipal infrastructure, our pipes and fittings are built for the specific demands of every application. Explore our full range of solutions below, organized by use case.',
  heroImage: '/heronew.jpg',
  groups: [
    {
      title: 'Agriculture & Borewell Applications',
      intro:
        'From groundwater extraction to on-farm water supply, our pipes are built for the realities of agricultural infrastructure.',
      items: [
        {
          title: 'Borewell Water Supply Pipes',
          description:
            'Column pipes, casing pipes, and screen pipes engineered for safe, long-term groundwater extraction.',
          image: 'https://picsum.photos/seed/kothari-borewell/800/600',
          products: [
            { name: 'Column Pipes', url: '/column-pipes/column-pipes-with-ss' },
            { name: 'Casing Pipes', url: '/casing-pipes/casing-pipes-fittings' },
            { name: 'Screen Pipe/Slotted Pipe', url: '/casing-pipes/screen-pipe-slotted-pipe' },
            { name: 'Ribbed Casing Pipe', url: '/casing-pipes/ribbed-casing-pipe' },
          ],
        },
        {
          title: 'Farm Water Supply Pipes',
          description:
            'Agricultural PVC and HDPE pipes for reliable on-farm water distribution.',
          detailSlug: 'farm-water-supply',
          image: 'https://picsum.photos/seed/kothari-farm-water/800/600',
          products: [
            { name: 'HDPE Piping', url: '/pe-pipes-and-fittings/hdpe-piping' },
            { name: 'Agri PVC Moulded Fittings', url: '/upvc-pressure-pipes-fittings/agri-pvc-moulded-fittings' },
            { name: 'Self Fit PVC Pipe', url: '/upvc-pressure-pipes-fittings/self-fit-pvc-pipe' },
          ],
        },
      ],
    },
    {
      title: 'Infrastructure & Municipal Applications',
      intro:
        'Large-scale piping solutions built for municipal, rural, and public infrastructure projects.',
      items: [
        {
          title: 'Municipal Water Supply Pipes',
          description:
            'Durable pipe systems for city and town water distribution networks.',
          detailSlug: 'municipal-water-supply',
          image: 'https://picsum.photos/seed/kothari-municipal/800/600',
          products: [
            { name: 'HDPE Piping', url: '/pe-pipes-and-fittings/hdpe-piping' },
            { name: 'UPVC Pipes & Fittings', url: '/upvc/upvc-astm-plumbing-piping-system' },
          ],
        },
        {
          title: 'Rural Water Supply Pipes',
          description:
            'MDPE pipes and compression fittings supporting Jal Jeevan Mission and rural water access projects.',
          detailSlug: 'rural-water-supply',
          image: 'https://picsum.photos/seed/kothari-rural-water/800/600',
          products: [
            { name: 'MDPE Pipes', url: '/pe-pipes-and-fittings/mdpe-pipes' },
            { name: 'Compression Fittings', url: '/pe-pipes-and-fittings/compression-fittings' },
          ],
        },
        {
          title: 'Water Distribution Networks',
          description:
            'HDPE and UPVC pipe systems for large-scale water conveyance and distribution.',
          image: 'https://picsum.photos/seed/kothari-water-distribution/800/600',
          products: [
            { name: 'HDPE Coils', url: '/pe-pipes-and-fittings/hdpe-coils' },
            { name: 'HDPE Fittings', url: '/pe-pipes-and-fittings/hdpe-fittings' },
            { name: 'UPVC Pipes & Fittings', url: '/upvc/upvc-astm-plumbing-piping-system' },
          ],
        },
        {
          title: 'Rainwater Management Systems',
          description:
            'SWR and underground drainage systems for effective rainwater collection and discharge.',
           detailSlug: 'rainwater-management-system',
          image: 'https://picsum.photos/seed/kothari-rainwater/800/600',
          products: [
            { name: 'SWR Pipes and Fittings', url: '/soil-waste-and-rainwater-pipes-and-fittings/swr-pipes-and-fittings-for-drainage-systems' },
            { name: 'PP Low Noise Drainage System', url: '/soil-waste-and-rainwater-pipes-and-fittings/pp-low-noise-drainage-system' },
          ],
        },
      ],
    },
    {
      title: 'Plumbing Applications',
      intro:
        'Reliable, leak-free plumbing for every type of building, from single homes to large commercial complexes.',
      items: [
        {
          title: 'Residential Plumbing Systems',
          description:
            'CPVC and UPVC plumbing systems for homes, apartments, and housing societies.',
          detailSlug: 'residential-plumbing-system',
          image: 'https://picsum.photos/seed/kothari-residential/800/600',
          products: [
            { name: 'CPVC Pipes & Fittings', url: '/cpvc/cpvc-hot-and-cold-water-piping-system' },
            { name: 'UPVC Pipes & Fittings', url: '/upvc/upvc-astm-plumbing-piping-system' },
          ],
        },
        {
          title: 'Commercial & Institutional Building Plumbing',
          description:
            'Durable plumbing and drainage systems for offices, schools, and commercial complexes.',
           detailSlug: 'commercial-building-plumbing-system',
          image: 'https://picsum.photos/seed/kothari-commercial/800/600',
          products: [
            { name: 'UPVC Pipes & Fittings', url: '/upvc/upvc-astm-plumbing-piping-system' },
            { name: 'CPVC Pipes & Fittings', url: '/cpvc/cpvc-hot-and-cold-water-piping-system' },
          ],
        },
        {
          title: 'High-Rise Building Piping Systems',
          description:
            'Pressure-rated piping systems engineered for multi-storey plumbing risers and shafts.',
          image: 'https://picsum.photos/seed/kothari-high-rise/800/600',
          products: [
            { name: 'CPVC Pipes & Fittings', url: '/cpvc/cpvc-hot-and-cold-water-piping-system' },
            { name: 'CPVC Solvent Cement', url: '/cpvc/cpvc-solvent-cement' },
          ],
        },
        {
          title: 'Hotels & Hospitals Plumbing Systems',
          description:
            'Reliable, low-maintenance plumbing systems for round-the-clock institutional use.',
          image: 'https://picsum.photos/seed/kothari-institutional/800/600',
          products: [
            { name: 'CPVC Pipes & Fittings', url: '/cpvc/cpvc-hot-and-cold-water-piping-system' },
            { name: 'UPVC Pipes & Fittings', url: '/upvc/upvc-astm-plumbing-piping-system' },
          ],
        },
      ],
    },
    {
      title: 'Industrial Applications',
      intro:
        'Corrosion-resistant, chemically stable piping for demanding industrial environments.',
      items: [
        {
          title: 'Industrial Water Supply Pipes',
          description:
            'HDPE and UPVC pipes for reliable industrial water distribution.',
           detailSlug: 'industrial-water-supply',
          image: 'https://picsum.photos/seed/kothari-industrial-water/800/600',
          products: [
            { name: 'HDPE Piping', url: '/pe-pipes-and-fittings/hdpe-piping' },
            { name: 'UPVC Pipes & Fittings', url: '/upvc/upvc-astm-plumbing-piping-system' },
          ],
        },
        {
          title: 'Process Water Piping',
          description:
            'Chemically resistant piping for industrial process lines and cooling systems.',
          image: 'https://picsum.photos/seed/kothari-process-water/800/600',
          products: [
            { name: 'Butterfly Valve', url: '/valves/butterfly-valve' },
            { name: 'Flush Valve', url: '/valves/flush-valve' },
          ],
        },
        {
          title: 'Chemical Fluid Conveyance Pipes',
          description:
            'Corrosion-resistant pipes and fittings for safe transport of chemicals and effluents.',
          image: 'https://picsum.photos/seed/kothari-chemical/800/600',
          products: [
            { name: 'Single & Double Union PVC Ball Valve', url: '/valves/single-and-double-union-pvc-ball-valve' },
            { name: 'Double Union PP Ball Valve', url: '/valves/double-union-pp-ball-valve' },
          ],
        },
      ],
    },
    {
      title: 'Drainage Applications',
      intro:
        'Reliable drainage systems for buildings, sewage, and wastewater management.',
      items: [
        {
          title: 'Building Drainage Systems',
          description:
            'SWR pipes and fittings for soil, waste, and rainwater discharge in residential and commercial buildings.',
          detailSlug: 'building-drainage-system',
          image: 'https://picsum.photos/seed/kothari-building-drainage/800/600',
          products: [
            { name: 'SWR Pipes and Fittings', url: '/soil-waste-and-rainwater-pipes-and-fittings/swr-pipes-and-fittings-for-drainage-systems' },
            { name: 'PP Low Noise Drainage System', url: '/soil-waste-and-rainwater-pipes-and-fittings/pp-low-noise-drainage-system' },
          ],
        },
        {
          title: 'Sewage Drainage Systems',
          description:
            'Underground drainage pipes (UDS, Foamcore, DWC) engineered for municipal and building sewerage systems.',
          image: 'https://picsum.photos/seed/kothari-sewage/800/600',
          products: [
            { name: 'Underground DWC Pipes', url: '/underground-pipe-and-fittings/underground-double-wall-corrugated-pipes' },
            { name: 'Foamcore Underground Drainage Piping System', url: '/underground-pipe-and-fittings/foamcore-underground-drainage-piping-system' },
            { name: 'UPVC Underground Drainage Piping System (Solid Wall UDS)', url: '/underground-pipe-and-fittings/upvc-underground-drainage-piping-system' },
          ],
        },
        {
          title: 'Rainwater Drainage Systems',
          description:
            'Low-noise and standard drainage systems for effective rainwater discharge.',
             detailSlug: 'rainwater-drainage-systems',
          image: 'https://picsum.photos/seed/kothari-rainwater-drainage/800/600',
          products: [
            { name: 'PP Low Noise Drainage System', url: '/soil-waste-and-rainwater-pipes-and-fittings/pp-low-noise-drainage-system' },
            { name: 'Sub-Surface Drainage System', url: '/underground-pipe-and-fittings/sub-surface-drainage-system' },
          ],
        },
        {
          title: 'Wastewater Drainage Systems',
          description:
            'HDPE sewerage pipes built for industrial and municipal wastewater management.',
          image: 'https://picsum.photos/seed/kothari-wastewater/800/600',
          products: [
            { name: 'HDPE (Sewerage IS: 14333)', url: '/underground-pipe-and-fittings/hdpe' },
          ],
        },
      ],
    },
  ],
  cta: {
    heading: 'Need the Right Pipe for Your Project?',
    body: 'Our team can help you identify the right piping solution for your specific application, from plumbing to infrastructure.',
    ctaText: 'Get in Touch',
  },
};

export const applicationsByDivision: Record<string, DivisionApplications> = {
  'irrigation-division': irrigationApplications,
  'pipe-division': pipeApplications,
};

const ADMIN = 'https://admin.kotharigroupindia.com/wp-content/uploads';

export interface ApplicationDetailPoint {
  label: string;
  text: string;
}

export interface ApplicationDetailProduct {
  name: string;
  url: string;
  image: string;
  paragraphs: string[];
}

export interface ApplicationDetailRow {
  requirement: string;
  product: string;
  role: string;
}

export interface ApplicationDetailStep {
  title: string;
  text: string;
}

export interface ApplicationDetail {
  slug: string;
  division: 'pipe-division' | 'irrigation-division';
  parentHref: string;
  parentLabel: string;
  divisionHref: string;
  metaTitle: string;
  metaDescription: string;
  heroEyebrow: string;
  h1: string;
  tagline: string;
  image: string;
  bannerImage?: string;
  overview: {
    heading: string;
    paragraphs: string[];
  };
  whereUsed: {
    heading: string;
    intro: string[];
    items: ApplicationDetailPoint[];
    note?: string;
  };
  requirements: {
    heading: string;
    intro: string;
    items: ApplicationDetailPoint[];
  };
  products: {
    heading: string;
    intro: string;
    items: ApplicationDetailProduct[];
    mapping: {
      heading?: string;
      columnHeadings: [string, string, string];
      rows: ApplicationDetailRow[];
    };
  };
  howItWorks: {
    heading: string;
    intro: string;
    flow: string[];
    steps: ApplicationDetailStep[];
  };
  cta: {
    heading: string;
    body: string;
    buttonText: string;
  };
}

export const applicationDetails: ApplicationDetail[] = [
  {
    slug: 'drip-irrigation-system',
    division: 'irrigation-division',
    parentHref: '/irrigation-applications',
    parentLabel: 'Irrigation Applications',
    divisionHref: '/irrigation-division',
    metaTitle: 'Drip Irrigation System & Applications | Kothari',
    metaDescription:
      'Explore drip irrigation applications, system components, driplines, fittings and drippers for organised agricultural water distribution.',
    heroEyebrow: 'Irrigation Applications',
    h1: 'Drip Irrigation System',
    tagline:
      'A controlled water distribution approach that delivers irrigation close to the crop through a planned network of pipes, driplines and fittings.',
    image: '/heronew.jpg',
    bannerImage: '/drip.png',
    overview: {
      heading: 'Understanding Drip Irrigation Systems',
      paragraphs: [
        'Drip irrigation systems are built to get water right where it\u2019s needed near the plant\u2019s roots instead of soaking the whole field. Because of that, the layout of the water distribution network really matters. You need pipes and connections that can move water from the source, through the field, and straight into the dripline next to each row of crops',
        'Most setups start out pretty similarly. You\u2019ve got your water source, a filter to keep things clean, main and secondary pipelines, all the various fittings, and finally the driplines or drippers that handle the actual watering. How you arrange all these parts depends on what you\u2019re growing, the size and shape of your field, how much water you have, and what kind of conditions you\u2019re dealing with.',
        'For farmers and irrigation specialists, the big task is building a system that fits the field\u2019s layout and can stand up to daily use. That means you have to think ahead and make sure every section can be hooked up, checked for problems, and fixed easily. Things like water quality, filtration, flow rate, pressure, and how everything connects can change your plan.',
        'At the end of the day, the piping network is the heart of a drip irrigation system. It\u2019s what links your water source to every single plant. If you get that part right, the rest just works.',
      ],
    },
    whereUsed: {
      heading: 'Where Drip Irrigation Is Used',
      intro: [
        'Drip irrigation is used where water needs to be delivered in a controlled manner close to the crop. It is particularly useful for crops planted in defined rows or locations.',
        'Common applications include:',
      ],
      items: [
        {
          label: 'Fruit Orchards',
          text: 'Driplines can be arranged along plant rows to bring irrigation water close to individual plants.',
        },
        {
          label: 'Vegetable Crops',
          text: 'Row-based drip systems can be planned according to crop spacing and field layout.',
        },
        {
          label: 'Plantation Crops',
          text: 'Longer crop rows can be served through a planned network of mainlines, submains and driplines.',
        },
        {
          label: 'Open-Field Agriculture',
          text: 'Drip systems can be configured for different field layouts where localised water application is required.',
        },
        {
          label: 'Protected Cultivation',
          text: 'Controlled irrigation can be integrated into crop-growing areas where water delivery needs to follow a defined planting arrangement.',
        },
        {
          label: 'Fertigation Applications',
          text: 'A drip irrigation network can also form part of a system where nutrients are supplied along with irrigation water.',
        },
      ],
      note: 'The final configuration depends on the crop, field conditions, water source and irrigation design.',
    },
    requirements: {
      heading: 'Key Requirements for a Drip Irrigation System',
      intro: 'The design of a drip irrigation system should begin with the field and water source. Product selection comes after understanding how water needs to move through the system.',
      items: [
        {
          label: 'Water Source and Quality',
          text: 'The source determines how water enters the irrigation network. Water quality should also be considered because suspended particles and other contaminants can affect components used for controlled water delivery. Drip irrigation filters are therefore an important part of many drip systems.',
        },
        {
          label: 'Flow and Pressure',
          text: 'Available water flow and operating pressure need to be considered when dividing the field into irrigation sections and selecting the appropriate system components. The distribution network should be planned around the actual operating conditions.',
        },
        {
          label: 'Field Layout',
          text: 'Crop spacing, row length, field size and changes in elevation influence the routing of mainlines, submains and driplines. Longer distances and different field levels may require particular attention during system planning.',
        },
        {
          label: 'Dripline Arrangement',
          text: 'The dripline needs to follow the crop layout so that water is delivered where it is required. The selection should be considered together with the crop arrangement and overall irrigation design.',
        },
        {
          label: 'Connections and Maintenance',
          text: 'Drip irrigation fittings provide the connections between different parts of the system. The layout should also allow practical access to filters, valves, fittings and other components that may need inspection or maintenance.',
        },
      ],
    },
    products: {
      heading: 'Recommended Kothari Products for Drip Irrigation',
      intro: 'The drip irrigation system is made up of several connected components. Kothari products can be considered at different points of the system depending on the required method of water delivery and field arrangement.',
      items: [
        {
          name: 'Dripline K-Lin PCAS',
          url: '/drip-line/dripline-k-lin-pcas',
          image: `${ADMIN}/2025/04/DRIPLINE-K-LIN-PCAS-1.webp`,
          paragraphs: [
            'Dripline K-Lin PCAS forms part of the final water-distribution network in a drip irrigation system. It is installed along the crop area so that irrigation water can be delivered close to the plants.',
            'It is relevant where the field is organised into crop rows and the irrigation layout needs to follow those rows. Its selection should be considered together with the filtration, distribution network and crop layout.',
          ],
        },
        {
          name: 'Dripline K-Gol NPC',
          url: '/drip-line/dripline-k-gol-npc',
          image: `${ADMIN}/2025/04/DRIPLINE-K-GOL-NPC.webp`,
          paragraphs: [
            'Dripline K-Gol NPC is another dripline option for systems where water needs to be distributed along the crop area. It becomes part of the field-level network connecting the upstream water-distribution system with the point of irrigation.',
            'For system planning, the dripline should be evaluated in relation to the crop arrangement, row layout, water source and operating conditions rather than as an isolated component.',
          ],
        },
        {
          name: 'Turbo Dripper',
          url: '/emitters-drippers/turbo-dripper',
          image: `${ADMIN}/2025/04/TURBO-DRIPPER-1.webp`,
          paragraphs: [
            'Turbo Dripper is used at the crop level where water needs to be delivered through a localised drip irrigation arrangement. It can be incorporated into systems where drippers are positioned according to the planting pattern and irrigation requirement.',
            'Its role is different from the main distribution pipeline: the upstream network transports water through the field, while the dripper provides the final point of application.',
          ],
        },
        {
          name: 'Drip Poly Fittings',
          url: '/polyfittings-and-accessories/drip-poly-fittings',
          image: `${ADMIN}/2025/04/DRIP-POLY-FITTINGS.webp`,
          paragraphs: [
            'Drip Poly Fittings are used to connect and organise different sections of a drip irrigation network. They are relevant wherever the system needs connections between distribution lines, driplines and other compatible components.',
            'For installers and irrigation professionals, fittings are an important part of the overall layout because the connection arrangement needs to correspond with the field design and maintenance requirements.',
          ],
        },
      ],
      mapping: {
        columnHeadings: ['Application Requirement', 'Recommended Kothari Product', 'Role in the System'],
        rows: [
          { requirement: 'Row-based water delivery', product: 'Dripline K-Lin PCAS', role: 'Field-level drip distribution' },
          { requirement: 'Dripline-based irrigation', product: 'Dripline K-Gol NPC', role: 'Field-level water delivery' },
          { requirement: 'Localised crop-level delivery', product: 'Turbo Dripper', role: 'Point of application' },
          { requirement: 'Connecting drip components', product: 'Drip Poly Fittings', role: 'System connections' },
        ],
      },
    },
    howItWorks: {
      heading: 'How a Drip Irrigation System Works',
      intro: 'A typical drip irrigation system can be understood as a continuous path from the water source to the crop:',
      flow: [
        'Water Source',
        'Filtration',
        'Main Pipeline',
        'Distribution / Submain Lines',
        'Drip Poly Fittings',
        'Dripline / Drippers',
        'Crop Root Zone',
      ],
      steps: [
        {
          title: 'Water Source',
          text: 'Water enters the system from the available agricultural water source. The source and available water conditions form the starting point for system planning.',
        },
        {
          title: 'Filtration',
          text: 'Water passes through the filtration arrangement before entering the finer distribution components. Drip irrigation filters help manage particles in the water before it reaches the dripline or drippers.',
        },
        {
          title: 'Main and Distribution Lines',
          text: 'The main pipeline carries water towards the field. Distribution or submain lines then divide the flow into the sections serving different parts of the field.',
        },
        {
          title: 'Field Connections',
          text: 'Drip Poly Fittings connect the relevant sections of the network and provide the arrangement needed to take water from the distribution lines towards the crop rows.',
        },
        {
          title: 'Crop-Level Delivery',
          text: 'The water finally reaches the dripline or individual drippers. Dripline K-Lin PCAS, Dripline K-Gol NPC and Turbo Dripper can serve different field-level drip irrigation arrangements depending on the system design.',
        },
      ],
    },
    cta: {
      heading: 'Planning a Drip Irrigation System?',
      body: 'Share your crop layout, water source and irrigation requirement with the Kothari team to discuss the relevant products for your system.',
      buttonText: 'Discuss Your Requirement',
    },
  },
  {
    slug: 'farm-water-supply',
    division: 'pipe-division',
    parentHref: '/pipe-applications',
    parentLabel: 'Pipe Applications',
    divisionHref: '/pipe-division',
    metaTitle: 'Farm Water Supply Pipes | Kothari Pipes',
    metaDescription:
      'Explore farm water supply pipes for agricultural water distribution, including HDPE, Self Fit PVC Pipes and Agri PVC Moulded Fittings.',
    heroEyebrow: 'Pipe Applications',
    h1: 'Farm Water Supply Pipes for Agricultural Water Distribution',
    tagline:
      'Plan the right piping network to move farm water efficiently from its source to fields, storage points and irrigation systems.',
    image: '/heronew.jpg',
    bannerImage: '/farm.png',
    overview: {
      heading: 'Farm Water Supply: Understanding the Application',
      paragraphs: [
        'Moving water around a farm is not simply about connecting a pump to a pipe. Water may need to travel from a borewell, open well, pond, reservoir or storage tank across considerable distances before it reaches the point where it is required. The piping network needs to suit the water flow, pressure, distance and layout of the farm.',
        'A well-planned farm water supply system helps carry water from the source to the main distribution line and then to different sections of the farm. Depending on the application, the same network may supply irrigation systems, farm buildings, livestock areas or storage tanks.',
        'Pipe selection also changes with the role of each section. A mainline carrying water under pressure has different requirements from a short connection to a field or a branch line feeding multiple outlets.',
        'Kothari Pipes offers HDPE Pipes, Self Fit PVC Pipes and Agri PVC Moulded Fittings for different sections of agricultural water-supply networks.',
      ],
    },
    whereUsed: {
      heading: 'Where Farm Water Supply Systems Are Used',
      intro: [
        'Farm water-supply piping is used wherever water needs to be transferred from a source to different locations across an agricultural property.',
      ],
      items: [
        {
          label: 'Crop farms',
          text: 'Water can be transported from the source to irrigation systems serving field crops, vegetables, orchards and other cultivated areas.',
        },
        {
          label: 'Orchards and horticulture farms',
          text: 'Longer pipe runs may be required to take water from the source to different blocks of the farm before it enters the irrigation network.',
        },
        {
          label: 'Greenhouses and protected cultivation',
          text: 'Supply lines can carry water to the irrigation infrastructure serving individual growing areas.',
        },
        {
          label: 'Farmhouses and agricultural facilities',
          text: 'A farm water network can also supply water to buildings and other farm-use points where required.',
        },
        {
          label: 'Large agricultural properties',
          text: 'Main and sub-main pipelines help distribute water across different sections of the farm, particularly where the water source and point of use are separated by distance.',
        },
      ],
      note: 'Self Fit PVC Pipes for rising and distributing lines, irrigation schemes, and main and sub-main lines for drip and sprinkler irrigation.',
    },
    requirements: {
      heading: 'Key Requirements for Farm Water Supply Piping',
      intro: 'A farm water-supply pipeline should be selected according to the actual job it has to perform. Before deciding on the pipe, consider the following:',
      items: [
        {
          label: 'Water Source and Flow',
          text: 'Start with the source\u2014such as a borewell, open well, pond, reservoir or storage tank\u2014and determine how much water the system needs to move. Pump capacity and the required flow rate influence pipe selection.',
        },
        {
          label: 'Pressure and Pipe Diameter',
          text: 'The pressure available in the system and the required flow determine the appropriate pipe diameter and pressure class. A mainline carrying water over a longer distance may need different sizing from a smaller branch line.',
        },
        {
          label: 'Distance and Farm Layout',
          text: 'Longer runs, changes in elevation and multiple branches can affect pressure and water delivery. The route should therefore be considered before finalising the pipe size.',
        },
        {
          label: 'Installation Conditions',
          text: 'Above-ground and underground sections can have different practical requirements. Soil conditions, exposure to the farm environment and the possibility of physical damage should be considered during planning.',
        },
        {
          label: 'Connections and Branches',
          text: 'Agricultural networks rarely remain a single straight pipeline. Elbows, tees, reducers, adapters and couplers may be required to change direction, branch the line or connect different sections. Kothari\u2019s agricultural PVC moulded fittings include products such as elbows, tees, reducers, adapters, bushes and end caps, with the published range covering different sizes and pressure ratings.',
        },
      ],
    },
    products: {
      heading: 'Recommended Kothari Pipes for Farm Water Supply',
      intro: 'The right product depends on where the pipe sits within the farm network. A typical system may use one pipe material for the main water-transfer line and fittings to create the required branches and connections.',
      items: [
        {
          name: 'HDPE Pipe',
          url: '/pe-pipes-and-fittings/hdpe-piping',
          image: `${ADMIN}/2025/04/HDPE-PIPE-111.webp`,
          paragraphs: [
            'HDPE Pipe is suited to agricultural water-transfer applications where a flexible pipe system is required for carrying water from the source towards the distribution network. Kothari identifies its HDPE Pipes for agriculture, irrigation schemes, portable water supply lines, rising and distributing lines and borewell applications.',
            'The range specifies HDPE pipe dimensions according to IS 4984:2016 and lists different PE grades, SDRs and nominal pressure ratings. This allows selection according to the pressure requirements of the particular pipeline rather than treating every farm line the same.',
          ],
        },
        {
          name: 'Self Fit PVC Pipe',
          url: '/upvc-pressure-pipes-fittings/self-fit-pvc-pipe',
          image: `${ADMIN}/2025/04/PVC-Selffit-pipe.webp`,
          paragraphs: [
            'Self Fit PVC Pipe can be used for farm water distribution, including rising and distributing lines and main and sub-main lines for drip and sprinkler irrigation.',
            'The distinguishing feature is the pipe-end arrangement: one end is self-socketed while the other is plain. Kothari\u2019s catalogue states that the pipe ends fit together with solvent cement, eliminating the need for a separate coupler at every pipe joint. The range is specified as per IS 4985:2021 with different pressure classes.',
            'This makes the product relevant where a rigid agricultural pressure-pipe network needs to be laid out across the farm.',
          ],
        },
        {
          name: 'Agri PVC Moulded Fittings',
          url: '/upvc-pressure-pipes-fittings/agri-pvc-moulded-fittings',
          image: `${ADMIN}/2025/07/molded-fittings-Product-Page.webp`,
          paragraphs: [
            'Agri PVC Moulded Fittings provide the connection points needed to build the network around the farm layout. Elbows can change the direction of a pipeline, tees can create branches, while reducers, adapters and end caps can be used where the pipeline configuration requires them.',
            'The range specifies PVC moulded fittings conforming to IS 7834 and includes sizes from 20 mm to 160 mm, with published pressure ratings of PN4, PN6 and PN10.',
          ],
        },
      ],
      mapping: {
        heading: 'Application-to-Product Mapping',
        columnHeadings: ['Application Requirement', 'Recommended Kothari Product', 'Role in the System'],
        rows: [
          { requirement: 'Transfer water from the source across the farm', product: 'HDPE Pipe', role: 'Main or distribution water-transfer pipeline' },
          { requirement: 'Rising and distributing lines', product: 'Self Fit PVC Pipe', role: 'Pressure water-supply and distribution line' },
          { requirement: 'Main and sub-main irrigation lines', product: 'Self Fit PVC Pipe', role: 'Carries water towards drip or sprinkler networks' },
          { requirement: 'Changes in direction or pipeline branches', product: 'Agri PVC Moulded Fittings', role: 'Connects, redirects and branches the pipeline' },
          { requirement: 'Different pipe sizes need to be connected', product: 'Agri PVC Moulded Fittings', role: 'Reducers/adapters provide the required connection' },
        ],
      },
    },
    howItWorks: {
      heading: 'How a Farm Water Supply System Works',
      intro: 'A farm water-supply system can be visualised as a network rather than a single pipeline:',
      flow: [
        'Water Source',
        'Pump / Water Extraction',
        'Main Water-Supply Line',
        'Sub-Main / Distribution Lines',
        'Branches & Connections',
        'Irrigation System / Storage / Farm Use',
      ],
      steps: [
        {
          title: 'Water is drawn from the source',
          text: 'Water enters the system from the available farm source, such as a borewell, well, pond, reservoir or storage tank. The pump moves the water into the supply pipeline.',
        },
        {
          title: 'The main line carries water across the farm',
          text: 'The main pipeline takes water from the source towards the areas where it is required. HDPE or Self Fit PVC Pipe may be considered depending on the pipeline\u2019s design, pressure and installation requirements. Kothari lists both product categories for agricultural water-supply and irrigation applications.',
        },
        {
          title: 'Sub-main lines distribute the water',
          text: 'As the pipeline reaches different farm sections, sub-main lines divide the flow towards individual fields, orchard blocks, irrigation zones or other points of use.',
        },
        {
          title: 'Fittings create the network',
          text: 'Elbows, tees, reducers and adapters allow the pipeline to follow the farm layout and connect different pipe sizes or branches. Kothari\u2019s Agri PVC Moulded Fittings range includes these connection types.',
        },
        {
          title: 'Water reaches its final point of use',
          text: 'The distribution line ultimately feeds the required irrigation system, storage facility or farm-use point. Where the water is being used for drip or sprinkler irrigation, the farm water-supply network becomes the upstream section feeding that irrigation system.',
        },
      ],
    },
    cta: {
      heading: 'Planning a Farm Water Supply Network?',
      body: 'Share your water source, approximate pipeline distance and intended use with our team to discuss the piping options suitable for your farm.',
      buttonText: 'Discuss Your Requirement',
    },
  },

  {
    slug: 'rainwater-management-system',
    division: 'pipe-division',
    parentHref: '/pipe-applications',
    parentLabel: 'Pipe Applications',
    divisionHref: '/pipe-division',
    metaTitle: 'Rainwater Management System | Kothari Pipes',
    metaDescription:
      'Explore rainwater management systems for buildings using SWR pipes for roof drainage, rainwater collection and controlled discharge.',
    heroEyebrow: 'Pipe Applications',
    h1: 'Rainwater Management System for Buildings',
    tagline:
      'A properly planned rainwater drainage system moves roof runoff safely away from buildings and helps prevent water accumulation during heavy rainfall.',
    image: '/heronew.jpg',
    bannerImage: '/farm.png',
    overview: {
      heading: 'Understanding Rainwater Management in Buildings',
      paragraphs: [
        `During heavy rainfall, a roof can collect a large volume of water in a short period. Without a properly planned drainage path, that water can overflow from the roof, run along external walls, collect around the building or enter areas where it is not wanted.`,
        `A rainwater management system provides a defined route for this runoff. Roof water is collected through suitable outlets and carried through vertical and horizontal drainage sections towards an appropriate discharge point, recharge arrangement or collection system.`,
        `The piping is an important part of this network. Pipe diameter, routing, connections, vertical drops and the capacity of the overall drainage arrangement all need to work together. The system also has to cope with repeated exposure to rain, outdoor conditions and seasonal changes.`,
        `For building applications, Kothari KWIK Drain SWR is a uPVC drainage system designed for soil, waste and rainwater applications. Kothari's published information identifies Type A SWR pipes for ventilation and rainwater applications. `,
      ],
    },
    whereUsed: {
      heading: 'Where Rainwater Management Systems Are Used',
      intro: [
        'Rainwater management systems are relevant to most buildings where roof runoff needs to be collected and directed safely.',
      ],
      items: [
        {
          label: 'Residential buildings and homes',
          text: 'Roof rainwater is channelled through downpipes and drainage routes instead of allowing uncontrolled discharge around the building.',
        },
        {
          label: 'Apartments and high-rise buildings',
          text: ' Multiple roof or terrace collection points may need to connect into vertical rainwater stacks and suitable discharge arrangements. Kothari states that its SWR system is suitable for both low-rise and high-rise structures.',
        },
        {
          label: 'Commercial buildings',
          text: 'Offices, retail buildings and other commercial structures require planned rainwater routes to manage runoff from larger roof areas.',
        },
        {
          label: 'Industrial and institutional buildings',
          text: `Factories, schools, hospitals and similar facilities may have extensive roof areas where rainwater drainage needs to be coordinated with the building's overall drainage design.`,
        },
        {
          label: 'Terraces and other roof structures',
          text: 'The drainage arrangement needs to account for the roof layout and the locations where rainwater naturally collects.',
        },
      ],
    },
    requirements: {
      heading: 'Key Requirements for Rainwater Drainage',
      intro: 'A rainwater system should be planned around the building rather than selecting a pipe first and working backwards.',
      items: [
        {
          label: 'Roof Area and Rainfall',
          text: 'The amount of water entering the system depends on the roof or catchment area and the rainfall conditions at the project location. These factors influence the required drainage capacity. ',
        },
        {
          label: 'Pipe Sizing and Flow',
          text: 'Pipe diameter should be selected according to the expected rainwater flow and the configuration of the drainage network. Undersized sections can restrict discharge, while unnecessary changes in direction can affect the flow path.',
        },
        {
          label: 'Routing and Slope',
          text: 'Horizontal sections should have an appropriate fall towards the discharge point. Vertical rainwater pipes should be positioned to provide a practical and direct route from the collection points.',
        },
        {
          label: 'Joints and Connections',
          text: `The pipe and fittings need to form a properly connected drainage network. Kothari's SWR range uses a range of pipe and fitting configurations, including self-fit and ring-fit types. `,
        },
        {
          label: 'Outdoor Exposure',
          text: `Rainwater pipes installed outside a building are exposed to weather and sunlight. Kothari's published SWR information identifies its system as UV protected.`,
        },
        {
          label: 'Maintenance Access',
          text: `The layout should allow practical inspection and maintenance of collection points, bends and discharge sections. Keeping the drainage route straightforward also makes it easier to identify and address blockages.`,
        },
      ],
    },
    products: {
      heading: 'Recommended Kothari SWR Pipes for Rainwater Management',
      intro: 'For a rainwater management system, the SWR pipe forms the main drainage path that carries collected roof water towards the designated discharge point.',
      items: [
        {
          name: 'SWR (Soil, Waste & Rainwater) Piping System',
          url: '/soil-waste-and-rainwater-pipes-and-fittings/swr-pipes-and-fittings-for-drainage-systems',
          image: `${ADMIN}/2025/04/SWR-PIPES-FITTINGS.webp`,
          paragraphs: [
            'Kothari KWIK Drain SWR is a uPVC conventional drainage system designed for soil, waste and rainwater applications. Within the range, Kothari identifies Type A pipes for ventilation and rainwater applications, making this the relevant SWR category for building rainwater drainage.',
            'The range specifies IS 13592 for the pipe and IS 14735 for fittings, with SWR pipe sizes listed as 75 mm, 110 mm and 160 mm in the referenced catalogue.',
            'Kothari also identifies features including a smooth internal surface, UV protection and leak-resistant jointing within its SWR system. The catalogue describes the system as having high flow rates and resistance to chemical and corrosion-related conditions.',
            'The actual pipe diameter and number of downpipes should not be selected from the product range alone. They need to be determined from the roof area, rainfall intensity, drainage layout and project design requirements.',
          ],
        },
       
      ],
      mapping: {
        heading: 'Application-to-Product Mapping',
        columnHeadings: ['Application Requirement', 'Recommended Kothari Product', 'Role in the System'],
        rows: [
          { requirement: 'Carry rainwater from roof drainage points', product: 'SWR (Soil, Waste & Rainwater) Piping System', role: 'Vertical or horizontal rainwater drainage' },
          { requirement: 'Connect different sections of the rainwater network', product: 'SWR Fittings', role: 'Direction changes and pipe connections' },
          { requirement: 'Outdoor rainwater drainage', product: 'KWIK Drain SWR', role: 'Designed for rainwater applications with UV protection' },
          { requirement: 'Building rainwater drainage', product: 'KWIK Drain SWR Type A', role: 'Carries roof runoff towards the designated discharge point' },
        ],
      },
    },
    howItWorks: {
      heading: 'How a Building Rainwater Management System Works',
      intro: 'A building rainwater management system can be understood as a simple collection-and-discharge network:',
      flow: [
        'Roof / Terrace',
        'Rainwater Outlet',
        'Horizontal Collection Line',
        'Vertical SWR Downpipe',
        'Ground-Level Drainage / Collection Point',
        'Discharge / Recharge / Storage Arrangement',
      ],
      steps: [
        {
          title: 'Rain falls on the roof',
          text: 'During rainfall, water collects across the roof or terrace surface. The roof should be designed so that water moves towards the designated rainwater outlets rather than remaining stagnant.',
        },
        {
          title: 'Water enters the drainage system',
          text: 'Roof outlets or collection points direct the water into the rainwater piping network. Their number and location depend on the roof layout and project design.',
        },
        {
          title: 'SWR pipes carry the runoff',
          text: 'The collected water travels through the SWR drainage network. Kothari KWIK Drain SWR Type A is specifically identified for rainwater applications.',
        },
        {
          title: ' Vertical pipes take water down',
          text: 'On multi-storey buildings, vertical downpipes carry rainwater from upper levels towards the ground. Fittings allow the system to accommodate changes in direction and connect different sections.',
        },
        {
          title: 'Water reaches the designated destination',
          text: `At ground level, the rainwater can be directed towards the project's planned discharge, collection, recharge or drainage arrangement. The final destination depends on the building's overall water-management design.`,
        },
      ],
    },
    cta: {
      heading: 'lanning a Rainwater Management System?',
      body: 'Share your building type, roof layout and rainwater drainage requirement with the Kothari team to discuss the appropriate SWR piping options.',
      buttonText: 'Discuss Your Requirement',
    },
  },

  {
    slug: 'sprinkler-irrigation-system',
    division: 'irrigation-division',
    parentHref: '/irrigation-applications',
    parentLabel: 'Irrigation Applications',
    divisionHref: '/irrigation-division',
    metaTitle: 'Sprinkler Irrigation System & Applications | Kothari',
    metaDescription:
      'Explore sprinkler irrigation applications, sprinkler systems, mini sprinklers and HDPE pipe sprinkler sets for agricultural water distribution.',
    heroEyebrow: 'Irrigation Applications',
    h1: 'Sprinkler Irrigation System',
    tagline:
      'A field irrigation method that distributes water over the crop area through sprinklers connected to a planned pipeline network.',
    image: '/heronew.jpg',
    bannerImage: '/drip.png',
    overview: {
      heading: 'Sprinkler Irrigation System Overview',
      paragraphs: [
        'When water needs to cover a larger area rather than reach individual plants directly, sprinkler irrigation can provide a practical way to distribute it across the field. The system carries water from the source through a network of main and distribution pipes before delivering it through sprinklers positioned according to the field and crop layout.',
        'A sprinkler irrigation system typically brings together the water source, pumping arrangement, filtration where required, pipelines, connections and sprinkler equipment. The performance of the system depends on how these components are selected and arranged for the actual field conditions.',
        'Pipe routing, operating pressure, available flow, field size and the distance between the water source and irrigation points all need to be considered during planning. The system may also need to be moved or reconfigured depending on the type of installation.',
        'For farmers, dealers and agri consultants, the focus is therefore not simply on selecting a sprinkler. The pipeline network and sprinkler equipment need to work together to distribute water across the intended irrigation area.',
      ],
    },
    whereUsed: {
      heading: 'Where Sprinkler Irrigation Is Used',
      intro: [
        'Sprinkler irrigation is used across agricultural applications where water needs to be distributed over an area through an irrigation sprinkler rather than delivered directly to individual plants.',
        'Common applications include:',
      ],
      items: [
        {
          label: 'Field Crops',
          text: 'Sprinklers can distribute water across cultivated areas where crop rows and field dimensions allow area-based irrigation.',
        },
        {
          label: 'Vegetable Cultivation',
          text: 'The system can be planned around the crop layout and the required irrigation area.',
        },
        {
          label: 'Orchards and Plantations',
          text: ' Depending on the crop and layout, sprinklers can be positioned to cover the required area around the plants.',
        },
        {
          label: 'Fodder and Pasture Areas',
          text: 'Area-based water distribution can be useful where crops are grown across broader field sections.',
        },
        {
          label: 'Open Agricultural Fields',
          text: 'Sprinkler systems can be arranged around the available water source, field dimensions and irrigation zones.',
        },
        {
          label: 'Portable Irrigation Setups',
          text: ' Where the application requires equipment to be shifted between field sections, the pipe and sprinkler arrangement can be planned accordingly.',
        },
      ],
      note: 'The final configuration depends on the crop, field conditions, water availability and irrigation system design.',
    },
    requirements: {
      heading: 'Key Requirements for a Sprinkler Irrigation System',
      intro: 'A sprinkler irrigation system needs to be planned as a complete water-distribution network. The sprinkler itself is only one part of that network.',
      items: [
        {
          label: 'Water Source and Flow',
          text: 'The available water source and flow determine how the system can be divided into irrigation sections. The pipeline arrangement should account for the amount of water required by the operating sprinklers.',
        },
        {
          label: 'Operating Pressure',
          text: 'Pressure is an important consideration because sprinklers depend on water being delivered through the system under suitable operating conditions. The pump, mainline, distribution pipes and sprinkler arrangement should therefore be considered together.',
        },
        {
          label: 'Field Layout and Distance',
          text: 'The distance from the water source to the irrigation area, field dimensions and changes in elevation can influence pipe routing and system planning. Larger fields may require the system to be divided into manageable sections.',
        },
        {
          label: 'Pipe Selection',
          text: 'The pipe network needs to suit the intended installation and operating conditions. For sprinkler systems, the choice between a fixed or movable arrangement can also influence the type of piping required.',
        },
        {
          label: 'Connections and Mobility',
          text: 'Connections between the mainline, distribution lines and sprinklers need to suit the system layout. In applications where the sprinkler set is moved between field areas, practical handling and connection arrangements become particularly important.',
        },
        {
          label: 'Maintenance',
          text: 'Filters, pipes, connections and sprinklers should remain accessible for inspection and maintenance. Regular checks can help identify issues such as blocked components, damaged pipes or connection problems before they affect the irrigation operation.',
        },
      ],
    },
    products: {
      heading: 'Recommended Kothari Products for Sprinkler Irrigation',
      intro: `Kothari's sprinkler irrigation range includes sprinkler equipment and an HDPE pipe-based sprinkler set for different field-level arrangements. The appropriate combination depends on the irrigation layout, field conditions and intended method of operation.`,
      items: [
        {
          name: 'Metal Sprinkler',
          url: '/metal-sprinkler/metal-sprinkler',
          image: `${ADMIN}/2025/06/METAL-SPRINKLER.webp`,
          paragraphs: [
            'Metal Sprinkler forms the water-application component of a sprinkler irrigation system. It is used at the irrigation point where water needs to be distributed over the surrounding field area.',
            'It can be considered for agricultural sprinkler arrangements where the sprinkler is connected to the water distribution network and positioned according to the field layout. Its role should be evaluated together with the pipeline arrangement and operating conditions of the system.',
          ],
        },
        {
          name: 'Mini Sprinkler',
          url: '/mini-sprinklers-and-assemblies/mini-sprinkler',
          image: `${ADMIN}/2025/04/MINI-SPRINKLER.png`,
          paragraphs: [
            'Mini Sprinkler is suited to sprinkler-based irrigation where water needs to be distributed over a more localised area. It can be incorporated into field irrigation layouts according to the crop arrangement and required area of application.',
            'For a mini sprinkler system, the positioning of the sprinklers and the way water is brought to each irrigation point should be considered as part of the overall system design.',
          ],
        },
        {
          name: 'K-Eco Sprinkler',
          url: '/k-eco-rain-pipes-and-k-flex-submain-pipes/k-eco-sprinkler',
          image: `${ADMIN}/2025/04/K-Eco-sprinkler.webp`,
          paragraphs: [
            'K-Eco Sprinkler forms part of the sprinkler equipment used for field-level water distribution. It can be integrated into a sprinkler irrigation arrangement where water is transported through the pipe network and delivered through individual sprinkler points.',
            'The appropriate layout depends on factors such as field configuration, water availability and the selected irrigation arrangement.',
          ],
        },
        {
          name: 'HDPE Pipe Sprinkler Set',
          url: '/micro-mini-sprinklers/hdpe-pipe-sprinkler-set',
          image: `${ADMIN}/2025/10/HDPE-Pipe-Sprinkler-Set-1.webp`,
          paragraphs: [
            'The HDPE Pipe Sprinkler Set combines the pipe-based water distribution arrangement with sprinkler irrigation equipment. It is relevant where the irrigation system requires a connected set for moving water from the supply point towards the field-level sprinklers.',
            'It can be considered for agricultural applications where the pipe network and sprinkler equipment need to be planned as one system rather than as separate components.',
          ],
        },
      ],
      mapping: {
        columnHeadings: ['Application Requirement', 'Recommended Kothari Product', 'Role in the System'],
        rows: [
          { requirement: 'Field-area water distribution', product: 'Metal Sprinkler', role: 'Sprinkler-based water application' },
          { requirement: 'Localised sprinkler irrigation', product: 'Mini Sprinkler', role: 'Local area water distribution' },
          { requirement: 'Sprinkler-based field irrigation', product: 'HDPE Pipe Sprinkler Set', role: 'Water conveyance and sprinkler setup' },
          { requirement: 'Connecting drip components', product: 'Drip Poly Fittings', role: 'System connections' },
        ],
      },
    },
    howItWorks: {
      heading: 'How a Sprinkler Irrigation System Works',
      intro: 'A sprinkler irrigation system can be understood as a flow path from the water source to the sprinkler point:',
      flow: [
        'Water Source',
        'Pumping / Water Supply',
        'Main Pipeline',
        'Distribution  Pipe',
        'Sprinkler Connection',
        'Sprinkler',
        'Crop Area',
      ],
      steps: [
        {
          title: 'Water Source',
          text: 'Water enters the system from the available agricultural water source. The source and pumping arrangement determine how water is brought into the irrigation network.',
        },
        {
          title: 'Main Pipeline',
          text: 'The main pipeline carries water from the supply point towards the agricultural field. Its routing depends on the location of the water source and the field being irrigated.',
        },
        {
          title: 'Field Distribution',
          text: 'Distribution pipes take water from the mainline towards individual irrigation sections. Depending on the system design, these sections may be fixed or arranged for movement between different areas of the field.',
        },
        {
          title: ' Sprinkler Connection',
          text: 'The sprinkler is connected to the water distribution network at the designated irrigation point. The connection arrangement needs to suit the pipe layout and the way the system is operated.',
        },
        {
          title: 'Water Application',
          text: 'The sprinkler distributes water over the intended field area. Metal Sprinkler, Mini Sprinkler and K-Eco Sprinkler can serve different sprinkler irrigation arrangements, while the HDPE Pipe Sprinkler Set provides a combined pipe-and-sprinkler arrangement for relevant applications.',
        },
      ],
    },
    cta: {
      heading: 'Planning a Sprinkler Irrigation System?',
      body: 'Share your field layout, water source and irrigation requirement with the Kothari team to discuss the relevant sprinkler and piping options.',
      buttonText: 'Discuss Your Requirement',
    },
  },


  {
    slug: 'residential-plumbing-system',
    division: 'pipe-division',
    parentHref: '/pipe-applications',
    parentLabel: 'Pipe Applications',
    divisionHref: '/pipe-division',
    metaTitle: 'Residential Plumbing System | UPVC & CPVC | Kothari',
    metaDescription:
      'Explore Kothari UPVC and CPVC pipes for residential plumbing, including cold-water distribution and hot-water supply systems.',
    heroEyebrow: 'Pipe Applications',
    h1: 'Residential Plumbing Systems with UPVC & CPVC Pipes',
    tagline:
      'Planned piping for cold- and hot-water distribution across kitchens, bathrooms and other residential water-use points.',
    image: '/heronew.jpg',
    bannerImage: '/farm.png',
    overview: {
      heading: 'Understanding Residential Plumbing Systems',
      paragraphs: [
        'A residential plumbing system has to deliver water to multiple points in a house without compromising flow, pressure or water quality. From the incoming supply line to the kitchen, bathroom, wash area and water-heater connections, each section of the network has a specific role.',
        'The piping system also needs to work within concealed walls, shafts, ceilings and service areas, where repairs can be inconvenient once construction is complete. When you’re picking pipe material, you’ve got to think about water temperature, pressure, how you’re setting things up, and what the system’s actually supposed to do. ',
        `In most homes, there’s a clear line: one set of pipes for cold water, and another for hot.  Kothari's UPVC plumbing system is positioned for cold-water applications, while its KwikFlow CPVC system is designed for hot- and cold-water plumbing. The CPVC range is specified to handle temperatures up to 93°C and follows IS 15778 for pipes.`,
        'The objective is to create a properly planned network in which the pipe, fittings and joints work together throughout the building.',
      ],
    },
    whereUsed: {
      heading: 'Where Residential Plumbing Systems Are Used',
      intro: [
        `Residential plumbing systems are used wherever water needs to be distributed from the building's incoming supply or storage arrangement to individual points of use.`,
      ],
      items: [
        {
          label: 'Independent houses and villas',
          text: 'Water is distributed from the main supply or storage tank to kitchens, bathrooms, utility areas and other fixtures.',
        },
        {
          label: 'Apartments and residential towers',
          text: ' Vertical and horizontal plumbing networks distribute water across multiple floors and individual dwelling units.',
        },
        {
          label: 'Housing developments',
          text: 'Repeated plumbing layouts require consistent pipe and fitting specifications across multiple homes.',
        },
        {
          label: 'Bathrooms and kitchens',
          text: ' Cold-water lines supply fixtures, while CPVC is used where the system carries hot water.',
        },
        {
          label: 'Renovation and replacement projects',
          text: 'Existing plumbing sections may need to be replaced or extended while maintaining compatibility with the planned system.',
        },
      ],
      note: `Kothari's CPVC catalogue specifically identifies residential and commercial buildings, public utilities, and concealed, down-take and terrace-looping installations among its applications.`,
    },
    requirements: {
      heading: 'Key Requirements for Residential Plumbing',
      intro: 'Residential plumbing should be planned around how the building will actually consume water. Pipe selection is not simply a question of choosing a diameter.',
      items: [
        {
          label: 'Water Temperature',
          text: 'The first distinction is whether a line carries cold or hot water. UPVC is positioned for cold-water plumbing, while Kothari KwikFlow CPVC is designed for hot- and cold-water applications and is specified for temperatures up to 93°C.',
        },
        {
          label: 'Pressure and Flow',
          text: 'The piping system needs to accommodate the operating pressure and expected flow of the building. Pipe size and class should be selected according to the plumbing design rather than using the same size throughout the house.',
        },
        {
          label: 'Installation Arrangement',
          text: 'Residential pipes may run through concealed walls, shafts, ceilings, service ducts or exposed areas. The installation method, pipe support and accessibility for maintenance should be considered during planning.',
        },
        {
          label: 'Jointing',
          text: `A plumbing system depends on properly made connections at changes of direction, branches and fixtures. Kothari's CPVC system uses solvent-cement joints, while its UPVC ASTM plumbing system uses compatible fittings and jointing arrangements.`,
        },
        {
          label: 'Material Suitability',
          text: 'The selected pipe should match the intended service. Using a cold-water plumbing pipe where the application requires hot-water service, for example, would not be an appropriate material selection.',
        },
      ],
    },
    products: {
      heading: 'Recommended Kothari Products for Residential Plumbing',
      intro: `The simplest way to select between Kothari's residential plumbing systems is to start with the water service required.`,
      items: [
        {
          name: 'Kothari KwikFit UPVC Pipes',
          url: '/upvc/upvc-astm-plumbing-piping-system',
          image: `${ADMIN}/2025/04/UPVC-PIPES-FITTINGS.webp`,
          paragraphs: [
            `Kothari KwikFit UPVC is an ASTM plumbing system intended for cold-water plumbing. The published product material identifies UV and fire resistance, lead-free construction, low friction loss and easy installation among its characteristics. If you are installing a typical cold-water system, you will usually see pipes made to ASTM D1785, with fittings that match ASTM D2466 or D2467 standards. That setup works for moving water from a tank or main supply over to taps, sinks, and anywhere else you need cold water around the house.`,
          ],
        },
        {
          name: 'Kothari KwikFlow CPVC Pipes',
          url: '/cpvc/cpvc-hot-and-cold-water-piping-system',
          image: `${ADMIN}/2025/04/CPVC-PIPES-FITTINGS.webp`,
          paragraphs: [
            `If the house needs to handle hot water, things change a bit. Kothari KwikFlow CPVC, for instance, is meant for both hot and cold plumbing. So, if you're running hot water to showers or kitchen sinks, that is a good fit. The range includes pipes between 15 mm and 150 mm and fittings from 15 mm to 50 mm. Pipes sized 15–50 mm follow IS 15778 standards, and bigger pipes are listed with ASTM standards in the product catalogue. `,
            'For residential applications, CPVC can therefore be considered for lines serving hot-water fixtures as well as cold-water sections where the project specifies CPVC.',
          ],
        },
       
      ],
      mapping: {
        heading: 'Application-to-Product Mapping',
        columnHeadings: ['Application Requirement', 'Recommended Kothari Product', 'Role in the System'],
        rows: [
          { requirement: 'Cold-water distribution', product: 'KwikFit UPVC', role: 'Carries cold water from the supply/storage network to fixtures' },
          { requirement: 'Hot-water distribution', product: 'KwikFlow CPVC', role: 'Carries hot water from the water-heating system to fixtures' },
          { requirement: 'Hot- and cold-water plumbing', product: 'KwikFlow CPVC', role: 'Provides a common piping system where both services are specified' },
          { requirement: 'Cold-water household plumbing', product: 'KwikFit UPVC', role: 'Used for applicable cold-water distribution sections' },
          { requirement: 'Pipe connections and changes in direction', product: 'Compatible Kothari fittings', role: 'Connects pipe sections, branches and fixtures within the respective system' },
        ],
      },
    },
    howItWorks: {
      heading: 'How a Residential Plumbing System Works',
      intro: 'A typical residential water-supply system can be understood as a series of connected stages:',
      flow: [
        'Municipal / Approved Water Source',
        'Underground or Overhead Storage',
        'Main Building Supply Line',
        'Floor / Zone Distribution',
        'Cold & Hot Water Lines',
        'Individual Fixtures',
      ],
      steps: [
        {
          title: 'Water is drawn from the source',
          text: 'Water enters the system from the available farm source, such as a borewell, well, pond, reservoir or storage tank. The pump moves the water into the supply pipeline.',
        },
        {
          title: 'The main line carries water across the farm',
          text: 'The main pipeline takes water from the source towards the areas where it is required. HDPE or Self Fit PVC Pipe may be considered depending on the pipeline\u2019s design, pressure and installation requirements. Kothari lists both product categories for agricultural water-supply and irrigation applications.',
        },
        {
          title: 'Sub-main lines distribute the water',
          text: 'As the pipeline reaches different farm sections, sub-main lines divide the flow towards individual fields, orchard blocks, irrigation zones or other points of use.',
        },
        {
          title: 'Fittings create the network',
          text: 'Elbows, tees, reducers and adapters allow the pipeline to follow the farm layout and connect different pipe sizes or branches. Kothari\u2019s Agri PVC Moulded Fittings range includes these connection types.',
        },
        {
          title: 'Water reaches its final point of use',
          text: 'The distribution line ultimately feeds the required irrigation system, storage facility or farm-use point. Where the water is being used for drip or sprinkler irrigation, the farm water-supply network becomes the upstream section feeding that irrigation system.',
        },
      ],
    },
    cta: {
      heading: 'Planning a Residential Plumbing System?',
      body: 'Share your building layout, water-supply requirements and hot- or cold-water application with the Kothari team to discuss the appropriate piping range.',
      buttonText: 'Discuss Your Requirement',
    },
  },
{
  slug: 'commercial-building-plumbing-system',

  division: 'pipe-division',

  parentHref: '/pipe-applications',

  parentLabel: 'Pipe Applications',

  divisionHref: '/pipe-division',

  metaTitle: 'Commercial Building Plumbing Pipes | Kothari',

  metaDescription:
    'Explore Kothari UPVC and CPVC pipes for commercial building plumbing, including cold-water and hot-water distribution systems.',

  heroEyebrow: 'Pipe Applications',

  h1: 'Commercial Building Plumbing Systems with UPVC & CPVC',

  tagline:
    'Piping systems for organised hot- and cold-water distribution across offices, hotels, hospitals and commercial buildings.',

  image: '/heronew.jpg',
  bannerImage: '/farm.png',

  overview: {
    heading: 'Understanding Commercial Building Plumbing Systems',

    paragraphs: [
      'Commercial buildings are a whole different story when it comes to plumbing. You have got hundreds of water points, everything from toilets and washrooms to kitchens, pantries, and utility spaces spread over several floors. If the water-supply network is not planned right, nothing works smoothly.',

      'It is nothing like a small house. Here, pipes run much longer, branch off in all directions, and each floor or zone needs its own pressure setup. Plus, you have to supply both cold and hot water, depending on what each space needs.',

      'Pipe selection therefore needs to be based on the actual service. Water temperature, operating pressure, pipe size, building height, routing and installation conditions all influence the specification.',

      `Kothari's KwikFit UPVC system is positioned for cold-water plumbing, while KwikFlow CPVC is designed for hot- and cold-water applications. The published KwikFlow range is specified for temperatures up to 93°C and includes pipes from 15 mm to 150 mm.`,
    ],
  },

  whereUsed: {
    heading: 'Where Commercial Plumbing Systems Are Used',

    intro: [
      'Commercial plumbing systems are used in buildings where water needs to be distributed consistently across multiple areas, floors and services.',
    ],

    items: [
      {
        label: 'Office buildings',

        text: 'Water is distributed to washrooms, pantry areas and other employee or service facilities across different floors.',
      },

      {
        label: 'Hotels and hospitality buildings',

        text: 'Guest rooms, bathrooms, kitchens and service areas can require both cold- and hot-water distribution.',
      },

      {
        label: 'Hospitals and healthcare facilities',

        text: 'Plumbing networks serve patient areas, washrooms, kitchens and support facilities, with material selection governed by the project requirements.',
      },

      {
        label: 'Shopping malls and retail buildings',

        text: 'Water-supply lines serve public washrooms, food-service areas and building services.',
      },

      {
        label: 'Educational and institutional buildings',

        text: 'Schools, colleges and other institutions require distribution networks serving multiple blocks, floors or facilities.',
      },

      {
        label: 'Commercial complexes',

        text: 'Multiple tenants or functional areas may share a common water-supply infrastructure.',
      },
    ],

    note: `Kothari's published plumbing material identifies commercial buildings, public utilities and applications such as hotels and hospitals for its plumbing pipe systems.`,
  },

  requirements: {
    heading: 'Key Requirements for Commercial Building Plumbing',

    intro: 'Commercial plumbing needs to be planned as a network rather than as a collection of individual fixture connections. The design should account for demand, routing, pressure and the type of water being carried.',

    items: [
      {
        label: 'Water Demand and Flow',

        text: 'The number of fixtures and their expected usage influence the required flow through different sections of the system. Main lines, floor-level distribution and branches may therefore require different pipe sizes.',
      },

      {
        label: 'Building Height and Pressure',

        text: 'Multi-storey buildings can experience different pressure conditions between lower and upper floors. Pipe selection should follow the hydraulic design and the operating pressure expected in each section.',
      },

      {
        label: 'Hot- and Cold-Water Service',

        text: 'The temperature of the water is an important material-selection factor. Cold-water sections can use the specified UPVC plumbing system, while hot-water lines require a system designed for elevated temperatures. Kothari KwikFlow CPVC is specified for hot- and cold-water plumbing up to 93°C.',
      },

      {
        label: 'Installation and Routing',

        text: 'Commercial piping may run through shafts, service ducts, false ceilings, walls or other designated service spaces. The routing should allow appropriate access during construction and maintenance.',
      },

      {
        label: 'Jointing and System Compatibility',

        text: 'Pipe, fittings and jointing materials should be compatible and installed according to the applicable product and project requirements. Kothari CPVC installation guidance specifies the use of compatible CPVC solvent cement for its system.',
      },
    ],
  },

  products: {
    heading: 'Recommended Kothari Products for Commercial Plumbing',

    intro: 'For commercial building water supply, the choice between UPVC and CPVC should begin with the service temperature and the requirements of each plumbing section.',

    items: [
      {
        name: 'Kothari KwikFit UPVC Pipes',
        url: '/upvc/upvc-astm-plumbing-piping-system',
        image: `${ADMIN}/2025/04/UPVC-PIPES-FITTINGS.webp`,
        paragraphs: [
          `KwikFit is Kothari's UPVC ASTM plumbing system for cold-water applications. The published range identifies UV and fire resistance, lead-free construction, low friction loss and easy installation among its characteristics. `,
          `For cold-water networks, they usually use pipes according to ASTM D1785 and fittings that match ASTM D2466 or D2467 `,
          `This kind of setup gets water from the main supply or storage tanks up to every floor, pantry, washroom basically anywhere people expect water.`,
        ],
      },

      {
        name: 'Kothari KwikFlow CPVC Pipes',
        url: '/cpvc/cpvc-hot-and-cold-water-piping-system',
        image: `${ADMIN}/2025/04/CPVC-PIPES-FITTINGS.webp`,
        paragraphs: [
          `Now, when you need hot-water distribution in a place like a hotel, hospital, or busy kitchen, CPVC systems step in. Kothari's KwikFlow CPVC plumbing covers hot and cold water, with pipes built to IS 15778 standards and fittings made to ASTM D2846 and IS 17546. The pipes range from 15 mm up to 150 mm; fittings go from 15 mm to 50 mm. These systems hold strong up to 93°C. `,
          'This makes CPVC relevant where a commercial building requires hot-water distribution, such as hotels, hospitals, kitchens and other facilities where heated water is part of the plumbing design.',
        ],
      },
    ],

    mapping: {
      heading: 'Application Mapping',

      columnHeadings: [
        'Application Requirement',
        'Recommended Kothari Product',
        'Role in the System',
      ],

      rows: [
        {
          requirement: 'Cold-water distribution',
          product: 'KwikFit UPVC',
          role: 'Distribution of cold water to applicable building services',
        },

        {
          requirement: 'Hot-water distribution',
          product: 'KwikFlow CPVC',
          role: 'Distribution of heated water to designated fixtures',
        },

        {
          requirement: 'Combined hot- and cold-water plumbing',
          product: 'KwikFlow CPVC',
          role: 'Piping system for projects where CPVC is specified for both services',
        },

        {
          requirement: 'Floor-level branches',
          product: 'KwikFit UPVC / KwikFlow CPVC',
          role: 'Selected according to water temperature and system design',
        },

        {
          requirement: 'Pipe connections and changes in direction',
          product: 'Compatible Kothari fittings',
          role: 'Connects branches, changes direction and interfaces with fixtures',
        },
      ],
    },
  },

  howItWorks: {
    heading: 'How a Commercial Building Plumbing System Works',

    intro: 'A typical commercial water-supply system can be understood through the following flow:',

    flow: [
      'Municipal / Approved Water Source',

      'Storage Tank / Water Treatment, Where Required',

      'Building Distribution Main',

      'Vertical Risers',

      'Floor-Level Distribution',

      'Hot & Cold Water Branches',

      'Fixtures and Points of Use',
    ],

    // MISSING: The supplied content does not contain
    // detailed step-by-step descriptions for the flow.
    steps: [
       {
          title: 'Water is drawn from the source',
          text: 'Water enters the system from the available farm source, such as a borewell, well, pond, reservoir or storage tank. The pump moves the water into the supply pipeline.',
        },
        {
          title: 'The main line carries water across the farm',
          text: 'The main pipeline takes water from the source towards the areas where it is required. HDPE or Self Fit PVC Pipe may be considered depending on the pipeline\u2019s design, pressure and installation requirements. Kothari lists both product categories for agricultural water-supply and irrigation applications.',
        },
        {
          title: 'Sub-main lines distribute the water',
          text: 'As the pipeline reaches different farm sections, sub-main lines divide the flow towards individual fields, orchard blocks, irrigation zones or other points of use.',
        },
        {
          title: 'Fittings create the network',
          text: 'Elbows, tees, reducers and adapters allow the pipeline to follow the farm layout and connect different pipe sizes or branches. Kothari\u2019s Agri PVC Moulded Fittings range includes these connection types.',
        },
        {
          title: 'Water reaches its final point of use',
          text: 'The distribution line ultimately feeds the required irrigation system, storage facility or farm-use point. Where the water is being used for drip or sprinkler irrigation, the farm water-supply network becomes the upstream section feeding that irrigation system.',
        },
    ],
  },

  cta: {
    heading: 'Planning Plumbing for a Commercial Building?',

    body: 'Share your building type, number of floors and hot- or cold-water requirements with the Kothari team to discuss the appropriate piping range.',

    buttonText: 'Discuss Your Requirement',
  },
},

 {

  slug: 'vegetable-irrigation-systems',

  division: 'irrigation-division',

  parentHref: '/irrigation-applications',

  parentLabel: 'Irrigation Applications',

  divisionHref: '/irrigation-division',

  metaTitle: 'Vegetable Irrigation Systems | Kothari Irrigation',

  metaDescription:
    'Explore vegetable irrigation systems using thin-wall dripline for organised field water distribution, including Kothari K-Slim and K-Slim Ultra.',

  heroEyebrow: 'Irrigation Applications',

  h1: 'Vegetable Irrigation Systems',

  tagline:
    'Plan irrigation around crop rows, field layout and water availability with a drip-based system suited to vegetable cultivation.',

  image: '/heronew.jpg',

  bannerImage: '/drip.png',

  overview: {
    heading: 'Understanding Vegetable Irrigation Systems',

    paragraphs: [
      'Vegetable crops often require irrigation to be organised around closely spaced crop rows and changing field requirements. In open-field cultivation, water has to move from the source to different sections of the farm and then reach the crop through a properly planned distribution network.',

      'A vegetable irrigation system typically combines the water source, filtration, main and distribution pipelines, field connections and dripline. The pipeline network carries water towards the growing area, while the dripline provides the final distribution along the crop rows.',

      'Field size, crop arrangement, water availability, flow, pressure and filtration requirements all influence the irrigation layout. Shorter crop cycles and multiple cultivation areas can also make practical operation and maintenance important considerations.',

      'The irrigation network therefore needs to be planned as a complete system. The dripline, connections and distribution lines should suit the field layout and allow the farmer to manage different sections without making routine maintenance difficult.',
    ],
  },

  whereUsed: {
    heading: 'Where Vegetable Irrigation Systems Are Used',

    intro: [
      'Vegetable irrigation systems are used across different types of vegetable cultivation where water needs to be distributed through planned field rows. The exact arrangement depends on the crop, field size, water source and irrigation method.',
    ],

    items: [
      {
        label: 'Open-Field Vegetable Cultivation',

        text: 'A dripline can be arranged along vegetable crop rows, with distribution lines supplying different sections of the field.',
      },

      {
        label: 'Commercial Vegetable Farms',

        text: 'Larger farms can divide the growing area into irrigation sections based on field layout and available water supply.',
      },

      {
        label: 'Seasonal Vegetable Crops',

        text: 'For crops grown over shorter cultivation cycles, the irrigation system needs to be practical to install, operate and maintain throughout the growing period.',
      },

      {
        label: 'Multiple Vegetable Blocks',

        text: 'Where different vegetables are cultivated in separate areas, the distribution network can be planned around individual field sections and their irrigation requirements.',
      },

      {
        label: 'Protected Cultivation',

        text: 'Where drip irrigation is used in protected growing environments, the distribution network can be planned according to the bed and crop layout.',
      },
    ],
  },

  requirements: {
    heading: 'Key Requirements for Vegetable Irrigation',

    intro: 'Vegetable irrigation needs to be planned according to the crop layout and the physical arrangement of the field. The dripline should form part of a properly designed water-distribution network rather than being considered separately.',

    items: [
      {
        label: 'Water Source',

        text: 'Start by assessing the available water source and its supply conditions. This provides the basis for planning the mainline, distribution network and irrigation sections.',
      },

      {
        label: 'Flow and Pressure',

        text: 'The system should be designed around the required flow and operating pressure. Mainlines, distribution lines and driplines need to work together as one network.',
      },

      {
        label: 'Crop and Bed Layout',

        text: 'Vegetable crops are commonly arranged in defined rows or beds. Dripline placement should follow this layout so that field connections and distribution lines remain practical.',
      },

      {
        label: 'Field Zoning',

        text: 'Larger farms or fields with different crop blocks may require separate irrigation sections. Zoning should be planned according to the available water supply and irrigation arrangement.',
      },

      {
        label: 'Filtration and Water Quality',

        text: 'Water quality and the selected irrigation equipment determine the filtration requirements. Appropriate filtration should be considered before water enters the dripline network.',
      },

      {
        label: 'Installation and Maintenance',

        text: 'Field connections should remain accessible for inspection and maintenance. The layout should also allow individual sections to be checked or serviced without unnecessarily disturbing the complete irrigation network.',
      },
    ],
  },

  products: {
    heading: 'Recommended Products',

    intro: `For vegetable cultivation, Thin Wall Dripline K-Slim and Thin Wall Dripline K-Slim Ultra are relevant at the field-distribution stage of the irrigation system. They can be considered as part of a wider network consisting of the water source, filtration, mainline, distribution lines and field connections.`,

    items: [
      {
        name: 'Thin Wall Dripline K-Slim',

        url: '/thinwall-drip-line/thin-wall-dripline-k-slim',

        image: `${ADMIN}/2025/04/DRIPLINE-K-SLIM-ULTRA.webp`,

        paragraphs: [
          'Thin Wall Dripline K-Slim is intended for use as part of a drip irrigation arrangement where water needs to be distributed along vegetable crop rows. It forms the final field-level section of the system after water has been carried through the main and distribution network.',

          'For vegetable cultivation, its selection should be considered alongside the crop-row or bed layout, field dimensions, irrigation sections and verified product requirements. The overall system should be planned according to the actual conditions of the farm.',
        ],
      },

      {
        name: 'Thin Wall Dripline K-Slim Ultra',

        url: '/thinwall-drip-line/thinwall-dripline-k-slim-ultra',

        image: `${ADMIN}/2025/04/DRIPLINE-K-SLIM.webp`,

        paragraphs: [
          ' Thin Wall Dripline K-Slim Ultra is another thin-wall dripline option that can be considered for vegetable irrigation applications. It sits at the field-distribution stage and can be incorporated into a layout where a dripline follows the planned vegetable rows or beds.',

          `The appropriate product should be selected based on the verified technical specifications, field conditions and irrigation requirements. The dripline should also be considered together with filtration, distribution lines and field connections rather than as a standalone component.`,
        ],
      },
    ],

    mapping: {
      columnHeadings: [
        'Application Requirement',
        'Recommended Kothari Product',
        'Role in the System',
      ],

      rows: [
        {
          requirement: 'Vegetable row irrigation',
          product: 'Thin Wall Dripline K-Slim',
          role: 'Field-level drip distribution',
        },

        {
          requirement: 'Vegetable bed irrigation',
          product: 'Thin Wall Dripline K-Slim Ultra',
          role: 'Field-level drip distribution',
        },

        {
          requirement: 'Drip-based vegetable irrigation',
          product: 'K-Slim / K-Slim Ultra',
          role: 'Final water-distribution stage',
        },
      ],
    },
  },

  howItWorks: {
    heading: 'How a Vegetable Irrigation System Works',

    intro: 'A vegetable drip irrigation system moves water from the source through a planned pipeline network before distributing it along the crop rows or beds.',

    flow: [
      'Water Source',

      'Filtration',

      'Main Pipeline',

      'Distribution Lines',

      'Dripline Along Crop Rows',

      'Crop Area',
    ],

    steps: [
      {
        title: 'Water Source',

        text: 'Water enters the irrigation system from the available farm water source. Pumping requirements depend on the source and the overall system design.',
      },

      {
        title: 'Filtration',

        text: 'Where required, water passes through the appropriate filtration arrangement before entering the field distribution network. The filtration setup depends on water quality and the irrigation equipment being used.',
      },

      {
        title: 'Main Pipeline',

        text: 'The main pipeline carries water from the source towards the vegetable cultivation area. It forms the primary water-conveyance route.',
      },

      {
        title: 'Distribution Lines',

        text: 'Water moves from the mainline into distribution or submain lines serving different sections of the field. These sections can be arranged according to the farm layout and irrigation requirements.',
      },

      {
        title: 'Dripline Along Crop Rows',

        text: 'Thin Wall Dripline K-Slim or K-Slim Ultra is connected to the field distribution network and arranged along the planned vegetable rows or beds. This is the final distribution stage within the crop area.',
      },

      {
        title: 'Crop Area',

        text: 'Water moves through the dripline towards the vegetable crop. The complete system should allow the source, filtration, pipelines, field connections and dripline to function as one coordinated network.',
      },
    ],
  },

  cta: {
    heading: 'Planning a Vegetable Irrigation System?',

    body: 'Share your crop layout, field size and water-source details with the Kothari team to discuss the appropriate dripline arrangement.',

    buttonText: 'Discuss Your Requirement',
  },
},

  {
  slug: 'industrial-water-supply',

  division: 'pipe-division',

  parentHref: '/pipe-applications',

  parentLabel: 'Pipe Applications',

  divisionHref: '/pipe-division',

  metaTitle: 'Industrial Water Supply Pipes | Kothari Pipes',

  metaDescription:
    'Explore UPVC and HDPE piping options for industrial water supply, transfer and distribution systems based on flow, pressure and site conditions.',

  heroEyebrow: 'Pipe Applications',

  h1: 'Industrial Water Supply',

  tagline:
    'Piping systems designed around the flow, pressure, route and operating conditions of industrial water networks.',

  image: '/heronew.jpg',

  bannerImage: '/farm.png',

  overview: {
    heading: 'Industrial Water Supply Overview',

    paragraphs: [
      'Industrial facilities often need to move water across considerable distances from a source or storage point to production areas, utility sections, treatment facilities and other points of use. The piping network has to handle the required flow while fitting around plant layouts, equipment and site conditions.',

      'Unlike a simple building water line, an industrial water supply system may include long pipeline runs, underground sections, above-ground routes, multiple branches and different operating conditions across the network. Pipe selection therefore depends on factors such as water quality, flow, pressure, pipeline length, installation environment and the purpose for which the water is being supplied.',

      'The right piping system should be selected as part of the overall hydraulic and project design. Depending on the application and operating conditions, HDPE pipes can be considered for suitable sections of an industrial water supply network.',
    ],
  },

  whereUsed: {
    heading: 'Where Industrial Water Supply Is Used',

    intro: [
      'Industrial water supply systems are used wherever a facility needs to transfer and distribute water between its source, storage infrastructure, utilities and operating areas.',
    ],

    items: [
      {
        label: 'Manufacturing facilities',

        text: 'Water can be distributed to production-support areas, utilities and other designated points within the plant.',
      },

      {
        label: 'Industrial plants and factories',

        text: 'Pipeline networks may connect storage tanks, water-treatment systems and different sections of the facility.',
      },

      {
        label: 'Process and utility water networks',

        text: 'Water can be transferred between treatment, storage and utility areas according to the plant\'s process design.',
      },

      {
        label: 'Industrial estates and large facilities',

        text: 'Longer pipelines may distribute water from a common source or storage facility to different operational zones.',
      },

      {
        label: 'Infrastructure and utility projects',

        text: 'Water transmission and distribution pipelines can connect supply points with remote or multiple points of use.',
      },
    ],

    note: 'The actual piping arrangement depends on the water source, required flow, pressure, pipeline route and operating conditions of the project.',
  },

  requirements: {
    heading: 'Key Requirements for Industrial Water Supply',

    intro: 'Industrial water supply systems need to be planned as a complete network rather than as individual pipeline sections. The design should account for water quality, flow requirements, operating pressure, installation conditions, and the overall pipeline route.',

    items: [
      {
        label: 'Water Quality and Application',

        text: 'Start with the water itself. The source, intended use and water quality should be understood before selecting the pipe material. If the water contains chemicals or other substances that may affect the piping material, compatibility should be confirmed as part of the technical selection.',
      },

      {
        label: 'Flow and Pipe Sizing',

        text: 'Industrial networks can involve substantial water demand and long pipeline runs. Pipe diameter should be established from the required flow, allowable pressure loss and hydraulic calculations rather than selecting a size based only on the connection size at the source or equipment.',
      },

      {
        label: 'Operating Pressure',

        text: 'The pipeline needs to accommodate the system\'s operating pressure and relevant pressure variations. Pump characteristics, elevation differences and the overall network layout should be considered during design.',
      },

      {
        label: 'Installation Environment',

        text: 'The installation route matters, particularly for underground pipelines. Soil conditions, external loads, temperature and exposure to the surrounding environment should be assessed where applicable.',
      },

      {
        label: 'Pipeline Length and Layout',

        text: 'Long industrial pipelines may require changes in direction, branches and connections to different sections of a facility. The proposed pipe material and installation method should be evaluated against the complete route rather than an individual section.',
      },

      {
        label: 'Material Selection',

        text: 'The right piping system should be selected as part of the overall hydraulic and project design, taking into account water characteristics, flow, pressure, installation environment and operating conditions.',
      },
    ],
  },

  products: {
    heading: 'Recommended Kothari Products',

    intro: 'For industrial water supply, HDPE Pipes can serve different requirements within a water-transfer or distribution network. The final selection should be based on the projects hydraulic design and operating conditions.',

    items: [
      {
        name: 'Kothari HDPE Pipes',

        
        url: '/pe-pipes-and-fittings/hdpe-piping',
        image: `${ADMIN}/2025/04/HDPE-PIPE-111.webp`,

        paragraphs: [
          'HDPE Pipes can be considered for industrial water pipelines where the project requires an appropriate polyethylene piping system for the intended operating and installation conditions.',

          'They can be evaluated for water transfer and distribution routes, including sections where pipeline routing or site conditions influence the material selection. For industrial projects, the selection should take into account operating pressure, pipe diameter, water characteristics, installation environment and the proposed joining method.',
        ],
      },
    ],

    // MISSING:
    // The content provides a Suggested H2 "Product Selection at a Glance"
    // but does not provide an actual mapping/table for it.
    mapping: {
      heading: 'Product Selection at a Glance',
        columnHeadings: ['Application Requirement', 'Recommended Kothari Product', 'Role in the System'],
        rows: [
          { requirement: 'Transfer water from the source across the farm', product: 'HDPE Pipe', role: 'Main or distribution water-transfer pipeline' },
          { requirement: 'Rising and distributing lines', product: 'Self Fit PVC Pipe', role: 'Pressure water-supply and distribution line' },
          { requirement: 'Main and sub-main irrigation lines', product: 'Self Fit PVC Pipe', role: 'Carries water towards drip or sprinkler networks' },
          { requirement: 'Changes in direction or pipeline branches', product: 'Agri PVC Moulded Fittings', role: 'Connects, redirects and branches the pipeline' },
          { requirement: 'Different pipe sizes need to be connected', product: 'Agri PVC Moulded Fittings', role: 'Reducers/adapters provide the required connection' },
        ],
    },
  },

  howItWorks: {
    heading: 'How an Industrial Water Supply System Works',

    intro: 'An industrial water supply network generally moves water from its source or storage facility through a main pipeline and then distributes it to the required areas of the plant.',

    flow: [
      'Water Source',

      'Collection / Storage',

      'Pumping / Main Pipeline',

      'Primary Distribution',

      'Branch Distribution',

      'Point of Use',
    ],

    steps: [
      {
        title: 'Water Source',

        text: 'Water enters the system from the designated source, such as an approved water supply, storage facility or treatment system.',
      },

      {
        title: 'Collection / Storage',

        text: 'Where required by the project, water is collected or stored before being transferred into the distribution network.',
      },

      {
        title: 'Pumping / Main Pipeline',

        text: 'Pumps or other transfer arrangements move water through the main pipeline. Flow and pressure requirements are determined by the system design.',
      },

      {
        title: 'Primary Distribution',

        text: 'The main pipeline carries water towards different sections of the industrial facility. Pipe diameter and routing are determined by the hydraulic requirements and site layout.',
      },

      {
        title: 'Branch Distribution',

        text: 'Branches divide the main supply into separate routes serving production-support areas, utilities, treatment sections, storage facilities or other designated points.',
      },

      {
        title: 'Point of Use',

        text: 'Water reaches the equipment, utility system or operational area for which the supply has been designed.',
      },
    ],
  },

  cta: {
    heading: 'Planning an Industrial Water Supply System?',

    body: 'The right pipe depends on more than the required diameter. Flow, pressure, water characteristics and installation conditions all influence the selection. Share your industrial water supply requirement with the Kothari team to discuss the appropriate piping options for your project.',

    buttonText: 'Discuss Your Requirement',
  },
},
  {
  slug: 'building-drainage-system',

  division: 'pipe-division',

  parentHref: '/pipe-applications',

  parentLabel: 'Pipe Applications',

  divisionHref: '/pipe-division',

  metaTitle: 'Building Drainage System | Kothari Pipe',

  metaDescription:
    'Explore Kothari building drainage systems with solid-wall UPVC and Foamcore underground drainage piping for residential and commercial projects.',

  heroEyebrow: 'Pipe Applications',

  h1: 'Building Drainage System',

  tagline:
    'Plan building drainage around wastewater flow, underground routing, connection points and site conditions for efficient movement of discharge away from the building.',

  image: '/heronew.jpg',

  bannerImage: '/farm.png',

  overview: {
    heading: 'Building Drainage System Overview',

    paragraphs: [
      `A building's drainage system has a simple job: get wastewater out from bathrooms, kitchens, and utility areas without causing trouble inside or around the building. But as buildings get bigger and plumbing gets more complicated, you can't just wing it. The part underground needs just as much planning as what's inside.`,

      `The drainage network pulls wastewater from all over bathrooms, kitchens, you name it and sends it out through a combination of branch lines and underground pipes until it reaches the right collection point. That means the underground pipes have to match up with the planned routes, fit the connection points, handle the way they'll be installed, and manage the actual wastewater flow.`,

      `For contractors, plumbers, and anyone else working on the project, choosing pipes isn't just about moving water. The system has to fit the building's layout, the space available for installation, the depth of the pipes, and the conditions around the site. Planning how pipes link up really matters, especially where a bunch of different branches come together underground.`,

      `Kothari offers two options: the UPVC Underground Drainage Piping System and the Foamcore Underground Drainage Piping System. Each works for different drainage needs, and you can pick the one that best matches your project's design.`,
    ],
  },

  whereUsed: {
    heading: 'Where Building Drainage Systems Are Used',

    intro: [
      'Building drainage systems are required across residential, commercial and institutional construction where wastewater needs to be collected and transferred from the building to an appropriate discharge or collection point.',
    ],

    items: [
      {
        label: 'Residential buildings',

        text: 'Wastewater from bathrooms, kitchens, and all the other plumbing fixtures has to find its way to the main sewer lines somehow. That whole journey starts right here.',
      },

      {
        label: 'Apartments and housing projects',

        text: `When you're dealing with multiple buildings, floors, and lots of discharge points, you can't just slap a drainage plan together after the fact. You need a game plan before anyone starts digging.`,
      },

      {
        label: 'Commercial buildings',

        text: 'Offices and retail spaces always have a bunch of plumbing fixtures and service areas running at the same time. The drainage setup needs to carry all that flow smoothly—otherwise, you will end up with a maintenance nightmare.',
      },

      {
        label: 'Hotels and hospitality projects',

        text: `These places pack in more bathrooms, kitchens, and utility zones than your average building. You can't afford to improvise the drainage system as you go. Plan it out early or it will come back to haunt you.`,
      },

      {
        label: 'Institutional buildings',

        text: `Schools and hospitals are never just a basic box—there's always something unique about the layout. The drainage network has to fit around the building's shape and whatever infrastructure is already there.`,
      },

      {
        label: 'Industrial and service buildings',

        text: 'Any time a project needs wastewater or drainage to move underground, this piping steps in and gets it done.',
      },
    ],

    note: 'The final pipe selection depends on the building design, drainage layout, installation conditions and applicable project requirements.',
  },

  requirements: {
    heading: 'Key Requirements for Building Drainage',

    intro: 'A building drainage system should be planned as part of the overall plumbing and site drainage design. Pipe selection needs to consider how wastewater moves from individual discharge points to the underground network and eventually to the designated collection or disposal point.',

    items: [
      {
        label: 'Drainage layout',

        text: 'Branch lines, vertical stacks, underground lines and connection points should be coordinated with the building plan. The routing should minimise unnecessary changes in direction while accommodating the available installation space.',
      },

      {
        label: 'Pipe size and flow',

        text: 'The pipe size and network configuration should be selected according to the expected wastewater discharge and the drainage design. Hydraulic requirements should be established by the project designer rather than using a standard size for every building.',
      },

      {
        label: 'Installation conditions',

        text: 'Underground sections may pass through different soil and site conditions. Available depth, trench arrangement and surrounding infrastructure should be considered during planning and installation.',
      },

      {
        label: 'Jointing and connections',

        text: 'Drainage systems typically include several branches and connection points. The selected piping system should be compatible with the fittings and jointing arrangement specified for the project.',
      },

      {
        label: 'Material selection',

        text: 'The pipe material should be appropriate for the intended drainage application and expected operating environment. Where wastewater may contain chemicals or aggressive substances, the project requirements should be reviewed before final selection.',
      },

      {
        label: 'Maintenance',

        text: 'Access points and the overall network layout should allow inspection and maintenance where required. Good planning at the design stage can reduce difficulties during future servicing.',
      },
    ],
  },

  products: {
    heading: 'Recommended Kothari Products',

    intro: 'Kothari offers two underground drainage piping systems that can be considered for building drainage applications. The appropriate system should be selected according to the project design, installation requirements and applicable standards.',

    items: [
      {
        name: 'UPVC Underground Drainage Piping System (Solid Wall UDS)',

        url: '/underground-pipe-and-fittings/upvc-underground-drainage-piping-system',

        image: `${ADMIN}/2025/04/UDS-PIPES-FITTINGS.webp`,

        paragraphs: [
          `Kothari's solid-wall UPVC Underground Drainage Piping System is intended for underground drainage networks where wastewater needs to be carried away from the building and routed towards the designated discharge or collection point.`,

          `The system uses virgin UPVC and is identified as the KWIK Drain system. It conforms to IS 13592:2013 and IS 15328:2003, based on the available product information.`,

          `For building projects, the system can form part of the underground section connecting building drainage outlets to the site's larger drainage network. Its selection and pipe sizing should follow the project drainage design and applicable requirements.`,
        ],
      },

      {
        name: 'Foamcore Underground Drainage Piping System',

        url: '/underground-pipe-and-fittings/foamcore-underground-drainage-piping-system',

        image: `${ADMIN}/2025/10/UDS-Foamcore.webp`,

        paragraphs: [
          'The Foamcore Underground Drainage Piping System is another option for underground drainage applications in building projects. It uses the KWIK DRAIN system and conforms to IS 16098 Part 1, based on the available product information.',

          'It can be considered where the project design calls for a foamcore underground drainage piping system. As with any underground drainage installation, the final selection should take account of the building layout, wastewater flow, routing, installation conditions and specified project requirements.',
        ],
      },
    ],


   
    mapping: {
      heading: 'Application-to-Product Mapping',

      columnHeadings: [
        'Application Requirement',
        'Recommended Kothari Product',
        'Role in the System',
      ],

      rows: [
        {
          requirement: 'Underground building drainage',
          product: 'UPVC Underground Drainage Piping System (Solid Wall UDS)',
          role: 'Carries wastewater through the underground drainage network',
        },

        {
          requirement: 'Foamcore underground drainage',
          product: 'Foamcore Underground Drainage Piping System',
          role: 'Underground wastewater conveyance',
        },
      ],
    },
  },

  howItWorks: {
    heading: 'How a Building Drainage System Works',

    intro: 'A building drainage system collects wastewater from individual plumbing fixtures and transfers it through a planned network to the designated underground drainage or collection point.',

    flow: [
      'Bathrooms / Kitchens / Utility Areas',

      'Internal Drainage Lines',

      'Building Drain / Outlet',

      'Underground Drainage Piping',

      'Site Drainage / Collection Network',

      'Designated Discharge or Treatment Point',
    ],

    steps: [
      {
        title: 'Bathrooms / Kitchens / Utility Areas',

        text: `Wastewater first leaves individual fixtures through the internal drainage network. Branch lines collect discharge from different areas and connect it to the building's main drainage route.`,
      },

      {
        title: 'Internal Drainage Lines',

        text: `Internal drainage lines carry wastewater from individual branches towards the building drain or main outlet, following the planned drainage layout.`,
      },

      {
        title: 'Building Drain / Outlet',

        text: 'Once the wastewater reaches the building drain or outlet, it moves towards the underground section of the drainage network.',
      },

      {
        title: 'Underground Drainage Piping',

        text: `Once the wastewater reaches the underground section, the selected Kothari drainage piping system carries it towards the site's drainage or collection network. Depending on the project specification, the underground section can use the UPVC Underground Drainage Piping System (Solid Wall UDS) or Foamcore Underground Drainage Piping System.`,
      },

      {
        title: 'Site Drainage / Collection Network',

        text: 'The underground routing should be coordinated with the building foundation, other underground utilities, site levels and access requirements.',
      },

      {
        title: 'Designated Discharge or Treatment Point',

        text: 'Pipe sizing, gradients and the overall hydraulic design should be established by the project designer based on expected discharge and applicable project requirements.',
      },
    ],
  },

  cta: {
    heading: 'Planning a Building Drainage System?',

    body: 'Share your building layout and drainage requirements with the Kothari team to discuss suitable underground drainage piping options for your project.',

    buttonText: 'Discuss Your Requirement',
  },
},
  {
  slug: 'rainwater-drainage-systems',

  division: 'pipe-division',

  parentHref: '/pipe-applications',

  parentLabel: 'Pipe Applications',

  divisionHref: '/pipe-division',

  metaTitle: 'Rainwater Drainage Systems | Kothari Pipe',

  metaDescription:
    'Explore Kothari rainwater drainage systems using SWR and PP Low Noise Drainage piping for roofs, terraces and building rainwater management.',

  heroEyebrow: 'Pipe Applications',

  h1: 'Rainwater Drainage Systems',

  tagline:
    'Plan rainwater drainage around roof areas, rainfall intensity, drainage routes and safe discharge points to manage water across the building site.',

  image: '/heronew.jpg',

  bannerImage: '/farm.png',

  overview: {
    heading: 'Rainwater Drainage System Overview',

    paragraphs: [
      `When it rains hard, water pools up on rooftops, terraces, and anywhere else that's out in the open. That water has to go somewhere if it just sits there or isn't directed away properly, it ends up gathering around the building. You might find walkways flooded, or the drainage system just gets overwhelmed with all that extra water.`,

      `A good rainwater drainage system steps in here. It grabs the runoff from the roof and other surfaces and channels it away, using a mix of vertical and horizontal pipes to steer it toward a safe spot, whether that's a drain, a collection tank, or a recharge pit. The piping network therefore needs to be planned around the building layout, catchment area, rainfall conditions and available discharge route.`,

      `For building owners, contractors and plumbing teams, pipe selection is only one part of the system. The routing, connection points, pipe capacity, vertical drops and discharge arrangement all need to work together. Exposed sections may also need to account for the building's appearance and operating environment.`,

      `Kothari's PP Low Noise Drainage System and SWR (Soil, Waste & Rainwater) Piping System can be considered for rainwater drainage requirements based on the project design and application conditions.`,
    ],
  },

  whereUsed: {
    heading: 'Where Rainwater Drainage Systems Are Used',

    intro: [
      'Rainwater drainage systems are used wherever rainfall needs to be collected from roofs, terraces or other building surfaces and directed away from the structure.',
    ],

    items: [
      {
        label: 'Residential buildings',

        text: `A sloped roof or an open terrace sheds water fast once the rain picks up the job here is simple but has to be exact: catch it at the right points and get it down and away before it pools or finds its way where it shouldn't.`,
      },

      {
        label: 'Apartment projects',

        text: 'Multiple blocks means multiple roofs draining at the same time, often at different heights the vertical drops have to tie into a horizontal layout that can actually carry that combined volume without backing up at the lowest point.',
      },

      {
        label: 'Commercial buildings',

        text: 'Flat roofs are common on offices and retail spaces, and flat roofs don\'t shed water on their own the way a sloped residential roof does; outlets and gradients have to be planned in, not assumed.',
      },

      {
        label: 'Industrial buildings',

        text: 'A factory shed roof can be enormous compared to a house roof, and when the monsoon hits hard, that whole surface is draining at once undersized piping here shows up fast as pooling or backflow.',
      },

      {
        label: 'Institutional buildings',

        text: 'Hospitals and schools are usually spread across several connected structures rather than one block, so rainwater routing has to follow whatever irregular footprint the campus actually has, not a textbook layout.',
      },

      {
        label: 'Warehouses and large roof structures',

        text: `These roofs are built for span, not drainage, which means outlets and piping runs are often the one part of the structure that has to be deliberately engineered rather than left to the roof's natural fall.`,
      },
    ],

    note: 'The final system layout depends on the building design, roof area, rainfall conditions, drainage route and designated discharge or reuse arrangement.',
  },

  requirements: {
    heading: 'Key Requirements for Rainwater Drainage',

    intro: 'Rainwater drainage should be planned from the point where water is collected through to its final discharge or collection point. The system needs to handle the expected runoff while fitting within the building and site layout.',

    items: [
      {
        label: 'Roof and catchment area',

        text: 'The size and configuration of the roof or surface area determine how much rainwater enters the drainage network. Different roof sections may require separate collection points.',
      },

      {
        label: 'Rainfall conditions',

        text: 'Local rainfall intensity should be considered when determining the required drainage capacity. The project designer should establish the hydraulic requirements rather than applying a fixed pipe arrangement to every building.',
      },

      {
        label: 'Drainage routing',

        text: 'Vertical rainwater pipes, horizontal lines and discharge routes should be coordinated with the building structure and other services. Unnecessary changes in direction should be avoided where the design permits.',
      },

      {
        label: 'Pipe capacity',

        text: 'Pipe size and network configuration should correspond to the expected rainwater flow and project design. Hydraulic calculations should guide final pipe selection.',
      },

      {
        label: 'Connections and outlets',

        text: 'Roof outlets, branch connections and discharge points need to be coordinated so that collected rainwater enters and leaves the system properly.',
      },

      {
        label: 'Installation environment',

        text: 'Outdoor and exposed sections may experience changing weather conditions and temperature. The selected system should be appropriate for the intended installation environment.',
      },

      {
        label: 'Maintenance',

        text: 'Roof outlets, accessible connections and discharge points should be planned so that leaves, debris and accumulated material can be inspected and cleared when required.',
      },
    ],
  },

  products: {
    heading: 'Recommended Kothari Products',

    intro: 'Kothari offers drainage systems that can be considered for rainwater applications depending on the building design, drainage arrangement and project requirements.',

    items: [
      {
        name: 'PP Low Noise Drainage System',
        url: '/soil-waste-and-rainwater-pipes-and-fittings/pp-low-noise-drainage-system',
        image: `${ADMIN}/2025/10/PP-Low-Noise-Drainage-System.webp`,

        paragraphs: [
          'The PP Low Noise Drainage System is a three-layer mineral-filled polypropylene drainage system that can be considered where reduced drainage noise is an important consideration in building design.',

          'The system is specified for 90°C continuous temperature and 95°C short-term temperature, with a pH range of 2–12 based on the available product information. These characteristics relate to the broader operating conditions of the drainage system and should be evaluated against the specific project requirement.',

          `For rainwater drainage, its suitability should be assessed according to the building's roof drainage layout, expected flow and installation conditions.`,
        ],
      },

      {
        name: 'SWR (Soil, Waste & Rainwater) Piping System',

        url: '/soil-waste-and-rainwater-pipes-and-fittings/swr-pipes-and-fittings-for-drainage-systems',
        
        image: `${ADMIN}/2025/04/SWR-PIPES-FITTINGS.webp`,

        paragraphs: [
          'The SWR Piping System is designed for soil, waste and rainwater drainage applications. This makes it directly relevant to building drainage networks where rainwater needs to be collected and conveyed through planned piping routes.',

          'The system uses KWIK-sil rubber ring push-fit jointing. Available product information also specifies lead-free construction, UV resistance, and resistance to sewer gases, acids and effluents. The system is rated for pressure up to 10 kg/cm² based on the available product information.',

          'For rainwater applications, the system can form part of the vertical and horizontal drainage network connecting collection points to the designated discharge route.',
        ],
      },
    ],

    mapping: {
      heading: 'Application-to-Product Mapping',

      columnHeadings: [
        'Application Requirement',
        'Recommended Kothari Product',
        'Role in the System',
      ],

      rows: [
        {
          requirement: 'Building rainwater drainage',
          product: 'SWR Piping System',
          role: 'Collection and conveyance of rainwater',
        },

        {
          requirement: 'Drainage where reduced noise is a consideration',
          product: 'PP Low Noise Drainage System',
          role: 'Drainage piping within the building system',
        },
      ],
    },
 },

  howItWorks: {
    heading: 'How a Rainwater Drainage System Works',

    intro: 'A rainwater drainage system collects runoff from roof surfaces and carries it through a planned network to a designated discharge, collection or reuse point.',

    flow: [
      'Roof / Terrace Surface',

      'Rainwater Outlet / Collection Point',

      'Vertical Rainwater Pipe',

      'Horizontal Drainage Line',

      'Site Drainage / Collection Network',

      'Discharge / Recharge / Reuse Point',
    ],

    steps: [
      {
        title: 'Roof / Terrace Surface',

        text: 'Rainwater first collects on the roof or terrace and enters the drainage network through designated outlets.',
      },

      {
        title: 'Rainwater Outlet / Collection Point',

        text: 'Designated outlets collect the runoff from roof or terrace surfaces and direct it into the rainwater drainage network.',
      },

      {
        title: 'Vertical Rainwater Pipe',

        text: 'Vertical pipes carry the collected rainwater down through the building.',
      },

      {
        title: 'Horizontal Drainage Line',

        text: 'Horizontal drainage lines route the rainwater towards the planned discharge or collection point.',
      },

      {
        title: 'Site Drainage / Collection Network',

        text: 'Depending on the project design, the drainage network may use the SWR Piping System or PP Low Noise Drainage System for relevant sections. Connections, branches and changes in direction should be coordinated with the building structure and other services.',
      },

      {
        title: 'Discharge / Recharge / Reuse Point',

        text: 'The final discharge arrangement can vary by project. Rainwater may be directed to a site drainage network, collection system, recharge arrangement or another designated point as specified by the project design.',
      },
    ],
  },

  cta: {
    heading: 'Planning a Rainwater Drainage System?',

    body: 'Share your building layout, roof area and drainage requirements with the Kothari team to discuss suitable piping options for your project.',

    buttonText: 'Discuss Your Requirement',
  },
},
  {
  slug: 'banana-irrigation-systems',

  division: 'irrigation-division',
  parentHref: '/irrigation-applications',
  parentLabel: 'Irrigation Applications',
  divisionHref: '/irrigation-division',
  metaTitle: 'Banana Irrigation Systems | Kothari Irrigation',

  metaDescription:
    'Explore banana irrigation systems using dripline and micro sprinklers for planned plantation water distribution with Kothari irrigation products.',
  heroEyebrow: 'Irrigation Applications',
  image: '/heronew.jpg',
  bannerImage: '/drip.png',
  h1: 'Banana Irrigation Systems',
  tagline:
    'Plan banana plantation irrigation around plant layout, water availability and field conditions with a suitable drip or micro-sprinkler distribution system.',

  overview: {
    heading: 'Understanding Banana Irrigation Systems',
    paragraphs: [
      `Growing bananas isn't as simple as just planting and watering. You need a solid irrigation system because these crops grow in carefully arranged rows and need water spread out evenly. Once you start planting on a larger scale, it gets tricky fast. Without a proper plan, moving water between different parts of the field by hand turns into a real headache.`,

      `Here's how the irrigation system usually works: it connects your water source to the banana plants with main pipelines and smaller distribution lines. You set up equipment in a way that matches the rows. Driplines run along each row and give each plant just what it needs, while micro sprinklers work well if you want to water a broader area around each plant.`,

      `But there's more to it. You've got to think about where your water comes from, how much you have, the pressure, field size, plant spacing, and how you will filter out dirt that could clog the system. The pipes and connections need to be easy to check and fix, too, so you are not wasting time on maintenance.`,

      `For farmers and ag specialists, it's all about the bigger picture. The best setup isn't just about picking a drip line or a sprinkler off the shelf. You have to look at your field layout, what kind of irrigation fits, and design everything so it's practical for your own operation.`,
    ],

  },

  whereUsed: {
    heading: 'Where Banana Irrigation Systems Are Used',
    intro:[
      'Banana irrigation systems are used in plantations where water needs to be distributed systematically across rows of banana plants. The arrangement can be adapted to plantation size, field layout, water source and the chosen irrigation method.',
],
    items: [
      {
        label: 'Commercial Banana Plantations',
        text:
          'Larger plantations can use planned pipeline networks to distribute water across multiple cultivation sections.',
      },
      {
        label: 'Open-Field Banana Cultivation',
         text:
          'Driplines or micro sprinklers can be positioned according to the banana plant layout, with distribution lines supplying different areas of the field.',
      },
      {
        label: 'New Banana Plantations',
         text:
          'The irrigation network can be planned along with plantation layout so that mainlines, distribution lines and field equipment are positioned before the crop is established.',
      },
      {
       label: 'Established Banana Fields',
         text:
          'Existing plantations can assess their current water source and pipeline arrangement before introducing or upgrading field-level irrigation equipment.',
      },
      {
        label: 'Multi-Section Plantations',
         text:
          'Where the plantation is divided into several blocks, the distribution network can be organised to supply individual sections according to the irrigation schedule and available water.',
      },
    ],
  },

  requirements: {
    heading: 'Key Requirements for Banana Irrigation',
    intro:
      'Banana irrigation should be planned around the plantation layout and the selected irrigation method. The main pipeline, distribution network and field equipment need to work together as one system.',

    items: [
      {
        label: 'Water Source',
         text:
          'The available source should be assessed for its supply conditions before planning the irrigation network. This helps determine how the field can be divided and supplied.',
      },
      {
       label: 'Flow and Pressure',
         text:
          'Flow and pressure requirements should be considered across the complete network. Mainlines, distribution lines and field-level irrigation equipment should be selected as connected parts of the system.',
      },
      {
        label: 'Plantation Layout',
         text:
          'Banana plants are arranged in defined rows, so the irrigation network should follow the actual plantation layout. Field connections and irrigation equipment need to be positioned accordingly.',
      },
      {
        label: 'Irrigation Method',
         text:
          'Dripline and micro sprinklers distribute water differently. The choice should depend on the plantation layout, irrigation objective and overall system design.',
      },
      {
        label: 'Filtration and Water Quality',
         text:
          'The filtration arrangement should be considered according to the water source and selected irrigation equipment. Water quality is particularly relevant when designing a drip-based network.',
      },
      {
        label: 'Installation and Maintenance',
         text:
          'Mainlines, field connections and irrigation equipment should remain accessible for inspection. The system should also allow individual sections to be serviced without unnecessarily affecting the wider plantation network.',
      },
    ],
  },

  products: {
    heading: ' Recommended Kothari Products',
    intro: `Kothari's Dripline K-Lin PCND and K-Mic Micro Sprinkler can be incorporated at the field-distribution stage of a banana irrigation system. The appropriate option depends on the plantation layout and the irrigation arrangement being designed.`,

    items: [
      {
        name: 'Dripline K-Lin PCND',
        url: '/drip-line/dripline-k-lin-pcnd',
        image: `${ADMIN}/2025/04/DRIPLINE-K-LIN-PCND-1.webp`,
        paragraphs: [
          'Dripline K-Lin PCND is relevant where water needs to be distributed through dripline along planned banana plant rows. It forms part of the field-level network after water has travelled through the main and distribution pipelines.',
          'For banana plantations, the dripline arrangement should follow the plant-row layout and connect properly with the field distribution network. Product selection should be based on the verified technical specifications and the requirements of the particular plantation.',
        ],
      },
      {
        name: 'K-Mic Micro Sprinkler',
        url: '/micro-sprinklers-and-assemblies/k-mic-micro-sprinkler',
        image: `${ADMIN}/2025/10/K-Mic-Micro-Sprinkler.webp`,
        paragraphs: [
          'K-Mic Micro Sprinkler is relevant to banana irrigation systems where micro-sprinkler-based water distribution is preferred. It forms the field-level application point after water is carried through the pipeline network.',
          `For plantation planning, the position of the micro sprinklers should be considered alongside plant arrangement, field dimensions, water supply and system design. The required product configuration should be confirmed against the actual site and verified technical information.`,
        ],
      },
    ],

    mapping: {
      columnHeadings: [
        'Application Requirement',
        'Recommended Kothari Product',
        'Role in the System',
      ],
      rows: [
        {
          requirement: 'Row-based banana irrigation',
          product: 'Dripline K-Lin PCND',
          role: 'Field-level drip distribution',
        },
        {
          requirement: 'Micro-sprinkler irrigation',
          product: 'K-Mic Micro Sprinkler',
          role: 'Field-level water application',
        },
        {
          requirement: 'Banana plantation irrigation',
          product: 'K-Lin PCND / K-Mic',
          role: 'Final distribution stage',
        },
      ],
    },
  },

  howItWorks: {
    heading: 'How a Banana Irrigation System Works',
    intro:
      'A banana irrigation system carries water from the source through a pipeline network and then distributes it within the plantation according to the selected irrigation method.',

    flow: [
      'Water Source',
      'Filtration',
      'Main Pipeline',
      'Distribution Lines',
      'Field-Level Irrigation',
      'Banana Plantation',
    ],

    steps: [
      {
        title: 'Water Source',
        text:
          'Water enters the system from the available farm or plantation water source. Pumping requirements depend on the source and overall system design.',
      },
      {
        title: 'Filtration',
        text:
          'Where required, water passes through the appropriate filtration arrangement before entering the field network. The filtration setup depends on the water source and selected irrigation equipment.',
      },
      {
        title: 'Main Pipeline',
         text:
          'The main pipeline carries water from the source towards the banana plantation. It acts as the primary route for water movement across the irrigation system.',
      },
      {
        title: 'Distribution Lines',
        text:
          'Water moves from the mainline into distribution or submain lines that supply different plantation sections. The network can be divided according to field size and irrigation requirements.',
      },
      {
        title: 'Field-Level Irrigation',
        text:
          'At the field level, Dripline K-Lin PCND can be arranged along the banana plant rows, while K-Mic Micro Sprinkler can be positioned as part of a micro-sprinkler irrigation layout.',
      },
      {
        title: 'Banana Plantation',
         text:
          'The selected field equipment distributes water within the planned crop area. The complete arrangement should allow the water source, filtration, pipelines, connections and field equipment to operate as one coordinated irrigation network.',
      },
    ],
  },

  cta: {
    heading: 'Planning a Banana Irrigation System?',
    body:'Share your plantation layout, water source and irrigation requirements with the Kothari team to discuss the appropriate field-distribution arrangement.',
    buttonText: 'Discuss Your Requirement',
  },

 
},

  {
  slug: 'irrigation-for-field-crops',

  division: 'irrigation-division',
  parentHref: '/irrigation-applications',
  parentLabel: 'Irrigation Applications',
  divisionHref: '/irrigation-division',
  metaTitle: 'Field Crop Irrigation Systems | Kothari Irrigation',
  metaDescription: 'Explore irrigation piping for field crops, including LD Krishi Pipe and Polytube for water conveyance and field-level irrigation distribution.',
  heroEyebrow: 'Irrigation Applications',
  image: '/heronew.jpg',
  bannerImage: '/drip.png',

  h1: 'Irrigation for Other Field Crops',

  tagline:
    'Plan field-crop irrigation around water availability, field size and distribution requirements with practical piping for farm-level water movement.',

  overview: {
    heading: 'Irrigation for Field Crops Overview',
    paragraphs: [
      `Crops like cotton, soybeans, pulses, groundnuts, and cereals usually cover a lot of ground, and getting water where it's needed can be tricky. You want an irrigation system that gets water from the source to every corner of the field, but you also don't want something that's a pain to set up, use, or move around.`,

      `Depending on the irrigation method, the network may include a water source, pump, main conveyance line, distribution lines and field-level irrigation equipment. In open fields, the piping arrangement also needs to suit the crop layout, field distance and irrigation schedule.`,

      'For some farms, the priority is moving water efficiently from the source to different field sections. In others, the requirement is to connect the distribution network to drip or sprinkler equipment. The piping selected should therefore match the way the field is irrigated, the distance involved, available water flow and the practical conditions under which the system will be installed and maintained.',
    ],
  },

  whereUsed: {
    heading: 'Where Field Crop Irrigation Is Used',
    intro:[
      'Irrigation piping for field crops is used across farms where water has to be distributed over open cultivation areas and the irrigation network needs to suit seasonal cropping patterns.',
],
    items: [
      {
         label: 'Cotton and Fibre Crops',
        text:
          'Water can be conveyed from the source to field sections and connected to the selected irrigation arrangement.',
      },
      {
         label: 'Pulses and Oilseeds',
        text:
          'Piping can support irrigation across open fields where crop areas and irrigation sections may change between seasons.',
      },
      {
         label: 'Cereals and Other Field Crops',
         text:
          'Water conveyance lines can connect the farm water source with different sections of the cultivated area.',
      },
      {
         label: 'Seasonal Cropping Fields',
         text:
          'The system can be planned around changing crop layouts and irrigation requirements from one cultivation cycle to another.',
      },
      {
        label: 'Large Open Fields',
         text:
          'Longer distances between the water source and crop area may require dedicated conveyance and distribution arrangements.',
      },
    ],
  },

  requirements: {
    heading: 'Key Requirements for Field Crop Irrigation',
    intro:
      'The right piping arrangement depends largely on how water needs to move through the farm. Before selecting a product, the source location, field size and irrigation method should be understood.',

    items: [
      {
         label: 'Water Source and Distance',
         text:
          'Identify where the water enters the system and how far it needs to travel. The distance between the source, distribution points and crop area influences the conveyance arrangement.',
      },
      {
         label: 'Flow and Pressure',
         text:
          'The available water flow and operating pressure should be checked against the irrigation equipment being used. The pipe size and distribution layout should be selected accordingly rather than treating the entire field as a single operating section.',
      },
      {
         label: 'Field Layout',
         text:
          'Crop area, field boundaries, access paths and changes between cultivation seasons can affect pipe routing. For open-field irrigation, the arrangement should remain practical for farm operations.',
      },
      {
         label: 'Conveyance Requirement',
         text:
          'Where the primary requirement is to move water from one location to another, a suitable water-conveyance pipe can be used. Where water needs to reach drip or sprinkler equipment, the conveyance network must also accommodate the required field connections.',
      },
      {
        label: 'Handling and Maintenance',
         text:
          'Field irrigation equipment is exposed to regular handling, movement and agricultural activity. Connections should remain accessible for inspection, while the system should be checked periodically for leakage, damage and operating issues.',
      },
    ],
  },

  products: {
    heading: 'Recommended Kothari Products',
    intro: `For other field crops, the piping requirement can vary between water conveyance and field-level irrigation distribution. Kothari's LD Krishi Pipe and Polytube address these different stages of farm irrigation.`,

    items: [
      {
        name: 'LD Krishi Pipe (Lay Flat Tubes)',
        url: '/pe-pipes-and-fittings/ld-krishi-pipe-lay-flat-tubes',
        image: `${ADMIN}/2025/04/LD-Krishi.webp`,
        paragraphs: [
          'LD Krishi Pipe is a lay-flat tube designed for farm water conveyance. It can be considered where water needs to be moved between the source, field sections and irrigation points through a practical surface-laid arrangement.',
          'This type of pipe is particularly relevant to open-field irrigation where the conveyance route may change with field operations or cropping patterns. Kothari lists LD Krishi Pipe in sizes from 1 inch to 6 inches and offers it in Premium and Gold qualities. The product catalogue also specifies meter marking as a feature.',
          'The appropriate size and variant should be selected according to the required flow, distance and operating conditions of the particular farm.',
        ],
      },
      {
        name: 'Polytube',
        url: '/drip-tubes-polytube/polytube',
        image: `${ADMIN}/2025/04/POLYTUBE.webp`,
        paragraphs: [
          'Polytube is used at the distribution side of irrigation systems where water needs to be carried towards field-level irrigation components. Kothari lists its Polytube for online drip irrigation in open-field installations, connections between submain and inline systems, and installation of micro and mini sprinklers. Available sizes listed by Kothari include 12, 16, 20, 25 and 32 mm.',
          `This makes Polytube relevant where the field irrigation arrangement requires a smaller distribution tube between the main distribution network and the irrigation equipment. The final size and configuration should be determined from the irrigation layout and operating requirements.`,
        ],
      },
    ],

    mapping: {
      columnHeadings: [
        'Application Requirement',
        'Recommended Kothari Product',
        'Role in the System',
      ],
      rows: [
        {
          requirement: 'Farm water conveyance',
          product: 'LD Krishi Pipe',
          role: 'Moves water between source and field sections',
        },
        {
          requirement: 'Field-level distribution',
          product: 'Polytube',
          role: 'Carries water towards irrigation components',
        },
        {
          requirement: 'Drip irrigation connections',
          product: 'Polytube',
          role: 'Connects distribution network with drip components',
        },
        {
          requirement: 'Micro / mini sprinkler installation',
          product: 'Polytube',
          role: 'Provides field-level connection to irrigation equipment',
        },
      ],
    },
  },

  howItWorks: {
    heading: 'How Field Crop Irrigation Works',
    intro:
      'An irrigation system for field crops starts with water at the farm source and moves it through a conveyance and distribution network before reaching the crop area.',

    flow: [
      'Water Source',
      'Pump / Water Delivery',
      'LD Krishi Pipe – Water Conveyance',
      'Field Distribution',
      'Polytube',
      'Drip / Micro Sprinkler / Other Irrigation Equipment',
      'Field Crop',
    ],

    steps: [
      {
        title: 'Water Source',
        text:
          'Water enters the system from the available farm source. The source capacity and location determine how the irrigation network needs to be arranged.',
      },
      {
        title: 'Water Conveyance',
         text:
          "Where a separate conveyance arrangement is required, LD Krishi Pipe can be used to move water towards the relevant field section. The route and pipe size should correspond to the farm's flow and distance requirements.",
      },
      {
        title: 'Field Distribution',
        text:
          'Once water reaches the required field section, the distribution network directs it towards the irrigation equipment. Polytube can be used where a smaller field-level connection is required.',
      },
      {
        title: 'Point of Application',
        text:
          "Depending on the crop and irrigation method, the Polytube can connect the distribution system to drip irrigation components or micro and mini sprinklers. Water is then delivered to the crop area according to the farm's irrigation plan.",
      },
    ],
  },

  cta: {
    heading: 'Planning Irrigation for Your Field Crops?',
    body:
      'Share your field size, water source and irrigation method with the Kothari Irrigation team to discuss the suitable piping arrangement.',
    buttonText: 'Discuss Your Requirement',
  },

},

  {
  slug: 'orchard-irrigation-systems',

  division: 'irrigation-division',
  parentHref: '/irrigation-applications',
  parentLabel: 'Irrigation Applications',
  divisionHref: '/irrigation-division',
  metaTitle: 'Orchard Irrigation Systems | Kothari Irrigation',
  metaDescription: 'Explore orchard irrigation systems using K-Mist, K-Fogger and K-Tuff Micro Sprinkler for planned field-level water application.',
  heroEyebrow: 'Irrigation Applications',
  image: '/heronew.jpg',
  bannerImage: '/drip.png',

  h1: 'Orchard Irrigation Systems',

  tagline:
    'Plan orchard irrigation around tree spacing, field conditions and water availability with suitable micro-irrigation equipment for targeted water application.',

  overview: {
    heading: 'Orchard Irrigation Systems Overview',
    paragraphs: [
      `Orchard irrigation isn't your typical field job, it's a long-term thing. Since trees stay put for years, you have got to think about their spacing, how big their canopies get, and where exactly they are planted in those neat rows. The whole irrigation setup has to fit that layout, and it's got to be easy to run and keep in good shape over time.`,

      `Here's how it usually goes: water starts at the farm source and moves through main pipes, then splits off into distribution lines. Eventually, it reaches the field gear that actually gets the water to the trees. Sometimes you water each tree separately, other times you treat whole sections at once. It really depends on your orchard and how you've designed the system.`,

      `Planning matters. You have got to consider how much water you have, how fast it flows, the pressure you are working with, the way the trees are spaced out, what the soil's like, and the size of your orchard. If you are using smaller sprinklers or drip devices, good filtration and easy access to connections are essential. When you get the network right, you can manage different areas on your own schedule and make sure every tree gets what it needs.`,
    ],
  },

  whereUsed: {
    heading: 'Where Orchard Irrigation Systems Are Used',
    intro:[
      'Orchard irrigation systems are used across fruit-growing areas where trees are planted in organised rows and water needs to be distributed to defined areas around the plants.',
],
    items: [
      {
        label: 'Fruit Orchards',
       text:
          'Irrigation equipment can be positioned around tree rows according to the orchard layout and water-distribution plan.',
      },
      {
        label: 'Commercial Plantations',
        text:
          'Larger orchard blocks can be divided into irrigation sections based on the available water supply and field arrangement.',
      },
      {
        label: 'New Orchards',
        text:
          'The irrigation network can be planned alongside tree spacing, row orientation and the overall plantation layout.',
      },
      {
        label: 'Established Orchards',
        text:
          'Irrigation equipment and distribution lines can be arranged around existing trees and the available farm infrastructure.',
      },
      {
       label: 'Nursery and Horticultural Areas',
         text:
          'Micro-irrigation equipment can be considered where plants require controlled water application over defined areas.',
      },
    ],
  },

  requirements: {
    heading: 'Key Requirements for Orchard Irrigation',
    intro:
      'Orchard irrigation should be designed around the trees rather than treating the entire plantation as one uniform area. Tree spacing, orchard size and the irrigation method influence where the distribution lines and field equipment need to be placed.',

    items: [
      {
       label: 'Water Source and Availability',
        text:
          'The available source should be assessed for location, seasonal availability and the amount of water that can be supplied to the irrigation network.',
      },
      {
        label: 'Flow and Pressure',
         text:
          'Available flow and operating pressure should be matched with the selected irrigation equipment. The number of devices operating together and the size of each irrigation section should also be considered.',
      },
      {
        label: 'Tree Spacing and Canopy Area',
        text:
          'Plant spacing and tree development influence the area where water needs to be applied. The field equipment should therefore be positioned according to the actual orchard layout rather than using a fixed arrangement for every plantation.',
      },
      {
        label: 'Filtration and Water Quality',
         text:
          'Check the water quality before you settle on a filtration setup. If there are suspended particles in the water, they can cause problems for small irrigation devices. That’s why proper filtration and regular inspections are essential to keep the system running smoothly.',
      },
      {
       label: 'Field Conditions and Maintenance',
        text:
          'The irrigation network should account for terrain, row access and the distance between the water source and orchard sections. Field connections and irrigation devices should remain accessible for inspection, cleaning and replacement when required.',
      },
    ],
  },

  products: {
    heading: 'Recommended Kothari Products',
    intro: `Orchard irrigation can use different types of field-level equipment depending on the crop, tree arrangement and required water application pattern. The products below can be considered where micro-spray or fogging-based irrigation is appropriate to the system design.`,

    items: [
      {
        name: 'K-Mist',
        url: '/misters-and-assemblies/k-mist',
        image: `${ADMIN}/2025/10/K–Fogger-K–Fogger.webp`,
        paragraphs: [
          'K-Mist can be considered for orchard applications where the irrigation design requires a fine spray or mist-type water application. Its role is at the field level, after water has been carried through the main and distribution network.',
          'For orchard planning, the position of the K-Mist should be determined according to tree spacing, the intended application area and the operating conditions of the irrigation system. Product-specific discharge, pressure, coverage and other technical parameters should be confirmed from the latest Kothari product documentation before final selection.',
        ],
      },
      {
        name: 'K-Fogger',
        url: '/foggers-and-assemblies/k-fogger',
        image: `${ADMIN}/2025/10/K–Fogger-K–Fogger.webp`,
        paragraphs: [
          'K-Fogger is relevant where the orchard irrigation design requires fogging-type water application. It can be incorporated at the field level after water reaches the relevant orchard section through the distribution network.',
          `The suitability of a fogger depends on the purpose of application and the conditions of the plantation. Its placement, quantity and operating arrangement should therefore be established as part of the overall irrigation design rather than selected independently.`,
          'Current Kothari technical documentation should be referred to for product-specific specifications such as discharge, pressure and coverage.',
        ],
      },
      {
        name: 'K-Tuff Micro Sprinkler',
        url: '/micro-sprinklers-and-assemblies/k-tuff-micro-sprinkler',
        image: `${ADMIN}/2025/10/K-Tuff-Micro-Sprinkler.webp`,
        paragraphs: [
          'K-Tuff Micro Sprinkler can be used as a field-level micro-sprinkler option where the orchard requires localised spray application. It can be positioned around tree rows according to the plantation layout and irrigation design.',
          `The product is relevant where water needs to be applied over a defined area around the plants rather than simply transported to the orchard. The final selection should consider tree spacing, required application area, available pressure and the overall distribution network.`,
        ],
      },
    ],

    mapping: {
      columnHeadings: [
        'Application Requirement',
        'Recommended Kothari Product',
        'Role in the System',
      ],
      rows: [
        {
          requirement: 'Fine spray / mist application',
          product: 'K-Mist',
          role: 'Field-level water application',
        },
        {
          requirement: 'Fogging-type application',
          product: 'K-Fogger',
          role: 'Field-level fogging application',
        },
        {
          requirement: 'Localised micro-sprinkler irrigation',
          product: 'K-Tuff Micro Sprinkler',
          role: 'Water application around orchard plants',
        },
      ],
    },
  },

  howItWorks: {
    heading: 'How an Orchard Irrigation System Works',
    intro:
      'An orchard irrigation system starts at the available water source and carries water through a distribution network to field-level irrigation equipment positioned around the trees.',

    flow: [
      'Water Source',
      'Pump / Water Delivery',
      'Filtration',
      'Main Pipeline',
      'Submain / Distribution Lines',
      'Field Connections',
      'K-Mist / K-Fogger / K-Tuff Micro Sprinkler',
      'Orchard Trees',
    ],

    steps: [
      {
        title: 'Water Source',
         text:
          'Water enters the irrigation system from the available farm source. Source capacity and location influence the design of the pumping and conveyance network.',
      },
      {
        title: 'Pumping and Filtration',
         text:
          'Where required, pumping moves water into the irrigation network. Filtration is incorporated according to the water quality and the requirements of the selected irrigation equipment.',
      },
      {
        title: 'Mainline and Distribution',
        text:
          'The main pipeline transports water towards the orchard. Submain or distribution lines then divide the water between individual orchard sections.',
      },
      {
        title: 'Field Connections',
        text:
          'Field connections carry water from the distribution network to the selected irrigation devices. The layout should follow the tree rows and allow the equipment to be inspected and maintained.',
      },
      {
        title: 'Water Application',
         text:
          "K-Mist, K-Fogger or K-Tuff Micro Sprinkler can be used at the final application stage where their respective application method suits the orchard design. The irrigation schedule should be determined according to crop requirements, soil conditions, weather and the farm's water-management plan.",
      },
    ],
  },

  cta: {
    heading: 'Planning an Orchard Irrigation System?',
    body:
      'Share your orchard layout, tree spacing and water source with the Kothari Irrigation team to discuss suitable field-level irrigation equipment.',
    buttonText: 'Discuss Your Requirement',
  },
},

  {
  slug: 'nursery-irrigation-systems',
  division: 'irrigation-division',
  parentHref: '/irrigation-applications',
  parentLabel: 'Irrigation Applications',
  divisionHref: '/irrigation-division',
  metaTitle: 'Nursery Irrigation Systems | Kothari Irrigation',
  metaDescription: 'Explore nursery irrigation systems using K-Fogger and Micro Sprayer for planned water distribution across plant and seedling growing areas',
  heroEyebrow: 'Irrigation Applications',
  image: '/heronew.jpg',
  bannerImage: '/drip.png',

  h1: 'Nursery Irrigation Systems',

  tagline:
    'Plan nursery irrigation around plant requirements, growing conditions and water distribution needs with suitable fogging and micro-sprinkler equipment.',

  overview: {
    heading: 'Nursery Irrigation System Overview',
    paragraphs: [
      `Nurseries have to manage water carefully because plants in different stages of growth don't need the same amount of moisture. If you water unevenly, some plants struggle to grow while others might end up in soggy soil. Too much water just ends up pooling around the roots and growing media, which does more harm than good.`,

      `A good nursery irrigation system sends water where it's actually needed. It uses a mix of pipelines, distribution lines, and application tools to get water from the main source to every corner of the nursery. The piping carries the water out to all the specific sections, and then the field-level equipment takes over, making sure the right spots get watered.`,

      `You can't just use a standard system. Everything about how the nursery is laid out, what kind of plants you are growing, the media you use, how much water you have on hand, and your operating conditions all dictate what the irrigation setup has to look like. Nurseries are different from open fields. The plants are packed closer together, whether in beds, containers, or propagation areas, so you have to control both where and how much water you apply.`,

      `In the end, nursery operators need an irrigation system that works with the water source they have got and can reliably send water exactly where it's needed. That's what keeps the plants happy and growing strong.`,
    ],
  },

  whereUsed: {
    heading: 'Where Nursery Irrigation Systems Are Used',
    intro:[
      'Nursery irrigation systems are used wherever plants need controlled water application during propagation, early growth or commercial nursery production. The irrigation arrangement can vary depending on plant type, nursery layout and the stage of cultivation.',
],
    items: [
      {
        label: 'Plant Nurseries',
        text:
          'Used for routine irrigation of plants maintained in containers, beds or defined growing areas.',
      },
      {
       label: 'Seedling Nurseries',
        text:
          'Suitable where young plants require carefully managed water application during early growth.',
      },
      {
        label: 'Horticultural Nurseries',
         text:
          'Used for raising and maintaining ornamental, fruit and other horticultural plants.',
      },
      {
        label: 'Propagation Areas',
        text:
          'Water distribution can be planned around areas where plants are being established or multiplied.',
      },
      {
       label: 'Commercial Nursery Facilities',
        text:
          'Larger facilities can divide growing areas into sections and route water through a planned distribution network.',
      },
    ],
  },

  requirements: {
    heading: 'Key Requirements for Nursery Irrigation',
    intro:
      'A nursery irrigation system should be planned around both the water source and the way plants are arranged within the nursery. The first consideration is the available water source and whether it can provide the required flow for the intended irrigation sections.',

    items: [
      {
        label: 'Water Flow and Pressure',
       text:
          'The available flow and operating pressure need to be considered when selecting and arranging application equipment. The system should be designed so that water reaches the intended nursery sections without creating avoidable distribution problems.',
      },
      {
        label: 'Nursery Layout',
         text:
          'Beds, containers, propagation areas and plant spacing influence the position of distribution lines and irrigation equipment. The piping arrangement should allow practical access for nursery operations and maintenance.',
      },
      {
        label: 'Water Quality',
        text:
          'Filtration and appropriate water-management practices may be required depending on the source water and the selected irrigation equipment. Water quality should be considered during system planning.',
      },
      {
        label: 'Application Method',
        text:
          'Different nursery conditions may require different methods of water application. Fogging and micro-spraying equipment can be selected according to the plant area, growing stage and intended water application.',
      },
      {
        label: 'Maintenance and Connections',
         text:
          'Pipe routing, connections and access points should allow inspection, cleaning and routine maintenance without unnecessarily disturbing the nursery.',
      },
    ],
  },

  products: {
    heading: 'Recommended Kothari Products',
    intro: `For nursery applications, the field-level irrigation equipment needs to match the way plants are arranged and the type of water application required. Kothari's K-Fogger and Micro Sprayer can be considered for different nursery irrigation requirements.`,

    items: [
      {
        name: 'K-Fogger',
        url: '/foggers-and-assemblies/k-fogger',
        image: `${ADMIN}/2025/10/K–Fogger-K–Fogger.webp`,
        paragraphs: [
          'The K-Fogger is relevant where a fogging-type water application is required within the nursery. It can be positioned as part of the field-level distribution arrangement after water has been carried through the main and distribution network.',
          'Its use is particularly relevant when the nursery design calls for water application through fogging equipment rather than conventional open-field distribution. The actual placement and system design should be based on the nursery layout, plant requirements and operating conditions.',
        ],
      },
      {
        name: 'Micro Sprayer',
        url: '/micro-jets-and-assemblies/micro-sprayer',
        image: `${ADMIN}/2025/10/MICRO-SPRAYER.webp`,
        paragraphs: [
          'The Micro Sprayer provides a field-level method of applying water within a nursery irrigation arrangement. It can be connected to the distribution network and positioned according to the plant layout and area requiring irrigation.',
          `It can be considered where the nursery requires localised spray-based water application. The number and placement of micro sprayers should be determined from the nursery layout, water availability and system design rather than applying a fixed arrangement to every nursery.`,
        ],
      },
    ],

    mapping: {
      columnHeadings: [
        'Application Requirement',
        'Recommended Kothari Product',
        'Role in the System',
      ],
      rows: [
        {
          requirement: 'Fogging-type application',
          product: 'K-Fogger',
          role: 'Field-level water application',
        },
        {
          requirement: 'Spray-based application',
          product: 'Micro Sprayer',
          role: 'Field-level water distribution',
        },
      ],
    },
  },

  howItWorks: {
    heading: 'How a Nursery Irrigation System Works',
    intro:
      'A nursery irrigation system typically moves water from the source through a planned distribution network before delivering it to the growing area.',

    flow: [
      'Water Source',
      'Pump / Water Delivery',
      'Filtration',
      'Main Pipeline',
      'Distribution / Submain Lines',
      'Field Connections',
      'K-Fogger / Micro Sprayer',
      'Nursery Growing Area',
    ],

    steps: [
      {
        title: 'Water Source',
        text:
          'Water first enters the system from the available source and is transported through the main pipeline.',
      },
      {
        title: 'Pumping and Filtration',
        text:
          'Depending on the nursery size and layout, pumping and filtration can be incorporated according to the water source and selected irrigation equipment.',
      },
      {
        title: 'Main Pipeline',
       text:
          'The main pipeline carries water from the source towards the nursery distribution network.',
      },
      {
        title: 'Distribution / Submain Lines',
        text:
          'Distribution or submain lines then carry water towards individual growing sections according to the nursery layout.',
      },
      {
        title: 'Field Connections',
        text:
          'At the field level, connections are provided for the selected irrigation equipment. K-Fogger can be used where fogging-type application is required, while Micro Sprayer can be used where spray-based application is suitable.',
      },
      {
        title: 'Nursery Growing Area',
         text:
          'The final arrangement depends on the nursery’s plant layout, water source, flow and pressure conditions, and the required method of water application. Proper routing also allows different nursery sections to be managed and maintained without unnecessarily disturbing the growing area.',
      },
    ],
  },

  cta: {
    heading: 'Planning a Nursery Irrigation System?',
    body:
      'Share your nursery layout, water source and irrigation requirements with the Kothari team to discuss suitable water distribution and application options.',
    buttonText: 'Discuss Your Requirement',
  },
},

  {
  slug: 'landscaping-turf-irrigation',

  division: 'irrigation-division',
  parentHref: '/irrigation-applications',
  parentLabel: 'Irrigation Applications',
  divisionHref: '/irrigation-division',
  metaTitle: 'Landscaping & Turf Irrigation | Kothari Irrigation',
  metaDescription: 'Plan landscaping and turf irrigation with pop-up spray heads, rotors and Swing Join for lawns, sports grounds and landscaped areas.',
  heroEyebrow: 'Irrigation Applications',
  image: '/heronew.jpg',
  bannerImage: '/drip.png',

  h1: 'Landscaping & Turf Irrigation',

  tagline:
    'Plan landscape and turf irrigation around area coverage, water distribution, operating pressure and the layout of lawns or planted spaces.',

  overview: {
    heading: 'Landscaping & Turf Irrigation Overview',
    paragraphs: [
      `Getting a lawn or sports field to look lush and green isn't as simple as just turning on the sprinklers. You need the right irrigation system, one that actually fits the space and works with how it's used. Otherwise, you'll get those dreaded muddy puddles in one spot and dried-out patches in another.`,

      `These systems use a network of pipes, running either underground or above ground, to send water everywhere it's needed. Pop-up sprays and rotors do the real work, spreading water evenly. The right connectors make sure every part fits together, reaching the corners, curves, and edges, all while hooking smoothly into the main water line.`,

      `Planning gets trickier when you are dealing with lawns that have odd shapes, spots with different types of plants, or turf that sees a lot of activity and maintenance. You need to look at things like where the water is coming from, how much flow and pressure you have, how pipes will run, where you will place irrigation gear, and how easy it will be to fix or maintain everything.`,

      `In the end, you are aiming for an irrigation system that keeps the landscape hydrated, covers all the right spots, and lets people use and maintain the areas without trouble.`,
    ],
  },

  whereUsed: {
    heading: 'Where Landscaping & Turf Irrigation Is Used',
    intro:[
      `You will find landscaping and turf irrigation just about anywhere there's grass, gardens, or green spaces that need a little help from a steady water supply.`,
],
    items: [
      {
         label: 'Residential Landscapes',
         text:
          'Lawns, garden beds, flower patches you can route irrigation around all of it. The pipes stay hidden, so the yard looks tidy and you barely notice the setup.',
      },
      {
         label: 'Commercial Properties',
         text:
          'Think hotels and office buildings. They stick to a schedule, keeping lawns and decorative plants green without bothering guests or staff during the day.',
      },
      {
         label: 'Sports Grounds',
         text:
          'Every playing field brings its own shape and challenges. The irrigation system has to cover every blade of grass without interfering with practices or games.',
      },
      {
         label: 'Parks and Public Gardens',
         text:
          `These bigger spaces don't need the same amount of water everywhere. People usually split them into zones, so each area gets what it needs based on what's planted there.`,
      },
      {
         label: 'Golf and Recreational Landscapes',
        text:
          'Every part has different fairways, greens, roughs, flower beds. Irrigation systems have to fit the specific needs of all these areas.',
      },
      {
         label: 'Roadside and Institutional Landscaping',
        text:
          'Green belts, hospital gardens, and school lawns stay healthy thanks to carefully planned piping and sprinklers. Most of the time, they run with almost no extra work.',
      },
    ],
  },

  requirements: {
    heading: 'Key Requirements for Landscape Irrigation',
    intro:
      'A landscaping or turf irrigation system should be designed around the physical layout of the site rather than treating the entire area as one uniform zone.',

    items: [
      {
         label: 'Water Source and Flow',
        text:
          'Start with the available water source and determine the flow available for the irrigation system. Larger landscapes may need to be divided into manageable irrigation sections depending on the system design.',
      },
      {
         label: 'Operating Pressure',
         text:
          'Spray heads and rotors require suitable operating conditions for their intended operation. Available pressure should therefore be considered before finalising equipment selection and layout.',
      },
      {
         label: 'Coverage and Spacing',
        text:
          'The location and spacing of irrigation points should correspond to the shape of the lawn or landscaped area. Irregular boundaries may require more careful positioning to avoid watering outside the intended area.',
      },
      {
        label: 'Pipe Routing',
         text:
          'Distribution lines should follow a practical route while allowing access for maintenance. Underground routing may also need to account for existing landscape features, pathways and other site infrastructure.',
      },
      {
        label: 'Connections',
        text:
          'Field connections between the distribution pipe and irrigation equipment need to be planned carefully. Swing-type connection components can be useful where the irrigation equipment requires a suitable connection arrangement.',
      },
      {
         label: 'Maintenance',
        text:
          'Valves, connections and irrigation points should remain accessible enough for inspection, adjustment and servicing without unnecessary disturbance to the landscape.',
      },
    ],
  },

  products: {
    heading: 'Recommended Kothari Products',
    intro: `Kothari products relevant to landscaping and turf irrigation include Pop-up Spray Heads and Rotors for water application and Swing Join for connecting irrigation equipment within the distribution arrangement.`,

    items: [
      {
        name: 'Pop-up Spray Heads and Rotors',
        url: '/garden-and-landscape-sprinklers/pop-up-spray-heads-and-rotors',
        image: `${ADMIN}/2025/04/Pop-up-spray-heads-rotors.png`,
        paragraphs: [
          'Pop-up spray heads and rotors are used at the field level to distribute water across lawns, turf and landscaped areas. Their placement is determined by the shape of the area, required coverage and the overall irrigation layout.',
          'For turf applications, the irrigation points need to be positioned so that the intended area receives water while pathways, buildings and other non-irrigated areas are considered during system planning. Different landscape zones may also require different equipment arrangements depending on their size and layout.',
          `The selection and spacing of the specific spray head or rotor should be based on the manufacturer's verified operating characteristics and the site's available flow and pressure.`,
        ],
      },
      {
        name: 'Swing Join',
        url: '/garden-and-landscape-sprinklers/swing-joint',
        image: `${ADMIN}/2025/04/Swing-joint-1.png`,
        paragraphs: [
          'Swing Join forms part of the connection arrangement between the irrigation distribution network and field-level equipment. It can be considered when planning the connection and positioning of pop-up spray heads or rotors within a landscape irrigation system.',
          `Its relevance is not limited to water conveyance; the connection arrangement also needs to suit the physical layout and maintenance requirements of the site. Final installation configuration should be determined according to the applicable product design and irrigation system layout.`,
        ],
      },
    ],

    mapping: {
      columnHeadings: [
        'Application Requirement',
        'Recommended Kothari Product',
        'Role in the System',
      ],
      rows: [
        {
          requirement: 'Turf and lawn water application',
          product: 'Pop-up Spray Heads and Rotors',
          role: 'Field-level water distribution',
        },
        {
          requirement: 'Irrigation equipment connection',
          product: 'Swing Join',
          role: 'Connection between distribution line and irrigation equipment',
        },
        
      ],
    },
  },

  howItWorks: {
    heading: 'How a Landscaping & Turf Irrigation System Works',
    intro:
      'A landscaping and turf irrigation system moves water from the source through a distribution network and delivers it to selected irrigation points across the landscape.',

    flow: [
      'Water Source',
      'Pump / Water Supply',
      'Main Pipeline',
      'Distribution Lines / Irrigation Zones',
      'Swing Join',
      'Pop-up Spray Heads and Rotors',
      'Lawn / Turf / Landscaped Area',
    ],

    steps: [
      {
        title: 'Water Source',
        text:
          'Water enters the system from the available source and is transported through the main pipeline.',
      },
      {
        title: 'Pump / Water Supply',
         text:
          'The available water supply provides the flow required for the irrigation network according to the site and system design.',
      },
      {
        title: 'Main Pipeline',
         text:
          'The mainline carries water from the source and feeds the distribution lines serving different irrigation zones across the site.',
      },
      {
        title: 'Distribution Lines / Irrigation Zones',
        text:
          'Distribution lines serve different irrigation zones across the landscape. Dividing a larger site into irrigation zones can help the system work around different landscape sections and operating requirements.',
      },
      {
        title: 'Swing Join',
        text:
          'At the field level, Swing Join can form part of the connection arrangement between the distribution line and the irrigation equipment.',
      },
      {
        title: 'Pop-up Spray Heads and Rotors',
        text:
          'Pop-up spray heads and rotors then apply water over the designated turf or landscaped area.',
      },
      {
        title: 'Lawn / Turf / Landscaped Area',
        text:
          "The irrigation layout should be planned according to the site's boundaries, available water flow and pressure, equipment characteristics and required coverage.",
      },
    ],
  },

  cta: {
    heading: 'Planning a Landscaping or Turf Irrigation System?',
    body:
      'Share your site layout, turf area and water supply details with the Kothari team to discuss the irrigation equipment and connection requirements for your project.',
    buttonText: 'Discuss Your Requirement',
  },
},
  {
    slug: 'drip-irrigation-for-sugarcane',
    division: 'irrigation-division',
    parentHref: '/irrigation-applications',
    parentLabel: 'Irrigation Applications',
    divisionHref: '/irrigation-division',
    metaTitle: 'Drip Irrigation for Sugarcane | Kothari Irrigation',
    metaDescription:
      'Explore drip irrigation for sugarcane, including field layout, water distribution requirements and Kothari K-Lin dripline options.',
    heroEyebrow: 'Irrigation Applications',
    h1: 'Drip Irrigation for Sugarcane',
    tagline:
      'A planned drip irrigation system helps distribute water along sugarcane rows while keeping field layout, water supply and irrigation control in view.',
    image: '/heronew.jpg',
    bannerImage: '/drip.png',
    overview: {
      heading: 'Understanding Drip Irrigation for Sugarcane',
      paragraphs: [
        'Sugarcane has a relatively long crop cycle, and irrigation needs to be managed across the crop area throughout its growth stages. In larger fields, the challenge is not only bringing water to the farm but distributing it through the rows in an organised manner.',
        'Drip irrigation for sugarcane uses a network of mainlines, submain or distribution lines and driplines placed along the crop rows. Water moves from the source through the pipeline network and reaches the crop through the dripline. This makes the design of the distribution network an important part of the overall irrigation system.',
        'Field size, row arrangement, water availability, operating pressure, filtration and the number of irrigation sections all influence how the system should be planned. The dripline also needs to suit the field conditions and remain practical to operate and maintain during the crop cycle.',
        'For farmers and agricultural professionals, the objective is to create a water-distribution arrangement that matches the sugarcane field layout rather than treating the dripline as an isolated component.',
      ],
    },
    whereUsed: {
      heading: 'Where Drip Irrigation for Sugarcane Is Used',
      intro: [
        'Drip irrigation can be planned for sugarcane fields where water needs to be distributed along defined crop rows through a pipeline-based irrigation network. The system can be adapted to the field layout, water source and method of irrigation management',
        'Common applications include:',
      ],
      items: [
        {
          label: 'Commercial Sugarcane Farms',
          text: 'Larger sugarcane farms can use row-based drip distribution with the field divided into manageable irrigation sections.',
        },
        {
          label: 'Open-Field Sugarcane Cultivation',
          text: 'In open fields, the dripline is positioned along the crop rows and connected to the wider irrigation network.',
        },
        {
          label: 'New Sugarcane Plantations',
          text: 'For newly established fields, the irrigation layout can be planned along with the crop-row arrangement so that distribution lines and dripline locations are considered from the beginning.',
        },
        {
          label: 'Established Sugarcane Fields',
          text: 'Existing farms can assess their water source, current pipeline arrangement and crop layout before developing or modifying the drip irrigation network.',
        },
        {
          label: 'Multi-Section Irrigation',
          text: 'Where a field is divided into multiple sections, the pipeline arrangement can be planned to supply different areas according to the irrigation schedule and available water.',
        },
       
      ],
     
    },
    requirements: {
      heading: 'Key Requirements for Sugarcane Drip Irrigation',
      intro: 'A sugarcane drip irrigation system should be planned around the field rather than selecting the dripline first. The crop-row arrangement, available water and irrigation network need to work togethe.',
      items: [
        {
          label: 'Water Source and Availability',
          text: ' Understand the source, available water and expected irrigation requirement before sizing the distribution network. This provides the basis for planning the mainline and field sections.',
        },
        {
          label: 'Flow and Pressure',
          text: 'The irrigation system needs suitable flow and pressure at the field level. Mainlines, distribution lines and driplines should be considered as one connected network.',
        },
        {
          label: 'Field Layout',
          text: 'Sugarcane is planted in defined rows, so the position and length of the dripline should correspond with the actual field layout. Larger fields may need to be divided into separate irrigation sections.',
        },
        {
          label: 'Filtration and Water Quality',
          text: 'Filtration requirements depend on the water source and the selected irrigation equipment. Appropriate filtration helps the irrigation network operate with cleaner water.',
        },
        {
          label: 'Pipeline Routing',
          text: 'The main and distribution lines should follow a practical route that allows water to reach different field sections without making maintenance unnecessarily difficult.',
        },
        {
          label: 'Connections and Maintenance',
          text: 'Dripline connections, field outlets and other components should remain accessible for inspection and maintenance. The system should also allow damaged or disconnected sections to be identified and attended to without disrupting the entire field.',
        },
      ],
    },
    products: {
      heading: ' Recommended Kothari Products',
      intro: `Kothari's Dripline K-Lin PCAS and Dripline K-Lin NPC can be used as part of a sugarcane drip irrigation arrangement. Their role is at the field-distribution stage, where water from the irrigation pipeline network is delivered along the crop rows.`,
      items: [
        {
          name: 'Dripline K-Lin PCAS',
          url: '/drip-line/dripline-k-lin-pcas',
          image: `${ADMIN}/2025/04/DRIPLINE-K-LIN-PCAS-1.webp`,
          paragraphs: [
            'Dripline K-Lin PCAS is relevant where the irrigation layout requires dripline-based water distribution along sugarcane rows. It forms part of the field-level network between the distribution pipeline and the crop area.',
            'For a sugarcane application, its selection should be considered together with the field layout, irrigation sections, water source and the rest of the distribution network. The final arrangement should account for the actual site conditions rather than treating the dripline independently.',
          ],
        },
        {
          name: 'Dripline K-Lin NPC',
          url: '/drip-line/dripline-k-lin-npc',
          image: `${ADMIN}/2025/04/DRIPLINE-K-LIN-1.webp`,
          paragraphs: [
            ' Dripline K-Lin NPC can be used for row-based drip irrigation where water needs to be distributed through a planned field network. It is positioned at the crop-distribution stage, after water has travelled through the main and distribution pipelines.',
            `For sugarcane fields, the dripline layout needs to follow the crop arrangement and connect correctly with the distribution network. Selection should be based on the project's verified technical requirements and site conditions.`,
          ],
        },
      ],
      mapping: {
        columnHeadings: ['Application Requirement', 'Recommended Kothari Product', 'Role in the System'],
        rows: [
          { requirement: 'Row-based drip distribution', product: 'Dripline K-Lin PCAS', role: 'Field-level water distribution' },
          { requirement: 'Sugarcane row irrigation', product: 'Dripline K-Lin NPC', role: 'Crop-row water distribution' },
          { requirement: 'Field irrigation network', product: 'K-Lin PCAS / K-Lin NPC', role: 'Final distribution stage' },
        ],
      },
    },
    howItWorks: {
      heading: 'How a Sugarcane Drip Irrigation System Works',
      intro: 'A sugarcane drip irrigation system moves water through a series of stages before it reaches the crop rows. The pipeline network handles water conveyance, while the dripline forms the final distribution stage within the field.',
      flow: [
        'Water Source',
        'Filtration',
        'Main Pipeline',
        'Distribution / Submain Lines',
        'Drip Poly Fittings',
        'Dripline / Drippers',
        'Crop Root Zone',
      ],
      steps: [
        {
          title: 'Water Source',
          text: 'Water enters the irrigation system from the available farm water source. Pumping arrangements depend on the source and overall system design.',
        },
        {
          title: 'Filtration',
          text: 'Where required, water passes through the appropriate filtration arrangement before entering the field distribution network. Filtration requirements depend on water quality and the irrigation system being used.',
        },
        {
          title: 'Main Pipeline',
          text: 'The main pipeline carries water from the source towards the sugarcane field. It forms the primary water-conveyance route for the irrigation system.',
        },
        {
          title: 'Distribution Lines',
          text: 'Water is then directed towards different field sections through distribution or submain lines. The field can be divided into irrigation sections depending on its size and water supply.',
        },
        {
          title: 'Dripline Along Crop Rows',
          text: 'Dripline K-Lin PCAS or K-Lin NPC is connected at the field-distribution stage and laid along the planned sugarcane rows. Water then moves through the dripline towards the crop.',
        },
        {
          title: 'Crop Area',
          text: 'The final stage is water delivery along the sugarcane rows. The complete arrangement should be designed so that the source, filtration, pipelines, connections and dripline work as one irrigation network.',
        },
      ],
    },
    cta: {
      heading: 'Planning Drip Irrigation for Sugarcane?',
      body: 'Share your field layout, water source and irrigation requirements with the Kothari team to discuss the appropriate dripline arrangement.',
      buttonText: 'Discuss Your Requirement',
    },
  },

   {
    slug: 'municipal-water-supply',
    division: 'pipe-division',
    parentHref: '/pipe-applications',
    parentLabel: 'Pipe Applications',
    divisionHref: '/pipe-division',
    metaTitle: 'Municipal Water Supply Pipes | HDPE & UPVC | Kothari',
    metaDescription:
      'Explore Kothari HDPE and UPVC pressure pipes for urban and rural municipal water supply and distribution applications.',
    heroEyebrow: 'Pipe Applications',
    h1: 'Municipal Water Supply Systems',
    tagline:
      'Municipal water supply systems use HDPE Pipes for urban infrastructure and UPVC Pressure Pipes for rural distribution, subject to project specifications and requirements.',
    image: '/heronew.jpg',
    bannerImage: '/farm.png',
    overview: {
      heading: 'Understanding Municipal Water Supply Systems',
      paragraphs: [
        'A municipal water supply network typically consists of multiple interconnected sections - from the treated-water source and transmission network to distribution pipelines and individual service connections.',
        'The system must maintain controlled water flow and pressure while supporting reliable distribution across different locations.',
      ],
    },
    whereUsed: {
      heading: 'Where Municipal Water Supply Pipelines Are Used',
      intro: [
        'Municipal water-supply piping can be used across a range of infrastructure environments.',
      ],
      items: [
        {
          label: 'Urban Water Supply',
          text: 'Urban networks can involve extensive distribution infrastructure serving residential communities, commercial developments, institutional areas and other densely populated locations.',
        },
        
        {
          label: 'Rural Water Supply',
          text: 'Rural water-supply networks may serve villages, local communities, public facilities and distributed settlements where dependable water distribution is required.',
        },
       
      ],
    
    },
    requirements: {
      heading: 'Key Requirements for Municipal Water Supply Piping',
      intro: 'A municipal water supply system should be planned around water demand and site conditions, with pipe diameter, pressure rating, installation method, jointing and material suitability selected to meet the network requirements.',
      items: [
        {
          label: 'Water Demand and Flow',
          text: 'The network should be designed around the required water demand and expected flow across different sections of the distribution system.',
        },
        {
          label: 'Operating Pressure',
          text: 'The pipe pressure rating should correspond to the operating conditions of the network, including pressure variations across different sections.',
        },
        {
          label: 'Pipe Diameter',
          text: 'Pipe diameter affects the volume of water that can be transported and the hydraulic performance of the network. Diameter selection should therefore be based on the required flow and system design.',
        },
        {
          label: 'Installation Conditions',
          text: 'Underground pipelines can encounter varying soil, terrain and installation conditions. The selected piping system and jointing method should be appropriate for the installation environment.',
        },
        {
          label: 'Jointing and Connections',
          text: 'Reliable connections are essential to maintain continuity throughout the network. Pipe material, fittings and jointing methodology should be considered together during system planning.',
        },
        {
          label: 'Water Quality and Material Suitability',
          text: 'For drinking-water applications, the selected pipe system should meet the applicable material and project requirements.HDPE Pipe range is stated to be suitable for drinking-water pipelines, while its UPVC pressure-pipe range is positioned for pressure-fluid and water-supply applications.',
        },
      ],
    },
    products: {
      heading: 'Recommended Kothari Pipes for Municipal Water Supply',
      intro: 'The right product depends on where the pipe sits within the farm network. A typical system may use one pipe material for the main water-transfer line and fittings to create the required branches and connections.',
      items: [
        {
          name: 'HDPE Pipe',
          url: '/pe-pipes-and-fittings/hdpe-piping',
          image: `${ADMIN}/2025/04/HDPE-PIPE-111.webp`,
          paragraphs: [
            'HDPE Pipe is suited to agricultural water-transfer applications where a flexible pipe system is required for carrying water from the source towards the distribution network. Kothari identifies its HDPE Pipes for agriculture, irrigation schemes, portable water supply lines, rising and distributing lines and borewell applications.',
            'The range specifies HDPE pipe dimensions according to IS 4984:2016 and lists different PE grades, SDRs and nominal pressure ratings. This allows selection according to the pressure requirements of the particular pipeline rather than treating every farm line the same.',
          ],
        },
        {
          name: 'UPVC Pressure Pipes',
          url: '/upvc/upvc-astm-plumbing-piping-system',
          image: `${ADMIN}/2025/04/UPVC-PIPES-FITTINGS.webp`,
          paragraphs: [
            'For rural water-supply requirements, Kothari UPVC Pressure Pipes provide a pressure-piping option for transporting water through distribution networks.',
            'The range describes these pipes as strong, leak-proof and engineered to carry fluids under pressure, with applications including water-supply systems.',
          ],
        },
       
      ],
      mapping: {
        heading: 'Application-to-Product Mapping',
        columnHeadings: ['Application Requirement', 'Recommended Kothari Product', 'Role in the System'],
        rows: [
          { requirement: 'Urban municipal water supply', product: 'HDPE Pipe', role: 'Water transmission and distribution infrastructure' },
          { requirement: 'Urban potable water lines', product: 'HDPE Pipes', role: 'Potable water supply pipelines' },
          { requirement: 'Urban rising mains', product: 'HDPE Pipes', role: 'Pressurised water conveyance' },
          { requirement: 'Rural water supply', product: 'UPVC Pressure Pipes', role: 'Pressure-water distribution' },
          { requirement: 'Rural community water networks', product: 'UPVC Pressure Pipes', role: 'Water-supply distribution' },
          { requirement: 'Water-supply branches and connections', product: 'Compatible fittings', role: 'Network connections and direction changes' },
        ],
      },
    },
    howItWorks: {
      heading: ' How a Municipal Water Supply System Works',
      intro: 'A Municipal Water Supply System can be visualised as a network rather than a single pipeline:',
      flow: [
        'Water Source',
        'Water Treatment',
        'Transmission Pipeline',
        'Distribution Main',
        'Local Distribution Network',
        'Service Connection',
        'End User',
      ],
      steps: [
        {
          title: 'The Water Source',
          text: 'Water is collected from rivers, lakes, reservoirs or groundwater sources to meet the municipal water demand of residential, commercial and public facilities.',
        },
        {
          title: 'The Water Treatment',
          text: 'Raw water undergoes filtration, sedimentation and disinfection to remove impurities, reduce contaminants and make it suitable for safe public consumption.',
        },
        {
          title: 'Transmission Pipeline',
          text: 'Treated water travels through large-capacity pipelines from treatment plants to storage reservoirs or distribution facilities, depending on network design and distance.',
        },
        {
          title: 'Distribution Main',
          text: 'Distribution mains carry treated water from storage facilities or transmission lines toward different zones, supporting reliable supply across urban and rural communities.',
        },
        {
          title: 'Local Distribution Network',
          text: 'Smaller interconnected pipelines distribute water throughout neighbourhoods, streets and residential areas while maintaining suitable flow and pressure for local demand.',
        },
        {
          title: 'Service Connection',
          text: 'Service connections link the local distribution pipeline to individual properties, allowing treated water to enter buildings through designated connections and meters.',
        },
        {
          title: 'End User',
          text: 'End users receive treated water for drinking, cooking, cleaning and other daily needs through household taps and approved connections within their properties.',
        },
      ],
    },
    cta: {
      heading: 'Planning a Municipal Water Supply Systems',
      body: 'Share your water source, approximate pipeline distance and intended use with our team to discuss the piping options suitable for Municipal Water Supply Systems.',
      buttonText: 'Discuss Your Requirement',
    },
  },

   {
    slug: 'rural-water-supply',
    division: 'pipe-division',
    parentHref: '/pipe-applications',
    parentLabel: 'Pipe Applications',
    divisionHref: '/pipe-division',
    metaTitle: 'Rural Water Supply Pipes | HDPE Pipes | Kothari',
    metaDescription:
      'Explore HDPE pipes and compression fittings for rural water supply, drinking-water distribution and applicable Jal Jeevan Mission projects.',
    heroEyebrow: 'Pipe Applications',
    h1: 'HDPE Pipes for Rural Water Supply Systems',
    tagline:
      'Plan the right piping network to move Rural water efficiently from its source to fields, storage points and irrigation systems.',
    image: '/heronew.jpg',
    bannerImage: '/farm.png',
    overview: {
      heading: 'Understanding Rural Water Supply Systems',
      paragraphs: [
        'Getting water safely from its source into rural homes and communities isn’t always simple. You need more than just pipes. What you really need is a network that can handle different terrains, shifting ground conditions, and variable pressure requirements. The trick is building a distribution system that doesn’t just move water, but does so reliably, every day.',
        'Where does that water actually come from? In rural systems, you might be pulling water from a treatment plant, overhead tank, borewell, or some other approved source. Once it hits the main pipeline, it runs through rising mains and branches off through distribution lines and smaller connections to reach homes, schools, clinics, and other community spots.',
        'Choosing the right pipe isn’t just about picking something that “works.” You’ve got to factor in the pressure rating, pipe diameter, layout, soil and ground conditions, and how you’ll make the connections. Kothari offers HDPE Pipes that tick the box for potable water, rising mains, and general distribution. Their MDPE Pipes with Compression Fittings are fit for drinking water, housing areas, and the Jal Jeevan Mission.',
        'So, it’s not just about laying down pipes. It’s about planning a network that actually suits the site—something you can install, connect, and maintain without headaches later on',
      ],
    },
    whereUsed: {
      heading: 'Where Rural Water Supply Pipes Are Used',
      intro: [
        'Rural water piping shines when you’ve got water that needs to reach spread-out communities and villages from a central or local source.',
      ],
      items: [
        {
          label: 'Village Water Networks',
          text: 'Village water networks: Pipes carry treated or approved water to households and community centers.',
        },
        {
          label: 'Jal Jeevan Mission',
          text: ' Jal Jeevan Mission: Projects aimed at bringing drinking water right to rural homes. Kothari’s catalog clearly lists Jal Jeevan Mission as a target application for its MDPE offerings.',
        },
        {
          label: 'Rural Housing and Developments',
          text: 'Rural housing and developments: Water goes from a shared source or tank to several homes.',
        },
        {
          label: 'Public Infrastructure',
          text: ' Public infrastructure: Delivering water to schools, health centers, or wherever else it’s needed in the community.',
        },
        {
          label: 'Main Rural Pipelines',
          text: ' Main rural pipelines: Rising mains and distribution lines connect your main source with scattered parts of a settlement.',
        },
       
      ],
      note: 'Self Fit PVC Pipes for rising and distributing lines, irrigation schemes, and main and sub-main lines for drip and sprinkler irrigation.',
    },
    requirements: {
      heading: 'Key Requirements for Rural Water Supply Piping',
      intro: 'Designing a rural supply network means looking at everything along the route-not just the endpoint.',
      items: [
        {
          label: 'Water Source and Supply',
          text: 'First, find out where the water’s coming from a plant, a tank, a borewell? Your choices here decide how the rest of the network shapes up.',
        },
        {
          label: 'Flow and Pipe Diameter',
          text: `The pipe size should match the flow you need and how many connections need water. Go too small and you'll choke the system. Go too big and costs shoot up for nothing.`,
        },
        {
          label: 'Pressure',
          text: 'Pick a pipeline that can handle the pressure you’re dealing with. Kothari’s HDPE range comes in different PE grades, SDRs, and pressure ratings, all in line with the latest IS 4984:2016 standards.',
        },
        {
          label: 'Installation Site & Terrain',
          text: 'Rural lines cut through all kinds of ground farm fields, roads, rocky patches, you name it. Make sure your pipe system and installation plan adapt to this reality.',
        },
        {
          label: 'Connections and Branch Lines',
          text: 'You’ll have to connect up lots of branches and service points. So, your fittings need to match the pipe and allow for easy, reliable connections. Kothari’s MDPE Pipes & Compression Fittings are strong on quick installation, solid corrosion resistance, and water safety with options ranging from 20 mm up to 110 mm and a PN 16 pressure rating.',
        },
      ],
    },
    products: {
      heading: 'Recommended Kothari Pipes for Rural Water Supply',
      intro: 'Build your network with both the pipe and the connection system in mind. Main pipelines do the heavy lifting, while fittings branch off water where you need it.',
      items: [
        {
          name: 'HDPE Pipe',
          url: 'pe-pipes-and-fittings/hdpe-piping',
          image: `${ADMIN}/2025/04/HDPE-PIPE-111.webp`,
          paragraphs: [
            `Kothari HDPE Pipes are a go-to when you need tough, reliable pipes for most rural water-supply jobs especially main lines, rising mains, and distribution routes. They're high-density, food-grade polyethylene, built to last and meet IS 4984:2016 wall-thickness and pressure standards.`,
          ],
        },
        {
          name: 'MDPE Pipe & Compression Fittings',
          url: '/pe-pipes-and-fittings/mdpe-pipes',
          image: `${ADMIN}/2025/08/MDPE-PIPE.webp`,
          paragraphs: [
            'For smaller branches and connections, the MDPE Pipe & Compression Fittings are spot on. Kothari’s range covers everything from drinking water to housing and even gas handling. They start at 20 mm diameter and go up to 110 mm, all PN 16, with easy installation and tough corrosion resistance.',
          ],
        },
      ],
      mapping: {
        heading: 'Application-to-Product Mapping',
        columnHeadings: ['Application Requirement', 'Recommended Kothari Product', 'Role in the System'],
        rows: [
          { requirement: 'Transfer water from the source across the farm', product: 'HDPE Pipe', role: 'Main or distribution water-transfer pipeline' },
          { requirement: 'Rising and distributing lines', product: 'Self Fit PVC Pipe', role: 'Pressure water-supply and distribution line' },
          { requirement: 'Main and sub-main irrigation lines', product: 'Self Fit PVC Pipe', role: 'Carries water towards drip or sprinkler networks' },
          { requirement: 'Changes in direction or pipeline branches', product: 'Agri PVC Moulded Fittings', role: 'Connects, redirects and branches the pipeline' },
          { requirement: 'Different pipe sizes need to be connected', product: 'Agri PVC Moulded Fittings', role: 'Reducers/adapters provide the required connection' },
        ],
      },
    },
    howItWorks: {
      heading: 'How a Rural Water Supply System Works',
      intro: 'A farm Rural Water Supply System can be visualised as a network rather than a single pipeline:',
      flow: [
        'Water Source',
        'Treatment/Quality Control',
        'Storage (like an overhead tank)',
        'Rising Main',
        'Distribution Network',
        'Branch Connections',
        ' Homes/Community Sites',
      ],
      steps: [
        {
          title: 'Water is drawn from the source',
          text: 'Water enters the system from the available farm source, such as a borewell, well, pond, reservoir or storage tank. The pump moves the water into the supply pipeline.',
        },
        {
          title: 'The main line carries water across the farm',
          text: 'The main pipeline takes water from the source towards the areas where it is required. HDPE or Self Fit PVC Pipe may be considered depending on the pipeline\u2019s design, pressure and installation requirements. Kothari lists both product categories for agricultural water-supply and irrigation applications.',
        },
        {
          title: 'Sub-main lines distribute the water',
          text: 'As the pipeline reaches different farm sections, sub-main lines divide the flow towards individual fields, orchard blocks, irrigation zones or other points of use.',
        },
        {
          title: 'Fittings create the network',
          text: 'Elbows, tees, reducers and adapters allow the pipeline to follow the farm layout and connect different pipe sizes or branches. Kothari\u2019s Agri PVC Moulded Fittings range includes these connection types.',
        },
        {
          title: 'Water reaches its final point of use',
          text: 'The distribution line ultimately feeds the required irrigation system, storage facility or farm-use point. Where the water is being used for drip or sprinkler irrigation, the farm water-supply network becomes the upstream section feeding that irrigation system.',
        },
      ],
    },
    cta: {
      heading: 'Planning a Rural Water Supply System?',
      body: 'Share your water source, approximate pipeline distance and intended use with our team to discuss the piping options suitable for your rural area.',
      buttonText: 'Discuss Your Requirement',
    },
  },

  
];

export function getApplicationDetailBySlug(
  parentHref: string,
  slug: string
): ApplicationDetail | undefined {
  return applicationDetails.find((detail) => detail.parentHref === parentHref && detail.slug === slug);
}

export function getApplicationDetailsByParent(parentHref: string): ApplicationDetail[] {
  return applicationDetails.filter((detail) => detail.parentHref === parentHref);
}

export function getApplicationDetailHref(
  basePath: string,
  item: ApplicationItem
): string | undefined {
  return item.detailSlug ? `${basePath}/${item.detailSlug}` : undefined;
}

export function getRelatedApplications(detail: ApplicationDetail): {
  groupTitle: string;
  groupIntro: string;
  items: ApplicationItem[];
} | null {
  const division = applicationsByDivision[detail.division];
  if (!division) return null;
  const group = division.groups.find((g) => g.items.some((i) => i.detailSlug === detail.slug));
  if (!group) return null;
  const items = group.items.filter((i) => i.detailSlug !== detail.slug).slice(0, 3);
  if (items.length === 0) return null;
  return { groupTitle: group.title, groupIntro: group.intro, items };
}
