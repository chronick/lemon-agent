---
title: "Write the brief"
step: 3
minutes: 6
description: "Turn a wish into a bounded assignment with a goal, scope, non-goals, and proof."
---

A useful assignment answers four questions before the first edit.

## The four-part brief

**Goal: what should be different?** Describe the outcome in ordinary
language. Avoid prescribing the implementation unless the implementation is
itself a requirement.

**Scope: where may the agent work?** Name a page, feature, directory, or
small group of files. The agent can ask to expand this later.

**Do not change: what should remain stable?** Protect nearby behavior,
visual design, public interfaces, or data that the task does not own.

**Done when: what would prove completion?** Name an artifact or check you can
inspect: a passing focused test, a successful build, a screenshot, a rendered
file, or a diff with only the intended files.

Compare these:

> “Improve the navigation.”

> “On small screens, keep the three existing navigation links readable without
> changing their labels. Work only in the shared header styles. Done when the
> production build passes and keyboard focus still reaches every link.”

The second brief does not tell the agent how to solve the problem. It tells the
agent what problem it is actually allowed to solve.

Use the builder below to make a brief for your own first task.
