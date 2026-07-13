/**
 * homepage.ts — ALL homepage copy and content selection, in one file.
 *
 * This is the swap point for the homepage framework. The components under
 * src/components/homepage/ are generic and prop-driven: they know how to render
 * a hero, a service section, a review, and so on, but they hold no business
 * copy of their own. To stand up the homepage for a different trade or a
 * different business, you edit THIS file (plus the data files it references)
 * and touch no markup at all.
 *
 * Service and location content is NOT duplicated here. Featured services are
 * referenced by slug and resolved against data/services.ts +
 * data/subservices.ts at build time, so the homepage can never drift out of
 * sync with the service architecture or link to a page that doesn't exist.
 *
 * Copy rules for this file: no em dashes, no semicolons, no unverified claims
 * (no years in business, award counts, guarantees, or response times).
 */

/** A featured service card, referenced by the slugs it links to. */
export interface FeaturedItem {
  /** Sub-service slug from data/subservices.ts. */
  slug: string;
  /** Optional copy override. Defaults to the sub-service's own tagline. */
  blurb?: string;
}

export interface ServiceSectionContent {
  /** Parent category slug from data/services.ts. */
  serviceSlug: string;
  heading: string;
  intro: string;
  ctaLabel: string;
  /** Sub-services to surface as cards. Resolved at build time. */
  featured: FeaturedItem[];
}

export const HERO = {
  eyebrow: 'Based in Hyde Park • Serving Cache Valley',
  /** The single H1 for the site's most important page. */
  heading: 'Plumbing and HVAC Services in Hyde Park, Utah',
  body: "Lee's Plumbing is a Hyde Park based company serving homeowners throughout Cache Valley. We handle plumbing repairs and installations along with heating and cooling work, from a leaking pipe or water heater to a furnace or air conditioner that has stopped keeping up.",
  /**
   * Scheduling CTA. `href: null` means "no scheduling destination exists yet",
   * and the page falls back to the business phone from config/site.ts. Once a
   * real contact or booking page exists, set href to its path (and restore a
   * label like "Schedule Service") and the fallback stops applying. The number
   * is never hardcoded here.
   */
  primaryCta: { label: 'Call to Schedule', href: null as string | null },
  /** The phone CTA label is built from office data at render time. */
  secondaryCtaPrefix: 'Call',
  /**
   * Hero image. No artwork ships yet: when `src` is null the hero renders a
   * branded CSS/SVG treatment instead. The slot reserves its aspect ratio
   * either way, so dropping a real photo in later cannot shift the layout.
   */
  media: {
    src: null as string | null,
    alt: '',
    /** Small caps line shown under the wordmark in the branded fallback. */
    fallbackTagline: 'Plumbing • Heating & Cooling',
  },
} as const;

/** Compact strip under the hero. Four items, factual only. */
export const TRUST_STRIP = [
  { label: 'Based in Hyde Park', detail: 'A local company, not a franchise' },
  { label: 'Serving Cache Valley', detail: 'Ten communities across the valley' },
  { label: 'Plumbing & HVAC', detail: 'Two trades, one phone call' },
  { label: 'Quality Workmanship', detail: 'Work done properly the first time' },
] as const;

/**
 * PRIMARY trade. Rendered with visual emphasis (see ServiceSection `emphasis`).
 * Plumbing leads the page because it is the company's primary trade.
 */
export const PLUMBING_SECTION: ServiceSectionContent = {
  serviceSlug: 'plumbing',
  heading: 'Plumbing Services',
  intro:
    'Plumbing is what we do first and what we do most. We repair and install the systems that move water through your home, and we work on both the everyday problems and the ones hiding behind a wall.',
  ctaLabel: 'View All Plumbing Services',
  featured: [
    { slug: 'water-heater-repair' },
    { slug: 'leak-detection' },
    { slug: 'pipe-repair' },
    { slug: 'drain-cleaning' },
    { slug: 'water-heater-installation' },
    { slug: 'sewer-line-repair' },
  ],
};

/** SECONDARY trade. Same visual language, lighter emphasis. */
export const HVAC_SECTION: ServiceSectionContent = {
  serviceSlug: 'hvac',
  heading: 'Heating & Cooling Services',
  intro:
    'Cache Valley asks a lot of a heating and cooling system. We service furnaces, air conditioners, and heat pumps, and we install replacement equipment when a system has reached the end of its life.',
  ctaLabel: 'View All Heating & Cooling Services',
  featured: [
    { slug: 'furnace-repair' },
    { slug: 'ac-repair' },
    { slug: 'heat-pump-services' },
    { slug: 'hvac-maintenance' },
  ],
};

/**
 * Compact trust section between the two trades. This is NOT the About section.
 * It exists to break up the page and build confidence before HVAC is
 * introduced. Keep it to four short cards.
 */
export const WHY_US = {
  heading: "Why Homeowners Choose Lee's Plumbing",
  intro: 'A local company that answers the phone and does the work properly.',
  cards: [
    {
      title: 'Locally Based',
      body: 'Our office is in Hyde Park. We live and work in the same valley as the homes we service.',
    },
    {
      title: 'Serving Cache Valley',
      body: 'From Richmond down to Wellsville, we cover the communities across Cache Valley.',
    },
    {
      title: 'Dependable Service',
      body: 'We diagnose the actual problem, explain what we found, and do the work you agreed to.',
    },
    {
      title: 'Quality Workmanship',
      body: 'Plumbing and heating work is done to code and built to hold up over time.',
    },
  ],
} as const;

/**
 * REVIEWS. No review content ships until real reviews exist.
 *
 * While `isPlaceholder` is true the section renders ONLY its heading plus a
 * short "coming soon" line. No invented names, quotes, star ratings, or source
 * labels are rendered, so nothing on the page can be mistaken for a real
 * testimonial. The full review-card design stays intact in ReviewsSection and
 * switches on automatically once you set `isPlaceholder: false` and supply real
 * entries in `items` (each needs quote, author, rating, source, optional
 * location).
 *
 * No Review or AggregateRating schema is emitted either way.
 */
export interface Review {
  quote: string;
  author: string;
  location?: string;
  /** Stars out of 5. */
  rating: number;
  /** Where the review came from, e.g. "Google". */
  source: string;
}

export const REVIEWS = {
  heading: 'What Homeowners Say',
  intro: 'Reviews from customers across Cache Valley.',
  isPlaceholder: true,
  /** Shown in place of the cards while isPlaceholder is true. */
  emptyMessage: 'Customer reviews will be added here soon.',
  ctaLabel: 'Read More Reviews',
  /** Point this at a real Google review profile when one is available. */
  ctaHref: null as string | null,
  items: [] as Review[],
} as const;

export const ABOUT = {
  heading: "About Lee's Plumbing",
  /** Kept short on purpose. Company history goes here when it is confirmed. */
  paragraphs: [
    "Lee's Plumbing is a home service company based in Hyde Park, Utah. We work on the plumbing and the heating and cooling systems that Cache Valley homeowners depend on every day.",
    'Being local matters in this trade. We know the housing stock in these communities, we know how the winters treat a furnace, and we are close enough to get to you without a long drive across the valley.',
  ],
  /** Factual, verifiable points only. */
  highlights: [
    'Office in Hyde Park, Utah',
    'Serving ten Cache Valley communities',
    'Plumbing plus heating and cooling',
  ],
  ctaLabel: 'See Our Service Areas',
  ctaHref: '/locations',
} as const;

export const SERVICE_AREAS = {
  heading: 'Proudly Serving Cache Valley',
  intro:
    'Our office is in Hyde Park and we serve homeowners throughout the surrounding communities. Choose your city to see the plumbing and heating and cooling services we offer there.',
  /** Slug of the city that is the physical HQ. Highlighted in the grid. */
  headquartersSlug: 'hyde-park-ut',
  headquartersLabel: 'Headquarters',
} as const;

export const FINAL_CTA = {
  heading: 'Need a Plumber or HVAC Technician in Cache Valley?',
  body: 'Give us a call and tell us what is going on with your home. We will let you know how we can help.',
  ctaPrefix: 'Call',
} as const;
