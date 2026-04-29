# RAGA Travel Website

Static v1 foundation for a premium travel business website built with React, Vite,
TypeScript, Tailwind CSS, and React Router.

## Installation

```bash
npm install
npm run dev
```

Useful checks:

```bash
npm run build
npm run lint
```

## Tunnel / Custom Host Dev Access

Vite blocks unknown hostnames by default. To allow a tunnel or custom dev hostname,
copy `.env.example` to `.env` and fill in the `VITE_ALLOWED_HOSTS` value:

```bash
cp .env.example .env
# then edit .env:
VITE_ALLOWED_HOSTS=raga.vectanix.com
```

Multiple hosts are comma-separated:

```
VITE_ALLOWED_HOSTS=raga.vectanix.com,preview.vectanix.com
```

Then run `npm run dev` as normal. `.env` is gitignored — do not commit real hostnames.

## Folder Structure

```text
src/
  assets/
    images/
  components/
    common/
      Button.tsx
      Container.tsx
      FloatingWhatsAppButton.tsx
      SectionHeading.tsx
      Seo.tsx
    layout/
      AppLayout.tsx
      Footer.tsx
      Navbar.tsx
    packages/
      InclusionsSection.tsx
      ItinerarySection.tsx
      PackageCard.tsx
      PackageFilters.tsx
      PricingCtaSection.tsx
    sections/
      ContactCtaSection.tsx
      FaqSection.tsx
      FeaturedPackages.tsx
      HeroSection.tsx
      HomeExperienceSections.tsx
      TestimonialsSection.tsx
  constants/
    site.ts
  data/
    faqs.ts
    homeContent.ts
    navigation.ts
    packages.ts
    seo.ts
    testimonials.ts
  hooks/
    useReveal.ts
  pages/
    AboutPage.tsx
    ContactPage.tsx
    HomePage.tsx
    NotFoundPage.tsx
    PackageDetailPage.tsx
    PackagesPage.tsx
  routes/
    router.tsx
  styles/
    index.css
  types/
    package.ts
    shared.ts
  utils/
    packageUtils.ts
```

## Routes

```text
/                  Home
/packages          Package listing
/packages/:slug    Package detail
/about             About
/contact           Contact
/404               Not found
*                  Not found
```

## Data Model

Static TypeScript data lives in `src/data`. Package records already support:

- `id`
- `slug`
- `title`
- `location`
- `duration`
- `price`
- `shortDescription`
- `longDescription`
- `images`
- `highlights`
- `itinerary`
- `inclusions`
- `exclusions`
- `availableDates`
- `category`
- `featured`

## Visual Direction

The starter direction is premium, modern, adventurous, and trust-building:

- Editorial image-led hero and package cards
- Warm linen background, deep green surfaces, restrained gold/rust accents
- Serif display typography paired with clean sans text
- Small reusable components for headings, layout, buttons, cards, and CTAs
- Mobile-first responsive grids

## Extension Notes

- Replace `src/data/*.ts` with API or CMS calls behind the same TypeScript types.
- Wire `PackageFilters` to URL search params when dynamic filtering is introduced.
- Connect the contact form to a backend, CRM, email provider, or serverless endpoint.
- Move remote image URLs into local assets or CMS-managed media when brand imagery is final.
- Add route-level metadata with a SEO helper once final copy and Open Graph images are ready.
- Add tests around package lookup and route rendering before data becomes dynamic.
