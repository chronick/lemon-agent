---
title: "From answers to actions"
step: 1
minutes: 3
description: "See what a coding agent can do inside a project, and what still belongs to you."
---

You already know the basic interaction: describe what you want, read the AI's
answer, and decide what to do with it. A coding agent adds a workspace and
tools to that conversation.

It can inspect the files in a project, make edits, run commands, and show you
the result. That saves you from carrying every fragment between the chat and
your editor. It also makes a vague request more consequential.

| In a chat | With a coding agent |
|---|---|
| You paste in the context | The agent inspects the project |
| The AI suggests an answer | The agent can edit the real files |
| You run the commands | The agent can run checks for you |
| You carry the answer out | The result already exists in the workspace |

## Your job does not disappear

The agent can do the mechanical work. You still decide:

1. What outcome matters.
2. What it may change.
3. Which decisions require your judgment.
4. What evidence would make the result trustworthy.

That division is the foundation of this course. You are not learning a magic
prompt. You are learning a small working loop: **scope, plan, act, verify,
review**.

## How the agent acts

Most coding agents work through the same interfaces programmers and scripts
already use:

- A **CLI** is a program the agent runs as a terminal command. It is often the
  clearest route for files, Git, builds, tests, and local tools.
- An **API** lets code send structured requests to a service. The agent can use
  it directly or through a small command that handles details such as
  authentication and pagination.
- **MCP** gives an agent host a standard way to discover tools and live
  context. It is useful for shared service connections, but it is not a
  replacement for every CLI or API.

You do not need to operate all of these yourself. The important habit is to
prefer a clear, inspectable tool surface over repeated clicking or improvised
steps. The field manual has a fuller decision guide in [Choose the right tool
surface](/guides/coding-agents/tool-surfaces/).

> The safest first move is often read-only: ask the agent to explain the
> project before asking it to change the project.
