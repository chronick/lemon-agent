---
title: "Step 5 — Teach the agent the shape"
step: 5
status: draft
updated: 2026-08-04
description: "A CLAUDE.md at the vault root — structure, conventions, and working agreements — turns every future session from a guest into staff."
---

Everything so far created structure; this step makes the structure
**teachable**. A `CLAUDE.md` at the vault root — what each directory
means, the conventions, the working agreements — is read by the agent
at the start of every session. With it, a fresh session files
correctly, proposes instead of assuming, and respects archived/
without being told. Without it, every session starts as a guest.

**You've met this before.** Onboarding docs and the ops runbook — the
document that turns "new person" into "person who knows how we do
things here." The difference is compliance: an agent actually reads
it, every time, and a good one follows it more literally than any
hire ever did. Which cuts both ways — write it precisely.

## What goes in it

- **The map**: each directory and what living there means
  ([step 2](/guides/vault/location-is-state/)'s table, essentially).
- **The conventions**: kebab-case, minimal frontmatter, file→folder
  graduation ([step 1](/guides/vault/plain-files/)).
- **The working agreements** — behavior, not values, same discipline
  as [the coding-agents guide](/guides/coding-agents/working-agreements/):
  moves are proposed as lists; archived/ is read-only; no new
  top-level directories without asking; inbox items land verbatim;
  the log is append-only.
- **The routines**: what "process the inbox", "log it", and the
  monthly active/ sweep mean in this vault, so you can say three
  words and get the same procedure every time.

A test worth running: open a completely fresh session and ask it to
file something, with no instructions beyond the vault itself. Where
it stumbles is what the CLAUDE.md hasn't taught yet.

## Or paste this into Claude

```text
Read my entire vault — directory layout, existing notes, the log —
and draft a CLAUDE.md at the root that teaches a future agent session
how to work here. Include: the directory map with what each location
means, the naming and frontmatter conventions you observe, working
agreements (moves proposed as lists before execution; archived/ is
read-only; no new top-level directories without asking; inbox
captures land verbatim; log is append-only), and the named routines
(process the inbox, log it, monthly active sweep) as short
procedures. Where you had to guess a convention because the vault is
inconsistent, list the guess separately and ask me instead of
enshrining it. Show me the draft before writing.
```

## Watch out

- **The aspirational CLAUDE.md**: documenting conventions you wish
  you had, that the vault's actual files contradict. The agent will
  follow the doc, fight the reality, and produce weirdness — codify
  what's true, or fix the files first.
- **Staleness**: the shape drifts, the doc doesn't. When you correct
  an agent's filing twice for the same reason, that correction is a
  missing line — add it then, not "someday."
- **Novel-length onboarding**: a CLAUDE.md the size of a chapter
  buries its own agreements. The vault's map plus ~8 one-line rules
  covers a personal vault.
