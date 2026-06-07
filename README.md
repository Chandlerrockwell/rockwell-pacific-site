# Rockwell Pacific Management

The official site for Rockwell Pacific Management — Los Angeles multifamily property management.

## Stack

- **Next.js 14** (App Router) — React framework
- **TypeScript** — type safety
- **Tailwind CSS** — styling
- **Vercel** — hosting (recommended)

## Local development

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Deploy to Vercel

See `DEPLOYMENT.md` in the project root for step-by-step instructions.

## Editing content

- **Property details:** `components/properties.ts`
- **Contact info:** `components/Footer.tsx`
- **AppFolio links:** search the codebase for `rockwellpmg.appfolio.com` and replace with your real URL once set up
- **Photos:** `public/photos/` — organized by property

## Color palette

| Token | Hex | Use |
|-------|------|-----|
| `ink` | `#0a0a0a` | Primary text, dark sections |
| `bone` | `#fafaf7` | Background |
| `sand` | `#f0ece2` | Secondary surfaces |
| `pacific` | `#1f4a6b` | Accent (matches logo wave) |
| `pacific-deep` | `#102d44` | Hover/depth |
| `pacific-mist` | `#7da6c1` | Light accent on dark |

## Typography

- **Display:** Cormorant Garamond (serif, pairs with logo's "R")
- **Body:** Inter Tight (refined sans-serif)
