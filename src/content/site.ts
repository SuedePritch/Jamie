/*
 * Site copy.
 *
 * Public-facing campaign copy is taken VERBATIM from Jamie's own draft
 * (CONTENT_DRAFT.md, the LISTEN/RESPECT/DELIVER section). It is her voice
 * and her commitments — do not rewrite, embellish, or "improve" it without
 * her say-so.
 *
 * Nothing from the research half of that document belongs here. That
 * material is an internal working reference: it contains strategy notes and
 * positions explicitly marked as not yet decided.
 *
 * Remaining placeholders are marked TODO.
 */

export const site = {
  candidate: 'Jamie Scrimger',
  office: 'City Council',
  city: 'Thunder Bay',
  // TODO: confirm which ward/at-large seat, and the election date.
  ward: '[TODO ward or at-large]',

  nav: [
    { label: 'Commitment', href: '#commitment' },
    { label: 'Priorities', href: '#priorities' },
    { label: 'Community', href: '#community' },
    { label: 'Get involved', href: '#involved' },
  ],

  hero: {
    slogan: ['Listen.', 'Respect.', 'Deliver.'],
    tagline: 'Leadership is service.',
    intro:
      'I believe being a municipal councillor is a responsibility to serve the people of Thunder Bay.',
    primaryCta: { label: 'Get involved', href: '#involved' },
    secondaryCta: { label: 'Read my commitment', href: '#commitment' },
  },

  opening: {
    heading: 'Leadership is service.',
    body: [
      'That means listening to our community, respecting people and their different perspectives, and working together to get things done.',
      'I don’t believe we need to agree on everything to make our city better. In fact, I believe healthy disagreement makes for better decisions—when we are willing to listen, debate ideas, and treat one another with respect.',
    ],
  },

  commitments: [
    {
      key: 'Listen',
      lead: 'Good decisions begin by listening.',
      body: [
        'I will take the time to hear from residents, businesses, community organizations, Indigenous partners, City staff and my fellow councillors.',
        'I will seek out different perspectives, ask questions and look at the evidence before making decisions.',
        'Listening doesn’t mean I will always agree. It means I will make the effort to understand.',
      ],
      pledge: 'I will listen before I decide.',
    },
    {
      key: 'Respect',
      lead: 'We can disagree without becoming divided.',
      body: [
        'I believe politics should be about ideas, not personal attacks.',
        'I will be prepared to ask difficult questions, challenge decisions and disagree when I believe something is not in Thunder Bay’s best interest. But I will do so respectfully.',
        'I will treat residents, City staff, community partners and fellow councillors with dignity—even when we see things differently.',
      ],
      pledge: 'I will challenge ideas, not people.',
    },
    {
      key: 'Deliver',
      lead: 'Leadership means turning good intentions into results.',
      body: [
        'Residents expect their municipal government to get things done.',
        'I will focus on practical priorities that Council can actually influence, understand the costs and long-term consequences of decisions, and work with the people and organizations needed to make good ideas happen.',
        'I will support measurable goals and follow up to see whether the decisions we make are actually delivering the results we promised.',
        'And when something belongs to the provincial or federal government, I will be honest about that—and advocate for Thunder Bay rather than making promises City Hall cannot keep.',
      ],
      pledge: 'I will work to turn decisions into results.',
    },
  ],

  /*
   * Themes only — subject areas, not positions. Jamie's research notes
   * state that platform commitments are not settled yet, so nothing here
   * asserts a policy stance. Add specifics only when she has decided them.
   */
  priorities: [
    {
      title: 'Responsible government',
      areas: ['Budget', 'Taxes', 'Accountability', 'Service delivery'],
    },
    {
      title: 'Infrastructure that lasts',
      areas: ['Roads', 'Water', 'Wastewater', 'Drainage', 'Asset management'],
    },
    {
      title: 'Smart growth',
      areas: ['Housing', 'Central Avenue', 'City-owned land', 'Economic development'],
    },
    {
      title: 'Safe & resilient',
      areas: [
        'Emergency management',
        'Wildfire',
        'Flooding',
        'Critical infrastructure',
        'Community safety',
      ],
    },
    {
      title: 'Working together',
      areas: [
        'Indigenous relationships',
        'Provincial & federal partnerships',
        'Regional cooperation',
      ],
    },
  ],

  closing: {
    heading: 'My commitment',
    lines: [
      'Listen to understand.',
      'Respect people, even when we disagree.',
      'Deliver results for our community.',
    ],
    tagline: 'Leadership is service.',
  },

  involved: {
    heading: 'Get involved',
    // TODO: Jamie to supply the real invitation line.
    body: '[TODO a line inviting people to volunteer, host a sign, or get in touch.]',
    // TODO: a real destination — a static site cannot process form posts,
    // so this needs a mailto: or a hosted form service.
    ctaLabel: 'Volunteer',
    ctaHref: '#',
    email: '[TODO campaign email]',
  },

  footer: {
    /*
     * LEGAL — must be filled before launch.
     *
     * Thunder Bay municipal elections run under Ontario's Municipal
     * Elections Act, 1996. Ontario requires campaign advertising to
     * identify who authorised it, and the exact required wording and
     * placement should be confirmed against the City of Thunder Bay
     * Clerk's candidate guide and the Act — not drafted from assumption.
     */
    disclaimer: '[TODO REQUIRED: authorisation statement — confirm wording with the City Clerk]',
  },
} as const;
