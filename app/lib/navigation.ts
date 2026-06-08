export interface NavItem {
  /** The in-page section id this link targets (without the leading #). */
  id: string;
  href: string;
  label: string;
}

/** Primary in-page navigation. `id` matches the corresponding <section id="..."> */
export const NAV_ITEMS: NavItem[] = [
  { id: "services", href: "#services", label: "Services" },
  { id: "approach", href: "#approach", label: "Our Approach" },
  { id: "how", href: "#how", label: "How It Works" },
  { id: "faq", href: "#faq", label: "FAQ" },
];

export const PHONE_DISPLAY = "(000) 000-0000";
export const PHONE_HREF = "tel:+10000000000";
export const BOOKING_HREF = "#contact";
