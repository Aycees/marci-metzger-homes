import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { site } from "@/content/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://marcimetzger.example"),
  title: "Marci Metzger — Pahrump Realtor | The Ridge Realty Group",
  description:
    "Nearly three decades selling homes in the Pahrump valley. Nearly 90 families helped in 2021 and $28.5 million closed. Search listings or call Marci on (206) 919-6886.",
  openGraph: {
    title: "Marci Metzger — Pahrump Realtor",
    description:
      "Nearly three decades in the Pahrump valley. Don't just list it — get it sold.",
    type: "website",
    locale: "en_US",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#FAF7F2",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: site.name,
  image: "/images/marci-portrait.jpg",
  telephone: site.phone.display,
  url: "https://marcimetzger.example",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    postalCode: site.address.zip,
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: site.address.lat,
    longitude: site.address.lng,
  },
  areaServed: "Pahrump, NV",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: site.hours.opens,
      closes: site.hours.closes,
    },
  ],
  sameAs: [
    site.social.facebook,
    site.social.instagram,
    site.social.linkedin,
    site.social.yelp,
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-[3px] focus:bg-ink focus:px-4 focus:py-3 focus:text-[15px] focus:font-semibold focus:text-bone"
        >
          Skip to content
        </a>
        {children}
        <Script
          id="ld-json"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
