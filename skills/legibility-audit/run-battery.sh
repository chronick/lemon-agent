#!/usr/bin/env bash
# Run a legibility-audit prompt battery against the Claude Code CLI surface.
#
# Usage:   run-battery.sh <battery.md> [output-dir]
#   MODEL=sonnet (default) — override with MODEL=haiku etc.
#   CAP=25 (default)       — max prompts per run (ISO-00 + ~24 battery prompts)
#   NEUTRAL_DIR=/private/tmp — neutral cwd the prompts run from
#
# Each prompt runs as `claude -p "<prompt>" --model $MODEL --setting-sources ""
# --allowedTools "WebFetch,WebSearch" </dev/null` from a neutral directory.
# Three hard-won flags — a run without any one of them is invalid:
#   --setting-sources ""       else user-global config loads and the "fresh"
#                              assistant recognizes the owner (ISO-00 catches it)
#   --allowedTools WebFetch,WebSearch   else -p mode has no web access and the
#                              assistant (correctly) refuses to answer; NOTE:
#                              the flag is variadic — prompt must come BEFORE it
#   < /dev/null                else claude -p appends the loop's remaining
#                              stdin (prompts.tsv) to every prompt — each call
#                              would see the whole battery
# Sequential, one process per prompt.
# Outputs: one <ID>.txt (stdout) + <ID>.err per prompt, plus prompts.tsv.
#
# Prerequisites: a battery markdown file in the template's shape ('### <ID> — …'
# headers with fenced prompt blocks; see battery-template.md), and an
# authenticated `claude` CLI (run `claude` interactively and /login if you get
# "OAuth access token has expired").
set -euo pipefail

if [ $# -lt 1 ]; then
  echo "usage: $0 <battery.md> [output-dir]" >&2
  exit 2
fi

BATTERY="$1"
OUT="${2:-runs/$(date +%F)}"
MODEL="${MODEL:-sonnet}"
CAP="${CAP:-25}"
NEUTRAL_DIR="${NEUTRAL_DIR:-/private/tmp}"
mkdir -p "$OUT"

# Extract "ID<TAB>prompt" pairs: '### <ID> — ...' headers, fenced prompt blocks.
awk '
  /^### / { id=$2; next }
  /^```/ {
    if (in_block) {
      in_block=0
      if (id != "") { gsub(/\t/, " ", buf); print id "\t" buf; buf=""; id="" }
    } else { in_block=1; buf="" }
    next
  }
  in_block { buf = (buf == "" ? $0 : buf " " $0) }
' "$BATTERY" > "$OUT/prompts.tsv"

echo "battery: $(wc -l < "$OUT/prompts.tsv" | tr -d ' ') prompts; model=$MODEL; cap=$CAP; out=$OUT"

n=0
while IFS=$'\t' read -r id prompt; do
  n=$((n + 1))
  if [ "$n" -gt "$CAP" ]; then echo "cap ($CAP) reached, stopping"; break; fi
  echo "[$n] $id"
  if ( cd "$NEUTRAL_DIR" && claude -p "$prompt" --model "$MODEL" \
        --setting-sources "" --allowedTools "WebFetch,WebSearch" </dev/null ) \
      > "$OUT/$id.txt" 2> "$OUT/$id.err"; then
    rm -f "$OUT/$id.err"
  else
    echo "  FAILED — see $OUT/$id.err"
  fi
done < "$OUT/prompts.tsv"

echo "done: $OUT — read ISO-00.txt FIRST; if it reports loaded instructions, the run is invalid"
