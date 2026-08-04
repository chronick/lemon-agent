---
title: "Step 8 — Graduate protocol to hooks"
step: 8
status: draft
updated: 2026-07-31
description: "Rules a script can check shouldn't stay prose: edit-time advisory hooks that flag findings mechanically — advisory, never a judgment-replacing gate."
---

Some working agreements are judgment calls forever. Others are
mechanically checkable — quoting bugs, type leaks at serialization
boundaries, metered clients in test files. Those **graduate**: from a
line of prose the agent might honor, to a hook that flags the problem
at edit time, every time, for free.

**You've met this before.** Linters, pre-commit hooks, CI checks —
shift-left, poka-yoke. The agent twist is only the audience: the
hook's report lands mid-session where the agent reads it and fixes
the finding before you ever see it.

> Where this comes from: a shell word-splitting incident (the classic
> unquoted `$var` in a rename loop,
> [AF-12](/agent-workflow-failure-list/)) became an edit-time hook
> running `ruff` on python and `shellcheck` on shell for every file the
> agent touches. The detail that matters: **shellcheck's default
> severity misses SC2086** — the exact class that motivated the hook —
> so it must run at `--severity=info` or it silently fails its own
> founding incident. That's the difference between installing a linter
> and encoding *your* incident.

## The graduation rule

**Advisory, never gate.** The hook reports findings; the agent fixes
what its own edit introduced and leaves pre-existing findings unless
asked. A hard-failing gate on taste- or judgment-adjacent checks
recreates the failure the workflow list warns about: the problem being
named is skipping judgment, and a gate that replaces judgment repeats
it. (The entries marked ⚙ on [the workflow
list](/agent-workflow-failure-list/) are the natural graduates —
checkable by a script, still deserving a human-visible report.)

## Do it by hand

1. Pick your most mechanical agreement — quoting
   ([AF-12](/agent-workflow-failure-list/)), numeric type leaks
   ([AF-13](/agent-workflow-failure-list/)), billed clients in tests
   ([AF-06](/agent-workflow-failure-list/)).
2. Wire it to your harness's hook mechanism (Claude Code: a
   `PostToolUse` hook on Edit/Write in settings) so it runs on every
   edited file, scoped to the file just touched.
3. Set the policy in writing: *fix findings your edit introduced;
   leave pre-existing ones unless asked.* Without that line, the first
   legacy file the agent touches becomes an unrequested refactor.

## Or paste this into Claude

```text
Install an edit-time advisory lint. Whenever you edit a *.py or *.sh
file, run ruff on python files and shellcheck at --severity=info on
shell files (default severity misses SC2086-class quoting bugs, which
are exactly what I care about), scoped to the file just edited.
Findings are advisory: fix the ones the current edit introduced; leave
pre-existing ones unless I ask. Wire it into this harness's hook
mechanism (in Claude Code, a PostToolUse hook in settings); if there's
no hook mechanism, write the script anyway and tell me exactly where
to call it. Show me every file before writing it.
```

## Watch out

- **Default severities**: the founding incident of your hook may be
  below the tool's default threshold — verify the hook flags the exact
  incident that motivated it ([step
  2](/guides/coding-agents/verification-loop/): baseline before trusting the probe).
- **Hard gates on advisory checks**: blocked edits teach the agent to
  route around the check, not to honor it.
