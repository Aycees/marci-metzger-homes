import Image from "next/image";
import { Pill } from "./Pill";
import {
  formatFacts,
  formatPrice,
  statusLabel,
  type Listing,
} from "@/content/listings";

export function ListingCard({
  listing,
  sizes = "(max-width: 767px) 88vw, 33vw",
}: {
  listing: Listing;
  sizes?: string;
}) {
  const facts = formatFacts(listing);
  const price = formatPrice(listing.priceUsd);

  // The link carries the whole story so the decorative pill is never read twice.
  const accessibleName = `${listing.address}, ${listing.city} — ${statusLabel[listing.status]}, ${price}${
    facts ? `, ${facts}` : ""
  }`;

  const body = (
    <>
      <div className="relative overflow-hidden rounded-[3px] bg-sand">
        <Image
          src={listing.image.src}
          alt={listing.image.alt}
          width={1024}
          height={683}
          sizes={sizes}
          className="h-[200px] w-full object-cover transition-transform duration-[250ms] ease-[var(--ease-brand)] group-hover:scale-[1.03] md:h-[270px]"
        />
        <span className="absolute left-3.5 top-3.5">
          <Pill status={listing.status} />
        </span>
      </div>

      <div className="flex flex-col gap-[7px]">
        <h3 className="text-[20px] leading-[1.25] transition-colors duration-150 group-hover:text-clay-dark md:text-[22px]">
          {listing.address}
        </h3>
        <p className="tabular font-[family-name:var(--font-display)] text-[18px] text-clay-dark md:text-[20px]">
          {price}
        </p>
        <p className="text-[13px] text-ink-3 md:text-[14px]">{facts}</p>
      </div>
    </>
  );

  if (!listing.href) {
    return (
      <article className="group flex flex-col gap-4" aria-label={accessibleName}>
        {body}
      </article>
    );
  }

  return (
    <a
      href={listing.href}
      aria-label={accessibleName}
      className="group flex flex-col gap-4 rounded-[3px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brass"
    >
      {body}
    </a>
  );
}
