import { cn, Container, PlaceholderFlag, SectionHeading, sectionY } from "./ui";

const QUOTES = [
  '"Patient testimonial goes here once collected and consented."',
  '"Second testimonial placeholder — do not publish until verified."',
  '"Third testimonial placeholder. Keep labeled until real review is sourced."',
];

const CREDS: { label: string; flag: string }[] = [
  { label: "Licensed clinicians", flag: "add count" },
  { label: "Years serving South Florida", flag: "add" },
  { label: "Patients supported", flag: "add" },
  { label: "Insurance plans accepted", flag: "verify" },
];

export function Testimonials() {
  return (
    <section id="trust" className={cn(sectionY, "bg-sand2")} aria-labelledby="trust-heading">
      <Container>
        <SectionHeading
          center
          headingId="trust-heading"
          eyebrow="Trust & outcomes"
          title="Built on real relationships"
          description="The bond between you and your therapist is the heart of the work. The slots below are reserved for verified patient stories and clinician credentials."
        />

        <div className="mb-7 text-center">
          <PlaceholderFlag>
            Placeholder — replace with verified, consented content
          </PlaceholderFlag>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {QUOTES.map((quote, i) => (
            <figure
              key={i}
              className="rounded-card border border-dashed border-line bg-paper p-7"
            >
              <div className="text-[15px] tracking-[2px] text-accent" aria-hidden="true">
                ★★★★★
              </div>
              <blockquote className="mb-[18px] mt-3.5 font-serif text-[19px] leading-[1.4] text-ink">
                {quote}
              </blockquote>
              <figcaption className="text-[14px] font-semibold text-ink-soft">
                — Verified patient, placeholder
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-[18px] grid grid-cols-2 gap-[18px] lg:grid-cols-4">
          {CREDS.map((cred) => (
            <div
              key={cred.label}
              className="rounded-xl border border-line bg-paper p-6 text-center"
            >
              <div className="font-serif text-[34px] font-semibold text-brand">—</div>
              <div className="mt-1 text-[14px] text-ink-soft">
                {cred.label}
                <PlaceholderFlag className="mt-1.5 block">{cred.flag}</PlaceholderFlag>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
