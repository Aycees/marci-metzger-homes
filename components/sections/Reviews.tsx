import { site } from "@/content/site";
import { ArrowRightIcon, StarIcon } from "@/components/ui/Icons";

/**
 * F-13 — the home page has no social proof today. This section exists, but it
 * renders nothing until real reviews are supplied. No placeholder quotes ship.
 */
export function Reviews() {
  const { reviews } = site;
  if (reviews.items.length === 0) return null;

  return (
    <section aria-labelledby="reviews-title" className="border-b border-line py-14 md:py-[84px]">
      <div className="container-page flex flex-col gap-10 md:flex-row md:items-center md:justify-between md:gap-14">
        <div className="flex max-w-[300px] flex-col gap-3">
          <p className="eyebrow">{reviews.eyebrow}</p>
          <h2 id="reviews-title" className="text-[28px] leading-[1.15] md:text-[32px]">
            {reviews.title}
          </h2>
          <a
            href={site.social.yelp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-[14px] font-semibold text-clay-dark hover:text-clay"
          >
            {reviews.link}
            <ArrowRightIcon size={14} />
          </a>
        </div>

        <ul className="grid flex-1 grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
          {reviews.items.map((r, i) => (
            <li key={i} className="flex flex-col gap-3.5 border-l-2 border-line pl-6">
              <div className="flex gap-[3px] text-brass" aria-label={`${r.rating} out of 5 stars`}>
                {Array.from({ length: r.rating }).map((_, s) => (
                  <StarIcon key={s} />
                ))}
              </div>
              <blockquote className="font-[family-name:var(--font-display)] text-[19px] italic leading-[1.55] text-ink">
                {r.quote}
              </blockquote>
              <figcaption className="text-[13px] text-ink-3">
                {r.author}, {r.location} · {r.date} · {r.source}
              </figcaption>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
