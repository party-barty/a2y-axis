#!/usr/bin/env bash
# PreToolUse hook: gate `git commit` on `npm run lint` + `npx tsc --noEmit`.
# Wired in .claude/settings.json. Reads tool_input JSON from stdin.
# Filters .next/ typegen noise from tsc since those errors come from generated routes.

set -u

cmd=$(jq -r '.tool_input.command // ""')

if ! echo "$cmd" | grep -qE '(^|[;&|]|&&|\|\|)[[:space:]]*git[[:space:]]+commit([[:space:]]|$)'; then
  exit 0
fi

repo_root=${CLAUDE_PROJECT_DIR:-$(git rev-parse --show-toplevel 2>/dev/null)}
if [ -z "$repo_root" ]; then exit 0; fi
cd "$repo_root" || exit 0

lint=$(npm run lint 2>&1); lint_rc=$?

tsc_raw=$(npx tsc --noEmit 2>&1)
tsc=$(echo "$tsc_raw" | grep -v '^\.next/' || true)
tsc_real=$(echo "$tsc" | grep -c 'error TS' || true)

if [ "$lint_rc" -ne 0 ] || [ "$tsc_real" -gt 0 ]; then
  {
    echo "Pre-commit checks failed — fix lint/types or escalate before retrying the commit."
    if [ "$lint_rc" -ne 0 ]; then
      echo "--- npm run lint (exit $lint_rc) ---"
      echo "$lint"
    fi
    if [ "$tsc_real" -gt 0 ]; then
      echo "--- npx tsc --noEmit (real errors only, .next/ filtered) ---"
      echo "$tsc"
    fi
  } >&2
  exit 2
fi

exit 0
