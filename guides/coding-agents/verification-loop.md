---
title: "Step 2: Prove it before and after"
step: 2
status: published
updated: 2026-08-05
description: "Show the failure before the fix, run a cheap focused check before an expensive one, and deliver the artifact instead of a claim."
---

An agent can give a convincing account of a change that it did not test well.
Verification replaces that account with observable evidence. This chapter uses
three checks, each aimed at a different failure.

The first is the red-then-green pattern from test-driven development: prove the
test catches the problem before trusting it to confirm the fix. The second is
a focused smoke test before a long run. The third is simple: when the result
can be opened, run, or inspected, deliver it instead of describing it.

## The three gates

**1. Baseline before fix.** Before any code changes to fix a bug, the
agent runs a probe that *reproduces* it and shows you the failing
number. A probe that comes back clean on its first run is treated as
broken until proven otherwise.

> The incident behind this: a health-check probe with a broken relative
> path reported "0 orphans" (zero findings, first run) and a fix
> shipped against that reassuring nothing. Clean-on-first-run is a
> smell, not a pass ([AF-01](/agent-workflow-failure-list/)).

**2. Small proof before long cycle.** Before committing a full render,
build, or deploy cycle to a change, run the smallest probe that could
falsify it: seconds, not minutes.

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

You don't need setup. You need two habits at the moment of asking:

- Next bug: *"write the probe that reproduces this first, show me the
  failing output, then fix it, then show the same probe passing."* The
  before/after pair is the verification ([AF-02](/agent-workflow-failure-list/)).
- Next long cycle: *"what's the smallest dry run that could falsify
  this change? Run that first."*
- Next "it works": *"serve it"* (the page loaded, the test run, the
  render played).

Then persist them: both gates become one-liners in your working
agreements ([step 1](/guides/coding-agents/working-agreements/)).

## Try it with your agent

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
one-liners to this project's supported instruction file (`AGENTS.md`,
`CLAUDE.md`, or its documented equivalent) under "## Working agreements".
Show me the diff first.
```

## Watch out

- **Stale state** ([AF-03](/agent-workflow-failure-list/)): a probe
  proving yesterday's build proves nothing. Inputs get hashed or
  timestamped into outputs.
- **Green against the wrong target** ([AF-05](/agent-workflow-failure-list/)):
  tests passing against a different config than production runs are a
  different kind of clean-on-first-run.
