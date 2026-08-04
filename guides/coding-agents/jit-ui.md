---
title: "Step 7 — Views on demand, not apps"
step: 7
status: draft
updated: 2026-07-31
description: "JIT HTML UI: keep data structured, have the agent generate a self-contained HTML view when you want to look — and keep the renderer."
---

Most personal dashboards and internal tools don't need to be apps.
They need to be **views**: a page generated the moment you want to
look, from data that lives in plain structured files. The agent is the
interface; the HTML is a byproduct; the renderer script is the asset.

**You've met this before.** Separation of data and presentation, plus
the old `make report` habit and static-site generation: canonical data,
generated output, nothing running in between. The agent just removes
the last excuse — the renderer now writes itself.

> Where this comes from: "can we render this status better as a web
> page? make it reusable" produced a ~small render script that reads
> the project's structured files and writes one static HTML dashboard.
> Every later session regenerates it in seconds — no server, no
> framework, no maintenance between looks. The same pattern runs a
> synth patch library: canonical data files, a CLI, and an HTML guide
> generated on read. Nothing to deploy, nothing to keep alive.

## The pattern

1. **Data lives structured and canonical** — JSON, YAML, markdown
   frontmatter, SQLite. If the data's only home is prose or a chat
   transcript, fix that first; the view is downstream of the data.
2. **The renderer is a small script** — stdlib only, reads the data,
   writes one **self-contained** HTML file: inline CSS, no build step,
   no external requests, works from `file://`. Light and dark.
3. **The script survives the session.** That's the difference between
   "the agent made me a page once" and having a tool
   ([step 6](/guides/coding-agents/build-tools/)). Next look costs one command — or
   nothing, if you tell the agent to rerun it whenever the data
   changes.
4. **Stamp the generated-at time into the page.** A view that could be
   stale and doesn't say so is a trap
   ([AF-03](/agent-workflow-failure-list/)).

## Where it beats an app

Status pages, queues, inventories, catalogs, comparison tables,
reports — anything you *look at* more than you *click on*. The moment
you need writes, auth, or realtime, you've left this pattern; reach for
a real app then, not before. Most things never leave it.

## Or paste this into Claude

```text
I want a generated view, not an app. Take DATA (the file or directory
I name) and write a render script — python or node, stdlib only — that
reads it and writes a single self-contained HTML page to out/: inline
CSS, no build step, no external requests, readable typography, light
and dark via prefers-color-scheme, and the generation timestamp
visible on the page. Then run it and serve or open the result so I can
see it. The script is the deliverable: put it somewhere permanent
(scripts/), give it --help, and I'll rerun it whenever I want a fresh
look.
```

## Watch out

- **The view becoming the source of truth**: the page is disposable
  output. Edits go to the data files; anyone (including the agent)
  editing the HTML is a smell.
- **Quiet staleness** ([AF-03](/agent-workflow-failure-list/)): the
  timestamp isn't decoration; it's the contract.
- **Scope creep toward an app**: one "just add a button" at a time.
  When interaction demands state, stop and decide deliberately.
