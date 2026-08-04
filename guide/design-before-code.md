---
title: "Step 3 — Make the agent interview you"
step: 3
status: draft
updated: 2026-07-31
description: "Design back-and-forth before code: plan mode, open questions one at a time, forks named and picked by you, approval before edits."
---

For anything non-trivial, the cheapest quality gate happens before the
first edit: a design conversation where the **agent interviews you**,
names the genuine forks, and gets a plan approved. Skipping it doesn't
skip the decisions — it just moves them into the diff, where they're
expensive to find.

**You've met this before.** RFCs and design reviews: decisions on
paper, argued before they're implemented, because a paragraph is
cheaper to change than a system. The agent twist is that the document
becomes a conversation — and the reviewer being interviewed is you.

> Where this comes from: reviewing months of session logs, the pattern
> in the human's interventions was consistent — they were surgical
> corrections *at forks* the agent had driven through without asking.
> The failure isn't wrong answers; it's unnamed questions
> ([AF-15](/agent-workflow-failure-list/)). Putting the fork-naming
> *before* the work is the structural fix.

## What good looks like

- **Plan mode first.** Claude Code has a literal plan mode (the agent
  reads and asks but can't edit). Elsewhere: "don't touch files until I
  approve a plan" does the same job.
- **Open questions, one at a time.** Interview-style beats a wall of
  multiple-choice the agent grades itself. You'll say things the agent
  wouldn't have offered as options.
- **Forks named with a recommendation.** The agent states each genuine
  fork, the plausible readings, and which it would pick and why — then
  waits. Especially for trigger conditions and state transitions, where
  an inferred condition is the classic silent wrong turn
  ([AF-14](/agent-workflow-failure-list/)).
- **The plan is the approval unit.** You approve a plan, not a vibe.
  Scope it to one feature; a plan covering everything approves nothing.

## Try it

<div data-example="unnamed-fork"><a href="/examples/unnamed-fork/">Interactive example: the unnamed fork →</a></div>

## Do it by hand

Next non-trivial task, open with:

- *"Enter plan mode. Interview me about this — one open question at a
  time — until you can state the goal, the non-goals, and the forks.
  Then propose the plan and wait."*

And when an agent presents you options mid-work, notice it: that's the
pattern working. Answer the fork; don't wave it through.

## Or paste this into Claude

```text
Before writing any code for this task, enter plan mode (if you have no
plan mode: make no edits yet). Interview me — one open question at a
time, no multiple-choice — until you can state: the goal in one
sentence, the non-goals, the constraint most likely to bite, and the
two or three genuine forks with your recommendation for each. Where a
trigger or gating condition is involved, restate the exact condition
and the plausible alternative readings, and make me pick. Then present
the plan and wait for approval before touching anything.
```

## Watch out

- **The interview that answers itself**: multiple-choice questions
  where the agent picks a default if you hesitate are forks driven
  through with extra steps. Insist on open questions.
- **Plan-mode theater**: a plan restating the request isn't a plan.
  The tell of a real one is that it contains a decision you had to
  make.
