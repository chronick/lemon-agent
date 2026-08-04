---
title: "Step 1 — Write down what bit you"
step: 1
status: draft
updated: 2026-07-31
description: "A working-agreements section in the file your agent reads every session: one-line gates distilled from your own incidents, not a borrowed style guide."
---

The highest-leverage file in agent-assisted work is the one your agent
reads at the start of every session (`CLAUDE.md` in Claude Code; a
system prompt elsewhere). Most people fill it with project trivia. The
part that changes outcomes is a short section of **working
agreements**: one-line gates distilled from failures that have actually
cost you.

> Where this comes from: the [Agent Workflow Failure
> List](/agent-workflow-failure-list/) was distilled from 25 measured
> sessions containing 16 buggy-code incidents. The repeats didn't stop
> because the model got better — they stopped when the incident classes
> were written down as gates the agent reads every session.

## Why your incidents, not someone else's

An agreement you copied doesn't get enforced, because neither you nor
the agent can tell when it matters. An agreement written from a failure
you paid for is checkable — you know the exact moment it applies,
and so does the agent, because the line says so concretely.

Use [the workflow list](/agent-workflow-failure-list/) as a **menu, not
a manifest**: skim the 18 entries, mark the ones that have actually
happened in your projects, and encode only those.

## Do it by hand

1. Skim the [workflow list](/agent-workflow-failure-list/). Note which
   entries you've personally hit. (Most people recognize three to five
   immediately.)
2. Open your `CLAUDE.md` and add a `## Working agreements` section with
   one line per gate.
3. State each as **behavior, not values**. "Show the failing number
   before any fix" is a gate; "be careful with verification" is a vibe.
4. Cap it at five to eight lines. A list the agent can hold in mind
   beats coverage — the same rule the failure lists follow.

## Or paste this into Claude

```text
Read the Agent Workflow Failure List (I'll paste it, or fetch it from
https://github.com/chronick/lemon-agent). Then interview me — one
question at a time — about which of its 18 failures have actually
happened in my projects. Pick the three to five that have, plus any I
describe that aren't on the list, and write them into this project's
CLAUDE.md as a "## Working agreements" section: one line per gate,
stated as behavior ("show the failing number before any fix"), never as
advice ("be careful"). Show me the diff before writing anything.
```

## Watch out

- **Dense shorthand** ([AF-16](/agent-workflow-failure-list/)): if the
  next human to read your agreements can't parse them, neither can the
  agent, reliably. Plain sentences.
- **Twenty gates**: past ~8 lines the section becomes documentation and
  stops being a checklist. Cut to what you'd defend.
