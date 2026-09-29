import { marked } from 'marked';
import { site } from '../site.config';
import { ghFetch } from './github';

// Canonical user docs live in the public storefront repo (synced there from
// the app's own repo). The site renders them at build time and never keeps a
// hand-edited copy.
const LOCAL_LINKS: Record<string, string> = {
  'SAFETY.md': '/safety',
  'CHANGELOG.md': '/changelog',
  'PRIVACY.md': '/privacy',
  'TERMS.md': '/terms',
  'LICENSE': `https://github.com/${site.repo}/blob/main/LICENSE`,
};

export async function remoteMarkdown(file: string): Promise<{ title: string; html: string }> {
  const res = await ghFetch(`https://raw.githubusercontent.com/${site.repo}/main/${file}`);
  if (!res.ok) throw new Error(`[remote-md] ${file}: HTTP ${res.status}`);
  let md = await res.text();

  // The first "# Heading" becomes the page title.
  const m = md.match(/^#\s+(.+)\n/);
  const title = m ? m[1].trim().replace(/^Wardlume\s+/, '') : file.replace(/\.md$/, '');
  if (m) md = md.slice(m[0].length);

  // Repo-relative links → site pages.
  md = md.replace(/\]\((SAFETY\.md|CHANGELOG\.md|PRIVACY\.md|TERMS\.md|LICENSE)(#[^)]*)?\)/g,
    (_, f, hash = '') => `](${LOCAL_LINKS[f]}${hash})`);

  return { title, html: await marked.parse(md) };
}
