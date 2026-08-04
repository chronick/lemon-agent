---
title: "Step 6 — Build lots of small tools"
step: 6
status: draft
updated: 2026-08-04
description: "Many small, composable tools beat one maintained app: smaller blast radius, free composition across disciplines — and repetition tells you when to build one."
---

Sessions accumulate one-off work that rots in transcripts: the
three-command analysis, the ad-hoc data munge, the checklist run by
hand. The rule that compounds: **the second time the agent does a
multi-step thing, it writes the tool.** And the unit is deliberately
small — lots of little tools, not one growing app. If a step doesn't
need reasoning, it shouldn't cost a model call.

**You've met this before.** This is the Unix philosophy — small
programs that do one thing, composed through pipes and files — plus
X11's old rule of *mechanism, not policy*. Agents renew both: a shell
full of small tools is a vocabulary the agent already speaks.

## Why lots of small tools beat an app

- **Composability you didn't plan.** Single-purpose tools chain into
  workflows their author never imagined — a status renderer, a task
  lister, and a filter become a dashboard pipeline. An app's features
  combine only where someone built a screen for the combination.
- **Rewrite, not refactor.** A 100-line tool is cheaper to rewrite
  than to refactor, so the blast radius of change stays tiny. Apps
  demand migrations, regression sweeps, and care; small tools are
  disposable on purpose.
- **Disciplines mix freely.** An audio-analysis CLI, a plotter script,
  and a stats tool share nothing but files and stdout — so a music
  workflow can borrow from a data workflow with no shared framework.
  An app would have forced all three into one stack before they could
  touch.
- **Maintenance asymmetry.** Apps rot with their platforms —
  frameworks, build chains, dependency churn. A stdlib-only CLI runs
  unchanged for years.
- **Agents speak tool.** An agent composes CLIs fluently: it reads
  `--help`, pipes outputs, retries with different flags. Driving an
  app's UI is the expensive, brittle path. Every tool you keep extends
  the agent's vocabulary.

## The two design rules

**1. Tools stay flexible primitives; policy lives above them.**
Thresholds, orderings, and opinions go in the instructions layer (your
`CLAUDE.md`, a skill, a doc) — never baked into the command. A tool
with policy inside can't be reused by the next workflow that needs a
different opinion; a primitive plus a written policy can. (That's
*mechanism, not policy*, verbatim.)

**2. Boring interfaces.** `--help` that's accurate, flags or env for
config, no hardcoded absolute paths, exit codes that mean something.
The consumer is half you, half the next agent session — both need the
interface to be guessable.

## Do it by hand

At the end of any session that repeated something:

1. Ask: *"list everything we did more than once this session, or will
   obviously need again."*
2. Pick the one with the best repetition-to-effort ratio.
3. Have the agent write it small, then **run it once immediately** — a
   tool that's never been run is a hypothesis
   ([step 2](/guide/verification-loop/)'s rules apply to tools too).

## Or paste this into Claude

```text
Review this session for tooling to harvest. List every multi-step
thing we did more than once, or that we'll clearly need again — one
line each on what a small tool would do and where it would live. Then
write the single most valuable one, deliberately small: one job, a
CLI with an accurate --help, config via flags or env (no hardcoded
absolute paths), exit codes that distinguish "ran clean" from "found
issues" from "failed", and no policy baked in — thresholds and
choices stay with the caller. Show me the file before saving, then
run it once on real input and show the output.
```

## Watch out

- **The app in disguise**: when a tool grows interacting flags, a
  config file, and state, it's an app now — split it back into
  primitives, or own the decision to maintain an app.
- **Metered clients in the tool path** ([AF-06](/agent-workflow-failure-list/)):
  a harvested tool that quietly calls a billed API turns a free habit
  into a bill. Stub or gate anything metered.
- **Tool sprawl**: name tools within a namespace and let a namespace
  earn existence at two members. One-off scripts that never got
  reused should be deleted with the same ease they were made.
