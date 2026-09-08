/**
 * Featured listings.
 *
 * The addresses below were recovered from the current site's own gallery
 * filenames, so they are real. Everything the MLS owns — price, status,
 * bed/bath/sqft — is deliberately null until the feed (or the client)
 * supplies it. Nothing here is invented. See F-15 in the audit.
 *
 * Swap this module for an IDX/MLS fetch and the components need no changes.
 */

export type ListingStatus = "sold" | "active" | "pending";

export type Listing = {
  slug: string;
  address: string;
  city: string;
  state: string;
  status: ListingStatus;
  priceUsd: number | null;
  beds: number | null;
  baths: number | null;
  sqft: number | null;
  image: { src: string; alt: string };
  href: string | null;
};

export const featuredListings: Listing[] = [
  {
    slug: "4787-e-beacon-ridge",
    address: "4787 E Beacon Ridge",
    city: "Pahrump",
    state: "NV",
    status: "sold",
    priceUsd: null,
    beds: null,
    baths: null,
    sqft: null,
    image: {
      src: "/images/beacon-ridge-aerial.jpg",
      alt: "Aerial view of the Mountain Falls neighbourhood around 4787 E Beacon Ridge, Pahrump",
    },
    href: null,
  },
  {
    slug: "4460-roseworthy",
    address: "4460 Roseworthy",
    city: "Pahrump",
    state: "NV",
    status: "active",
    priceUsd: null,
    beds: null,
    baths: null,
    sqft: null,
    image: {
      src: "/images/roseworthy-aerial.jpg",
      alt: "Aerial view of homes and the golf course lake near 4460 Roseworthy, Pahrump",
    },
    href: null,
  },
  {
    slug: "5570-ailanto",
    address: "5570 Ailanto",
    city: "Pahrump",
    state: "NV",
    status: "sold",
    priceUsd: null,
    beds: null,
    baths: null,
    sqft: null,
    image: {
      src: "/images/ailanto-aerial.jpg",
      alt: "Aerial view of single-storey homes below the Spring Mountains near 5570 Ailanto, Pahrump",
    },
    href: null,
  },
];

/** Secondary photography shown beneath the listing cards on desktop. */
export const galleryStrip = [
  {
    src: "/images/ailanto-interior.jpg",
    alt: "Living room at 5570 Ailanto with floor-to-ceiling windows onto the desert",
  },
  {
    src: "/images/beacon-ridge-street.jpg",
    alt: "Street view of the homes at 4787 E Beacon Ridge",
  },
  {
    src: "/images/ailanto-pool.jpg",
    alt: "Rear elevation and pool at 5570 Ailanto",
  },
];

export const statusLabel: Record<ListingStatus, string> = {
  sold: "Sold",
  active: "Active",
  pending: "Pending",
};

export function formatPrice(priceUsd: number | null): string {
  if (priceUsd === null) return "Price on request";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(priceUsd);
}

/** Joins only the facts we actually have, so a missing figure never leaves a stray separator. */
export function formatFacts(listing: Listing): string {
  const parts = [
    listing.beds !== null ? `${listing.beds} bd` : null,
    listing.baths !== null ? `${listing.baths} ba` : null,
    listing.sqft !== null ? `${listing.sqft.toLocaleString("en-US")} sqft` : null,
    `${listing.city}, ${listing.state}`,
  ].filter(Boolean);
  return parts.join(" · ");
}
