---
title: "Step 4: Review the diff, not the summary"
step: 4
status: published
updated: 2026-08-04
description: "The diff is the unit of trust: merge on what the code says, never on the agent's account of it."
---

When an agent finishes a task it hands you two things: the diff, and a
story about the diff. The story is always tidy. The rule that keeps
you safe is old and simple: **trust flows through the diff.** You
merge what the code says, never what the summary says it says.

**You've met this before.** This is code review, unchanged. What
changed is the author: a human teammate's summary errs by omission,
an agent's can err by confabulation (a plausible account of changes
that aren't quite the changes). The review habit is the same; the
reason it's non-negotiable got stronger.

## The habits

- **Read the full diff before merging.** For checkpoint-sized commits
  ([step 1](/guides/git/commit-small/)) this is minutes. If the diff
  is too big to read, that's the finding. Split it.
- **Demand the verification record.** What was run, what it showed,
  what was *not* verified. "Tests pass" without which tests against
  what target is a claim, not a record.
- **The agent states what it didn't do.** Skipped cases, stubbed
  paths, TODO'd edges. Undisclosed caps read as completeness.
- **Merge and push stay human.** The agent prepares; you pull the
  trigger. Irreversible actions stay with you, and this is the gate
  where that matters most.

For the adversarial version of this review (independent reviewers
trying to refute the work), see the coding-agents guide's
[step 4](/guides/coding-agents/adversarial-review/); it composes with
this one at exactly this gate.

## Try it

<div data-example="merge-on-summary"><a href="/examples/merge-on-summary/">Interactive example: The merge on a summary →</a></div>

## Do it by hand

End every agent task with: *"show me the full diff, what you verified
(commands and output), and what you did not verify."* Read the diff
top to bottom once before responding. That's the whole practice.

## Try it with your agent

```text
Standing rule for finishing any task in this repo: present (1) the
full diff against the base branch, (2) the verification record (the
exact commands you ran and what they showed), (3) what you did NOT
verify or deliberately skipped, stated plainly. Never merge, push, or
mark a task done without my explicit ok. If the diff exceeds a couple
hundred lines, propose how to split it into reviewable commits
instead of asking me to review it whole. Add this to the supported
project instruction file under "git agreements". Show me the diff
first.
```

## Watch out

- **Summary-only review**: the failure mode this whole step exists
  for. If you notice you're approving from the chat window without
  the diff open, stop.
- **The unreviewable diff**: 2,000 lines of mixed changes isn't a
  review, it's a signature. Push back to checkpoints.
- **Verification without a target**: "the suite passed" (which
  suite, against which config?). Green against the wrong target is
  the classic false pass.
