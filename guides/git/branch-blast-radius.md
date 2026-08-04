---
title: "Step 2 — Branches bound the blast radius"
step: 2
status: draft
updated: 2026-08-04
description: "A branch per task keeps main deployable; worktrees give parallel agents isolated copies that can't collide."
---

A branch is a blast-radius boundary: however wrong an agent task goes,
the damage is confined to `claude/<task>` and main stays deployable.
The rule costs one command and removes the scariest failure mode —
half-finished agent work tangled into the branch you ship from.

**You've met this before.** Feature branches and trunk-based
development have argued for a decade; agents settle the argument
locally. The branch isn't for long-lived divergence — it's a
containment vessel, merged the same day, or closed without mercy.

## The habits

- **A branch per task, named for the task.** `claude/fix-orphan-check`
  tells future-you (and the next agent reading `git branch`) what was
  attempted. Merged branches get deleted; abandoned ones too.
- **Main is the deployable truth.** Agents never commit directly to
  main once a project is real. Everything arrives by reviewed merge
  ([step 4](/guides/git/review-the-diff/)).
- **Worktrees for parallel agents.** Two agents editing one checkout
  collide — half-applied edits, stepped-on builds. `git worktree`
  gives each task a full working copy of the same repo, cheap. One
  agent per worktree, one branch per worktree, no collisions.
- **A closed branch is a cheap experiment.** The point of containment
  is that "this approach didn't work" costs a branch deletion, not an
  untangling.

## Try it

<div data-example="experiment-on-main"><a href="/examples/experiment-on-main/">Interactive example: The experiment on main →</a></div>

## Do it by hand

Next non-trivial task: *"create a branch claude/<slug> for this, work
there, and when you're done show me the diff against main."* For
parallel work: *"set up a worktree for each of these two tasks so they
can't interfere."*

## Or paste this into Claude

```text
From now on in this repo: before starting any non-trivial task, create
a branch named claude/<short-task-slug> and do all work there — never
commit directly to main. When the task is done, present the full diff
against main and wait for my review; after merge, delete the branch.
If I ask for parallel tasks, put each in its own git worktree with its
own branch so they can't interfere, and tell me the worktree paths.
Add these as "branch discipline" lines to CLAUDE.md — show me the
diff first.
```

## Watch out

- **The nine-day branch**: containment vessels have a shelf life. A
  branch that drifts for days accumulates conflicts that dwarf the
  work itself — merge small and soon, or close it.
- **Direct-to-main "tiny fixes"**: the exception that eats the rule.
  A one-line fix is exactly the thing that's cheap to branch and
  review; the habit survives only if it has no exceptions.
- **Worktree sprawl**: `git worktree list` weekly; prune what's
  merged. Orphaned worktrees are where confusion about "which copy is
  real" comes from.
