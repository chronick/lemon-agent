---
title: "Step 5 — Recovery is cheap. Use it."
step: 5
status: draft
updated: 2026-08-04
description: "Revert-first culture, reflog as the safety net, and the irreversible commands that stay human — git makes agent mistakes cheap if you let it."
---

Everything before this step exists so that when something goes wrong —
and at agent speed, something will — recovery costs one command. The
mindset shift: stop treating mistakes as things to prevent at all
costs, and start treating them as things git makes **cheap**. Cheap
recovery is what lets you run agents boldly.

**You've met this before.** Ops culture figured this out as
"roll back first, debug later" — restore service, then investigate at
leisure. Same move here: `git revert` restores the known-good world
instantly, and the broken attempt stays in history to learn from.

## The habits

- **Revert-first on main.** When a merged change turns out bad, revert
  it — don't fix forward under pressure. Fix-forward is how one bug
  becomes three. The revert buys calm; the redo happens on a branch
  ([step 2](/guides/git/branch-blast-radius/)).
- **Reflog is the deep safety net.** Commits survive resets, deleted
  branches, botched rebases — `git reflog` finds them for ~90 days.
  Knowing this changes your risk posture: with checkpoints
  ([step 1](/guides/git/commit-small/)), almost nothing is truly lost.
- **The irreversible three stay human.** Force-pushes, history
  rewrites on shared branches, and deletions (branches, files,
  stashes) are the only git operations that destroy. The agent
  proposes; a human runs them — the kill-switch rule, verbatim.
- **Practice one recovery.** Deliberately revert something trivial
  once, and reflog-restore a deleted branch once. Recovery you've
  never rehearsed isn't a capability, it's a hope.

## Do it by hand

Next time an agent change smells wrong on main: *"revert it now; then
reproduce the problem on a branch and show me the failing case before
attempting the redo."* Notice the redo now has a baseline — recovery
composes with the verification loop.

## Or paste this into Claude

```text
Standing recovery rules for this repo. (1) If a change on main turns
out broken, propose an immediate git revert rather than fixing
forward; the redo happens on a fresh branch with a reproduced failure
first. (2) You never run force-pushes, history rewrites on shared
branches, or deletions of branches/files/stashes — for those, state
the exact command, what it destroys, and wait for me to run it or
approve it. (3) If work seems lost, check git reflog and report what
you find before declaring anything gone. Add these to CLAUDE.md under
"git agreements" — show me the diff first.
```

## Watch out

- **Fix-forward under pressure**: the agent's default instinct — it
  wants to solve, not retreat. The revert-first line in CLAUDE.md
  exists because you won't remember to say it during an incident.
- **"I've force-pushed to fix the history"**: said cheerfully, after
  the fact. This is why the irreversible three are written down as
  never-run, not as ask-nicely.
- **Recovery theater**: a revert that doesn't get verified is just
  another change. The probe that showed the breakage should pass
  after the revert — before/after applies here too.
