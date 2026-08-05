---
title: "Step 7: Build lots of small tools"
step: 7
status: draft
updated: 2026-08-05
description: "Turn repeated mechanical work into small deterministic tools, so the agent can spend its effort on decisions, orchestration, and glue."
---

Agents are strongest at deciding what to do next, joining unlike systems, and
adapting a plan when the evidence changes. They are less reliable when they
must retype the same exact sequence every week.

Move that repeated work into a program. A good small tool turns a fuzzy series
of actions into one named operation with known inputs, outputs, and errors.
The agent still decides **when** to use it and **how** it fits the larger job;
the tool performs the mechanical part the same way each time.

That division improves reliability, accuracy, and cost at once.

## Repetition is the design signal

The second or third manual run is usually enough evidence to build the tool:

| Repeated work | Small tool worth keeping |
|---|---|
| Retype `ffmpeg` flags, rename files, then sort them | `sample-intake` validates flags and processes one folder |
| Search a vault for broken links and invalid locations | `vault-doctor --json` reports exact files and reasons |
| Gather Git activity for a weekly update | `activity-export --since DATE` emits structured data |
| Rebuild the same API request in every script | `customer-lookup ID --json` owns auth, pagination, and errors |

The tool does not need to decide what the weekly update should say or which
broken link matters most. Those are agent-and-human decisions. It should make
the facts dependable and easy to compose.

## Why many small tools beat one large app

Small tools can be joined in ways you did not plan. A task lister, a filter,
and an HTML renderer can become a dashboard without sharing a framework. The
same filter may later feed a report or a cleanup job.

They are also cheap to replace. Rewriting a focused 100-line command is often
safer than refactoring one corner of a large application. There is less state,
fewer interactions, and a smaller regression surface. You spend your energy
on the current problem instead of preserving an architecture built for an old
one.

This is the Unix idea in an agentic workflow: each program does one job and
communicates through ordinary interfaces such as files, standard input,
standard output, JSON, and exit codes. Agents already know how to inspect and
compose those interfaces.

## What makes a useful agent-facing tool

- **One clear job.** If two parts would be useful on their own, make two tools.
- **A predictable interface.** Provide accurate `--help`, named flags,
  meaningful exit codes, and structured output such as JSON when another
  program will consume it.
- **Policy stays with the caller.** The tool accepts a loudness target or date
  range; the project instructions or skill says which value to use today.
- **Safe defaults.** Add dry runs, timeouts, size limits, and confirmation for
  expensive or destructive behavior.
- **Few dependencies.** A small tool should be easy for a fresh machine and a
  fresh agent session to run.

Use the simplest language that fits the job. Python is excellent for files and
data, shell for short glue, Node for web-shaped work, and Go or Rust for a
portable binary or performance-sensitive path. The interface matters more
than a uniform stack.

## Build leverage one step at a time

1. Notice a repeated mechanical sequence.
2. Give it a name and a narrow input/output contract.
3. Have the agent build the smallest useful command.
4. Run it immediately on a small real case, including one failure case.
5. Add its command and purpose to `AGENTS.md`, `CLAUDE.md`, or a relevant
   skill so the next session knows it exists.
6. Compose it with the next small tool instead of growing it into a platform.

Each pass leaves the environment more capable than you found it. The agent has
one more dependable verb, and future work needs fewer tokens and fewer chances
to drift.

## Try it

<div data-example="third-time-tool"><a href="/examples/third-time-tool/">Interactive example: The third time →</a></div>

## Try it with your agent

```text
Review this session for work worth turning into a tool. List the mechanical
sequences we repeated or will clearly need again. For each, propose one small
command with a name, inputs, outputs, and failure behavior. Pick the most
valuable one and build only that tool. Give it accurate --help, meaningful
exit codes, a dry run if it changes data, and JSON output if another program
will consume it. Run one success case and one failure case. Then add one short
line to the project's supported instruction file or relevant skill so future
sessions know when and how to use it. Show me the diff before saving.
```

## Watch out

- **The app in disguise:** interacting modes, persistent state, and a large
  config surface mean the tool has become an application. Split it or make the
  maintenance decision explicitly.
- **Hidden paid work:** a command that silently calls a metered API can turn a
  cheap habit into a recurring bill. Gate and report those calls
  ([AF-06](/agent-workflow-failure-list/)).
- **Untested convenience:** a tool that has never failed in a controlled case
  is still a hypothesis. Prove its check can catch the mistake it claims to
  prevent.
- **Tool amnesia:** a useful command nobody documents will be rebuilt or
  bypassed by the next session ([AF-19](/agent-workflow-failure-list/)).
