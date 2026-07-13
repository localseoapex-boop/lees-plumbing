/**
 * merger.ts — copy for /lees-plumbing-now-any-hour-services/ and NOTHING ELSE.
 *
 * ============================================================================
 * ISOLATION BOUNDARY. Read before importing this file anywhere.
 * ============================================================================
 * This is the only module in the codebase that mentions Any Hour Services. It
 * exists as a separate file so the isolation rule is enforced by the import
 * graph and not by anyone remembering it: exactly ONE page imports this, and a
 * grep for the import is a complete audit of where the partnership can appear.
 *
 * The partnership, the phrase "Any Hour", the 25-year statement, and the
 * expanded Electrical and Insulation services may appear in exactly two places:
 *   1. this page,
 *   2. the "Lee's Plumbing Now Any Hour Services" item in the About Us dropdown.
 *
 * They must NOT appear on the homepage, the About page, Contact, Offers, any
 * service or location page, the blog, the footer, the site description, the
 * navigation labels, the shared metadata defaults, or the LocalBusiness schema.
 * The business is Lee's Plumbing. That is what the schema says, and this file
 * does not change it.
 *
 * If you import this module into a second page, you have broken that rule.
 * ============================================================================
 *
 * Copy rules: no em dashes, no semicolons. The text below is the client's
 * supplied source copy and is reproduced as given.
 */

/** One benefit in the "What This Means for You" alternating stack. */
export interface MergerBenefit {
  heading: string;
  body: string;
}

export const MERGER_PAGE = {
  title: "Lee's Plumbing Now Backed by Any Hour Services",
  description:
    "Lee's Plumbing has teamed up with Any Hour Services while continuing to serve Cache Valley homeowners with trusted local care and expanded support.",

  hero: {
    eyebrow: 'An Update for Cache Valley Homeowners',
    /**
     * The page's single H1, as real HTML text. It is NOT rendered as a banner
     * image: Banner.png and both Alternate Banners have this exact sentence
     * baked into their pixels, so using one here would put the headline on the
     * page twice, once as text and once as an unreadable picture of text.
     */
    heading: "Lee's Plumbing Has Teamed Up With Any Hour Services",
    lede: 'Same local team. Same trusted service. More ways to care for your home.',
  },

  /** The elevated split card directly under the hero. */
  commitment: {
    heading:
      "Local commitment isn't changing. We're just bringing you more ways to care for your home.",
    paragraphs: [
      "For 25 years, Lee's Plumbing has served Cache Valley with trusted local plumbing service. That's not changing.",
      "Now, Lee's Plumbing has teamed up with Any Hour Services to bring homeowners more support, more services, and a larger team behind every call.",
      "You can still count on the local service, familiar care, and professional work Lee's Plumbing customers know and trust. The difference is that we now have more resources to help with more of your home's needs.",
    ],
  },

  whatThisMeans: {
    heading: 'What This Means for You',
    intro:
      "The Lee's Plumbing team is still here to serve Cache Valley homeowners with the same care and professionalism customers have counted on for years.",
    /**
     * Rendered as an alternating two-column stack. Electrical and Insulation are
     * NAMED here because the source copy names them, but they are never LINKED:
     * no Electrical or Insulation page exists on this site, and a link to one
     * would be a dead link.
     */
    benefits: [
      {
        heading: 'More services for your home.',
        body: "Along with plumbing, Lee's customers now have access to expanded home services through Any Hour Services, including electrical, HVAC, drains, and insulation.",
      },
      {
        heading: 'More support behind every call.',
        body: "By teaming up with Any Hour Services, Lee's Plumbing is backed by a larger team with more tools, more training, and more resources.",
      },
      {
        heading: 'Faster help when you need it.',
        body: 'A larger team means more scheduling support and more ways to get homeowners the help they need.',
      },
    ] as MergerBenefit[],
  },

  whyWeTeamedUp: {
    heading: 'Why We Teamed Up',
    paragraphs: [
      "Lee's Plumbing has always been built on local trust. Any Hour Services has built its reputation on helping homeowners with professional service, clear communication, and strong support from the first call to the finished job.",
      'Together, we can serve Cache Valley homeowners better.',
      "This partnership allows us to keep the hometown service Lee's Plumbing customers already know while giving our team more resources, more support, and more ways to help.",
    ],
  },

  stillLees: {
    heading: "Still Lee's Plumbing. Now Backed by Any Hour Services.",
    paragraphs: [
      "This is not a goodbye to Lee's Plumbing. It is the next step forward.",
      'Our commitment to Cache Valley remains the same: show up, do quality work, treat people right, and help homeowners take care of their homes.',
      'Now, with Any Hour Services, we can do that with a larger team and expanded services behind us.',
    ],
  },

  finalCta: {
    heading: 'Need Service?',
    body: "If you were looking for Lee's Plumbing, you're in the right place.",
    /** Rendered as a plain list of names. None of these are links. */
    servicesLabel: 'Now offering:',
    services: ['Plumbing', 'Drains', 'HVAC', 'Electrical', 'Insulation'],
    /** The tel: target is resolved from the central business config, not here. */
    buttonPrefix: "Call Lee's Plumbing today at",
  },
} as const;
