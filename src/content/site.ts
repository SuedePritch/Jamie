/*
 * All site copy lives here so content can be edited without touching markup.
 *
 * EVERY value marked TODO is placeholder text written by Claude and must be
 * replaced before launch. Nothing here is a factual claim about the
 * candidate — it is scaffolding to build against.
 */

export const TODO = '[TODO]';

export const site = {
  // TODO: real name, office, and jurisdiction.
  candidate: 'Jamie [TODO surname]',
  office: 'City Council',
  ward: '[TODO ward / district]',
  electionDate: '[TODO election date]',

  nav: [
    { label: 'About', href: '#about' },
    { label: 'Priorities', href: '#priorities' },
    { label: 'Community', href: '#community' },
    { label: 'Get involved', href: '#involved' },
  ],

  hero: {
    // TODO: the real slogan. This is the highest-value copy on the page.
    headline: 'A city that works for the people who live in it.',
    sub: '[TODO one-sentence positioning — who Jamie is and what she is running to change.]',
    primaryCta: { label: 'Get involved', href: '#involved' },
    secondaryCta: { label: 'Read the priorities', href: '#priorities' },
  },

  about: {
    heading: 'About Jamie',
    // TODO: real biography.
    body: [
      '[TODO paragraph one — who she is, her connection to the community, how long she has lived there.]',
      '[TODO paragraph two — relevant background and experience, and why she decided to run.]',
    ],
  },

  // TODO: real policy positions. Three is the right number — more dilutes.
  priorities: [
    {
      title: '[TODO priority one]',
      body: '[TODO two sentences on the problem and the specific change proposed.]',
    },
    {
      title: '[TODO priority two]',
      body: '[TODO two sentences on the problem and the specific change proposed.]',
    },
    {
      title: '[TODO priority three]',
      body: '[TODO two sentences on the problem and the specific change proposed.]',
    },
  ],

  // TODO: replace with real quotes, attributed and with permission.
  // Do not invent endorsements — fabricated quotes are a genuine liability.
  quote: {
    text: '[TODO a real quote from a resident, supporter, or endorser.]',
    attribution: '[TODO name, role]',
  },

  involved: {
    heading: 'Get involved',
    body: '[TODO a line inviting people to volunteer, host a sign, or get in touch.]',
    // TODO: a real destination. Options: mailto:, a form service, or a
    // hosted signup. A static Pages site cannot process form posts itself.
    ctaLabel: 'Volunteer',
    ctaHref: '#',
    email: '[TODO campaign email]',
  },

  footer: {
    /*
     * LEGAL — must be filled before launch.
     *
     * Most jurisdictions require an attribution statement ("Paid for by
     * ...") on campaign material, websites included, and the exact wording
     * is set by the local election authority. Requirements vary by country,
     * state/province, and municipality. This text must come from that
     * authority's guidance, not from a template or a guess.
     */
    disclaimer: '[TODO REQUIRED: authorised-by / paid-for-by statement per local election rules]',
  },
} as const;
