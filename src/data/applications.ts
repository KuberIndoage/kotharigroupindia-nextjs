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
