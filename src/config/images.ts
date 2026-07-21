/**
 * images.ts — the ONE place image paths are written down.
 *
 * Components never hardcode a path. They take an `ImageAsset | null` prop and
 * render the photo when it exists or a branded fallback panel when it does not
 * (see components/content-pages/ContentImage.astro). That is why every slot
 * below is typed as `ImageAsset | null` rather than being omitted: the slot is
 * declared either way, so the layout reserves the same space and dropping a real
 * photo in later cannot shift anything.
 *
 * SHIPPED ASSETS. The repository carries ONLY the images the site actually
 * renders. The original 30MB photo archive was inspected in full and then pruned
 * down to these three, so a clone does not drag unused artwork around forever:
 *
 *   trucks.jpg .................. three Lee's box trucks, parked. The only usable
 *                                 real photograph we have, and it needs no people
 *                                 in it. 653x367, so it is never enlarged: see
 *                                 the intrinsic-width cap in ContentImage.
 *   lees-x-any-hour-logo.png .... Lee's + Any Hour co-branded lockup. Merger page
 *                                 ONLY. Renamed from "Lees-x-AHS-Logo (1).png",
 *                                 whose space and parentheses had to be
 *                                 percent-encoded in every URL.
 *   lees-coupon.jpg ............. the $19.95-off coupon. Lowercase on purpose:
 *                                 the original "Lees-Coupon.jpg" resolved on
 *                                 macOS but would have 404'd on Vercel's
 *                                 case-sensitive Linux build.
 *
 * DELIBERATELY NOT SHIPPED, so nobody re-adds them by mistake:
 *   - the three Any Hour banner PNGs (~29MB). The headline "Lee's Plumbing Has
 *     Teamed Up With Any Hour Services" is BAKED INTO THEIR PIXELS, so none can
 *     be the merger hero: that page needs a real <h1>, and a banner would
 *     duplicate the headline as an unreadable picture of words.
 *   - the Best of Northern Utah 2024 badges, unused by these pages.
 *   - the pipe-wrench logo exports, one of which is ~40px and unusable.
 *   - lee-plumber.jpg, which despite its filename is the trucks again, not a
 *     person, and is redundant with trucks.jpg.
 * The originals still exist outside the repo. Re-add one only when a page uses it.
 *
 * NO photo exists of: the showroom, a remodel, the team, a technician, or any
 * person. Those slots are `null` and render the branded fallback. When the real
 * photography arrives, set the slot here and nothing else changes.
 */

/**
 * Where an image came from. This is not bookkeeping, it is a guardrail.
 *
 * The hybrid image strategy draws its line at EVIDENCE vs ILLUSTRATION, not at
 * subject matter. An image that functions as a CLAIM (our truck, our team, our
 * award, our completed work, our customer) must be `real`, because a generated
 * version of it is a fabricated claim. An image that only supplies CONTEXT (what
 * this trade looks like, what a home looks like) may be `ai`, because it asserts
 * nothing.
 *
 * Recording provenance here makes the whole set auditable at a glance and stops
 * a future editor from captioning an `ai` image as real work, or dropping a
 * generated face next to a real testimonial.
 */
export type Provenance = 'real' | 'ai';

export interface ImageAsset {
  /** Public path, e.g. "/images/offers/lees-coupon.jpg". */
  src: string;
  /**
   * Empty string ONLY for decorative images, where surrounding text already
   * carries the meaning. For an `ai` image this is also a truthfulness control:
   * alt text must describe a SCENE ("a technician installing a water heater"),
   * never an EVENT ("our technician in Hyde Park"), which would turn an
   * illustration into a claim.
   */
  alt: string;
  /** Intrinsic pixel dimensions. Required so the browser reserves the box. */
  width: number;
  height: number;
  provenance: Provenance;
}

const ORIGINALS = '/images/lees-original-photos';

/**
 * BRAND IDENTITY. The header and footer logo.
 *
 * THE SITE LOGO IS THE CO-BRANDED LEE'S x ANY HOUR LOCKUP. Per the owner's
 * direction, the standalone Lee's mark is no longer used anywhere in the site
 * chrome: the company now presents as Lee's Plumbing, part of Any Hour Services,
 * on every page. The single real logo file the business supplied
 * (lees-x-any-hour-logo.png, 951x206, transparent PNG) is therefore wired into
 * BOTH `logoOnLight` and `logoOnDark`, so BrandLogo renders it in the header and
 * the footer alike. (This reverses an earlier decision that isolated the
 * co-brand to the merger page; the owner asked for it site-wide.)
 *
 * ONE SURFACE CAVEAT, handled in BrandLogo, not here. The lockup is BLACK
 * "LEE'S PLUMBING" ink on a transparent ground, so it reads cleanly on the white
 * header but would vanish into the #050707 footer. There is no knockout variant
 * of this artwork and inventing one would be a forgery, so BrandLogo sets the
 * dark-tone logo on a white plaque instead. That is why the same file serves
 * both tones: the difference is the backing, not the art.
 *
 * `mark` (the standalone red pipe-wrench) is retained ONLY as the automatic
 * fallback for the lockup mode BrandLogo drops to if `logoOnLight`/`logoOnDark`
 * are ever cleared. It is no longer rendered while the co-branded logo is set.
 */
export const BRAND_IMAGES = {
  /** REAL. The pipe-wrench mark. Transparent, so it works on any surface.
      Fallback only now that the co-branded lockup is the live logo. */
  mark: {
    src: '/images/brand/lees-wrench-mark.png',
    /* Decorative: the wordmark beside it already carries the company name, so a
       screen reader would otherwise hear the name twice. */
    alt: '',
    width: 177,
    height: 192,
    provenance: 'real',
  } satisfies ImageAsset as ImageAsset | null,

  /** LIVE. Co-branded lockup on the white header. Black ink reads as-is. */
  logoOnLight: {
    src: `${ORIGINALS}/lees-x-any-hour-logo.png`,
    alt: "Lee's Plumbing, part of Any Hour Services",
    width: 951,
    height: 206,
    provenance: 'real',
  } satisfies ImageAsset as ImageAsset | null,
  /** LIVE. Same file on the dark footer; BrandLogo backs it with a white plaque
      so the black wordmark stays legible (see the caveat above). */
  logoOnDark: {
    src: `${ORIGINALS}/lees-x-any-hour-logo.png`,
    alt: "Lee's Plumbing, part of Any Hour Services",
    width: 951,
    height: 206,
    provenance: 'real',
  } satisfies ImageAsset as ImageAsset | null,
} as const;

/**
 * The company vehicles. The single most useful real photograph we have: it is
 * on-brand, shows the wordmark and the phone number, and needs no people in it.
 * Reused across About and the merger hero.
 *
 * It is only 653px wide, so it is never used as a full-bleed background. Both
 * consumers render it inside a width-capped media panel (see the
 * `--asset-max-width` cap in ContentImage) so it is never enlarged past its
 * intrinsic size and never stretched.
 */
const TRUCKS: ImageAsset = {
  src: `${ORIGINALS}/trucks.jpg`,
  alt: "Lee's Plumbing service trucks parked outside the Hyde Park shop",
  width: 653,
  height: 367,
  provenance: 'real',
};

/**
 * HOMEPAGE HERO. Full-bleed background behind the H1 (see HeroSection.astro).
 *
 * Both slots are `null` until the artwork exists, and the hero is DESIGNED to
 * ship that way: with no image it renders on flat --color-dark and is a
 * complete, premium hero on its own. That is the fallback for every future
 * Local SEO Apex business that launches before its photography is ready.
 *
 * When the files land, set the two slots below and change NOTHING else.
 *
 * Required artwork (see docs/photography-style-guide.md):
 *   desktop  2400x1350 (16:9)  subject in the RIGHT third, left 55-60% a clean
 *                              mid-tone surface for the headline to sit on.
 *   mobile   1200x1600 (3:4)   tighter crop, subject LOW, top ~45% kept clear.
 *
 * Both are `ai`: they illustrate the trade. They must therefore contain NO
 * branding, no logo, no readable signage, and no company-specific claim, and
 * their alt stays EMPTY because the <h1> already carries the meaning and a
 * generated scene must not assert anything about this business.
 */
export const HOMEPAGE_IMAGES = {
  /**
   * Dimensions are the files' TRUE intrinsic sizes, read off the files
   * themselves. The desktop frame is 1351px tall, not the 1350 that was
   * specified: that is the encoder's rounding and it is recorded here as-is,
   * because these numbers exist to tell the browser exactly what it is about to
   * receive. A one-pixel lie is still a lie to the layout engine.
   *
   * Both are JPEG. These are photographs, and the first cut shipped as PNG at
   * 1.65MB and 1.55MB, which on a real 4G connection is several seconds of
   * staring at an empty hero. JPEG q82 carries the same image at 140KB and 75KB,
   * a ~91% reduction with no visible difference, and both now sit inside the
   * 250KB / 120KB budgets in docs/photography-style-guide.md.
   */
  heroDesktop: {
    src: '/images/homepage/hero-technician-desktop.jpg',
    alt: '',
    width: 2400,
    height: 1351,
    provenance: 'ai',
  } satisfies ImageAsset as ImageAsset | null,

  heroMobile: {
    src: '/images/homepage/hero-technician-mobile.jpg',
    alt: '',
    width: 1200,
    height: 1600,
    provenance: 'ai',
  } satisfies ImageAsset as ImageAsset | null,

  /**
   * REAL. The actual fleet, in the "Why Homeowners Choose Lee's Plumbing"
   * section, where a photograph of the real vehicles is the evidence for what
   * the copy asserts. This is the one place on the homepage where the image is a
   * CLAIM rather than an illustration, which is exactly why it must be real and
   * why its alt text is allowed to name the business.
   *
   * It is only 653px wide, which is why the section is an asymmetric split
   * rather than a full-bleed band: in a ~42% column it renders BELOW its native
   * width and stays sharp. Full bleed would have upscaled it 2.2x at 1440 and
   * 4.4x on a retina display. The layout was chosen because of the asset's
   * limits, not in spite of them. ContentImage caps it at its intrinsic width
   * regardless, so it can never be enlarged even if the column grows.
   */
  trustTrucks: TRUCKS,

  /**
   * NULL. The opening-spread plate for the primary Plumbing section (see the
   * masthead in ServiceSection.astro). Until a photograph exists it renders the
   * branded BrandPanel plate, which is a finished state, not a broken one, and is
   * exactly what any future Local SEO Apex business gets before its photography
   * lands.
   *
   * When a real image arrives it is ILLUSTRATION, not evidence: it shows what
   * plumbing work looks like and carries the hero's photographic language into
   * the section, but it asserts nothing specific about this business, which is
   * why it may be `ai`. It must therefore contain NO branding, no logo, no
   * readable signage, and no company-specific claim, and its alt must describe a
   * SCENE, never an EVENT. The trucks are deliberately NOT reused here: they are
   * an evidence shot already carrying the Why-Us section lower on this same page.
   *
   * Landscape 4:3 to match the plate's ratio. Set the slot here and change
   * NOTHING else.
   */
  plumbing: {
    src: '/images/homepage/plumbing-water-heater-service.jpg',
    alt: 'A plumber adjusting the gauge and shutoff valves on the supply lines above a residential tank water heater in a clean, bright utility room',
    width: 2000,
    height: 1500,
    provenance: 'ai',
  } satisfies ImageAsset as ImageAsset | null,

  /**
   * AI. The About section's editorial split (see AboutSection.astro). A generic
   * plumber working inside a home is ILLUSTRATION, not evidence: it shows what
   * the trade looks like and grounds the "local company" story, but it asserts
   * nothing specific about this business, which is exactly why it may be `ai`.
   *
   * The trucks were deliberately NOT reused here. They already carry the Why-Us
   * section higher up this same page, and they are a fleet/evidence shot ("we
   * have vehicles"), not a craftsmanship shot ("we do careful work in a home").
   *
   * Because it is an illustration, its alt text describes the SCENE and never
   * names the company or claims the work is ours. It carries NO branding, no
   * logo, no readable text, and no branded clothing (see the negative prompt in
   * docs/photography-style-guide.md).
   *
   * Portrait 4:5 (1122x1402), rendered in a 4:5 frame on desktop and reflowed to
   * a centered 16:9 landscape crop below 900px. Dimensions are the file's true
   * intrinsic size, read off the file itself, so the browser reserves the exact
   * box and dropping it in causes no layout shift.
   */
  about: {
    src: '/images/homepage/about-plumber-kitchen-valve.jpg',
    alt: 'A plumber using pliers to tighten a shut-off valve on the water supply line under a modern kitchen sink',
    width: 1122,
    height: 1402,
    provenance: 'ai',
  } satisfies ImageAsset as ImageAsset | null,
} as const;

export const ABOUT_IMAGES = {
  /**
   * AI. The About page's photographic hero BACKGROUND: a close, warm view of a
   * plumber's hands working brass and copper under a sink. Illustration of the
   * craft, not a claim, so it is `ai` with an empty alt and carries no branding,
   * readable text, face, or uniform. Landscape 16:9, rendered behind a scrim.
   * (The real fleet photograph is used lower on the page, in the trust band.)
   */
  heroBg: {
    src: '/images/about/about-hero.jpg',
    alt: '',
    width: 2000,
    height: 1125,
    provenance: 'ai',
  } satisfies ImageAsset as ImageAsset | null,
  /** REAL. The trucks. Available for a compact About media slot if needed. */
  hero: TRUCKS,
  /** NULL. No showroom photograph exists. Renders a branded fallback. */
  showroom: null as ImageAsset | null,
  /** NULL. No remodel photograph exists. Renders a branded fallback. */
  remodel: null as ImageAsset | null,
} as const;

/**
 * SERVICE HERO BACKGROUNDS — the config-driven backdrop for each service page's
 * hero (see ServiceHero.astro). Keyed by the service/sub-service SLUG so a page
 * gets its photo by lookup, with NO markup change: ServiceLayout looks up the
 * category slug, SubServiceLayout the sub-service slug. A `null` slot renders the
 * flat dark hero unchanged, so every unfilled page is exactly as it was.
 *
 * Provenance is `ai` for all of these: they ILLUSTRATE the trade (a water heater
 * in a utility room, a drain being cleared) and assert nothing specific about
 * this business, which is why they may be generated. Each therefore carries:
 *   - NO branding, logo, readable signage, or company-specific claim
 *   - NO uniforms and no identifiable person presented as a Lee's employee
 *     (these are contextual equipment scenes, not staff portraits)
 *   - EMPTY alt: they are decorative backdrops behind the <h1>, which already
 *     carries the meaning, so a screen reader gains nothing from describing them.
 *
 * Landscape, generated at ~2x the rendered hero width, JPEG. Set a slot here when
 * its file lands and nothing else changes. Same photographic style as the
 * homepage hero (see docs/photography-style-guide.md).
 */
/**
 * Every slot below is a 2000x1125 (16:9) AI backdrop at
 * /images/services/<slug>-service.jpg, so a tiny helper keeps the map DRY: the
 * file name is derived from the key, and only the key list can drift. All are
 * decorative (empty alt) and `ai` (see the block comment above).
 */
const svcHero = (slug: string): ImageAsset => ({
  src: `/images/services/${slug}-service.jpg`,
  alt: '',
  width: 2000,
  height: 1125,
  provenance: 'ai',
});

export const SERVICE_HERO_IMAGES: Record<string, ImageAsset | null> = {
  // Category hub.
  plumbing: svcHero('plumbing'),
  // Sub-services (keys are the slugs from data/subservices.ts).
  'water-heater-repair': svcHero('water-heater-repair'),
  'water-heater-installation': svcHero('water-heater-installation'),
  'leak-detection': svcHero('leak-detection'),
  'pipe-repair': svcHero('pipe-repair'),
  'toilet-repair': svcHero('toilet-repair'),
  'garbage-disposal-repair': svcHero('garbage-disposal-repair'),
  'drain-cleaning': svcHero('drain-cleaning'),
  'sewer-line-repair': svcHero('sewer-line-repair'),
  'sewer-camera-inspection': svcHero('sewer-camera-inspection'),
  'hydro-jetting': svcHero('hydro-jetting'),
  'clogged-toilet': svcHero('clogged-toilet'),
  'main-line-cleaning': svcHero('main-line-cleaning'),
};

/**
 * SUPPORTING_IMAGES — the optional contextual photo for the supporting block on
 * the FLAGSHIP sub-service pages only. This is deliberately a short list, not one
 * per page: the plainer pages stay prose-only, so the pages that carry a photo
 * read differently. Same rules as the hero backdrops (AI, unbranded, no people
 * presented as staff, empty alt because the prose beside it already carries the
 * meaning). 4:3, generated at ~2x the rendered column width, JPEG, at
 * /images/services/<slug>-supporting.jpg. Populated in the photography pass.
 */
const supp = (slug: string): ImageAsset => ({
  src: `/images/services/${slug}-supporting.jpg`,
  alt: '',
  width: 1600,
  height: 1200,
  provenance: 'ai',
});

export const SUPPORTING_IMAGES: Record<string, ImageAsset | null> = {
  'water-heater-repair': supp('water-heater-repair'),
  'pipe-repair': supp('pipe-repair'),
  'drain-cleaning': supp('drain-cleaning'),
  'sewer-camera-inspection': supp('sewer-camera-inspection'),
  'hydro-jetting': supp('hydro-jetting'),
  'toilet-repair': supp('toilet-repair'),
};

/**
 * FIRST_CONTENT_IMAGES — the contextual photo for the FIRST content section
 * (SupportingContent, directly below the hero) on the hub and every sub-service
 * page.
 *
 * This is a SEPARATE slot from SERVICE_HERO_IMAGES (the scrimmed hero backdrop)
 * and from SUPPORTING_IMAGES (the mid-page EditorialImageBand), so a page never
 * shows the same file twice.
 *
 *   - SIX pages reuse an existing 4:3 supporting photo whose subject fits the
 *     page and which is NOT that page's own mid-page band, so nothing is
 *     duplicated on a single page. `reuseFirstContent` spreads the existing asset
 *     (same file, no path duplicated) and gives it scene-based alt, because in
 *     THIS slot the photo sits beside prose that does not already caption it (the
 *     mid-page band keeps the empty, decorative alt for its own usage).
 *
 *   - SEVEN pages (the hub, plus the six flagship pages whose supporting photo is
 *     already their mid-page band) await a dedicated `<slug>-intro.jpg`. Until the
 *     file exists the slot is `null`, so ContentImage renders the branded fallback
 *     panel rather than a broken image, and the layout reserves the same box (no
 *     CLS). TO ACTIVATE ONE: drop a 1600x1200 JPEG at
 *     /images/services/<slug>-intro.jpg and replace its `null` with the
 *     `intro(...)` call shown in the comment beside it. The scene-based alt is
 *     pre-written there; it must NOT claim a real Lee's employee, customer, job,
 *     or facility, and must carry no logo, uniform, or readable text.
 */
const reuseFirstContent = (key: string, alt: string): ImageAsset => ({
  ...(SUPPORTING_IMAGES[key] as ImageAsset),
  alt,
});

/** Descriptor for a not-yet-supplied first-content photo. Referenced from the
 *  activation comments below; unused until a slot is switched from null. */
export const introImage = (slug: string, alt: string): ImageAsset => ({
  src: `/images/services/${slug}-intro.jpg`,
  alt,
  width: 1600,
  height: 1200,
  provenance: 'ai',
});

export const FIRST_CONTENT_IMAGES: Record<string, ImageAsset | null> = {
  // Hub. Awaits a general plumbing scene.
  plumbing: null, // introImage('plumbing', 'Water supply lines and a brass shutoff valve on a home utility wall')

  // Reuse existing 4:3 supporting photos. Subject fits the page and is not this
  // page's own mid-page band, so nothing repeats on a single page.
  'water-heater-installation': reuseFirstContent(
    'water-heater-repair',
    'A residential tank water heater connected with copper supply pipes in a utility space',
  ),
  'leak-detection': reuseFirstContent(
    'pipe-repair',
    'Copper water lines with brass shutoff valves running along an interior wall',
  ),
  'garbage-disposal-repair': reuseFirstContent(
    'drain-cleaning',
    'The drain trap and supply pipes under a stainless steel kitchen sink',
  ),
  'sewer-line-repair': reuseFirstContent(
    'sewer-camera-inspection',
    'A white PVC drain cleanout at the base of a house exterior beside the lawn',
  ),
  'main-line-cleaning': reuseFirstContent(
    'hydro-jetting',
    'A coiled white high-pressure hose line on a wet patio outside a home',
  ),
  'clogged-toilet': reuseFirstContent(
    'toilet-repair',
    'A white toilet in a bright, clean tiled bathroom',
  ),

  // Flagship pages. Their supporting photo is already the mid-page band, so a
  // dedicated intro photo is needed to avoid repeating an image on the page.
  'water-heater-repair': null, // introImage('water-heater-repair', 'The gas control valve and connections at the base of a tank water heater')
  'pipe-repair': null, // introImage('pipe-repair', 'A repaired run of copper pipe with fresh soldered fittings in a wall cavity')
  'drain-cleaning': null, // introImage('drain-cleaning', 'A drain auger cable feeding into an open floor drain')
  'sewer-camera-inspection': null, // introImage('sewer-camera-inspection', 'A sewer inspection camera reel and monitor set up beside a cleanout')
  'hydro-jetting': null, // introImage('hydro-jetting', 'A hydro jetting nozzle and high-pressure line at an open sewer cleanout')
  'toilet-repair': null, // introImage('toilet-repair', 'The fill valve and flapper inside an open toilet tank')
};

/**
 * CONTACT PAGE. The hero background behind the contact page's H1 (see
 * ContentHero's background mode). AI illustration of the trade: a tidy plumbing
 * workbench, no branding, no readable text, no people, so it is decorative
 * (empty alt) and `ai`. Landscape 16:9, rendered behind a scrim.
 */
export const CONTACT_IMAGES = {
  hero: {
    src: '/images/contact/office-hero.jpg',
    alt: '',
    width: 2000,
    height: 1125,
    provenance: 'ai',
  } satisfies ImageAsset as ImageAsset | null,
} as const;

/**
 * SERVICE AREAS (/locations). The hero background behind the "Service Areas" H1.
 * A Cache Valley residential street with the mountains behind it: decorative
 * regional context, not a claim about a specific address, so it is `ai` with an
 * empty alt. No branding, readable signage, or people. Rendered behind a scrim.
 */
export const LOCATIONS_IMAGES = {
  hero: {
    src: '/images/locations/service-areas-hero.jpg',
    alt: '',
    width: 1800,
    height: 1013,
    provenance: 'ai',
  } satisfies ImageAsset as ImageAsset | null,
} as const;

export const OFFERS_IMAGES = {
  /**
   * AI. The Offers page's photographic hero BACKGROUND: a bright, welcoming
   * modern kitchen with a chrome faucet and stainless sink. Illustration of the
   * home the service protects, not a claim, so it is `ai` with an empty alt and
   * carries no branding, readable text, or people. Landscape 16:9, behind a scrim.
   */
  heroBg: {
    src: '/images/offers/offers-hero.jpg',
    alt: '',
    width: 2000,
    height: 1125,
    provenance: 'ai',
  } satisfies ImageAsset as ImageAsset | null,
  /**
   * REAL. Filename is lowercase on purpose. It was `Lees-Coupon.jpg`, which
   * resolves on macOS's case-insensitive filesystem but 404s on Vercel's
   * case-sensitive Linux build. Renamed through git so the case change is
   * actually recorded.
   */
  coupon: {
    src: '/images/offers/lees-coupon.jpg',
    alt: "Lee's Plumbing coupon for $19.95 off any service",
    width: 1037,
    height: 418,
    provenance: 'real',
  } satisfies ImageAsset,
} as const;

/**
 * MERGER PAGE ONLY. Nothing in here may be imported by any other page: the Any
 * Hour partnership is isolated to /lees-plumbing-now-any-hour-services/.
 */
export const MERGER_IMAGES = {
  /** REAL. The trucks anchor the dark hero behind a scrim. */
  heroVehicles: TRUCKS,
  /** NULL. No team photograph exists. Branded fallback. */
  teamPhoto: null as ImageAsset | null,
  /** NULL. No technician photograph exists. Branded fallback. */
  technicianPhoto: null as ImageAsset | null,
  /**
   * REAL. The co-branded lockup, used in the "Why We Teamed Up" composition.
   * Renamed from "Lees-x-AHS-Logo (1).png": the space and parentheses had to be
   * percent-encoded in every URL that referenced it. The artwork is untouched.
   */
  partnershipLogo: {
    src: `${ORIGINALS}/lees-x-any-hour-logo.png`,
    alt: "Lee's Plumbing and Any Hour Services co-branded logo",
    width: 951,
    height: 206,
    provenance: 'real',
  } satisfies ImageAsset,
  /** NULL. No technician photograph exists for the CTA. Branded fallback. */
  ctaTechnician: null as ImageAsset | null,
} as const;
