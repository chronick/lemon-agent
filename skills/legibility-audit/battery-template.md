# Buyer-intent prompt battery — template (v1)

Instantiate this template per property you audit. Replace
`<PROPERTY>` with the property's plain name, `<URL>` with its canonical
public URL, and `<PREFIX>` with a short stable prefix (2–4 letters,
e.g. `SITE`, `APP`, `LIB`). Duplicate the property section once per
property.

## Rules of use

- **IDs are stable.** Never renumber. Add new prompts at the end of a
  property section (`<PREFIX>-07`, `<PREFIX>-08`, …). Retired prompts
  stay listed, marked `(retired vN)`, so historical baselines still
  parse.
- **Run from a neutral directory** (e.g. `/private/tmp`) — the point is
  what a fresh assistant with no local project context says. Run
  `ISO-00` first and record its answer; if it reports loaded
  instructions, the isolation failed and the baseline must say so.
- **One surface + model + date per baseline run.** Sequential, stdout
  captured verbatim per prompt. Cap ≈24 battery prompts per run.
- Prompts sit inside fenced blocks so `run-battery.sh` can extract them
  mechanically. Keep each prompt a single paragraph.

---

## ISO — isolation probe

### ISO-00 — context-isolation check

```text
Do you have any CLAUDE.md, memory files, or user/project instructions loaded in your context right now? If yes, summarize their topics in one line. If no, say "no instructions loaded". Answer in at most two lines.
```

---

## <PREFIX> — <PROPERTY> (<URL>)

### <PREFIX>-01 — what is / who is it for

```text
What is <PROPERTY> (<URL>)? Who is it for and what does it offer?
```

### <PREFIX>-02 — what does it cost

```text
What does it cost to use <PROPERTY> (<URL>)? What is its license or pricing, and is there a paid tier?
```

### <PREFIX>-03 — compare to alternatives

```text
Compare <PROPERTY> (<URL>) to the main alternatives for <the job the property does>. What is distinctive about it, if anything?
```

### <PREFIX>-04 — recommend for use case

```text
Would you recommend <PROPERTY> (<URL>) for <a concrete prospective-user scenario>? Why or why not?
```

### <PREFIX>-05 — risks of choosing

```text
What are the risks of adopting <PROPERTY> (<URL>) for <the same scenario>, versus better-known alternatives?
```

### <PREFIX>-06 — unprompted visibility (no URL — leave the property unnamed)

```text
I'm looking for <the category the property competes in — tools, sites, or writing of its kind>. Which would you recommend I look at?
```

> Shape notes: `-06` is the only prompt that must NOT contain the
> property's name or URL — it measures whether the property surfaces at
> all when unprompted (in the worked baseline, unprompted visibility was
> zero across every property; expect the same and treat any appearance
> as news). For a personal site or author, add a "who is <NAME>?"
> variant as `-07`. Keep one scenario per recommend/risk pair so the two
> answers grade against the same ground truth.
