export interface SegmentFaq {
  question: string;
  answer: string;
}

export interface SegmentPageContent {
  slug: string;
  overview: string[];
  faqs: SegmentFaq[];
}

export const segmentPageContent: Record<string, SegmentPageContent> = {
  'plumbing-pipes-and-fittings': {
    slug: 'plumbing-pipes-and-fittings',
    overview: [
      'Modern buildings demand plumbing that can handle hard water, high temperatures, and years of continuous daily use without corrosion or scaling. Our CPVC and UPVC pipes and fittings meet this need with lightweight, corrosion-free systems built for long-term reliability, manufactured to IS and ASTM standards. Our CPVC systems are engineered for hot and cold water applications up to 93°C, while our UPVC systems deliver dependable cold water plumbing across residential, commercial, and high-rise installations.',
      'From ISI-marked pipes and dual O-ring brass fittings to registered alignment-line designs for easier installation, every product in our plumbing range is built with the same attention to detail, whether it’s a single household connection or a large commercial project. We also manufacture matching solvent cements for secure, leak-proof joints, giving builders and plumbers a complete, trusted plumbing system from pipe to fitting to finish.',
    ],
    faqs: [
      {
        question: 'What’s the difference between CPVC and UPVC pipes?',
        answer:
          'CPVC pipes are rated for both hot and cold water up to 93°C, making them suitable for geysers and hot water lines, while UPVC pipes are designed specifically for cold water applications.',
      },
      {
        question: 'Which pipe is better for home plumbing, CPVC or UPVC?',
        answer:
          'Both are reliable choices; CPVC is the better fit if you need hot water lines (kitchen, bathroom geysers), while UPVC works well for cold water supply throughout the home.',
      },
      {
        question: 'Are Kothari CPVC and UPVC pipes safe for drinking water?',
        answer:
          'Yes, our CPVC and UPVC pipes are certified safe for drinking water applications, with no risk of contamination.',
      },
      {
        question: 'What sizes are available in CPVC and UPVC pipes?',
        answer:
          'Our CPVC pipes are available from 15mm to 300mm, and UPVC pipes follow a similar range, suited to both residential and commercial installations.',
      },
      {
        question: 'How are CPVC and UPVC pipes joined?',
        answer:
          'Both use solvent cement joints for fast, leak-proof installation. We manufacture matching CPVC and UPVC solvent cements for secure connections.',
      },
      {
        question: 'Are these pipes suitable for high-rise buildings?',
        answer:
          'Yes, our CPVC and UPVC pipes are engineered to handle the pressure and structural demands of high-rise residential and commercial plumbing risers.',
      },
      {
        question: 'What standards are Kothari plumbing pipes manufactured to?',
        answer:
          'Our pipes are manufactured to IS 15778 (CPVC) and ASTM D-1785 (UPVC) standards, among others.',
      },
    ],
  },
  'sewerage-drainage-pipes-and-fittings': {
    slug: 'sewerage-drainage-pipes-and-fittings',
    overview: [
      'Effective drainage is just as important as reliable water supply, and our sewerage and drainage pipes and fittings are engineered to handle soil, waste, and rainwater discharge for buildings and infrastructure projects of every scale. Our SWR (Soil, Waste & Rainwater) pipes use push-fit rubber ring joints for leak-proof, low-maintenance drainage, while our underground drainage systems including solid wall UDS, lightweight Foamcore, and flexible DWC pipes are built to withstand soil pressure and heavy loads well below the surface.',
      'For applications where noise matters, our PP low-noise drainage system reduces discharge sound in residential and commercial buildings, and our sub-surface drainage pipes support agricultural and landscape water management. Manufactured to IS standards and engineered for long-term reliability, our sewerage and drainage pipes and fittings give builders, contractors, and municipal projects a complete, dependable drainage solution from the building itself down to the underground network.',
    ],
    faqs: [
      {
        question: 'What is SWR piping used for?',
        answer:
          'SWR (Soil, Waste & Rainwater) piping is used to dispose of wastewater and rainwater from buildings, connecting fixtures to the main drainage system.',
      },
      {
        question: 'What’s the difference between solid wall and Foamcore underground drainage pipes?',
        answer:
          'Solid wall UDS pipes offer standard strength for underground drainage, while Foamcore pipes use a multilayer design that’s lighter and more cost-effective while maintaining similar strength.',
      },
      {
        question: 'Are underground drainage pipes suitable for heavy traffic areas?',
        answer:
          'Yes, our underground drainage pipes, including DWC pipes, are engineered to withstand soil pressure and heavy loads.',
      },
      {
        question: 'What is a low-noise drainage system used for?',
        answer:
          'Our PP low-noise drainage system reduces discharge sound, making it ideal for hotels, hospitals, and residential buildings where noise matters.',
      },
      {
        question: 'What standards do Kothari drainage pipes meet?',
        answer:
          'Our SWR and underground drainage pipes are manufactured to IS 13592, IS 15328, and related standards.',
      },
    ],
  },
  'agriculture-pipes-and-fittings': {
    slug: 'agriculture-pipes-and-fittings',
    overview: [
      'Reliable water delivery is the backbone of every successful farm, and our agriculture pipes and fittings are built to handle the demands of Indian farming conditions. Our range includes PVC pipe fittings like Self Fit and Ring Fit pipes for quick, no-drill irrigation setup, alongside HDPE and MDPE pipes and fittings engineered for water distribution, spray applications, and general farm infrastructure. We also manufacture a complete line of agricultural valves, ball valves, butterfly valves, and vacuum relief valves to give farmers precise control over water flow across their fields.',
      'Whether you’re setting up a new irrigation network or maintaining existing farm infrastructure, our PVC and HDPE pipe fittings are manufactured to IS and ASTM standards, ensuring durability across varying soil and water conditions. From lay-flat tubes for seasonal cropping to permanent underground pipeline systems, our agriculture pipes and fittings support every stage of a farm’s water management, backed by decades of manufacturing experience serving farmers across India.',
    ],
    faqs: [
      {
        question: 'What’s the difference between Self Fit and Ring Fit PVC pipes?',
        answer:
          'Self Fit PVC pipes use a no-drill, push-fit connection ideal for portable, seasonal irrigation setups, while Ring Fit pipes use rubber ring joints suited to permanent, underground pipeline installations.',
      },
      {
        question: 'What sizes are available in agricultural PVC pipes?',
        answer:
          'Our Self Fit and Ring Fit PVC pipes are available from 20mm up to 315mm, covering a wide range of farm irrigation needs.',
      },
      {
        question: 'Are HDPE pipes better than PVC pipes for agriculture?',
        answer:
          'Both have their place HDPE pipes (PE 63/80/100) offer flexibility and durability for larger irrigation networks, while PVC pipes are often preferred for lower-cost, seasonal, or portable setups.',
      },
      {
        question: 'What agricultural valves does Kothari manufacture?',
        answer:
          'Our range includes single and double union PVC ball valves, PP ball valves, butterfly valves, air cum vacuum relief valves, and flush valves for flow control across irrigation systems.',
      },
      {
        question: 'What is a lay flat tube used for?',
        answer:
          'Lay flat tubes, like our LD Krishi Pipe, are lightweight, collapsible pipes used to deliver water efficiently to distant fields, orchards, and farmland.',
      },
      {
        question: 'Are agricultural PVC and HDPE fittings compatible with drip irrigation systems?',
        answer:
          'Yes, our Agri PVC Moulded Fittings and HDPE fittings are designed to integrate with broader irrigation networks, including drip and sprinkler systems.',
      },
    ],
  },
  'borewell-solution': {
    slug: 'borewell-solution',
    overview: [
      'Groundwater access requires pipes and fittings that perform flawlessly from the moment they’re installed, since a failure deep underground means costly re-drilling. Our borewell solutions include column pipes with our ISLS locking system for secure, long-lasting submersible pump installations, along with casing pipes and screen pipes engineered to protect the wellbore and filter out sand and sediment before it reaches the pump.',
      'Available across a wide range of sizes and load ratings, our casing and column pipes are built to withstand the pressure, corrosion, and demanding conditions found deep below the surface, whether for domestic, agricultural, or industrial groundwater extraction. Manufactured to IS standards and tested for durability, our borewell solutions give installers the confidence that every pipe, from the surface to the pump, will perform reliably for years, supporting consistent water access for homes, farms, and industrial operations across India.',
    ],
    faqs: [
      {
        question: 'What is a column pipe used for?',
        answer:
          'Column pipes connect a submersible pump to the outlet in a borewell, supporting the weight of the pump and water column while carrying water upward.',
      },
      {
        question: 'What is the difference between casing pipes and column pipes?',
        answer:
          'Casing pipes line the borewell to prevent collapse and contamination, while column pipes carry water from the pump to the surface.',
      },
      {
        question: 'What is the ISLS lock system?',
        answer:
          'ISLS (Impact Sustaining Lock System) is our locking mechanism for column pipes that absorbs torque during pump startup and shutdown, preventing pipe slippage.',
      },
      {
        question: 'What sizes are available in casing pipes?',
        answer:
          'Our casing pipes are available in diameters from 140mm to 250mm, depending on the variant.',
      },
      {
        question: 'Are borewell pipes suitable for deep wells?',
        answer:
          'Yes, our column and casing pipes are available in multiple load ratings suited to both shallow and deep borewell installations.',
      },
    ],
  },
  'flexible-hose-pipes': {
    slug: 'flexible-hose-pipes',
    overview: [
      'From everyday garden watering to demanding industrial spraying, our flexible hose pipes are built for a wide range of applications. Our range includes durable PVC garden hose pipes for domestic watering, heavy-duty PVC suction and delivery hoses for agricultural and industrial use, and reinforced braided hose pipes engineered to withstand high pressure across construction sites, brick-kilns, and spray applications.',
      'Each hose pipe in our range is designed with a specific use case in mind anti-moss construction for humid environments, low-migration materials safe for domestic and light agricultural use, and multi-layer braided designs built to handle pressures up to 70 kg/cm². Whether you need a lightweight hose for everyday garden use or a rugged, industrial-grade hose for high-pressure spraying, our flexible hose pipes deliver dependable performance, backed by durable, UV and chemical-resistant construction that holds up season after season.',
    ],
    faqs: [
      {
        question: 'What’s the difference between a garden hose and a suction hose pipe?',
        answer:
          'Garden hose pipes are lightweight and designed for watering, while suction hose pipes are heavier-duty, built for pulling water and handling abrasive materials in agricultural or industrial settings.',
      },
      {
        question: 'Are braided hose pipes stronger than regular hose pipes?',
        answer:
          'Yes, braided hose pipes use synthetic yarn reinforcement for high tensile strength, making them suitable for high-pressure applications that standard hoses can’t handle.',
      },
      {
        question: 'What sizes do garden hose pipes come in?',
        answer:
          'Our garden hose pipes are available in sizes from ½ inch to 2 inch, depending on the variant.',
      },
      {
        question: 'Can suction hose pipes handle chemicals?',
        answer:
          'Yes, our PVC suction hose pipes are chemical and corrosion resistant, suitable for transferring saline water, light acids, and alkalis.',
      },
      {
        question: 'Are these hose pipes UV resistant?',
        answer:
          'Yes, our garden, suction, and braided hose pipes are all built with UV-resistant construction for reliable outdoor performance.',
      },
    ],
  },
  'cable-protection': {
    slug: 'cable-protection',
    overview: [
      'Underground cables whether carrying power, telecom, or fibre optic connections need reliable physical protection from soil pressure, moisture, and pest damage. Our cable protection range includes HDPE DWC pipes with a dual-wall design that combines outer strength with a smooth inner bore for easy cable insertion, along with UPVC electrical conduit pipes and fittings for safe wire protection in residential, commercial, and industrial buildings.',
      'Built to be UV-stabilized, anti-termite, and anti-rodent, our cable protection pipes are suited to new network installations as well as upgrades to existing infrastructure, supporting applications from underground telecom and power networks to smart-city duct systems and railway cabling. Our electrical conduit range adds fire-resistant, non-conductive protection for safe wiring in buildings of every type, giving infrastructure and construction projects a complete, dependable cable protection solution.',
    ],
    faqs: [
      {
        question: 'What is a DWC pipe used for cable protection?',
        answer:
          'DWC (Double Wall Corrugated) pipes protect underground power, telecom, and optical fibre cables from soil pressure, moisture, and physical damage.',
      },
      {
        question: 'What is the difference between DWC pipe and electrical conduit?',
        answer:
          'DWC pipes are typically used for underground cable ducting, while electrical conduit is used for protecting wiring within buildings.',
      },
      {
        question: 'Are cable protection pipes resistant to pests?',
        answer:
          'Yes, our HDPE DWC pipes are anti-termite and anti-rodent for long-term underground reliability.',
      },
      {
        question: 'What sizes are available in electrical conduit pipes?',
        answer:
          'Our electrical conduit pipes are available from 19mm to 63mm OD, in Light, Medium, and Heavy duty classes.',
      },
      {
        question: 'Are conduit pipes fire-resistant?',
        answer:
          'Yes, our UPVC electrical conduit pipes are made from non-conductive, fire-resistant material for safe wiring protection.',
      },
    ],
  },
  'drip-irrigation-system': {
    slug: 'drip-irrigation-system',
    overview: [
      'Flood irrigation wastes water and produces uneven crop growth, which is why drip irrigation has become the preferred method for growers who need precision and efficiency. Our drip irrigation range includes the K-Gol and K-Lin dripline families from cost-effective non-pressure-compensated options for level fields to pressure-compensated and anti-siphon variants built for slopes and subsurface installation along with thin wall driplines engineered specifically for short-duration crops.',
      'Beyond the dripline itself, we manufacture the complete ecosystem a drip system needs: polytubes, drip poly fittings, Turbo and PC drippers, drip winders for fast installation, and gravity drip kits for pump-free setups. Every product is built using advanced Israeli technology and manufactured to IS 13488 standards, delivering the uniform, low-CV water distribution that protects yield across sugarcane, cotton, vegetables, orchards, and vineyards. Whether you’re setting up a new field or upgrading an existing system, our drip irrigation range covers every component your farm needs.',
    ],
    faqs: [
      {
        question: 'What is the difference between NPC and PC driplines?',
        answer:
          'NPC (Non-Pressure Compensated) driplines are cost-effective options for flat, level fields, while PC (Pressure Compensated) driplines maintain uniform flow on slopes and uneven terrain.',
      },
      {
        question: 'What is anti-siphon technology in drip irrigation?',
        answer:
          'Anti-siphon technology, used in our K-Lin PCAS dripline, prevents soil particles from being drawn into drippers, making it ideal for subsurface drip irrigation.',
      },
      {
        question: 'What is a thin wall dripline, and how is it different from a standard dripline?',
        answer:
          'Thin wall driplines use a lighter wall thickness, making them a more economical choice for short-duration crops compared to standard driplines.',
      },
      {
        question: 'What filtration is required for drip irrigation systems?',
        answer:
          'Most of our drip irrigation products require 130-micron filtration to prevent clogging and ensure consistent flow.',
      },
      {
        question: 'Can drip irrigation be used for all crop types?',
        answer:
          'Yes, our dripline range covers sugarcane, cotton, vegetables, orchards, and vineyards, with different products suited to different crop and terrain needs.',
      },
      {
        question: 'What is a gravity drip kit?',
        answer:
          'A gravity drip kit is a complete, pump-free irrigation system that uses gravity to deliver water, ideal for areas without reliable pump or power access.',
      },
      {
        question: 'How often should drip irrigation fittings be maintained?',
        answer:
          'Our drip poly fittings use a barb design for leak-proof connections and require minimal maintenance, though regular filter cleaning is recommended.',
      },
    ],
  },
  'automation-system': {
    slug: 'automation-system',
    overview: [
      'Manual irrigation scheduling is time-consuming and prone to inconsistency, which is why more Indian farms are moving toward automated systems that manage water and fertigation with precision. Our automation range includes smart controllers Irribeat, GSI Galcon, and Galpro offering everything from cloud-based, IoT-enabled scheduling for large operations to affordable, battery-powered automation for smaller farms of 10-15 acres.',
      'Alongside our controllers, we manufacture the automated valves and instruments a complete system depends on: solenoid control valves, pressure reducing and sustaining valves, quick pressure relief valves, filter auto backwash valves, and water meters for accurate volumetric tracking. Our Nutrijet fertigation machine adds IoT-enabled nutrient dosing with real-time EC and pH control, giving growers precision agriculture without the need for constant manual oversight. Together, these systems reduce labour, cut water and fertilizer waste, and improve consistency across every irrigation cycle.',
    ],
    faqs: [
      {
        question: 'What is the difference between the Irribeat, GSI Galcon, and Galpro controllers?',
        answer:
          'Irribeat offers expandable, multi-zone control; GSI Galcon is cloud-based with up to 24 stations; Galpro is our most economical option, suited to smaller 10-15 acre farms.',
      },
      {
        question: 'Do automated irrigation controllers require a power connection?',
        answer:
          'Some models, like Galpro, run on batteries, while others support both AC and battery-powered (DC) operation depending on the setup.',
      },
      {
        question: 'What is a solenoid control valve used for?',
        answer:
          'A solenoid control valve enables automatic on/off water control in a controller-based irrigation system.',
      },
      {
        question: 'Can automation systems manage fertigation as well as irrigation?',
        answer:
          'Yes, our Nutrijet fertigation machine and compatible controllers support automated fertigation alongside irrigation scheduling.',
      },
      {
        question: 'What is a water meter used for in automated irrigation?',
        answer:
          'A water meter tracks volumetric water usage, supporting automated data collection and integration with remote monitoring systems.',
      },
    ],
  },
  'sprinkler-irrigation-system': {
    slug: 'sprinkler-irrigration-system',
    overview: [
      'For larger, open fields where drip irrigation isn’t practical, sprinkler irrigation delivers the uniform overhead coverage that closely spaced field crops need. Our sprinkler range includes the ISI-certified Metal Sprinkler for full-circle impact irrigation, along with HDPE sprinkler pipes (QCPE) featuring quick-coupling connections for fast setup across large fields, and complete sprinkler sets that pair our brass nozzle sprinklers with durable HDPE piping.',
      'For high-coverage needs, our Raingun delivers wide-area irrigation in a single shift, reducing the number of moves required across large commercial farms. And for landscape and turf applications, our pop-up spray heads, rotors, and swing joints bring the same reliable, uniform coverage to parks, gardens, and public spaces. Built for durability under continuous field use, our sprinkler irrigation systems suit almost every major field crop, from groundnut and wheat to cotton, soybean, tea, and coffee.',
    ],
    faqs: [
      {
        question: 'What crops are suitable for sprinkler irrigation?',
        answer:
          'Our Metal Sprinkler system suits almost all field crops, including groundnut, wheat, pulses, vegetables, cotton, soybean, tea, and coffee.',
      },
      {
        question: 'What is a raingun used for?',
        answer:
          'A raingun delivers wide-area coverage in a single shift, reducing the number of sprinkler moves needed across large commercial farms.',
      },
      {
        question: 'What is QCPE in HDPE sprinkler pipes?',
        answer:
          'QCPE stands for Quick Coupling PE pipe, designed for fast, tool-free connection during sprinkler system installation.',
      },
      {
        question: 'Are sprinkler systems suitable for landscaping and turf?',
        answer:
          'Yes, our pop-up spray heads and rotors are specifically designed for landscape and turf irrigation, including parks and golf courses.',
      },
      {
        question: 'What is the coverage area of Kothari’s Metal Sprinkler?',
        answer:
          'Our Metal Sprinkler provides a coverage diameter of 24 to 26 metres, depending on water pressure.',
      },
    ],
  },
  'filters-and-injectors': {
    slug: 'filters-and-injectors',
    overview: [
      'Water quality determines how long an irrigation system lasts unfiltered sediment and organic debris quickly clog drippers, nozzles, and emitters, turning a reliable system into a constant maintenance headache. Our filtration range covers every stage of protection, from Hydrocyclone filters that remove heavy sand from well water, to Sand and Disc filters for fine filtration of open water sources like rivers and ponds, to Screen and Twin Screen filters for reliable secondary filtration in any micro irrigation setup.',
      'For larger or unattended systems, our Mini Sigma and Filtomat filters offer fully automatic, self-cleaning operation, while our Semi Automatic Screen Filter adds a clogging indicator and uninterrupted cleaning for lower-maintenance operation. Alongside filtration, our Venturi injectors and dosing pumps deliver precise fertigation, allowing nutrients to be applied directly through the irrigation system. Together, our filters and injectors protect your investment in drip lines, sprinklers, and emitters while improving the consistency of every irrigation cycle.',
    ],
    faqs: [
      {
        question: 'What is the difference between a sand filter and a screen filter?',
        answer:
          'Sand filters use silica sand for ultra-fine filtration of organic debris, while screen filters use mesh for general secondary filtration.',
      },
      {
        question: 'When should I use a hydrocyclone filter?',
        answer:
          'A hydrocyclone filter should be installed before other filters to remove heavy sand and sediment from well or open-source water.',
      },
      {
        question: 'What is an automatic self-cleaning filter?',
        answer:
          'Automatic filters like our Mini Sigma and Filtomat filters flush themselves based on pressure difference, reducing manual maintenance.',
      },
      {
        question: 'What is a Venturi injector used for?',
        answer:
          'A Venturi injector delivers fertilizer or chemicals into an irrigation system using pressure difference, without requiring external power.',
      },
      {
        question: 'How is a dosing pump different from a Venturi injector?',
        answer:
          'A dosing pump is a powered unit suited to larger setups with higher injection rates, while a Venturi injector is power-free and suited to smaller-scale systems.',
      },
      {
        question: 'What filtration is recommended for open water sources like rivers or ponds?',
        answer:
          'We recommend disc filters, which are specifically designed to handle organic matter and algae from open water sources.',
      },
    ],
  },
  'micro-and-mini-sprinklers': {
    slug: 'micro-and-mini-sprinklers',
    overview: [
      'Not every crop needs the same watering approach nurseries, orchards, and high-value horticulture crops often require gentler, more targeted irrigation than standard field sprinklers can deliver. Our micro sprinkler range includes K-Mic Excel for uniform overhead coverage in nurseries and landscapes, K-Mic Micro Sprinkler for frost protection and overhead cooling, and K-Tuff for insect-proof, gentle irrigation of delicate plants.',
      'For broader field coverage, our Mini Sprinkler offers rotating, full or partial circle irrigation suited to row crops like onion, potato, and garlic, as well as pulses like soybean and wheat. We also manufacture Micro Sprayers for horticulture and landscape irrigation, and misting and fogging systems K-Mist and K-Fogger for temperature and humidity control in greenhouses. Whatever the crop or application, our micro and mini sprinkler range delivers the precision and gentleness that sensitive plants and specialty applications demand.',
    ],
    faqs: [
      {
        question: 'What is the difference between K-Mic Excel and K-Tuff micro sprinklers?',
        answer:
          'K-Mic Excel is designed for general overhead irrigation, while K-Tuff adds insect-proof protection and gentler precipitation suited to delicate nursery plants.',
      },
      {
        question: 'Can micro sprinklers be used for frost protection?',
        answer:
          'Yes, our K-Mic Micro Sprinkler is specifically designed for frost protection and overhead cooling.',
      },
      {
        question: 'What is the difference between a micro sprinkler and a mini sprinkler?',
        answer:
          'Micro sprinklers are designed for close-range, gentle coverage suited to nurseries and horticulture, while mini sprinklers offer wider rotating coverage for field crops.',
      },
      {
        question: 'What is a fogger used for in irrigation?',
        answer:
          'Our K-Fogger produces an ultra-fine mist for cooling and humidity control in greenhouses, polyhouses, and nurseries.',
      },
      {
        question: 'What crops are mini sprinklers suitable for?',
        answer:
          'Our Mini Sprinkler is suited to row crops like onion, potato, and garlic, as well as pulses like soybean, wheat, and gram.',
      },
    ],
  },
  'turnkey-projects': {
    slug: 'turnkey-projects',
    overview: [
      'Beyond individual products, we design and deliver complete irrigation infrastructure for projects that require an end-to-end solution from initial planning through installation and support. Our turnkey capabilities bring together our full product range, including drip and sprinkler irrigation systems, filtration, fertigation, and automation, into a single, cohesive system engineered for the specific requirements of each project.',
      'Whether it’s a large-scale agricultural development, a government-backed rural water scheme, or an infrastructure project requiring reliable water distribution at scale, our turnkey projects team manages the complexity of system design and integration, so clients get a fully functional irrigation solution rather than a collection of separate components. With decades of manufacturing experience behind every product we install, our turnkey projects combine engineering expertise with dependable, field-tested equipment.',
    ],
    faqs: [
      {
        question: 'What does a turnkey irrigation project include?',
        answer:
          'A turnkey project includes complete system design, product supply, and installation, covering drip and sprinkler irrigation, filtration, fertigation, and automation as needed.',
      },
      {
        question: 'Are turnkey projects suitable for government or rural water schemes?',
        answer:
          'Yes, our turnkey capabilities support large-scale agricultural developments and rural water infrastructure projects.',
      },
      {
        question: 'Who manages system design for a turnkey project?',
        answer:
          'Our turnkey projects team handles the complexity of system design and integration, delivering a fully functional solution rather than individual components.',
      },
      {
        question: 'Can turnkey projects be customized for specific farm sizes?',
        answer:
          'Yes, our turnkey solutions are engineered around each project’s specific requirements, from small farms to large-scale developments.',
      },
    ],
  },
};

export const segmentPageContentList: SegmentPageContent[] = Object.values(segmentPageContent);