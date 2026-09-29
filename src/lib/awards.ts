// Static awards data sourced from awards.txt
export interface Award {
  id: number;
  slug: string;
  image: string;
  title: string;
  description: string;
  presentedBy: string;
  year: string;
  alt: string;
  category: string;
}

export interface AwardsData {
  awards: Award[];
  categories: string[];
}

const IMAGE_BASE = 'https://admin.kotharigroupindia.com/wp-content/uploads/2026/09';

const awards: Award[] = [
  {
    id: 1,
    slug: 'rural-water-management',
    image: `${IMAGE_BASE}/AWARD_1.jpeg`,
    title: 'Recognition for Contribution to Rural Water Management',
    description:
      "Mr. Sourabh Kothari was honoured by the Minister of Rural Development & Panchayati Raj for Kothari Group's significant contribution to water management in rural India strengthening the company's commitment to a water-secure, sustainable future.",
    presentedBy:
      'Hon. Jaykumar Gore, Minister of Rural Development & Panchayati Raj, Government of Maharashtra',
    year: '2025-26',
    alt: 'Receiving award from Minister Jaykumar Gore for contribution to rural water management',
    category: 'pipe division',
  },
  {
    id: 2,
    slug: 'invaluable-contribution',
    image: `${IMAGE_BASE}/AWARD_2.jpeg`,
    title: 'Invaluable Contribution Award',
    description:
      'Recognized by the Bureau of Indian Standards for invaluable contribution to industry standards and manufacturing quality.',
    presentedBy: 'Bureau of Indian Standards',
    year: '2023-24',
    alt: 'Kothari Group receiving Invaluable Contribution Award 2023-24 from Bureau of Indian Standards',
    category: 'pipe division',
  },
  {
    id: 3,
    slug: 'business-excellence',
    image: `${IMAGE_BASE}/AWARD_3.jpeg`,
    title: 'Business Excellence Award',
    description:
      'Awarded for business excellence in the agriculture sector by the Maharashtra Agriculture Minister.',
    presentedBy: 'Agriculture Minister Shri. Dada Bhuse',
    year: '2020-21',
    alt: 'Kothari Group receiving Business Excellence Award 2020-21 from Agriculture Minister Dada Bhuse',
    category: 'pipe division',
  },
  {
    id: 4,
    slug: 'trusted-brand-agriculture',
    image: `${IMAGE_BASE}/AWARD_4.jpeg`,
    title: 'The Most Trusted Brand in the Agriculture Sector',
    description:
      "Recognized as the most trusted brand in India's agriculture sector, presented at a national platform by senior government leaders.",
    presentedBy: 'Hon. Union Transport Minister Shri. Nitin Gadkari & Ex. CM Shri. Devendra Fadnavis',
    year: '2019-20',
    alt: 'Kothari Group receiving The Most Trusted Brand in Agriculture Sector award 2019-20 from Nitin Gadkari and Devendra Fadnavis',
    category: 'pipe division',
  },
  {
    id: 5,
    slug: 'best-brand-agriculture-piping',
    image: `${IMAGE_BASE}/AWARD_5.jpeg`,
    title: 'Best Brand in Agriculture Piping System',
    description:
      'Honoured by ABP MAZA for excellence in agriculture piping systems, reflecting consistent quality across the product range.',
    presentedBy: 'ABP MAZA',
    year: '2019-20',
    alt: 'Kothari Group receiving Best Brand in Agriculture Piping System award 2019-20 from ABP MAZA',
    category: 'pipe division',
  },
  {
    id: 6,
    slug: 'emerging-brand-irrigation',
    image: `${IMAGE_BASE}/AWARD_6.jpeg`,
    title: 'Emerging Brand in Irrigation System',
    description:
      "Named an emerging brand in irrigation systems by the then Union Minister of Agriculture, marking Kothari Irrigation's growing national presence.",
    presentedBy: 'Ex. Hon. Union Agricultural Minister Shri. Radha Mohan Singh',
    year: '2018-19',
    alt: 'Kothari Group receiving Emerging Brand in Irrigation System award 2018-19 from Radha Mohan Singh',
    category: 'pipe division',
  },
  {
    id: 7,
    slug: 'bhumi-nirman',
    image: `${IMAGE_BASE}/AWARD_7.jpeg`,
    title: 'Bhumi Nirman Award',
    description: 'Recognized with the Bhumi Nirman Award for contribution to agricultural and rural development.',
    presentedBy: '',
    year: '2010-11',
    alt: 'Kothari Group receiving Bhumi Nirman Award 2010-11',
    category: 'pipe division',
  },
  {
    id: 8,
    slug: 'district-industrial',
    image: `${IMAGE_BASE}/AWARD_8.jpeg`,
    title: 'District Industrial Award',
    description:
      'A district-level honour for industrial contribution, presented by the then Deputy Chief Minister of Maharashtra.',
    presentedBy: 'Ex. Dy. CM Vijaysinh Mohite-Patil',
    year: '2008-09',
    alt: 'Kothari Group receiving District Industrial Award 2008-09 from Vijaysinh Mohite-Patil',
    category: 'pipe division',
  },
  {
    id: 9,
    slug: 'bhartiya-udyog-ratna',
    image: `${IMAGE_BASE}/AWARD_9.jpeg`,
    title: 'Bhartiya Udyog Ratna Award',
    description:
      "One of Kothari Group's earliest honours, recognizing industrial excellence early in the company's growth.",
    presentedBy: 'National Education & Development Research Organisation (NEHRDO)',
    year: '2005-06',
    alt: 'Kothari Group receiving Bhartiya Udyog Ratna Award 2005-06',
    category: 'pipe division',
  },
];

const categories = ['All', 'pipe division', 'irrigation division'];

export const awardsData: AwardsData = { awards, categories };