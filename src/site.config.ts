// Single place for names, links, and business settings.
// Anything that changes when Wardlume goes paid lives here.

export const site = {
  name: 'Wardlume',
  url: 'https://wardlume.github.io',
  tagline: 'Cast a watching ward over your Mac.',
  subtitle: 'See your AI agents work. Intruders can’t.',
  description:
    'Wardlume locks your Mac’s keyboard, mouse, and trackpad behind an animated glass shield while Claude Code, Codex, or Cursor keep working in full view. Unlock with Touch ID or Apple Watch. Free for personal use.',
  author: 'Arpit Agarwal',
  requirements: 'macOS Tahoe 26+ · Apple Silicon',

  // Public storefront repo: releases, issues, discussions, and the canonical
  // CHANGELOG / SAFETY / PRIVACY / TERMS that the site renders.
  repo: 'arpitagarwal1301/wardlume',
  brew: {
    tap: 'arpitagarwal1301/tap',
    install: [
      'brew tap arpitagarwal1301/tap',
      'brew trust arpitagarwal1301/tap',
      'brew install --cask wardlume',
    ],
    upgrade: 'brew upgrade --cask wardlume',
    uninstall: 'brew uninstall --cask wardlume',
  },

  links: {
    github: 'https://github.com/arpitagarwal1301/wardlume',
    releases: 'https://github.com/arpitagarwal1301/wardlume/releases',
    issues: 'https://github.com/arpitagarwal1301/wardlume/issues/new/choose',
    discussions: 'https://github.com/arpitagarwal1301/wardlume/discussions',
    permissionPilot: 'https://github.com/arpitagarwal1301/PermissionPilot',
  },

  // Leave empty to hide. Shown on Support and Pricing.
  contactEmail: '',

  // Cookieless analytics. Leave empty for none (the default).
  // e.g. goatcounter: 'wardlume' → https://wardlume.goatcounter.com
  analytics: { goatcounter: '' },
} as const;

export type Tier = {
  name: string;
  price: string;
  cadence?: string;
  blurb: string;
  features: string[];
  cta: { label: string; href: string };
  highlight?: boolean;
};

// mode 'free'  → personal use free, donations + commercial-license contact.
// mode 'paid'  → renders `tiers` with hosted checkout links (Polar / Lemon Squeezy).
export const pricing: {
  mode: 'free' | 'paid';
  donate: { label: string; href: string; note: string }[];
  commercial: { label: string; href: string };
  tiers: Tier[];
} = {
  mode: 'free',
  donate: [
    {
      label: 'Sponsor on GitHub',
      href: 'https://github.com/sponsors/arpitagarwal1301',
      note: 'Monthly or one-time. GitHub takes no fee.',
    },
    // { label: 'Buy me a coffee', href: 'https://ko-fi.com/…', note: 'One-time tip.' },
  ],
  commercial: {
    label: 'Ask about a commercial license',
    href: 'https://github.com/arpitagarwal1301/wardlume/discussions',
  },
  tiers: [],
};
