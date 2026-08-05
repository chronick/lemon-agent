---
title: "Step 1: Plain files in a repo"
step: 1
status: draft
updated: 2026-08-05
description: "Markdown files in a Git repository give people and agents the same searchable, versioned, portable source of truth."
---

Start with **plain Markdown files in a Git repository.** This gives you and the
agent the same material to read, search, move, edit, and version. A notes app
can still be a useful editor, but the files remain the source of truth instead
of depending on an export or a private database.

**You've met this before.** Plain-text productivity is a decades-old
lineage (todo.txt, org-mode, Zettelkasten). Coding agents strengthen the case:
they already know how to work with files and Git. A private app database needs
an export or integration before the agent can do the same work.

## Why files win

- **Agent-native.** Read, write, grep, move: the agent's entire tool
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

- **kebab-case filenames**, lowercase, no spaces. Predictable names
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
actually working on. Resist the urge to design the taxonomy first.
[Step 2](/guides/vault/location-is-state/) gives you the only four
directories you need to start.

## Try it with your agent

```text
I'm starting a plain-file vault. Create the folder (ask me where),
git init it, and write a first note: interview me briefly about one
current project and file it as a markdown note with kebab-case
naming and minimal frontmatter (title, created). Then commit. Don't
create any directory structure yet beyond the root. Structure comes
next step.
```

## Watch out

- **Taxonomy-first paralysis**: designing folders for notes that
  don't exist yet. Two notes that want a home create the home.
- **App-shaped exports**: importing 2,000 notes from an old app on
  day one buries the new vault in someone else's structure. Start
  empty; import selectively when a note is actually needed.
