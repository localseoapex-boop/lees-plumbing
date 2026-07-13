/**
 * locations.ts — the city catalog (requirements #2, #5).
 *
 * One entry per city served. This drives:
 *   - /locations/[city] pages (one per entry)
 *   - /locations/[city]/[service] pages (entry × its services)
 *   - "Nearby cities" internal links (via `nearby`)
 *
 * `officeId` ties a city to the office that services it (multi-office support).
 * `services` is optional: omit it and the city offers ALL services; set it to a
 * subset when a location only offers some trades. Every Cache Valley city
 * currently offers both trades, but the field is set explicitly so partial
 * coverage stays easy to express later.
 *
 * `nearby` follows real Cache Valley geography, so cities link to their actual
 * neighbours rather than to every other city.
 *
 * Adding a city here automatically generates its city page AND one location-
 * service page per offered service — the core of programmatic scale.
 */
export interface Location {
  /** URL slug, "city-state" pattern, e.g. "hyde-park-ut". */
  slug: string;
  city: string;
  region: string;
  geo: { latitude: number; longitude: number };
  /** Which office (offices.ts) serves this city. */
  officeId: string;
  /** Slugs of nearby cities for internal linking. */
  nearby: string[];
  /** Service slugs offered here. Omit = all services. */
  services?: string[];
}

/** Both trades are offered across the whole service area today. */
const ALL_TRADES = ['plumbing', 'hvac'];

export const locations: Location[] = [
  {
    slug: 'hyde-park-ut',
    city: 'Hyde Park',
    region: 'UT',
    geo: { latitude: 41.7963, longitude: -111.8155 },
    officeId: 'hyde-park',
    nearby: ['north-logan-ut', 'logan-ut', 'smithfield-ut'],
    services: ALL_TRADES,
  },
  {
    slug: 'logan-ut',
    city: 'Logan',
    region: 'UT',
    geo: { latitude: 41.7355, longitude: -111.8344 },
    officeId: 'hyde-park',
    nearby: ['north-logan-ut', 'river-heights-ut', 'providence-ut', 'hyde-park-ut', 'nibley-ut'],
    services: ALL_TRADES,
  },
  {
    slug: 'north-logan-ut',
    city: 'North Logan',
    region: 'UT',
    geo: { latitude: 41.7688, longitude: -111.8064 },
    officeId: 'hyde-park',
    nearby: ['logan-ut', 'hyde-park-ut', 'smithfield-ut', 'river-heights-ut'],
    services: ALL_TRADES,
  },
  {
    slug: 'smithfield-ut',
    city: 'Smithfield',
    region: 'UT',
    geo: { latitude: 41.8383, longitude: -111.8299 },
    officeId: 'hyde-park',
    nearby: ['hyde-park-ut', 'north-logan-ut', 'richmond-ut'],
    services: ALL_TRADES,
  },
  {
    slug: 'providence-ut',
    city: 'Providence',
    region: 'UT',
    geo: { latitude: 41.7069, longitude: -111.8175 },
    officeId: 'hyde-park',
    nearby: ['logan-ut', 'river-heights-ut', 'nibley-ut', 'hyrum-ut'],
    services: ALL_TRADES,
  },
  {
    slug: 'hyrum-ut',
    city: 'Hyrum',
    region: 'UT',
    geo: { latitude: 41.6335, longitude: -111.8524 },
    officeId: 'hyde-park',
    nearby: ['nibley-ut', 'providence-ut', 'wellsville-ut'],
    services: ALL_TRADES,
  },
  {
    slug: 'nibley-ut',
    city: 'Nibley',
    region: 'UT',
    geo: { latitude: 41.6752, longitude: -111.8383 },
    officeId: 'hyde-park',
    nearby: ['logan-ut', 'providence-ut', 'hyrum-ut', 'wellsville-ut'],
    services: ALL_TRADES,
  },
  {
    slug: 'river-heights-ut',
    city: 'River Heights',
    region: 'UT',
    geo: { latitude: 41.7183, longitude: -111.8213 },
    officeId: 'hyde-park',
    nearby: ['logan-ut', 'north-logan-ut', 'providence-ut'],
    services: ALL_TRADES,
  },
  {
    slug: 'wellsville-ut',
    city: 'Wellsville',
    region: 'UT',
    geo: { latitude: 41.6383, longitude: -111.9327 },
    officeId: 'hyde-park',
    nearby: ['nibley-ut', 'hyrum-ut', 'logan-ut'],
    services: ALL_TRADES,
  },
  {
    slug: 'richmond-ut',
    city: 'Richmond',
    region: 'UT',
    geo: { latitude: 41.9224, longitude: -111.8138 },
    officeId: 'hyde-park',
    nearby: ['smithfield-ut', 'hyde-park-ut', 'north-logan-ut'],
    services: ALL_TRADES,
  },
];

export const getLocation = (slug: string): Location | undefined =>
  locations.find((l) => l.slug === slug);
