---
title: "Lemon Agent for Audio"
wing: audio
status: v0
updated: 2026-08-07
description: "Lemon-agent principles applied to sound: file-backed sessions, deterministic gates before ears, analysis with receipts, and the start of an audio failure list from measured studio practice."
---

Audio work with agents fails the same ways code work does, at higher
volume: unverified claims ("this bounce is fine"), lost provenance
(which take was that?), and judgment drowned in generation. This wing
applies the site's principles to sound. It is the disciplined twin of
[lemon.audio](https://lemon.audio), where the same substrate gets
weirder: toys, drops, and a command-line DAW. Overlapping, deliberately
distinct; this side keeps the field-guide register.

## The pattern

Four moves, each an old friend from the guides, pointed at sound:

- **File-backed sessions.** Every take, loop, and render is a file with
  its metadata beside it; the session is a directory an agent can read,
  not state trapped in a project file. The
  [plain-files rule](/guides/vault/plain-files/), applied to a studio.
- **Checks before ears.** A render passes deterministic gates
  (clipping, loudness targets, silence, duration) before a human ever
  listens. Ears are the expensive verifier; spend them on judgment,
  not on catching a clipped export. The
  [verification loop](/guides/coding-agents/verification-loop/), with
  loudness meters for tests.
- **Analysis with receipts.** When the agent says "the low end is
  crowded," that claim should carry a measurement (band energy, a
  spectral snapshot) the same way a research claim carries a source.
  Descriptions without measurements are vibes.
- **Views on demand.** Session dashboards (what's recorded, what
  passed the gates, what's unreviewed) as generated HTML, rebuilt on
  read: [views, not apps](/guides/coding-agents/jit-ui/).

## The instruments: not yet installable

The pattern above runs daily in the operator's studio on **smpl**, a
pipe-based audio toolkit (content-addressed reads, composable analysis
and edit stages, machine-readable reports). It is not yet packaged for
anyone else, and this page won't pretend otherwise: there is no install
command to give you today. Two honest options meanwhile: adopt the
pattern with the tools you have (any DAW plus any loudness meter can
run the gates by hand), and watch this page; the toolkit ships here and
at lemon.audio when it's ready for hands other than ours.

## The Audio Failure List (v0 draft)

Numbered like [PF](/prose-failure-list/) and
[AF](/agent-workflow-failure-list/), drafted from measured studio
incidents, flagged v0 until each entry carries its documentation.
Usable the same way meanwhile: paste the eight entries into a session
reviewing your next bounce and ask for matches with evidence.

1. **AuF-01: The unproven meter.** A new analysis probe's first
   verdict is trusted without a positive control. The measured
   incident: a probe flagged a defect that did not exist; the fix was
   feeding it a known-good file first. Tell: a verdict from an
   instrument that has never confirmed a known truth.
2. **AuF-02: The ungated bounce.** Renders exported and shared with no
   clip/loudness/silence check. Tell: "sounds fine on my headphones"
   as the only verification record.
3. **AuF-03: Loop fatigue.** A bank of good loops mistaken for a
   track; nothing changes often enough to hold attention. Tell: no
   event-frequency plan across the arrangement.
4. **AuF-04: Overtone soup.** Effects stacked on layered harmony until
   the parts smear; dense walls need clean layers. Tell: every layer
   carries its own character effect.
5. **AuF-05: Selection by memory.** Picking a sound from recall
   instead of auditioning candidates against the reference. Tell: no
   A/B happened before the commit.
6. **AuF-06: The unlabeled take.** Files named final2-new-3.wav; the
   session's history unreadable to the next session (or the next
   agent). Tell: filenames that need the person who wrote them.
7. **AuF-07: Destructive edits without provenance.** The processed
   file replaces the raw one; no path back. Tell: one file where
   there should be a chain.
8. **AuF-08: Intelligibility as a target.** Polishing a vocal's
   clarity score instead of holding it inside the range the track
   wants; a window, not a maximum. Tell: optimizing a metric with no
   stated range.

## Watch out

- **Generation drowning judgment.** Cheap sample generation makes the
  library grow faster than taste can audit it; gates and selection
  discipline are what keep the collection honest
  ([AF-08](/agent-workflow-failure-list/)'s missing size limit, in
  sample form).
- **The agent mixing by description.** "Make it warmer" round-trips
  through language and loses the measurement; prefer receipts
  (numbers, snapshots) on both sides of every change.
