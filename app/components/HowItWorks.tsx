import { Container, SectionHeading, cn, sectionY } from "./ui";

const STEPS = [
  {
    title: "Book your free screening",
    body: "Reach out online or by phone. We'll walk you through enrollment and handle the paperwork before your first visit.",
  },
  {
    title: "Get matched thoughtfully",
    body: "Our intake team pairs you with a clinician whose style and specialty genuinely fit your needs and goals.",
  },
  {
    title: "Begin your care plan",
    body: "Start sessions online or in person, with a personalized plan that adapts as you grow.",
  },
];

const CONNECTOR =
  "lg:after:absolute lg:after:top-[35px] lg:after:left-[60px] lg:after:right-[-14px] lg:after:h-[1.5px] lg:after:bg-[repeating-linear-gradient(90deg,var(--color-brand-soft)_0_7px,transparent_7px_14px)] lg:after:content-['']";

export function HowItWorks() {
  return (
    <section id="how" className={sectionY} aria-labelledby="how-heading">
      <Container>
        <SectionHeading
          center
          headingId="how-heading"
          eyebrow="Getting started"
          title="Care in three simple steps"
          description="No long waitlists, no confusing paperwork. We make the first move easy."
        />
        <ol className="grid grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-[28px]">
          {STEPS.map((step, i) => (
            <li
              key={step.title}
              className={cn(
                "relative pt-[14px]",
                i < STEPS.length - 1 && CONNECTOR
              )}
            >
              <div
                className="mb-5 grid size-[44px] place-items-center rounded-full bg-brand font-serif text-[20px] font-semibold text-white"
                aria-hidden="true"
              >
                {i + 1}
              </div>
              <h3 className="text-[23px]">{step.title}</h3>
              <p className="mt-2.5 text-[16px] text-ink-soft">{step.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
