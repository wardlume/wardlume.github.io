// Build-time GitHub fetches. In CI, GITHUB_TOKEN raises the rate limit;
// locally, unauthenticated requests are fine for a handful of builds.
const headers: Record<string, string> = { Accept: 'application/vnd.github+json' };
if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;

const cache = new Map<string, Promise<Response>>();

export function ghFetch(url: string): Promise<Response> {
  if (!cache.has(url)) cache.set(url, fetch(url, { headers }));
  return cache.get(url)!.then((r) => r.clone());
}
