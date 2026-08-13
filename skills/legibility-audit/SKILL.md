---
name: legibility-audit
description: Run a buyer-intent legibility audit — what do AI assistants tell prospective users about the user's public projects? Use when the user asks what AI says about them or their project, wants an agent-readiness or AI-visibility audit of a site or repo, or wants to re-run an existing prompt battery and diff against a baseline.
---

# Legibility audit: what does AI say about you?

Measure what a fresh, isolated, web-enabled assistant says about the
user's public properties when asked the questions a prospective user
would ask; grade it against ground truth; produce a findings table and a
fix list. The method and a worked example live at
<https://lemon-agent.dev/guides/legibility/run-the-audit/>.

Two files ride along in this skill's directory:

- `battery-template.md` — the generic prompt battery: six buyer-intent
  shapes with placeholders, stable-ID rules, and the ISO-00 isolation
  probe.
- `run-battery.sh` — a hardened runner for the Claude Code CLI surface
  with the three harness-trap fixes baked in.

## The pass

1. **Collect ground truth first.** Interview the user for each property:
   canonical URL(s), what it actually is, who it's for, what it costs,
   license, current version, releases, CI, test state, and anything they
   believe is publicly visible. Record it before any battery answer is
   read, so the answers can't anchor the grading.
2. **Generate the battery from the template.** Copy
   `battery-template.md`, pick a 2–4 letter prefix per property, and
   instantiate the six shapes (what is it · who is it for · what does it
   cost · compare · recommend · risks) with the property's name and URL.
   IDs are stable forever: never renumber, append new prompts at the end
   of a section, mark retired ones `(retired vN)` instead of deleting.
   Keep each prompt a single paragraph inside its fenced block. Always
   keep ISO-00 as the first prompt. Cap a run at ~25 prompts.
3. **Run it isolated, web-enabled, stdin-safe.** On the Claude Code CLI,
   use `run-battery.sh <battery.md> [output-dir]` — it runs one process
   per prompt from a neutral directory with the three required flags:
   `--setting-sources ""` (no user config in a "fresh" session),
   `--allowedTools "WebFetch,WebSearch"` (non-interactive mode otherwise
   denies web tools silently and an honest assistant just refuses; the
   flag is variadic, so the prompt must come before it), and
   `</dev/null` (else the CLI appends the loop's remaining stdin — the
   rest of the battery — to every prompt). On any other host, reproduce
   those three properties with its equivalents: fresh session, no user
   config or memory, web fetch allowed, no stray stdin.
4. **Check isolation before scoring.** Read the ISO-00 answer first. If
   it reports loaded instructions or memory, the run is invalid — fix
   the harness and re-run; never score a contaminated run. Even when
   instructions are clean, the account identity can still leak and the
   assistant may address the user as the property's owner — the probe
   and a skim of the answers catch it; note it in the report, it changes
   register, not facts.
5. **Grade every answer against the ground truth.** One row per prompt:
   accurate / partly / wrong / never-engaged (generic answer, property
   untouched), plus whether the assistant showed any real knowledge of
   the property and which surface it fetched. Compress each answer to a
   clause for the table; keep the verbatim outputs on disk.
6. **Report.** Emit (a) the findings table (id · what the assistant
   said, compressed · accurate? · visible?), (b) a per-property tally,
   (c) a fix list ordered by accuracy-gained-per-minute — README lines,
   repo description/homepage/topics, version badges, cross-links,
   sitemap/indexing — each fix naming the finding it reverses, and
   (d) the exact re-run command, so the user can ship fixes and diff the
   next run against this one by stable ID.

Advisory, not a gate: report what the assistants say and what would
change it; the user decides what to fix. Never invent an answer the run
didn't produce, and never grade from memory of the property — only
against the ground truth the user supplied.
