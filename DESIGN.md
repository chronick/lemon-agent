# Design notes — the citrus system

The house is lemon. Each domain wing wears its own **citrus variety** over
the shared base, so sections are recognizable at a glance while everything
stays one brand.

## The varieties

| Domain | Citrus | Accent | Where it shows |
|--------|--------|--------|----------------|
| House + course (`/`, `/start/`) | **lemon** | chartreuse `#c7d86f` | the default everything else layers on |
| Working with Coding Agents | **lime** | `#a4ce54` | `/guides/coding-agents/*` |
| Git + Coding Agents | **tangerine** | `#f2ab52` | `/guides/git/*` |
| Keeping a Vault | **grapefruit** | `#f293a2` | `/guides/vault/*` |
| Failure lists | **blood orange** | `#ef7c50` | `/prose-failure-list/`, `/agent-workflow-failure-list/` |

## How it works

- `Base.astro` defines an accent trio with lemon defaults:
  `--accent` (bright: chips, borders, the top bar), `--accent-ink`
  (darkened for text/links at ≥4.5:1 on the paper background),
  `--accent-soft` (tint for panels), `--accent-hover`. Dark-mode
  variants ship alongside.
- A page declares its variety by passing `citrus="lime"` to `Base`,
  which sets `class="citrus-lime"` on `<body>`. The same classes work on
  any container, which is how index-page cards each carry their own
  variety.
- Content accents (links, `h2` markers, blockquotes, the interactive
  example widget, step chips, the 3px top bar) run on the accent vars
  and tint per domain. **House chrome never tints**: the LEMON AGENT
  header/footer brand, `.chip`, text selection, and the terminal blocks
  stay chartreuse everywhere — that's the "keep it lemon" rule.
- The `.citrus-chip` pill names the variety in each page's kicker, so
  the color system is legible rather than decorative.

## Adding a wing

A vertical earns navigation (and a citrus) only when it ships one
agent-native instrument plus one judgment artifact used by someone
outside the house. When one does: pick an unused variety (kumquat,
pomelo, bergamot…), add its light+dark accent sets next to the existing
`.citrus-*` classes in `Base.astro`, set `citrus:` in the wing's
registry entry, and give its kicker the chip. Nothing else changes.
**Yuzu is spoken for**: the audio wing (`/audio`, lemon-agent principles
applied to sound — the disciplined cousin of the weirder lemon.audio).
Wings live at `lemon-agent.dev/{domain}`.

## Constraints

- Accent inks must hold ≥4.5:1 contrast on `--bg` in both themes;
  bright accents are backgrounds for `--chip-ink` text only, never text
  themselves.
- The palette stays "softened for long-form reading": accents flavor
  the page, they don't flood it. If a change makes a chapter read like a
  poster, it's wrong.
