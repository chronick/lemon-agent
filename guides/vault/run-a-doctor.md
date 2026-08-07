---
title: "Step 6: Run a doctor"
step: 6
status: published
updated: 2026-08-05
description: "Use a small advisory script to find broken links, naming drift, and stale active work, then verify the checker on known bad input."
---

Links break when files move, filenames drift, and `active/` slowly fills with
abandoned work. A small `doctor` command can find those mechanical problems at
any time. It reports what it sees; it does not block the work. The agent fixes
problems introduced by the current session and brings judgment calls to you.

**You've met this before.** This is linting, pointed at prose and
structure, and it's the vault edition of the coding-agents guide's
[turn checkable rules into checks](/guides/coding-agents/graduate-to-hooks/):
rules a script can check shouldn't stay prose. It's also where
[the verification loop](/guides/coding-agents/verification-loop/)
reaches the vault, founding incident included: the first version of
a doctor script once reported "0 broken links" because *its own path
handling was broken*. Plant a known-bad file and watch the probe fail
before you trust its pass.

## What it checks (start with three)

- **Broken links**: internal references to files that moved or died.
- **Naming drift**: files violating the kebab-case convention.
- **Stale actives**: anything in `active/` untouched for 30+ days,
  as candidates for the `later/` sweep
  ([step 2](/guides/vault/location-is-state/)).

Frontmatter validity, empty stubs, orphaned files with no inbound
links: all natural additions *later*, once the first three have run
for a while. It's a small tool: one job, boring interface, no policy
baked in. The thresholds live in how you call it
([the small-tools rules](/guides/coding-agents/build-tools/), applied).

## Try it

<div data-example="doctor-first-run"><a href="/examples/doctor-first-run/">Interactive example: The doctor's first run →</a></div>

## The cadence

- **After any session that moved things**: scope the check to what
  changed, fix what the session broke. Same-session, while the
  context is warm.
- **Weekly-ish, the full sweep**: the agent runs it, fixes the
  mechanical findings, and brings you only the judgment calls
  (probable-stale actives, ambiguous link targets).

## Try it with your agent

```text
Write scripts/doctor.py for my vault: python, stdlib only. Checks:
(1) broken internal links (markdown links and [[wikilinks]] pointing
at files that don't exist), (2) filenames violating kebab-case,
(3) files in active/ not modified in 30+ days. Output: one finding
per line with the file path and a one-line fix suggestion; exit 0
always. Findings are advisory, not failures. Include --scope <dir>
to limit a run to what a session touched. Before we trust it: plant
a deliberately broken link and a badly named file, run the doctor,
and show me it catches both; then remove the plants, run it clean,
and fix anything real it found. Add to the supported project
instruction file: after any session that moves or renames files, run
the doctor scoped to what changed and fix findings that session
introduced.
```

## Watch out

- **The clean first run**: a doctor that reports zero findings on a
  vault of any age is broken until proven otherwise. Plant the bad
  file first. The founding incident of this step is exactly this.
- **The doctor becoming a nag**: findings you've decided not to fix
  (that one legacy folder with spaces) need an ignore mechanism, or
  the report becomes noise and stops being read.
- **Gate-ification**: the moment the doctor blocks a commit, filing
  starts routing around it. Advisory forever: this is taste
  infrastructure, not CI.
