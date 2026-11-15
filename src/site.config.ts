// Single place for names, links, and business settings.
// Anything that changes when Wardlume goes paid lives here.

export const site = {
  name: 'Wardlume',
  url: 'https://wardlume.github.io',
  tagline: 'Cast a watching ward over your Mac.',
  subtitle: 'See your AI agents work. Intruders can’t.',
  description:
    "Wardlume locks your Mac's keyboard, mouse and trackpad behind a glass shield while AI agents keep working in view. Unlock with Touch ID. Free for personal use.",
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
  contactEmail: 'workwithvinshu@gmail.com',

  // Top-of-home banner. `latest` describes the newest release (update it each
  // release); `always` is a standing highlight shown next to it on every release.
  banner: {
    latest: 'No screen recording needed',
    always: { icon: '⌚', text: 'Apple Watch unlock', since: 'v1.7', href: '/docs/unlocking#apple-watch' },
  },

  // Home-page "Macs warded" counter: every GitHub release download (website,
  // Homebrew, in-app updates), refreshed hourly. `extra` is for copies shared outside GitHub; only add an
  // accurate, documented number. `variant` 'laurel' is for a future milestone.
  downloads: { show: true, variant: 'count' as 'count' | 'laurel', extra: 0, minimum: 1 },

  // Search engine ownership tokens (Google Search Console / Bing Webmaster Tools).
  // Paste the content="…" value of each verification meta tag here.
  verification: { google: 'TYYKYcZFc7BVzrRpWoQtXpr_djAfHCMSFfRJ9rlpDao', bing: '' },
  // IndexNow (Bing, Yandex, Seznam…): public/<key>.txt holds the same value.
  indexNowKey: '52e7367371f04df9bed7960be2121664',

  // Cookieless analytics. Leave empty for none (the default).
  // e.g. goatcounter: 'wardlume' → https://wardlume.goatcounter.com
  analytics: { goatcounter: '' },
} as const;

// mode 'free'  → personal use free, donations + commercial-license contact.
// mode 'paid'  → Wardlume Pro: trial, one-time price, Lemon Squeezy checkout,
//                refund policy. Flip when v2.0 (licensing) ships.
export const pricing: {
  mode: 'free' | 'paid';
  donate: { label: string; href: string; note: string }[];
  commercial: { label: string; href: string };
  paid: {
    product: string;
    plan: string;
    /** What people pay now. */
    price: string;
    /** Shown struck through next to `price`; '' hides it. */
    listPrice: string;
    /** e.g. 'Launch price'; '' hides the label. */
    saleLabel: string;
    /** e.g. 'Jan 31' → "Launch price until Jan 31"; '' for no end date. */
    saleEnds: string;
    macs: number;
    trialHours: number;
    refundDays: number;
    /** Lemon Squeezy checkout link. Empty → Buy points at the contact page. */
    checkoutURL: string;
    features: string[];
  };
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
  paid: {
    product: 'Wardlume Pro',
    plan: 'Lifetime',
    price: '$19',
    listPrice: '$29',
    saleLabel: 'Launch price',
    saleEnds: '',
    macs: 2,
    trialHours: 48,
    refundDays: 7,
    checkoutURL: '',
    features: [
      'The see-through ward on every display',
      'Touch ID, password & Apple Watch unlock',
      'Live glass look',
      'Intruder photo of failed unlocks',
      'Auto-ward when you go idle',
      'Character reaction packs',
      'Every future update',
    ],
  },
};
