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
 */
export interface Service {
  /** Stable identifier used everywhere in the data model. NOT the URL. */
  slug: string;
  /**
   * The top-level URL segment this category lives at, e.g. 'plumbing'.
   *
   * Deliberately kept separate from `slug` so a category's public route can read
   * well without a rename cascading through the whole data model: `slug` is the
   * internal key that subservices.ts `parent`, links.ts, and service-content.ts
   * are all keyed on, while `routeSegment` is what a homeowner sees in the URL.
   *
   * lib/urls.ts is the only place that reads this. Add a service here and its
   * route follows automatically.
   */
  routeSegment: string;
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
    routeSegment: 'plumbing',
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
    related: [],
  },
];

export const getService = (slug: string): Service | undefined =>
  services.find((s) => s.slug === slug);

/** All service slugs — used as the default service set for a location. */
export const allServiceSlugs = services.map((s) => s.slug);
