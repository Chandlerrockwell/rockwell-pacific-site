/**
 * Vacancies section.
 *
 * Goal: units you post in AppFolio show up here automatically as available.
 *
 * AppFolio supports this two ways. The official, most reliable method is the
 * AppFolio "Property Listing Widget":
 *   AppFolio  →  Settings  →  (Online / Websites)  →  Listing Widget / "Post to your website"
 * Copy the snippet AppFolio gives you and paste it where marked below.
 *
 * Until that snippet is added, this falls back to embedding your live AppFolio
 * listings page directly, so current vacancies still appear and update on their
 * own. The "View all vacancies" button always works as a guaranteed path.
 */

const LISTINGS_URL = "https://rockwellpmg.appfolio.com/listings";

export function Vacancies() {
  return (
    <section
      id="vacancies"
      className="relative bg-sand py-28 md:py-36 px-6 md:px-12 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-12">
          <div className="text-[11px] tracking-[0.4em] text-pacific mb-6 flex items-center gap-4">
            <span className="w-8 h-px bg-pacific" />
            LOOKING FOR A HOME
          </div>
          <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.1] text-ink font-light mb-6">
            See what&apos;s
            <br />
            <span className="italic">available now.</span>
          </h2>
          <p className="text-ink/70 leading-relaxed text-[15px] max-w-md">
            Browse current vacancies across our Los Angeles portfolio. Listings
            update automatically as units become available — applications and
            tours are handled directly through our resident portal.
          </p>
        </div>

        {/* ===== LIVE VACANCIES ===================================================
            To use AppFolio's official widget, replace the <iframe> below with the
            snippet from AppFolio (Settings → Online/Websites → Listing Widget).
            ====================================================================== */}
        <div className="bg-bone border border-ink/10 shadow-sm">
          <iframe
            src={LISTINGS_URL}
            title="Current available units — Rockwell Pacific Management"
            className="w-full h-[720px] md:h-[820px] border-0"
            loading="lazy"
          />
        </div>

        <div className="mt-8">
          <a
            href={LISTINGS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-ink text-bone px-7 py-4 text-[12px] tracking-[0.2em] uppercase hover:bg-pacific transition-colors"
          >
            View all vacancies &amp; apply
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
