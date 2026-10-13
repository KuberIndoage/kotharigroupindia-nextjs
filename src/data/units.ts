// Manufacturing units content sourced from units.txt
export interface ManufacturingUnit {
  img: string;
  name: string;
}

export interface ManufacturingUnitsData {
  heading: string;
  description: string;
  units: ManufacturingUnit[];
}

export const manufacturingUnitsData: ManufacturingUnitsData = {
  heading: 'Our Manufacturing Units',
  description:
    "The foundation of strong products lies in effective manufacturing processes. Kothari Group has 8 manufacturing units where various kinds of pipes such as PVC, UPVC, HDPE and CPVC along with irrigation systems are manufactured. Thanks to our manufacturing capabilities, we are able to cater to the requirements of agriculture, residential, commercial and infrastructure projects. We use our manufacturing experience, strive to produce the best products available in India and deliver quality services at an affordable cost.",
  units: [
    { img: '/units/unit-1.jpg', name: 'PVC Pipes & Fittings (Mohol, Solapur-MH)' },
    { img: '/units/unit-2.jpg', name: 'Hose Pipes (Mohol, Solapur-MH)' },
    { img: '/units/unit-3.jpg', name: 'HDPE Pipes & Fittings (Mohol, Solapur-MH)' },
    { img: '/units/unit-4.jpg', name: 'Irrigation Systems (Mohol, Solapur-MH)' },
    {
      img: '/units/unit-5.jpg',
      name: 'Submersible Cables & Wires (Chincholi, Solapur-MH)',
    },
    {
      img: '/units/unit-6.jpg',
      name: 'PVC Pipes & Irrigation Systems (Kukarwada, Mehsana-GJ)',
    },
    {
      img: '/units/unit-7.jpg',
      name: 'Plumbing Pipes & Fittings (Yawali, Solapur-MH)',
    },
    {
      img: '/units/unit-8.jpg',
      name: 'PVC, DWC & HDPE (Pithampur, Dhar-MP)',
    },
    {
      img: '/units/unit-9.jpg',
      name: 'PVC, HDPE, DWC Pipes & Fittings (Gandrajupalle, Chittoor-AP)',
    },
  ],
};

// Split "PVC Pipes & Fittings 1997 (Mohol-MH)" into product / year / location.
export function parseUnitName(name: string): {
  product: string;
  year: string;
  location: string;
} {
  const yearMatch = name.match(/\b(19|20)\d{2}\b/);
  const locationMatch = name.match(/\(([^)]+)\)/);
  const year = yearMatch?.[0] ?? '';
  const location = locationMatch?.[1] ?? '';
  const product = name
    .replace(year, '')
    .replace(locationMatch?.[0] ?? '', '')
    .replace(/\s+/g, ' ')
    .trim();
  return { product, year, location };
}
