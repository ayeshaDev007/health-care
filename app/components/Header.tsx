"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type MouseEvent,
} from "react";
import { Leaf, Phone, Menu, X } from "lucide-react";
import {
  NAV_ITEMS,
  PHONE_DISPLAY,
  PHONE_HREF,
  BOOKING_HREF,
} from "../lib/navigation";
import { btnPrimary, cn, container } from "./ui";

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])';

/**
 * Tracks which in-page section is currently in view so the matching nav link
 * can be highlighted. Uses IntersectionObserver, with a bottom-of-page
 * fallback so the last section reliably activates when the user scrolls to
 * the very end.
 */
function useScrollSpy(ids: string[]): string | null {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let raf = 0;

    const compute = () => {
      raf = 0;
      // Activation line sits a little below the sticky header.
      const line = 120;

      // Walk sections in document order; the active one is the last whose
      // top edge has scrolled above the line. This is robust even when a
      // very tall previous section is mostly off-screen.
      let current: string | null = null;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top - line <= 0) current = id;
      }

      // At the very bottom of the page, force the final section active —
      // its top edge may never reach the line on short last sections.
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
      if (atBottom) current = ids[ids.length - 1];

      setActive(current);
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(compute);
    };

    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [ids]);

  return active;
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const activeId = useScrollSpy(NAV_ITEMS.map((item) => item.id));

  const drawerRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const closeDrawer = useCallback(() => setOpen(false), []);

  // Sticky-header shadow on scroll.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the drawer automatically once the viewport grows to desktop size.
  useEffect(() => {
    const mql = window.matchMedia("(min-width: 1024px)");
    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) setOpen(false);
    };
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  // Drawer side effects: body scroll-lock, Escape to close, focus trap,
  // initial focus, and focus restoration on close.
  useEffect(() => {
    if (!open) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    const drawer = drawerRef.current;
    const focusables = drawer
      ? Array.from(
          drawer.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
        ).filter((el) => el.offsetParent !== null)
      : [];
    focusables[0]?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeDrawer();
        return;
      }
      if (event.key !== "Tab" || focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = overflow;
      // Return focus to the hamburger (or wherever it was) for keyboard users.
      const restoreTo = toggleRef.current ?? previouslyFocused;
      restoreTo?.focus?.();
    };
  }, [open, closeDrawer]);

  // Smooth-scroll handler for in-page links. Falls back to the native hash
  // jump if smooth scrolling isn't possible, and respects reduced-motion.
  const handleNavClick = useCallback(
    (event: MouseEvent<HTMLAnchorElement>, href: string) => {
      if (!href.startsWith("#")) return;
      const target = document.getElementById(href.slice(1));
      if (!target) return; // let the browser handle a missing target

      event.preventDefault();
      setOpen(false);

      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      target.scrollIntoView({
        behavior: prefersReduced ? "auto" : "smooth",
        block: "start",
      });
      // Keep the URL and accessibility tree in sync without a second jump.
      history.replaceState(null, "", href);
      target.setAttribute("tabindex", "-1");
      target.focus({ preventScroll: true });
    },
    []
  );

  const navLinkClass = (isActive: boolean) =>
    cn(
      "relative py-1 text-[15.5px] font-semibold transition-colors hover:text-brand",
      isActive
        ? "text-brand after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-brand"
        : "text-ink-soft"
    );

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 border-b border-line backdrop-blur-[14px] backdrop-saturate-[1.8] transition-[box-shadow,background-color] duration-300",
          scrolled
            ? "bg-sand/95 shadow-[0_6px_24px_rgba(27,39,35,0.06)]"
            : "bg-sand/80"
        )}
      >
        <div className={cn(container, "flex h-[74px] items-center justify-between gap-[18px]")}>
          <a
            href="#top"
            className="flex shrink-0 items-center gap-[11px] font-serif text-[22px] font-semibold tracking-[-0.01em]"
            aria-label="Synergy Wellness Centers home"
            onClick={(e) => handleNavClick(e, "#top")}
          >
            <span className="grid size-[34px] shrink-0 place-items-center rounded-[9px] bg-brand text-white">
              <Leaf className="size-[19px]" aria-hidden="true" />
            </span>
            Synergy Wellness
          </a>

          <nav className="hidden items-center gap-[30px] min-[1024px]:flex" aria-label="Primary">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={navLinkClass(activeId === item.id)}
                aria-current={activeId === item.id ? "true" : undefined}
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-[14px] min-[1024px]:gap-[18px]">
            <a
              href={PHONE_HREF}
              className="hidden items-center gap-[7px] text-[15.5px] font-bold text-ink min-[1024px]:inline-flex"
            >
              <Phone className="size-4 text-brand" aria-hidden="true" />
              {PHONE_DISPLAY}
            </a>
            {/* CTA hidden below 539px to avoid crowding the hamburger;
                the booking action also lives in the hero and the drawer.
                A max-width variant is required here because btnPrimary
                already sets `inline-flex`, which would otherwise win over a
                bare `hidden`. */}
            <a
              href={BOOKING_HREF}
              className={cn(btnPrimary, "max-[538px]:hidden")}
              onClick={(e) => handleNavClick(e, BOOKING_HREF)}
            >
              Book a free screening
            </a>
            <button
              ref={toggleRef}
              type="button"
              className="grid size-[44px] place-items-center rounded-[11px] border border-line bg-paper/40 text-ink transition-colors hover:border-brand-soft hover:bg-sage hover:text-brand min-[1024px]:hidden"
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-drawer"
              onClick={() => setOpen(true)}
            >
              <Menu className="size-[22px]" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {/* Backdrop — click to dismiss */}
      <div
        className={cn(
          "fixed inset-0 z-[59] bg-ink/40 transition-[opacity,visibility] duration-300 min-[1024px]:hidden",
          open ? "visible opacity-100" : "invisible opacity-0"
        )}
        onClick={closeDrawer}
        aria-hidden="true"
      />

      {/* Mobile drawer */}
      <div
        ref={drawerRef}
        id="mobile-drawer"
        className={cn(
          "fixed inset-y-0 right-0 z-[60] flex w-[min(86vw,360px)] flex-col overflow-y-auto bg-sand p-6 shadow-[-10px_0_40px_rgba(27,39,35,0.16)] transition-transform duration-300 ease-smooth min-[1024px]:hidden",
          open ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        aria-hidden={!open}
        inert={!open}
      >
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-[11px] font-serif text-[22px] font-semibold">
            <span className="grid size-[34px] shrink-0 place-items-center rounded-[9px] bg-brand text-white">
              <Leaf className="size-[19px]" aria-hidden="true" />
            </span>
            Synergy
          </span>
          <button
            type="button"
            className="p-1 text-ink"
            aria-label="Close menu"
            onClick={closeDrawer}
          >
            <X className="size-7" aria-hidden="true" />
          </button>
        </div>

        <nav className="mt-9 flex flex-col" aria-label="Mobile">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={cn(
                "border-b border-line py-[13px] font-serif text-[27px]",
                activeId === item.id ? "text-brand" : "text-ink"
              )}
              aria-current={activeId === item.id ? "true" : undefined}
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={BOOKING_HREF}
          className={cn(btnPrimary, "mt-[30px] w-full")}
          onClick={(e) => handleNavClick(e, BOOKING_HREF)}
        >
          Book a free screening
        </a>
        <a
          href={PHONE_HREF}
          className="mt-[22px] inline-flex items-center gap-2 font-bold text-brand"
        >
          <Phone className="size-[17px]" aria-hidden="true" />
          {PHONE_DISPLAY}
        </a>
      </div>
    </>
  );
}
