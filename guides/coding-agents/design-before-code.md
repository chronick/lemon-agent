---
title: "Step 3: Make the agent interview you"
step: 3
status: published
updated: 2026-08-05
description: "Use a short design conversation to expose open decisions and approve the approach before the first edit."
---

For work with meaningful choices, start with a design conversation. Ask the
agent to inspect the project, interview you, name the decisions that would
change the solution, and propose a plan. Approve the approach before the first
edit.

Skipping this conversation does not remove the decisions. It hides them in the
implementation, where they are harder to see and more expensive to change.
This is the same reason teams use design reviews and RFCs: changing a paragraph
is cheaper than rebuilding a system.

> Where this comes from: reviewing months of session logs, the pattern
> in the human's interventions was consistent: they were surgical
> corrections *at forks* the agent had driven through without asking.
> The failure isn't wrong answers; it's unnamed questions
> ([AF-15](/agent-workflow-failure-list/)). Putting the fork-naming
> *before* the work is the structural fix.

## What good looks like

- **No edits during discovery.** Use your agent's plan mode if it has one, or
  say “do not edit until I approve the plan.”
- **Open questions, one at a time.** Interview-style beats a wall of
  multiple-choice the agent grades itself. You'll say things the agent
  wouldn't have offered as options.
- **Forks named with a recommendation.** The agent states each genuine
  fork, the plausible readings, and which it would pick and why, then
  waits. Especially for trigger conditions and state transitions, where
  an inferred condition is the classic silent wrong turn
  ([AF-14](/agent-workflow-failure-list/)).
- **Approve a bounded plan.** A plan for one feature gives the eventual diff a
  clear authority. A roadmap for everything does not.

## Try it

<div data-example="unnamed-fork"><a href="/examples/unnamed-fork/">Interactive example: the unnamed fork →</a></div>

## Do it by hand

Next non-trivial task, open with:

- *"Enter plan mode. Interview me about this, one open question at a
  time, until you can state the goal, the non-goals, and the forks.
  Then propose the plan and wait."*

And when an agent presents you options mid-work, notice it: that's the
pattern working. Answer the fork; don't wave it through.

## Try it with your agent

```text
Before writing any code for this task, enter plan mode (if you have no
plan mode: make no edits yet). Interview me (one open question at a
time, no multiple-choice) until you can state: the goal in one
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
- **A plan that only restates the request**: it has not exposed a decision.
  The tell of a real one is that it contains a decision you had to
  make.
