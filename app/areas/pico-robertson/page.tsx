import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Property Management in Pico-Robertson | Rockwell Pacific Management",
  description:
    "Local property management for multifamily homes in the Pico-Robertson area of Los Angeles. Rockwell Pacific handles leasing, rent collection, and maintenance for owners, with an online portal for residents.",
  alternates: { canonical: "/areas/pico-robertson" },
};

export default function PicoRobertsonPage() {
  return (
    <main className="relative">
      <PageHero
        eyebrow="AREAS WE SERVE"
        titleTop="Property management in"
        titleItalic="Pico-Robertson."
        subtitle="Dependable management of multifamily homes across the Pico-Robertson area and the wider Westside."
      />

      <section className="bg-bone py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <p className="text-ink/75 leading-relaxed text-[17px] mb-6">
            Pico-Robertson is a close-knit, centrally located Westside
            neighborhood, and Rockwell Pacific Management manages multifamily
            property here with steady, hands-on care. We keep buildings running
            well and residents well looked after, so owners can stay informed
            without the day-to-day demands.
          </p>
          <p className="text-ink/70 leading-relaxed text-[15px] mb-12">
            Owners receive responsive leasing, careful resident screening,
            online rent collection, and coordinated maintenance. Residents use a
            secure portal to pay rent and submit maintenance requests, backed by
            a team that responds within one business day.
          </p>

          <h2 className="font-serif text-[clamp(1.5rem,3vw,2.25rem)] text-ink font-light mb-5">
            Buildings we manage here
          </h2>
          <p className="text-ink/70 leading-relaxed text-[15px] mb-10">
            Our Pico-Robertson portfolio includes 1904 S Robertson Boulevard, a
            classic mid-century courtyard community set around a pool, with
            in-unit washer and dryer and air conditioning. You can see more in
            our <a href="/#properties" className="underline decoration-ink/30 hover:text-pacific hover:decoration-pacific">portfolio</a>.
          </p>

          <div className="flex flex-wrap gap-4 mb-16">
            <a href="/owners" className="inline-flex items-center gap-3 bg-ink text-bone px-7 py-4 text-[12px] tracking-[0.2em] uppercase hover:bg-pacific transition-colors">
              For owners
              <span>→</span>
            </a>
            <a href="/#vacancies" className="inline-flex items-center gap-3 border border-ink/30 text-ink px-7 py-4 text-[12px] tracking-[0.2em] uppercase hover:bg-ink hover:text-bone transition-colors">
              View vacancies
            </a>
          </div>

          <div className="text-[13px] text-ink/60">
            Also serving{" "}
            <a href="/areas/south-los-angeles" className="underline decoration-ink/30 hover:text-pacific hover:decoration-pacific">South Los Angeles</a>{" "}
            and{" "}
            <a href="/areas/inglewood" className="underline decoration-ink/30 hover:text-pacific hover:decoration-pacific">Inglewood</a>.
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
