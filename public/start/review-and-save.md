---
title: "Review and save"
step: 7
minutes: 4
description: "Review the diff, remove surprises, and leave a checkpoint the next session can understand."
---

Tests answer “does the checked behavior still work?” The diff answers “what
actually changed?” You need both.

## Review by file

Ask the agent to show the diff and walk through it one file at a time. Compare
each change to the brief you approved:

- Is every changed file part of the task?
- Did any labels, interfaces, dependencies, or generated files change
  unexpectedly?
- Is the implementation larger than the outcome requires?
- Do the checks cover the behavior that matters?

Passing checks do not make unrelated edits relevant. Remove surprises, then
rerun the check affected by that cleanup.

## Leave a checkpoint

Once the diff is focused, save it with a short description of the outcome and
why it was needed. In a Git project, that usually means a small commit. In
another environment, use whatever history or checkpoint mechanism is
available.

A good checkpoint gives the next session a clean place to start and makes
recovery cheap if a later idea goes wrong.

> Merge or save what the artifact says, not what the agent says the artifact
> contains.

Continue with [Review the diff, not the summary](/guides/git/review-the-diff/)
and [Checkpoint commits](/guides/git/commit-small/).
