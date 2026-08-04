---
title: "Step 4 — Reviews that try to kill the work"
step: 4
status: draft
updated: 2026-07-31
description: "Adversarial review: independent reviewers with distinct lenses try to refute the work, findings are verified before anything gets fixed."
---

"Please review this" produces compliments and nitpicks. An
**adversarial review** is a different instrument: independent
reviewers whose explicit job is to *refute* the work, followed by a
verify pass that tries to kill each finding before you act on any of
them.

**You've met this before.** Code review crossed with a red team, plus
mutation testing's founding instinct — a test that can't fail proves
nothing, and neither does a reviewer that can't refute. Independent
passes are the old two-reviewer rule; agents just make N reviewers
cost what one used to.

> Where this comes from: on a multi-phase foundational build, a
> per-phase multi-agent correctness review caught real data-loss,
> panic, and cache-invalidation bugs — in code a green test suite had
> already passed. It earned a standing rule: after each phase of
> foundational work, review-then-refactor before building the next
> floor on top.

## The shape

1. **Independent passes.** Two to four reviewers that cannot see each
   other's output. Independence is what makes agreement between them
   mean something.
2. **Distinct lenses, not clones.** One traces correctness on real
   inputs; one hunts data-loss and failure modes (crashes, partial
   writes, rollback); one checks the change against what was actually
   asked. Diverse lenses catch failure modes redundancy can't.
3. **A verify stage.** For each finding, an explicit attempt to refute
   it against the code. Plausible-but-wrong findings are the tax on
   agent review; the refute pass is how you stop paying it.
4. **Findings on disk, severity-ordered, scenario spelled out.** "This
   breaks" is a claim; "these inputs produce this wrong output" is a
   finding ([AF-17](/agent-workflow-failure-list/),
   [AF-02](/agent-workflow-failure-list/)).

## When to run it

- After each **phase** of foundational or multi-phase work — the
  standing rule above.
- Before merging anything an agent built **while you weren't
  watching** (overnight runs, background tasks — see
  [step 5](/guides/coding-agents/fan-out/)).
- Any time green tests are the only evidence you have. Tests prove
  what they test; the review hunts what they don't.

## Or paste this into Claude

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
yet — findings first, fixes on my pick.
```

## Watch out

- **Skipped verify stage**: raw reviewer output includes confident
  fiction. Never batch-apply unverified findings.
- **Coverage theater** ([AF-18](/agent-workflow-failure-list/)): a
  review that sampled three files reads identically to one that read
  the codebase, unless disclosure is demanded. "State what you did not
  cover" is load-bearing.
