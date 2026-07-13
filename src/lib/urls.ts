/**
 * urls.ts — canonical URL builders. The ONLY place routes are constructed.
 *
 * Centralizing this means the routing scheme is defined once. Every internal
 * link, breadcrumb, canonical, schema URL, and sitemap entry is built from these
 * functions, so the launch architecture cannot drift between them.
 *
 * FINAL LAUNCH ARCHITECTURE:
 *   /                        homepage (targets Hyde Park)
 *   /plumbing/               plumbing hub
 *   /plumbing/[sub]/         plumbing sub-services
 *   /heating-cooling/        heating and cooling hub
 *   /heating-cooling/[sub]/  heating and cooling sub-services
 *   /locations/              service-areas index
 *   /locations/[city]/       the nine non-HQ Cache Valley cities
 *   /blog/, /blog/[slug]/
 *
 * Service hubs live at the ROOT rather than under /services/, because /plumbing/
 * is the shortest honest expression of the page's intent.
 *
 * There are deliberately NO builders for location-service or location-sub-service
 * routes. Those tiers were removed at launch, and leaving a builder behind would
 * be an invitation to regenerate them.
 */
import { SITE } from '../config/site';
import { getService } from '../data/services';

/**
 * Map a service SLUG ('hvac') to its URL SEGMENT ('heating-cooling').
 *
 * Throws rather than silently emitting "/undefined/", which would ship a broken
 * link and leave the link scan to catch it downstream.
 */
const routeSegment = (serviceSlug: string): string => {
  const service = getService(serviceSlug);
  if (!service) {
    throw new Error(`urls.ts: unknown service slug "${serviceSlug}" — cannot build a route.`);
  }
  return service.routeSegment;
};

/** /plumbing or /heating-cooling — the category hub. */
export const serviceUrl = (serviceSlug: string): string => `/${routeSegment(serviceSlug)}`;

/** /plumbing/water-heater-repair — a core sub-service page. */
export const subServiceUrl = (serviceSlug: string, subSlug: string): string =>
  `/${routeSegment(serviceSlug)}/${subSlug}`;

/** /locations/logan-ut — a city page. Only the nine non-HQ cities have one. */
export const cityUrl = (citySlug: string): string => `/locations/${citySlug}`;

/** The service-areas index. */
export const LOCATIONS_URL = '/locations';

/** Build an absolute URL from a path, using the configured site origin. */
export const absoluteUrl = (path: string): string => new URL(path, SITE.url).href;
