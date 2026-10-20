/**
 * Server-side reader for Rockwell Pacific's public AppFolio listings.
 *
 * Every unit marked "Posted to Website" in AppFolio appears on
 * https://rockwellpmgllc.appfolio.com/listings. We fetch that page (and each
 * listing's detail page) on the server, so vacancies render as real HTML on
 * rockwellpacificmanagement.com: crawlable by search engines, with their own
 * URLs, metadata and schema.org markup. Results are cached and refreshed every
 * 15 minutes, so posting or unposting in AppFolio flows through automatically.
 */
import { parse, type HTMLElement } from "node-html-parser";

export const APPFOLIO_HOST = "https://rockwellpmgllc.appfolio.com";
export const LISTINGS_URL = `${APPFOLIO_HOST}/listings`;
const REVALIDATE_SECONDS = 900;

export type ListingSummary = {
  id: string; // AppFolio listing UUID
  slug: string; // SEO path segment, ends with the UUID
  title: string;
  address: string;
  rent: number | null;
  rentLabel: string;
  beds: number | null;
  baths: number | null;
  bedBathLabel: string;
  sqft: number | null;
  available: string; // "Now" or a date string, as AppFolio shows it
  image: string | null;
  appfolioUrl: string;
};

export type ListingDetail = ListingSummary & {
  descriptionHtml: string;
  descriptionText: string;
  photos: string[];
  rentalTerms: string[];
  petPolicy: string[];
};

const text = (el: HTMLElement | null | undefined) =>
  (el?.text ?? "").replace(/\s+/g, " ").trim();

const toNumber = (s: string) => {
  const n = parseFloat(s.replace(/[^0-9.]/g, ""));
  return Number.isFinite(n) ? n : null;
};

export function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

const UUID_RE = /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export function idFromSlug(slug: string) {
  return slug.match(UUID_RE)?.[0] ?? null;
}

function parseBedBath(label: string) {
  const beds = label.match(/([\d.]+)\s*bd/i);
  const baths = label.match(/([\d.]+)\s*ba/i);
  const studio = /studio/i.test(label);
  return {
    beds: studio ? 0 : beds ? parseFloat(beds[1]) : null,
    baths: baths ? parseFloat(baths[1]) : null,
  };
}

function absolute(url: string | undefined | null) {
  if (!url) return null;
  if (url.startsWith("//")) return `https:${url}`;
  if (url.startsWith("/")) return `${APPFOLIO_HOST}${url}`;
  return url;
}

function buildSlug(address: string, beds: number | null, id: string) {
  const street = address.split(",")[0] ?? address;
  const bedPart = beds === 0 ? "studio" : beds != null ? `${beds}-bed` : "";
  return [slugify(street), "los-angeles", bedPart, id].filter(Boolean).join("-");
}

async function fetchHtml(url: string) {
  const res = await fetch(url, {
    next: { revalidate: REVALIDATE_SECONDS },
    headers: { "User-Agent": "RockwellPacificSite/1.0 (+https://www.rockwellpacificmanagement.com)" },
  });
  if (!res.ok) throw new Error(`AppFolio ${res.status} for ${url}`);
  return res.text();
}

export function parseListingsPage(html: string): ListingSummary[] {
  const root = parse(html);
  return root.querySelectorAll(".js-listing-item").flatMap((item) => {
    const link = item.querySelector(".js-listing-title a") ?? item.querySelector("a[href*='/listings/detail/']");
    const href = link?.getAttribute("href") ?? "";
    const id = href.match(UUID_RE)?.[0] ?? href.split("/").pop() ?? "";
    if (!id) return [];

    const facts: Record<string, string> = {};
    item.querySelectorAll(".detail-box__item").forEach((row) => {
      facts[text(row.querySelector(".detail-box__label")).toLowerCase()] = text(row.querySelector(".detail-box__value"));
    });

    const title = text(link);
    const address = text(item.querySelector(".js-listing-address"));
    const rentLabel = facts["rent"] || text(item.querySelector(".js-listing-blurb-rent"));
    const bedBathLabel = facts["bed / bath"] || text(item.querySelector(".js-listing-blurb-bed-bath"));
    const { beds, baths } = parseBedBath(bedBathLabel);
    const img = item.querySelector(".js-listing-image");
    const available = facts["available"] || text(item.querySelector(".js-listing-available"));

    return [
      {
        id,
        slug: buildSlug(address, beds, id),
        title,
        address,
        rent: toNumber(rentLabel),
        rentLabel,
        beds,
        baths,
        bedBathLabel,
        sqft: facts["square feet"] ? toNumber(facts["square feet"]) : null,
        available: /^now$/i.test(available) ? "Now" : available,
        image: absolute(img?.getAttribute("data-original") ?? img?.getAttribute("src")),
        appfolioUrl: `${APPFOLIO_HOST}/listings/detail/${id}`,
      },
    ];
  });
}

export function parseDetailPage(html: string, summary: ListingSummary): ListingDetail {
  const root = parse(html);
  const desc = root.querySelector(".listing-detail__description");
  const descriptionHtml = (desc?.innerHTML ?? "").trim();
  const descriptionText = parse(
    descriptionHtml.replace(/\r?\n/g, " ").replace(/<br\s*\/?>/gi, "\n")
  )
    .text.split("\n")
    .map((line) => line.replace(/[ \t]+/g, " ").trim())
    .join("\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();

  const photos = Array.from(
    new Set(
      root
        .querySelectorAll("a.swipebox")
        .map((a) => absolute(a.getAttribute("href")))
        .filter((u): u is string => !!u)
    )
  );

  const rentalTerms = root.querySelectorAll(".js-show-rental-terms li").map((li) => text(li)).filter(Boolean);
  const petPolicy = root.querySelectorAll(".js-pet-policy-item").map((li) => text(li)).filter(Boolean);

  return {
    ...summary,
    descriptionHtml,
    descriptionText,
    photos: photos.length ? photos : summary.image ? [summary.image] : [],
    rentalTerms,
    petPolicy,
  };
}

export async function getListings(): Promise<ListingSummary[]> {
  try {
    return parseListingsPage(await fetchHtml(LISTINGS_URL));
  } catch (err) {
    console.error("Failed to load AppFolio listings", err);
    return [];
  }
}

export async function getListing(slugOrId: string): Promise<ListingDetail | null> {
  const id = idFromSlug(slugOrId) ?? slugOrId;
  const listings = await getListings();
  const summary = listings.find((l) => l.id === id);
  if (!summary) return null;
  try {
    return parseDetailPage(await fetchHtml(summary.appfolioUrl), summary);
  } catch (err) {
    console.error("Failed to load AppFolio listing detail", err);
    return parseDetailPage("", summary);
  }
}

/** Plain-language one-liner used in titles and meta descriptions. */
export function listingHeadline(l: ListingSummary) {
  const bed = l.beds === 0 ? "Studio" : l.beds != null ? `${l.beds} Bed` : "";
  const bath = l.baths != null ? `${l.baths} Bath` : "";
  const parts = [[bed, bath].filter(Boolean).join(" / "), "Apartment for Rent"].filter(Boolean);
  return parts.join(" ");
}

export function neighborhoodFor(address: string) {
  if (/robertson/i.test(address)) return "Pico-Robertson";
  if (/inglewood|crenshaw/i.test(address)) return "Inglewood";
  return "Los Angeles";
}
