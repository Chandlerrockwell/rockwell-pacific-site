import type { Metadata } from "next";
import { Cormorant_Garamond, Inter_Tight } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter-tight",
  display: "swap",
});

const SITE_URL = "https://www.rockwellpacificmanagement.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Rockwell Pacific Management | Los Angeles Property Management",
  description:
    "Local property management for multifamily homes across Los Angeles, including South LA, Inglewood, and Pico-Robertson. Residents pay rent and request maintenance online; owners get responsive, transparent management.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Rockwell Pacific Management | Los Angeles Property Management",
    description:
      "A calmer place to call home. Responsive, transparent management of multifamily homes across Los Angeles.",
    url: SITE_URL,
    siteName: "Rockwell Pacific Management",
    type: "website",
    images: [
      {
        url: "/og/og-logo.png",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "Rockwell Pacific Management logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rockwell Pacific Management | Los Angeles Property Management",
    description:
      "Responsive, transparent management of multifamily homes across Los Angeles.",
    images: ["/og/og-logo.png"],
  },
  icons: {
    icon: [
      { url: "/logo/icon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/logo/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/logo/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/logo/apple-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "0i0xyhdSwCKiYanv26DVD52FukGaEI__XYlTTv6GS1g",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Rockwell Pacific Management",
  url: SITE_URL,
  logo: `${SITE_URL}/logo/logo-square.png`,
  image: `${SITE_URL}/photos/5371-louis-pl/exterior/01-front-facade.jpg`,
  telephone: "+1-310-405-7632",
  email: "Admin@rockwellpmg.com",
  description:
    "Property management company serving multifamily homes across Los Angeles, including South Los Angeles, Inglewood, and Pico-Robertson.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Los Angeles",
    addressRegion: "CA",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", name: "Los Angeles" },
    { "@type": "City", name: "Inglewood" },
    { "@type": "Place", name: "South Los Angeles" },
    { "@type": "Place", name: "Pico-Robertson" },
  ],
  knowsAbout: [
    "Property management",
    "Multifamily rentals",
    "Rent collection",
    "Maintenance coordination",
    "Tenant placement",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${interTight.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
