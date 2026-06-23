import type { MetadataRoute } from "next";

const SITE_URL = "https://www.rockwellpacificmanagement.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes = [
    { path: "/", priority: 1, changeFrequency: "weekly" as const },
    { path: "/residents", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/owners", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/areas/south-los-angeles", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/areas/inglewood", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/areas/pico-robertson", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/#vacancies", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/#faq", priority: 0.6, changeFrequency: "monthly" as const },
  ];

  return routes.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
