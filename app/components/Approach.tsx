import { Check, Image as ImageIcon } from "lucide-react";
import { cn, Container, Eyebrow, sectionY } from "./ui";

const POINTS = [
  "Evidence-based methods like CBT, DBT, ACT, and EMDR",
  "Thoughtful therapist matching — not the luck of the draw",
  "Plans paced to your values, comfort, and goals",
  "Technology that shortens the path to feeling better",
];

export function Approach() {
  return (
    <section
      id="approach"
      className={cn(sectionY, "bg-brand text-white")}
      aria-labelledby="approach-heading"
    >
      <Container className="grid grid-cols-1 items-center gap-[38px] lg:grid-cols-2 lg:gap-[60px]">
        <div>
          <Eyebrow light>Our philosophy</Eyebrow>
          <h2
            id="approach-heading"
            className="mt-4 text-white text-[clamp(30px,3.7vw,46px)]"
          >
            Greater than the sum of its parts
          </h2>
          <p className="mt-5 text-[18px] text-[#d6e6dc]">
            Synergy means combining forces. We treat the whole person — mind,
            body, and the pace of your daily life — so progress in one area lifts
            the others. That&rsquo;s how lasting change happens.
          </p>
          <ul className="mt-7 grid list-none gap-4 p-0">
            {POINTS.map((point) => (
              <li
                key={point}
                className="flex items-start gap-[13px] text-[16.5px] text-[#eaf3ee]"
              >
                <Check className="mt-px size-[22px] shrink-0 text-[#bfe0cf]" aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div
          className="order-first flex aspect-[16/10] flex-col items-center justify-center gap-2 rounded-3xl border border-white/15 bg-[linear-gradient(150deg,#3d6e5b,#25503f)] text-white/60 lg:order-none lg:aspect-square"
          aria-hidden="true"
        >
          <ImageIcon className="size-11" strokeWidth={1.5} />
          <span className="text-[13px] font-bold tracking-[0.04em]">
            PLACEHOLDER · TEAM / SPACE PHOTO
          </span>
        </div>
      </Container>
    </section>
  );
}
