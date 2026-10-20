import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Footer } from "@/components/Footer";
import { VacancyCard } from "@/components/VacancyCard";
import { getListings } from "@/lib/appfolio";
import { LEASING_PHONE, LEASING_PHONE_TEL, LEASING_EMAIL, SITE_URL } from "@/lib/site";

export const revalidate = 900;

export const metadata: Metadata = {
  title: "Apartments for Rent in Los Angeles | Rockwell Pacific Management",
  description:
    "Current apartments for rent from Rockwell Pacific Management in Pico-Robertson, South Los Angeles and Inglewood. Renovated units, upfront pricing, and professional local management.",
  alternates: { canonical: "/vacancies" },
  openGraph: {
    title: "Apartments for Rent in Los Angeles | Rockwell Pacific Management",
    description:
      "Current apartments for rent in Pico-Robertson, South Los Angeles and Inglewood.",
    url: `${SITE_URL}/vacancies`,
    type: "website",
  },
};

export default async function VacanciesPage() {
  const listings = await getListings();

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Apartments for rent from Rockwell Pacific Management",
    itemListElement: listings.map((l, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE_URL}/vacancies/${l.slug}`,
      name: l.title,
    })),
  };

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Vacancies", item: `${SITE_URL}/vacancies` },
    ],
  };

  return (
    <main className="relative">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <PageHero
        eyebrow="VACANCIES"
        titleTop="Apartments for rent"
        titleItalic="in Los Angeles."
        subtitle="Renovated homes in Pico-Robertson, South Los Angeles and Inglewood, professionally managed by Rockwell Pacific Management."
      />

      <section className="bg-sand py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {listings.length > 0 ? (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {listings.map((l) => (
                <VacancyCard key={l.id} listing={l} />
              ))}
            </div>
          ) : (
            <p className="text-ink/70 text-[16px] max-w-xl">
              We have no vacancies at the moment. Check back soon, or contact us
              to join our interest list.
            </p>
          )}

          <div className="mt-16 max-w-xl text-ink/70 text-[15px] leading-relaxed">
            <p>
              Questions about a home or want to schedule a tour? Call{" "}
              <a className="text-pacific underline" href={`tel:${LEASING_PHONE_TEL}`}>
                {LEASING_PHONE}
              </a>{" "}
              or email{" "}
              <a className="text-pacific underline" href={`mailto:${LEASING_EMAIL}`}>
                {LEASING_EMAIL}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
