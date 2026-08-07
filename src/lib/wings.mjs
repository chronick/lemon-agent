// Wing registry: the domain verticals mounted at lemon-agent.dev/{slug}.
// Each wing wears a citrus variety over the lemon base (see DESIGN.md).
// A wing is `v0` when it ships something usable today, `scoping` when the
// page is honestly just the plan. The nav gate for calling a wing a
// shipped *member* (instrument + judgment artifact, used by someone
// outside the house) is stricter than having a page.

export const WINGS = [
  {
    slug: 'writers',
    title: 'Lemon Agent for Writers',
    short: 'Writers',
    citrus: 'finger-lime',
    status: 'v0',
    tagline: 'The agent interrogates, organizes, and cuts. You write.',
    blurb:
      'A subtraction pass built on the Prose Failure List, an interview ' +
      'conductor that pulls a draft out of you, and a hard rule about ' +
      'whose voice survives.',
  },
  {
    slug: 'office',
    title: 'Lemon Agent for Office Work',
    short: 'Office',
    citrus: 'kumquat',
    status: 'v0',
    tagline: 'Research you can cite. Claims you can check.',
    blurb:
      'The scope-plan-watch-verify-review loop without any code: a ' +
      'research brief, a verify-info pass, and the start of an office ' +
      'failure list.',
  },
  {
    slug: 'audio',
    title: 'Lemon Agent for Audio',
    short: 'Audio',
    citrus: 'yuzu',
    status: 'v0',
    tagline: 'Verification loops for sound: checks before ears.',
    blurb:
      'File-backed sessions, deterministic gates on every bounce, and ' +
      'analysis with receipts. The disciplined twin of lemon.audio.',
  },
  {
    slug: 'science',
    title: 'Lemon Agent for Science',
    short: 'Science',
    citrus: 'bergamot',
    status: 'scoping',
    tagline: 'One dataset, end to end, with provenance.',
    blurb:
      'A demonstration, not coverage: charts, basic ML, and research ' +
      'notes that carry their sources, on one public dataset.',
  },
];

export const wingBySlug = (slug) => WINGS.find((w) => w.slug === slug);
