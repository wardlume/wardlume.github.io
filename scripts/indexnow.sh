#!/usr/bin/env bash
#
# Tell IndexNow search engines (Bing, Yandex, Seznam, Naver; Bing also feeds
# DuckDuckGo, Yahoo and ChatGPT search) that the site's pages changed.
# Reads the live sitemap, so run it after a deploy. Google doesn't use
# IndexNow; it reads the sitemap submitted in Search Console instead.
set -euo pipefail
cd "$(dirname "$0")/.."

HOST=wardlume.github.io
KEY="$(grep -oE "indexNowKey: '[0-9a-f]+'" src/site.config.ts | grep -oE '[0-9a-f]{32}')"
[[ -f "public/$KEY.txt" ]] || { echo "✗ public/$KEY.txt missing"; exit 1; }

urls="$(curl -fsSL "https://$HOST/sitemap-0.xml" | grep -oE '<loc>[^<]+' | sed 's/<loc>//')"
json="$(printf '%s\n' "$urls" | python3 -c '
import json, sys
print(json.dumps({"host": sys.argv[1], "key": sys.argv[2],
  "keyLocation": f"https://{sys.argv[1]}/{sys.argv[2]}.txt",
  "urlList": [u for u in sys.stdin.read().split() if u]}))' "$HOST" "$KEY")"

code="$(curl -s -o /dev/null -w '%{http_code}' -X POST https://api.indexnow.org/indexnow \
  -H 'Content-Type: application/json; charset=utf-8' --data "$json")"
echo "IndexNow: submitted $(printf '%s\n' "$urls" | wc -l | tr -d ' ') URLs → HTTP $code"
[[ "$code" == 200 || "$code" == 202 ]]
