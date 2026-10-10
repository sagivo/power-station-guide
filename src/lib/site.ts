// Central site config. Domain: power-station-guide.pages.dev
// (also update `SITE` in astro.config.mjs and public/robots.txt).
export const SITE_NAME = "Power Station Guide";
export const SITE_URL = "https://power-station-guide-c45.pages.dev";
export const SITE_TAGLINE = "Portable power station guides, comparisons, and calculators.";
export const SITE_DESCRIPTION =
  "Independent guides to portable power stations: model comparisons, RV power sizers, solar pairing calculators, and generator-vs-battery cost breakdowns so you buy the right station the first time.";
export const OG_DEFAULT = `${SITE_URL}/og-default.png`;

// Amazon Associates Store ID. Every product link on the site picks it up.
// After changing it, clear Astro's content cache (rm -rf node_modules/.astro)
// so already-rendered markdown links are rebuilt with the new tag.
export const AMAZON_TAG = "room4205-20";

// Primary navigation, shared by header and footer.
export const NAV = [
  { href: "/posts/power-station-vs-generator/", label: "Station vs Generator" },
  { href: "/power-stations/", label: "Compare" },
  { href: "/guides/", label: "Guides" },
  { href: "/tools/", label: "Tools" },
];
