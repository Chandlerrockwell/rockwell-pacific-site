import Image from "next/image";

/**
 * Vacancies section.
 *
 * Goal: units posted in AppFolio appear here as available.
 *
 * NOTE: AppFolio's listings page cannot be shown in an <iframe> — AppFolio
 * sends security headers (X-Frame-Options / CSP) that block framing. The
 * supported way to embed live, auto-updating listings on your own site is
 * AppFolio's official "Property Listing Widget":
 *   AppFolio → Settings → (Online / Websites) → Listing Widget / "Post to your website"
 * Paste that snippet where marked below to replace the link-out with a true
 * on-page feed. Until then, this links to your live AppFolio listings, which
 * already update automatically as you post units.
 */

const LISTINGS_URL = "https://rockwellpmg.appfolio.com/listings";

export function Vacancies() {
  return (
    <section
      id="vacancies"
      className="relative bg-sand py-28 md:py-36 px-6 md:px-12 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="text-[11px] tracking-[0.4em] text-pacific mb-6 flex items-center gap-4">
            <span className="w-8 h-px bg-pacific" />
            LOOKING FOR A HOME
          </div>
          <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.1] text-ink font-light mb-6">
            See what&apos;s
            <br />
            <span className="italic">available now.</span>
          </h2>
          <p className="text-ink/70 leading-relaxed mb-6 text-[15px] max-w-md">
            Browse current vacancies across our Los Angeles portfolio. Our live
            listings update automatically as units become available, and
            applications and tours are handled directly through the resident
            portal.
          </p>

          {/* ===== LIVE WIDGET GOES HERE ========================================
              Replace this button block with the AppFolio Property Listing
              Widget snippet to show units directly on this page.
              ==================================================================== */}
          <a
            href={LISTINGS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-ink text-bone px-7 py-4 text-[12px] tracking-[0.2em] uppercase hover:bg-pacific transition-colors"
          >
            View live vacancies &amp; apply
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
