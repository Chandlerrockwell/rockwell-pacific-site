import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import {
  displayAddress,
  displayTitle,
  getListing,
  getListings,
  listingHeadline,
  neighborhoodFor,
  streetOf,
  unitLabel,
  type ListingDetail,
} from "@/lib/appfolio";
import { COMPANY_NAME, LEASING_EMAIL, LEASING_PHONE, LEASING_PHONE_TEL, SITE_URL } from "@/lib/site";

export const revalidate = 900;
export const dynamicParams = true;

export async function generateStaticParams() {
  const listings = await getListings();
  return listings.map((l) => ({ slug: l.slug }));
}

function seoTitle(l: ListingDetail) {
  return `${listingHeadline(l)} in ${neighborhoodFor(l.address)} | ${l.rentLabel}/mo | ${streetOf(l.address)}`;
}

function seoDescription(l: ListingDetail) {
  const base = l.descriptionText.replace(/\s+/g, " ").trim();
  const lead = `${unitLabel(l) ? `${unitLabel(l)}: ` : ""}${l.bedBathLabel}${l.sqft ? `, ${l.sqft} sq ft` : ""} for rent at ${displayAddress(l)}. ${l.rentLabel}/mo, available ${l.available === "Now" ? "now" : l.available}.`;
  return `${lead} ${base}`.slice(0, 300).replace(/\s+\S*$/, "") + "...";
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const l = await getListing(params.slug);
  if (!l) return { title: "Listing not available | Rockwell Pacific Management", robots: { index: false } };
  const url = `${SITE_URL}/vacancies/${l.slug}`;
  return {
    title: seoTitle(l),
    description: seoDescription(l),
    alternates: { canonical: `/vacancies/${l.slug}` },
    openGraph: {
      title: seoTitle(l),
      description: seoDescription(l),
      url,
      type: "website",
      images: l.photos.slice(0, 4).map((p) => ({ url: p, alt: `${l.title} – ${l.address}` })),
    },
    twitter: { card: "summary_large_image", title: seoTitle(l), description: seoDescription(l), images: l.photos.slice(0, 1) },
  };
}

function listingSchema(l: ListingDetail) {
  const [, city = "Los Angeles", stateZip = "CA"] = l.address.split(",").map((s) => s.trim());
  const street = streetOf(l.address);
  const [region, postal] = stateZip.split(" ");
  const url = `${SITE_URL}/vacancies/${l.slug}`;
  const apartment = {
    "@type": "Apartment",
    name: unitLabel(l) ? `${unitLabel(l)}, ${street}` : l.title,
    description: l.descriptionText,
    url,
    image: l.photos,
    address: {
      "@type": "PostalAddress",
      streetAddress: l.unit ? `${street}, Unit ${l.unit}` : street,
      addressLocality: city,
      addressRegion: region || "CA",
      postalCode: postal,
      addressCountry: "US",
    },
    containedInPlace: { "@type": "Place", name: neighborhoodFor(l.address) },
    ...(l.beds != null ? { numberOfBedrooms: l.beds, numberOfRooms: l.beds + 1 } : {}),
    ...(l.baths != null ? { numberOfBathroomsTotal: l.baths } : {}),
    ...(l.sqft ? { floorSize: { "@type": "QuantitativeValue", value: l.sqft, unitCode: "FTK" } } : {}),
    petsAllowed: !l.petPolicy.some((p) => /not allowed/i.test(p)),
  };
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "RealEstateListing",
        "@id": `${url}#listing`,
        name: l.title,
        url,
        image: l.photos,
        description: l.descriptionText,
        about: apartment,
        offers: {
          "@type": "Offer",
          url,
          ...(l.rent ? { price: l.rent, priceCurrency: "USD" } : {}),
          ...(l.rent
            ? {
                priceSpecification: {
                  "@type": "UnitPriceSpecification",
                  price: l.rent,
                  priceCurrency: "USD",
                  unitCode: "MON",
                  referenceQuantity: { "@type": "QuantitativeValue", value: 1, unitCode: "MON" },
                },
              }
            : {}),
          availability: "https://schema.org/InStock",
          businessFunction: "http://purl.org/goodrelations/v1#LeaseOut",
          offeredBy: {
            "@type": "RealEstateAgent",
            name: COMPANY_NAME,
            url: SITE_URL,
            telephone: LEASING_PHONE_TEL,
            email: LEASING_EMAIL,
          },
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Vacancies", item: `${SITE_URL}/vacancies` },
          { "@type": "ListItem", position: 3, name: unitLabel(l) ? `${unitLabel(l)}, ${street}` : l.title, item: url },
        ],
      },
    ],
  };
}

export default async function VacancyPage({ params }: { params: { slug: string } }) {
  const l = await getListing(params.slug);
  if (!l) notFound();
  if (l.slug !== params.slug) permanentRedirect(`/vacancies/${l.slug}`);

  const [hero, ...rest] = l.photos;

  return (
    <main className="relative bg-bone">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(listingSchema(l)) }} />
      <section className="relative bg-ink text-bone">
        <Nav />
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-40 pb-14 md:pt-48">
          <a href="/vacancies" className="text-[12px] tracking-[0.2em] uppercase text-bone/60 hover:text-bone">
            ← All vacancies
          </a>
          {unitLabel(l) ? (
            <p className="mt-6 text-[12px] tracking-[0.3em] uppercase text-bone/70">
              {unitLabel(l)} · {streetOf(l.address)}
            </p>
          ) : null}
          <h1 className={`${unitLabel(l) ? "mt-3" : "mt-6"} font-serif text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.1] font-light max-w-4xl`}>
            {displayTitle(l)}
          </h1>
          <p className="mt-5 text-bone/80 text-[16px]">
            {displayAddress(l)} · {l.bedBathLabel}
            {l.sqft ? ` · ${l.sqft.toLocaleString()} sq ft` : ""} ·{" "}
            {l.available === "Now" ? "Available now" : `Available ${l.available}`}
          </p>
          <p className="mt-4 font-serif text-[36px] leading-none">
            {l.rentLabel}
            <span className="text-[16px] text-bone/60 font-sans"> /month</span>
          </p>
        </div>
      </section>

      {hero ? (
        <section className="px-6 md:px-12 pt-10">
          <div className="max-w-7xl mx-auto">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={hero}
              alt={`${unitLabel(l) ? `${unitLabel(l)}, ` : ""}${l.bedBathLabel} apartment for rent at ${displayAddress(l)}, ${neighborhoodFor(l.address)}`}
              className="w-full max-h-[640px] object-cover"
            />
            {rest.length > 0 ? (
              <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                {rest.map((p, i) => (
                  <a key={p} href={p} target="_blank" rel="noopener noreferrer" className="block aspect-[4/3] overflow-hidden bg-ink/5">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p}
                      alt={`${l.title}, photo ${i + 2}`}
                      loading="lazy"
                      className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-500"
                    />
                  </a>
                ))}
              </div>
            ) : null}
          </div>
        </section>
      ) : null}

      <section className="px-6 md:px-12 py-16 md:py-20">
        <div className="max-w-7xl mx-auto grid gap-12 lg:grid-cols-[1fr_340px]">
          <article>
            <h2 className="font-serif text-[28px] text-ink mb-6">About this home</h2>
            <div className="text-ink/80 text-[16px] leading-relaxed whitespace-pre-line">{l.descriptionText}</div>
          </article>
          <aside className="bg-sand p-8 h-fit">
            <h2 className="text-[11px] tracking-[0.3em] uppercase text-pacific mb-5">Rental terms</h2>
            <ul className="space-y-2 text-ink/80 text-[15px] mb-8">
              {(l.rentalTerms.length ? l.rentalTerms : [`Rent: ${l.rentLabel}`]).map((t) => (
                <li key={t}>{t}</li>
              ))}
              {l.petPolicy.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <h2 className="text-[11px] tracking-[0.3em] uppercase text-pacific mb-4">Contact {COMPANY_NAME}</h2>
            <p className="text-ink/80 text-[15px] leading-relaxed mb-6">
              <a className="block hover:text-pacific" href={`tel:${LEASING_PHONE_TEL}`}>
                {LEASING_PHONE}
              </a>
              <a className="block hover:text-pacific" href={`mailto:${LEASING_EMAIL}?subject=${encodeURIComponent(`Inquiry: ${displayAddress(l)}`)}`}>
                {LEASING_EMAIL}
              </a>
            </p>
            <a
              href={`mailto:${LEASING_EMAIL}?subject=${encodeURIComponent(`Tour request: ${displayAddress(l)}`)}`}
              className="block text-center bg-ink text-bone px-6 py-4 text-[12px] tracking-[0.2em] uppercase hover:bg-pacific transition-colors"
            >
              Request a tour
            </a>
          </aside>
        </div>
      </section>
      <Footer />
    </main>
  );
}
