#!/usr/bin/env bash
#
# Build the site and run the checks that must pass before anything is published:
#   1. astro build succeeds
#   2. Nothing references the private source repo or source files (this repo is public)
#   3. Every internal link in dist/ points at a page that exists
set -euo pipefail
cd "$(dirname "$0")/.."

npx astro build

fail=0
echo "▸ Leak guard"
if grep -rInE "wardlume-source|\.swift\b|\.xcodeproj\b" --exclude-dir=node_modules --exclude-dir=.git --exclude-dir=.astro --exclude=check.sh . ; then
  echo "  ✗ found references to the private repo or source files"; fail=1
else
  echo "  ✓ clean"
fi

echo "▸ Internal links"
missing="$(grep -rhoE 'href="/[^"#?]*' dist --include=*.html | sed 's/href="//' | sort -u | while read -r p; do
  f="dist${p%/}"
  [[ -f "$f" || -f "$f/index.html" || -f "$f.html" || "$p" == "/" ]] || echo "$p"
done)"
if [[ -n "$missing" ]]; then echo "  ✗ broken:"; echo "$missing" | sed 's/^/    /'; fail=1; else echo "  ✓ all internal links resolve"; fi

exit $fail
