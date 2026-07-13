/**
 * subservices.ts — individual services offered under each core category (req #1, #2).
 *
 * Each sub-service belongs to ONE parent category (a slug from services.ts) and
 * drives two page tiers:
 *   - /services/[category]/[subservice]            (parent sub-service page)
 *   - /locations/[city]/[category]/[subservice]    (location sub-service page)
 *
 * Availability rule (req #9): a sub-service is offered in a city iff that city
 * offers its PARENT category (see locations.ts `services` + lib/links). So we
 * never store per-city sub-service flags — coverage is inherited from the
 * category, which keeps the model small and impossible to get inconsistent.
 *
 * Every row's `parent` must be a live category slug: 'plumbing' or 'hvac'.
 * Drain and sewer work sits UNDER plumbing rather than in its own category.
 *
 * Adding a row here automatically generates its pages and links — no new files.
 */
export interface SubService {
  slug: string;
  name: string;
  /** Parent category slug from services.ts ('plumbing' or 'hvac'). */
  parent: string;
  /** One-line hero subhead. */
  tagline: string;
  /** Meta-description base (~150–160 chars). */
  description: string;
  /** Opening body paragraph. */
  intro: string;
  /** Bulleted "what's included" list. */
  features: string[];
}

export const subServices: SubService[] = [
  // ─────────────────────── Plumbing: fixtures & supply ───────────────────────
  {
    slug: 'water-heater-repair',
    name: 'Water Heater Repair',
    parent: 'plumbing',
    tagline: 'Repairs for tank and tankless water heaters.',
    description:
      'Water heater repair for no hot water, leaks, pilot problems, and discolored water, on both tank and tankless systems.',
    intro:
      'When a water heater stops keeping up, we diagnose the real cause and repair tank and tankless units.',
    features: [
      'No hot water diagnosis',
      'Thermostat and element repair',
      'Pilot and ignition repair',
      'Leak assessment',
    ],
  },
  {
    slug: 'water-heater-installation',
    name: 'Water Heater Installation',
    parent: 'plumbing',
    tagline: 'New water heater installation and replacement.',
    description:
      'Water heater installation and replacement, tank and tankless, sized for your home and installed to code.',
    intro:
      'Whether you want a standard tank or an on demand tankless unit, we help size it and install it for reliable hot water.',
    features: [
      'Tank and tankless options',
      'Proper sizing',
      'Old unit removal',
      'Code compliant install',
    ],
  },
  {
    slug: 'leak-detection',
    name: 'Leak Detection',
    parent: 'plumbing',
    tagline: 'Find hidden leaks before they cause damage.',
    description:
      'Leak detection to locate hidden water leaks in walls, slabs, and supply lines before they cause damage.',
    intro:
      'A hidden leak wastes water and damages your home from the inside. We work to pinpoint the source with as little disruption as possible.',
    features: [
      'Slab leak location',
      'Acoustic and camera tools',
      'Pressure testing',
      'Minimal damage access',
    ],
  },
  {
    slug: 'pipe-repair',
    name: 'Pipe Repair',
    parent: 'plumbing',
    tagline: 'Burst, leaking, and corroded pipe repair.',
    description:
      'Pipe repair and repiping for burst, leaking, corroded, or noisy pipes, including copper, PEX, and galvanized lines.',
    intro:
      'From a single burst pipe to whole home repiping, we make durable repairs that stop leaks at the source.',
    features: [
      'Burst pipe repair',
      'Repiping',
      'Corroded line replacement',
      'Water pressure problems',
    ],
  },
  {
    slug: 'toilet-repair',
    name: 'Toilet Repair',
    parent: 'plumbing',
    tagline: 'Running, leaking, or weak flushing toilet repair.',
    description:
      'Toilet repair and replacement for running, leaking, weak flushing, or frequently clogging toilets.',
    intro:
      'A running or leaking toilet wastes hundreds of gallons. We fix the cause and can replace worn units when repair is not worth it.',
    features: [
      'Running toilet repair',
      'Flapper and fill valve service',
      'Wax ring and leak repair',
      'Toilet replacement',
    ],
  },
  {
    slug: 'garbage-disposal-repair',
    name: 'Garbage Disposal Repair',
    parent: 'plumbing',
    tagline: 'Jammed or leaking disposal repair.',
    description:
      'Garbage disposal repair and replacement for jammed, humming, leaking, or dead units.',
    intro:
      'A humming or leaking disposal is often a straightforward fix. We repair or replace the unit and check the drain connection.',
    features: [
      'Jam clearing',
      'Motor and reset diagnosis',
      'Leak repair',
      'Full replacement',
    ],
  },

  // ─────────────────── Plumbing: drains & sewer (moved under plumbing) ───────
  {
    slug: 'drain-cleaning',
    name: 'Drain Cleaning',
    parent: 'plumbing',
    tagline: 'Clear clogs in sinks, tubs, and showers.',
    description:
      'Drain cleaning for slow and clogged kitchen, bathroom, and laundry drains.',
    intro:
      'Slow or clogged drains rarely fix themselves. We clear the blockage and look at why it happened.',
    features: [
      'Kitchen and bath drains',
      'Snaking and augering',
      'Grease and buildup removal',
      'Recurring clog diagnosis',
    ],
  },
  {
    slug: 'sewer-line-repair',
    name: 'Sewer Line Repair',
    parent: 'plumbing',
    tagline: 'Repair for broken and root damaged sewer lines.',
    description:
      'Sewer line repair and replacement for breaks, root intrusion, bellies, and recurring backups.',
    intro:
      'A failing sewer line causes backups and yard damage. We locate the problem and repair or replace the line.',
    features: [
      'Root intrusion repair',
      'Broken and collapsed lines',
      'Line replacement',
      'Backup resolution',
    ],
  },
  {
    slug: 'sewer-camera-inspection',
    name: 'Sewer Camera Inspection',
    parent: 'plumbing',
    tagline: 'See exactly what is happening inside your pipes.',
    description:
      'Sewer camera inspection to pinpoint clogs, cracks, root intrusion, and pipe condition before you buy or dig.',
    intro:
      'A camera inspection shows the location and cause of a problem inside your pipes instead of guessing at it.',
    features: [
      'Real time video',
      'Clog and damage location',
      'Pre purchase inspections',
      'Pipe condition assessment',
    ],
  },
  {
    slug: 'hydro-jetting',
    name: 'Hydro Jetting',
    parent: 'plumbing',
    tagline: 'High pressure cleaning for stubborn buildup.',
    description:
      'Hydro jetting clears grease, scale, and roots from drain and sewer lines for a more complete clean than snaking alone.',
    intro:
      'When snaking is not enough, hydro jetting scours the pipe walls with high pressure water for a longer lasting result.',
    features: [
      'Grease and scale removal',
      'Root cutting',
      'Full diameter cleaning',
      'Preventive maintenance',
    ],
  },
  {
    slug: 'clogged-toilet',
    name: 'Clogged Toilet',
    parent: 'plumbing',
    tagline: 'Stubborn toilet clogs cleared.',
    description:
      'Clogged toilet service for blockages that will not plunge, recurring clogs, and objects stuck in the trap or line.',
    intro:
      'Some toilet clogs need more than a plunger. We clear the blockage and check for deeper line issues.',
    features: [
      'Deep clog removal',
      'Auger and snake service',
      'Stuck object retrieval',
      'Recurring clog diagnosis',
    ],
  },
  {
    slug: 'main-line-cleaning',
    name: 'Main Line Cleaning',
    parent: 'plumbing',
    tagline: 'Clear the main line that serves your home.',
    description:
      'Main sewer line cleaning to clear whole home backups caused by grease, roots, and debris in the main line.',
    intro:
      'When several drains back up at once, the main line is usually the cause. We clear it and confirm flow.',
    features: [
      'Whole home backup repair',
      'Main line snaking',
      'Cleanout access',
      'Camera verification',
    ],
  },

  // ────────────────────────── Heating & Cooling ──────────────────────────────
  {
    slug: 'ac-repair',
    name: 'AC Repair',
    parent: 'hvac',
    tagline: 'Air conditioning repair when your system stops cooling.',
    description:
      'AC repair for warm air, leaks, unusual noises, and system breakdowns.',
    intro:
      'When your air conditioner stops keeping up, we diagnose the fault and repair the system.',
    features: [
      'Refrigerant leak repair',
      'Compressor and capacitor service',
      'Thermostat troubleshooting',
      'No cool diagnostics',
    ],
  },
  {
    slug: 'ac-installation',
    name: 'AC Installation',
    parent: 'hvac',
    tagline: 'New air conditioner installation and replacement.',
    description:
      'Air conditioner installation and replacement, properly sized for your home with efficient, reliable equipment.',
    intro:
      'A correctly sized and installed air conditioner runs more efficiently and lasts longer. We help you choose the right system and install it cleanly.',
    features: [
      'Load calculation and sizing',
      'High efficiency systems',
      'Old unit removal',
      'Clean, code compliant install',
    ],
  },
  {
    slug: 'furnace-repair',
    name: 'Furnace Repair',
    parent: 'hvac',
    tagline: 'Heating repair to keep your home warm.',
    description:
      'Furnace repair for no heat, short cycling, pilot and ignition problems, and noisy operation.',
    intro:
      'A furnace that cannot keep up is more than uncomfortable. We find the fault and get the heat back on.',
    features: [
      'Ignition and pilot repair',
      'Blower motor service',
      'Short cycling diagnosis',
      'Safety inspection',
    ],
  },
  {
    slug: 'furnace-installation',
    name: 'Furnace Installation',
    parent: 'hvac',
    tagline: 'Furnace installation and replacement.',
    description:
      'Furnace installation and replacement with properly sized, energy efficient units and a clean, code compliant setup.',
    intro:
      'Replacing an aging furnace can lower energy use and reduce breakdowns. We size, install, and test it for safe, even heat.',
    features: [
      'Right sized selection',
      'High efficiency models',
      'Old furnace removal',
      'Combustion safety testing',
    ],
  },
  {
    slug: 'heat-pump-services',
    name: 'Heat Pump Services',
    parent: 'hvac',
    tagline: 'Heat pump repair, installation, and tune ups.',
    description:
      'Heat pump repair, replacement, and maintenance for efficient year round heating and cooling.',
    intro:
      'Heat pumps heat and cool with one efficient system. We install, repair, and maintain them for reliable performance.',
    features: [
      'Repair and replacement',
      'Defrost cycle service',
      'Refrigerant checks',
      'Efficiency tune ups',
    ],
  },
  {
    slug: 'hvac-maintenance',
    name: 'Heating & Cooling Maintenance',
    parent: 'hvac',
    tagline: 'Tune ups that help prevent breakdowns.',
    description:
      'Seasonal heating and cooling maintenance to improve efficiency, extend equipment life, and catch problems early.',
    intro:
      'Many breakdowns are preventable. Regular maintenance keeps a system efficient and surfaces small issues before they grow.',
    features: [
      'Filter and coil cleaning',
      'Refrigerant and airflow checks',
      'Electrical connection inspection',
      'Seasonal tune ups',
    ],
  },
];

export const getSubService = (parent: string, slug: string): SubService | undefined =>
  subServices.find((s) => s.parent === parent && s.slug === slug);
