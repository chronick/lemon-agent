---
title: "Step 5: Fan out, then funnel"
step: 5
status: draft
updated: 2026-07-31
description: "Orchestration shapes that survive contact: parallel readers, find→verify pipelines, and a labeled task queue with a harvest pass for background agents."
---

One agent context can't hold a big codebase, and one pass can't be both
generative and skeptical. Orchestration fixes both, but only the
shapes with a **funnel**: fan-out that converges on written-down,
verified results. Fan-out without a funnel is how work evaporates.

**You've met this before.** Map-reduce, and the pull-request queue:
fan the map out, reduce through verification, and the labeled queue +
harvest below is a sprint board whose worker never sleeps. The reviewer,
deliberately, is still you.

> The measured failure: fan-out findings held only in agents' context
> windows. One filtered or failed agent, and its share of the work
> silently vanished. The rule that came out of it: every worker writes
> findings to disk incrementally; partial files beat perfect memory
> ([AF-17](/agent-workflow-failure-list/)).

## Three shapes, in order of adoption

**1. Parallel readers, one synthesizer.** The entry-level win: one
subagent per area mapping a codebase, each writing its map to a file,
then a synthesis pass over the files. Cheap, safe (read-only), and
immediately useful on any repo too big to hold in one context.

**2. Find → verify pipelines.** Generation and skepticism as separate
stages: finders propose (bugs, candidates, edits), verifiers try to
refute each finding independently ([step
4](/guides/coding-agents/adversarial-review/) industrialized). The verify stage is
what makes volume tolerable.

**3. The labeled queue + harvest.** The autonomous tier: tasks carry
an explicit opt-in label, a scheduled agent pulls from the queue and
opens pull requests, and a periodic **harvest** pass reviews and merges
what shipped. This works exactly as far as the tasks deserve it. A task
earns the label only if: it has written acceptance criteria, the scope
is bounded (one repo, small surface, no open architectural calls), and
failure is cheap. The worst case is a closeable PR, never a shipped
regression. Feeding the queue is its own discipline: refining a task
until it's autonomy-safe is real work, done in advance, once.

## Try it

<div data-example="vanishing-findings"><a href="/examples/vanishing-findings/">Interactive example: The vanishing findings →</a></div>

## Do it by hand

Start at shape 1 on a real question ("how does auth work across these
services?"). Move to shape 3 only after shapes 1–2 feel routine, and
start with two or three tasks, not a backlog.

## Or paste this into Claude

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
