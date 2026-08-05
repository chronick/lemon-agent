---
title: "Step 2: Location is state"
step: 2
status: draft
updated: 2026-08-04
description: "Four lifecycle directories (inbox, active, later, archived) where moving a file IS the workflow, and the agent can read project status off the filesystem."
---

The cheapest status system ever built: **where a file lives says what
state it's in.** Four directories cover a personal working life:
`inbox/` (unprocessed), `active/` (current focus), `later/`
(simmering), `archived/` (done or dormant). Moving a file *is* the
workflow. No status fields to maintain, no dashboard to update, and an
agent can read your whole situation with `ls`.

**You've met this before.** This is GTD's contexts and someday/maybe
lists, filed into a filesystem, and it's how ops teams have always
used directory conventions (`incoming/`, `processing/`, `done/`) to
make state visible without a database.

## The habits

- **Everything lands in exactly one place.** A project is in `active/`
  or `later/`, never both. Ambiguity about where a thing lives is
  ambiguity about whether you're doing it.
- **Moves are decisions, so moves are proposals.** The agent proposes
  ("these five active projects are untouched in 30+ days; move to
  later/?"), you approve the list, then it moves. Location changes
  are exactly the kind of small irreversible-feeling action that
  wants a human glance.
- **archived/ is read-only by convention.** Done work stays findable
  and stops nagging. Nothing in archived ever asks for attention
  again unless you go get it.
- **Keep the top level closed.** New top-level directories are a
  structural decision, not a filing decision. The agent asks first.
  (Domains that outgrow this earn a real home; that's a deliberate
  graduation, not drift.)

## Try it

<div data-example="status-field-rot"><a href="/examples/status-field-rot/">Interactive example: Status field rot →</a></div>

## Do it by hand

Make the four directories, move what you have into them, and notice
the side effect: `ls active/` is now an honest answer to "what am I
actually working on?" Probably the first one you've had in a while.

## Try it with your agent

```text
Set up lifecycle directories in my vault: inbox/, active/, later/,
archived/. Then propose a filing for every existing note: show me
the full move list (file → destination, one line of reasoning each)
and wait for my approval before moving anything. Add to the supported project
instruction file (`AGENTS.md`, `CLAUDE.md`, or its documented equivalent):
location is state (the four directories and what they mean), moves
are always proposed as a list before execution, archived/ is
read-only, and no new top-level directories without asking. Show me
the instruction-file diff first.
```

## Watch out

- **Status frontmatter duplicating location**: if `active/` and
  `status: active` can disagree, they will. Let location carry the
  state; add fields only for what location can't say (waiting-for,
  next-action).
- **The bloated active/**: fifteen "active" projects is a lie told in
  directory form. The periodic sweep to `later/` is the honesty
  mechanism. Let the agent propose it monthly.
- **Silent agent moves**: an agent that refiles without showing the
  list is reorganizing your commitments unsupervised. Proposals
  first, always.
