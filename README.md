# Clarus

A landing page for Clarus, a cleaning agency operating across 14 countries.
Built with Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Stack

| | |
|---|---|
| Framework | Next.js, App Router |
| Language | TypeScript |
| Styling | Tailwind CSS, utility classes in components, theme in `app/globals.css` |
| Motion | Framer Motion, presets in `lib/animations.ts` |
| Icons | react-icons (Feather set) |
| Fonts | Fraunces (display), Manrope (body), loaded via `next/font/google` |

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000. No environment variables or external services
are required to run it locally.

## Project structure

```
app/
  layout.tsx       fonts and page metadata
  page.tsx          assembles every section, in order
  globals.css       theme tokens, base styles, focus and motion-reduction rules
components/
  Header.tsx        sticky nav, mobile menu
  Hero.tsx          headline, primary CTA, portrait, floating stat card
  TrustBar.tsx       animated count-up stats
  Services.tsx      bento grid of service offerings
  Gallery.tsx       proof-of-work photo strip
  Process.tsx       "how it works", four steps
  Pricing.tsx       home/business toggle, three tiers each
  Story.tsx          founder photo and personal note
  Global.tsx        regions served, compliance list
  Testimonials.tsx  sliding client quotes
  Faq.tsx           accordion, pre-booking questions
  CTA.tsx           closing call-to-action band
  Footer.tsx
lib/
  animations.ts     every Framer Motion preset, imported by the components above
public/
  images/           all site photography (see below)
```

Sections render in `app/page.tsx` in the order listed above. Reorder,
remove, or add sections by editing that file, each component is
self-contained and only needs to be imported and dropped in.

## Styling

Tailwind CSS utility classes are used directly in each component, the usual
way. The full theme (colors, fonts, border radius, shadows) is defined once
in `app/globals.css` inside an `@theme` block, and the responsive `.container`
layout is defined just below it. To add or change a color, font, or other
design token, edit that file rather than searching for a separate config.

Custom tokens currently defined:

| Category | Tokens |
|---|---|
| Colors | `forest`, `forest-light`, `forest-dark`, `moss`, `sage`, `mist`, `porcelain`, `paper`, `brass`, `brass-dark`, `brass-light`, `ink` |
| Fonts | `font-display` (Fraunces), `font-sans` (Manrope) |
| Radius | `rounded-4xl`, `rounded-5xl` (in addition to Tailwind's defaults) |
| Shadow | `shadow-soft`, `shadow-card` |

## Animation

Every Framer Motion configuration used on the site lives in
`lib/animations.ts`, components import from it instead of repeating motion
props inline:

- `fadeUp(delay, opts)`, the scroll-reveal used by most sections
- `heroContainer` / `heroItem`, the hero's staggered entrance
- `heroImageReveal`, `heroFloatCard`, the hero portrait and its stat card
- `mobileMenu`, height/opacity toggle (used by the header menu and the FAQ accordion)
- `segmentPillTransition`, the sliding pill in the Pricing toggle
- `pricingCard(delay, liftY)`, pricing card mount and the highlighted tier's lift
- `testimonialSlide(direction)`, the testimonial carousel transition

Adjust timing, distance, or easing in one place and it updates everywhere
that preset is used. All motion respects `prefers-reduced-motion`, set in
`app/globals.css`.

## Images

Ten photos are wired in, real (compressed) images, not empty placeholders,
but every one of them is a stand-in you should plan to replace with your own
photography before this goes live to a real client.

| File | Used in | Content |
|---|---|---|
| `hero-cleaner.jpg` | `Hero.tsx` | Cleaner with spray bottle and cloth, home interior |
| `office-team.jpg` | `Services.tsx` | Window cleaners on a high-rise facade |
| `gallery-kitchen.jpg` | `Gallery.tsx` | Finished kitchen sink and counter |
| `gallery-crew.jpg` | `Gallery.tsx` | Cleaner spraying and wiping a glass window |
| `gallery-hotel.jpg` | `Gallery.tsx` | Made-up hotel-style bed |
| `founder.jpg` | `Story.tsx` | Founder portrait |
| `global-team.jpg` | `Global.tsx` | Diverse team meeting around a table |
| `avatar-amara.jpg` | `Testimonials.tsx` | Client headshot |
| `avatar-karim.jpg` | `Testimonials.tsx` | Client headshot |
| `avatar-priya.jpg` | `Testimonials.tsx` | Client headshot |
| `cta-clean-space.jpg` | `CTA.tsx` | Bright, finished living room |

Swap any of them by overwriting the same filename in `public/images/`, no
code changes needed. If you'd rather use `next/image` for automatic
optimization, swap the plain `<img>` tags for `<Image>` and add
`width`/`height` or `fill`.

## Before this goes live

Everything below is placeholder content written to make the layout easy to
judge, none of it should reach a real visitor as-is:

- **Contact details**, phone, email, and address in `Header.tsx`, `CTA.tsx`,
  and `Footer.tsx`.
- **Founder story**, `Story.tsx` uses a placeholder name and an invented
  founding story. Replace both with the real person and the real story.
- **Testimonials**, `Testimonials.tsx` has three invented quotes with stock
  photos standing in for headshots. Replace with real (or clearly
  anonymized) client feedback once you have it, a fabricated quote next to a
  stock photo reads as fake to a sharp client.
- **Stats**, the numbers in `TrustBar.tsx` should be ones you can stand
  behind if asked.
- **Pricing**, the figures in `Pricing.tsx` are placeholders for layout.
  Replace with real starting rates, or switch to "from" ranges, once you've
  priced your actual markets.
- **FAQ answers**, `Faq.tsx` describes an insurance and cancellation policy
  in generic terms. Replace with your actual policy wording, these are the
  kind of claims a client can hold you to.
- **Regions served**, `Global.tsx` lists example countries and cities, edit
  to match where you actually operate.

## Deployment

This is a standard Next.js app, it deploys to Vercel, Netlify, or any
Node-capable host without modification:

```bash
npm run build
npm run start
```
