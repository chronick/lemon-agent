# Lemon Agent

**Free tools · honest measurements · agentic services.**

A small house for working with agents — the counterpart to LEMON AUDIO.
Members ship under one name so each carries the others: numbered failure
lists you run as subtraction passes, published measurements, and services
agents can call directly.

> **Status: private, pre-launch.** Both lists are v0 drafts; the author
> curation pass is the authorship event and hasn't happened yet. The repo
> goes public when the first list does.

## Members

| № | Member | What it is | Status |
|---|--------|-----------|--------|
| 1 | [The Prose Failure List](lists/prose-failure-list.md) | 24 numbered failures of AI-assisted prose (PF-01…24), run as a subtraction pass | draft |
| 2 | [The Agent Workflow Failure List](lists/agent-workflow-failure-list.md) | 18 numbered failures of agent-assisted engineering (AF-01…18), each grounded in a measured incident | draft |
| — | [pathgrip](https://pathgrip.net) | Bookmark + provenance store: content-addressed snapshots, drift detection, per-agent tokens, MCP surface | live |

## Layout

```
lists/        Canonical markdown — the lists ARE the product; the site renders them
src/          Astro site (static, zero-JS)
public/       catalog.json · llms.txt · favicon — the agent-facing surfaces
```

The site is fully static: markdown in git, HTML at build time. No server,
no database, no client JavaScript. Raw markdown is served at
`/lists/*.md` (copied from `lists/` at build), the machine catalog at
`/catalog.json`, the agent index at `/llms.txt`.

## Develop

```sh
npm install
npm run dev      # local site at http://localhost:4321
npm run build    # static build to dist/
```

## Ship checklist (flip to public)

1. **Curation pass on each list** — cut, rewrite, reorder; a 15-entry
   list you'd defend beats a 24-entry list you'd shrug at. (Tracked:
   vault-1lc71 for the AF list.)
2. Strip the draft banners and internal task ids from `lists/*.md`;
   flip `status: draft` → `published` in frontmatter and catalog.json.
3. Pick a license (owner call) and add `LICENSE`.
4. Decide deploy target (Cloudflare Pages vs GitHub Pages project site)
   and set `site`/`base` in `astro.config.mjs`; wire a privacy-respecting
   analytics beacon at the same time.
5. `gh repo edit --visibility public`, deploy, cross-link from
   pathgrip.net, log the ship in tradewind (starts the probe clock).
