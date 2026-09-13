# Clarus — Cleaning Agency Landing Page

Next.js (App Router) + TypeScript + Tailwind CSS + Framer Motion + react-icons.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## What's inside

```
app/
  layout.tsx       # fonts (Fraunces + Manrope) + metadata
  page.tsx         # assembles all sections
  globals.css      # base styles, focus states, reduced-motion support
components/
  Header.tsx       # sticky nav with mobile menu
  Hero.tsx         # headline, CTA, organic-frame portrait, floating stat card
  TrustBar.tsx     # animated count-up stats
  Services.tsx     # asymmetric bento grid of services
  Gallery.tsx       # 3-photo proof-of-work strip
  Process.tsx      # 4-step "how it works"
  Pricing.tsx      # segmented (home/business) pricing packages, one highlighted tier
  Global.tsx       # regions served + compliance list (international pitch angle)
  Testimonials.tsx # sliding client quotes
  CTA.tsx          # closing call-to-action band
  Footer.tsx
```

## Images

All 10 image slots are now filled with real (compressed) photos, resized and
re-encoded to reasonable web sizes. The whole set totals roughly 1.5 MB,
down from ~22 MB in the originals. These are still stand-ins for layout
purposes; swap any of them out later by overwriting the same filename.

| File | Used in | Content |
|------|---------|---------|
| `hero-cleaner.jpg` | `Hero.tsx` | Cleaner with spray bottle & cloth, home interior |
| `office-team.jpg` | `Services.tsx` | Window cleaners on a high-rise facade |
| `gallery-kitchen.jpg` | `Gallery.tsx` | Finished kitchen sink & counter |
| `gallery-crew.jpg` | `Gallery.tsx` | Cleaner spraying/wiping a glass window |
| `gallery-hotel.jpg` | `Gallery.tsx` | Made-up hotel-style bed |
| `global-team.jpg` | `Global.tsx` | Diverse team meeting around a table |
| `avatar-amara.jpg` | `Testimonials.tsx` | Headshot, light background |
| `avatar-karim.jpg` | `Testimonials.tsx` | Headshot, studio background |
| `avatar-priya.jpg` | `Testimonials.tsx` | Headshot, studio background |
| `cta-clean-space.jpg` | `CTA.tsx` | Bright, finished living room |

If you'd rather use `next/image` for optimization, swap the plain `<img>`
tags for `<Image>` and add `width`/`height` or `fill`.

## Brand & design notes

- **Name:** "Clarus" (Latin root for *clear, bright*). It's short, pronounceable
  across languages, and doesn't lock you into one country's naming
  convention, which matters if you're pitching internationally. Swap it in
  `Header.tsx`, `Footer.tsx`, and `layout.tsx` metadata if you land on
  something else.
- **Palette:** deep forest ink (`forest`), muted sage/moss greens, a warm
  brass accent for CTAs, and a soft porcelain/paper background. It evokes
  "cared for" and "premium" without leaning on the generic navy+yellow
  cleaning-brand look.
- **Type:** Fraunces (display serif with real personality) for headlines,
  Manrope (clean, geometric) for body and UI text.
- **Motion:** one orchestrated staggered reveal on the hero load, scroll-
  triggered reveals used sparingly, and a count-up animation on the stats bar.
  Respects `prefers-reduced-motion`.
- **International angle:** the "Where we work" section and the compliance
  list in `Global.tsx` exist specifically to reassure clients evaluating you
  for multi-country contracts. Edit the regions/cities to match where you
  actually operate (or plan to).

## Before you pitch

- Update the phone number, email, and address placeholders in `Header.tsx`,
  `CTA.tsx`, and `Footer.tsx`.
- Replace the testimonial names/roles in `Testimonials.tsx` with real or
  anonymized client quotes once you have them. Placeholder quotes will read
  as fake to a sharp client.
- Update stats in `TrustBar.tsx` to numbers you can stand behind.
- The numbers in `Pricing.tsx` are placeholders for layout — replace with
  real starting rates (or remove specific figures in favor of "from" ranges)
  once you've priced your actual markets.
