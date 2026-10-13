export interface AboutStat {
  value: string;
  label: string;
}

export interface VisionMissionItem {
  type: 'vision' | 'mission';
  heading: string;
  description: string;
  icon: string;
}

export interface ApproachItem {
  title: string;
  description: string;
}

export interface CoreValue {
  title: string;
  description: string;
  icon: string;
}

export interface TimelineEntry {
  year: string;
  title: string;
  description: string;
  image: string;
}

export interface WhyKothariItem {
  title: string;
  description: string;
  icon: string;
}

export const aboutHero = {
  eyebrow: 'KOTHARI GROUP', 
  heading: 'ABOUT KOTHARI GROUP',
  description:
    'From agriculture and residences to rising infrastructure, Kothari Group offer reliable piping and water supply services that allow water to arrive where it matters most. ',
  image: '/banners/about/About-us-Banner.jpg',
  mobileBG: '/banners/about/About-us-Banner_mobile.jpg',
};

export const aboutGrowth = {
  heading: 'Our progress is driven by Creativity & Knowledge',
  intro:
    'For India to be successful, agriculture should have advanced irrigation technologies, cities should have reliable infrastructures, and communities should have advanced methods of water management. At Kothari Group, we unite these needs by providing practical, efficient pipes, fittings, and irrigation technologies.',
  paragraphs: [
    `For years, we have developed hand in hand with India's agricultural and infrastructural needs. What started as an effort at supporting agriculture has turned into a variety of solutions for water transportation, irrigation, plumbing, and infrastructures.`,
    'The philosophy we follow can be described in three words: identify needs, improve water distribution, and create reliable products. From drip and micro-irrigation systems to robust pipes, Kothari Group continues to develop products and manufacturing practices that will help farms, homes, and communities of India.',
  ],
  stats: [
    { value: '7500+', label: 'Channel Partners' },
    { value: '2000+', label: 'Associates' },
    { value: '14+', label: 'Warehouses' },
  ] as AboutStat[],
};

export const capGrowth = {
  heading: 'Our progress is driven by Creativity & Knowledge',
  intro:
    'For India to be successful, agriculture should have advanced irrigation technologies, cities should have reliable infrastructures, and communities should have advanced methods of water management. At Kothari Group, we unite these needs by providing practical, efficient pipes, fittings, and irrigation technologies.',
  paragraphs: [
    `For years, we have developed hand in hand with India's agricultural and infrastructural needs. What started as an effort at supporting agriculture has turned into a variety of solutions for water transportation, irrigation, plumbing, and infrastructures.`,
    'The philosophy we follow can be described in three words: identify needs, improve water distribution, and create reliable products. From drip and micro-irrigation systems to robust pipes, Kothari Group continues to develop products and manufacturing practices that will help farms, homes, and communities of India.',
  ],
  stats: [
    { value: '8', label: 'Manufacturing units across India' },
    { value: '100%', label: 'Automated production' },
    { value: '24+', label: 'Facilities nationwide' },
  ] as AboutStat[],
};

export const aboutVisionMission: VisionMissionItem[] = [
  {
    type: 'vision',
    heading: 'Our Vision',
    description:
      'To be India’s most trusted water management company, enabling secure and efficient water use for rural and urban communities.',
    icon: 'vision',
  },
  {
    type: 'mission',
    heading: 'Our Mission',
    description:
      'We design, manufacture, and deliver reliable, high-performance, affordable, and sustainable solutions for irrigation, water distribution, plumbing, and infrastructure—helping customers use water efficiently every day.',
    icon: 'mission',
  },
];

export const aboutPurposePrinciple = [
  {
    type: 'purpose',
    heading: 'Our Purpose',
    description:
      'To make every drop of water count for a stronger, more prosperous India.',
    icon: 'purpose',
  },
  {
    type: 'principle',
    heading: 'Our Guiding Principle',
    description:
      'Do what is right for water, the customer, the company, and India—every time.',
    icon: 'principle',
  },
];


export const aboutApproach = {
  heading: 'Our Approach',
  items: [
    {
      title: 'Innovate',
      description:
        'Innovate and deliver advanced, affordable, and sustainable water management solutions that boost productivity across rural and urban India.',
    },
    {
      title: 'Collaborate',
      description:
        'Collaborate with farmers, builders, government, and communities to promote efficient water use, conservation, and inclusive growth throughout India.',
    },
    {
      title: 'Uphold',
      description:
        'Uphold the highest standards of quality, environmental stewardship, and customer trust to build long-term partnerships that strengthen India\u2019s prosperity and water security.',
    },
  ] as ApproachItem[],
  purpose: {
    label: 'Our Purpose',
    description: 'To help rural and urban Indians save water, grow better, and build a stronger India.',
  },
};

export const aboutCoreValues = {
  heading: 'Our Core Values',
  values: [
    {
      title: 'Innovation',
      description: 'Always finding new and better ways to manage water and support growth.',
      icon: 'innovation',
    },
    {
      title: 'Sustainability',
      description: 'Protecting water and the environment for future generations.',
      icon: 'sustainability',
    },
    {
      title: 'Quality',
      description: 'Delivering products and services you can trust every time.',
      icon: 'quality',
    },
    {
      title: 'Customer First',
      description: 'Putting the needs of rural and urban Indians first.',
      icon: 'customer-first',
    },
    {
      title: 'Collaboration',
      description: 'Working together with communities and partners.',
      icon: 'collaboration',
    },
    {
      title: 'Integrity',
      description: 'Being honest, fair, and responsible in all we do.',
      icon: 'integrity',
    },
    {
      title: 'Accessibility',
      description: 'Making water solutions affordable and available to everyone.',
      icon: 'accessibility',
    },
    {
      title: 'Excellence',
      description: 'Striving to be the best in performance and service.',
      icon: 'excellence',
    },
    {
      title: 'Respect',
      description: 'Valuing people, communities, and nature with care and kindness.',
      icon: 'respect',
    },
  ] as CoreValue[],
};

export const aboutLegacy = {
  heading: "The Legacy of Kothari Group",
  timeline: [
    { year: '1980', title: 'The Beginning', description: 'Founder, Mr. Kothari, starts trading through a fertilizer shop', image: '/legacy/1980.png' },
    { year: '1985', title: 'Diversification', description: 'Diversifies into agriculture, irrigation products, trading and services', image: '/t7.jpg' },
    { year: '1997', title: 'PVC Manufacturing', description: 'Commenced PVC pipe and fitting manufacturing with a single machine', image: '/legacy/1997.png' },
    { year: '1999', title: 'Hose Pipe Production', description: 'Initiating the production of Hose pipes at Unit 2', image: '/plant_warehouse_storage_1784719730647.jpg' },
    { year: '2002', title: 'Agri Cables', description: 'Forays into Agri submersible cables', image: '/t2.jpg' },
    { year: '2003', title: 'HDPE Pipes & Fittings', description: 'Unit 3: HDPE pipes and fittings', image: '/t3.jpg' },
    { year: '2004', title: 'Micro-Irrigation', description: 'Enters micro-irrigation market via irrigation systems at Unit 4', image: '/field.jpg' },
    { year: '2005', title: 'First Export', description: 'Exports first consignment to East Africa', image: '/t4.jpg' },
    { year: '2010', title: '100% Automated Plant', description: `Remodels Unit 1 into India's First 100% Automated Plant`, image: '/plant_aerial_view_1784719755067.jpg' },
    { year: '2011', title: '100CR Turnover', description: 'Achieves 100CR turnover', image: '/plant_quality_lab_1784719742717.jpg' },
    { year: '2013', title: 'Column Pipes', description: 'Starts manufacturing of column pipes at the 100% Automated Unit 5', image: '/t1.jpg' },
    { year: '2014', title: 'Automated Irrigation', description: 'Introduced automated irrigation systems in India, in collaboration with Israel', image: '/field2.jpg' },
    { year: '2015', title: 'Himachal Pradesh Expansion', description: 'Himachal Pradesh expansion (ISI-certified mulching films & cables)', image: '/plant_warehouse_storage_1784719730647.jpg' },
    { year: '2016', title: 'Brand Identity', description: 'Rewamps its identity', image: '/heronew.jpg' },
    { year: '2017', title: 'Export Wing', description: 'Establishes a dedicated export wing', image: '/t4.jpg' },
    { year: '2018', title: '7500CR Turnover', description: 'Achieves 750Cr turnover', image: '/t2.jpg' },
    { year: '2019', title: 'Gujarat Manufacturing Plant', description: 'New manufacturing plant at Kukarwada, Gujarat', image: '/plant_aerial_view_1784719755067.jpg' },
    { year: '2021', title: 'Mega Facility in Solapur', description: 'Mega facility in Solapur', image: '/plant_extrusion_line_1784719717817.jpg' },
    { year: '2023', title: 'Kothari Udyam Nagar', description: '100-acre mega plant at Kothari Udyam Nagar', image: '/plant_aerial_view_1784719755067.jpg' },
    { year: '2024', title: '1000CR Turnover', description: 'Achieved 1000CR turnover', image: '/t3.jpg' },
    { year: '2025', title: 'Indore Expansion', description: 'Started factory and office in Indore', image: '/t7.jpg' },
  ] as TimelineEntry[],
};

export const aboutWhyKothari = {
  heading: 'WHY KOTHARI?',
  items: [
    {
      title: 'Trusted Legacy',
      description: 'With over 35 years of experience, Kothari is a trusted name in India\u2019s water management industry.',
      icon: 'trusted-legacy',
    },
    {
      title: 'Proven Quality',
      description: 'We deliver durable, high-quality products designed to perform reliably in India\u2019s diverse rural and urban needs.',
      icon: 'proven-quality',
    },
    {
      title: 'Innovation at the Core',
      description: 'We lead through innovation with cutting-edge, affordable, and sustainable water management technologies.',
      icon: 'innovation',
    },
    {
      title: 'Empowering Growth',
      description: 'We help farmers and builders conserve water, enhance productivity, and contribute directly to India\u2019s growth and a prosperous future.',
      icon: 'empowering-growth',
    },
    {
      title: 'Extensive Reach',
      description: 'Our extensive dealer and distributor network, spanning 23+ states, ensures wide accessibility and quick delivery of our products.',
      icon: 'extensive-reach',
    },
    {
      title: 'Customer-First Service',
      description: 'Quick delivery, responsive after-sales support, and a customer-first approach ensure strong, long-lasting relationships unmatched by competitors.',
      icon: 'customer-first-service',
    },
  ] as WhyKothariItem[],
};
