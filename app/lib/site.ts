/** Central site configuration used for metadata, structured data, sitemap, etc. */
export const SITE_URL = "https://synergywellnessc.com";

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
