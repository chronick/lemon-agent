---
name: agent-workflow-failure-list
description: Run the Lemon Agent Agent Workflow Failure List (AF-01…AF-18) against a session, PR, or work report. Use when the user asks to run the workflow failure list, audit agent work for verification failures, check a session or PR before merge, or review an agent's report for fake-green claims.
---

# Agent Workflow Failure List: the verification pass

Read `list.md` in this skill's directory: the canonical AF-01…AF-18
entries. Apply them to the target: a PR diff, a session transcript, or
a work report.

1. Gather the evidence first (the diff, test output, the report's own
   text). Don't flag from memory of the conversation alone.
2. For every match: cite the AF id, quote the evidence, and name the
   stop-and-fix. Mark each finding CONFIRMED (evidence quoted) or
   SUSPECTED (needs a check you couldn't run).
3. Also list the applicable gates that **passed**. A pass that only
   reports failures says nothing about coverage, and AF-18 applies to
   this pass itself.
4. Advisory, not a gate: report findings, never block on them. The
   failure this list names is skipping judgment; a pass that replaces
   judgment repeats it.

Output: a findings table (id · evidence · stop-and-fix · confirmed or
suspected), then the gates checked and passed, then what was out of
scope for this pass.
