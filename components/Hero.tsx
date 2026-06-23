import Image from "next/image";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden bg-ink">
      {/* Hero image — the Crenshaw palm view, treated darkly */}
      <div className="absolute inset-0">
        <Image
          src="/photos/9132-crenshaw/interior/02-livingroom-bay-window.jpg"
          alt=""
          fill
          priority
          className="object-cover opacity-50"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/30 to-ink/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/60 via-transparent to-transparent" />
      </div>

      {/* Hero text */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-20">
        <div className="max-w-2xl">
          <div className="reveal reveal-delay-1 text-[11px] tracking-[0.4em] text-bone/70 mb-8 flex items-center gap-4">
            <span className="w-12 h-px bg-bone/40" />
            LOS ANGELES MULTIFAMILY
          </div>

          <h1 className="reveal reveal-delay-2 font-serif text-bone text-[clamp(2.75rem,7vw,5.5rem)] leading-[1.05] tracking-tight font-light">
            A calmer place
            <br />
            <span className="italic font-normal">to call home.</span>
          </h1>

          <p className="reveal reveal-delay-3 mt-8 text-bone/80 text-lg leading-relaxed max-w-lg font-light">
            Thoughtfully managed properties across Los Angeles. Responsive
            resident support, transparent communication, and homes maintained
            with care.
          </p>

          <div className="reveal reveal-delay-4 mt-12 flex flex-wrap gap-4">
            <a
              href="https://rockwellpmgllc.appfolio.com/connect"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-bone text-ink px-7 py-4 text-[12px] tracking-[0.2em] uppercase hover:bg-pacific hover:text-bone transition-colors"
            >
              Pay Rent
              <span className="text-base">→</span>
            </a>
            <a
              href="https://rockwellpmgllc.appfolio.com/connect"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border border-bone/40 text-bone px-7 py-4 text-[12px] tracking-[0.2em] uppercase hover:bg-bone hover:text-ink transition-colors"
            >
              Request Maintenance
            </a>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 reveal reveal-delay-4 flex flex-col items-center gap-3 text-bone/50">
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <span className="w-px h-10 bg-bone/30" />
      </div>
    </section>
  );
}
