import {
  Brain,
  Heart,
  Shield,
  Focus,
  HeartHandshake,
  Briefcase,
  Compass,
  Users,
  type LucideIcon,
} from "lucide-react";
import { cn, Container, SectionHeading, sectionY } from "./ui";

const CONDITIONS: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Brain,
    title: "Anxiety & stress",
    body: "Calm a racing mind, ease panic, and rebuild a sense of steadiness.",
  },
  {
    icon: Heart,
    title: "Depression & mood",
    body: "Move out of the fog and reconnect with energy, motivation, and meaning.",
  },
  {
    icon: Shield,
    title: "Trauma & PTSD",
    body: "Process difficult experiences safely with trauma-informed clinicians.",
  },
  {
    icon: Focus,
    title: "ADHD & focus",
    body: "Build structure, attention, and follow-through that actually fits your life.",
  },
  {
    icon: HeartHandshake,
    title: "Relationships & grief",
    body: "Navigate loss, transitions, and the relationships that shape your days.",
  },
  {
    icon: Briefcase,
    title: "Burnout & life balance",
    body: "Recover from chronic overwhelm and protect your energy going forward.",
  },
  {
    icon: Compass,
    title: "Self-discovery",
    body: "Understand your patterns and grow toward the life you want to live.",
  },
  {
    icon: Users,
    title: "Couples & family",
    body: "Strengthen communication and rebuild trust with the people closest to you.",
  },
];

export function Conditions() {
  return (
    <section id="services" className={sectionY} aria-labelledby="services-heading">
      <Container>
        <SectionHeading
          headingId="services-heading"
          eyebrow="What we help with"
          title={<>Support for what you&rsquo;re carrying right now</>}
          description="Whether something acute brought you here or you've been pushing through for years, our clinicians meet you where you are with a plan built around your goals."
        />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {CONDITIONS.map(({ icon: Icon, title, body }) => (
            <article
              key={title}
              className={cn(
                "rounded-card border border-line bg-paper px-6 py-[26px]",
                "transition-[transform,box-shadow,border-color] duration-300 ease-smooth",
                "hover:-translate-y-1 hover:border-brand-soft hover:shadow-float"
              )}
            >
              <span className="mb-4 grid size-[46px] place-items-center rounded-xl bg-sage text-brand">
                <Icon className="size-[23px]" aria-hidden="true" />
              </span>
              <h3 className="text-[21px]">{title}</h3>
              <p className="mt-2 text-[15px] text-ink-soft">{body}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
