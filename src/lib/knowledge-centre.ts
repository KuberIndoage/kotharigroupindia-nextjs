export interface KnowledgeItem {
  title: string;
  description: string;
  image: string;
  link: string;
  division: 'pipe' | 'irrigation';
}

export const irrigationKnowledgeItems: KnowledgeItem[] = [
  {
    title: 'Banana Guides',
    description:
      'Expert banana cultivation guidance on spacing, irrigation, fertigation, and pest management for better yield and fruit quality.',
    image: 'https://images.pexels.com/photos/4399936/pexels-photo-4399936.jpeg',
    link: '/knowledge/KCD_5306_K-I%20CROP%20%20BANANA%20ENGLISH.pdf',
    division: 'irrigation',
  },
  {
    title: 'Chilli Guides',
    description:
      'Expert chilli cultivation guidance on spacing, irrigation, fertigation, and pest management for better yield and fruit quality.',
    image: 'https://images.pexels.com/photos/34111554/pexels-photo-34111554.jpeg',
    link: '/knowledge/KCD_5307_K-I%20CROP%20CHILLI%20ENGLISH.pdf',
    division: 'irrigation',
  },
  {
    title: 'Onion Guides',
    description:
      'Expert onion cultivation guidance on spacing, irrigation, fertigation, and pest management for better yield and bulb quality.',
    image: 'https://images.pexels.com/photos/7129153/pexels-photo-7129153.jpeg',
    link: '/knowledge/KCD_5308_K-I%20CROP%20ONION%20ENGLISH.pdf',
    division: 'irrigation',
  },
];

export const pipeKnowledgeItems: KnowledgeItem[] = [
  {
    title: 'Plumbing Systems',
    description:
      'Comprehensive engineering documentation and technical specifications for CPVC and UPVC piping infrastructure. Features material thermal ratings, chemical resistance matrices, precise solvent welding joint protocols, flow rate optimization charts, and hydraulic pressure loss calculations tailored for high-performance residential, commercial, and industrial plumbing installations.',
    image: 'https://kotharigroupindia.com/img/images/Building_pipe.webp',
    link: '/knowledge/Plumbing%20Pipe%20Literature%20English%20Sept%202026.pdf',
    division: 'pipe',
  },
  {
    title: 'Agri & Borewell',
    description:
      'Extensive field deployment manuals and practical technical guides covering subterranean UPVC agricultural main lines, HDPE coil layout optimization, surge pressure protection strategies, and precise structural torque thresholds engineered for high-depth borewell column pipe systems.',
    image: 'https://kotharigroupindia.com/img/images/Agri_Pipes.webp',
    link: '/knowledge/Agri%20Pipe%20Literature%20English%20Sept%202026.pdf',
    division: 'pipe',
  },
];

export const allKnowledgeItems: KnowledgeItem[] = [
  ...pipeKnowledgeItems,
  ...irrigationKnowledgeItems,
];