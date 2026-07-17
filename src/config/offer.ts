/**
 * offer.ts — the ONE source of truth for the current promotional offer.
 *
 * The offer's real, verifiable claims (the savings amount and the terms) are
 * transcribed from the client's coupon artwork and NOTHING is added: no
 * expiration date, no coupon code, and no extra restriction, because the coupon
 * states none. Both the Offers page (via config/content-pages.ts) and the
 * service-hero coupon card (components/services/HeroOfferCard.astro) read from
 * here, so the offer copy lives in exactly one place and can never drift.
 *
 * The `eyebrow` and `body` are not new claims: they are reused verbatim from the
 * Offers page's existing hero copy, so the card asserts nothing the site does not
 * already say.
 */
export const OFFER = {
  /** Small kicker above the savings. Reused from the Offers page eyebrow. */
  eyebrow: 'Save on Your Next Service',
  /** The savings headline, transcribed from the coupon artwork. */
  title: '$19.95 Off Any Service',
  /** One concise supporting line. Reused from the Offers page lede. */
  body: 'Current savings for Cache Valley homeowners.',
  /** The only terms printed on the coupon, transcribed verbatim. */
  terms: 'Must be presented at time of service. Cannot be combined with any other discount.',
  /** Where the card CTA points. Matches the nav/footer Offers link (no trailing slash). */
  href: '/offers',
  /** Accessible, descriptive CTA label. */
  ctaLabel: 'View This Offer',
} as const;
