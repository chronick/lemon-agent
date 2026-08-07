---
title: "Lemon Agent for Writing"
wing: writing
status: v0
updated: 2026-08-07
description: "Agents for writing that leave the writing to you: the Interview Conductor skill that pulls a draft out of you one question at a time, and a subtraction pass built on the Prose Failure List."
---

An agent will happily write your essay. That is the problem. The result
reads fine, says little, and sounds like everyone. This wing takes the
opposite stance: **the agent interrogates, organizes, verifies, and
cuts. You write.** Every instrument here is built to protect your voice,
not replace it.

You've met this division of labor before: a good editor. Editors ask
what you meant, mark what isn't working, and cut what repeats. They do
not rewrite your book.

## The subtraction pass

The [Prose Failure List](/prose-failure-list/) is 24 numbered failures
of AI-assisted prose (PF-01…PF-24). Run as a review, it is a working
instrument today: the agent hunts excess and names each cut against a
numbered entry, so you can dispute any call it makes.

```text
Review the draft I paste next as a subtraction pass against the Prose
Failure List at https://lemon-agent.dev/lists/prose-failure-list.md
(entries PF-01 to PF-24). If you cannot fetch that URL, say so and ask
me to paste the list; do not work from memory. Do not rewrite
anything. Produce a numbered report:
each finding cites its PF id, quotes the exact phrase, and says what
the cut or repair would be and why. Where a finding is a judgment
call, say so. End with the three highest-value cuts. My voice wins
every dispute: flag, never fix.
```

Or install it as a managed skill shared across your agents:

```sh
npx skills add chronick/lemon-agent --global \
  --agent codex claude-code --skill prose-failure-list --yes
```

## The Interview Conductor

The hardest part of a draft is getting the material out of your head.
Interviews beat blank pages: answering a sharp question is easier than
composing an opening paragraph. The wing's first instrument is the
[**Interview Conductor**](/writing/interview-conductor/): an
installable skill that runs a focused interview about what you want to
write (one question at a time, a parking lot for tangents, your words
kept verbatim and marked as yours) and ends with structured interview
notes plus a writing brief. By contract it never invents experience or
evidence for you, and it stops before drafting: the draft is yours.

```sh
npx skills add chronick/lemon-agent --global \
  --agent codex claude-code --skill writing-interview --yes
```

The [instrument page](/writing/interview-conductor/) has the full
workflow and a paste-ready fallback for agent surfaces without skill
installs.

## Check the facts

A draft full of confident claims needs the same treatment as a report:
claims inventoried, sources attached, confidence stated. That
instrument lives one wing over, and it works on essays as well as
memos: run the
[verify-info pass](/work/#the-verify-info-pass-usable-today) from the
knowledge-work wing over your draft before you publish.

## Not yet (and we'd rather say so)

- **Stats and themes.** Corpus statistics over your own writing:
  repeated constructions, sentence-length distribution, the themes you
  circle. Needs tooling we haven't shipped; nothing to paste today.
- **Worldbuilding structures.** Generative narrative scaffolds
  (consistent places, casts, timelines) with the same
  agent-organizes-you-write division. The deep end of this wing;
  designed after the shallow end proves out.

## Watch out

- **The agent's draft wearing your byline** is this wing's version of
  losing the diff: once its sentences replace yours, no pass gets your
  voice back. Keep generation and judgment separate, the same
  separation the [review chapter](/guides/coding-agents/adversarial-review/)
  enforces for code.
- **A subtraction pass that rewrites.** If the report comes back as a
  revised draft, the instrument failed; re-run it with "flag, never
  fix" restated.
- **Interview transcripts as finished thinking**: the interview
  produces material, not prose. The outline is where writing starts,
  not where it ends.
