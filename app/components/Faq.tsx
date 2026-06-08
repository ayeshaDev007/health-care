"use client";

import { useId, useState } from "react";
import { FAQ_ITEMS, type FaqItem as FaqItemData } from "../lib/faq";
import { cn, Container, SectionHeading, sectionY } from "./ui";

function FaqItem({
  question,
  answer,
  defaultOpen = false,
}: FaqItemData & { defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = useId();

  return (
    <div className="border-b border-line py-1.5">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full cursor-pointer items-center justify-between gap-4 py-[22px] pr-1 text-left font-serif text-[21px] font-medium text-ink"
      >
        <span>{question}</span>
        {/* Animated +/- marker: the vertical bar collapses on open. */}
        <span className="relative size-[18px] shrink-0 text-brand" aria-hidden="true">
          <span className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 rounded-full bg-current" />
          <span
            className={cn(
              "absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 rounded-full bg-current transition-transform duration-300 ease-smooth",
              open ? "scale-y-0" : "scale-y-100"
            )}
          />
        </span>
      </button>
      <div
        id={panelId}
        role="region"
        className={cn(
          "grid transition-[grid-template-rows,opacity] duration-300 ease-smooth",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <p className="pb-6 pr-11 text-[16.5px] text-ink-soft">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export function Faq() {
  return (
    <section id="faq" className={sectionY} aria-labelledby="faq-heading">
      <Container>
        <SectionHeading
          center
          headingId="faq-heading"
          eyebrow="Questions, answered"
          title="Frequently asked questions"
        />
        <div className="mx-auto max-w-[800px]">
          {FAQ_ITEMS.map((item, i) => (
            <FaqItem key={item.question} {...item} defaultOpen={i === 0} />
          ))}
        </div>
      </Container>
    </section>
  );
}
