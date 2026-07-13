/**
 * offices.ts — physical office locations (requirement #5: multiple offices).
 *
 * Each office is a real place with its own NAP (Name/Address/Phone), hours, and
 * the set of city slugs it serves. This is the source of truth for:
 *   - the multi-node LocalBusiness schema (one node per office)
 *   - the footer's per-office NAP blocks
 *   - the "serving office" phone shown on each city/location-service page
 *
 * `primaryOffice` (offices[0]) feeds the org-level BUSINESS defaults in
 * src/config/site.ts, so there's no duplicated business data anywhere.
 *
 * `address` is the PHYSICAL location and is the only address used for schema
 * PostalAddress. The mailing-only P.O. Box lives in MAILING_ADDRESS in
 * src/config/site.ts and is never used as the business location.
 */
export interface OfficeHours {
  days: string[];
  opens: string;
  closes: string;
}

export interface Office {
  id: string;
  /** Display name for the footer/schema, e.g. "Hyde Park Office". */
  name: string;
  legalName: string;
  /** schema.org business @type. */
  type: string;
  priceRange: string;
  /** E.164-style number, used for tel: links and schema. */
  phone: string;
  /** Human-readable number, used for on-page display. */
  phoneDisplay: string;
  email: string;
  /** Physical street address. Used for LocalBusiness PostalAddress. */
  address: {
    street: string;
    city: string;
    region: string;
    postalCode: string;
    country: string;
  };
  geo: { latitude: number; longitude: number };
  hours: OfficeHours[];
  /** Location slugs (from locations.ts) this office is responsible for. */
  serves: string[];
}

const WEEKDAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

export const offices: Office[] = [
  {
    id: 'hyde-park',
    name: 'Hyde Park Office',
    legalName: "Lee's Plumbing",
    type: 'Plumber',
    priceRange: '$$',
    phone: '+1-435-563-0611',
    phoneDisplay: '435-563-0611',
    email: 'leesplumbinginc@hotmail.com',
    address: {
      street: '235 West 3700 North',
      city: 'Hyde Park',
      region: 'UT',
      postalCode: '84318',
      country: 'US',
    },
    // Hyde Park, UT city-center coordinates.
    geo: { latitude: 41.7963, longitude: -111.8155 },
    hours: [{ days: WEEKDAYS, opens: '08:00', closes: '17:00' }],
    serves: [
      'hyde-park-ut',
      'logan-ut',
      'north-logan-ut',
      'smithfield-ut',
      'providence-ut',
      'hyrum-ut',
      'nibley-ut',
      'river-heights-ut',
      'wellsville-ut',
      'richmond-ut',
    ],
  },
];

/** The headquarters / default office. Feeds org-level config in site.ts. */
export const primaryOffice = offices[0];

export const getOffice = (id: string): Office | undefined =>
  offices.find((o) => o.id === id);

/** Resolve the canonical schema @id for an office node (primary shares /#business). */
export const officeNodeId = (siteUrl: string, office: Office): string =>
  office.id === primaryOffice.id ? `${siteUrl}/#business` : `${siteUrl}/#office-${office.id}`;

const DAY_ABBR: Record<string, string> = {
  Monday: 'Mon',
  Tuesday: 'Tue',
  Wednesday: 'Wed',
  Thursday: 'Thu',
  Friday: 'Fri',
  Saturday: 'Sat',
  Sunday: 'Sun',
};

/** "08:00" -> "8:00 AM". Schema stays 24h while the UI reads naturally. */
const to12Hour = (time: string): string => {
  const [h, m] = time.split(':').map(Number);
  const period = h >= 12 ? 'PM' : 'AM';
  const hour = h % 12 === 0 ? 12 : h % 12;
  return `${hour}:${String(m).padStart(2, '0')} ${period}`;
};

/** Human-readable hours line, e.g. "Mon - Fri: 8:00 AM - 5:00 PM". */
export const formatHours = (spec: OfficeHours): string => {
  const first = DAY_ABBR[spec.days[0]] ?? spec.days[0];
  const last = DAY_ABBR[spec.days[spec.days.length - 1]] ?? spec.days[spec.days.length - 1];
  const days = spec.days.length > 1 ? `${first} - ${last}` : first;
  return `${days}: ${to12Hour(spec.opens)} - ${to12Hour(spec.closes)}`;
};
