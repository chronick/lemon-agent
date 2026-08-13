---
title: "Plan before code"
step: 4
minutes: 4
description: "Use a short plan to expose assumptions while they are still cheap to change."
---

For a tiny, obvious edit, a plan may be one sentence. For anything with real
choices, ask the agent to inspect first and propose a short plan before it
writes.

## A useful plan contains decisions

It should tell you:

- Which files or areas appear relevant.
- What the agent intends to change.
- How it will verify the result.
- Which assumptions could change the shape of the solution.

A plan that merely repeats your request adds ceremony. A plan earns its keep
when it exposes a fork: two reasonable interpretations, two storage choices,
two trigger conditions, or a tradeoff between a local fix and a shared one.

Ask the agent to name those forks, recommend an option, and wait. It should do
the investigation; you should retain the decision.

## Keep approval small

Approve one bounded task, not a roadmap containing every future improvement.
When the approved unit is small, you can compare the eventual diff directly to
the plan that authorized it.

> Skipping the plan does not skip the decisions. It hides them inside the code.

> **This really happened.** An agent building a retry queue had to decide
> exactly when an item should go back in the queue. Two readings were possible.
> It quietly picked the one suggested by nearby code, and it picked wrong; the
> human had meant the other. The habit that prevents it: say the condition out
> loud, name the other reading, and wait for the pick. That pattern is entry
> [AF-14](/agent-workflow-failure-list/#af-14) on the watch-out list.

When you are ready for a deeper version of this habit, continue to [Make the
agent interview you](/guides/coding-agents/design-before-code/).
