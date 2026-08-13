---
title: "The Agent Workflow Failure List"
number: 2
surface: "agent-assisted engineering"
arm: verification
entries: 20
prefix: "AF"
status: published
updated: 2026-08-12
description: "20 concrete ways agent-assisted work goes wrong, each with a practical stop-and-fix. Use it on a session, diff, PR, or work report."
---

<!-- Title pattern (house rule for every entry): actor + artifact + the
     observable moment. If an entry has a war story, a number, or an error
     string, it goes in the TITLE, not the body. No agentless passives.
     Rationale: the 2026-08-12 readability review measured one-pass recall
     at 14/20 for content but 4/20 for IDs; concrete titles are the fix. -->

Use this list to review a working session, diff, pull request, or agent report.
Each match points to something that needs evidence or a correction, not a
matter of style.

> These entries come from failures observed in real agent sessions. The IDs
> are stable, so you can cite `AF-01` or `AF-14` in project instructions and
> review comments — every entry has a matching anchor, so
> `/agent-workflow-failure-list/#af-14` links straight to it. An entry marked
> ⚙ could be partly checked by a script in your own project. The rest require
> the agent or human to make a judgment and show their reasoning.

## The list at a glance

| ID | The failure |
|----|-------------|
| [AF-01](#af-01) | "No problems found" — from a check nobody ever saw fail |
| [AF-02](#af-02) | "Now it's 12 ms." Down from what? |
| [AF-03](#af-03) | Yesterday's build, presented as today's |
| [AF-04](#af-04) | A description instead of the deliverable |
| [AF-05](#af-05) | The tests passed — on a different build than the one shipping |
| [AF-06](#af-06) | Tests made paid calls |
| [AF-07](#af-07) | A three-hour render ran before a thirty-second check |
| [AF-08](#af-08) | No timeout, no size cap: one job blocked the queue for 4.4 hours |
| [AF-09](#af-09) | It deleted, force-pushed, or published — without asking |
| [AF-10](#af-10) | Locked out, it went hunting for cookies and tokens |
| [AF-11](#af-11) | x and y were swapped — and everything still ran |
| [AF-12](#af-12) | Shell input was not quoted |
| [AF-13](#af-13) | "Object of type float32 is not JSON serializable" |
| [AF-14](#af-14) | It guessed when the job should fire |
| [AF-15](#af-15) | Scope changed without asking |
| [AF-16](#af-16) | The report made the reader decode it |
| [AF-17](#af-17) | The findings died with the chat window |
| [AF-18](#af-18) | "Checked everything" — it checked the first fifty |
| [AF-19](#af-19) | The same correction, given again next session |
| [AF-20](#af-20) | The same twelve commands, retyped every session |

## How to use it

**Review a piece of work.** Give your agent the diff, transcript, or report,
and this prompt — the first line hands it the list itself, so it works in a
fresh session:

```text
Fetch https://lemon-agent.dev/lists/agent-workflow-failure-list.md and read
it. Then apply the Agent Workflow Failure List to this work. For every match,
cite the AF id, quote the evidence, and state the correction needed before we
continue. Separate confirmed problems from suspicions. Also name the relevant
checks that passed. End with the three most important checks still needed.
```

**Install it as a reusable skill.** [`skills`](https://www.npmjs.com/package/skills)
is an open-source CLI that keeps one managed copy of a skill for every agent
you use; `--agent codex claude-code` is one flag with two values, not a typo:

```sh
npx skills add chronick/lemon-agent --global \
  --agent codex claude-code --skill agent-workflow-failure-list --yes
```

Then ask your agent to “run the workflow failure list on this PR.” Use
`npx skills list` to see what is installed and where, and
`npx skills update` to refresh it.

**Keep the lessons that apply to your work.** When a failure happens, add the
smallest rule that would prevent it to `AGENTS.md`, `CLAUDE.md`, or your
agent's supported project-instructions file. When the response becomes a
repeatable workflow, make it a skill. When a program can check it without
judgment, make it a small tool or advisory hook.

**Use it from a program.** The raw list is available at
[/lists/agent-workflow-failure-list.md](/lists/agent-workflow-failure-list.md),
and its metadata is in [/catalog.json](/catalog.json). Automated use should
report evidence for review. Do not turn the whole list into a hard build gate;
many entries describe failures of judgment that another mechanical rule cannot
settle.

## Green lights that prove nothing

1. <a id="af-01"></a>**AF-01 — “No problems found” — from a check nobody ever
   saw fail.** ⚙ A new check reports a clean result, and the result is
   trusted immediately. A broken path once produced “0 orphans” and let a
   faulty fix ship. Stop and fix: **run the check on a known bad case, or
   show a non-zero before state.** A check that cannot fail cannot prove
   success.
2. <a id="af-02"></a>**AF-02 — “Now it's 12 ms.” Down from what?** A fix is
   reported only with an after result. Stop and fix: **show the same
   measurement before and after the change.** Without the first value,
   improvement is only a claim.
3. <a id="af-03"></a>**AF-03 — Yesterday's build, presented as today's.** ⚙ A
   render, report, or generated file was built from cached or stale inputs
   and presented as new. Stop and fix: **record input identity in the output
   and verify it when the output is used.**
4. <a id="af-04"></a>**AF-04 — A description instead of the deliverable.**
   The report says a page, render, deploy, or file works but does not
   provide it. Stop and fix: **serve or attach the artifact.** A confident
   summary is not the result.
5. <a id="af-05"></a>**AF-05 — The tests passed — on a different build than
   the one shipping.** ⚙ Checks ran with a different path, configuration, or
   environment from the one that will ship. Stop and fix: **show that the
   tested target and the shipped target are the same.**

## It went further than it was allowed

6. <a id="af-06"></a>**AF-06 — Tests made paid calls.** ⚙ A test constructed
   a real metered client and spent money. Stop and fix: **search for live
   client creation before the first run and replace paid surfaces with
   stubs**, unless the human explicitly approves an integration test and its
   cost.
7. <a id="af-07"></a>**AF-07 — A three-hour render ran before a
   thirty-second check.** A full render, build, or deploy ran before a small
   sample or dry run could test the idea. Stop and fix: **run the cheapest
   check capable of disproving the change, then scale up.**
8. <a id="af-08"></a>**AF-08 — No timeout, no size cap: one job blocked the
   queue for 4.4 hours.** ⚙ A loop or background job ran with no timeout,
   size limit, or visible heartbeat; another job died silently when its
   state file grew too large. Stop and fix: **add all three bounds before
   restarting.**
9. <a id="af-09"></a>**AF-09 — It deleted, force-pushed, or published —
   without asking.** The agent took a hard-to-reverse action (delete,
   force-push, publish, send, charge) in the middle of the flow, without
   pausing. Stop and fix: **keep the final approval for irreversible actions
   with the human.**
10. <a id="af-10"></a>**AF-10 — Locked out, it went hunting for cookies and
    tokens.** After reaching a locked resource, the agent went looking for
    credentials that would get it through. Stop and fix: **skip the item and
    report the limitation.** Missing authority is a boundary, not a puzzle.

## It ran — and it was still wrong

11. <a id="af-11"></a>**AF-11 — x and y were swapped — and everything still
    ran.** A pair such as x/y, before/after, or pitch/stretch was reversed
    or sign-flipped, and nothing crashed. Stop and fix: **add a test that
    proves the direction of each value**, not only its type.
12. <a id="af-12"></a>**AF-12 — Shell input was not quoted.** ⚙ A loop or
    command allowed spaces and special characters to split a filename or
    variable. Stop and fix: **quote expansions, use safe read loops, and run
    ShellCheck** on nontrivial shell code.
13. <a id="af-13"></a>**AF-13 — “Object of type float32 is not JSON
    serializable.”** ⚙ A library-specific numeric type, such as a NumPy
    scalar, reached a serialization boundary that only accepts plain
    language types — the same failure ships in any ecosystem with wrapper
    types. Stop and fix: **convert values explicitly at the boundary and
    test the actual serialization.**
14. <a id="af-14"></a>**AF-14 — It guessed when the job should fire.**
    Queue, schedule, or state-transition logic was built on a condition
    inferred from nearby code rather than confirmed with the human. Stop and
    fix: **state the exact trigger and the other plausible readings, then
    wait for a choice.**

## Nothing usable came back

15. <a id="af-15"></a>**AF-15 — Scope changed without asking.** The work
    reached a real fork in framing, order, or approach and silently chose a
    larger or different task. Stop and fix: **name the fork, recommend an
    option, and wait** when the choice materially changes the outcome.
16. <a id="af-16"></a>**AF-16 — The report made the reader decode it.** The
    analysis may be sound, but it arrives as jargon, internal shorthand, or
    unexplained section references. Stop and fix: **state the conclusion and
    evidence in plain language first.** Keep technical terms where they add
    precision, and define local shorthand.
17. <a id="af-17"></a>**AF-17 — The findings died with the chat window.** ⚙
    Research or parallel work was held only in an agent's context window,
    where a filtered message, failed worker, or closed session could erase
    it. Stop and fix: **write findings to a project artifact as the work
    proceeds.**
18. <a id="af-18"></a>**AF-18 — “Checked everything” — it checked the first
    fifty.** A top-N limit, sample, retry cap, or omitted source was not
    disclosed. Stop and fix: **state what was checked, what was dropped, and
    why.**
19. <a id="af-19"></a>**AF-19 — The same correction, given again next
    session.** The human corrected the same mistake in more than one session
    because the first lesson was never added to project instructions, a
    skill, or a check. Stop and fix: **put the smallest durable lesson in
    `AGENTS.md`, `CLAUDE.md`, the relevant skill, or a deterministic tool —
    then show the change.**
20. <a id="af-20"></a>**AF-20 — The same twelve commands, retyped every
    session.** A stable sequence of commands, API calls, renames, checks, or
    transformations was re-created by hand each time — more time spent, and
    another chance for a typo or an omitted step. Stop and fix: **build one
    small command with explicit inputs, structured output, meaningful
    errors, and a test on real data.** Document it where future sessions
    will find it.

---

*Part of [Lemon Agent](/). Companion: [The Prose Failure
List](/prose-failure-list/) reviews clarity and taste.*
