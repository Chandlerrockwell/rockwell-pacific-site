import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rockwell Pacific Management — Los Angeles Multifamily Property Management",
  description:
    "Thoughtful property management for residents across Los Angeles. Pay rent, request maintenance, and explore our portfolio of carefully managed multifamily homes.",
  openGraph: {
    title: "Rockwell Pacific Management",
    description: "A calmer place to call home. Los Angeles multifamily property management.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,400&family=Inter+Tight:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
