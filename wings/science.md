---
title: "Lemon Agent for Science"
wing: science
citrus: bergamot
status: scoping
updated: 2026-08-07
description: "A demonstration, not coverage: one public dataset taken end to end (charts, basic ML, research notes with provenance) using the site's principles. This page is the plan, stated before the work."
---

This wing is at the stage before instruments: the plan, published
first, so the work can be checked against it later. Science calls that
ordering pre-registration; this site's version is the measured before
state ([AF-02](/agent-workflow-failure-list/)). Either name, same
move, and this page says plainly what does not exist yet: everything
below.

## The scope, honestly bounded

Not "tools for scientists." One **demonstration**: a single public
dataset taken end to end with an agent, showing the loop's moves in
analysis work:

- **Charts with provenance.** Every figure regenerable from a script
  in the repo; no orphan images. A chart you can't rebuild is a claim
  you can't check.
- **Basic ML, honestly framed.** Train a small model on the dataset,
  report what it does and does not show, with the baseline stated
  before the model (the null result kept publishable).
- **Research notes that carry their sources.** Claims linked to
  papers and data the way the office wing's
  [verify-info pass](/office/) demands: not-verified recorded as a
  value, disagreements recorded instead of averaged.

The likely dataset is from astronomy: public, large, well-documented,
and nobody's trade secret. The working sketch is pipe-shaped analysis
tools in the mold of the audio wing's toolkit (content-addressed
reads, composable stages, machine-readable reports), pointed at survey
data instead of samples.

## You've met this before

The lab notebook. Everything here is the notebook discipline made
mechanical: what was done, in what order, from what inputs, so someone
else (including a future agent) can re-run it and disagree with
specifics rather than with vibes.

## What would make this real

The wing graduates from scoping when the demonstration exists: the
dataset chosen, the pipeline public, at least one figure and one model
reproducible by a stranger from the repo alone. Until then this page
stays what it is: a plan you can hold us to.
