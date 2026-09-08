# Marci Metzger Homes — home page

A rebuilt home page for [marcimetzger.com](https://marcimetzger.com/), using the site's own copy
and photography with a new structure, design system and front end.

Built for the Luxury Presence Junior Web Builder assignment. This is an unaffiliated design
exercise — all copy and imagery remain the property of Marci Metzger / The Ridge Realty Group.

---

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
```

```bash
npm run build && npm start   # production
npm run test:a11y            # axe-core audit at 390px and 1440px (needs the server running)
```

Requires Node 20+.

## Stack

| | |
|---|---|
| Framework | Next.js 15 (App Router), React 19, TypeScript |
| Styling | Tailwind CSS v4 — tokens live in `app/globals.css` under `@theme` |
| Fonts | Newsreader (display) + Karla (UI), self-hosted via Fontsource |
| Forms | React Server Action + `useActionState` |
| Images | `next/image`, AVIF/WebP, hero preloaded, everything else lazy |

## Project structure

```
app/
  layout.tsx            fonts, metadata, JSON-LD (RealEstateAgent), skip link
  page.tsx              composes the ten sections
  globals.css           design tokens + base layer
  actions/contact.ts    server action: validation, honeypot, delivery hook
components/
  layout/               SiteHeader, SiteFooter, MobileActionBar
  sections/             Hero, SearchCard, ProofStats, MeetMarci, Reviews,
                        FeaturedListings, HowItWorks, Services, Credentials,
                        ContactSection
  ui/                   Button, Chip, Pill, Field, ListingCard, SectionHeading,
                        StatBlock, StaticMap, Reveal, Icons
content/
  site.ts               every string on the page
  listings.ts           featured listings + formatting helpers
public/images/          assets recovered from the live site
```

**No copy is hardcoded in a component.** Everything the client might want to reword lives in
`content/site.ts`, so text edits never touch JSX.

## What changed from the current site, and why

Each item maps to a finding in the accompanying audit (`Marci_Metzger_UX_Audit_and_Redesign_Brief.pdf`).

- **One primary action.** Call Marci — in the header, the hero, the about section, the contact
  card, the footer, and a sticky mobile bar. Everything else is visually subordinate. (F-10)
- **The hero makes a promise.** "Pahrump Realtor" is kept as the H1, but the site's own proof
  copy now sits beneath it and there are two ways forward instead of one. (F-01)
- **Proof promoted to data.** "~90 clients · $28.5M closed · 30 years" moved out of body text
  into a stat band. (F-16)
- **The Photo Gallery became listings.** The old carousel was seven unlabelled photos; the
  filenames proved they were real properties, so they are now listing cards with address,
  status, price and facts — rendered server-side so they are crawlable. (F-15, F-28)
- **Search got out of the way.** Three fields, Pahrump preselected, one-tap shortcuts, and
  everything else behind *More filters*. Sort-by moved to the results page. (F-14)
- **The form has a reason to exist.** "Request a free market analysis", an intent selector, a
  stated reply window, visible labels and real error handling. (F-11, F-26)
- **Accessibility.** Skip link, one nav tree at every width, focus rings everywhere,
  authored alt text on every image, labelled icon controls, reduced-motion support.
  (F-20, F-23, F-24, F-25, F-26)
- **Performance.** The Google Maps SDK is replaced by a static map that upgrades on click;
  images are responsive and lazy below the fold; fonts are self-hosted. (F-27)

## Verified

- `npm run test:a11y` → **0 axe-core violations** (WCAG 2.0/2.1 A + AA) at 390 px and 1440 px.
- No horizontal scroll at 320 / 390 / 414 / 640 / 768 / 1024 / 1280 / 1440 / 1920 px.
- Every colour pair in `@theme` measured; body text ≥ 4.5:1, headings ≥ 8:1.

## Placeholders — deliberately not invented

Anything in `[SQUARE BRACKETS]` is real content the client or the MLS feed must supply:

- Listing prices, bed/bath/sqft counts and status for the three featured properties.
  Addresses are real (recovered from the current site's gallery filenames).
- Client reviews — the reviews section renders **nothing** until real quotes exist
  (`site.reviews.items`). No testimonial is fabricated.
- Nevada real-estate licence number in the footer.

## Before going live

1. Wire mail delivery in `app/actions/contact.ts` (Resend, Postmark, or a form endpoint).
2. Replace `content/listings.ts` with the IDX/MLS feed — the components need no changes.
3. Point `metadataBase` in `app/layout.tsx` at the production domain.
4. Add reCAPTCHA if spam becomes an issue; load it on first form interaction, not on page load.
5. Refresh the 2021 statistics, or reframe them as a rolling total.
