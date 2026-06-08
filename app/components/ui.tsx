import type { ReactNode } from "react";

/** Tiny className joiner (avoids an extra clsx dependency). */
export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

/* ---------- layout container ----------
   Content is centered and capped at 1440px; section backgrounds remain
   full-bleed because they sit on the outer <section>, not the container. */
export const container = "mx-auto w-full max-w-[1440px] px-5 md:px-7";

/** Vertical rhythm for full sections (64px mobile / 92px desktop). */
export const sectionY = "py-16 md:py-[92px]";

export function Container({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return <div className={cn(container, className)}>{children}</div>;
}

/* ---------- buttons (links styled as buttons) ---------- */
export const btnBase =
  "inline-flex items-center justify-center gap-[9px] rounded-full font-sans font-bold text-base leading-none px-[26px] py-[14px] border-[1.5px] border-transparent whitespace-nowrap cursor-pointer transition-[transform,background-color,box-shadow,border-color] duration-200 ease-smooth";

export const btnPrimary = cn(
  btnBase,
  "bg-brand text-white shadow-[0_6px_18px_rgba(46,92,75,.28)] hover:bg-brand-dark hover:-translate-y-0.5 hover:shadow-[0_10px_26px_rgba(46,92,75,.34)]"
);

export const btnGhost = cn(
  btnBase,
  "bg-transparent text-brand-dark border-brand-soft hover:bg-sage hover:border-brand hover:-translate-y-0.5"
);

/* ---------- eyebrow label ---------- */
export function Eyebrow({
  children,
  light = false,
  className,
}: {
  children: ReactNode;
  light?: boolean;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-[9px] font-sans text-[13px] font-bold uppercase tracking-[0.14em]",
        light ? "text-[#bfe0cf]" : "text-brand",
        className
      )}
    >
      <span
        aria-hidden="true"
        className={cn("h-[1.5px] w-[22px]", light ? "bg-[#bfe0cf]" : "bg-accent")}
      />
      {children}
    </span>
  );
}

/* ---------- section heading block ---------- */
export function SectionHeading({
  eyebrow,
  title,
  description,
  headingId,
  center = false,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  headingId?: string;
  center?: boolean;
}) {
  return (
    <div className={cn("mb-13 max-w-[660px]", center && "mx-auto text-center")}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2
        id={headingId}
        className="mt-4 text-[clamp(30px,3.7vw,46px)]"
      >
        {title}
      </h2>
      {description && (
        <p className="mt-[18px] text-[18.5px] text-ink-soft">{description}</p>
      )}
    </div>
  );
}

/* ---------- placeholder flag (clearly-labeled stub content) ---------- */
export function PlaceholderFlag({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-[7px] rounded-full bg-accent-soft px-[11px] py-[5px] text-[11.5px] font-bold uppercase tracking-[0.06em] text-accent",
        className
      )}
    >
      {children}
    </span>
  );
}
