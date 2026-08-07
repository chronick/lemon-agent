// Wing registry: the domain verticals mounted at lemon-agent.dev/{slug}.
// Settled IA (owner decision, 2026-08-07): canonical routes are
// /writing, /audio, /work, /science; the root route is the Devs wing.
// Wings use the Lemon visual identity (citrus is editorial wordplay,
// not a wing palette). A wing page may exist UNLISTED while incubating;
// it earns primary navigation only after it provides a complete useful
// path (installable instrument + applicable judgment artifact + worked
// use path) and has been used by someone outside the house.

export const WINGS = [
  {
    slug: 'writing',
    title: 'Lemon Agent for Writing',
    short: 'Writing',
    status: 'v0',
    listed: false,
    tagline: 'The agent interrogates, organizes, and cuts. You write.',
    blurb:
      'The Interview Conductor (an installable skill that pulls a draft ' +
      'out of you one question at a time), a subtraction pass built on ' +
      'the Prose Failure List, and a hard rule about whose voice ' +
      'survives.',
  },
  {
    slug: 'work',
    title: 'Lemon Agent for Knowledge Work',
    short: 'Work',
    status: 'v0',
    listed: false,
    tagline: 'Claims you can check, with a ledger to prove it.',
    blurb:
      'The scope-plan-watch-verify-review loop without any code. First ' +
      'instrument: a verify-info pass that turns any document into a ' +
      'claim ledger. Scoping toward an installable skill.',
  },
  {
    slug: 'audio',
    title: 'Lemon Agent for Audio',
    short: 'Audio',
    status: 'v0',
    listed: false,
    tagline: 'Verification loops for sound: checks before ears.',
    blurb:
      'File-backed sessions, deterministic gates on every bounce, and ' +
      'analysis with receipts. The disciplined twin of lemon.audio.',
  },
  {
    slug: 'science',
    title: 'Lemon Agent for Science',
    short: 'Science',
    status: 'scoping',
    listed: false,
    tagline: 'One dataset, end to end, with provenance.',
    blurb:
      'A demonstration, not coverage: one pinned public dataset taken ' +
      'through a reproducible analysis, scoped in the open before the ' +
      'work.',
  },
];

export const wingBySlug = (slug) => WINGS.find((w) => w.slug === slug);
