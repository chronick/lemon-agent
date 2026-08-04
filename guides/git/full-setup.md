---
title: "Step 0 — The one-paste repo baseline"
step: 0
status: draft
updated: 2026-08-04
description: "Optional full-package setup: a clean repo, a working CLAUDE.md, checkpoint-commit and review habits — in one confirmation-gated paste."
---

Everything in this guide works on any repo, adopted one habit at a
time. This step is the shortcut: one paste that sets a project up with
the baseline, confirming each change before it's made.

What it sets up — each explained in its own step:

- A clean **repo** with a stack-appropriate `.gitignore`
- **Checkpoint commits** as standing behavior ([step 1](/guides/git/commit-small/))
- **Branch discipline** for non-trivial work ([step 2](/guides/git/branch-blast-radius/))
- **Diff-not-summary review** as the merge gate ([step 4](/guides/git/review-the-diff/))

## The paste

```text
Set up this project's git baseline. Work one step at a time, show me
every file and command before running it, and wait for my ok.

1. If this isn't a git repo yet: git init with branch "main", write a
   .gitignore appropriate to the stack you detect, and make an initial
   commit of the current state so there's a checkpoint before any
   agent edits.

2. Add (or extend) CLAUDE.md with a "## Git agreements" section:
   - Checkpoint commits: after each change that builds and passes
     tests, propose a commit — small, single-purpose, message says why.
   - Branch per task: non-trivial work happens on a branch named
     claude/<task-slug>; main stays deployable.
   - Review the diff: when work is done, present the full diff plus
     what was verified and what wasn't; never merge or push without
     explicit approval.
   - Recovery rules: prefer revert over fix-forward on main; never
     force-push; never rewrite shared history; deletions of branches
     or files get asked about first.

3. Tell me which of these you can enforce mechanically in this harness
   (hooks, settings) and offer to wire the one with the best
   effort-to-value ratio.
```

## If you'd rather go manual

Read [step 1](/guides/git/commit-small/) and [step
4](/guides/git/review-the-diff/) — checkpoints and diff review are the
two habits carrying most of the value.
