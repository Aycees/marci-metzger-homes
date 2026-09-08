import Image from "next/image";
import { site } from "@/content/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Services() {
  const { services } = site;

  return (
    <section aria-labelledby="services-title" className="py-14 md:py-[104px]">
      <div className="container-page">
        <SectionHeading id="services-title" eyebrow={services.eyebrow} title={services.title} />

        <Reveal className="grid grid-cols-1 gap-9 md:grid-cols-3 md:gap-[34px]">
          {services.items.map((item) => (
            <article
              key={item.title}
              className="flex flex-col gap-3.5 border-t border-line pt-6 md:gap-[18px] md:pt-[26px]"
            >
              <Image
                src={item.image}
                alt={item.alt}
                width={1600}
                height={1067}
                sizes="(max-width: 767px) 100vw, 33vw"
                className="h-[190px] w-full rounded-[3px] object-cover md:h-[210px]"
              />
              <h3 className="text-[22px] leading-[1.25] md:text-[24px]">{item.title}</h3>
              <p className="measure text-[15px] leading-[1.7]">{item.body}</p>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
