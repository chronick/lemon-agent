---
name: prose-failure-list
description: Run the Lemon Agent Prose Failure List (PF-01…PF-24) against a draft as a subtraction pass. Use when the user asks to run the prose failure list, tighten a draft, de-slop writing, review prose for AI tells, or do a subtraction pass on any piece of writing.
---

# Prose Failure List: the subtraction pass

Read `list.md` in this skill's directory: the canonical PF-01…PF-24
entries. Apply them to the target draft.

1. Read the draft in full before flagging anything.
2. For every match: cite the PF id, quote the offending text, and give
   the exact cut or rewrite. Group findings by where they sit in the
   draft, not by PF id.
3. **Never add content.** Every proposal removes or tightens. If a
   passage needs something it doesn't have, say so as a question. Don't
   write it.
4. A match is a signal, not a sentence. If something reads deliberate,
   flag it as "kept on purpose?" instead of proposing an edit.
5. End with: the three highest-value edits, and a one-line read on what
   the piece sounds like once subtracted.

Output the pass as a table (id · quote · proposed edit), then the three
highest-value edits in prose. If the user asks you to apply the edits,
apply only the ones they pick. This pass advises, it never gates.
