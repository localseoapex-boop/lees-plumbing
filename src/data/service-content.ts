/**
 * service-content.ts — rich page content for the service-page framework.
 *
 * WHY A SEPARATE FILE: data/services.ts and data/subservices.ts are the
 * *catalog* (slugs, names, taglines, routing). They stay small and are read by
 * the location tiers, the homepage, the nav, and the sitemap. This file holds
 * the long-form page content that ONLY the non-location service pages render.
 * Keeping the two apart means the catalog does not bloat to ten times its size
 * and the location pages keep loading exactly the fields they need.
 *
 * Keyed by slug so a record can never drift away from the page it feeds. The
 * assertions at the bottom fail the BUILD if a service is missing content or if
 * the hub directory forgets a sub-service, which is what stops a silent gap
 * from shipping.
 *
 * COPY RULES enforced by review, not by types: no em dashes, no semicolons, and
 * no unverified claims. Nothing here may state or imply licensing, insurance,
 * financing, warranties, guarantees, upfront pricing, background checks,
 * emergency or same-day availability, brand coverage, years in business, or a
 * review count. If a claim is not already true in data/offices.ts, it does not
 * belong in this file.
 */
import { services } from './services';
import { subServices } from './subservices';

/** One question and answer. Rendered as a visible list, no JavaScript. */
export interface FaqItem {
  question: string;
  answer: string;
}

/** A titled point with a short explanation. Used by signs, causes, and steps. */
export interface ContentPoint {
  title: string;
  body: string;
}

// ───────────────────────────── Hub pages ─────────────────────────────

/** A named cluster of sub-services inside a hub's directory. */
export interface DirectoryGroup {
  title: string;
  /** Sub-service slugs, in display order. Must belong to this hub's category. */
  slugs: string[];
}

export interface HubContent {
  /** The page's single H1. */
  heroHeading: string;
  /** Hero supporting sentence. Must mention Cache Valley. */
  heroLede: string;
  /** One line under the shared trust heading, adapted to the trade. */
  trustIntro: string;
  supportingHeading: string;
  supportingParagraphs: string[];
  directoryHeading: string;
  directoryIntro: string;
  groups: DirectoryGroup[];
  areasHeading: string;
  areasIntro: string;
  faqHeading: string;
  faqs: FaqItem[];
  finalCtaHeading: string;
  finalCtaBody: string;
}

export const hubContent: Record<string, HubContent> = {
  plumbing: {
    heroHeading: 'Plumbing Services in Hyde Park, Utah',
    heroLede:
      "Lee's Plumbing is based in Hyde Park and serves homeowners across Cache Valley. We repair and install water heaters, pipes, fixtures, drains, and sewer lines, and we work on the problems you can see as well as the ones you cannot.",
    trustIntro: 'A local plumbing company that answers the phone and does the work properly.',
    supportingHeading: 'Plumbing Help for Homes Across Hyde Park and Cache Valley',
    supportingParagraphs: [
      "Lee's Plumbing works on the systems that move water into, through, and out of your home. That covers the everyday problems a homeowner notices right away, like a dripping fixture, a toilet that will not stop running, or a drain that has slowed to a trickle. It also covers the problems that stay hidden, like a supply line weeping behind drywall or a sewer line that has been taking on roots for years.",
      'The work falls into a few broad areas. There is repair, where something has failed and needs to be fixed. There is replacement and installation, where a water heater, a fixture, or a run of pipe has reached the end of its useful life and a repair no longer makes sense. And there is drain and sewer work, where the goal is to clear a blockage and then understand why it formed so it does not come back next season.',
      'Plumbing problems rarely stay the same size. A slow leak that costs very little to repair today can soak a subfloor, swell a cabinet, and turn into a much larger repair if it runs for months unnoticed. Water finds its way into framing and insulation long before it shows up on a ceiling. Addressing a plumbing issue while it is still small is almost always the cheaper path, which is why it is worth calling about a problem that seems minor but keeps coming back.',
    ],
    directoryHeading: 'Plumbing Services We Offer',
    directoryIntro:
      'Choose the service that matches what is happening at your home. Each page explains the work in more detail.',
    groups: [
      { title: 'Water Heaters', slugs: ['water-heater-repair', 'water-heater-installation'] },
      {
        title: 'Plumbing Repairs and Fixtures',
        slugs: ['leak-detection', 'pipe-repair', 'toilet-repair', 'garbage-disposal-repair'],
      },
      {
        title: 'Drain and Sewer',
        slugs: [
          'drain-cleaning',
          'clogged-toilet',
          'main-line-cleaning',
          'sewer-line-repair',
          'hydro-jetting',
          'sewer-camera-inspection',
        ],
      },
    ],
    areasHeading: 'Plumbing Service Across Cache Valley',
    areasIntro:
      'Our office is in Hyde Park and we serve the surrounding communities. Choose your city to see plumbing service there.',
    faqHeading: 'Common Plumbing Questions',
    faqs: [
      {
        question: "What plumbing services does Lee's Plumbing provide?",
        answer:
          'We handle water heater repair and installation, leak detection, pipe repair, toilet and garbage disposal repair, drain cleaning, main line cleaning, sewer line repair, hydro jetting, and sewer camera inspection. If you are not sure which of those fits your situation, call and describe what the home is doing and we will point you to the right service.',
      },
      {
        question: "What areas does Lee's Plumbing serve?",
        answer:
          'We are based in Hyde Park, Utah and serve homeowners across Cache Valley, including Logan, North Logan, Smithfield, Providence, Hyrum, Nibley, River Heights, Wellsville, and Richmond.',
      },
      {
        question: 'When should I call a plumber?',
        answer:
          'Call when a problem is getting worse rather than better, when it keeps returning after you clear it, or when you cannot find the source. Water where it should not be, a drain that backs up repeatedly, a sudden drop in hot water or water pressure, and the sound of running water when every fixture is off are all worth a call rather than a wait.',
      },
      {
        question: 'Can a plumbing problem cause property damage?',
        answer:
          'Yes. Water is patient and it travels. A small supply leak inside a wall can wet framing, insulation, and subfloor for a long time before it stains a ceiling or buckles a floor. A blocked sewer line can back up into the lowest fixtures in the house. The damage from the water is often more expensive than the plumbing repair that would have prevented it, which is the main reason to act early.',
      },
      {
        question: "Does Lee's Plumbing work on water heaters and drains?",
        answer:
          'Both. Water heaters are one of the most common calls we take, on tank and tankless units, for repair as well as full replacement. On the drain side we clear individual fixture drains, clear main lines that are backing up the whole house, and use camera inspection and hydro jetting when a line needs more than a snake.',
      },
    ],
    finalCtaHeading: 'Need Plumbing Service in Cache Valley?',
    finalCtaBody:
      'Give us a call and tell us what the home is doing. We will let you know how we can help.',
  },
};

// ────────────────── Shared trust + reviews (both tiers) ──────────────────

/**
 * The trust block, shared by every hub and sub-service page.
 *
 * Every card here is a fact that is already true in data/offices.ts and
 * data/locations.ts: there is an office in Hyde Park and ten cities are served.
 * Nothing claims licensing, insurance, financing,
 * warranties, guarantees, upfront pricing, background checks, or emergency
 * availability, because none of those have been confirmed by the business. The
 * CSV framework's stock trust points were deliberately NOT used for that reason.
 */
export const TRUST_HEADING = "Why Homeowners Choose Lee's Plumbing";

export const TRUST_CARDS: readonly { title: string; body: string }[] = [
  {
    title: 'Based in Hyde Park',
    body: 'Our office is in Hyde Park, Utah. We live and work in the same valley as the homes we service.',
  },
  {
    title: 'Serving Cache Valley',
    body: 'From Richmond down to Wellsville, we cover the communities across Cache Valley.',
  },
  {
    title: 'Full-Service Plumbing',
    body: 'From water heaters and leaks to drains and sewer lines, one call covers your home plumbing.',
  },
  {
    title: 'Dependable Workmanship',
    body: 'We diagnose the actual problem, explain what we found, and do the work you agreed to.',
  },
];

/**
 * REVIEWS. Nothing renders until real reviews exist.
 *
 * `isPlaceholder` keeps ReviewsSection in its honest state: heading plus one
 * line, and no names, quotes, star ratings, or source labels. No Review or
 * AggregateRating schema is emitted anywhere. This mirrors the behavior already
 * approved on the homepage, using the SAME component, so there is one place to
 * turn reviews on when they are real.
 */
export const REVIEWS = {
  heading: 'What Homeowners Say',
  isPlaceholder: true,
  emptyMessage: 'Customer reviews will be added here soon.',
} as const;

// ───────────────────────── Sub-service pages ─────────────────────────

export interface SubServiceContent {
  /** Defaults to "Professional [Name] for Hyde Park and Cache Valley". */
  supportingHeading?: string;
  supportingParagraphs: string[];
  /** Configurable so installation and maintenance pages are not forced into repair wording. */
  signsHeading: string;
  signs: ContentPoint[];
  /** Configurable for the same reason. "Causes" is wrong on an installation page. */
  causesHeading: string;
  causes: ContentPoint[];
  /** Optional one-line note appended to the shared "What to Expect" steps. */
  expectNote?: string;
  faqs: FaqItem[];
  /** Sibling sub-service slugs. The parent hub is linked automatically. */
  related: string[];
}

/**
 * The shared "What to Expect During Service" steps.
 *
 * Deliberately conservative. These describe a normal diagnose-then-explain-then-
 * do-the-agreed-work sequence and promise no timeline, price, or operational
 * commitment that has not been confirmed by the business. A sub-service can add
 * one clarifying line through `expectNote` but cannot replace the sequence.
 */
export const EXPECT_STEPS: ContentPoint[] = [
  {
    title: 'Review the concern',
    body: 'We start with what you have noticed, when it started, and whether anything has changed recently. What the homeowner has observed is usually the fastest route to the cause.',
  },
  {
    title: 'Evaluate the system',
    body: 'We look at the equipment or the affected area directly rather than working from the symptom alone, because the same symptom can come from more than one cause.',
  },
  {
    title: 'Explain the findings',
    body: 'We tell you what we found and what is actually driving the problem, in plain terms, before any work is done.',
  },
  {
    title: 'Review the options',
    body: 'Where there is more than one reasonable path, such as repairing a unit or replacing it, we lay out the choices so you can decide.',
  },
  {
    title: 'Complete and test the approved work',
    body: 'We do the work you agreed to and confirm it is behaving correctly before we leave.',
  },
];

export const subServiceContent: Record<string, SubServiceContent> = {
  // ───────────────── Plumbing: water heaters ─────────────────
  'water-heater-repair': {
    supportingParagraphs: [
      'A water heater is easy to ignore until the morning it stops producing hot water. Most homes in Cache Valley run either a conventional tank unit, which keeps a reservoir of water hot and ready, or a tankless unit, which heats water on demand as it passes through. The two fail in different ways, so the first job on any repair call is working out which part of the system is actually at fault.',
      'On a tank heater, the usual suspects are the heating elements or the gas burner, the thermostat, the thermocouple or igniter, the dip tube, and the anode rod. On a tankless unit, scale buildup inside the heat exchanger and ignition faults are more common. A tank that is leaking from the body of the tank itself is a different matter, because that is a failure of the vessel and it cannot be repaired.',
      'Cache Valley water carries a fair amount of mineral content, and that matters here. Hard water leaves sediment in the bottom of a tank and scale inside a tankless heat exchanger, both of which force the unit to work harder to deliver the same hot water. That is why a heater in this area can start underperforming years before the tank itself is worn out.',
    ],
    signsHeading: 'Signs You May Need Water Heater Repair',
    signs: [
      {
        title: 'No hot water at all',
        body: 'The clearest signal. On a gas unit the pilot or igniter is a common cause, and on an electric unit a failed element or a tripped high limit switch will do the same thing.',
      },
      {
        title: 'Hot water runs out quickly',
        body: 'If showers that used to be comfortable now go cold partway through, the tank may be losing capacity to sediment or one of two heating elements may have failed.',
      },
      {
        title: 'Water temperature swings',
        body: 'Water that alternates between scalding and cold usually points at a thermostat that is no longer reading correctly, or at scale in a tankless unit.',
      },
      {
        title: 'Water pooling near the tank',
        body: 'Moisture at the base of the heater needs attention promptly. It may be a fitting or the drain valve, which is repairable, or the tank itself, which is not.',
      },
      {
        title: 'Rumbling, popping, or banging',
        body: 'Those noises are typically sediment on the tank floor with water boiling underneath it. It is a sign the tank needs attention and is losing efficiency.',
      },
      {
        title: 'Rusty or discolored hot water',
        body: 'Brown or reddish water that appears only on the hot side often means the anode rod is spent and the tank lining has started to corrode.',
      },
    ],
    causesHeading: 'Common Causes of Water Heater Problems',
    causes: [
      {
        title: 'Sediment buildup',
        body: 'Minerals settle out of the water and collect on the bottom of the tank. The layer insulates the water from the burner, so the unit runs longer for less hot water and the tank floor overheats.',
      },
      {
        title: 'A failed heating element or burner',
        body: 'Electric heaters use two elements and can limp along on one, which shows up as hot water that runs out fast. Gas units depend on a burner and ignition assembly that can foul over time.',
      },
      {
        title: 'A worn out anode rod',
        body: 'The anode rod is a sacrificial part. It corrodes so the steel tank does not. Once it is consumed the tank itself starts to rust from the inside, which is why replacing it matters.',
      },
      {
        title: 'Thermostat failure',
        body: 'A thermostat that misreads the water temperature will either underheat the tank or drive it too hot, and the homeowner feels that as inconsistent water.',
      },
      {
        title: 'Scale in a tankless heat exchanger',
        body: 'Hard water leaves mineral scale in the narrow passages of a tankless unit. Flow drops, the unit works harder, and error codes and temperature swings follow.',
      },
      {
        title: 'Age',
        body: 'Every tank has a service life. Past a certain point the failures come more often and the economics shift toward replacement rather than another repair.',
      },
    ],
    faqs: [
      {
        question: 'Should I repair my water heater or replace it?',
        answer:
          'It depends on what failed and how old the unit is. A thermostat, an element, an igniter, or a drain valve are all normal repairs and are usually worth doing. A tank that is leaking from the tank body is not repairable and needs replacement. When a heater is well into its service life and the repair is a large one, replacement is often the better use of the money, and we will tell you when we think that is the case.',
      },
      {
        question: 'Why does my hot water run out faster than it used to?',
        answer:
          'The two usual explanations are sediment and a failed element. Sediment takes up volume in the tank and insulates the water from the heat source, so the tank holds and produces less usable hot water. On an electric heater, losing one of the two elements leaves the unit heating at roughly half strength, which feels exactly like a smaller tank.',
      },
      {
        question: 'Is a leaking water heater an emergency?',
        answer:
          'Treat it as urgent. Water near the base of a heater can be a fitting or the drain valve, which is a straightforward repair, but it can also be the tank itself giving way. A tank that fails outright releases its full contents. If you see standing water around the unit, it is worth shutting off the water supply to the heater and calling.',
      },
      {
        question: 'Does hard water affect a water heater in this area?',
        answer:
          'Yes, and it is one of the more common contributors we see. Mineral content in the local water settles as sediment in a tank and forms scale in a tankless heat exchanger. Both make the unit work harder for the same result, and both shorten how long the equipment performs well.',
      },
      {
        question: 'Can you repair a tankless water heater?',
        answer:
          'Yes. Tankless units fail differently than tanks, with scale in the heat exchanger, ignition faults, flow sensor problems, and error codes being the common ones. We diagnose the specific fault rather than assuming the unit needs replacing.',
      },
    ],
    related: ['water-heater-installation', 'leak-detection', 'pipe-repair'],
  },

  'water-heater-installation': {
    supportingParagraphs: [
      'Replacing a water heater is one of the few plumbing decisions a homeowner makes deliberately rather than in response to a failure, at least when it is done on schedule. The choice comes down to what kind of unit fits the house and the household, and getting the sizing right matters more than most people expect.',
      'A conventional tank heater stores hot water and is the familiar option in most Cache Valley homes. A tankless unit heats water as it flows, takes up less space, and does not run out of hot water during a long draw, though it needs adequate gas supply and venting and it is sensitive to hard water. Neither is automatically the right answer. A large household that runs showers back to back has different needs than a small one.',
      'Sizing is where an installation succeeds or disappoints. A tank that is too small leaves the house running out of hot water, and one that is too large wastes energy keeping water hot that nobody uses. For a tankless unit, the equivalent question is flow rate and how many fixtures might run at once. It is worth settling that question before a unit is chosen rather than after it is installed.',
    ],
    signsHeading: 'Signs It May Be Time to Replace Your Water Heater',
    signs: [
      {
        title: 'The tank itself is leaking',
        body: 'Water coming from the body of the tank rather than a fitting means the vessel has corroded through. That is the one water heater failure that cannot be repaired.',
      },
      {
        title: 'The unit is well into its service life',
        body: 'As a heater ages the failures cluster. When a unit that is already old needs a significant repair, replacement is often the more sensible investment.',
      },
      {
        title: 'Repairs are stacking up',
        body: 'One repair on an otherwise sound heater is normal. A third service call in a short span usually means the unit is telling you something.',
      },
      {
        title: 'Rusty hot water or a corroded tank exterior',
        body: 'Rust in the hot water or visible corrosion around the fittings and tank seams indicates the tank is deteriorating from the inside out.',
      },
      {
        title: 'The household has outgrown the heater',
        body: 'A tank sized for a smaller household will not keep up once there are more people and more back to back showers, no matter how well it is working.',
      },
    ],
    causesHeading: 'Reasons to Consider Water Heater Installation',
    causes: [
      {
        title: 'The existing unit has failed',
        body: 'The most common reason, and the one with the least warning. A tank that has given way needs to be replaced rather than patched.',
      },
      {
        title: 'Better efficiency',
        body: 'A newer, correctly sized unit generally uses less energy to deliver the same hot water than an aging one that is fighting sediment and a worn burner.',
      },
      {
        title: 'Moving to tankless',
        body: 'Homeowners who want to stop running out of hot water during long draws, or who want the floor space back, often look at an on demand unit.',
      },
      {
        title: 'Correcting a sizing mistake',
        body: 'If the house has never had enough hot water, the original heater may simply have been too small for the household. Replacement is the chance to fix that.',
      },
      {
        title: 'Planning ahead',
        body: 'Replacing a heater that is near the end of its life on your schedule is a calmer process than replacing one that failed overnight and flooded a utility closet.',
      },
    ],
    faqs: [
      {
        question: 'Should I choose a tank or a tankless water heater?',
        answer:
          'It depends on the house and the household. A tank unit is simpler, familiar, and generally less involved to install. A tankless unit saves space, will not run out of hot water during a long draw, and heats only when you call for water, but it needs adequate gas supply and venting and it is more sensitive to hard water. We look at how much hot water the home actually uses and what the existing gas and venting will support before recommending one.',
      },
      {
        question: 'What size water heater does my home need?',
        answer:
          'For a tank, the question is capacity against peak demand, meaning how much hot water the household draws in the busiest hour of the day rather than the total per day. For a tankless unit, the question is flow rate and how many fixtures could reasonably run at the same time. Both come down to the number of people, the number of bathrooms, and how the household actually uses hot water.',
      },
      {
        question: 'Is replacing a water heater a do it yourself job?',
        answer:
          'It is worth thinking carefully about. A water heater involves water under pressure, and on a gas unit it also involves a fuel supply and combustion venting, which is where the real risk sits. Getting the venting wrong on a gas heater is a safety problem rather than a performance one. If you are weighing it up, call and describe your setup and we will tell you what the job involves.',
      },
      {
        question: 'Will a new water heater lower my energy bill?',
        answer:
          'Usually it helps, though how much depends on what you are replacing. An older tank fighting a layer of sediment and a tired burner runs longer to produce the same hot water than a sound, correctly sized unit. We will not put a number on the savings, because that depends on your equipment, your usage, and your rates.',
      },
      {
        question: 'Does hard water affect which unit I should install?',
        answer:
          'It is worth factoring in. Mineral content in the local water leaves scale, and a tankless heat exchanger has narrow passages where scale has more effect than it does in a tank. That does not rule tankless out, but it does mean maintenance matters and it is part of the conversation before you choose.',
      },
    ],
    related: ['water-heater-repair', 'pipe-repair', 'leak-detection'],
  },

  // ───────────────── Plumbing: repairs and fixtures ─────────────────
  'leak-detection': {
    supportingParagraphs: [
      'The leaks that cost the most are the ones nobody sees. A visible drip under a sink is annoying but bounded. A supply line weeping inside a wall cavity, under a slab, or beneath a floor can run for months, and by the time it shows itself as a stain on a ceiling or a soft spot in a floor, the water has already been in the framing and insulation for a long time.',
      'Leak detection is the work of finding that source without opening up the house to look for it. The tools do the searching instead. Pressure testing isolates a section of the system and shows whether it holds. Acoustic equipment listens for the specific sound water makes escaping a pressurized line, which carries through slab and framing. A camera goes inside drain and sewer lines where the problem is not on the supply side at all.',
      'The point of the process is a small, deliberate opening in one correct place instead of exploratory demolition across a wall. Finding the leak precisely is what keeps the repair proportionate to the problem, and it is why detection is worth doing properly before anyone starts cutting.',
    ],
    signsHeading: 'Signs You May Have a Hidden Leak',
    signs: [
      {
        title: 'A water bill that climbed without explanation',
        body: 'A jump in usage with no change in household habits is one of the most reliable indicators of a leak somewhere in the system.',
      },
      {
        title: 'The sound of running water with everything off',
        body: 'If you can hear water moving when no fixture is running, water is going somewhere it should not be.',
      },
      {
        title: 'Warm or damp spots on the floor',
        body: 'A warm patch on a slab floor often means a hot water line is leaking underneath it. A persistently damp spot is worth investigating either way.',
      },
      {
        title: 'Stains, bubbling paint, or soft drywall',
        body: 'Discoloration on a ceiling or wall, paint that is lifting, or drywall that gives under light pressure all point to water arriving from behind.',
      },
      {
        title: 'A musty smell that will not clear',
        body: 'Persistent musty odor in a room, a basement, or a cabinet usually means moisture is sitting somewhere out of sight.',
      },
      {
        title: 'Water pressure that has dropped off',
        body: 'A loss of pressure with no other cause can mean water is escaping the line before it reaches the fixture.',
      },
    ],
    causesHeading: 'Common Causes of Hidden Water Leaks',
    causes: [
      {
        title: 'Corroded supply lines',
        body: 'Older galvanized and copper lines corrode from the inside. Eventually a pinhole opens, and a pinhole under pressure moves a surprising amount of water over time.',
      },
      {
        title: 'Failed joints and fittings',
        body: 'Connections are the weak points in any run of pipe. A joint that was stressed during installation or has worked loose over years of thermal movement will start to weep.',
      },
      {
        title: 'Slab leaks',
        body: 'Lines running under a concrete slab are subject to abrasion and shifting. A leak there is invisible by definition and often shows up first as a warm floor or an unexplained bill.',
      },
      {
        title: 'Freeze damage',
        body: 'Cache Valley winters are hard on pipe in unconditioned space. Water expands as it freezes, and a line that was stressed by a freeze can split or develop a slow weep that only shows up once it thaws.',
      },
      {
        title: 'Fixture and appliance connections',
        body: 'Supply lines to toilets, dishwashers, and washing machines sit behind and beneath things. A slow drip there can go unnoticed for a long time.',
      },
      {
        title: 'High water pressure',
        body: 'Pressure above what the system was designed for stresses every joint, fitting, and appliance connection in the house at once, which is why it produces leaks in several places rather than one.',
      },
    ],
    faqs: [
      {
        question: 'How do you find a leak without tearing up my house?',
        answer:
          'That is the entire purpose of the process. We use pressure testing to isolate which part of the system is losing water, acoustic equipment to listen for the sound of water escaping a pressurized line through slab or framing, and camera inspection where the problem is in a drain or sewer line. The goal is to locate the leak precisely enough that the repair means one deliberate opening rather than exploratory demolition.',
      },
      {
        question: 'What is a slab leak?',
        answer:
          'A leak in a water line that runs underneath the concrete slab of the house. They are difficult to spot because there is nothing visible to see. The usual clues are a warm patch on the floor when a hot line is involved, the sound of running water with the house quiet, an unexplained water bill, or moisture appearing at the edge of the slab.',
      },
      {
        question: 'How much water can a hidden leak waste?',
        answer:
          'A great deal more than people expect, because it runs continuously. A leak does not take a break overnight or while you are at work. That is why an unexplained increase in the water bill is worth taking seriously even when nothing in the house looks wrong.',
      },
      {
        question: 'My water bill went up but I cannot see any water. Is that possible?',
        answer:
          'Yes, and it is common. Water follows the path of least resistance, and that path often leads into a wall cavity, under a slab, or out into the soil around a buried line long before it reaches a surface where you would notice it. No visible water does not mean no leak.',
      },
      {
        question: 'Can a small leak really cause serious damage?',
        answer:
          'It can, because the damage is a function of time as much as volume. A slow leak that wets framing, insulation, and subfloor continuously for months does far more harm than a dramatic burst that gets shut off in ten minutes. The repair to the pipe is often the smaller part of the bill.',
      },
    ],
    related: ['pipe-repair', 'water-heater-repair', 'sewer-camera-inspection'],
  },

  'pipe-repair': {
    supportingParagraphs: [
      'Pipe repair covers a wide range, from a single failed section to repiping a whole house. What the work has in common is that the pipe carrying water through the home has stopped doing it reliably, whether that shows up as a burst line, a slow leak, low pressure, or water that has started to look wrong coming out of the tap.',
      'Cache Valley homes contain a mix of materials, and each ages differently. Galvanized steel, common in older houses, corrodes from the inside and gradually chokes off its own diameter, which is why an old home can lose pressure over decades without a single visible leak. Copper is durable but develops pinholes where water chemistry or high velocity has been working at it. PEX is flexible and resists freeze damage better than rigid pipe, though its fittings still need to be sound.',
      'Repairing a single section makes sense when the rest of the system is in good condition. When the same run keeps failing in different places, that is usually the pipe telling you the material is at the end of its life, and replacing the run is more economical than chasing one pinhole after another.',
    ],
    signsHeading: 'Signs You May Need Pipe Repair',
    signs: [
      {
        title: 'Water pressure has dropped',
        body: 'Pressure that has fallen off across the whole house often means corrosion has narrowed the inside of the supply piping.',
      },
      {
        title: 'Discolored or metallic tasting water',
        body: 'Brown, yellow, or rust tinted water, or a metallic taste, suggests the inside of the pipe is corroding and shedding into the water.',
      },
      {
        title: 'Visible corrosion, dimpling, or green staining',
        body: 'Where pipe is exposed in a basement or crawlspace, flaking, dimpling, or greenish deposits at joints mean the material is deteriorating.',
      },
      {
        title: 'Repeated leaks in the same run',
        body: 'One pinhole is an incident. A second and third in the same line is a pattern, and it usually means the whole run is due.',
      },
      {
        title: 'Banging or hammering in the walls',
        body: 'A sharp knock when a faucet shuts off puts real stress on joints and fittings over time and is worth addressing before it produces a leak.',
      },
      {
        title: 'Damp spots or stains near a pipe run',
        body: 'Moisture, staining, or soft drywall along the path a pipe takes means water is escaping somewhere along it.',
      },
    ],
    causesHeading: 'Common Causes of Pipe Damage',
    causes: [
      {
        title: 'Corrosion from the inside',
        body: 'Galvanized steel and older copper corrode internally over years. The damage is invisible from outside the pipe right up until it either restricts flow or opens a pinhole.',
      },
      {
        title: 'Freezing',
        body: 'Water expands when it freezes. A pipe in an exterior wall, a crawlspace, or an unheated garage can split under that pressure, and the failure often does not show itself until the thaw.',
      },
      {
        title: 'High water pressure',
        body: 'Pressure beyond what the system was built for stresses every joint in the house continuously. It shortens the life of pipe, fittings, and appliance connections alike.',
      },
      {
        title: 'Water hammer',
        body: 'The shock wave when a valve closes fast hits joints hard. Over years of repetition it loosens connections and fatigues the pipe.',
      },
      {
        title: 'Age and material',
        body: 'Every piping material has a service life, and older materials in particular reach a point where they begin failing in several places rather than one.',
      },
      {
        title: 'Ground movement and settling',
        body: 'Buried and under slab lines are subject to shifting soil, which puts bending stress on pipe that was never designed to flex.',
      },
    ],
    faqs: [
      {
        question: 'Should I repair one pipe or repipe the whole house?',
        answer:
          'If the rest of the system is sound, repairing the failed section is the sensible choice. The calculation changes when the same run keeps failing in new places, when pressure has dropped across the whole house, or when the piping material has clearly reached the end of its life. At that point repairs become a recurring cost and replacing the run is the better investment. We will tell you which situation we think you are in.',
      },
      {
        question: 'Why has my water pressure dropped throughout the house?',
        answer:
          'When it is the whole house rather than one fixture, corrosion inside the supply piping is a leading suspect, particularly in older galvanized systems where mineral and rust buildup gradually narrows the inside diameter. A hidden leak upstream and a failing pressure regulator can also produce it, so it is worth diagnosing rather than assuming.',
      },
      {
        question: 'Can a frozen pipe be repaired, or does it need replacing?',
        answer:
          'It depends on what the freeze did. A pipe that was stressed but did not split can often be left in place. A pipe that has split needs the damaged section replaced. What matters is checking the whole run rather than only the obvious break, because a freeze usually affects more than one point along a line.',
      },
      {
        question: 'What causes banging noises in my pipes?',
        answer:
          'The usual cause is water hammer, which is the shock wave produced when fast moving water is stopped abruptly by a valve closing. It is not just noise. That repeated shock stresses joints and fittings, so it is worth correcting before it produces a leak.',
      },
      {
        question: 'Is discolored water a plumbing problem or a water supply problem?',
        answer:
          'It can be either, which is why the pattern matters. Discoloration only on the hot side often points at the water heater. Discoloration on both hot and cold, particularly first thing in the morning after the water has been sitting, points more toward corrosion inside the home piping. If the whole neighborhood has it at once, the supply is the more likely source.',
      },
    ],
    related: ['leak-detection', 'water-heater-repair', 'toilet-repair'],
  },

  'toilet-repair': {
    supportingParagraphs: [
      'A toilet is a simple machine, which is good news when something goes wrong with it. Most of what fails is inside the tank, and most of it is repairable without replacing the fixture. The common faults are a flapper that no longer seals, a fill valve that will not shut off, a float set wrong, or a wax ring at the base that has lost its seal.',
      'The most expensive toilet problem is also the quietest. A toilet that runs continuously because the flapper is not seating is moving water constantly, and unlike a dripping faucet it makes almost no noise to remind you. That shows up on the water bill rather than anywhere in the house, and it can run for months before anyone thinks to check.',
      'A leak at the base is a different kind of problem and deserves faster attention. Water escaping there goes into the flooring and the subfloor underneath, where it does damage well before it becomes visible. When repair no longer makes sense, either because the bowl is cracked or because the fixture is old and repairs are stacking up, replacement is straightforward.',
    ],
    signsHeading: 'Signs You May Need Toilet Repair',
    signs: [
      {
        title: 'The toilet runs constantly',
        body: 'Water audibly refilling long after a flush, or cycling on by itself, means the flapper is not sealing or the fill valve is not shutting off.',
      },
      {
        title: 'A weak or incomplete flush',
        body: 'A flush that will not clear the bowl can be a clog, but it can also be a low tank level or a flapper closing too early.',
      },
      {
        title: 'Water on the floor around the base',
        body: 'Water pooling at the base points to a failed wax ring or a loose connection. This one is worth addressing quickly because the subfloor is what suffers.',
      },
      {
        title: 'The toilet rocks when you sit on it',
        body: 'Movement means the fixture is not properly secured, and that motion will break the seal underneath it if it has not already.',
      },
      {
        title: 'The bowl empties on its own',
        body: 'A water level that drops between uses can indicate a slow leak in the bowl or a venting problem in the drain line.',
      },
      {
        title: 'Clogs that keep coming back',
        body: 'A toilet that clogs repeatedly despite normal use is often pointing at a partial blockage further down the drain rather than at the fixture.',
      },
    ],
    causesHeading: 'Common Causes of Toilet Problems',
    causes: [
      {
        title: 'A worn flapper',
        body: 'The rubber flapper is the single most common failure. It hardens and warps with age until it no longer seats, and the toilet runs continuously as a result.',
      },
      {
        title: 'A failing fill valve',
        body: 'The fill valve refills the tank after a flush and shuts off at the right level. When it wears out it either will not stop filling or it will not fill enough.',
      },
      {
        title: 'A degraded wax ring',
        body: 'The wax ring seals the toilet to the drain flange. It compresses and ages, and once the seal is broken water escapes at the base on every flush.',
      },
      {
        title: 'A float set incorrectly',
        body: 'If the float sits too low the tank never fills enough for a strong flush. Too high and water spills into the overflow tube and runs continuously.',
      },
      {
        title: 'Mineral buildup in the rim jets',
        body: 'Hard water leaves deposits in the small openings under the rim. As they close up, less water enters the bowl and the flush weakens.',
      },
      {
        title: 'Loose or corroded mounting hardware',
        body: 'The bolts holding the toilet down corrode and loosen, which lets the fixture rock and breaks the seal beneath it.',
      },
    ],
    faqs: [
      {
        question: 'Why does my toilet keep running?',
        answer:
          'Almost always because water is escaping the tank into the bowl and the fill valve keeps replacing it. The usual culprit is a flapper that has hardened or warped and no longer seals. A fill valve that will not shut off, or a float adjusted so high that water spills into the overflow tube, will produce the same behavior. All three are normal repairs.',
      },
      {
        question: 'How much water does a running toilet waste?',
        answer:
          'A lot, and quietly. It runs around the clock without making enough noise to remind you it is doing it. This is one of the most common reasons a water bill climbs with no other explanation, which is why a toilet that runs is worth fixing promptly even though it feels like a minor annoyance.',
      },
      {
        question: 'Should I repair or replace my toilet?',
        answer:
          'Repair is usually the right call. Flappers, fill valves, floats, and wax rings are normal wear parts and replacing them is straightforward. Replacement makes more sense when the bowl or tank is cracked, when the fixture is old and the repairs have started stacking up, or when you want to move to a lower water use model.',
      },
      {
        question: 'Water is leaking around the base of my toilet. What does that mean?',
        answer:
          'Usually the wax ring has failed, which is the seal between the toilet and the drain flange in the floor. Sometimes the fixture is simply loose and rocking, which breaks that seal. Either way it is worth addressing quickly, because the water is going into the flooring and the subfloor where you cannot see what it is doing.',
      },
      {
        question: 'Why is my toilet flushing weakly?',
        answer:
          'Check the easy causes first. The tank may not be filling to the right level, or the flapper may be closing before the tank has emptied, either of which starves the flush. Mineral buildup in the rim jets restricts the water entering the bowl, which is common in hard water areas. A partial clog downstream will also weaken every flush.',
      },
    ],
    related: ['clogged-toilet', 'garbage-disposal-repair', 'leak-detection'],
  },

  'garbage-disposal-repair': {
    supportingParagraphs: [
      'A garbage disposal fails in a small number of recognizable ways, and the difference between them tells you a lot about whether it needs a repair or a replacement. A unit that hums but does not turn is jammed, and the motor is fine. A unit that does nothing at all has lost power, often to nothing more than a tripped reset button. A unit that leaks may be fixable at the connections or may be failing at the body of the housing, which is a different matter.',
      'Most of what goes wrong traces back to what went down the drain. Fibrous material like celery and corn husks wraps around the impellers. Grease goes in warm and liquid and cools into a solid coating further down the line. Coffee grounds and eggshells accumulate into a dense sludge that does not flush through. Bones and utensils simply jam the mechanism outright.',
      'The disposal also sits at the top of a drain, so a disposal that seems to be backing up may not be the problem at all. When water stands in the sink and the unit runs normally, the blockage is usually in the drain line downstream, and clearing the disposal will not fix it.',
    ],
    signsHeading: 'Signs You May Need Garbage Disposal Repair',
    signs: [
      {
        title: 'It hums but does not turn',
        body: 'The classic jam. Power is reaching the motor but something is blocking the impellers, and leaving it in that state is hard on the motor.',
      },
      {
        title: 'It does nothing when switched on',
        body: 'No hum and no movement usually means the unit has lost power, often through a tripped reset button or a breaker.',
      },
      {
        title: 'Water leaking under the sink',
        body: 'A drip beneath the unit may be at the sink flange, at the drain connection, or through the housing itself. Where it comes from decides whether it is repairable.',
      },
      {
        title: 'Loud grinding or rattling',
        body: 'Metal on metal noise generally means a hard object is in the chamber, though it can also mean internal components have come loose.',
      },
      {
        title: 'The sink drains slowly while the unit runs fine',
        body: 'That combination points downstream. The disposal is working and the blockage is in the drain line beyond it.',
      },
      {
        title: 'A persistent odor',
        body: 'Smell that returns after cleaning usually means food debris is trapped in the chamber or beginning to build up in the trap below.',
      },
    ],
    causesHeading: 'Common Causes of Garbage Disposal Failure',
    causes: [
      {
        title: 'Fibrous and starchy food',
        body: 'Celery, corn husks, onion skins, potato peels, and pasta wrap around or pack into the impellers rather than breaking apart the way the unit expects.',
      },
      {
        title: 'Grease and oil',
        body: 'Grease goes down warm and liquid and then cools. What it does is coat the inside of the drain line downstream, which is why a grease problem often looks like a disposal problem.',
      },
      {
        title: 'Hard objects',
        body: 'Bones, fruit pits, and the occasional utensil jam the mechanism immediately and can damage the impellers if the motor keeps straining against them.',
      },
      {
        title: 'Coffee grounds and eggshells',
        body: 'Both grind into fine particles that behave like sediment rather than washing away, and they accumulate in the trap below the unit.',
      },
      {
        title: 'Worn out motor or bearings',
        body: 'Disposals have a service life. A unit that trips its reset repeatedly, or that has become noticeably louder over time, may simply be worn out.',
      },
      {
        title: 'Corrosion of the housing',
        body: 'Once the grinding chamber itself corrodes through, the unit leaks from the body and cannot be sealed. That is a replacement rather than a repair.',
      },
    ],
    faqs: [
      {
        question: 'My disposal hums but will not turn. What does that mean?',
        answer:
          'It means the motor is getting power but something is stopping the impellers from moving, which is a jam rather than an electrical fault. That is generally good news, because the motor itself is usually fine. It is worth cutting power to the unit before anyone goes near the chamber, and it is worth not leaving it humming, because a motor straining against a jam can be damaged by it.',
      },
      {
        question: 'What should not go down a garbage disposal?',
        answer:
          'Grease and cooking oil are the biggest offenders, because they go down as a liquid and solidify in the line further along. Fibrous vegetables such as celery and corn husks wrap around the impellers. Coffee grounds and eggshells behave like sediment and pack into the trap. Bones and fruit pits jam the mechanism outright. Starchy foods like pasta and potato peels swell and pack together.',
      },
      {
        question: 'Should I repair my disposal or replace it?',
        answer:
          'Jams, tripped resets, and leaks at the sink flange or drain connection are all normal repairs and are usually worth doing. Replacement is the better answer when the housing itself is leaking, which means the body has corroded through, or when the motor is worn out and the unit keeps tripping its reset under normal use.',
      },
      {
        question: 'My sink is backing up but the disposal runs fine. Is the disposal broken?',
        answer:
          'Probably not. If the unit spins normally and water still stands in the sink, the blockage is almost certainly in the drain line downstream of the disposal rather than in the unit itself. Clearing the disposal will not help, and the drain is what needs attention.',
      },
      {
        question: 'Why does my disposal smell even after I clean it?',
        answer:
          'Odor that comes back after cleaning usually means debris is trapped somewhere you are not reaching, either lodged in the grinding chamber or accumulating in the trap below the unit. Persistent smell is often the first hint that material is building up in the drain line rather than washing through it.',
      },
    ],
    related: ['drain-cleaning', 'toilet-repair', 'pipe-repair'],
  },

  // ───────────────── Plumbing: drain and sewer ─────────────────
  'drain-cleaning': {
    supportingParagraphs: [
      'A slow drain is a warning, not an inconvenience. Drains do not slow down at random. They slow down because the inside diameter of the pipe is closing up, and whatever is causing that will keep going until the line stops entirely. Clearing it early is a smaller job than clearing it after it has backed up into a tub.',
      'What builds up depends on which drain it is. Kitchen lines fill with grease and food solids that cool and stick to the pipe wall. Bathroom lines are usually hair bound with soap scum, which forms a mat that catches everything else passing through. Laundry lines collect lint and detergent residue. In every case the material narrows the pipe gradually rather than blocking it all at once.',
      'It matters whether one fixture is slow or several. A single slow drain is a local blockage in that branch line. Several fixtures draining slowly at the same time, particularly on the lowest level of the house, is a different signal. That points at the main line, and it is a bigger problem than a clogged sink.',
    ],
    signsHeading: 'Signs You Need Drain Cleaning',
    signs: [
      {
        title: 'Water pools around the drain',
        body: 'Standing water in a sink, tub, or shower while it is in use means the line is no longer carrying water away as fast as it arrives.',
      },
      {
        title: 'Gurgling from the drain',
        body: 'Gurgling means air is being pulled through a partial blockage. It is often the sound a drain makes before it stops draining altogether.',
      },
      {
        title: 'A smell coming up from the drain',
        body: 'Odor usually means organic material is decomposing on the walls of the pipe rather than washing through it.',
      },
      {
        title: 'The clog keeps coming back',
        body: 'A drain that clears and then slows again within weeks was never really cleared. Something further down the line is still there.',
      },
      {
        title: 'More than one fixture is slow',
        body: 'Multiple slow drains at once, especially on the lowest floor, suggests the problem is in the main line rather than in any single branch.',
      },
      {
        title: 'Water backs up somewhere else',
        body: 'A sink that backs up when the washing machine drains means the two share a line and that line is restricted.',
      },
    ],
    causesHeading: 'Common Causes of Drain Blockages',
    causes: [
      {
        title: 'Grease and cooking oil',
        body: 'Poured down warm as a liquid, grease cools and hardens on the pipe wall further along the line. It then catches every solid that passes and the blockage builds on itself.',
      },
      {
        title: 'Hair and soap scum',
        body: 'The dominant cause in bathroom drains. Hair binds with soap residue into a mat that anchors to the pipe and traps whatever comes next.',
      },
      {
        title: 'Food waste',
        body: 'Coffee grounds, eggshells, starchy foods, and fibrous scraps do not break down the way people assume. They settle and compact in the trap and the line.',
      },
      {
        title: 'Mineral buildup',
        body: 'Hard water leaves scale on the inside of the pipe over time. It narrows the effective diameter and gives other debris something to catch on.',
      },
      {
        title: 'Foreign objects',
        body: 'Wipes that are labeled flushable, dental floss, cotton swabs, and small objects do not break apart in a drain line and are common anchors for a larger clog.',
      },
      {
        title: 'A problem further down the line',
        body: 'Sometimes the branch drain is clear and the restriction is in the main line beyond it. That is why a clog that keeps returning is worth looking at with a camera rather than snaking again.',
      },
    ],
    faqs: [
      {
        question: 'Are chemical drain cleaners a good idea?',
        answer:
          'We do not recommend relying on them. They work by generating heat and a caustic reaction inside the pipe, and if the clog does not clear, that mixture sits in the line against the pipe wall. Repeated use is hard on older pipe and on the seals in the system, and the product usually punches a channel through a clog rather than removing it, which is why the drain slows down again shortly afterward.',
      },
      {
        question: 'Why does my drain keep clogging in the same place?',
        answer:
          'Because whatever is causing it was never fully removed. A cable can open a hole through a blockage and restore flow while leaving most of the buildup on the pipe wall, and the clog rebuilds on that foundation. A recurring clog can also mean something structural is going on, like a belly in the line or root intrusion, which is when a camera inspection is worth doing.',
      },
      {
        question: 'What is the difference between snaking and hydro jetting?',
        answer:
          'A cable, or snake, bores through the blockage and restores flow. Hydro jetting uses high pressure water to scour the full inside diameter of the pipe and remove the buildup that is stuck to the wall. Snaking is right for a discrete clog. Jetting is right when the pipe is coated with grease or scale, or when the same line keeps clogging.',
      },
      {
        question: 'Several drains are slow at once. Is that different from one slow drain?',
        answer:
          'Yes, and it is worth taking more seriously. A single slow fixture is a blockage in that branch. Several fixtures slow at the same time, particularly on the lowest level, usually means the restriction is in the main line that serves the entire house. That is a main line problem rather than a drain cleaning problem.',
      },
      {
        question: 'What can I do to keep drains clear?',
        answer:
          'Keep grease out of the kitchen drain entirely, including the grease that comes off pans in warm water. Use a strainer in sinks and tubs to catch hair and food solids. Do not put anything down a toilet other than waste and toilet paper, whatever the packaging says about being flushable. And treat a drain that has started to slow as something to deal with rather than live with.',
      },
    ],
    related: ['clogged-toilet', 'hydro-jetting', 'main-line-cleaning'],
  },

  'clogged-toilet': {
    supportingParagraphs: [
      'Most toilet clogs come out with a plunger. The ones that do not are telling you something, and continuing to plunge a toilet that will not clear tends to make the situation worse rather than better. When a blockage will not move, the useful question is whether the obstruction is in the toilet itself or further down the line.',
      'A blockage in the fixture is usually an object or a mass of material lodged in the trap, which is the S-shaped bend built into the base of the toilet. That is cleared with a closet auger, which is designed to reach through the trap without scratching the porcelain. A blockage past the fixture is a drain problem, and no amount of work at the toilet will resolve it.',
      'A toilet that clogs over and over under normal use is rarely a toilet problem at all. It usually means the drain line it empties into is partially restricted, so the fixture only functions until the next flush overwhelms what capacity remains. That is the point at which looking down the line with a camera makes more sense than clearing the same clog a fourth time.',
    ],
    signsHeading: 'Signs You Need Help With a Clogged Toilet',
    signs: [
      {
        title: 'Plunging is not clearing it',
        body: 'If a plunger has not moved the blockage after a reasonable effort, something is lodged in a way that a plunger cannot dislodge.',
      },
      {
        title: 'The bowl fills and drains very slowly',
        body: 'Water that rises high and then creeps down means the passage is partially open. There is a restriction but not a complete block.',
      },
      {
        title: 'The toilet clogs repeatedly',
        body: 'Recurring clogs under normal use usually point at a restriction in the drain line rather than at the fixture.',
      },
      {
        title: 'Other fixtures react when you flush',
        body: 'A tub gurgling or a sink bubbling when the toilet is flushed means the blockage is downstream and shared, not in the toilet.',
      },
      {
        title: 'Water backs up somewhere else',
        body: 'Flushing that pushes water up into a shower or tub drain is a main line signal and should be treated as more urgent than a single clog.',
      },
      {
        title: 'An object went in',
        body: 'Toys, brushes, and phones lodge in the trap and will not pass. Those come out rather than get pushed through.',
      },
    ],
    causesHeading: 'Common Causes of Toilet Clogs',
    causes: [
      {
        title: 'Too much paper at once',
        body: 'The most common cause and the easiest to fix. A large volume of paper in a single flush can pack into the trap rather than clearing it.',
      },
      {
        title: 'Wipes labeled flushable',
        body: 'They do not break apart the way toilet paper does. They snag in the trap and in the line, and they catch everything that comes after them. This is one of the most common causes of a stubborn clog.',
      },
      {
        title: 'Objects in the trap',
        body: 'Anything that is not waste or toilet paper tends to lodge in the S-bend. It has to be retrieved rather than forced through.',
      },
      {
        title: 'A weak flush',
        body: 'If the tank is not filling properly or mineral buildup has closed up the rim jets, the flush does not have the force to clear the trap, so clogs happen more often.',
      },
      {
        title: 'A restriction in the drain line',
        body: 'When the line beyond the toilet is partially blocked, the fixture will clog repeatedly no matter how well the toilet itself is working.',
      },
      {
        title: 'A main line or venting problem',
        body: 'Root intrusion or a blockage in the main line will show up first at the lowest fixture in the house, which is often a toilet.',
      },
    ],
    faqs: [
      {
        question: 'Why will my toilet not unclog with a plunger?',
        answer:
          'A plunger works by moving water back and forth to break up a soft blockage. It cannot do much against a solid object lodged in the trap, and it cannot reach a blockage that is past the fixture in the drain line. If a reasonable effort with a plunger has not worked, the answer is usually a closet auger or a look further down the line rather than more plunging.',
      },
      {
        question: 'Are flushable wipes actually safe to flush?',
        answer:
          'They are among the most common causes of stubborn clogs we deal with, so we would not treat the label as reassurance. Toilet paper is designed to break apart quickly in water. Wipes are designed to hold together, and they keep holding together in your drain line, where they snag and catch everything that follows.',
      },
      {
        question: 'My toilet keeps clogging even with normal use. Why?',
        answer:
          'That pattern usually means the problem is not the toilet. Either the flush is too weak to clear the trap reliably, which can come from a low tank level or mineral buildup in the rim jets, or the drain line the toilet empties into is partially restricted. Repeated clogs under normal use are worth investigating properly rather than clearing again.',
      },
      {
        question: 'Water comes up in my shower when I flush the toilet. What does that mean?',
        answer:
          'That is a main line signal and it deserves prompt attention. It means the blockage is downstream of both fixtures, so waste water from the toilet has nowhere to go except back up through the lowest opening it can find, which is usually a shower or tub drain. That is a main line issue rather than a clogged toilet.',
      },
      {
        question: 'Can I use a chemical drain cleaner on a clogged toilet?',
        answer:
          'We would not. It tends not to clear a solid blockage in a trap, and it leaves a caustic mixture standing in the bowl and the line, which then has to be dealt with by whoever works on it next. A closet auger addresses the actual blockage without putting chemicals into the system.',
      },
    ],
    related: ['toilet-repair', 'drain-cleaning', 'main-line-cleaning'],
  },

  'main-line-cleaning': {
    supportingParagraphs: [
      'The main line is the single pipe that carries everything from your home out to the sewer or septic system. Every fixture in the house feeds into it. That is what makes a main line blockage different in character from a clogged sink, because when the main line closes up, nothing in the house has anywhere to drain.',
      'The tell is that several fixtures fail at once. A single clogged drain affects one fixture. A main line blockage shows up as multiple drains slowing together, toilets bubbling when a washing machine empties, and water rising in a basement shower or floor drain when an upstairs toilet is flushed. Waste water backs up and finds the lowest opening in the house, which is why the basement is usually where you see it first.',
      'Clearing the main line means running a cable through it from a cleanout to remove the blockage and restore flow. What matters just as much is understanding why it blocked. Grease and debris accumulate gradually. Roots are a recurring problem that will come back on a schedule. A cracked or bellied section will keep catching material indefinitely. Confirming flow is the end of the clearing job, and a camera inspection is often what turns it into a fix rather than a reprieve.',
    ],
    signsHeading: 'Signs Your Main Line Needs Cleaning',
    signs: [
      {
        title: 'Several drains are backing up at once',
        body: 'The defining symptom. When multiple unrelated fixtures slow or back up together, the problem is the line they all share.',
      },
      {
        title: 'Water rises in a basement drain or shower',
        body: 'Waste water backing up at the lowest point in the house means it cannot get out through the main line and is finding the nearest opening.',
      },
      {
        title: 'Toilets gurgle when other fixtures drain',
        body: 'Air being displaced through a restricted main line makes fixtures react to each other. A toilet bubbling when the washer empties is a classic sign.',
      },
      {
        title: 'Sewage odor indoors or in the yard',
        body: 'Smell means waste is sitting where it should be moving, or escaping the line somewhere along its run.',
      },
      {
        title: 'Backups keep returning',
        body: 'A main line that clogs again a few months after being cleared is usually dealing with roots or a structural defect rather than ordinary debris.',
      },
      {
        title: 'Wet patches or unusually green grass over the line',
        body: 'A soggy strip or a noticeably lush line across the yard can mean the sewer line is leaking underneath it.',
      },
    ],
    causesHeading: 'Common Causes of Main Line Blockages',
    causes: [
      {
        title: 'Tree root intrusion',
        body: 'Roots find the moisture in a sewer line and work in through joints and small cracks. Once inside they grow into a mesh that catches solids, and they come back unless the entry point is dealt with.',
      },
      {
        title: 'Grease accumulation',
        body: 'Years of kitchen grease coat the inside of the line. The buildup narrows the pipe and gives everything else a surface to stick to.',
      },
      {
        title: 'Wipes and non flushable items',
        body: 'Wipes, paper towels, and hygiene products do not break down. They collect at any rough spot or joint in the line and quickly build into a full blockage.',
      },
      {
        title: 'A belly or sag in the line',
        body: 'Ground settling can leave a low section where water and solids sit rather than flowing through. That section will keep collecting material no matter how often it is cleared.',
      },
      {
        title: 'Cracked or collapsed pipe',
        body: 'A broken section catches debris and lets soil in. Cleaning restores flow temporarily, but the defect is still there and the blockage will return.',
      },
      {
        title: 'Scale and buildup in older pipe',
        body: 'Older cast iron lines corrode and scale internally, roughening the pipe wall and narrowing it until material that used to pass through no longer does.',
      },
    ],
    faqs: [
      {
        question: 'How do I know if the problem is my main line and not one drain?',
        answer:
          'Count the fixtures. One slow drain is a local clog in that branch. When several fixtures back up at once, when a toilet gurgles as the washing machine drains, or when water rises in a basement shower or floor drain while an upstairs toilet is flushed, the line they all share is the problem. Multiple fixtures failing together is the main line signal.',
      },
      {
        question: 'Why does my main line keep backing up after it was cleared?',
        answer:
          'Because clearing a blockage and fixing its cause are different things. Roots grow back. A bellied section keeps collecting material because water sits there rather than flowing through. A cracked pipe keeps catching debris. If a main line has backed up more than once, a camera inspection is the way to find out whether you are dealing with ordinary buildup or a structural defect.',
      },
      {
        question: 'Can tree roots really get into a sewer line?',
        answer:
          'Yes, and it is one of the most common causes of a recurring main line problem. Roots are drawn to the moisture and nutrients in a sewer line and enter through joints and hairline cracks. Once inside, they grow into a mesh across the pipe that catches solids and turns into a blockage. The tree does not have to be near the line for its roots to reach it.',
      },
      {
        question: 'Is a main line backup urgent?',
        answer:
          'It should be treated that way. When the main line is blocked, waste water has nowhere to go and it will come back up through the lowest fixture in the house, which usually means a basement floor drain, shower, or tub. It is worth limiting water use in the home until it is cleared, because every gallon that goes down a drain has to come out somewhere.',
      },
      {
        question: 'Do you need a cleanout to clear the main line?',
        answer:
          'A cleanout is the access point built into the line specifically for this purpose, and having one makes the job considerably more straightforward. If a home does not have an accessible cleanout, there are other ways in, but they are more involved. It is one of the first things we look for.',
      },
    ],
    related: ['sewer-line-repair', 'sewer-camera-inspection', 'hydro-jetting'],
  },

  'sewer-line-repair': {
    supportingParagraphs: [
      'The sewer line is the pipe that carries waste from your house to the municipal sewer or a septic tank. It is buried, it is usually the oldest pipe on the property, and it is the one nobody thinks about until it fails. When it does fail, the consequences arrive indoors.',
      'Sewer lines fail in a handful of ways. Roots work in through joints and cracks and grow into a mesh that catches solids. Ground settling leaves a belly, which is a low spot where water and waste sit instead of flowing away. Older clay and cast iron pipe cracks, corrodes, and eventually collapses. Any of these produces the same experience for the homeowner, which is a line that backs up, gets cleared, and then backs up again.',
      'That repeating pattern is the important signal. A blockage cleared for the third time is not really a blockage problem, it is a structural one. Repair means addressing the defect itself, whether that is replacing a damaged section or replacing the run. A camera inspection is what tells you which, because the difference between one bad joint and a failing line is not something you can determine from the symptoms indoors.',
    ],
    signsHeading: 'Signs You May Need Sewer Line Repair',
    signs: [
      {
        title: 'Backups that keep coming back',
        body: 'The most telling sign. A line that is cleared and then backs up again within months is dealing with a defect, not ordinary debris.',
      },
      {
        title: 'Multiple fixtures backing up together',
        body: 'When the whole house drains poorly at once, the shared line out to the sewer is the common factor.',
      },
      {
        title: 'Sewage smell indoors or in the yard',
        body: 'Odor means waste is escaping the line or sitting in it. Either way the line is not doing its job.',
      },
      {
        title: 'Soggy patches or a lush green stripe in the yard',
        body: 'A line leaking underground waters and feeds the ground above it, and the lawn shows it before anything else does.',
      },
      {
        title: 'Sunken ground or a dip in the lawn',
        body: 'Soil washing into a broken pipe leaves a depression above the line. That usually means a significant break.',
      },
      {
        title: 'Slow drains throughout an older home',
        body: 'In a house with original clay or cast iron pipe, whole house sluggishness that will not resolve is worth looking at with a camera.',
      },
    ],
    causesHeading: 'Common Causes of Sewer Line Damage',
    causes: [
      {
        title: 'Tree root intrusion',
        body: 'The leading cause. Roots seek the moisture inside the line and enter through joints and small cracks, then expand and break the pipe apart as they grow.',
      },
      {
        title: 'Age and material failure',
        body: 'Clay and cast iron were standard for decades and both have a finite life. Clay cracks and shifts at the joints. Cast iron corrodes from the inside until the wall gives.',
      },
      {
        title: 'Bellies from ground settling',
        body: 'Soil movement leaves a sag in the run. Water and solids collect in the low spot instead of flowing through, and that section blocks repeatedly.',
      },
      {
        title: 'Ground shifting and freeze cycles',
        body: 'Seasonal freeze and thaw moves soil, and soil movement puts bending stress on a rigid buried pipe that was never designed to flex.',
      },
      {
        title: 'Corrosion and scale',
        body: 'Older metal pipe roughens and narrows internally as it corrodes, so material that once passed through begins to catch and accumulate.',
      },
      {
        title: 'Crushing from above',
        body: 'Heavy loads over a shallow line, or construction and excavation nearby, can crack or crush a section outright.',
      },
    ],
    faqs: [
      {
        question: 'How do I know if my sewer line is damaged rather than just clogged?',
        answer:
          'Repetition is the clue. A one time blockage that clears and stays clear was a clog. A line that is cleared and backs up again within a few months is a line with something wrong with it, whether that is roots, a belly, or a crack. Sewage odor, soggy ground or unusually green grass along the line, and a dip in the lawn all point at damage rather than debris. A camera inspection settles it.',
      },
      {
        question: 'Can a sewer line be repaired, or does the whole line need replacing?',
        answer:
          'It depends entirely on what the camera shows. A single cracked section or one bad joint can be addressed on its own. A line that is failing along its length, or an old clay line that is cracked in multiple places, is a different situation and repeated spot repairs stop making economic sense. That is exactly why we look before we quote an approach.',
      },
      {
        question: 'How do tree roots get into a sewer line?',
        answer:
          'They follow the water. A sewer line carries moisture and nutrients, and even a hairline crack or a slightly loose joint releases enough vapor into the surrounding soil for roots to find it. Once a root tip is inside, it grows in the space available, which is the inside of your pipe. Over time it forms a mesh that catches solids and eventually breaks the pipe apart.',
      },
      {
        question: 'What is a belly in a sewer line?',
        answer:
          'A low spot where the pipe has sagged, usually because the soil underneath it settled. The line no longer runs continuously downhill, so water and waste pool in the dip rather than flowing out. Solids drop out of the standing water and accumulate. A bellied section will clog again and again no matter how many times it is cleared, because gravity is working against it.',
      },
      {
        question: 'Does homeowners insurance cover a sewer line?',
        answer:
          'That is between you and your insurer, and we would not want to guess at your policy. Coverage for buried sewer lines varies considerably and is often a separate endorsement rather than part of standard coverage. It is worth asking your carrier directly what your policy includes.',
      },
    ],
    related: ['sewer-camera-inspection', 'main-line-cleaning', 'hydro-jetting'],
  },

  'hydro-jetting': {
    supportingParagraphs: [
      'Hydro jetting cleans a drain or sewer line with water rather than a cable. A hose with a specialized nozzle is fed into the line and high pressure water is directed at the pipe wall, scouring off what has accumulated there and flushing it out of the system.',
      'The difference from snaking is worth being precise about, because the two are not interchangeable. A cable bores through a blockage. It opens a channel and restores flow, which is exactly what you want when a discrete clog is sitting in an otherwise clean pipe. What a cable does not do is remove the layer of grease, scale, and buildup coating the inside of the line. Jetting does, which is why it restores something close to the original diameter rather than punching a hole through the middle of the problem.',
      'That makes it the right tool in specific situations. Kitchen lines with years of grease on the walls. Lines that clog again a few weeks after every snaking. Sewer lines with root hair and scale. It is not the right tool everywhere, and pipe condition matters, which is why a camera inspection is often the sensible first step. Jetting a line that is already cracked or collapsed is not a good idea, and knowing that in advance is worth the look.',
    ],
    signsHeading: 'When Hydro Jetting May Help',
    signs: [
      {
        title: 'The same line clogs over and over',
        body: 'A drain that is cleared and slows again within weeks was never really cleaned. The buildup is still on the pipe wall and the clog is rebuilding on it.',
      },
      {
        title: 'Snaking works but does not last',
        body: 'Flow returns after a cable and then degrades. That is the signature of a coated pipe rather than a discrete blockage.',
      },
      {
        title: 'Kitchen lines with years of grease',
        body: 'Grease accumulates as a layer on the pipe wall. A cable passes straight through it. Jetting is what actually takes it off.',
      },
      {
        title: 'Sewer lines with root hair and scale',
        body: 'Fine roots and mineral scale roughen the pipe and catch solids. Jetting scours the wall clean rather than boring through the middle.',
      },
      {
        title: 'Slow drainage across the whole house',
        body: 'When everything drains sluggishly rather than one fixture, the main line may be narrowed by buildup along its length.',
      },
      {
        title: 'Preventive cleaning of a known problem line',
        body: 'A line with a history of grease or root issues can be cleaned on a schedule rather than waiting for the next backup.',
      },
    ],
    causesHeading: 'Reasons to Consider Hydro Jetting',
    causes: [
      {
        title: 'It cleans the pipe wall, not just the clog',
        body: 'The core advantage. Jetting removes the material stuck to the inside of the pipe and restores the working diameter rather than opening a channel through it.',
      },
      {
        title: 'It handles grease properly',
        body: 'Grease is the one thing a cable is least effective against, because a cable simply passes through it. Water at pressure cuts it off the wall.',
      },
      {
        title: 'It cuts through root hair',
        body: 'Fine root intrusion that has grown into a mesh across the line can be cleared out, though it does not fix the crack or joint the roots came through.',
      },
      {
        title: 'The results last longer',
        body: 'Because the buildup is gone rather than bored through, there is much less left for the next clog to form on.',
      },
      {
        title: 'It reaches the full length of the line',
        body: 'The nozzle works its way along the run, which means the whole line gets cleaned rather than only the section where the blockage happened to sit.',
      },
      {
        title: 'It works as preventive maintenance',
        body: 'For a line with a known history of grease or roots, scheduled cleaning is a way to stay ahead of the backup rather than responding to it.',
      },
    ],
    expectNote:
      'The condition of the pipe matters on this service, because jetting is not the right approach for a line that is already cracked or collapsed. That is part of what we evaluate before recommending it.',
    faqs: [
      {
        question: 'What is the difference between hydro jetting and snaking a drain?',
        answer:
          'A snake, or cable, bores a channel through a blockage and restores flow. Hydro jetting uses high pressure water to scour the inside wall of the pipe and remove the material stuck to it. Think of the difference between punching a hole through a clog and actually cleaning the pipe. Snaking is right for a discrete clog in a clean line. Jetting is right when the pipe itself is coated with grease or scale, or when the same line keeps clogging.',
      },
      {
        question: 'Will hydro jetting damage my pipes?',
        answer:
          'Pipe condition is the thing that matters. In sound pipe, jetting is a normal cleaning method. In a line that is already cracked, corroded through, or partially collapsed, it is not the right choice. That is why the state of the line is something to establish rather than assume, and it is part of what we evaluate before recommending this service.',
      },
      {
        question: 'How long does hydro jetting last?',
        answer:
          'Longer than snaking the same line, because the buildup is removed rather than bored through, so there is less material left for a new clog to form on. How long depends on what put the buildup there. If grease keeps going down the kitchen drain, or if roots are still entering through a cracked joint, the line will load up again. Jetting cleans the pipe, it does not change what enters it.',
      },
      {
        question: 'Does hydro jetting get rid of tree roots for good?',
        answer:
          'It clears the roots that are in the line, which restores flow. It does not close the crack or joint they came in through, so as long as that opening exists the roots have a way back. Jetting is the right response to root intrusion, but if roots keep returning, the pipe itself needs attention.',
      },
      {
        question: 'How do I know whether jetting is right for my line?',
        answer:
          'It comes down to what is in the pipe and what condition the pipe is in. Jetting suits a line that is coated with grease, scale, or root hair and keeps clogging as a result. It does not suit a line that has already failed structurally. Those are different situations that can look identical from inside the house, which is why it is worth establishing which one you have rather than guessing at it.',
      },
    ],
    related: ['drain-cleaning', 'sewer-camera-inspection', 'main-line-cleaning'],
  },

  'sewer-camera-inspection': {
    supportingParagraphs: [
      'A sewer camera inspection puts a waterproof camera on a flexible cable and sends it down the line so you can see the inside of the pipe on a monitor in real time. It replaces guesswork with a picture, which matters a great deal when the alternative is digging up a yard to find out what is wrong.',
      'What it shows is the condition of the pipe and the exact nature and location of any problem. Roots that have grown in through a joint. A crack or a collapsed section. A belly where the line sags and water stands. Grease and scale coating the wall. Foreign objects. It also shows what the pipe is made of and roughly how much life is left in it, which is information you cannot get any other way.',
      'The situation where this earns its keep most clearly is a line that keeps backing up despite being cleared. That pattern almost always means a structural defect is holding material, and clearing the line a fourth time will not change that. Seeing the inside of the pipe turns a recurring problem into a specific one, with a known cause sitting at a known point along the run, which is the difference between a targeted repair and digging to find out.',
    ],
    signsHeading: 'When a Sewer Camera Inspection May Help',
    signs: [
      {
        title: 'The line keeps backing up',
        body: 'Recurring blockages after clearing mean something structural is holding material. A camera finds out what, instead of clearing it a fourth time.',
      },
      {
        title: 'The cause of a backup is unclear',
        body: 'When a line has been cleared and the reason it blocked is still unknown, looking inside is how you stop guessing at it.',
      },
      {
        title: 'The house is older',
        body: 'Homes on original clay or cast iron pipe are working with material that has a finite life. A camera shows how much of it is left.',
      },
      {
        title: 'Sewage smell or wet ground in the yard',
        body: 'Odor or a soggy patch over the line suggests waste is escaping. A camera locates the point of failure.',
      },
      {
        title: 'Before digging or jetting',
        body: 'Knowing exactly where the problem is, and how sound the pipe is, means the right method is used and any excavation happens in one correct place.',
      },
      {
        title: 'There are large trees near the line',
        body: 'Mature trees near a sewer run are a standing risk of root intrusion, and an inspection shows whether it has already begun.',
      },
    ],
    causesHeading: 'Reasons to Consider a Camera Inspection',
    causes: [
      {
        title: 'It locates the problem precisely',
        body: 'The camera reports both what the defect is and where it sits along the line, which is the difference between one targeted repair and exploratory digging.',
      },
      {
        title: 'It identifies the actual cause',
        body: 'Roots, a belly, a crack, grease, and scale all produce recurring backups and all need different responses. Guessing between them is expensive.',
      },
      {
        title: 'It confirms pipe condition before other work',
        body: 'Whether a line is sound enough for hydro jetting is not a question you want to answer by trying it. The camera answers it first.',
      },
      {
        title: 'It shows whether cleaning or repair is the answer',
        body: 'Buildup and a structural defect can produce the same backup. Which one you have decides whether the line needs cleaning or needs fixing.',
      },
      {
        title: 'It avoids unnecessary excavation',
        body: 'Digging blind to find a defect is the most expensive way to locate it. Seeing it first keeps the repair proportionate.',
      },
      {
        title: 'It verifies work after the fact',
        body: 'Running the camera after a line has been cleared or repaired confirms the line is actually clear rather than assuming it.',
      },
    ],
    faqs: [
      {
        question: 'Why not just clear the line again instead of looking inside it?',
        answer:
          'Because clearing a line and fixing what caused it to block are different things. If roots are coming in through a joint, or the pipe has sagged into a belly where waste collects, or a section has cracked, then the blockage is a symptom and it will return on its own schedule. Clearing it buys time. Seeing what is actually in there tells you whether you are buying time or solving the problem.',
      },
      {
        question: 'What can a sewer camera actually see?',
        answer:
          'The inside of the pipe in real time. That includes root intrusion, cracks, breaks, collapsed sections, bellies where the line sags and water stands, grease and scale on the pipe wall, foreign objects, and the general condition and material of the pipe. It also locates where along the run each of those sits.',
      },
      {
        question: 'Do I need an inspection if my drains are working fine?',
        answer:
          'Not as routine maintenance, no. It earns its keep in specific situations, such as a line that keeps backing up, an older home on original clay or cast iron pipe, mature trees near the sewer run, or planning work where the condition of the pipe changes the right approach. If the drains are behaving and none of those apply, there is no particular reason to look.',
      },
      {
        question: 'Can a camera inspection find a leak?',
        answer:
          'It can find defects in drain and sewer lines, which is where the camera goes. Cracks, breaks, and separated joints in that part of the system show up clearly. A leak in a pressurized water supply line is a different problem and is found with different tools, which is what leak detection is for.',
      },
      {
        question: 'My line was cleared last month and it is backing up again. Would a camera help?',
        answer:
          'That is one of the strongest cases for it. A line that backs up again shortly after being cleared is telling you the cause is still there, which usually means roots, a belly, or a crack rather than ordinary debris. Clearing it once more buys a few weeks. Looking at it tells you what you are actually dealing with.',
      },
    ],
    related: ['sewer-line-repair', 'main-line-cleaning', 'hydro-jetting'],
  },
};

// ───────────────────────── Build-time guards ─────────────────────────
//
// These run at build time (this module is imported by the service pages), so a
// content gap or a broken directory reference fails `npm run build` instead of
// shipping a page with a missing section or a link to a route that does not
// exist. This is the cheapest place to catch that class of mistake.

for (const service of services) {
  if (!hubContent[service.slug]) {
    throw new Error(
      `service-content.ts: no hubContent entry for category "${service.slug}". ` +
        `Every service in data/services.ts needs hub content to render its page.`,
    );
  }
}

for (const sub of subServices) {
  if (!subServiceContent[sub.slug]) {
    throw new Error(
      `service-content.ts: no subServiceContent entry for "${sub.slug}". ` +
        `Every sub-service in data/subservices.ts needs content to render its page.`,
    );
  }
}

// Every sub-service must appear in exactly one directory group on its own hub.
// This is what guarantees the hub directory is COMPLETE (no sub-service silently
// missing from its hub) and CORRECT (no group listing a slug that does not exist
// or belongs to the other category).
for (const [categorySlug, hub] of Object.entries(hubContent)) {
  const listed = hub.groups.flatMap((g) => g.slugs);

  const duplicates = listed.filter((slug, i) => listed.indexOf(slug) !== i);
  if (duplicates.length > 0) {
    throw new Error(
      `service-content.ts: "${categorySlug}" hub lists these sub-services more than once: ${duplicates.join(', ')}`,
    );
  }

  for (const slug of listed) {
    const sub = subServices.find((s) => s.slug === slug);
    if (!sub) {
      throw new Error(
        `service-content.ts: "${categorySlug}" hub directory references unknown sub-service "${slug}".`,
      );
    }
    if (sub.parent !== categorySlug) {
      throw new Error(
        `service-content.ts: "${categorySlug}" hub directory lists "${slug}", which belongs to "${sub.parent}".`,
      );
    }
  }

  const missing = subServices
    .filter((s) => s.parent === categorySlug && !listed.includes(s.slug))
    .map((s) => s.slug);
  if (missing.length > 0) {
    throw new Error(
      `service-content.ts: "${categorySlug}" hub directory is missing these sub-services: ${missing.join(', ')}. ` +
        `Every sub-service must be linked from its hub.`,
    );
  }
}

// Related links must resolve to a real sibling, never to the page itself.
for (const [slug, content] of Object.entries(subServiceContent)) {
  for (const relatedSlug of content.related) {
    if (relatedSlug === slug) {
      throw new Error(`service-content.ts: "${slug}" lists itself as a related service.`);
    }
    if (!subServices.some((s) => s.slug === relatedSlug)) {
      throw new Error(
        `service-content.ts: "${slug}" lists unknown related sub-service "${relatedSlug}".`,
      );
    }
  }
}

export const getHubContent = (categorySlug: string): HubContent | undefined =>
  hubContent[categorySlug];

export const getSubServiceContent = (subSlug: string): SubServiceContent | undefined =>
  subServiceContent[subSlug];
