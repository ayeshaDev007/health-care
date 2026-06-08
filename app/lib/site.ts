/**
 * Resolve the canonical base URL used for metadata, OG/Twitter images,
 * structured data, sitemap, and robots.
 *
 * Order of precedence:
 *  1. NEXT_PUBLIC_SITE_URL — set this to the real domain once it's live
 *     (e.g. https://synergywellnessc.com).
 *  2. VERCEL_PROJECT_PRODUCTION_URL — the project's stable production domain.
 *  3. VERCEL_URL — the per-deployment URL (preview deployments).
 *  4. localhost for local development.
 *
 * This guarantees absolute URLs (like og:image) always point at a host that
 * actually serves the site, so link previews resolve correctly.
 */
function resolveSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return "http://localhost:3000";
}

export const SITE_URL = resolveSiteUrl();

export const SITE = {
  name: "Synergy Wellness Centers",
  shortName: "Synergy Wellness",
  url: SITE_URL,
  title: "Mental Health Therapy in South Florida | Synergy Wellness Centers",
  description:
    "Integrative mental health care in South Florida. Telehealth and in-person therapy for anxiety, depression, trauma, and ADHD — paired with VR and biofeedback tools. Book a free initial screening.",
  // Placeholder NAP — replace with verified clinic details before launch.
  telephone: "+1-000-000-0000",
  areaServed: "South Florida",
  region: "FL",
  country: "US",
  locale: "en_US",
} as const;
