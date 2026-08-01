---
title: "The Prose Failure List"
number: 1
surface: "prose"
arm: taste
entries: 24
prefix: "PF"
status: draft
updated: 2026-07-31
description: "24 numbered failures of AI-assisted prose, run as a subtraction pass — every match is a cut or a rewrite, never an addition."
---

Run it against a draft — yours, or your assistant's. Every match is a
cut or a rewrite, never an addition. The list names failures, not
virtues: prose that survives subtraction is yours.

> Distilled from the recurring failure modes of AI-assisted prose and
> the editing habits of one opinionated author. **v0** — ids are stable
> (cite PF-07, PF-16), but entries may still be cut before 1.0: a
> shorter list you can defend beats a long one you'd shrug at.

## How to use it

A match is a signal, not a sentence. Any entry can be overridden on
purpose — the failure is doing these things *by default*, not doing them
at all.

**In any chat assistant.** Paste this prompt, then the list, then your
draft — works anywhere that reads text:

```text
Apply the Prose Failure List (below) to my draft as a subtraction pass.
For every match: cite the PF id, quote the offending text, and give the
exact cut or rewrite. Never add content — only cut or tighten. Finish
with the three edits that would improve the piece most.
```

**As a Claude Code skill.** Installs a subtraction pass you can run on
any file in a project:

```sh
git clone https://github.com/chronick/lemon-agent
cp -r lemon-agent/skills/prose-failure-list ~/.claude/skills/
```

Then ask: *"run the prose failure list on drafts/my-post.md"*.

**In an agent or pipeline.** Fetch the raw list at
[/lists/prose-failure-list.md](/lists/prose-failure-list.md) and the
machine catalog at [/catalog.json](/catalog.json). Position it as an
advisory pass — it reports, it never gates: taste advises, it doesn't
block.

## A. Diction

1. **PF-01 — Inflated examination verbs.** "Delve into," "unpack," "dive
   deep," "explore" — verbs that gesture at work instead of naming it.
   Say what actually happened: read, measured, listed, compared.
2. **PF-02 — Negation-elevation.** "It's not just X — it's Y." The first
   clause is scaffolding; assert Y and let it stand.
3. **PF-03 — Rule-of-three padding.** Triads where the third item exists
   for rhythm, not content ("faster, cheaper, and more scalable"). Two
   real items beat three where one is invented.
4. **PF-04 — Em-dash chaining.** Dashes replacing sentence structure.
   More than one pair in a paragraph means the sentences were never
   finished.
5. **PF-05 — Superlative gloss.** "Seamlessly," "effortlessly,"
   "incredibly," "powerful" — adjectives claiming what the sentence
   didn't demonstrate. Show the seam count or drop the seamless.
6. **PF-06 — Throat-clearing opener.** Establishing context nobody
   doubted ("In today's rapidly evolving landscape…"). Start where the
   piece starts.
7. **PF-07 — Fake-synthesis adverbs.** "Ultimately," "at the end of the
   day" — gluing on a conclusion the argument never derived.
8. **PF-08 — Anthropomorphized abstraction.** Technologies "empowering,"
   trends "driving," ideas "demanding" — agency assigned to non-agents so
   no one has to name who does what.

## B. Structure

9. **PF-09 — Bullet-itis.** Connected reasoning chopped into bullets to
   look organized. If the items share a subject and verb shape, it was a
   paragraph; restore it.
10. **PF-10 — Uniform rhythm.** Every paragraph three to four sentences
    of similar length. No short sentence ever lands a point. Vary it.
11. **PF-11 — The restating conclusion.** A final section that re-says
    the introduction, slower. End where the argument ends.
12. **PF-12 — Signpost overload.** "Let's take a look at," "as we've
    seen," "it's worth noting that" — narrating the essay instead of
    writing it.
13. **PF-13 — Colon-title reflex.** "X: Why Y Matters in 2026." One
    clause, no subtitle, or earn the colon.
14. **PF-14 — Symmetry over weight.** Sections sized equally regardless
    of how much each matters. The interesting part deserves the
    imbalance.
15. **PF-15 — Preemptive contents-prose.** Telling the reader what
    you're about to say, in a piece short enough to just say it.

## C. Rhetoric & stance

16. **PF-16 — Verdict-free both-sides-ism.** "There are advantages and
    disadvantages" with no ranking — a survey delivered where a stance
    was owed. Rank them or own that you can't yet.
17. **PF-17 — "Only time will tell."** And every other closer that hands
    the question back unanswered.
18. **PF-18 — Unearned "we."** "We all know," "as a community" —
    consensus asserted rather than demonstrated. Say *I*, or name who.
19. **PF-19 — Stakes-free enthusiasm.** Everything "exciting" and
    "fascinating" while nothing is risked, spent, or lost. Excitement is
    shown by what you did next.
20. **PF-20 — Analogy stacking.** A second analogy for a thing the first
    one — or the literal sentence — already carried.
21. **PF-21 — Vague authority.** "Studies show," "experts agree," "many
    argue" — the shape of a citation with no citation inside.
22. **PF-22 — Moralizing coda.** The tacked-on lesson ("what this
    teaches us about…") after the piece already made its point.

## D. Authenticity

23. **PF-23 — Experience-free authority.** No "I tried it," no failure,
    no cost anywhere — advice with no scar tissue. If you didn't run it,
    say so; if you did, the failure is the interesting part.
24. **PF-24 — Number-shaped fog.** "Several," "significantly," "a large
    number" where the real count was one lookup away. Numbers carry
    dates and sources or they're vibes — the house rule, applied to
    prose.

---

*Part of [Lemon Agent](/) — free tools, honest measurements, agentic
services. Companion: [The Agent Workflow Failure
List](/agent-workflow-failure-list/) (№ 2, the verification arm).*
