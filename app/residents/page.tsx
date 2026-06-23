import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Footer } from "@/components/Footer";

const PORTAL_URL = "https://rockwellpmgllc.appfolio.com/connect";

export const metadata: Metadata = {
  title: "Residents | Pay Rent & Request Maintenance | Rockwell Pacific Management",
  description:
    "Current residents of Rockwell Pacific Management can pay rent online, submit maintenance requests, and reach our Los Angeles property management team through the secure resident portal.",
  alternates: { canonical: "/residents" },
};

const cards = [
  {
    label: "Pay rent online",
    body: "Set up autopay or make a one-time payment through the secure resident portal. ACH, debit, and credit are accepted, and your payment history stays in one place.",
    cta: "Pay rent",
    href: PORTAL_URL,
  },
  {
    label: "Request maintenance",
    body: "Submit a service request any time of day. Add photos so our team understands the issue, then track the status and history of every request from your account.",
    cta: "Submit a request",
    href: PORTAL_URL,
  },
  {
    label: "Manage your account",
    body: "Update your contact details, review documents, and stay current on your lease through the same portal you use for rent and maintenance.",
    cta: "Open the portal",
    href: PORTAL_URL,
  },
];

export default function ResidentsPage() {
  return (
    <main className="relative">
      <PageHero
        eyebrow="FOR RESIDENTS"
        titleTop="Everything you need,"
        titleItalic="in one quiet place."
        subtitle="Rent, maintenance, and account details for residents across our Los Angeles communities, all handled through one secure portal."
      />

      <section className="bg-bone py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-ink/10">
            {cards.map((c) => (
              <div key={c.label} className="bg-bone p-10 md:p-12">
                <h2 className="font-serif text-2xl text-ink mb-4 font-normal">{c.label}</h2>
                <p className="text-ink/70 leading-relaxed mb-8 text-[15px]">{c.body}</p>
                <a
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[12px] tracking-[0.15em] uppercase text-ink border-b border-ink/30 pb-1 hover:border-pacific hover:text-pacific transition-colors"
                >
                  {c.cta}
                  <span>→</span>
                </a>
              </div>
            ))}
          </div>

          <div className="mt-20 max-w-2xl">
            <h2 className="font-serif text-[clamp(1.75rem,3.5vw,2.5rem)] leading-[1.15] text-ink font-light mb-6">
              Questions about your home?
            </h2>
            <p className="text-ink/70 leading-relaxed text-[15px] mb-8">
              Our property managers respond to residents within one business day.
              You can find quick answers on our FAQ, or reach out any time and we
              will be glad to help.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/#faq"
                className="inline-flex items-center gap-3 border border-ink/30 text-ink px-7 py-4 text-[12px] tracking-[0.2em] uppercase hover:bg-ink hover:text-bone transition-colors"
              >
                Read the FAQ
              </a>
              <a
                href="/#contact"
                className="inline-flex items-center gap-3 bg-ink text-bone px-7 py-4 text-[12px] tracking-[0.2em] uppercase hover:bg-pacific transition-colors"
              >
                Contact our team
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
