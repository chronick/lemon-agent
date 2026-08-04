---
title: "Step 1 — Checkpoint commits"
step: 1
status: draft
updated: 2026-08-04
description: "Small, frequent, single-purpose commits — the save points that make agent speed safe."
---

An agent edits at machine speed, which means it also breaks things at
machine speed. The commit is your save point: **small, frequent,
single-purpose**. With checkpoints every few minutes of agent work,
any mistake costs a `git diff` and a decision — not an afternoon of
archaeology.

**You've met this before.** "Commit early, commit often" is as old as
version control. The agent twist is volume and asymmetry: the agent
produces changes faster than you review them, so the checkpoint
cadence — not the review cadence — is what bounds how much work a bad
turn can destroy.

## The habit

- **Commit at green.** Every time the build passes and the change is
  coherent, checkpoint it. A working state you didn't commit is a
  working state you can lose.
- **One purpose per commit.** "Fix the parser AND rename the config
  AND update deps" is three commits. Single-purpose commits make
  revert surgical ([step 5](/guides/git/cheap-recovery/)) and history
  readable ([step 3](/guides/git/history-for-the-next-reader/)).
- **Checkpoint before the agent starts.** An initial commit of the
  current state before any big agent pass means "undo everything" is
  always one command away.
- **Don't let unrelated changes ride along.** An agent asked to fix a
  bug will sometimes also "improve" three other files. Unstage what
  wasn't asked for, or make it its own commit and decide separately.

## Do it by hand

Next session, open with: *"after each change that builds and passes
tests, propose a commit — show me the diff summary and a one-line
why."* You approve each one; after a day it's ambient.

## Or paste this into Claude

```text
For the rest of this session: after each coherent change that builds
and passes tests, stage exactly the files that change belongs to and
propose a commit — show me the short diff stat and a message whose
first line says what and whose body says why. Never batch unrelated
changes into one commit; if you notice unrelated edits you made along
the way, list them separately and ask. If more than ~30 minutes of
work has gone uncommitted, say so and propose a checkpoint. Then add
this as a "checkpoint commits" line to CLAUDE.md so it sticks — show
me the diff first.
```

## Watch out

- **The wall-of-diff session**: hours of agent work, no commits, one
  giant "did everything" diff at the end. That's not reviewable — and
  un-reviewable diffs get skimmed ([step
  4](/guides/git/review-the-diff/)).
- **Commit spam**: checkpoints at green, not after every keystroke.
  If two commits would always be reverted together, they were one
  commit.
