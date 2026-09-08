import Image from "next/image";
import { site } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function MeetMarci() {
  const { about } = site;

  return (
    <section id="about" aria-labelledby="about-title" className="bg-sand py-14 md:py-[104px]">
      <div className="container-page">
        <Reveal className="grid grid-cols-1 items-center gap-8 md:grid-cols-[5fr_7fr] md:gap-[72px]">
          <div className="relative">
            <Image
              src="/images/marci-portrait.jpg"
              alt={about.portraitAlt}
              width={1400}
              height={2101}
              sizes="(max-width: 767px) 100vw, 40vw"
              className="h-[340px] w-full rounded-[3px] object-cover object-[50%_20%] md:h-[560px] md:object-[50%_22%]"
            />
            <Image
              src="/images/badge-ridge-realty.png"
              alt=""
              width={600}
              height={600}
              className="absolute -bottom-5 right-3 h-[76px] w-[76px] rounded-full shadow-[0_8px_24px_rgba(28,26,23,0.18)] md:-bottom-[26px] md:-right-[26px] md:h-[104px] md:w-[104px]"
            />
          </div>

          <div className="flex flex-col gap-4 md:gap-[22px]">
            <p className="eyebrow">{about.eyebrow}</p>
            <h2
              id="about-title"
              className="text-[clamp(2.125rem,3.6vw,3.25rem)] leading-[1.1] tracking-[-0.02em]"
            >
              {about.title}
            </h2>
            <div aria-hidden className="h-0.5 w-14 bg-brass" />
            <p className="measure text-[16px] leading-[1.65] md:text-[18px]">{about.lede}</p>
            <p className="measure text-[15px] leading-[1.7] md:text-[16px]">{about.body}</p>

            <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <Button
                href={site.phone.href}
                data-analytics="call_click"
                data-location="about"
                className="w-full sm:w-auto"
              >
                {about.primaryCta}
              </Button>
              <Button href="/about" variant="ghost" className="w-full sm:w-auto">
                {about.secondaryCta}
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
