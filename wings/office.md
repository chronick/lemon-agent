---
title: "Lemon Agent for Office Work"
wing: office
citrus: kumquat
status: v0
updated: 2026-08-07
description: "The scope-plan-watch-verify-review loop with no code in it: a research brief that produces citable work, a verify-info pass for anything you're about to forward, and the start of an office failure list."
---

Most agent work isn't code. It's research, summaries, decisions, and
the endless relay of other people's claims. The loop this site teaches
(scope it, plan it, watch it, verify it, review it) works unchanged
there; only the verification target moves: instead of tests and diffs,
**sources and dates**.

These instruments are plain prompts. They work in any capable
assistant: paste them into a chat, or save them somewhere durable your
tool supports (a project's instructions, a workspace's custom
directions, or an installable skill), the same move the
[working-agreements chapter](/guides/coding-agents/working-agreements/)
teaches for code.

## The research brief

Research goes wrong at the start, not the end: an unbounded question,
no source policy, no finish line. The brief fixes the start.

```text
Research task. Scope: [your question, one sentence]. Before searching,
restate the scope and list what you will NOT cover; wait for my ok.
Source policy: prefer primary sources (the org's own page, the paper,
the filing) over coverage of them; every number gets a date and a
link; when sources disagree, record the disagreement instead of
averaging it away. Deliverable: findings as claims, each with its
source and an as-of date; a "what I could not verify" section; and
the 2-3 things that would most change the picture if they turned out
different. Stop conditions: if the scope turns out ambiguous or the
sources conflict on something load-bearing, stop and ask rather than
guessing; if you cannot search the web or fetch sources, say so and
stop rather than answering from memory.
```

## The verify-info pass

For anything you are about to forward, present, or decide on: a
document, a thread, a deck, your own draft. The agent inventories the
claims and grades the support, so what travels onward carries its
receipts.

```text
Verify-info pass on the material I paste next. (1) Inventory every
factual claim (numbers, dates, names, "studies show", quotes). (2)
For each, classify its support: primary source in hand, secondary
report, or unsourced. (3) For unsourced or secondary claims, find the
primary if you can; say plainly when you can't. (4) Flag anything
where the claim's date matters and no as-of date is attached. (5)
Output a table: claim, support level, source, confidence (high,
medium, or low, from the support level and the source's independence),
and what would change it. Do not soften: "not verified" is a value, not a
failure. End with the single claim most likely to embarrass the
sender if wrong.
```

That last discipline (absence of a check recorded as *not measured*
rather than passed) is the same rule the
[diff review](/guides/git/review-the-diff/) enforces for code (what you
did not verify, stated plainly), and it is where office work goes wrong
most quietly.

## The Office Failure List (v0 draft)

The numbered failure lists on this site
([PF](/prose-failure-list/), [AF](/agent-workflow-failure-list/))
started as informal watch-outs and hardened with measured use. This is
the office one at that first stage: a draft outline, numbered so
entries can be cited and disputed, flagged v0 until each carries a
documented incident.

1. **OF-01: The forwarded number.** A figure travels through three
   messages while its source and as-of date stay behind. Tell: a
   specific number, no link, no date.
2. **OF-02: Single-source certainty.** One search result becomes "the
   answer." Tell: confident prose, exactly one citation, no
   disagreement recorded.
3. **OF-03: Summary-of-summary drift.** Each hop compresses away a
   qualifier until "may reduce costs in some cases" reads "reduces
   costs." Tell: the summary is stronger than its source.
4. **OF-04: Stale-as-current.** Last quarter's data presented without
   its date in a decision about this quarter. Tell: no as-of anywhere
   in the document.
5. **OF-05: The confident placeholder.** A draft's invented specifics
   (names, figures, dates "to be checked later") survive to the final.
   Tell: precision with no traceable origin.
6. **OF-06: Scope drift in a thread.** The ask mutates across replies
   and nobody restates it; the deliverable answers message three, not
   message eleven. Tell: no written restatement of the current ask.
7. **OF-07: The decision without its dissent.** The disagreement that
   happened in the meeting is absent from the record of the meeting.
   Tell: unanimous notes for a contested call.
8. **OF-08: Notes with no owner.** Prose that ends without a named
   next step or person. Tell: verbs without subjects ("will be
   followed up").

## Watch out

- **An agent inherits your inbox's authority.** Anything it drafts in
  your name (mail, minutes, summaries) needs the same
  review-the-diff-not-the-summary discipline as
  [code](/guides/git/review-the-diff/): read what it wrote, not its
  account of what it wrote, before it ships under your byline.
- **Sending stays human.** The irreversible actions in office work are
  send, share, and schedule; keep them behind your own click, the same
  rule the git guide applies to merge and push.
