import { site } from '../site.config';
import { ghFetch } from './github';

export type Asset = { name: string; url: string; size: number; sha256: string };
export type Release = {
  version: string;
  tag: string;
  date: string; // ISO
  notesUrl: string;
  pkg?: Asset;
  dmg?: Asset;
};

let pending: Promise<Release> | undefined;

/** Latest public release, read once per build from the storefront repo. */
export function latestRelease(): Promise<Release> {
  pending ??= load();
  return pending;
}

async function load(): Promise<Release> {
  const res = await ghFetch(`https://api.github.com/repos/${site.repo}/releases/latest`);
  if (!res.ok) {
    // Never ship a site with a dead download button: fall back to the releases page.
    console.warn(`[release] GitHub API ${res.status}; using the releases page as fallback`);
    return { version: 'latest', tag: 'latest', date: '', notesUrl: site.links.releases };
  }
  const r = await res.json();
  const asset = (ext: string): Asset | undefined => {
    const a = r.assets.find((x: any) => x.name.endsWith(ext));
    return a && {
      name: a.name,
      url: a.browser_download_url,
      size: a.size,
      sha256: (a.digest ?? '').replace(/^sha256:/, ''),
    };
  };
  return {
    version: r.tag_name.replace(/^v/, ''),
    tag: r.tag_name,
    date: r.published_at,
    notesUrl: r.html_url,
    pkg: asset('.pkg'),
    dmg: asset('.dmg'),
  };
}

export const formatDate = (iso: string) =>
  iso ? new Date(iso).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' }) : '';

export const formatSize = (bytes: number) => `${(bytes / 1024 / 1024).toFixed(1)} MB`;
