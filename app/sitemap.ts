import type { MetadataRoute } from "next";
import { getListings } from "@/lib/appfolio";
import { SITE_URL } from "@/lib/site";

export const revalidate = 900;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date();

  const routes = [
    { path: "/", priority: 1, changeFrequency: "weekly" as const },
    { path: "/vacancies", priority: 0.9, changeFrequency: "daily" as const },
    { path: "/residents", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/owners", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/areas/south-los-angeles", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/areas/inglewood", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/areas/pico-robertson", priority: 0.8, changeFrequency: "monthly" as const },
  ];

  const listings = await getListings();

  return [
    ...routes.map((r) => ({
      url: `${SITE_URL}${r.path}`,
      lastModified,
      changeFrequency: r.changeFrequency,
      priority: r.priority,
    })),
    ...listings.map((l) => ({
      url: `${SITE_URL}/vacancies/${l.slug}`,
      lastModified,
      changeFrequency: "daily" as const,
      priority: 0.8,
      images: l.image ? [l.image] : undefined,
    })),
  ];
}
