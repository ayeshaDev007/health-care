import { Lock, Sparkles, CalendarDays, Check, type LucideIcon } from "lucide-react";
import { cn, container, PlaceholderFlag } from "./ui";

const ITEMS: { icon: LucideIcon; label: string; flag?: string }[] = [
  { icon: Lock, label: "HIPAA-compliant & confidential" },
  { icon: Sparkles, label: "Whole-person, integrative care" },
  { icon: CalendarDays, label: "Flexible online & in-person scheduling" },
  { icon: Check, label: "Insurance & self-pay", flag: "verify" },
];

export function TrustStrip() {
  return (
    <div className="border-y border-line bg-sand2">
      <div
        className={cn(
          container,
          "flex flex-wrap items-center justify-between gap-x-9 gap-y-[18px] py-[22px]"
        )}
      >
        {ITEMS.map(({ icon: Icon, label, flag }) => (
          <div
            key={label}
            className="flex items-center gap-[11px] text-[15px] font-semibold text-ink-soft"
          >
            <Icon className="size-5 shrink-0 text-brand" aria-hidden="true" />
            {label}
            {flag && <PlaceholderFlag className="ml-1">{flag}</PlaceholderFlag>}
          </div>
        ))}
      </div>
    </div>
  );
}
