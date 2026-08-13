---
title: "Step 6: Choose the right tool surface"
step: 6
status: published
updated: 2026-08-05
description: "Use a CLI for local work, an API for direct service access, and MCP when a standard agent connection adds real value."
---

Coding agents work best when the systems around them offer clear operations.
That operation may come from a command-line program, a web API, or an MCP
server. The names sound more complicated than the underlying choice.

## Three ways an agent can use a tool

| Surface | What it is | Reach for it when |
|---|---|---|
| **CLI** | A program invoked with a command in the terminal | The work is local, file-based, scriptable, or already supported by a good command-line tool |
| **API** | A documented request-and-response interface to a service | You need direct access to a remote system and can manage authentication, limits, cost, and errors |
| **MCP** | A standard way for an agent host to discover and call tools or read live context | Several agent workflows need a ready-made connection, especially for authenticated or live systems |

These are not maturity levels. MCP is not automatically better than a CLI,
and a CLI is not a crude version of an API. They are interfaces for different
jobs, and the decision is an old one: ship a library, expose a service, or
adopt the shared protocol. The new part is that the caller is an agent.

## Start with the interface that already works

A CLI is often the best default for repository work. The agent can read
`--help`, pass explicit flags, pipe output to another command, inspect an exit
code, and show you exactly what it ran:

```sh
vault-doctor --root ./notes --json
```

An API is useful when the source of truth lives in a service. Put the request
behind a small script or CLI when you will repeat it. That wrapper can handle
authentication, pagination, retries, and response validation once instead of
asking the agent to improvise them in every session:

```sh
customer-lookup cus_123 --json
```

MCP is useful when the agent host should discover a shared set of operations
and context directly, such as searching a knowledge base or creating an issue
in a signed-in service. It can remove one-off connection code. It does not
remove the need to understand permissions, side effects, or the quality of the
underlying API.

## A practical decision order

1. **Is there already a reliable CLI?** Let the agent use it.
2. **Does the service expose an API?** Call it directly or wrap the repeated
   calls in a small CLI.
3. **Would MCP improve discovery, shared authentication, or reuse across agent
   workflows?** Add it for that reason, not for the label.
4. **Is the only route a visual interface?** Browser control can be valid, but
   expect it to be slower and more sensitive to layout changes.

Before asking an agent to click through a screen, ask whether the product
already has a CLI or API. Agents use those interfaces natively, and the record
of inputs and outputs makes the work easier to inspect.

## Keep judgment outside the mechanism

The interface should do the exact operation well. The agent should decide how
that operation serves the larger goal.

For example, a `release-notes --since v2.1 --json` command can return every
relevant change deterministically. The agent can then group the changes,
decide what readers need, and draft the prose. Code supplies dependable facts;
the agent supplies selection, orchestration, and explanation.

## Try it

<div data-example="cli-api-or-mcp"><a href="/examples/cli-api-or-mcp/">Interactive example: CLI, API, or MCP? →</a></div>

## Try it with your agent

```text
For this task, inspect the available tool surfaces before choosing an
approach. Look for an existing CLI first, then a documented API, then an MCP
connection that offers a clear advantage. Explain the choice in plain
language, including authentication, cost, side effects, and how we will verify
the result. If we will repeat several API calls, propose a small CLI wrapper
with structured output instead of rebuilding the requests in each session.
```

## Watch out

- **MCP by reflex:** adding a server creates configuration and permission
  surface. Use it when the shared agent connection is the benefit.
- **Raw API improvisation:** repeated hand-built requests invite inconsistent
  pagination, error handling, and field names. Wrap the stable operation.
- **UI-first automation:** clicking is sometimes necessary, but it should not
  be the default when a documented, inspectable interface already exists.
- **Hidden authority:** any surface that can publish, send, charge, or delete
  needs an explicit human gate ([AF-09](/agent-workflow-failure-list/#af-09)).
