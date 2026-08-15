// Craft registry: the domain crafts mounted at lemon-agent.dev/{slug}.
// Settled IA (owner decision, 2026-08-07): canonical routes are
// /writing, /audio, /work, /science; the root route is the developer craft.
// Craft pages use the Lemon visual identity (citrus is editorial
// wordplay, not a craft palette). A craft page may exist UNLISTED while
// incubating;
// it earns primary navigation only after it provides a complete useful
// path (installable instrument + applicable judgment artifact + worked
// use path) and has been used by someone outside the house.

export const CRAFTS = [
  {
    slug: 'writing',
    title: 'Lemon Agent for Writing',
    short: 'Writing',
    status: 'v0',
    availability: 'Skill available',
    availabilityClass: 'available',
    listed: false,
    tagline: 'The agent interrogates, organizes, and cuts. You write.',
    story:
      'I have something to say, but I do not want an agent to write it for me.',
    cta: 'Start the Interview Conductor',
    ctaHref: '/writing/interview-conductor/',
    blurb:
      'Turn a conversation into notes and a writing brief, draft in your ' +
      'own voice, then use the agent to find weak prose and unsupported claims.',
  },
  {
    slug: 'work',
    title: 'Lemon Agent for Knowledge Work',
    short: 'Work',
    status: 'v0',
    availability: 'Skill available',
    availabilityClass: 'available',
    listed: false,
    tagline: 'Claims you can check, with a ledger to prove it.',
    story:
      'I need to trust the memo or report that somebody will make a decision from.',
    cta: 'Run the Verify-Info Pass',
    ctaHref: '/work/verify-info/',
    blurb:
      'Give an agent one document. Get back a claim ledger with sources, ' +
      'uncertainty, dates, and the follow-up each claim still needs.',
  },
  {
    slug: 'audio',
    title: 'Lemon Agent for Audio',
    short: 'Audio',
    status: 'v0',
    availability: 'Guide available',
    availabilityClass: 'guide',
    listed: false,
    tagline: 'Verification loops for sound: checks before ears.',
    story:
      'I know Ableton. I want an agent to measure and critique a bounce, not mix for me.',
    cta: 'Audit your next bounce',
    ctaHref: '/audio/#audit-your-next-bounce',
    blurb:
      'Export a bounce and a reference, run repeatable measurements, then ' +
      'return to Ableton with a short list of changes worth hearing.',
  },
  {
    slug: 'science',
    title: 'Lemon Agent for Science',
    short: 'Science',
    status: 'scoping',
    availability: 'Guide available',
    availabilityClass: 'guide',
    listed: false,
    tagline: 'One dataset, end to end, with provenance.',
    story:
      'I have a dataset and want a defensible path to a paper, poster, or presentation.',
    cta: 'Set up a reproducible project',
    ctaHref: '/science/#start-with-a-reproducible-project',
    blurb:
      'Keep data, analysis, figures, citations, and prose in a local ' +
      'Markdown, SQLite, and Python stack your agent can inspect and rerun.',
  },
];

export const craftBySlug = (slug) => CRAFTS.find((c) => c.slug === slug);
