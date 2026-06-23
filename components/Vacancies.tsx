/**
 * Vacancies section.
 *
 * Embeds AppFolio's official Property Listing Widget so any unit marked
 * "Posted to Website" in AppFolio appears here automatically (updates within a
 * few minutes of posting in AppFolio — no site edits needed).
 *
 * The AppFolio embed relies on document.write, which doesn't play nicely with
 * React/Next. Rendering it inside an <iframe srcDoc> gives the widget a clean
 * standalone document to write into, exactly like a plain HTML page, so it
 * loads reliably. The "View all vacancies & apply" button remains as a fallback.
 */

const LISTINGS_URL = "https://rockwellpmgllc.appfolio.com/listings";

const WIDGET_SRCDOC = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<style>html,body{margin:0;padding:0;background:#f0ece2;font-family:'Inter Tight',system-ui,sans-serif;}</style>
</head>
<body>
<script type='text/javascript' charset='utf-8'>
  document.write(unescape("%3Cscript src='" + (('https:' == document.location.protocol) ? 'https:' : 'http:') + "//rockwellpmgllc.appfolio.com/javascripts/listing.js' type='text/javascript'%3E%3C/script%3E"));
</script>
<script type='text/javascript' charset='utf-8'>
  Appfolio.Listing({
    hostUrl: 'rockwellpmgllc.appfolio.com',
    themeColor: '#1f4a6b',
    height: '100%',
    width: '100%',
    defaultOrder: 'date_posted'
  });
</script>
</body>
</html>`;

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

        {/* Live AppFolio listings widget */}
        <div className="bg-bone border border-ink/10 shadow-sm overflow-hidden">
          <iframe
            title="Current available units — Rockwell Pacific Management"
            srcDoc={WIDGET_SRCDOC}
            className="w-full h-[760px] md:h-[860px] border-0"
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
