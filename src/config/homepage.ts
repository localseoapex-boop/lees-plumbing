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
  heading: 'Plumbing Services in Hyde Park, Utah',
  body: "Lee's Plumbing is a Hyde Park based company serving homeowners throughout Cache Valley. We handle plumbing repairs and installations, from a leaking pipe or a water heater that has stopped keeping up to a drain that backs up every few months.",
  /**
   * PRIMARY action: send a request. Points at the contact page, which now
   * exists. Previously this fell back to the phone because no such page had been
   * built, which left the hero offering two buttons that dialled the SAME
   * number: a choice that was not a choice. The label says "Schedule" and the
   * destination schedules, so the button keeps its promise.
   *
   * The phone lives on the SECONDARY action, giving the hero two genuinely
   * different speeds: call now if it is urgent, send a request if it is not.
   */
  primaryCta: { label: 'Schedule Service', href: '/contact-us' as string | null },
  /** The phone CTA label is built from office data at render time. */
  secondaryCtaPrefix: 'Call',
  /**
   * The hero background image is NOT configured here. Copy lives in this file,
   * assets live in config/images.ts (HOMEPAGE_IMAGES), and the page wires the
   * two together. That separation is what lets a new business swap its
   * photography without touching a line of copy, and vice versa.
   */
} as const;

/** Compact strip under the hero. Four items, factual only. */
export const TRUST_STRIP = [
  { label: 'Based in Hyde Park', detail: 'A local company, not a franchise' },
  { label: 'Serving Cache Valley', detail: 'Ten communities across the valley' },
  { label: 'Repairs & Installations', detail: 'Water heaters, pipes, drains, and sewers' },
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

/**
 * Compact trust section below the plumbing services. This is NOT the About
 * section. It exists to break up the page and build confidence. Keep it to four
 * short cards.
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
      body: 'Plumbing work is done to code and built to hold up over time.',
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
  /**
   * LIVE. These are three real, verified Google reviews, reproduced verbatim.
   *
   * The excerpts are stored WITHOUT their enclosing curly quotation marks: the
   * words are exactly as the customers wrote them, and <blockquote> is what marks
   * the text as a quotation, so baking delimiters into the data would double up
   * if the design ever adds a quote glyph.
   *
   * No dates. The source gave relative ones ("9 months ago"), and a hardcoded
   * relative date is a string that silently rots: it is wrong within weeks and a
   * lie within a year. No locations either, because none were supplied and
   * inventing them would be fabricating detail about real people.
   */
  isPlaceholder: false,
  /** Shown in place of the cards while isPlaceholder is true. */
  emptyMessage: 'Customer reviews will be added here soon.',
  ctaLabel: 'Read All Google Reviews',
  /** External. ReviewsSection detects the http(s) scheme and opens it safely. */
  ctaHref:
    "https://www.google.com/maps/place/Lee's+Plumbing+Inc/@41.7996163,-131.3506464,5z/data=!3m1!5s0x87547d4186bc26a3:0xd6760fbb89206d25!4m12!1m2!2m1!1slees+plumbing!3m8!1s0x87547d41a8637ce5:0xe1a12c574134d150!8m2!3d41.7996163!4d-111.8389277!9m1!1b1!15sCg1sZWVzIHBsdW1iaW5nWg8iDWxlZXMgcGx1bWJpbmeSAQdwbHVtYmVymgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVU4yTUhCVGRUSlJSUkFC4AEA-gEECAAQIQ!16s%2Fg%2F1tjrqg8q?entry=ttu&g_ep=EgoyMDI2MDcxMi4wIKXMDSoASAFQAw%3D%3D" as
      | string
      | null,
  items: [
    {
      quote:
        'They not only had someone out to our home within 24 hours, with parts in hand and fixed the issue. The cost of the repair was much lower than the other company estimated. I could not believe how fast, efficient, honest, and helpful they were.',
      author: 'R Roberts',
      rating: 5,
      source: 'Google',
    },
    {
      quote:
        "Lee's came and fixed the problem caused by another plumbing company. The work was done in a timely manner and the cost was reasonable. They have a loyal customer for future jobs.",
      author: 'Mary Norton',
      rating: 5,
      source: 'Google',
    },
    {
      quote:
        'Lee arrived exactly when promised, solved the mystery with his advanced equipment, and fixed the problem permanently. He went beyond what we needed and left us very satisfied. Cleaned up all the mess.',
      author: 'Ned Miller',
      rating: 5,
      source: 'Google',
    },
  ] as Review[],
} as const;

export const ABOUT = {
  heading: "About Lee's Plumbing",
  /** Kept short on purpose. Company history goes here when it is confirmed. */
  paragraphs: [
    "Lee's Plumbing is a home service company based in Hyde Park, Utah. We work on the plumbing systems that Cache Valley homeowners depend on every day.",
    'Being local matters in this trade. We know the housing stock in these communities, we know how a hard Cache Valley winter treats the pipes in an older home, and we are close enough to get to you without a long drive across the valley.',
  ],
  /** Factual, verifiable points only. */
  highlights: [
    'Office in Hyde Park, Utah',
    'Serving ten Cache Valley communities',
    'Plumbing repairs and installations',
  ],
  ctaLabel: 'See Our Service Areas',
  ctaHref: '/locations',
} as const;

export const SERVICE_AREAS = {
  heading: 'Proudly Serving Cache Valley',
  intro:
    "Our office is in Hyde Park and we serve homeowners throughout the surrounding communities. Select your city to learn more about the plumbing services Lee's Plumbing provides across Cache Valley.",
  /** Slug of the city that is the physical HQ. Highlighted in the grid. */
  headquartersSlug: 'hyde-park-ut',
  headquartersLabel: 'Headquarters',
} as const;

export const FINAL_CTA = {
  heading: 'Need a Plumber in Cache Valley?',
  body: 'Give us a call and tell us what is going on with your home. We will let you know how we can help.',
  /**
   * PRIMARY action: send a request, mirroring the hero. The closing band now
   * offers the same two genuinely different speeds the hero does: schedule if it
   * can wait, call if it cannot. Label and destination are reused verbatim from
   * HERO.primaryCta so the site speaks with one voice and no new copy is coined.
   */
  primaryCta: { label: 'Schedule Service', href: '/contact-us' as string | null },
  /** The phone CTA label. The number itself is resolved from office data. */
  ctaPrefix: 'Call',
} as const;
