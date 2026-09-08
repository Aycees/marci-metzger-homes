import Image from "next/image";
import { site } from "@/content/site";

/**
 * F-04 — one optical height, one ink tone, captioned by accessible name,
 * linked where a destination exists.
 */
export function Credentials() {
  return (
    <section aria-label="Licences and memberships" className="bg-sand py-8 md:py-14">
      <div className="container-page flex flex-col items-center gap-6 md:flex-row md:gap-14">
        <p className="max-w-[190px] text-center text-[12px] font-semibold uppercase leading-[1.5] tracking-[0.14em] text-ink-3 md:text-left md:text-[13px]">
          {site.credentials.label}
        </p>
        <ul className="flex w-full flex-1 items-center justify-between gap-5 md:gap-10">
          {site.credentials.items.map((c) => {
            const img = (
              <Image
                src={c.image}
                alt={c.name}
                width={600}
                height={600}
                className="h-10 w-auto object-contain md:h-[60px]"
              />
            );
            return (
              <li key={c.name} className="flex flex-1 items-center justify-center">
                {c.href ? (
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={c.name}
                    className="block transition-opacity duration-150 hover:opacity-75"
                  >
                    {img}
                  </a>
                ) : (
                  img
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
