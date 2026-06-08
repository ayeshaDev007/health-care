import { FAQ_ITEMS } from "./faq";
import { SITE, SITE_URL } from "./site";

/**
 * Builds a Schema.org JSON-LD @graph combining the clinic's profile
 * (MedicalClinic) and the FAQ (FAQPage). Rendered once in the page head.
 */
export function buildStructuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalClinic",
        "@id": `${SITE_URL}/#clinic`,
        name: SITE.name,
        description:
          "Integrative mental health clinic offering telehealth and in-person therapy in South Florida.",
        url: `${SITE_URL}/`,
        telephone: SITE.telephone,
        medicalSpecialty: "Psychiatric",
        areaServed: SITE.areaServed,
        address: {
          "@type": "PostalAddress",
          addressRegion: SITE.region,
          addressCountry: SITE.country,
        },
        availableService: [
          { "@type": "MedicalTherapy", name: "Telehealth therapy" },
          { "@type": "MedicalTherapy", name: "In-person therapy" },
          { "@type": "MedicalTherapy", name: "Biofeedback & VR-assisted therapy" },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/#faq`,
        mainEntity: FAQ_ITEMS.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };
}
