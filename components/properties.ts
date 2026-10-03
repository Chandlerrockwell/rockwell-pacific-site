export type Property = {
  slug: string;
  name: string;
  address: string;
  neighborhood: string;
  style: string;
  units: string;
  blurb: string;
  hero: string;
  gallery: { src: string; alt: string; kind: "exterior" | "interior" }[];
};

export const properties: Property[] = [
  {
    slug: "5371-louis-pl",
    name: "5371 Louis Place",
    address: "5371 Louis Pl, Los Angeles",
    neighborhood: "South Los Angeles",
    style: "Spanish Colonial",
    units: "10 units",
    blurb:
      "A 1920s-era Spanish Colonial with original arched entries, a palm-shaded front facade, and a quiet brick-paved interior courtyard. Renovated kitchens, original character preserved.",
    hero: "/photos/5371-louis-pl/exterior/01-front-facade.jpg",
    gallery: [
      { src: "/photos/5371-louis-pl/exterior/01-front-facade.jpg", alt: "Front facade with palm tree", kind: "exterior" },
      { src: "/photos/5371-louis-pl/exterior/02-courtyard.jpg", alt: "Interior brick courtyard", kind: "exterior" },
      { src: "/photos/5371-louis-pl/exterior/03-side-walkway.jpg", alt: "Side walkway and steps", kind: "exterior" },
      { src: "/photos/5371-louis-pl/exterior/04-rear-courtyard.jpg", alt: "Rear courtyard", kind: "exterior" },
      { src: "/photos/5371-louis-pl/interior/01-living-kitchenette.jpg", alt: "Studio living area with kitchenette", kind: "interior" },
      { src: "/photos/5371-louis-pl/interior/02-full-kitchen.jpg", alt: "Renovated full kitchen", kind: "interior" },
      { src: "/photos/5371-louis-pl/interior/03-kitchen-bath.jpg", alt: "Kitchen and bath area", kind: "interior" },
    ],
  },
  {
    slug: "1510-w-52nd",
    name: "1510 W 52nd Street",
    address: "1510 W 52nd St, Los Angeles",
    neighborhood: "South Los Angeles",
    style: "Spanish bungalow + ADU",
    units: "Multi-unit",
    blurb:
      "A character-rich Spanish bungalow with terracotta tile roof and arched front porch, paired with a modernized rear unit. Recent interiors feature wide-plank floors, designer staging, and in-unit laundry.",
    hero: "/photos/1510-w-52nd/exterior/02-front-facade-web.jpg",
    gallery: [
      { src: "/photos/1510-w-52nd/exterior/02-front-facade-web.jpg", alt: "Spanish bungalow front facade", kind: "exterior" },
      { src: "/photos/1510-w-52nd/exterior/03-side-view-web.jpg", alt: "Side view with patio furniture", kind: "exterior" },
      { src: "/photos/1510-w-52nd/exterior/04-driveway-web.jpg", alt: "Driveway and full property view", kind: "exterior" },
      { src: "/photos/1510-w-52nd/exterior/01-rear-unit-web.jpg", alt: "Rear unit with private yard", kind: "exterior" },
      { src: "/photos/1510-w-52nd/interior/unit-a/01-bedroom-staged-web.jpg", alt: "Staged primary bedroom", kind: "interior" },
      { src: "/photos/1510-w-52nd/interior/unit-b/01-kitchen-laundry.jpg", alt: "Kitchen with in-unit laundry", kind: "interior" },
      { src: "/photos/1510-w-52nd/interior/unit-b/02-kitchen-range.jpg", alt: "Kitchen with stainless range", kind: "interior" },
      { src: "/photos/1510-w-52nd/interior/unit-b/03-living-room.jpg", alt: "Living room", kind: "interior" },
      { src: "/photos/1510-w-52nd/interior/unit-b/04-bedroom-empty.jpg", alt: "Bedroom with ceiling fan", kind: "interior" },
    ],
  },
  {
    slug: "9132-crenshaw",
    name: "9132 Crenshaw Boulevard",
    address: "9132 Crenshaw Blvd, Inglewood",
    neighborhood: "Inglewood",
    style: "Mid-century duplex",
    units: "Duplex",
    blurb:
      "A renovated Inglewood duplex with crisp white stucco, black trim, and oversized windows that frame Crenshaw's palm tree canopy. Modern interiors with mid-century finishes and a freshly resurfaced parking lot.",
    hero: "/photos/9132-crenshaw/interior/02-livingroom-bay-window.jpg",
    gallery: [
      { src: "/photos/9132-crenshaw/interior/02-livingroom-bay-window.jpg", alt: "Living room with palm tree views", kind: "interior" },
      { src: "/photos/9132-crenshaw/interior/01-kitchen-palmview.jpg", alt: "Kitchen with palm tree window", kind: "interior" },
      { src: "/photos/9132-crenshaw/interior/03-bathroom.jpg", alt: "Bathroom with walnut vanity", kind: "interior" },
      { src: "/photos/9132-crenshaw/exterior/01-rear-duplex.jpg", alt: "Rear view of duplex", kind: "exterior" },
      { src: "/photos/9132-crenshaw/exterior/03-side-landscaped.jpg", alt: "Landscaped side yard", kind: "exterior" },
      { src: "/photos/9132-crenshaw/exterior/02-parking-lot.jpg", alt: "Resurfaced parking lot", kind: "exterior" },
    ],
  },
  {
    slug: "1904-s-robertson",
    name: "1904 S Robertson Boulevard",
    address: "1904 S Robertson Blvd, Los Angeles",
    neighborhood: "Pico-Robertson",
    style: "Mid-century courtyard apartments",
    units: "Multi-unit",
    blurb:
      "A classic mid-century courtyard community on Robertson Boulevard, set around a sparkling pool and mature palms. Bright, comfortable units feature in-unit washer/dryer and air conditioning, with gated entry and easy access across the Westside.",
    hero: "/photos/1904-s-robertson/exterior/01-street-facade.jpg",
    gallery: [
      { src: "/photos/1904-s-robertson/exterior/01-street-facade.jpg", alt: "Street-facing facade with palm trees", kind: "exterior" },
      { src: "/photos/1904-s-robertson/exterior/IMG_0384.WEBP", alt: "Courtyard view overlooking the pool", kind: "exterior" },
      { src: "/photos/1904-s-robertson/exterior/IMG_0383.WEBP", alt: "Swimming pool and sundeck", kind: "exterior" },
      { src: "/photos/1904-s-robertson/exterior/IMG_0382.WEBP", alt: "Central courtyard and stairways", kind: "exterior" },
    ],
  },
];
