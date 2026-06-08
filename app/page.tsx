import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { TrustStrip } from "./components/TrustStrip";
import { Conditions } from "./components/Conditions";
import { Services } from "./components/Services";
import { Approach } from "./components/Approach";
import { HowItWorks } from "./components/HowItWorks";
import { Testimonials } from "./components/Testimonials";
import { Faq } from "./components/Faq";
import { FinalCta } from "./components/FinalCta";
import { Footer } from "./components/Footer";
import { buildStructuredData } from "./lib/structured-data";
import Link from "next/link";

export default function Home() {
  const structuredData = buildStructuredData();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <Link
        href="#main"
        className="absolute left-3 top-[-120px] z-[100] rounded-b-[10px] bg-brand px-5 py-3 font-bold text-white transition-[top] duration-200 focus:top-0"
      >
        Skip to content
      </Link>

      <Header />

      <main id="main">
        <span id="top" aria-hidden="true" />
        <Hero />
        <TrustStrip />
        <Conditions />
        <Services />
        <Approach />
        <HowItWorks />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>

      <Footer />
    </>
  );
}
