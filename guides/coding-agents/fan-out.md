---
title: "Step 5: Fan out, then funnel"
step: 5
status: draft
updated: 2026-08-05
description: "Split large work across agents only when each part writes durable results and a final pass verifies and combines them."
---

Large work can exceed one agent's useful context. It can also help to separate
the person looking for problems from the person checking whether those
problems are real. Both are reasons to split the work.

The split only helps if the parts come back together. Each worker must save its
findings, and a final pass must compare, verify, and combine them. That is the
“funnel” in this chapter's title. Without it, parallel work produces several
temporary conversations instead of one usable result.

> The measured failure: fan-out findings held only in agents' context
> windows. One filtered or failed agent, and its share of the work
> silently vanished. The rule that came out of it: every worker writes
> findings to disk incrementally; partial files beat perfect memory
> ([AF-17](/agent-workflow-failure-list/)).

## Three useful patterns

**1. Parallel readers, one summary.** Give each agent one area of the codebase.
Each writes its map to a file. A final agent reads those files, identifies
disagreements, and writes the combined view. This is a safe read-only use of
parallel work.

**2. Find, then verify.** One group proposes bugs, candidates, or edits. A
different group tries to disprove each finding. The second stage prevents a
large volume of plausible suggestions from becoming a large volume of bad
changes ([step 4](/guides/coding-agents/adversarial-review/)).

**3. A labeled background queue.** Only clearly bounded tasks receive the
opt-in label. A scheduled agent takes one, works on a branch, and opens a pull
request. A later review accepts or closes it. A task belongs in this queue only
when it has written acceptance criteria, no unresolved architecture choice,
and a cheap failure mode. The worst result should be a pull request you close,
not a production change you must undo.

## Try it

<div data-example="vanishing-findings"><a href="/examples/vanishing-findings/">Interactive example: The vanishing findings →</a></div>

## Do it by hand

Start at shape 1 on a real question ("how does auth work across these
services?"). Move to shape 3 only after shapes 1–2 feel routine, and
start with two or three tasks, not a backlog.

## Try it with your agent

```text
Map this codebase with a fan-out. Spawn one subagent per top-level
area (cap at six). Each subagent writes a one-page map of its area to
docs/maps/<area>.md AS IT WORKS (files on disk, not chat). Each map:
what the area does, its entry points, what it depends on, one thing
that surprised you. When all return, synthesize docs/maps/OVERVIEW.md
from the files and name the places where two maps disagree or overlap.
Those are the seams that matter. If any subagent fails, report which
and what's missing; don't paper over gaps.
```

## Watch out

- **Unbounded anything** ([AF-08](/agent-workflow-failure-list/)):
  every loop and long-running worker gets a wall-clock timeout, a size
  cap, and a heartbeat. No exceptions survive contact with a 4-hour
  wedge.
- **Queue tasks without acceptance criteria**: an autonomous agent
  with a vague task invents its own definition of done, and you find
  out at review time.
- **Merging background work unreviewed**: the harvest pass IS a
  review ([step 4](/guides/coding-agents/adversarial-review/)); autonomy moves the
  work, never the judgment.
