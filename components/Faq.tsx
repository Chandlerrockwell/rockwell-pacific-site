const PORTAL_URL = "https://rockwellpmgllc.appfolio.com/connect";

type QA = { q: string; a: string };

const faqs: QA[] = [
  {
    q: "How do I pay rent online?",
    a: "Pay rent through the secure resident portal. You can set up autopay or make a one-time payment using ACH, debit, or credit. Log in any time from the Pay Rent button on this site.",
  },
  {
    q: "How do I submit a maintenance request?",
    a: "Submit a maintenance request any time through the resident portal. You can attach photos and track the status and history of each request from your account.",
  },
  {
    q: "What areas of Los Angeles do you manage?",
    a: "Rockwell Pacific Management manages multifamily homes across Los Angeles, including South Los Angeles, Inglewood, and Pico-Robertson.",
  },
  {
    q: "Do you have any apartments available now?",
    a: "Current vacancies appear in the Vacancies section of this site and update automatically as units become available. You can view details and apply through our online portal.",
  },
  {
    q: "How do I apply for a unit?",
    a: "Browse current listings in the Vacancies section, then apply directly through the online portal. Applications and tours are handled there.",
  },
  {
    q: "I own a rental property. Can Rockwell Pacific manage it?",
    a: "Yes. We take on multifamily properties across Los Angeles and handle leasing, rent collection, maintenance, and resident communication. Reach out through the Contact section to start a conversation.",
  },
  {
    q: "How quickly does your team respond?",
    a: "Our property managers respond to residents and owners within one business day.",
  },
  {
    q: "What kinds of properties do you manage?",
    a: "We manage multifamily homes, from Spanish Colonial and bungalow courts to mid-century courtyard buildings and duplexes.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a,
    },
  })),
};

export function Faq() {
  return (
    <section id="faq" className="relative bg-bone py-28 md:py-36 px-6 md:px-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 max-w-2xl">
          <div className="text-[11px] tracking-[0.4em] text-pacific mb-6 flex items-center gap-4">
            <span className="w-8 h-px bg-pacific" />
            GOOD TO KNOW
          </div>
          <h2 className="font-serif text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.1] text-ink font-light">
            Questions,
            <br />
            <span className="italic">answered.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {faqs.map((f) => (
            <div key={f.q}>
              <h3 className="font-serif text-xl text-ink mb-3 font-normal">
                {f.q}
              </h3>
              <p className="text-ink/70 leading-relaxed text-[15px]">{f.a}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <a
            href={PORTAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-[12px] tracking-[0.15em] uppercase text-ink border-b border-ink/30 pb-1 hover:border-pacific hover:text-pacific transition-colors"
          >
            Open the resident portal
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
