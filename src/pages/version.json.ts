import type { APIRoute } from 'astro';
import { site } from '../site.config';
import { ghFetch } from '../lib/github';
import { latestRelease } from '../lib/release';

// What this deploy was built from. The hourly check in deploy.yml compares it
// with GitHub and rebuilds only when a new release or doc change has landed.
export const GET: APIRoute = async () => {
  const r = await latestRelease();
  const res = await ghFetch(`https://api.github.com/repos/${site.repo}/commits/main`);
  const docs = res.ok ? (await res.json()).sha : 'unknown';
  return new Response(JSON.stringify({ release: r.tag, docs, built: new Date().toISOString() }), {
    headers: { 'Content-Type': 'application/json' },
  });
};
