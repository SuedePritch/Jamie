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
  ward: 'Red River Ward',
  // Thunder Bay municipal election. ISO forms are for machine-readable
  // markup; the display strings are what appears on the page.
  election: {
    date: '2026-10-26',
    dateLabel: 'October 26, 2026',
    termStart: '2026-11-15',
    termStartLabel: 'November 15, 2026',
  },

  nav: [
    { label: 'Commitment', href: '#commitment' },
    { label: 'About', href: '#about' },
    { label: 'Priorities', href: '#priorities' },
  ],

  hero: {
    slogan: ['Listen.', 'Respect.', 'Deliver.'],
    tagline: 'Leadership is service.',
    intro:
      `I believe a municipal councillor's responsibility is to serve the people of Thunder Bay.`,
    primaryCta: { label: 'About me', href: '#about' },
    secondaryCta: { label: 'Read my commitment', href: '#commitment' },
    tertiaryCta: { label: 'My priorities', href: '#priorities' },
  },

  opening: {
    heading: 'Leadership is service.',
    body: [
      'That means listening to our community, respecting people and their different perspectives, and working together to get things done.',
      'I don’t believe we need to agree on everything to make our city better. In fact, I believe healthy disagreement makes for better decisions—when we are willing to listen, debate ideas, and treat one another with respect.',
    ],
  },

  /*
   * About — the person, not the philosophy. The opening and commitments
   * already carry what Jamie believes; this section is for who she is,
   * where she comes from, and what she has done. Keep it factual and
   * verifiable: biography on a campaign site gets scrutinised, so every
   * claim here needs to be one Jamie can stand behind.
   */
  about: {
    heading: 'About Jamie',
    lead: 'Thunder Bay has become more than just where I live. It’s where I’ve built my life, my career, my connections and my commitment to the community I’m proud to call home.',

    /*
     * Grouped into three movements — roots, career, leadership — rather
     * than run as one block. The bio is long, and unbroken prose on a
     * phone is where readers give up.
     *
     * Jamie's draft closed by restating LISTEN / RESPECT / DELIVER. That
     * is deliberately NOT repeated here: the hero, the commitments and the
     * closing already carry it, and a fourth repetition inside About
     * dilutes the line rather than reinforcing it.
     */
    groups: [
      {
        title: 'Roots in the North',
        body: [
          'Born in Thompson, Manitoba, I grew up moving around Northern Canada as my father’s career in mining took our family to different communities. Those experiences gave me an early appreciation for the people, resilience and character that make northern communities special.',
          'Our family eventually settled in Kenora, where I spent my teenage years. In 2009, I moved to Thunder Bay—and I’ve been proud to call this community home ever since.',
        ],
      },
      {
        title: 'A career in emergency management',
        body: [
          'For more than 15 years, my career has focused on helping communities and organizations prepare for challenges, respond when things go wrong and become stronger afterward.',
          'I have worked with community leaders, governments, emergency services, First Nations and other partners to identify risks, develop plans, coordinate resources and respond to emergencies. My experience includes wildfire response, emergency operations, evacuation planning, business continuity, public communication, crisis response and community resilience.',
          'Much of my work has involved bringing people and organizations together when the situation is complex and the stakes are high. I have advised senior leaders, managed teams and resources, developed policies and procedures, secured funding, delivered training and helped communities prepare for a wide range of risks—from wildfire and flooding to infrastructure failures, medical emergencies and other crises.',
          'I have also worked extensively with First Nations communities and organizations, helping strengthen emergency-management capacity, develop best practices and build relationships across municipal, provincial, federal and Indigenous governments.',
        ],
      },
      {
        title: 'How I approach leadership',
        body: [
          'I believe good leaders don’t need to have all the answers. They need to listen, ask the right questions, understand the facts, bring people together and make thoughtful decisions.',
          'I also believe we can disagree without becoming divided. Municipal politics should be about solving problems—not personal attacks. I will be prepared to challenge ideas and ask difficult questions, while treating people with respect.',
        ],
      },
    ],

    // Short, checkable facts drawn from the bio above — nothing asserted
    // here that the prose does not already support.
    facts: [
      { label: 'In Thunder Bay since', value: '2009' },
      { label: 'Years in the field', value: '15+' },
      { label: 'Focus', value: 'Emergency management' },
    ],
  },

  commitments: [
    {
      key: 'Listen',
      lead: 'Good decisions begin by listening.',
      body: [
        'I will take the time to hear from residents, businesses, community organizations, partners, City staff and my fellow councillors.',
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
      lead: 'Turning good intentions into results.',
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
   * Priorities — four, in Jamie's own words, taken verbatim from her copy.
   * These replaced an earlier five-theme list that named subject areas only.
   * Unlike that list, these ARE positions: each states what she will support
   * and why, so treat the prose the same way as the commitments above and do
   * not reword it without her say-so.
   *
   * `intro` sets up the section; each entry carries its own heading and body
   * paragraphs. There are deliberately no area tags here — the prose does the
   * work the tag lists used to.
   */
  prioritiesIntro:
    'Thunder Bay has opportunities ahead, but good decisions require planning, collaboration and a clear understanding of the long-term impact on residents. My approach is simple: listen to residents, plan ahead, make responsible decisions and follow through.',

  priorities: [
    {
      title: 'Smart Growth & Responsible Development',
      body: [
        'Thunder Bay needs growth that creates opportunity while protecting the qualities that make our community a great place to live.',
        'I support building on the City\u2019s Smart Growth Action Plan by encouraging thoughtful development, increasing housing options and supporting economic opportunity while making smart use of existing infrastructure.',
        'I will work to ensure that when the City of Thunder Bay grows, it improves quality of life, strengthens communities and protects the green spaces and outdoor recreation we value.',
        'That means looking beyond individual projects and considering how development affects neighbourhoods, roads, municipal services, infrastructure and taxpayers over the long term.',
      ],
    },
    {
      title: 'Infrastructure & Resilience',
      body: [
        'Roads, water, sewers and other municipal infrastructure are services residents depend on every day. Maintaining them requires long-term planning and responsible investment.',
        'My emergency management background has taught me the importance of identifying vulnerabilities before they become emergencies.',
        'I will support strong asset management, preventative maintenance and responsible infrastructure investment that improves reliability and resilience while making careful use of taxpayer dollars.',
        'We need to plan for what Thunder Bay will need not only next year, but 10, 20 and 30 years from now.',
      ],
    },
    {
      title: 'Community Safety & Well-Being',
      body: [
        'Community safety is about responding effectively when something happens, but it is also about prevention, preparedness and addressing problems before they become crises.',
        'I will support our first responders and build on Thunder Bay\u2019s Community Safety & Well-Being Plan, with an emphasis on prevention, preparedness, early intervention and collaboration.',
        'The City cannot address these challenges alone. We need strong partnerships among the City, emergency services, First Nation governments, community organizations, service providers and other levels of government.',
        'My emergency management experience would bring a valuable perspective to Council: prepare before the emergency, strengthen partnerships before they are needed, and ensure our community can respond and recover when challenges occur.',
      ],
    },
    {
      title: 'Responsible, Respectful Leadership',
      body: [
        'Residents deserve representatives who listen, ask questions and explain how and why decisions are made.',
        'I believe people can disagree without being disagreeable. Council should be a place where different ideas are debated respectfully and decisions are ultimately focused on what is best for the community.',
        'I will listen before making decisions, ask thoughtful questions, respect different perspectives and focus on practical solutions.',
        'Most importantly, I believe in accountability. If I make a commitment to residents, I will work to follow through on it.',
      ],
    },
  ],

  /*
   * Closes the priorities section. Jamie's copy ends here by tying the four
   * priorities back to the slogan, so it lives with them rather than in the
   * separate closing block further down the page.
   */
  prioritiesOutro:
    'Listen. Respect. Deliver. isn\u2019t just a campaign slogan. It describes how I intend to serve Red River Ward.',

  closing: {
    heading: 'My commitment',
    lines: [
      'Listen to understand.',
      'Respect people, even when we disagree.',
      'Deliver results for our community.',
    ],
    tagline: 'Leadership is service.',
  },

  contact: {
    heading: 'Get in touch',
    email: 'jamiescrimgertbay@gmail.com',

    /*
     * Contributions are regulated by Ontario's Municipal Elections Act, 1996:
     * per-contributor limits apply, only individuals may contribute (not
     * corporations or unions), and contributors must supply a name and address
     * so the campaign can issue receipts and file its financial statement.
     * The note below tells contributors what the campaign needs from them; the
     * contribution limit is deliberately not stated as a number here because
     * it should be confirmed against the Clerk's candidate guide before being
     * published as a figure.
     */
    donations: {
      heading: 'Support the campaign',
      body:
        'Contributions can be sent by Interac e-Transfer to the campaign email above. ' +
        'Ontario rules allow contributions from individuals only — not from corporations ' +
        'or unions — so please include your full name and mailing address with your ' +
        'transfer. We need those details to issue your receipt.',
    },
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
    disclaimer: '',
  },
} as const;
