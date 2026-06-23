import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Property Management in South Los Angeles | Rockwell Pacific Management",
  description:
    "Local property management for multifamily homes in South Los Angeles. Rockwell Pacific handles leasing, rent collection, and maintenance for owners, and supports residents with an online portal.",
  alternates: { canonical: "/areas/south-los-angeles" },
};

export default function SouthLosAngelesPage() {
  return (
    <main className="relative">
      <PageHero
        eyebrow="AREAS WE SERVE"
        titleTop="Property management in"
        titleItalic="South Los Angeles."
        subtitle="Care-driven management of multifamily and character homes across South Los Angeles."
      />

      <section className="bg-bone py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <p className="text-ink/75 leading-relaxed text-[17px] mb-6">
            Rockwell Pacific Management manages multifamily homes throughout
            South Los Angeles, including classic 1920s Spanish Colonial
            buildings and bungalow courts. We understand the character of these
            properties and the neighborhoods around them, and we manage them
            with the steady attention they deserve.
          </p>
          <p className="text-ink/70 leading-relaxed text-[15px] mb-12">
            For owners, that means responsive leasing, careful resident
            screening, online rent collection, and coordinated maintenance that
            protects the value of your building. For residents, it means a
            secure portal for paying rent and requesting repairs, and a team
            that answers within one business day.
          </p>

          <h2 className="font-serif text-[clamp(1.5rem,3vw,2.25rem)] text-ink font-light mb-5">
            Buildings we manage here
          </h2>
          <p className="text-ink/70 leading-relaxed text-[15px] mb-10">
            Our South Los Angeles portfolio includes 5371 Louis Place, a
            preserved Spanish Colonial with a brick-paved courtyard, and 1510 W
            52nd Street, a Spanish bungalow paired with a modernized rear unit.
            You can see more in our <a href="/#properties" className="underline decoration-ink/30 hover:text-pacific hover:decoration-pacific">portfolio</a>.
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
            <a href="/areas/inglewood" className="underline decoration-ink/30 hover:text-pacific hover:decoration-pacific">Inglewood</a>{" "}
            and{" "}
            <a href="/areas/pico-robertson" className="underline decoration-ink/30 hover:text-pacific hover:decoration-pacific">Pico-Robertson</a>.
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
