export interface KnowledgeItem {
  title: string;
  description: string;
  image: string;
  lang: Record<string, string>[];
  division: 'pipe' | 'irrigation';
}

const KC_PDF_URL = 'https://admin.kotharigroupindia.com/wp-content/uploads';

export const irrigationKnowledgeItems: KnowledgeItem[] = [
  {
    title: 'Banana Guides',
    description:
      'Expert banana cultivation guidance on spacing, irrigation, fertigation, and pest management for better yield and fruit quality.',
    image: 'https://images.pexels.com/photos/4399936/pexels-photo-4399936.jpeg',
    lang: [
      {
        English: `https://admin.kotharigroupindia.com/wp-content/uploads/2026/09/KCD_5306_K-I-CROP-BANANA-ENGLISH.pdf`,
        Hindi: `https://admin.kotharigroupindia.com/wp-content/uploads/2026/09/KCD_5434_K-I-CROP-BANANA-HINDI.pdf`,
      },
    ],
    division: 'irrigation',
  },
  {
    title: 'Chilli Guides',
    description:
      'Expert chilli cultivation guidance on spacing, irrigation, fertigation, and pest management for better yield and fruit quality.',
    image: 'https://images.pexels.com/photos/34111554/pexels-photo-34111554.jpeg',
    lang: [
      {
        English: `https://admin.kotharigroupindia.com/wp-content/uploads/2026/09/KCD_5307_K-I-CROP-CHILLI-ENGLISH.pdf`,
        Hindi: `https://admin.kotharigroupindia.com/wp-content/uploads/2026/09/KCD_5436_K-I-CROP-CHILLI-HINDI.pdf`,
      },
    ],
    division: 'irrigation',
  },
  {
    title: 'Onion Guides',
    description:
      'Expert onion cultivation guidance on spacing, irrigation, fertigation, and pest management for better yield and bulb quality.',
    image: 'https://images.pexels.com/photos/7129153/pexels-photo-7129153.jpeg',
    lang: [
      {
        English: `https://admin.kotharigroupindia.com/wp-content/uploads/2026/09/KCD_5308_K-I-CROP-ONION-ENGLISH.pdf`,
        Hindi: `https://admin.kotharigroupindia.com/wp-content/uploads/2026/09/KCD_5438_K-I-CROP-ONION-HINDI.pdf`,
      },
    ],
    division: 'irrigation',
  },
  {
    title: 'Tomato Guides',
    description:
      'Expert Tomato cultivation guidance on spacing, irrigation, fertigation, and pest management for better yield and vegetable quality.',
    image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2026/09/pexels-unal-aslan-48172282-30309037.jpg',
    lang: [
      {
        English: `https://admin.kotharigroupindia.com/wp-content/uploads/2026/09/KCD_5310_K-I-CROP-TOMATO-ENGLISH.pdf`,
        Hindi: `https://admin.kotharigroupindia.com/wp-content/uploads/2026/09/KCD_5447_K-I-CROP-TOMATO-HINDI.pdf`,
      },
    ],
    division: 'irrigation',
  },
  {
    title: 'Sugarcane Guides',
    description:
      'Expert Sugarcane cultivation guidance on spacing, irrigation, fertigation, and pest management for better yield and vegetable quality.',
    image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2026/09/pexels-carbellsarfo-33740520.jpg',
    lang: [
      {
        English: `https://admin.kotharigroupindia.com/wp-content/uploads/2026/09/KCD_5309_K-I-CROP-SUGARCANE-ENGLISH-1-compressed.pdf`,
        Hindi: `https://admin.kotharigroupindia.com/wp-content/uploads/2026/09/KCD_5435_K-I-CROP-SUGARCANE-HINDI-compressed.pdf`,
      },
    ],
    division: 'irrigation',
  },
];

export const pipeKnowledgeItems: KnowledgeItem[] = [
  {
    title: 'Plumbing Systems',
    description:
      'Comprehensive engineering documentation and technical specifications for CPVC and UPVC piping infrastructure. Features material thermal ratings, chemical resistance matrices, precise solvent welding joint protocols, flow rate optimization charts, and hydraulic pressure loss calculations tailored for high-performance residential, commercial, and industrial plumbing installations.',
    image: 'https://kotharigroupindia.com/img/images/Building_pipe.webp',
    lang: [
      {
        English: `https://admin.kotharigroupindia.com/wp-content/uploads/2026/09/Plumbing-Pipe-Literature-English-Sept-2026.pdf`,
      },
    ],
    division: 'pipe',
  },
  {
    title: 'Agri & Borewell',
    description:
      'Extensive field deployment manuals and practical technical guides covering subterranean UPVC agricultural main lines, HDPE coil layout optimization, surge pressure protection strategies, and precise structural torque thresholds engineered for high-depth borewell column pipe systems.',
    image: 'https://kotharigroupindia.com/img/images/Agri_Pipes.webp',
    lang: [
      {
        English: `https://admin.kotharigroupindia.com/wp-content/uploads/2026/09/Agri-Pipe-Literature-English-Sept-2026-2.pdf`,
      },
    ],
    division: 'pipe',
  },
];

export const allKnowledgeItems: KnowledgeItem[] = [
  ...pipeKnowledgeItems,
  ...irrigationKnowledgeItems,
];