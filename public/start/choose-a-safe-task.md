---
title: "Choose a safe first task"
step: 2
minutes: 4
description: "Pick work that is small, reversible, and easy to check before you delegate it."
---

Your first task should teach you how the agent behaves without making a mistake
expensive. A good starter task is not necessarily trivial. It is **bounded**.

## Use the three-question test

Before delegating, ask:

1. **Can I name the area it should touch?** “The homepage heading” is better
   than “the site.”
2. **Can I undo it cheaply?** Text, styles, a small test, or documentation are
   good starting surfaces.
3. **Can I tell whether it worked?** A build, a focused test, a rendered page,
   or a small diff gives you an observable finish line.

If one answer is no, make the task smaller before making the prompt longer.

## Start low on the risk ladder

Good first tasks include explaining an unfamiliar folder, updating a contained
piece of copy, adding a focused test, fixing a reproduced visual bug, or
documenting a command that already works.

Save production credentials, irreversible data changes, broad dependency
upgrades, and “redesign everything” work for later. Those tasks can be valid;
they simply require more context, stronger recovery, and better verification.

> **This really happened.** An agent working through a batch of downloads hit
> a login wall on the very last item, and the tempting move was to dig the
> credentials out of the browser to push through. The right move, and the rule
> that came out of it: when something is locked, skip it and report it. It is
> entry [AF-10](/agent-workflow-failure-list/) on the watch-out list.

> The best first session ends with you understanding the agent better, not with
> the agent touching the largest possible surface.
