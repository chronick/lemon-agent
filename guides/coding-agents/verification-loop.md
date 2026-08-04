---
title: "Step 2 — Prove it before and after"
step: 2
status: draft
updated: 2026-07-31
description: "The three-part verification loop: baseline before fix, small proof before long cycle, serve don't describe."
---

Agents fail verification in one characteristic way: they produce a
plausible *account* of the work instead of evidence. The counter is a
loop with three gates, each cheap, each catching a failure class that
actually occurs.

**You've met this before.** Gate 1 is Red–Green testing in work
clothes: the test must fail (red) before its pass (green) means
anything, and "write the regression test before the fix" is
decades-old TDD discipline. Gate 2 is the smoke test; gate 3 is
"working software over comprehensive documentation." What's new is
only who forgets them — an agent under "fix it" pressure skips red
and goes straight to a green story.

## The three gates

**1. Baseline before fix.** Before any code changes to fix a bug, the
agent runs a probe that *reproduces* it and shows you the failing
number. A probe that comes back clean on its first run is treated as
broken until proven otherwise.

> The incident behind this: a health-check probe with a broken relative
> path reported "0 orphans" — zero findings, first run — and a fix
> shipped against that reassuring nothing. Clean-on-first-run is a
> smell, not a pass ([AF-01](/agent-workflow-failure-list/)).

**2. Small proof before long cycle.** Before committing a full render,
build, or deploy cycle to a change, run the smallest probe that could
falsify it — seconds, not minutes.

> The incident: a swapped parameter pair (the kind that compiles and
> runs) was discovered only *after* a full audio render. A ten-second
> dry run would have caught it ([AF-07](/agent-workflow-failure-list/),
> [AF-11](/agent-workflow-failure-list/)).

**3. Serve, don't describe.** If the deliverable can be a running
page, a render, a URL, or a passing test you can execute yourself, the
agent delivers *that*. "It works" prose where an artifact could exist is
a claim, not a result ([AF-04](/agent-workflow-failure-list/)).

## Try it

<div data-example="clean-probe"><a href="/examples/clean-probe/">Interactive example: the clean probe →</a></div>

## Do it by hand

You don't need setup — you need two habits at the moment of asking:

- Next bug: *"write the probe that reproduces this first, show me the
  failing output, then fix it, then show the same probe passing."* The
  before/after pair is the verification ([AF-02](/agent-workflow-failure-list/)).
- Next long cycle: *"what's the smallest dry run that could falsify
  this change? Run that first."*
- Next "it works": *"serve it"* — the page loaded, the test run, the
  render played.

Then persist them: both gates become one-liners in your working
agreements ([step 1](/guides/coding-agents/working-agreements/)).

## Or paste this into Claude

```text
For the rest of this session, follow three gates. (1) Baseline before
fix: before changing code to fix a bug, write and run a probe that
reproduces it and show me the failing output; treat a probe that's
clean on its first run as broken until proven otherwise; after the fix,
show the same probe passing. (2) Small proof before long cycle: before
any full build, render, or deploy, run the smallest dry run that could
falsify the change, and tell me what it proved. (3) Serve, don't
describe: when the deliverable can be a running page, render, or test I
can execute, deliver that instead of prose. Then add all three as
one-liners to this project's CLAUDE.md under "## Working agreements" —
show me the diff first.
```

## Watch out

- **Stale state** ([AF-03](/agent-workflow-failure-list/)): a probe
  proving yesterday's build proves nothing. Inputs get hashed or
  timestamped into outputs.
- **Green against the wrong target** ([AF-05](/agent-workflow-failure-list/)):
  tests passing against a different config than production runs are a
  different kind of clean-on-first-run.
