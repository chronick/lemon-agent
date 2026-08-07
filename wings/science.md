---
title: "Lemon Agent for Science"
wing: science
status: scoping
updated: 2026-08-07
description: "A local Markdown, SQLite, and Python path from a pinned dataset to reproducible figures, papers, posters, and presentations."
---

Suppose you have a dataset and a question. You want an agent to help
clean the data, run analysis, and prepare a paper or poster. You also
need to know where every number and figure came from.

The useful foundation is not a chat transcript. It is a small project of
plain files that both you and the agent can inspect, rerun, and defend.
Nothing here hosts your data or keeps session state.

## Start with a reproducible project

Use this shape as a starting point, trimming it to fit the work:

```text
project/
  README.md
  data/
    source-receipt.yml
    analysis.db
  analysis.py
  figures/
  paper.qmd
  references.bib
```

- `source-receipt.yml` records the dataset identifier, version, source
  URL or DOI, retrieval date, license, and checksum.
- `analysis.db` is a SQLite database holding imported and derived
  tables without changing the original source data.
- `analysis.py` contains the transformations and figure generation.
- `paper.qmd` can render the same analysis into an article, poster, or
  presentation.

Ask the agent to create or modify files in this project, not to keep the
method in conversation history.

```text
Help me take this dataset toward a reproducible publication. Work only
inside this project. First inspect the files and write a short plan.
Preserve the original data; create source-receipt.yml with provenance and
a checksum before analysis. Load tabular data into the SQLite database
analysis.db, keep transformations in analysis.py, and save every figure
under figures/.

For each reported result, name the code, table, and source data that
produced it. Mark assumptions, units, missing values, exclusions, and
unverified interpretations explicitly. Do not write conclusions stronger
than the evidence. Before finishing, rerun the project from a clean start
and report what did and did not reproduce.
```

You decide the scientific question, validate the assumptions, interpret
the results, and own the conclusions. The agent maintains the pipeline
and its receipts.

## A path from data to publication

1. **Pin the source.** Record a stable identifier, version, retrieval
   date, license, and checksum before cleaning anything.
2. **Load without erasing.** Keep raw data unchanged; put queryable tables
   and derived results in a local SQLite database.
3. **Make transformations executable.** Units, filters, exclusions, model
   settings, and random seeds belong in code or configuration.
4. **Generate figures from the analysis.** Do not hand-edit a plot after
   export. Change the code and render it again.
5. **Write around live artifacts.** Quarto can produce papers, posters,
   and slides from the same Markdown, citations, code, and figures.
6. **Reproduce before publishing.** A clean run should rebuild every
   result, or identify the exact missing dependency or input.

## Starter tools

### uv

[uv](https://github.com/astral-sh/uv) creates a pinned Python environment
and records dependencies for the project.

```sh
brew install uv
uv init
```

### SQLite and Jupytext

SQLite needs no install: Python's standard library reads and writes it
(`sqlite3`), and
[sqlite-utils](https://github.com/simonw/sqlite-utils) adds a friendly
command line for loading, querying, and exporting (the same tool the
[work wing](/work/) uses for claim ledgers).
[Jupytext](https://github.com/jupytext/jupytext) pairs notebooks with
plain-text Python or Markdown when exploratory work needs a notebook
view.

```sh
brew install sqlite-utils
uv add jupytext
```

### Quarto

[Quarto](https://github.com/quarto-dev/quarto-cli) renders Markdown,
citations, code, and figures into HTML, PDF, presentations, and poster
formats.

```sh
brew install --cask quarto
```

This is a starter stack, not a prescription. Use domain tools where they
are stronger; keep the same contracts around inputs, parameters, outputs,
and provenance.

## The worked example being built

The first full demonstration will use one pinned public astronomy dataset
and one question: can known transiting exoplanets be recovered from
published TESS light curves, with depth and period reported reproducibly?
The stages are fetch, clean, detrend, search, fit, and report. Each stage
must declare its inputs, parameters, artifacts, and receipt.

The demonstration graduates when a stranger can rebuild at least one
figure and one fit from the repository alone. Until then, the general
project guide above is usable; the astronomy pipeline and installable
science skill are still in development.

## Watch out

- **“Latest” data with no version.** Reproducibility begins with a pinned
  source, not a convenient download.
- **Units and exclusions hidden in a notebook.** Put them in executable
  code and record them in the report.
- **A plausible figure with no path back.** Every figure should name the
  data and code that produced it.
- **Interpretation written as measurement.** Keep observed results,
  assumptions, and conclusions visibly separate.
