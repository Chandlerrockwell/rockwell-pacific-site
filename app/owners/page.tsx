import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Property Management for Owners in Los Angeles | Rockwell Pacific Management",
  description:
    "Rockwell Pacific Management helps Los Angeles owners of multifamily and small residential properties with leasing, rent collection, maintenance, and transparent reporting. Talk to our team about managing your building.",
  alternates: { canonical: "/owners" },
};

const services = [
  {
    label: "Leasing and tenant placement",
    body: "We market your vacancies across the major rental sites, screen applicants carefully, and place qualified residents quickly to reduce vacancy and protect your income.",
  },
  {
    label: "Rent collection and reporting",
    body: "Residents pay online, and you receive clear owner statements. You always know what is coming in, what is going out, and how your property is performing.",
  },
  {
    label: "Maintenance and upkeep",
    body: "We coordinate repairs with trusted vendors and handle issues promptly, keeping your building in good condition and your residents well cared for.",
  },
  {
    label: "Communication you can count on",
    body: "One point of contact, responsive answers within one business day, and steady, hands-on attention to the details that keep a property running smoothly.",
  },
];

const areas = [
  { name: "South Los Angeles", href: "/areas/south-los-angeles" },
  { name: "Inglewood", href: "/areas/inglewood" },
  { name: "Pico-Robertson", href: "/areas/pico-robertson" },
];

export default function OwnersPage() {
  return (
    <main className="relative">
      <PageHero
        eyebrow="FOR PROPERTY OWNERS"
        titleTop="Management that protects"
        titleItalic="your investment."
        subtitle="Hands-on management of multifamily and small residential properties across Los Angeles, from a team that treats every building like its own."
      />

      <section className="bg-bone py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-16">
            <h2 className="font-serif text-[clamp(1.75rem,3.5vw,2.5rem)] leading-[1.15] text-ink font-light mb-6">
              A partner for the long term
            </h2>
            <p className="text-ink/70 leading-relaxed text-[15px]">
              Owning rental property should not mean fielding maintenance calls
              at midnight or chasing late rent. Rockwell Pacific handles the
              day-to-day so your property stays well run and your residents stay
              happy, while you stay informed without the headaches.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ink/10 mb-20">
            {services.map((s) => (
              <div key={s.label} className="bg-bone p-10 md:p-12">
                <h3 className="font-serif text-2xl text-ink mb-4 font-normal">{s.label}</h3>
                <p className="text-ink/70 leading-relaxed text-[15px]">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="max-w-2xl mb-12">
            <h2 className="font-serif text-[clamp(1.75rem,3.5vw,2.5rem)] leading-[1.15] text-ink font-light mb-6">
              Where we work
            </h2>
            <p className="text-ink/70 leading-relaxed text-[15px] mb-6">
              We manage multifamily homes across Los Angeles, with deep
              familiarity in several neighborhoods:
            </p>
            <div className="flex flex-wrap gap-3">
              {areas.map((a) => (
                <a
                  key={a.href}
                  href={a.href}
                  className="inline-flex items-center gap-2 border border-ink/20 text-ink px-5 py-2.5 text-[13px] hover:border-pacific hover:text-pacific transition-colors"
                >
                  {a.name}
                </a>
              ))}
            </div>
          </div>

          <a
            href="/#contact"
            className="inline-flex items-center gap-3 bg-ink text-bone px-7 py-4 text-[12px] tracking-[0.2em] uppercase hover:bg-pacific transition-colors"
          >
            Talk to our team
            <span>→</span>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
