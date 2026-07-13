/**
 * links.ts — internal-linking helpers.
 *
 * Keeping this logic out of the templates means every page links consistently
 * and the rules live in one testable place.
 *
 * LAUNCH RULE, enforced here: any helper that returns a list of cities to LINK
 * to returns only cities that actually have a page. Hyde Park is the HQ and has
 * no /locations/ page (see data/locations.ts), so it can never appear in a link
 * list built from these functions. It is still served, still in the schema, and
 * still targeted directly by the homepage and the core service pages. It simply
 * is not a link destination.
 */
import { services, getService, allServiceSlugs, type Service } from '../data/services';
import { cityLocations, getLocation, type Location } from '../data/locations';
import { subServices, type SubService } from '../data/subservices';

/** The service slugs a given location offers (defaults to all). */
export const serviceSlugsFor = (loc: Location): string[] => loc.services ?? allServiceSlugs;

/** Is a specific service offered in a specific location? */
export const isServiceAvailable = (loc: Location, serviceSlug: string): boolean =>
  serviceSlugsFor(loc).includes(serviceSlug);

/** Full Service objects offered in a location, in catalog order. */
export const servicesForLocation = (loc: Location): Service[] =>
  serviceSlugsFor(loc)
    .map(getService)
    .filter((s): s is Service => Boolean(s));

/**
 * Related services for cross-linking. Prefers the curated `related` list, then
 * backfills with other catalog services so the block is never sparse.
 */
export const relatedServices = (serviceSlug: string, limit = 4): Service[] => {
  const svc = getService(serviceSlug);
  const curated = (svc?.related ?? []).map(getService).filter((s): s is Service => Boolean(s));
  if (curated.length >= limit) return curated.slice(0, limit);
  const backfill = services.filter(
    (s) => s.slug !== serviceSlug && !curated.some((c) => c.slug === s.slug),
  );
  return [...curated, ...backfill].slice(0, limit);
};

/**
 * Cities to LINK to from a service or sub-service page's service-area section.
 *
 * Built from `cityLocations`, so the HQ city is excluded by construction and a
 * service page can never link to a city page that does not exist.
 */
export const linkableCitiesForService = (serviceSlug: string, limit?: number): Location[] => {
  const result = cityLocations.filter((l) => isServiceAvailable(l, serviceSlug));
  return limit ? result.slice(0, limit) : result;
};

/**
 * Nearby cities for a location. Filtered against `cityLocations`, so a city
 * whose `nearby` list names Hyde Park (most do, it is central) does not produce
 * a link to a page that is not generated.
 */
export const nearbyCities = (citySlug: string, limit = 4): Location[] => {
  const loc = getLocation(citySlug);
  return (loc?.nearby ?? [])
    .map((slug) => cityLocations.find((c) => c.slug === slug))
    .filter((l): l is Location => Boolean(l))
    .slice(0, limit);
};

/**
 * Sub-services belonging to a category, in catalog order. Returns an empty array
 * for a category with no sub-services, so callers can render unconditionally.
 */
export const subServicesForCategory = (categorySlug: string): SubService[] =>
  subServices.filter((s) => s.parent === categorySlug);
