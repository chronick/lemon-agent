---
title: "Step 9: Turn checkable rules into checks"
step: 9
status: published
updated: 2026-08-05
description: "Keep judgment in prose, but turn mechanical rules into advisory hooks and scripts that run when they matter."
---

Some working agreements require judgment: whether a design fork matters,
whether a result is clear, or whether a change is in scope. Leave those as
instructions for the agent and human.

Other rules are mechanical. A script can find an unquoted shell variable,
invalid JSON, a live paid client in a test, or a broken link more reliably and
cheaply than a model can remember to inspect each time. Turn those rules into
checks.

## Keep the rule and the check together

The written instruction explains why the check exists and how to respond. The
script supplies consistent detection.

One real shell incident came from an unquoted variable. The resulting hook ran
ShellCheck on each edited shell file. Crucially, it used
`--severity=info`; ShellCheck's default threshold did not report the exact
`SC2086` issue the hook was built to catch. Installing a linter was not enough.
The check had to reproduce the founding failure.

## Advisory first

A useful default is:

> Report findings after an edit. Fix findings introduced by this task. Leave
> existing findings alone unless the user expands the scope.

This catches mistakes early without turning every old warning into an
unrequested refactor. Reserve hard failures for rules that are
binary and important enough to block the work.

## Do it yourself

1. Pick one instruction a program can evaluate without judgment.
2. Write the smallest script that checks only the file or artifact just
   changed.
3. Feed it a known bad example and confirm that it reports the problem.
4. Connect it to the hook mechanism your agent supports, or document the
   command the agent must run after relevant edits.
5. Add the response policy to `AGENTS.md`, `CLAUDE.md`, or the relevant skill.

Different agent hosts expose different hooks. For example, Claude Code can run
a `PostToolUse` hook after an edit. If your host has no edit hook, the check is
still useful as a command, pre-commit check, or CI job.

## Try it

<div data-example="promise-vs-hook"><a href="/examples/promise-vs-hook/">Interactive example: The promise and the hook →</a></div>

## Try it with your agent

```text
Find one rule in this project's instructions that can be checked without
human judgment. Propose the smallest advisory script for it and show where it
should run: an agent edit hook if supported, otherwise a documented command,
pre-commit check, or CI job. First prove the check catches the exact bad case
that motivated the rule. Report findings introduced by the current task;
leave existing findings alone unless I expand the scope. Show every changed
file before saving.
```

## Watch out

- **A check that has never caught anything:** prove it fails on the exact
  mistake it is meant to prevent before trusting a clean result.
- **Default settings:** the relevant finding may sit below a linter's default
  threshold.
- **Hard gates on judgment:** a mechanical blocker cannot decide whether an
  architectural tradeoff or prose choice is good.
