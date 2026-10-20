/**
 * Vacancies section on the homepage.
 *
 * Renders every unit marked "Posted to Website" in AppFolio as real,
 * crawlable HTML (see lib/appfolio.ts). Each card links to its own
 * /vacancies/<slug> page with full details, photos and schema.org markup.
 * Posting or unposting in AppFolio updates the site automatically within
 * about 15 minutes; no site edits needed.
 */
import { getListings } from "@/lib/appfolio";
import { VacancyCard } from "@/components/VacancyCard";

export async function Vacancies() {
  const listings = await getListings();

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
            Current apartments for rent across our Los Angeles portfolio.
            Listings update automatically as units become available.
          </p>
        </div>

        {listings.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {listings.map((l) => (
              <VacancyCard key={l.id} listing={l} />
            ))}
          </div>
        ) : (
          <p className="text-ink/60 text-[15px] max-w-xl">
            We have no vacancies at the moment. Check back soon, or reach out
            through Contact to join our interest list.
          </p>
        )}

        <div className="mt-12">
          <a
            href="/vacancies"
            className="inline-flex items-center gap-3 bg-ink text-bone px-7 py-4 text-[12px] tracking-[0.2em] uppercase hover:bg-pacific transition-colors"
          >
            View all vacancies
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
