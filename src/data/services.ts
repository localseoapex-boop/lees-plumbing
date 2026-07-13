/**
 * services.ts — the service catalog (requirement #6: content model).
 *
 * One entry per service line. This drives:
 *   - /services/[service] pages (one per entry)
 *   - /locations/[city]/[service] pages (entry × location)
 *   - "Related services" internal links
 *
 * `related` holds sibling slugs for cross-linking; `schemaType` is the closest
 * schema.org business type if you later emit per-service LocalBusiness nodes.
 * Adding a service here automatically generates its pages — no new files.
 *
 * Order matters: plumbing is the primary trade and is listed first, so it leads
 * every generated list of services.
 */
export interface Service {
  slug: string;
  name: string;
  /** Closest schema.org business type for this trade. */
  schemaType: string;
  /** One-line hero subhead. */
  tagline: string;
  /** Meta-description base (kept under ~160 chars). */
  description: string;
  /** Opening body paragraph. */
  intro: string;
  /** Bulleted "what we do" list. */
  features: string[];
  /** Slugs of related services for internal linking. */
  related: string[];
}

export const services: Service[] = [
  {
    slug: 'plumbing',
    name: 'Plumbing',
    schemaType: 'Plumber',
    tagline: 'Dependable plumbing repair, installation, and maintenance.',
    description:
      'Plumbing services for leaks, water heaters, pipes, fixtures, drains, and other common home plumbing needs.',
    intro:
      "Lee's Plumbing helps homeowners across Cache Valley with dependable plumbing repairs, replacements, and installations.",
    features: [
      'Leak and pipe repair',
      'Water heater service',
      'Fixture and faucet service',
      'Drain and sewer solutions',
      'Plumbing replacements and installations',
    ],
    related: ['hvac'],
  },
  {
    slug: 'hvac',
    name: 'Heating & Cooling',
    schemaType: 'HVACBusiness',
    tagline: 'Heating and cooling services for year-round home comfort.',
    description:
      'Heating and cooling repair, replacement, installation, and maintenance for homes across Cache Valley.',
    intro:
      "Lee's Plumbing provides heating and cooling services for furnaces, air conditioners, heat pumps, and other home comfort systems.",
    features: [
      'Air conditioning service',
      'Furnace service',
      'Heat pump service',
      'Equipment installation and replacement',
      'Seasonal maintenance',
    ],
    related: ['plumbing'],
  },
];

export const getService = (slug: string): Service | undefined =>
  services.find((s) => s.slug === slug);

/** All service slugs — used as the default service set for a location. */
export const allServiceSlugs = services.map((s) => s.slug);
