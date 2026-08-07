# Design notes

Two systems live here: the citrus visual language (the house and its
guides) and the wing architecture (how domains mount, incubate, and
earn navigation). The wing architecture is the settled owner decision
of 2026-08-07 and wins wherever the two touch.

## The citrus system (house + guides)

The house is lemon. The **guides and lists** wear citrus varieties over
the shared base, so sections are recognizable at a glance while
everything stays one brand:

| Surface | Citrus | Accent | Where it shows |
|---------|--------|--------|----------------|
| House + course (`/`, `/start/`) | **lemon** | chartreuse `#c7d86f` | the default everything layers on |
| Working with Coding Agents | **lime** | `#a4ce54` | `/guides/coding-agents/*` |
| Git + Coding Agents | **tangerine** | `#f2ab52` | `/guides/git/*` |
| Keeping a Vault | **grapefruit** | `#f293a2` | `/guides/vault/*` |
| Failure lists | **blood orange** | `#ef7c50` | `/prose-failure-list/`, `/agent-workflow-failure-list/` |

Mechanics: `Base.astro` defines an accent trio with lemon defaults
(`--accent`, `--accent-ink` at ≥4.5:1 on the paper background,
`--accent-soft`, `--accent-hover`; dark-mode variants alongside). A
page opts in via `citrus="lime"` on `Base` (sets `class="citrus-lime"`
on `<body>`); the same classes work on any container, which is how
index cards carry per-guide accents. House chrome never tints: the
brand header/footer, `.chip`, selection, and terminal blocks stay
chartreuse everywhere.

**Wings do not get citrus palettes.** Owner decision, 2026-08-07:
every wing uses the Lemon visual identity; citrus may appear in wing
prose as editorial wordplay, never as a wing palette or taxonomy.
(This supersedes the earlier note reserving yuzu for audio.)

## The wings: architecture (settled 2026-08-07)

- **Root is the Devs wing.** `/` with the course and field manual is
  the foundation the other domains build on.
- **Canonical wing routes**: `/writing`, `/audio`, `/work`,
  `/science`. Wing content is canonical in `wings/*.md`, served raw at
  `/wings/*.md`; instrument pages nest under the wing route
  (`/writing/interview-conductor`). Existing public URLs are
  preserved; renames ship a redirect (`public/_redirects`).
- **Wing lifecycle.** A wing page may exist **unlisted** while
  incubating: published, linked from `/wings/` and the machine
  surfaces, absent from primary navigation and the home page.
  Publication alone never implies a wing earned navigation.
- **The navigation gate**: one complete user journey containing an
  installable instrument, an applicable judgment artifact, a worked
  use path, and external validation (someone outside the house used
  it). Statuses on the pages stay honest meanwhile: `v0` = something
  usable today; `scoping` = the published plan.
- **Wing page anatomy**: orientation (who it's for, what stance),
  instruments (installable skills and/or paste-ready workflows),
  worked examples, the judgment/check artifact, and honest
  availability for everything not yet real.
- **Shared resources keep one canonical URL.** A resource that serves
  several wings (the PF list serves writing; the verify-info pass
  serves work and writing) lives at its canonical URL and is linked,
  never duplicated.
- **Skills**: authored in this repo under `skills/`, installed via
  `npx skills`; runtime copies are the installer's problem. Naming is
  domain-specific first (`writing-interview`, `work-verify-info`); a
  general name is earned only after a second domain demonstrates the
  same reusable behavior. A wing-level bundle is advertised only once
  the wing has at least two distinct installable skills.
- **User state stays in the user environment.** No hosted state or
  Lemon service is required by the free guide-and-skill path; any
  future paid service is optional and separate.

## Constraints

- Accent inks hold ≥4.5:1 contrast on `--bg` in both themes; bright
  accents are backgrounds for `--chip-ink` text only, never text.
- The palette stays "softened for long-form reading": accents flavor
  the page, they don't flood it. If a change makes a chapter read like
  a poster, it's wrong.
