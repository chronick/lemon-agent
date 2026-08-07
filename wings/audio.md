---
title: "Lemon Agent for Audio"
wing: audio
status: v0
updated: 2026-08-07
description: "Use an agent to measure, organize, and critique audio bounces while you keep the mix decisions in Ableton Live."
---

You already know how to work in Ableton Live. The useful role for an
agent is not “make this warmer.” It is to inspect an exported file,
compare it with a reference, and give you measurements and listening
questions you can act on in the DAW.

The agent handles repeatable checks. **Your ears and taste make the mix.**

## Audit your next bounce

Export a WAV from Ableton, choose one reference track, and put both in a
small review folder. Keep the previous bounce instead of overwriting it.

```text
bounce-review/
  mix-v03.wav
  reference.wav
  brief.md
```

In `brief.md`, state the destination, what you changed, and what you are
unsure about. Then give the folder to a file-capable agent with this job:

```text
Audit mix-v03.wav against reference.wav. Do not edit or overwrite either
audio file. Use available deterministic tools before making listening
claims. Measure file format, channels, sample rate, duration, integrated
loudness, loudness range, true peak, silence, and broad spectral balance.
If a check cannot be run, mark it "not measured" rather than guessing.

Write bounce-audit.md with: (1) a measurement table for both files,
(2) any failed export gates, (3) no more than three differences worth
listening for, each tied to a measurement, and (4) no more than three
specific experiments to try in Ableton. Separate facts from judgment.
Do not claim a mix problem from a number alone.
```

The artifact is `bounce-audit.md`: a receipt you can compare with the
next export. Return to Ableton, make the changes you agree with, export
`mix-v04.wav`, and A/B the two versions. That is the loop.

## Starter tools

These are building blocks, not a required stack. Install only what your
agent can use in your own environment.

### FFmpeg

[FFmpeg](https://github.com/FFmpeg/FFmpeg) inspects formats, channels,
duration, peaks, silence, and loudness without opening a DAW.

```sh
brew install ffmpeg
```

### librosa and pyloudnorm

[librosa](https://github.com/librosa/librosa) provides time- and
frequency-domain analysis in Python.
[pyloudnorm](https://github.com/csteinmetz1/pyloudnorm) provides
BS.1770 loudness measurement.

```sh
python -m pip install librosa pyloudnorm
```

## The operating pattern

- **Files first.** Takes, renders, notes, and measurements live together
  where an agent can inspect them. The Ableton project remains the source
  for your creative decisions.
- **Checks before ears.** Catch clipping, silence, wrong duration, and
  wrong export format before spending attention on the mix.
- **Claims carry receipts.** “The low end is crowded” needs a measurement
  and a listening test. Descriptions without either are vibes.
- **New exports, never destructive edits.** Keep the path from raw take to
  current bounce visible.

This is the field-guide side of
[lemon.audio](https://lemon.audio), where the same file-backed ideas lead
toward toys, performance tools, and a command-line studio.

## What ships next

The studio version of this pattern runs on **smpl**, a pipe-based audio
toolkit with composable analysis and machine-readable reports. It is not
packaged for outside use yet, so there is no Lemon install command on this
page. The workflow above uses public tools and works now; a domain skill
will make it repeatable later.

## Watch out

- **The unproven meter.** Test a new probe on a known file before trusting
  its first surprising result.
- **The ungated bounce.** “Sounds fine here” is not an export check.
- **Selection by memory.** A/B candidates against the reference before
  committing.
- **Optimizing a metric.** Loudness, clarity, and spectral balance are
  constraints and clues, not goals by themselves.
