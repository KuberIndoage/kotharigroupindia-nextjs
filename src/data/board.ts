export interface BoardMember {
  name: string;
  designation: string;
  description?: string;
  readMoreContent: string;
  imageUrl: string;
  linkedin?: boolean;
  linkedinUrl?: string;
}

export const boardHero = {
  eyebrow: 'KOTHARI GROUP',
  heading: 'Strong Leadership. A Vision for the Future.',
  description:
    'The members of our team bear a wide array of competencies that help us in promoting water management with proper pipes and irrigation methods. ',
};

export const boardOfDirectors: BoardMember[] = [
  {
    name: 'Kiran S. Kothari',
    designation: 'Founder Chairman',
    description:
      'Kothari Agritech was established in 1997 by Mr. Kiran S. Kothari to change the water management system from the core with new solutions and techniques of agricultural activities. His passion for agricultural sciences is coupled with creativity and smart use of water sources. It can be seen in the development of Kothari Group through the years.',
    readMoreContent: `Kothari Agritech was established in 1997 by Mr. Kiran S. Kothari to change the water management system from the core with new solutions and techniques of agricultural activities. His passion for agricultural sciences is coupled with creativity and smart use of water sources. It can be seen in the development of Kothari Group through the years.`,
    imageUrl: 'https://kotharigroupindia.com/img/images/kiran-s-kothari.webp',
  },
  {
    name: 'Arvind S. Kothari',
    designation: 'Chairman',
    description:
      'Mr. Arvind S. Kothari is an alumnus of Pune University who studied mathematics. Now that he has joined the Kothari Group, he has also brought analytical and strategic skills to the company. ',
    readMoreContent: `Mr. Arvind S. Kothari is an alumnus of Pune University who studied mathematics. Now that he has joined the Kothari Group, he has also brought analytical and strategic skills to the company. `,
    imageUrl: 'https://kotharigroupindia.com/img/images/arvind-s-kothari.webp',
  },
  {
    name: 'Ujwal S. Kothari',
    designation: 'Managing Director',
    description:
      `Mr. Ujwal S. Kothari completed his commerce studies from Pune University and has been associated with Kothari Agritech from the very first day. His task is to supervise the everyday going on of the organization. Moreover, he is responsible for overseeing other aspects of business promotions and the company' s products. `,
    readMoreContent: `Mr. Ujwal S. Kothari completed his commerce studies from Pune University and has been associated with Kothari Agritech from the very first day. His task is to supervise the everyday going on of the organization. Moreover, he is responsible for overseeing other aspects of business promotions and the company' s products.`,
    imageUrl: 'https://kotharigroupindia.com/img/images/ujwal-s-kothari.webp',
  },
];

export const youngLeadership = {
  heading: 'OUR LEADERSHIP TEAM - THE FUTURE IS YOUNG',
  description:
    'The new phase of leadership at Kothari would be characterized by fresh views on operations. ',
  members: [
    {
      name: 'Amol S. Paliya',
      designation: 'Director',
      linkedin: true,
      linkedinUrl: 'https://www.linkedin.com/in/amol-paliya-7a47a7188',
      readMoreContent: `Mr. Amol S. Paliya has been a part of Kothari Group since 1997 and has a big amount of expertise in the field of commerce. He possesses an amazing talent to implement operational efficiency and strategic planning of business. `,
      imageUrl: 'https://kotharigroupindia.com/img/images/amol-s-paliya.webp',
    },
    {
      name: 'Mr. Ashish Kothari',
      designation: 'Director Operations - Irrigation Division',
      linkedin: true,
      linkedinUrl: 'https://www.linkedin.com/in/ashish-kothari-42940616',
      readMoreContent: `Mr. Ashish Kothari has technical knowledge. He is an engineer and MBA from Symbiosis College, Pune. He has worked with Kothari Group since 2009 and has contributed to the irrigation operations and procurement department of the company.`,
      imageUrl: 'https://kotharigroupindia.com/img/images/ashish-kothari.webp',
    },
    {
      name: 'Mr. Pushkaraj Kothari',
      designation: 'Director Marketing - Irrigation Division',
      linkedin: true,
      linkedinUrl: 'https://www.linkedin.com/in/pushkaraj-kothari-6b01aa24',
      readMoreContent: `Mr. Pushkaraj Kothari has a BE in Engineering and also holds an MBA. He began his association with Kothari Group in the year 2012 as a management trainee and obtained relevant experience in the sales department. He presently leads the brands and marketing communications department.`,
      imageUrl: 'https://kotharigroupindia.com/img/images/pushkraj-kothari.webp',
    },
    {
      name: 'Mr. Gaurav Kothari',
      designation: 'Director Marketing - Pipe Division',
      linkedin: true,
      linkedinUrl: 'https://www.linkedin.com/in/gourav-kothari-8a30a714b',
      readMoreContent: `Mr. Kothari completed his graduation in BBA and started working with Kothari Group in 2010. Since then, he has developed expertise in both sales and market development for agricultural and plumbing products. His focus on customer relationships and market knowledge helps the company become established in the industries of pipes and pipe fittings, as well as plumbing solutions. `,
      imageUrl: 'https://kotharigroupindia.com/img/images/gaurav-kothari.webp',
    },
    {
      name: 'Mr. Akshay Kothari',
      designation: 'Director - Finance & HR',
      linkedin: true,
      linkedinUrl: 'https://www.linkedin.com/in/akshay-kothari-4656b7b5',
      readMoreContent: `Mr. Akshay Kothari started to work with Kothari Group in 2013. He has both BBA and MBA degrees from universities in Pune and the UK. In the company, he takes part in all finance and human resource operations. `,
      imageUrl: 'https://kotharigroupindia.com/img/images/akshay-kothari.webp',
    },
    {
      name: 'Mr. Sourabh Kothari',
      designation: 'Director - Export Division',
      linkedin: true,
      linkedinUrl: 'https://www.linkedin.com/in/sourabh-kothari-0112561b5',
      readMoreContent: `Mr. Kothari has been working with Kothari Group for 5 years, using his expertise gained during his previous experience in Singapore. His contribution to finance and project execution is highly important in making the company effective and satisfying its customers. `,
      imageUrl: 'https://kotharigroupindia.com/img/images/sourabh-kothari.webp',
    },
  ] as BoardMember[],
};
