---
title: "Lemon Agent for Knowledge Work"
wing: work
status: v0
updated: 2026-08-07
description: "The scope-plan-watch-verify-review loop with no code in it. First instrument: a verify-info pass that turns any document into a claim ledger. Scoped in the open; the installable skill comes next."
---

Most of what crosses a desk isn't code: research, summaries, decisions,
and the relay of other people's claims. The loop this site teaches
(scope it, plan it, watch it, verify it, review it) works unchanged
there; only the verification target moves: instead of tests and diffs,
**sources and dates**.

This wing is incubating, and this page is its scope, published the way
the [science wing](/science/) publishes its plan: stated before the
work, so you can hold us to it.

## Who this is for, and what ships first

The target user handles documents whose claims travel: analysts,
managers, students, anyone whose summary becomes someone else's
decision. The first instrument is **verify-info**, chosen over a
general research assistant because it has a concrete output and
demonstrates verification rather than generic help. (A research skill
may come later, as its own distinct instrument; it is out of this
wing's first slice.)

The core is vendor-neutral: it runs as a pasted prompt in any capable
assistant today, and ships later as the installable `work-verify-info`
skill. Platform-specific instructions (a Claude project, a ChatGPT
workspace) are adapters around the same workflow, kept separate so
they can drift without touching the core.

## The verify-info pass, usable today

**Input contract**: a memo, report, draft, thread, or bare collection
of claims. **Output contract**: a claim ledger the user keeps, one row
per claim: the claim, its source or evidence, verification status,
uncertainty, and required follow-up. Nothing is stored anywhere but
your own environment.

```text
Verify-info pass on the material I paste next. (1) Inventory every
factual claim (numbers, dates, names, "studies show", quotes). (2)
For each, classify its support: primary source in hand, secondary
report, or unsourced. (3) For unsourced or secondary claims, find the
primary if you can; say plainly when you can't; never invent a
source. (4) Flag anything where the claim's date matters and no as-of
date is attached; record the retrieval date on anything you fetch.
(5) Output the claim ledger as a table: claim, support level, source,
confidence (high, medium, or low, from the support level and the
source's independence), uncertainty or caveats, and required
follow-up. Do not soften: "not verified" is a value, not a failure.
If you cannot search the web or fetch sources, say so and grade from
the material alone rather than answering from memory. End with the
single claim most likely to embarrass the sender if wrong.
```

That last discipline (absence of a check recorded as *not measured*
rather than passed) is the same rule the
[diff review](/guides/git/review-the-diff/) enforces for code (what you
did not verify, stated plainly), and it is where office work goes wrong
most quietly.

## The worked example, defined

The wing's first worked example will run the pass over one short memo
seeded with all four claim types: a claim that is **verified** (primary
in hand), one **contradicted** (the primary says otherwise), one
**uncertain** (sources disagree; the disagreement recorded, not
averaged), and one **unsupported** (no source found; graded
not-verified). The example ships with the skill so the output shape is
demonstrated, not described.

## The judgment artifact, derived rather than invented

The site's failure lists ([PF](/prose-failure-list/),
[AF](/agent-workflow-failure-list/)) earned their entries from measured
incidents. This wing will do the same rather than inventing a long
list upfront: verification failures observed through real use of the
pass (the forwarded number that lost its source, the summary stronger
than what it summarizes) get recorded as they occur, and the office
failure list hardens from those receipts.

## Watch out

- **An agent inherits your inbox's authority.** Anything it drafts in
  your name (mail, minutes, summaries) needs the same
  review-the-diff-not-the-summary discipline as
  [code](/guides/git/review-the-diff/): read what it wrote, not its
  account of what it wrote, before it ships under your byline.
- **Sending stays human.** The irreversible actions in office work are
  send, share, and schedule; keep them behind your own click, the same
  rule the git guide applies to merge and push.
