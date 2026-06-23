const services = [
  {
    label: "Pay rent online",
    body: "Set up autopay or make a one-time payment through the secure resident portal. ACH, debit, and credit accepted.",
    href: "https://rockwellpmgllc.appfolio.com/connect",
    cta: "Resident portal",
  },
  {
    label: "Maintenance requests",
    body: "Submit a service request anytime. Photos welcome. Track status and history through the portal.",
    href: "https://rockwellpmgllc.appfolio.com/connect",
    cta: "Submit a request",
  },
  {
    label: "Speak with our team",
    body: "Questions about your lease, building, or neighborhood? Our property managers respond within one business day.",
    href: "#contact",
    cta: "Get in touch",
  },
];

export function Services() {
  return (
    <section id="services" className="relative bg-bone py-28 md:py-36 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 max-w-2xl">
          <div className="text-[11px] tracking-[0.4em] text-pacific mb-6 flex items-center gap-4">
            <span className="w-8 h-px bg-pacific" />
            FOR RESIDENTS
          </div>
          <h2 className="font-serif text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.1] text-ink font-light">
            Everything you need,
            <br />
            <span className="italic">in one quiet place.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-ink/10">
          {services.map((s, i) => (
            <div
              key={s.label}
              className="bg-bone p-10 md:p-12 group hover:bg-sand transition-colors duration-500"
            >
              <div className="text-[10px] tracking-[0.3em] text-pacific mb-6">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="font-serif text-2xl text-ink mb-4 font-normal">
                {s.label}
              </h3>
              <p className="text-ink/70 leading-relaxed mb-8 text-[15px]">
                {s.body}
              </p>
              <a
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-2 text-[12px] tracking-[0.15em] uppercase text-ink border-b border-ink/30 pb-1 group-hover:border-pacific group-hover:text-pacific transition-colors"
              >
                {s.cta}
                <span>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
