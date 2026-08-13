---
title: "Step 4: Reviews that try to kill the work"
step: 4
status: published
updated: 2026-08-05
description: "Ask independent reviewers to find specific ways the work could fail, then verify each finding before changing the code."
---

“Please review this” often produces general approval and small style notes. An
**adversarial review** asks a sharper question: *How could this work fail?*
Several reviewers inspect the change independently from different angles.
Then a separate pass checks whether each reported problem is real before
anyone edits the code.

This combines familiar practices: code review, red-team thinking, and the rule
that a test must be capable of failing. Agents make it cheap to run several
independent passes. Independence matters because two reviewers who share an
answer are not two sources of evidence.

> Where this comes from: on a multi-phase foundational build, a
> per-phase multi-agent correctness review caught real data-loss,
> panic, and cache-invalidation bugs in code a green test suite had
> already passed. It earned a standing rule: after each phase of
> foundational work, review-then-refactor before building the next
> floor on top.

## Four parts

1. **Independent passes.** Use two to four reviewers that cannot see one
   another's output.
2. **Different questions.** One traces realistic inputs, one looks for data
   loss and failure recovery, and one checks whether the change matches the
   request.
3. **Verification after review.** Try to disprove every finding against the
   actual code. Agent reviewers can sound certain about a problem that is not
   there.
4. **Concrete findings saved to disk.** “This breaks” is a claim. “These
   inputs produce this wrong output at this line” is a finding
   ([AF-17](/agent-workflow-failure-list/#af-17),
   [AF-02](/agent-workflow-failure-list/#af-02)).

## Try it

<div data-example="review-that-refutes"><a href="/examples/review-that-refutes/">Interactive example: The review that refutes →</a></div>

## When to run it

- After each **phase** of foundational or multi-phase work: the
  standing rule above.
- Before merging anything an agent built **while you weren't
  watching** (overnight runs, background tasks; see
  [step 5](/guides/coding-agents/fan-out/)).
- Any time green tests are the only evidence you have. Tests prove
  what they test; the review hunts what they don't.

## Try it with your agent

```text
Run an adversarial review of the current diff (or the directory I
name). Spawn three independent reviewers that cannot see each other's
output: one for correctness (trace realistic inputs through the
changed paths), one for data loss and failure modes (crashes, partial
writes, rollback, concurrent access), one for fidelity to the request
(does this do what was asked, no more, no less). Each returns concrete
findings with file:line and the failing scenario. Then run a verify
pass: for each finding, try to refute it against the actual code, and
drop anything you can't confirm. Report only confirmed findings, most
severe first. State what the review did NOT cover. Don't fix anything
yet: findings first, fixes on my pick.
```

## Watch out

- **Unverified review output**: reviewers can be wrong. Never batch-apply
  findings before checking them against the code.
- **Hidden limits** ([AF-18](/agent-workflow-failure-list/#af-18)): a
  review that sampled three files reads identically to one that read
  the codebase, unless disclosure is demanded. "State what you did not
  cover" is the part that matters.
