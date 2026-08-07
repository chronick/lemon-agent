---
title: "Lemon Agent for Writers"
wing: writers
citrus: finger-lime
status: v0
updated: 2026-08-07
description: "Agents for writing that leave the writing to you: a subtraction pass built on the Prose Failure List, and an interview conductor that pulls a draft out of you one question at a time."
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
me to paste the list; do not work from memory. Do not rewrite anything. Produce a numbered report:
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

## The interview conductor

The hardest part of a draft is getting the material out of your head.
Interviews beat blank pages: answering a sharp question is easier than
composing an opening paragraph. This prompt turns the agent into the
interviewer, with the rule that matters stated up front: your sentences
are the raw material, and they survive verbatim.

```text
Act as an interviewer helping me develop a piece of writing. Ask ONE
question at a time and wait for my answer. Start by asking what I'm
trying to write and who it's for, then follow my energy: go deeper
where my answers get specific or excited, change angles where I stall.
Push back once when an answer is vague. Every few exchanges, reflect
my thinking back in sharper form and ask if that's what I meant.
Keep a verbatim record: when we finish (or when I say "wrap"),
produce (1) my usable sentences quoted word for word, marked as
quotes, (2) an outline built from them, (3) the open questions I
dodged. Do not draft prose for me unless I explicitly ask.
```

## Check the facts

A draft full of confident claims needs the same treatment as a report:
claims inventoried, sources attached, confidence stated. That
instrument lives one wing over, and it works on essays as well as
memos: run the [verify-info pass](/office/#the-verify-info-pass) from
the office wing over your draft before you publish.

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
