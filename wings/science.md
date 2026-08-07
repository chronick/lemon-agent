---
title: "Lemon Agent for Science"
wing: science
status: scoping
updated: 2026-08-07
description: "A demonstration, not coverage: one pinned public dataset taken through a reproducible agent-driven analysis. This page is the scoping note, published before the work."
---

This wing will demonstrate reproducible agent-driven analysis without
pretending to cover every scientific domain. Its products will be
static guides and installable skills that orchestrate deterministic
tools in your own environment; nothing here hosts datasets, models, or
session state. Science calls publishing the plan first
pre-registration; this site's version is the measured before state
([AF-02](/agent-workflow-failure-list/)). Either name, same move, and
this page is that note: everything below is scope, not product.

## The scoping note

- **The user.** Someone comfortable running notebooks or scripts who
  wants an analysis their agent can re-run, extend, and defend:
  a grad student, a data-inclined hobbyist, a researcher tired of
  figures nobody can regenerate.
- **The candidate question.** Can known transiting exoplanets be
  recovered from public space-telescope light curves, with depth and
  period reported reproducibly? A TESS light-curve workflow is the
  candidate, not a foregone conclusion; the spike confirms or replaces
  it.
- **The pinned dataset.** One public astronomical dataset, pinned by
  identifier and version (for the TESS candidate: named sectors of the
  mission's published light curves, referenced by their archive DOI and
  release, recorded in the repo). Pinning is the point: an analysis
  against "the latest data" is not reproducible.
- **The stages.** A small composable vocabulary, each stage with a
  declared contract (inputs + parameters in, artifacts + receipt out):
  fetch, clean, detrend, search, fit, report. The shape mirrors the
  audio wing's pipe pattern, pointed at survey data.
- **The reproducibility bundle.** Every run emits: the source receipt
  (identifier, version, hash), the exact parameters, the generated
  artifacts, and the report that cites them. A stranger with the repo
  can rebuild every figure or say precisely where it broke.
- **The judgment artifact.** A science failure list seeded from the
  failures that actually corrupt analysis: unit mistakes, leakage,
  unsupported interpretation, missing provenance, irreproducible
  transforms. Like the [work wing](/work/), entries harden from
  observed incidents, not invention.
- **The worked example.** One complete run, start to finish, executed
  in the user's own environment, shipped alongside the first skill.
- **The tool repo.** To be named in the spike; the candidate is a
  small public repo holding the stage implementations the skill
  orchestrates.

## Not covered, on purpose

No per-science survey. No general model-training platform. No hosted
compute, datasets, or knowledge-graph product. One question, one
dataset, one reproducible path, done honestly.

## What would make this real

The wing graduates from scoping when the demonstration exists: dataset
pinned, pipeline public, at least one figure and one fit reproducible
by a stranger from the repo alone. Until then this page stays what it
is: a plan you can hold us to.
