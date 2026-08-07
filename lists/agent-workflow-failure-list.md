---
title: "The Agent Workflow Failure List"
number: 2
surface: "agent-assisted engineering"
arm: verification
entries: 20
prefix: "AF"
status: published
updated: 2026-08-05
description: "20 concrete ways agent-assisted work goes wrong, each with a practical stop-and-fix. Use it on a session, diff, PR, or work report."
---

Use this list to review a working session, diff, pull request, or agent report.
Each match points to something that needs evidence or a correction, not a
matter of style.

> These entries come from failures observed in real agent sessions. The IDs
> are stable, so you can cite `AF-01` or `AF-14` in project instructions and
> review comments. An entry marked ⚙ can be checked partly by a script. The
> rest require the agent or human to make a judgment and show their reasoning.

## How to use it

**Review a piece of work.** Give your agent the list and the diff, transcript,
or report:

```text
Apply the Agent Workflow Failure List to this work. For every match, cite the
AF id, quote the evidence, and state the correction needed before we continue.
Separate confirmed problems from suspicions. Also name the relevant checks
that passed. End with the three most important checks still needed.
```

**Install it as a reusable skill.** The `skills` CLI can manage one shared
installation for Codex and Claude Code:

```sh
npx skills add chronick/lemon-agent --global \
  --agent codex claude-code --skill agent-workflow-failure-list --yes
```

Then ask your agent to “run the workflow failure list on this PR.” Use
`npx skills list` to see managed skills and `npx skills update` to refresh
them.

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

## A. The evidence does not prove the claim

1. **AF-01 — A check that was never shown to fail.** ⚙ A new check reports no
   problems, and the result is trusted immediately. A broken path once
   produced “0 orphans” and let a faulty fix ship. **Stop and fix:** run the
   check on a known bad case or show a non-zero before state. A check that
   cannot fail cannot prove success.
2. **AF-02 — No measured before state.** A fix is reported only with an after
   result. **Stop and fix:** show the same measurement before and after the
   change. Without the first value, improvement is only a claim.
3. **AF-03 — Old inputs reported as current.** ⚙ A render, report, or generated
   file was built from cached inputs and presented as new. **Stop and fix:**
   record input identity in the output and verify it when the output is used.
4. **AF-04 — A description instead of the deliverable.** The report says a
   page, render, deploy, or file works but does not provide it. **Stop and
   fix:** serve or attach the artifact. A confident summary is not the result.
5. **AF-05 — Tests ran against the wrong target.** ⚙ Checks passed with a
   different path, configuration, or environment from the one that will ship.
   **Stop and fix:** show that the tested target and shipped target are the
   same.

## B. Cost, time, and authority were left open

6. **AF-06 — Tests made paid calls.** ⚙ A test constructed a real metered
   client and spent money. **Stop and fix:** search for live client creation
   before the first run and replace paid surfaces with stubs unless the human
   explicitly approves an integration test and its cost.
7. **AF-07 — An expensive run came before a cheap proof.** A full render,
   build, or deploy ran before a small sample or dry run could test the idea.
   **Stop and fix:** run the cheapest check capable of disproving the change,
   then scale up.
8. **AF-08 — Long work had no stopping bounds.** ⚙ A loop or background job
   had no timeout, size limit, or visible heartbeat. One video blocked an
   ingest queue for 4.4 hours; another job died when its state file grew too
   large. **Stop and fix:** add all three bounds before restarting.
9. **AF-09 — An irreversible action had no approval gate.** The agent deleted,
   force-pushed, published, sent, or charged during the flow without pausing.
   **Stop and fix:** keep the final approval for hard-to-reverse actions with
   the human.
10. **AF-10 — The agent tried to work around missing access.** It looked for
    cookies, tokens, or other credentials after reaching a locked resource.
    **Stop and fix:** skip the item and report the limitation. Missing
    authority is a boundary, not a puzzle.

## C. The mechanism did something different from what we meant

11. **AF-11 — Two related values were swapped.** A pair such as x/y,
    before/after, or pitch/stretch was reversed or sign-flipped. The code still
    ran. **Stop and fix:** add a test that proves the direction of each value,
    not only its type.
12. **AF-12 — Shell input was not quoted.** ⚙ A loop or command allowed spaces
    and special characters to split a filename or variable. **Stop and fix:**
    quote expansions, use safe read loops, and run ShellCheck on nontrivial
    shell code.
13. **AF-13 — A library number escaped into JSON.** ⚙ A numeric type such as a
    NumPy scalar reached a serialization boundary that only accepts ordinary
    language types. **Stop and fix:** convert values explicitly at the
    boundary and test the actual serialization.
14. **AF-14 — A trigger condition was guessed.** Queue, schedule, or state
    logic was based on a condition inferred from nearby code rather than
    confirmed with the human. **Stop and fix:** state the exact trigger and
    the other plausible readings, then wait for a choice.

## D. Scope, reporting, and learning broke down

15. **AF-15 — Scope changed without asking.** The work reached a real fork in
    framing, order, or approach and silently chose a larger or different task.
    **Stop and fix:** name the fork, recommend an option, and wait when the
    choice materially changes the outcome.
16. **AF-16 — The report made the reader decode it.** The analysis may be
    sound, but it arrives as jargon, internal shorthand, or unexplained
    section references. **Stop and fix:** state the conclusion and evidence in
    plain language first. Keep technical terms where they add precision, and
    define local shorthand.
17. **AF-17 — Findings existed only in the conversation.** ⚙ Research or
    parallel work was held in an agent's context window. A filtered message,
    failed worker, or closed session could erase it. **Stop and fix:** write
    findings to a project artifact as the work proceeds.
18. **AF-18 — Partial coverage was presented as complete.** A top-N limit,
    sample, retry cap, or omitted source was not disclosed. **Stop and fix:**
    state what was checked, what was dropped, and why.
19. **AF-19 — A correction never left the conversation.** The human corrected
    the same mistake in more than one session because the first lesson was not
    added to project instructions, a skill, or a check. **Stop and fix:** put
    the smallest durable lesson in `AGENTS.md`, `CLAUDE.md`, the relevant
    skill, or a deterministic tool. Then show the change.
20. **AF-20 — Repeated exact work stayed manual.** A stable sequence of
    commands, API calls, renames, checks, or transformations was re-created by
    the agent each time. The repeated hand work added time and another chance
    for a typo or omitted step. **Stop and fix:** build one small command with
    explicit inputs, structured output, meaningful errors, and a test on real
    data. Document it where future sessions will find it.

---

*Part of [Lemon Agent](/). Companion: [The Prose Failure
List](/prose-failure-list/) reviews clarity and taste.*
