---
title: "Step 6 — Turn repetition into tools"
step: 6
status: draft
updated: 2026-07-31
description: "The second time an agent does a manual multi-step thing, have it write the script — and keep policy out of the tool."
---

Sessions accumulate one-off work that rots in transcripts: the
three-command analysis, the ad-hoc data munge, the checklist run by
hand. The rule that compounds: **the second time the agent does a
multi-step thing, it writes the tool.** From then on the deterministic
tier does the work and the model only orchestrates — if a step doesn't
need reasoning, it shouldn't cost a model call.

> Where this comes from: a project-status render script written once in
> a session now regenerates a full dashboard every later session for
> free ([step 7](/guide/jit-ui/) is this pattern's UI half). The
> end-of-session habit — "what did we do twice; what earns a tool?" —
> turned out to matter more than any individual script.

## The two design rules

**1. Tools stay flexible primitives; policy lives above them.**
Thresholds, orderings, and opinions go in the instructions layer (your
`CLAUDE.md`, a skill, a doc) — never baked into the command. A tool
with policy inside can't be reused by the next workflow that needs a
different opinion; a primitive plus a written policy can.

**2. Boring interfaces.** `--help` that's accurate, flags or env for
config, no hardcoded absolute paths, exit codes that mean something.
The consumer is half you, half the next agent session — both need the
interface to be guessable.

## Do it by hand

At the end of any session that repeated something:

1. Ask: *"list everything we did more than once this session, or will
   obviously need again."*
2. Pick the one with the best repetition-to-effort ratio.
3. Have the agent write it, then **run it once immediately** — a tool
   that's never been run is a hypothesis
   ([step 2](/guide/verification-loop/)'s rules apply to tools too).

## Or paste this into Claude

```text
Review this session for tooling to harvest. List every multi-step
thing we did more than once, or that we'll clearly need again — one
line each on what a script would do and where it would live. Then
write the single most valuable one: a small CLI with an accurate
--help, config via flags or env (no hardcoded absolute paths), exit
codes that distinguish "ran clean" from "found issues" from "failed",
and no policy baked in — thresholds and choices stay with the caller.
Show me the file before saving, then run it once on real input and
show the output.
```

## Watch out

- **Metered clients in the tool path** ([AF-06](/agent-workflow-failure-list/)):
  a harvested tool that quietly calls a billed API turns a free habit
  into a bill. Stub or gate anything metered.
- **Tool sprawl**: name tools within a namespace and let a namespace
  earn existence at two members. One-off scripts that never got
  reused should be deleted with the same ease they were made.
