import Image from "next/image";

export function Vacancies() {
  return (
    <section id="vacancies" className="relative bg-sand py-28 md:py-36 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="text-[11px] tracking-[0.4em] text-pacific mb-6 flex items-center gap-4">
            <span className="w-8 h-px bg-pacific" />
            LOOKING FOR A HOME
          </div>
          <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.1] text-ink font-light mb-6">
            See what's
            <br />
            <span className="italic">available now.</span>
          </h2>
          <p className="text-ink/70 leading-relaxed mb-10 text-[15px] max-w-md">
            Browse current vacancies across our Los Angeles portfolio.
            Listings are updated as units become available — applications and
            tours are handled directly through our resident portal.
          </p>
          <a
            href="https://rockwellpmg.appfolio.com/listings"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-ink text-bone px-7 py-4 text-[12px] tracking-[0.2em] uppercase hover:bg-pacific transition-colors"
          >
            View vacancies
            <span>→</span>
          </a>
        </div>

        <div className="relative aspect-[4/5] lg:aspect-[3/4]">
          <Image
            src="/photos/1510-w-52nd/interior/unit-a/01-bedroom-staged-web.jpg"
            alt="Staged bedroom interior"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
