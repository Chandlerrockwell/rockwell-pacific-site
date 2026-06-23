import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Property Management in Inglewood | Rockwell Pacific Management",
  description:
    "Local property management for multifamily and residential homes in Inglewood. Rockwell Pacific handles leasing, rent collection, and maintenance for owners, with an online portal for residents.",
  alternates: { canonical: "/areas/inglewood" },
};

export default function InglewoodPage() {
  return (
    <main className="relative">
      <PageHero
        eyebrow="AREAS WE SERVE"
        titleTop="Property management in"
        titleItalic="Inglewood."
        subtitle="Attentive management of multifamily and residential homes across Inglewood."
      />

      <section className="bg-bone py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <p className="text-ink/75 leading-relaxed text-[17px] mb-6">
            Inglewood is one of the most dynamic parts of Los Angeles County,
            and Rockwell Pacific Management manages residential property here
            with the same care we bring to every building in our portfolio. We
            handle the day-to-day so owners can stay hands-off and residents
            feel at home.
          </p>
          <p className="text-ink/70 leading-relaxed text-[15px] mb-12">
            Owners get responsive leasing, careful resident screening, online
            rent collection, and coordinated maintenance with trusted vendors.
            Residents get a secure portal for paying rent and submitting
            maintenance requests, plus a team that responds within one business
            day.
          </p>

          <h2 className="font-serif text-[clamp(1.5rem,3vw,2.25rem)] text-ink font-light mb-5">
            Buildings we manage here
          </h2>
          <p className="text-ink/70 leading-relaxed text-[15px] mb-10">
            Our Inglewood portfolio includes 9132 Crenshaw Boulevard, a
            renovated mid-century duplex with crisp white stucco and oversized
            windows framing the Crenshaw palm canopy. You can see more in our{" "}
            <a href="/#properties" className="underline decoration-ink/30 hover:text-pacific hover:decoration-pacific">portfolio</a>.
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
            <a href="/areas/pico-robertson" className="underline decoration-ink/30 hover:text-pacific hover:decoration-pacific">Pico-Robertson</a>.
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
