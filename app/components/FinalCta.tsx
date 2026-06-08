import { Phone } from "lucide-react";
import { PHONE_DISPLAY, PHONE_HREF } from "../lib/navigation";
import { btnGhost, btnPrimary, Container, sectionY, cn } from "./ui";

export function FinalCta() {
  return (
    <section id="contact" className={cn(sectionY, "text-center")} aria-labelledby="contact-heading">
      <Container>
        <div className="relative overflow-hidden rounded-[28px] border border-line bg-paper px-10 py-[68px] shadow-soft before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_50%_-20%,var(--color-sage),transparent_60%)] before:content-['']">
          <h2 id="contact-heading" className="relative text-[clamp(32px,4vw,50px)]">
            Take the first step today
          </h2>
          <p className="relative mx-auto mt-5 max-w-[34em] text-[19px] text-ink-soft">
            Starting is the hardest part — and the part we make easiest. Book a
            free, no-pressure screening and we&rsquo;ll help you find the right
            path forward.
          </p>
          <div className="relative mt-[34px] flex flex-wrap justify-center gap-[14px]">
            <a href={PHONE_HREF} className={btnPrimary}>
              <Phone className="size-[17px]" aria-hidden="true" />
              Call {PHONE_DISPLAY}
            </a>
            <a href="#contact" className={btnGhost}>
              Request an appointment online
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
