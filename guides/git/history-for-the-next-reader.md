---
title: "Step 3: Write history for the next reader"
step: 3
status: published
updated: 2026-08-04
description: "Commit messages that say why, and agents that read log and blame before editing: history as the context channel between sessions."
---

Agent sessions don't share memory. What they share is the repo, and
`git log` is the one channel where a past session can talk to a future
one. A commit message that says *why* is context the next agent (or
you, in three weeks) gets for free; a message that says "fix" is a
hole where an explanation should be.

**You've met this before.** "Commit messages are documentation" and
digging through `git blame` are ancient craft. The agent twist doubles
the audience and the authorship: messages are now written *by* agents
and read *by* agents, so their quality directly sets how much context
a fresh session starts with.

## The habits

- **First line what, body why.** Plus a line on what was verified:
  "tests pass" vs "reproduced the bug, probe failed then passed" are
  different claims, and the message is where the difference survives.
- **Honest attribution.** Agent-authored commits carry an agent
  trailer (Claude Code adds `Co-Authored-By` by default). Not
  ceremony: when a defect pattern shows up later, you'll want to
  filter history by author kind.
- **Read before editing.** An agent about to work in unfamiliar code
  should read `git log --oneline` for the touched files and `git
  blame` around the target function first. Much of "why is this weird
  code here" is answered by the commit that introduced it.
- **History is append-only where it's shared.** Rewriting pushed
  history breaks every clone and confuses every future session's
  reading of the past ([step 5](/guides/git/cheap-recovery/)).

## Try it

<div data-example="weird-retry-loop"><a href="/examples/weird-retry-loop/">Interactive example: The weird retry loop →</a></div>

## Do it by hand

Two prompts to start using today: *"before you touch that module, read
its git log and blame the function you're changing; tell me what you
learned"*, and *"rewrite that commit message: first line what, body
why, plus what you verified."*

## Try it with your agent

```text
Standing rules for this repo's history. (1) Before editing any file
you haven't read in this session, check git log --oneline -15 -- <file>
and blame the region you're changing; if the history explains something
surprising, say so before proceeding. (2) Every commit message: first
line states the change in plain words; body states why, and what was
verified (the actual command or probe, not "it works"). (3) Keep your
co-author trailer on. Add these to the supported project instruction file
(`AGENTS.md`, `CLAUDE.md`, or its documented equivalent) under "git agreements".
Show me the diff first.
```

## Watch out

- **Message theater**: a beautifully formatted body that restates the
  diff is noise. The body earns its lines by holding what the diff
  can't show: intent, alternatives rejected, verification.
- **Blame-blindness**: an agent that "cleans up" code whose weirdness
  was a documented workaround reintroduces the original bug. The
  reading habit exists precisely for this.
