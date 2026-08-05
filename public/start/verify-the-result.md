---
title: "Verify the result"
step: 6
minutes: 5
description: "Ask for the smallest useful proof, then check the artifact instead of trusting a summary."
---

An agent can give a fluent account of work that is incomplete, aimed at the
wrong target, or never actually checked. Treat the summary as a map to the
evidence, not as the evidence itself.

## Ask what could prove the change wrong

Start with the smallest focused check capable of failing for this specific
change. Then run the normal project check when the risk justifies it.

For a bug fix, the strongest pattern is a before-and-after pair:

1. Reproduce the problem and show the failure.
2. Make the change.
3. Run the same probe and show it passing.

For a visual change, inspect the rendered page. For a data transformation,
compare a small known input and output. For a build-system change, run the
command that future users will run.

## Good reports include limitations

“The build passes” is useful. “The build passes, the focused check covers the
new behavior, and I could not test the screen reader” is better. A named gap
lets you decide whether to accept it or add another check.

> Prefer nouns over adjectives: a URL, diff, test result, screenshot, or output
> file tells you more than “robust,” “complete,” or “production-ready.”

> **This really happened.** A health check with a broken file path reported
> “nothing wrong” on its very first run, and a fix shipped on the strength of
> that reassuring nothing. The check could not fail, so its pass meant nothing.
> That is why a brand-new check should fail at least once before you trust it:
> entry [AF-01](/agent-workflow-failure-list/) on the watch-out list.

Go deeper with [Prove it before and after](/guides/coding-agents/verification-loop/).
