import Image from "next/image";
import { site } from "@/content/site";
import { featuredListings, galleryStrip } from "@/content/listings";
import { ListingCard } from "@/components/ui/ListingCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

/**
 * F-15 — the old "Photo Gallery" was seven unlabelled photographs. These are
 * real listings, so they are presented as listings: address, status, price,
 * facts. Rendered on the server so it is crawlable (F-28).
 */
export function FeaturedListings() {
  const { listings } = site;
  const hasListings = featuredListings.length > 0;

  return (
    <section id="listings" aria-labelledby="listings-title" className="py-14 md:py-[104px]">
      <div className="container-page">
        <SectionHeading
          id="listings-title"
          eyebrow={listings.eyebrow}
          title={listings.title}
          action={
            hasListings ? (
              <Button href="/listings" variant="ghost">
                {listings.cta}
              </Button>
            ) : null
          }
        />

        {hasListings ? (
          <Reveal>
            {/* Snap carousel on phones, three-up grid from md. */}
            <div
              tabIndex={0}
              aria-label="Featured listings, scrollable"
              className="snap-x-list -mx-5 overflow-x-auto px-5 md:mx-0 md:overflow-visible md:px-0"
            >
              <ul className="flex gap-3.5 md:grid md:grid-cols-3 md:gap-7">
                {featuredListings.map((l) => (
                  <li key={l.slug} className="w-[290px] shrink-0 md:w-auto">
                    <ListingCard listing={l} />
                  </li>
                ))}
              </ul>
            </div>

            <ul className="mt-7 hidden grid-cols-3 gap-7 md:grid">
              {galleryStrip.map((g) => (
                <li key={g.src}>
                  <Image
                    src={g.src}
                    alt={g.alt}
                    width={1024}
                    height={683}
                    sizes="33vw"
                    className="h-[200px] w-full rounded-[3px] object-cover"
                  />
                </li>
              ))}
            </ul>

            <p className="mt-4 text-[13px] text-ink-3">{listings.note}</p>
          </Reveal>
        ) : (
          <div className="flex flex-col items-start gap-5 border-t border-line pt-8">
            <p className="measure text-[16px] leading-[1.7]">{listings.empty}</p>
            <Button href={site.phone.href} data-analytics="call_click" data-location="listings">
              {site.hero.primaryCta}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
