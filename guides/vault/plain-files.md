---
title: "Step 1 — Plain files in a repo"
step: 1
status: draft
updated: 2026-08-04
description: "Markdown in a git repo beats a notes app: agent-native, greppable, versioned, portable — and structure in filenames does the work of a database."
---

The load-bearing decision is the substrate: **plain markdown files in
a git repo.** Not because apps are bad, but because every capability
you'll want later — agent access, search, history, sync, tooling —
falls out of files for free, and falls awkwardly out of apps forever.

**You've met this before.** Plain-text productivity is a decades-old
lineage (todo.txt, org-mode, Zettelkasten), and "files over apps" is
its modern slogan. The agent renews the argument decisively: an agent
reads, greps, moves, and refactors files natively — while a notes
app's database needs an export, an API, or a prayer.

## Why files win

- **Agent-native.** Read, write, grep, move — the agent's entire tool
  vocabulary works on day one. No integration exists to break.
- **Git underneath.** Every note versioned, every reorganization
  reversible, sync by push. The vault inherits the whole
  [git guide](/guides/git/) for free.
- **Greppable beats organized.** Perfect hierarchy is a trap;
  full-text search over plain files, by you or the agent, does most
  retrieval work.
- **Portable forever.** Markdown from 2010 opens today. Whatever
  editor, whatever agent, whatever comes next.

## The conventions (minimal on purpose)

- **kebab-case filenames**, lowercase, no spaces — predictable names
  are what let an agent link and move files without asking.
- **Frontmatter only when it earns its place**: title, created, tags,
  status. An empty template on every note is friction that kills
  capture.
- **A file can graduate to a folder** (`some-idea.md` →
  `some-idea/index.md`) when it accumulates assets. Structure grows
  from content, not ahead of it.

## Try it

<div data-example="app-or-files"><a href="/examples/app-or-files/">Interactive example: App or files →</a></div>

## Do it by hand

Make the folder, `git init`, write one note about something you're
actually working on. Resist the urge to design the taxonomy first —
[step 2](/guides/vault/location-is-state/) gives you the only four
directories you need to start.

## Or paste this into Claude

```text
I'm starting a plain-file vault. Create the folder (ask me where),
git init it, and write a first note: interview me briefly about one
current project and file it as a markdown note with kebab-case
naming and minimal frontmatter (title, created). Then commit. Don't
create any directory structure yet beyond the root — structure comes
next step.
```

## Watch out

- **Taxonomy-first paralysis**: designing folders for notes that
  don't exist yet. Two notes that want a home create the home.
- **App-shaped exports**: importing 2,000 notes from an old app on
  day one buries the new vault in someone else's structure. Start
  empty; import selectively when a note is actually needed.
