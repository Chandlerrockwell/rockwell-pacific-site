const points = [
  {
    label: "Leasing & marketing",
    body: "We post vacancies across the major rental sites, screen applicants, and place qualified residents quickly to reduce vacancy.",
  },
  {
    label: "Rent & accounting",
    body: "Online rent collection, owner statements, and transparent reporting so you always know where things stand.",
  },
  {
    label: "Maintenance & care",
    body: "Coordinated repairs with trusted vendors, handled promptly so your building and your residents are well looked after.",
  },
];

export function Owners() {
  return (
    <section id="owners" className="relative bg-ink text-bone py-28 md:py-36 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16">
          <div className="text-[11px] tracking-[0.4em] text-pacific-mist mb-6 flex items-center gap-4">
            <span className="w-8 h-px bg-pacific-mist" />
            FOR PROPERTY OWNERS
          </div>
          <h2 className="font-serif text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.1] font-light">
            Management that protects
            <br />
            <span className="italic text-pacific-mist">your investment.</span>
          </h2>
          <p className="text-bone/70 leading-relaxed mt-8 text-[15px] max-w-lg">
            Rockwell Pacific manages multifamily properties across Los Angeles
            with responsive communication and steady, hands-on care. If you own
            a building and want a partner who treats it like their own, we would
            be glad to talk.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-bone/10 mb-12">
          {points.map((p) => (
            <div key={p.label} className="bg-ink p-10 md:p-12">
              <h3 className="font-serif text-2xl mb-4 font-normal">{p.label}</h3>
              <p className="text-bone/70 leading-relaxed text-[15px]">{p.body}</p>
            </div>
          ))}
        </div>

        <a
          href="#contact"
          className="inline-flex items-center gap-3 bg-bone text-ink px-7 py-4 text-[12px] tracking-[0.2em] uppercase hover:bg-pacific hover:text-bone transition-colors"
        >
          Talk to our team
          <span>→</span>
        </a>
      </div>
    </section>
  );
}
