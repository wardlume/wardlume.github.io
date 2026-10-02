import type { APIRoute } from 'astro';
import { site } from '../site.config';
import { ghFetch } from '../lib/github';

// Sparkle update feed for the in-app updater (Wardlume 1.7.4+ asks
// https://wardlume.github.io/appcast.xml). The canonical feed is appcast.xml in
// the public storefront repo, written there by the app's release process with
// EdDSA-signed items; this route just serves it from the site's domain. A
// change to it is a public-repo commit, so the hourly deploy check picks it up.
// Until the first signed item exists, serve an empty feed ("no updates").
const EMPTY = `<?xml version="1.0" standalone="yes"?>
<rss xmlns:sparkle="http://www.andymatuschak.org/xml-namespaces/sparkle" version="2.0">
    <channel>
        <title>Wardlume</title>
    </channel>
</rss>
`;

export const GET: APIRoute = async () => {
  const res = await ghFetch(`https://raw.githubusercontent.com/${site.repo}/main/appcast.xml`);
  let body = EMPTY;
  if (res.ok) {
    body = await res.text();
  } else if (res.status !== 404) {
    throw new Error(`[appcast] HTTP ${res.status}`);
  }
  if (!body.includes('<rss')) throw new Error('[appcast] not an RSS feed');
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
};
