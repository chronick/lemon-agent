---
title: "Step 4: The daily log"
step: 4
status: draft
updated: 2026-08-05
description: "Append-only day notes at log/YYYY/MM/. The agent writes session summaries, and months later the log answers 'what did I decide and why.'"
---

The log records events: one append-only file per day at
`log/YYYY/MM/YYYY-MM-DD.md`. It says what happened, what was decided, and what
remains open. Months later, “why did I set it up this way?” has a searchable
answer with a date.

**You've met this before.** The lab notebook and the engineering
daybook: the oldest knowledge tool in science. The agent removes the
reason they never stuck: you don't have to write it. The agent
appends a session summary as a byproduct of the work; you write only
when you have something to say.

## The habits

- **Append-only, dated headings.** New entries go at the bottom under
  a time or topic heading. Yesterday's entry never gets rewritten:
  the log is a record, not a document you polish.
- **The agent logs its sessions.** End of any real working session:
  what happened, decisions made, open threads (three to six plain
  sentences, appended to today). This costs you nothing and builds the
  archive that makes future context cheap.
- **Decisions get a line.** Not everything deserves logging, but
  choices do, especially the ones that felt obvious at the time.
  "Chose X over Y because Z" is one sentence now and an hour of
  digging saved later.
- **The log feeds the next session.** An agent starting fresh reads
  the last few days of log and arrives oriented. This is the vault's
  answer to sessions not sharing memory, the same move as
  [writing git history for the next reader](/guides/git/history-for-the-next-reader/).

## Try it

<div data-example="log-it"><a href="/examples/log-it/">Interactive example: "Log it" →</a></div>

## Do it by hand

Create today's file, write two sentences about what today was
actually about. Then end your next agent session with: *"append a
session summary to today's log: what happened, decisions, open
threads."* From then on it's automatic.

## Try it with your agent

```text
Standing log behavior for my vault. At the end of any working
session (or when I say "log it"): append to log/YYYY/MM/YYYY-MM-DD.md
(creating the file with a date heading if it doesn't exist) a short
section: what happened, decisions made (with the why in one line
each), and open threads. Plain sentences, no jargon, three to six of
them. Never rewrite or delete existing entries; the log is
append-only. When starting a session in this vault, read the last
three days of log first and say in one line where things stand. Add
this to the project's supported instruction file (`AGENTS.md`, `CLAUDE.md`,
or its documented equivalent). Show me the diff first.
```

## Watch out

- **The performative log**: entries written to look productive read
  terribly in six months. What happened, what was decided, what's
  open. Nothing else.
- **Summaries in the working register**: an agent will happily log in
  its own shorthand: session jargon, internal names, dense fragments.
  Plain sentences is a rule precisely because the reader is
  future-you, cold.
- **Logging instead of filing**: the log records that a decision
  happened; the *content* lives with its project. If a log entry is
  growing sections, it's a note trying to escape. File it.
