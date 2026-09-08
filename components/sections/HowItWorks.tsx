import Image from "next/image";
import { site } from "@/content/site";
import { Reveal } from "@/components/ui/Reveal";

export function HowItWorks() {
  const { howItWorks } = site;

  return (
    <section aria-labelledby="how-title" className="bg-ink py-14 md:py-[112px]">
      <div className="container-page">
        <div className="mb-8 flex max-w-[640px] flex-col gap-3 md:mb-14">
          <p className="eyebrow text-ember">{howItWorks.eyebrow}</p>
          <h2
            id="how-title"
            className="text-[clamp(2.125rem,3.6vw,3.25rem)] leading-[1.1] tracking-[-0.02em] text-white"
          >
            {howItWorks.titleTop}
            <br />
            {howItWorks.titleBottom} <em className="italic text-sun">{howItWorks.titleAccent}</em>.
          </h2>
        </div>

        <Reveal className="grid grid-cols-1 gap-9 md:grid-cols-3 md:gap-[34px]">
          {howItWorks.items.map((item) => (
            <article key={item.title} className="flex flex-col gap-3.5 md:gap-5">
              <Image
                src={item.image}
                alt={item.alt}
                width={1800}
                height={1155}
                sizes="(max-width: 767px) 100vw, 33vw"
                className="h-[190px] w-full rounded-[3px] object-cover md:h-[240px]"
              />
              <h3 className="text-[22px] leading-[1.25] text-white md:text-[25px]">{item.title}</h3>
              <p className="text-[14px] leading-[1.7] text-dune md:text-[15px]">{item.body}</p>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
