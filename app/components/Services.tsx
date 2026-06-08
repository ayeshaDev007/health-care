import { cn, Container, SectionHeading, sectionY } from "./ui";

const SERVICES: { num: string; title: string; body: string; tag: string }[] = [
  {
    num: "01",
    title: "Telehealth therapy",
    body: "Secure video sessions from home or office — the same quality of care, on your schedule, anywhere in Florida. The easiest way to start.",
    tag: "Most popular",
  },
  {
    num: "02",
    title: "In-person therapy",
    body: "Prefer to meet face to face? Sit down with a clinician in a calm, private setting designed to help you feel at ease.",
    tag: "In clinic",
  },
  {
    num: "03",
    title: "Biofeedback & VR-assisted therapy",
    body: "Innovative tools that help you tune into your body, regulate stress responses, and reach core issues faster — guided by your therapist.",
    tag: "Integrative",
  },
  {
    num: "04",
    title: "Free initial screening",
    body: "A no-pressure first conversation to understand your needs, answer questions, and match you with the right clinician before you commit.",
    tag: "No cost",
  },
];

export function Services() {
  return (
    <section className={cn(sectionY, "bg-sand2")} aria-labelledby="delivery-heading">
      <Container>
        <SectionHeading
          headingId="delivery-heading"
          eyebrow="How we deliver care"
          title="Traditional therapy, amplified by modern tools"
          description="Every plan blends proven, face-to-face methods with technology that helps you understand your mind and body more deeply."
        />
        <div className="flex flex-col gap-[22px]">
          {SERVICES.map((s) => (
            <article
              key={s.num}
              className={cn(
                "grid grid-cols-1 items-center gap-3.5 rounded-card border border-line bg-paper p-[26px]",
                "md:grid-cols-[88px_1fr_auto] md:gap-[26px] md:px-[34px] md:py-[30px]",
                "transition-[transform,box-shadow] duration-300 ease-smooth hover:-translate-y-[3px] hover:shadow-float"
              )}
            >
              <span
                className="font-serif text-[32px] font-semibold text-brand-soft md:text-[40px]"
                aria-hidden="true"
              >
                {s.num}
              </span>
              <div>
                <h3 className="text-[25px]">{s.title}</h3>
                <p className="mt-[7px] max-w-[52ch] text-[16px] text-ink-soft">{s.body}</p>
              </div>
              <span className="justify-self-start whitespace-nowrap rounded-full bg-sage px-[14px] py-[7px] text-[13px] font-bold text-brand">
                {s.tag}
              </span>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
