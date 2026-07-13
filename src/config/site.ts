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

export interface NavLink {
  label: string;
  href: string;
}

/**
 * A top-level nav entry: either a plain link, or a group that opens a dropdown.
 * A group has no href of its own. "About Us" is a menu, not a destination, and
 * giving it a link as well as a submenu is the classic way to build a nav item
 * that is impossible to operate by keyboard.
 */
export type NavItem = NavLink | { label: string; children: readonly NavLink[] };

export const isNavGroup = (item: NavItem): item is { label: string; children: readonly NavLink[] } =>
  'children' in item;

/**
 * Primary navigation.
 *
 * The merger page is reachable from the About Us dropdown and from nowhere else
 * in the site chrome. That single dropdown item is the ONLY place the Any Hour
 * name is allowed to appear outside the merger page itself (see config/merger.ts).
 *
 * Blog is no longer a top-level item. It is still linked from the footer, so the
 * blog index and its posts keep an internal link and do not become orphans.
 */
export const NAV_LINKS: readonly NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Plumbing', href: '/plumbing' },
  { label: 'Heating & Cooling', href: '/heating-cooling' },
  { label: 'Service Areas', href: '/locations' },
  {
    label: 'About Us',
    children: [
      { label: "About Lee's Plumbing", href: '/about' },
      { label: "Lee's Plumbing Now Any Hour Services", href: '/lees-plumbing-now-any-hour-services' },
    ],
  },
  { label: 'Offers', href: '/offers' },
  { label: 'Contact Us', href: '/contact-us' },
] as const;

/**
 * Footer link groups.
 *
 * The merger page is deliberately ABSENT. It is a campaign landing page, not a
 * piece of site furniture, and putting it in the footer would sitewide-link the
 * Any Hour name onto all 38 pages, which is exactly what the isolation rule
 * exists to prevent.
 */
export const FOOTER_LINKS = [
  {
    title: 'Services',
    links: [
      { label: 'Plumbing', href: '/plumbing' },
      { label: 'Heating & Cooling', href: '/heating-cooling' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: "About Lee's Plumbing", href: '/about' },
      { label: 'Offers', href: '/offers' },
      { label: 'Contact Us', href: '/contact-us' },
      { label: 'Service Areas', href: '/locations' },
      { label: 'Blog', href: '/blog' },
    ],
  },
] as const;
