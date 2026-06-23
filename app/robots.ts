import type { MetadataRoute } from "next";

const SITE_URL = "https://www.rockwellpacificmanagement.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // All crawlers, including AI answer engines (GPTBot, OAI-SearchBot,
        // PerplexityBot, ClaudeBot, Google-Extended, etc.) are allowed.
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
