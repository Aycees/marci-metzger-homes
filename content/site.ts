/**
 * Single source of truth for every string on the page.
 * Copy is carried over verbatim from marcimetzger.com unless a change is
 * noted against a finding ID from the UX audit (F-01 … F-28).
 */

export const site = {
  name: "Marci Metzger — The Ridge Realty Group",
  shortName: "Marci Metzger Homes",
  tagline: "Pahrump Realtor",

  // F-12 — one canonical display format, one tel: href, everywhere.
  phone: {
    display: "(206) 919-6886",
    href: "tel:+12069196886",
    sms: "sms:+12069196886",
  },

  address: {
    street: "3190 HW-160, Suite F",
    city: "Pahrump",
    state: "NV",
    stateLong: "Nevada",
    zip: "89048",
    country: "United States",
    lat: 36.2083,
    lng: -115.9839,
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=3190+NV-160+Suite+F,+Pahrump,+NV+89048",
  },

  hours: {
    label: "Open daily",
    display: "8:00 am – 7:00 pm",
    note: "Appointments outside office hours available upon request. Just call!",
    opens: "08:00",
    closes: "19:00",
  },

  social: {
    facebook: "https://www.facebook.com/MarciHomes/",
    instagram: "https://www.instagram.com/marcimetzger_theridge/",
    linkedin: "https://www.linkedin.com/in/marci-metzger-30642496/",
    yelp: "https://www.yelp.com/biz/xr3yQN_m2SgO0R_7S6p62w",
  },

  // F-21 — functional nav label; the client's own phrase stays as that page's H1.
  nav: [
    { label: "Home", href: "/" },
    { label: "Listings", href: "/listings" },
    { label: "Relocating", href: "/relocating" },
    { label: "About", href: "/about" },
  ],

  hero: {
    eyebrow: "Marci Metzger · The Ridge Realty Group",
    titleTop: "Pahrump",
    titleAccent: "Realtor",
    // F-01 — built entirely from the site's own proof copy.
    subhead:
      "Nearly three decades in the valley. Nearly 90 families helped in 2021 and $28.5 million closed — because we don't just list it, we get it sold.",
    primaryCta: "Call (206) 919-6886",
    secondaryCta: "Search Pahrump listings",
    imageAlt: "Mountain Falls golf community pond and the Spring Mountains, Pahrump, Nevada",
  },

  search: {
    eyebrow: "Find your dream home",
    title: "Search listings",
    note: "Live MLS · Pahrump & Nye County · updated hourly",
    cta: "Search now",
    moreFilters: "More filters",
    // F-14 — Pahrump preselected, shortcuts for the common searches.
    quickFilters: [
      { label: "Under $400k", href: "/listings?location=pahrump&maxPrice=400000" },
      { label: "3+ bedrooms", href: "/listings?location=pahrump&beds=3" },
      { label: "Land", href: "/listings?location=pahrump&type=land" },
      { label: "New this week", href: "/listings?location=pahrump&sort=newest" },
    ],
    locations: [
      { value: "pahrump", label: "Pahrump, NV" },
      { value: "amargosa-valley", label: "Amargosa Valley" },
      { value: "beatty", label: "Beatty" },
      { value: "las-vegas", label: "Las Vegas" },
      { value: "henderson", label: "Henderson" },
      { value: "boulder-city", label: "Boulder City" },
      { value: "indian-springs", label: "Indian Springs" },
      { value: "sandy-valley", label: "Sandy Valley" },
      { value: "tonopah", label: "Tonopah" },
      { value: "any", label: "Anywhere in Nevada" },
    ],
    types: [
      { value: "any", label: "Any" },
      { value: "residential", label: "Residential" },
      { value: "land", label: "Land" },
      { value: "residential-lease", label: "Residential Lease" },
      { value: "high-rise", label: "High Rise" },
    ],
    prices: [
      { value: "", label: "No max" },
      { value: "200000", label: "Up to $200k" },
      { value: "300000", label: "Up to $300k" },
      { value: "400000", label: "Up to $400k" },
      { value: "600000", label: "Up to $600k" },
      { value: "1000000", label: "Up to $1M" },
    ],
    beds: ["Any", "Studio", "1+", "2+", "3+", "4+", "5+", "6+"],
    baths: ["Any", "1+", "2+", "3+", "4+", "5+", "6+"],
  },

  // F-16 — the site's best proof, promoted out of body copy into data.
  stats: [
    {
      value: "~90",
      label: "Clients helped in 2021 — buyers and sellers across the Pahrump valley",
    },
    {
      value: "$28.5M",
      label: "Closed in sales that year, with top residential sales for five years running",
    },
    {
      value: "30",
      label: "Years, nearly, as a licensed REALTOR® — she lives, works and plays here",
    },
  ],

  about: {
    eyebrow: "Meet Marci",
    title: "Realtor for nearly three decades",
    lede:
      "Our team works hard everyday to grow and learn, so that we may continue to excel in our market. Our clients deserve our best, & we want to make sure our best is better every year.",
    body:
      "We live, work, and play in this community — happy to help you find where to put your hard-earned dollars. Whether you're getting ready to buy or sell your residence, looking at investment properties, or just curious about the markets, our team ensures you get the best experience possible.",
    primaryCta: "Book a 15-minute call",
    secondaryCta: "About Marci",
    portraitAlt: "Marci Metzger, REALTOR with The Ridge Realty Group",
  },

  reviews: {
    eyebrow: "In their words",
    title: "What clients say",
    link: "Read all reviews on Yelp",
    // F-13 — no invented testimonials. Section hides itself while this is empty.
    items: [] as Review[],
  },

  listings: {
    eyebrow: "Photo gallery",
    title: "Recently sold & featured",
    cta: "View all listings",
    note: "Price, status and bed/bath figures come from the MLS feed.",
    empty:
      "New listings are added weekly — call Marci for what's coming to market before it's listed.",
  },

  // F-17 — the split headline put back together.
  howItWorks: {
    eyebrow: "Get it sold",
    titleTop: "Don't just list it…",
    titleBottom: "get it",
    titleAccent: "sold",
    items: [
      {
        title: "Top residential sales, five years running",
        body:
          "We helped nearly 90 clients in 2021, and closed 28.5 million in sales. Our team works hard everyday to grow and learn, so that we may continue to excel in our market.",
        image: "/images/kitchen-island.jpg",
        alt: "Open-plan kitchen with a stone island and mountain views",
      },
      {
        title: "Every avenue, every buyer",
        body:
          "We exhaust every avenue to ensure our listings are at the fingertips of every possible buyer, getting you top dollar for your home.",
        image: "/images/villa-pool-dusk.jpg",
        alt: "Spanish-style desert villa with a lit pool at dusk",
      },
      {
        title: "A guide for buyers, not a tour guide",
        body:
          "Nobody knows the market like we do. Enjoy having a pro at your service. Market analysis, upgrades lists, contractors on speed dial, & more!",
        image: "/images/keys-on-wood.jpg",
        alt: "House keys with a red house-shaped fob on weathered wood",
      },
    ],
  },

  // F-18 — three distinct headings for the three existing paragraphs.
  services: {
    eyebrow: "Our services",
    title: "Real estate done right",
    items: [
      {
        title: "Buying & selling, handled",
        body:
          "Nervous about your property adventure? Don't be. Whether you're getting ready to buy or sell your residence, looking at investment properties, or just curious about the markets, our team ensures you get the best experience possible!",
        image: "/images/living-room-detail.jpg",
        alt: "Styled living room with a pale wood coffee table",
      },
      {
        title: "Commercial & residential",
        body:
          "Large or small, condo or mansion, we can find it and get at the price that's right. Fixer-uppers? Luxury? We can help with all of it! We live, work, and play in this community.",
        image: "/images/modern-home-garden.jpg",
        alt: "Modern flat-roofed home with a landscaped garden and pool",
      },
      {
        title: "Rely on expertise",
        body:
          "If you have questions about affordability, credit, and loan options, trust us to connect you with the right people to get the answers you need in a timely fashion. We make sure you feel confident and educated every step of the way.",
        image: "/images/advisers-meeting.jpg",
        alt: "Two advisers shaking hands with a client across a laptop",
      },
    ],
  },

  // F-04 — one optical height, captioned, linked.
  credentials: {
    label: "Licensed, member & local",
    items: [
      {
        name: "The Ridge Realty Group",
        image: "/images/badge-ridge-realty.png",
        href: "https://www.theridgerealtygroup.com/",
        height: 68,
      },
      { name: "REALTOR®", image: "/images/badge-realtor.png", href: null, height: 60 },
      {
        name: "Equal Housing Opportunity",
        image: "/images/badge-equal-housing.png",
        href: null,
        height: 56,
      },
      {
        name: "Pahrump Valley Chamber of Commerce",
        image: "/images/badge-chamber.png",
        href: "https://pahrumpchamber.com/",
        height: 68,
      },
    ],
  },

  // F-11 — the form now carries a named offer and a stated reply window.
  contact: {
    eyebrow: "Call or visit",
    title: "Request a free market analysis",
    body:
      "Tell Marci what you're working on and she'll come back within one business day — with comparable sales, a realistic price range, and no obligation.",
    intents: [
      { value: "selling", label: "Selling" },
      { value: "buying", label: "Buying" },
      { value: "looking", label: "Just looking" },
    ],
    cta: "Send message",
    pending: "Sending…",
    legal:
      "Protected by reCAPTCHA — Google's Privacy Policy and Terms of Service apply.",
    successTitle: "Thanks — message received.",
    successBody: "Marci will reply within one business day. In a hurry? Call her directly.",
  },

  visit: {
    label: "The office",
    hoursLabel: "Office hours",
    directions: "Get directions",
    mapAlt: "Map showing the office at 3190 HW-160, Suite F, Pahrump, Nevada",
  },

  footer: {
    blurb:
      "Pahrump, Nevada real estate — residential, land, commercial and investment. Licensed with The Ridge Realty Group.",
    exploreLabel: "Explore",
    officeLabel: "Office",
    copyright: `Copyright © ${new Date().getFullYear()} Marci Metzger — All Rights Reserved`,
    legal: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Accessibility", href: "/accessibility" },
    ],
    // Open question 4 for the client — Nevada requires this in advertising.
    license: "NV RE License #[LICENSE NUMBER]",
  },

  mobileBar: {
    call: "Call",
    text: "Text",
    search: "Search",
  },
} as const;

export type Review = {
  quote: string;
  author: string;
  location: string;
  date: string;
  rating: 1 | 2 | 3 | 4 | 5;
  source: "Yelp" | "Google";
};
