import { ArrowRight, CircleCheck, Image as ImageIcon, CalendarCheck } from "lucide-react";
import { BOOKING_HREF } from "../lib/navigation";
import { btnGhost, btnPrimary, cn, container, Eyebrow } from "./ui";

export function Hero() {
  return (
    <section className="relative overflow-hidden" aria-labelledby="hero-heading">
      <div
        className={cn(
          container,
          "grid items-center gap-10 pt-13 pb-15 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:pt-[76px] lg:pb-[84px]"
        )}
      >
        <div>
          <Eyebrow>Integrative Mental Health · South Florida</Eyebrow>
          <h1 id="hero-heading" className="mt-4 text-[clamp(40px,5.4vw,68px)]">
            Care that brings your <em className="italic text-brand">mind and body</em> back into
            balance.
          </h1>
          <p className="mt-6 max-w-[30em] text-[19.5px] text-ink-soft">
            Compassionate, evidence-based therapy — online or in person — for
            anxiety, depression, trauma, and ADHD. We pair traditional talk
            therapy with innovative tools like biofeedback and VR to help you
            feel better, faster.
          </p>
          <div className="mt-[34px] flex flex-wrap gap-[14px]">
            <a href={BOOKING_HREF} className={btnPrimary}>
              Book a free screening
              <ArrowRight className="size-[17px]" aria-hidden="true" />
            </a>
            <a href="#services" className={btnGhost}>
              Explore our services
            </a>
          </div>
          <p className="mt-[18px] flex items-center gap-2 text-[14.5px] text-ink-soft">
            <CircleCheck className="size-4 shrink-0 text-brand" aria-hidden="true" />
            Telehealth across Florida · In-person visits available · New patients
            welcome
          </p>
        </div>

        <div className="relative w-full">
          <div className="relative aspect-[16/10] overflow-hidden rounded-[26px] bg-[linear-gradient(150deg,#cdd9cd_0%,#b7c9bd_45%,#9fb6ab_100%)] shadow-float lg:aspect-[4/5]">
            <div
              className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 p-6 text-center text-[#2c4239]"
              aria-hidden="true"
            >
              <ImageIcon className="size-10 opacity-55" strokeWidth={1.5} />
              <span className="text-[13px] font-bold tracking-[0.04em] opacity-70">
                PLACEHOLDER · CLINIC / THERAPY PHOTO
              </span>
            </div>
          </div>
          <div className="absolute bottom-4 left-3 flex max-w-[252px] items-center gap-[13px] rounded-2xl border border-line bg-paper px-[18px] py-4 shadow-float max-lg:hidden lg:-left-[26px] lg:bottom-[38px]">
            <span className="grid size-[42px] shrink-0 place-items-center rounded-[11px] bg-sage text-brand">
              <CalendarCheck className="size-[21px]" aria-hidden="true" />
            </span>
            <div>
              <b className="block text-[15px]">Same-week intakes</b>
              <small className="block text-[13px] leading-[1.35] text-ink-soft">
                Most new patients are seen within days, not months.
              </small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
