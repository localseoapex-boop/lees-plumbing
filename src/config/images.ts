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

export interface ImageAsset {
  /** Public path, e.g. "/images/offers/lees-coupon.jpg". */
  src: string;
  /** Empty string ONLY for decorative images. These are all meaningful. */
  alt: string;
  /** Intrinsic pixel dimensions. Required so the browser reserves the box. */
  width: number;
  height: number;
}

const ORIGINALS = '/images/lees-original-photos';

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
};

export const ABOUT_IMAGES = {
  /** REAL. The trucks carry the compact About hero. */
  hero: TRUCKS,
  /** NULL. No showroom photograph exists. Renders a branded fallback. */
  showroom: null as ImageAsset | null,
  /** NULL. No remodel photograph exists. Renders a branded fallback. */
  remodel: null as ImageAsset | null,
} as const;

export const OFFERS_IMAGES = {
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
  } satisfies ImageAsset,
  /** NULL. No technician photograph exists for the CTA. Branded fallback. */
  ctaTechnician: null as ImageAsset | null,
} as const;
