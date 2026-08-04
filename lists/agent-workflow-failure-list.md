---
title: "The Agent Workflow Failure List"
number: 2
surface: "agent-assisted engineering"
arm: verification
entries: 18
prefix: "AF"
status: draft
updated: 2026-07-31
description: "18 numbered failures of agent-assisted engineering, each grounded in a measured incident. Run it against a session, a PR, or an agent's report."
---

Run it against a working session, a PR, or an agent's report. Every
match is a stop-and-fix, not a style note. Where [the prose
list](/prose-failure-list/) names failures of taste, this list names
failures of **verification** — and most of its gates are mechanically
checkable, which is the point.

> Every entry here was paid for. Each one names a failure measured in
> the author's own agent sessions — 25 sessions, 16 buggy-code
> incidents, plus the interruption and environment logs — not genre
> vibes. **v0** — ids are stable (cite AF-01, AF-14), but entries may
> still be cut before 1.0. Entries marked ⚙ are executable-advisory
> candidates: a script could flag them. The rest are protocol.

## How to use it

Written for both parties: most entries name what the **agent** should
refuse to skip; several name what the **human** should say up front.

**In a review.** Paste this prompt, then the list, then the thing under
review (a PR diff, a session transcript, a work report):

```text
Apply the Agent Workflow Failure List (below) to this work. Flag every
match: cite the AF id, quote the evidence, and name the stop-and-fix.
Distinguish confirmed matches from suspicions. Also list the applicable
gates that passed. End with the checks most needed before merge.
```

**As a Claude Code skill.** Installs a verification pass you can run on
a PR, a session, or a report:

```sh
git clone https://github.com/chronick/lemon-agent
cp -r lemon-agent/skills/agent-workflow-failure-list ~/.claude/skills/
```

Then ask: *"run the workflow failure list on this PR"*.

**As standing working agreements.** The protocol entries compress into a
`CLAUDE.md` or system-prompt layer: pick the gates that have bitten you
and state them as one-liners (AF-01: the probe must fail first; AF-02:
show the before-number). The ⚙ entries graduate to scripts — shellcheck
in an edit hook, a grep for metered clients before the first test run.
This is how the list runs at home: enforced on the author's own machine
before it was published.

**In an agent or pipeline.** Fetch the raw list at
[/lists/agent-workflow-failure-list.md](/lists/agent-workflow-failure-list.md)
and the machine catalog at [/catalog.json](/catalog.json). Run it as an
advisory pass that *reports* findings. None of these should hard-fail a
build: the failure being named is skipping judgment, and a gate that
replaces judgment repeats it.

## A. Verification (the fake-green family)

1. **AF-01 — The clean-probe fallacy.** ⚙ A verification probe that
   returns zero findings on its first run is treated as *broken until
   proven otherwise*. The incident: a broken relative path produced a
   false "0 orphans" and the fix shipped against it. Gate: the probe must
   reproduce the failure — show a non-zero baseline — before any fix.
2. **AF-02 — No before-number.** A fix reported with only an "after"
   state. Verification is a comparison; without the measured before, it's
   a claim.
3. **AF-03 — Stale-state artifact.** ⚙ Output built from cached or stale
   inputs and reported as current — the v2 render that silently conducted
   a stale score. Gate: hash the inputs into the output's identity and
   verify the hash at consume time.
4. **AF-04 — Describing instead of serving.** "It works" prose where the
   deliverable should be the live thing — a page, a render, a deploy, a
   URL. If it can be served, serve it; the description is not the
   artifact.
5. **AF-05 — Green against the wrong target.** ⚙ Tests pass against a
   different configuration, path, or environment than the one production
   runs. The suite's target must be provably the shipped target.

## B. Cost & side effects

6. **AF-06 — Billed calls in tests.** ⚙ A test suite that instantiates
   real metered clients. The incident: tests made live Workers AI and
   Vectorize calls — money spent before anyone noticed. Gate: grep for
   live client construction before the first run; stub every metered
   surface.
7. **AF-07 — Long cycle before small proof.** Committing a full render,
   build, or deploy cycle to a change that a dry run or small-scale probe
   could have falsified in seconds. The inverted-semantics bug found
   after a full audio render is the canonical burn.
8. **AF-08 — Unbounded loop, unbounded state.** ⚙ Long-running work with
   no wall-clock timeout, no state-size cap, no heartbeat. The incidents:
   a 4.4-hour video wedging a nightly ingest queue; a background render
   chain dying on state-file bloat. Every loop gets all three guards.
9. **AF-09 — Irreversible without a gate.** Deletes, force-pushes,
   publishes, sends — executed mid-flow without an explicit stop. The
   kill switch stays with the human even at high autonomy.
10. **AF-10 — Credential improvisation.** When a resource is gated,
    the move is *skip and report* — never harvesting cookies, tokens, or
    credentials to get through. The incident: 49 of 50 tracks shipped;
    the fiftieth nearly cost a browser-cookie extraction.

## C. Semantics & shell

11. **AF-11 — Inverted-pair semantics.** Swapped or sign-flipped
    parameter pairs (pitch/stretch, x/y, before/after) that compile and
    run. Gate: any paired or signed parameter gets a property test
    asserting direction, not just type.
12. **AF-12 — Unquoted expansion.** ⚙ Word-splitting in shell loops —
    `for f in $(...)` over `while IFS= read -r`; `$var` over `"$var"`.
    The rename-loop incident. Gate: shellcheck anything longer than ten
    lines.
13. **AF-13 — Numeric type leak.** ⚙ Platform numeric types escaping
    into serialization boundaries (the numpy float64 → JSON class).
    Gate: serialize through an explicit cast layer.
14. **AF-14 — Inferred trigger condition.** Queue, re-enqueue, cron, or
    state-transition logic built on a gating condition *inferred from
    surrounding code*. The incident: re-enqueue gated on page metadata
    when the human meant bookmark-URL change. Gate: restate the exact
    condition and the plausible alternatives; wait for the pick.

## D. Scope & report

15. **AF-15 — Silent scope drift.** Continuing through a genuine fork —
    framing, ordering, approach — that the human would want to call.
    The measured pattern: human interventions are surgical corrections
    *at forks*, which means unnamed forks are the failure. Name the fork
    when you reach it.
16. **AF-16 — Dense-register report.** Analysis delivered in the working
    register — jargon, section numbers, internal shorthand — where the
    reader asked for plain language. Depth in the work, plainness in the
    report; tables first.
17. **AF-17 — Held only in context.** ⚙ Fan-out work whose findings live
    solely in an agent's context window. One filtered or failed agent
    loses everything. Gate: every worker writes findings to disk
    incrementally; partial files beat perfect memory.
18. **AF-18 — Cap without disclosure.** Bounded coverage — top-N,
    sampling, a retry limit — reported as if it were full coverage.
    State what was dropped; silent truncation reads as completeness.

---

*Part of [Lemon Agent](/) — free tools, honest measurements, agentic
services. Companion: [The Prose Failure List](/prose-failure-list/)
(№ 1, the taste arm).*
