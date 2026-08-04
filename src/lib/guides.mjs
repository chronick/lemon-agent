// Guide registry: order, titles, and per-guide intro copy.
// A chapter's collection id is "<guide-slug>/<chapter-slug>".

export const GUIDES = [
  {
    slug: 'coding-agents',
    number: 3,
    title: 'Working with Coding Agents',
    short: 'Coding agents',
    blurb:
      'The core field guide: verification loops, design interviews, ' +
      'adversarial reviews, orchestration, small tools, generated UIs. ' +
      'One step at a time, each with a paste-into-Claude setup.',
    intro:
      'Concrete patterns that survive real use: what to watch out for, ' +
      'and the habits worth building. Written for humans to adopt one ' +
      'step at a time; every step ends with an optional paste-into-Claude ' +
      'block that sets it up for you.',
  },
  {
    slug: 'git',
    number: 4,
    title: 'Shipping Software with Git + Claude Code',
    short: 'Git + Claude Code',
    blurb:
      'How git and an agent compose: checkpoint commits, branches as ' +
      'blast radius, history the next session can read, diff-not-summary ' +
      'review, and recovery cheap enough to lean on.',
    intro:
      'Git was already the safety net under fast-moving software; an ' +
      'agent makes it essential. These steps are the git habits that ' +
      'turn agent speed from a risk into an asset, adoptable one at a ' +
      'time, each with a paste-into-Claude setup.',
  },
  {
    slug: 'vault',
    number: 5,
    title: 'Keeping a Vault',
    short: 'The vault',
    blurb:
      'A personal knowledge base an agent can actually work: plain files ' +
      'in a repo, directories as state, an inbox habit, a daily log, and ' +
      'a doctor script keeping it honest.',
    intro:
      'A vault is a personal knowledge base built from plain markdown in ' +
      'a git repo, structured so an agent can file, find, triage, and ' +
      'maintain it with you. These steps build one from scratch, one ' +
      'habit at a time.',
  },
];

export const guideBySlug = (slug) => GUIDES.find((g) => g.slug === slug);
export const shortTitle = (t) => t.replace(/^Step \d+: /, '');
