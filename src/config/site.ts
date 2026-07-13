/**
 * Central site configuration — brand-level settings and navigation.
 *
 * Per-office NAP/hours live in src/data/offices.ts (multi-office support).
 * BUSINESS below is derived from the PRIMARY office plus org-level fields, so
 * existing references (BUSINESS.phone, BUSINESS.address, ...) keep working with
 * zero duplicated data.
 */
import { primaryOffice } from '../data/offices';
import { locations } from '../data/locations';

export const SITE = {
  /** Must match `site` in astro.config.mjs. Used to build absolute/canonical URLs. */
  url: 'https://lees-plumbing-eosin.vercel.app',
  /** Brand / business name, reused in titles, schema, and footer. */
  name: "Lee's Plumbing",
  /** Short tagline used as the default meta description fallback. */
  description:
    'Trusted plumbing, heating, and cooling services in Hyde Park and communities across Cache Valley, Utah.',
  /** Default social share image (lives in /public). */
  defaultOgImage: '/og-default.png',
  /** Default language for the <html lang> attribute. */
  locale: 'en',
} as const;

/**
 * Mailing-only address. Deliberately kept SEPARATE from the office address in
 * offices.ts: a P.O. Box must never be used as the physical business location in
 * LocalBusiness schema or local listings. Footer-only.
 */
export const MAILING_ADDRESS = {
  street: 'P.O. Box 250',
  city: 'Hyde Park',
  region: 'UT',
  postalCode: '84318',
} as const;

/**
 * Org-level business defaults, derived from the primary office. Used for the
 * site-wide NAP shortcuts (nav CTA, service-page provider, etc.). For
 * per-office data (footer, schema) iterate `offices` from src/data/offices.ts.
 */
export const BUSINESS = {
  legalName: primaryOffice.legalName,
  type: primaryOffice.type,
  priceRange: primaryOffice.priceRange,
  phone: primaryOffice.phone,
  phoneDisplay: primaryOffice.phoneDisplay,
  email: primaryOffice.email,
  address: primaryOffice.address,
  geo: primaryOffice.geo,
  openingHours: primaryOffice.hours,
  /** All cities served, derived from locations.ts so the list can never drift. */
  areaServed: locations.map((l) => l.city),
} as const;

/** Primary navigation links rendered in the header. */
export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Plumbing', href: '/services/plumbing' },
  { label: 'Heating & Cooling', href: '/services/hvac' },
  { label: 'Service Areas', href: '/locations' },
  { label: 'Blog', href: '/blog' },
] as const;

/** Footer link groups. */
export const FOOTER_LINKS = [
  {
    title: 'Services',
    links: [
      { label: 'Plumbing', href: '/services/plumbing' },
      { label: 'Heating & Cooling', href: '/services/hvac' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Service Areas', href: '/locations' },
      { label: 'Blog', href: '/blog' },
    ],
  },
] as const;
