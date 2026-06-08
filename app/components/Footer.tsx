import { Leaf, Phone } from "lucide-react";
import { PHONE_DISPLAY, PHONE_HREF } from "../lib/navigation";
import { Container, PlaceholderFlag } from "./ui";

const colTitle = "mb-4 text-[13px] font-bold uppercase tracking-[0.1em] text-white";
const colLink =
  "mb-[11px] block text-[15px] text-[#9fb0a9] transition-colors hover:text-white";

export function Footer() {
  return (
    <footer className="bg-ink pt-[70px] pb-9 text-[#c9d3ce]">
      <Container>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr] lg:gap-10">
          <div>
            <span className="mb-4 flex items-center gap-[11px] font-serif text-[22px] font-semibold text-white">
              <span className="grid size-[34px] shrink-0 place-items-center rounded-[9px] bg-white text-brand">
                <Leaf className="size-[19px]" aria-hidden="true" />
              </span>
              Synergy Wellness
            </span>
            <p className="max-w-[32ch] text-[15px] text-[#9fb0a9]">
              Integrative mental health care for South Florida — combining
              traditional therapy with innovative tools to support the whole
              person.
            </p>
          </div>

          <nav aria-label="Services">
            <p className={colTitle}>Services</p>
            <a className={colLink} href="#services">Telehealth therapy</a>
            <a className={colLink} href="#services">In-person therapy</a>
            <a className={colLink} href="#services">Biofeedback &amp; VR</a>
            <a className={colLink} href="#contact">Free screening</a>
          </nav>

          <nav aria-label="Clinic">
            <p className={colTitle}>Clinic</p>
            <a className={colLink} href="#approach">Our approach</a>
            <a className={colLink} href="#how">How it works</a>
            <a className={colLink} href="#faq">FAQ</a>
            <a className={colLink} href="#trust">Trust &amp; outcomes</a>
          </nav>

          <div>
            <p className={colTitle}>Contact</p>
            <p className="mb-[11px] text-[15px] text-[#9fb0a9]">
              South Florida <PlaceholderFlag>add address</PlaceholderFlag>
            </p>
            <a className={colLink} href={PHONE_HREF}>
              {PHONE_DISPLAY}
            </a>
            <p className="mb-[11px] text-[15px] text-[#9fb0a9]">
              Mon&ndash;Fri, hours <PlaceholderFlag>add</PlaceholderFlag>
            </p>
          </div>
        </div>

        <div className="mt-11 flex flex-wrap justify-between gap-3 border-t border-white/10 pt-6 text-[13.5px] text-[#7e908a]">
          <span>© 2026 Synergy Wellness Centers. All rights reserved.</span>
          <span>
            Privacy Policy · Terms · HIPAA Notice · Concept redesign —
            placeholder details labeled throughout
          </span>
        </div>
      </Container>
    </footer>
  );
}
