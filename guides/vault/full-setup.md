---
title: "Step 0 — The one-paste vault"
step: 0
status: draft
updated: 2026-08-04
description: "Optional full-package setup: a plain-file vault with lifecycle directories, an inbox, a daily log, and a CLAUDE.md that teaches the agent the shape."
---

A vault is a personal knowledge base an agent can actually work:
plain markdown in a git repo, structured so filing, finding, and
triage are things you can delegate. Every habit gets its own step;
this paste bootstraps the whole shape at once, confirming each file
before it's written.

What it sets up — each explained in its own step:

- **Plain files in a repo** ([step 1](/guides/vault/plain-files/))
- **Lifecycle directories** — location is state ([step 2](/guides/vault/location-is-state/))
- **An inbox** for frictionless capture ([step 3](/guides/vault/capture-now/))
- **A daily log** ([step 4](/guides/vault/daily-log/))
- **A CLAUDE.md** that teaches the agent the shape ([step 5](/guides/vault/teach-the-shape/))

## The paste

```text
Set up a personal vault for me. Work one step at a time, show me every
file before writing it, and wait for my ok between steps.

1. Create a directory "vault" (ask me where) and git init it. Layout:
   inbox/       unprocessed captures
   active/      projects with current focus
   later/       simmering, not now
   archived/    done or dormant (read-only by convention)
   log/         daily notes, log/YYYY/MM/YYYY-MM-DD.md
   Add a .gitignore (OS junk, tmp/) and an initial commit.

2. Conventions, kept minimal: all markdown; kebab-case filenames;
   frontmatter only when it earns its place (title, created, tags,
   status). A project is a folder with an index.md once it outgrows a
   single file.

3. Write CLAUDE.md at the vault root teaching an agent the shape:
   what each directory means, the conventions above, and three
   working agreements — file into the structure (never invent new
   top-level dirs without asking), moves are proposals (show the list
   before moving anything), archived/ is read-only.

4. Interview me for three things I'm currently working on, and file
   each as active/<slug>/index.md with a title, a one-line goal, and
   a next action.

5. Start today's log at log/YYYY/MM/YYYY-MM-DD.md with one line:
   vault created.
```

## If you'd rather go manual

Read [step 1](/guides/vault/plain-files/) and [step
3](/guides/vault/capture-now/) — a folder of markdown plus a capture
habit is already a working vault; the rest layers on.
