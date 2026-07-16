/**
 * location-content.ts — content for the nine city overview pages.
 *
 * WHY TEMPLATED RATHER THAN PER-CITY: all nine cities sit in Cache Valley, are
 * served by the same Hyde Park office, and share the same climate, the same hard
 * water, and broadly the same housing stock. Writing nine hand-crafted "local
 * expertise" pages would mean inventing differences that do not exist, which is
 * exactly the fake-neighborhood-expertise trap. So the content is written ONCE,
 * honestly, about what a Cache Valley homeowner actually deals with, and the city
 * name is interpolated where it genuinely belongs.
 *
 * These are CITY OVERVIEW pages, not city-service pages. Their job is to confirm
 * we serve the city, show what is available, and route the visitor into the core
 * Hyde Park service pages. They do not duplicate service content.
 *
 * Copy rules: no em dashes, no semicolons, and no claim the business has not
 * verified. Nothing here says local office, local team, or local technicians,
 * because the office is in Hyde Park and saying otherwise would be false.
 */
import type { ContentPoint, FaqItem } from './service-content';

// ───────────────────────────── Hero ─────────────────────────────

export const HERO = {
  eyebrow: 'Based in Hyde Park, Serving Cache Valley',
  /** The page's single H1. */
  heading: (city: string) => `Plumbing Services in ${city}, Utah`,
  lede: (city: string) =>
    `Lee's Plumbing is based in Hyde Park and serves homeowners in ${city} and throughout Cache Valley. We handle plumbing repairs and installations, from a leaking pipe or a water heater that has stopped keeping up to a drain that backs up every few months.`,
  secondaryCtaLabel: 'See Our Services',
  secondaryCtaHref: '#services',
} as const;

// ─────────────────────── Services we offer ───────────────────────

/**
 * A service card on a city page. `highlights` are sub-service slugs, resolved at
 * build time to real names and real /plumbing/... links. Resolving from slugs
 * rather than hardcoding labels means a card can never link to a page that does
 * not exist, and the guard in CityLayout fails the build if a slug here is wrong.
 */
export interface LocationServiceCard {
  /** Category slug from data/services.ts. Drives the hub link. */
  serviceSlug: string;
  intro: (city: string) => string;
  /** Sub-service slugs to list. Each links to its core service page. */
  highlights: string[];
  ctaLabel: string;
}

export const SERVICE_CARDS: LocationServiceCard[] = [
  {
    serviceSlug: 'plumbing',
    intro: (city: string) =>
      `Plumbing is our primary trade. We work on the systems that move water through ${city} homes, from a water heater that has stopped keeping up to a drain that backs up every few months. That covers repairs, replacements, and installations, along with drain and sewer work.`,
    highlights: [
      'water-heater-repair',
      'water-heater-installation',
      'leak-detection',
      'pipe-repair',
      'drain-cleaning',
      'sewer-line-repair',
    ],
    ctaLabel: 'View All Plumbing Services',
  },
];

export const SERVICES_SECTION = {
  heading: (city: string) => `Services We Offer in ${city}`,
  intro:
    'From water heaters and leaks to drains and sewer lines, one call covers your home plumbing. Choose a service to read more about the work.',
} as const;

// ──────────────────── Common problems (SEO core) ────────────────────

/**
 * The primary SEO section. Written about what Cache Valley homeowners actually
 * deal with: hard water, long cold winters, hot dry summers, and aging equipment.
 * Every statement here is true of the valley as a whole, so it is honest on all
 * nine pages. Nothing claims knowledge of a specific street, neighborhood, or
 * local building quirk that has not been verified.
 */
export const PROBLEMS_SECTION = {
  heading: (city: string) => `Common Home Service Problems in ${city}`,
  intro: (city: string) =>
    `Most of the calls we take from ${city} and the surrounding communities fall into a short list of recurring problems. Knowing what they look like early is usually the difference between a repair and a replacement.`,
};

export interface ProblemGroup {
  title: string;
  items: ContentPoint[];
}

export const PROBLEM_GROUPS: ProblemGroup[] = [
  {
    title: 'Plumbing',
    items: [
      {
        title: 'Water heaters losing capacity',
        body: 'Hard water is a fact of life in this valley, and it leaves sediment in the bottom of a tank and scale inside a tankless heat exchanger. The heater works harder for less hot water, which shows up as showers that go cold sooner than they used to.',
      },
      {
        title: 'Leaking and frozen pipes',
        body: 'A pipe in an exterior wall, a crawlspace, or an unheated garage is exposed to a long cold season. Water expands when it freezes, and a line that has been stressed can split or start weeping, sometimes without showing itself until the thaw.',
      },
      {
        title: 'Drains that keep clogging',
        body: 'Kitchen lines fill with grease that goes down warm and hardens further along. Bathroom lines bind hair with soap scum. A drain that clears and then slows again within weeks was never really cleaned, and the buildup is still on the pipe wall.',
      },
      {
        title: 'Sewer line backups',
        body: 'Older homes on original clay or cast iron pipe are working with material that has a finite life. Tree roots find the moisture in a sewer line and grow in through joints, and the line then catches solids and backs up on a schedule.',
      },
      {
        title: 'Fixtures at the end of their life',
        body: 'Running toilets, weak flushes, dripping faucets, and disposals that hum without turning are all common and all repairable. A running toilet in particular wastes a great deal of water quietly, and it usually shows up on the bill before anywhere else.',
      },
    ],
  },
];

// ───────────────────── Areas we serve nearby ─────────────────────

export const NEARBY_SECTION = {
  heading: 'Areas We Serve Nearby',
  intro: (city: string) =>
    `${city} is one of the communities we serve from our Hyde Park office. We cover homeowners throughout Cache Valley, from Richmond in the north down to Wellsville in the south.`,
  headquartersLabel: 'Headquarters',
} as const;

// ───────────────────────────── FAQs ─────────────────────────────

/**
 * Five city-specific FAQs, generated from the city and its real neighbours.
 *
 * Deliberately answers the questions a visitor on a city page actually has:
 * do you come here, where are you actually based, what can you do, and who else
 * do you serve. No response times, no availability promises, and no claim of a
 * local office, because the office is in Hyde Park.
 */
export const FAQ_HEADING = (city: string) => `${city} Service Questions`;

export const cityFaqs = (city: string, nearbyCityNames: string[]): FaqItem[] => {
  const nearbyList =
    nearbyCityNames.length > 0
      ? nearbyCityNames.join(', ').replace(/, ([^,]*)$/, ', and $1')
      : 'the surrounding communities';

  return [
    {
      question: `Does Lee's Plumbing serve ${city}?`,
      answer: `Yes. Lee's Plumbing is based in Hyde Park and provides plumbing services throughout ${city} and other Cache Valley communities.`,
    },
    {
      question: `Are you located in ${city}?`,
      answer: `Our office is in Hyde Park, Utah, and we travel to ${city} and the other communities across the valley. We would rather be straight about that than claim an office we do not have. Being based in the same valley means we are close enough to get to you without a long drive across the county.`,
    },
    {
      question: `What plumbing services are available in ${city}?`,
      answer: `The full range we offer anywhere else: water heater repair and installation, leak detection, pipe repair, toilet and garbage disposal repair, drain cleaning, main line cleaning, sewer line repair, hydro jetting, and sewer camera inspection. Nothing is withheld from one city and offered in another.`,
    },
    {
      question: 'Which nearby communities do you serve?',
      answer: `Along with ${city}, we serve ${nearbyList}, and the other Cache Valley communities around our Hyde Park office. If you are not sure whether we reach you, call and ask.`,
    },
  ];
};

// ─────────────────────────── Final CTA ───────────────────────────

export const FINAL_CTA = {
  heading: (city: string) => `Need a Plumber in ${city}?`,
  body: (city: string) =>
    `Give us a call and tell us what is going on at your ${city} home. We will let you know how we can help.`,
  secondaryLabel: 'See our services',
  secondaryHref: '#services',
} as const;
