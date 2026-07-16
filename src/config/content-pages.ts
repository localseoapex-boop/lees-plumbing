/**
 * content-pages.ts — ALL copy for the informational pages, in one file.
 *
 * Same swap point as config/homepage.ts, for /about, /contact-us, and /offers.
 * The components under components/content-pages/ are generic and prop-driven and
 * hold no business copy. Edit this file, not the markup.
 *
 * The merger page's copy is deliberately NOT here. It lives in config/merger.ts,
 * so that nothing which renders About, Contact, or Offers can even import the
 * Any Hour content by accident.
 *
 * Copy rules, inherited from homepage.ts and extended by the Phase 5 brief:
 * no em dashes, no semicolons, no invented history, no unverifiable claims. The
 * About copy below is the client's own text and is reproduced as supplied.
 */

/** A titled list of capabilities on the About page. Names only, no claims. */
export interface ExpertiseGroup {
  title: string;
  items: readonly string[];
}

export const ABOUT_PAGE = {
  title: "About Lee's Plumbing | Hyde Park, UT",
  description:
    "Learn about Lee's Plumbing, our Cache Valley community involvement, remodeling experience, showroom, and plumbing services in Hyde Park, Utah.",
  /** The page's single H1. */
  heading: "About Lee's Plumbing",
  eyebrow: 'Based in Hyde Park • Serving Cache Valley',
  lede: 'A local plumbing company that has been part of this valley and its communities for many years.',

  history: {
    heading: "History of Lee's Plumbing",
    paragraphs: [
      "Lee's Plumbing has been involved with various organizations in the community for many years. One of the fun things we do is sponsor the Smithfield Blue Sox and local high school events. We believe in giving back to the community.",
      'We have been a member of the Cache Valley Chamber of Commerce for several years and have been highlighted at the Annual Home and Garden Show.',
    ],
  },

  remodels: {
    heading: "Hi, I'm Lee. Call Me!",
    paragraphs: [
      "We use quality products and materials when working on remodel projects. Whether it is changing an old, worn faucet or redoing an entire bathroom or kitchen, Lee's Plumbing is ready to help.",
      "Ask for Lee's Plumbing when working with your contractor. Our staff can help you choose faucets, sinks, and accessories for your remodel project.",
    ],
  },

  showroom: {
    heading: 'Visit Our Hyde Park Showroom',
    paragraphs: [
      'We have a showroom at our Hyde Park office with styles and finishes to consider for your project. Visit us and talk with our team about your next remodel.',
    ],
    closing: "Big or small, Lee's can do it all!",
  },

  expertise: {
    heading: 'Our Expertise',
    intro: 'The work we are called out for most often across Cache Valley.',
    groups: [
      {
        title: 'Bathroom Repairs',
        items: ['Drains', 'Tubs', 'Sinks', 'Baths', 'Sewer Camera', 'Shower Drains'],
      },
      {
        title: 'Kitchen and Plumbing',
        items: ['Leak Detection', 'Frozen Pipes', 'Water Main Replacements', 'Laundry Drains'],
      },
      {
        title: 'Remodel Work',
        items: [
          'Additions',
          'Warehouse or Office',
          'ADA-Compliant Restrooms',
          'Water Softeners',
          'Water Heaters',
        ],
      },
    ] as ExpertiseGroup[],
  },

  /**
   * Product brands we WORK WITH. This is a list of names and nothing more.
   * No logos are drawn and no authorized-dealer or partnership status is claimed
   * anywhere on the page, because none has been verified.
   */
  brands: {
    heading: 'Product Brands We Work With',
    intro:
      'Brands we regularly install and service. We can talk through the options with you when you are choosing fixtures.',
    items: ['Moen', 'Delta', 'Uponor Pipe', 'Bradford White', 'Water Doctor'],
  },

  cta: {
    heading: 'Ready to Talk About Your Project?',
    body: 'Call the office and tell us what you have in mind. We are happy to talk it through, whether it is a repair or a full remodel.',
    ctaPrefix: 'Call',
  },
} as const;

export const CONTACT_PAGE = {
  title: "Contact Lee's Plumbing | Hyde Park, UT",
  description:
    "Contact Lee's Plumbing in Hyde Park for plumbing service across Cache Valley. Call 435-563-0611.",
  heading: "Contact Lee's Plumbing",
  eyebrow: 'Hyde Park, Utah',
  lede: 'Call us, email us, or stop by the office. We serve homeowners throughout Cache Valley.',

  /** Scheduling expectation, shown before the form. Supplied by the client. */
  notice: {
    heading: 'Before Contacting Us',
    body: 'If you are requesting a technician service call after 1:00 PM or on a weekend, the request will be handled the following business day.',
  },

  form: {
    heading: 'Send Us a Message',
    intro: 'Tell us what is going on and we will get back to you.',
    /** Feed the <select> options. Kept here so the form component holds no copy. */
    serviceOptions: ['Plumbing', 'Other'],
    cityOptions: [
      'Hyde Park',
      'Logan',
      'North Logan',
      'Smithfield',
      'Providence',
      'Hyrum',
      'Nibley',
      'River Heights',
      'Wellsville',
      'Richmond',
    ],
  },

  details: {
    heading: 'Business Information',
  },

  map: {
    heading: 'Find Our Office',
    intro: 'Our office and showroom are on West 3700 North in Hyde Park.',
  },

  /**
   * "What happens next" after someone reaches out. Every step is honest about how
   * we actually work: no response-time promises, no guarantees, nothing the
   * business has not confirmed. The last step reuses the trust language used
   * elsewhere on the site ("diagnose the actual problem, explain what we found").
   */
  process: {
    heading: 'What Happens After You Reach Out',
    intro: 'A quick look at how a request turns into a finished job.',
    steps: [
      {
        title: 'You reach out',
        body: 'Call us or send the form with what is going on at your home.',
      },
      {
        title: 'We confirm the details',
        body: 'We follow up using the phone or email you provided to make sure we understand the problem.',
      },
      {
        title: 'We schedule the visit',
        body: 'We agree on a time that works and let you know what to expect.',
      },
      {
        title: 'We do the work',
        body: 'We diagnose the actual problem, explain what we found, and do the work you agreed to.',
      },
    ],
  },

  cta: {
    heading: 'Need a Plumber Today?',
    body: 'A phone call is the fastest way to reach us and the surest way to get on the schedule.',
    ctaPrefix: 'Call',
  },
} as const;

export const OFFERS_PAGE = {
  title: "Plumbing Offers | Lee's Plumbing",
  description:
    "View current plumbing offers from Lee's Plumbing in Hyde Park, Utah.",
  heading: 'Current Offers',
  eyebrow: 'Save on Your Next Service',
  lede: 'Current savings for Cache Valley homeowners.',

  intro: {
    heading: 'Savings on Your Next Service Call',
    paragraphs: [
      "We keep our pricing straightforward, and when we can pass a saving along to Cache Valley homeowners we do. The offer below applies to service from Lee's Plumbing.",
      'Mention the offer when you call so we can apply it to your service, and present it to your technician at the time of service.',
    ],
  },

  coupon: {
    heading: '$19.95 Off Any Service',
    /**
     * The ONLY terms that appear on the page. They are transcribed from the red
     * bar printed on the coupon artwork itself. Nothing has been added: there is
     * no expiration date, no coupon code, and no extra restriction, because the
     * coupon states none.
     */
    terms: 'Must be presented at time of service. Cannot be combined with any other discount.',
  },

  cta: {
    heading: 'Ready to Claim Your Savings?',
    body: 'Give us a call and mention the offer when you book your service.',
    ctaPrefix: 'Call',
  },
} as const;
