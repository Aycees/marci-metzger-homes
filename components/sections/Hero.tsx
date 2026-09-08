import Image from "next/image";
import { site } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { PhoneIcon } from "@/components/ui/Icons";

export function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative flex min-h-[620px] flex-col justify-end overflow-hidden md:min-h-[812px]"
    >
      <Image
        src="/images/hero-mountain-falls.jpg"
        alt={site.hero.imageAlt}
        fill
        priority
        quality={70}
        sizes="100vw"
        className="object-cover object-[62%_50%] md:object-center"
      />

      {/* Fixed scrim — F-07. Contrast never depends on what is behind the text. */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(28,26,23,0.60)_0%,rgba(28,26,23,0.20)_26%,rgba(28,26,23,0.58)_60%,rgba(28,26,23,0.92)_100%)]"
      />

      <div className="container-page relative pb-10 pt-32 md:pb-[132px] md:pt-40">
        <div className="flex max-w-[760px] flex-col gap-4 md:gap-6">
          <p className="text-[10px] font-semibold uppercase leading-[1.6] tracking-[0.22em] text-[#E9D8C4] md:text-[12px] md:tracking-[0.24em]">
            {site.hero.eyebrow}
          </p>

          <h1
            id="hero-title"
            className="font-[family-name:var(--font-display)] text-[clamp(3.25rem,7.2vw,6.5rem)] font-light leading-[0.96] tracking-[-0.03em] text-white"
          >
            {site.hero.titleTop}
            <br />
            <em className="italic text-sun">{site.hero.titleAccent}</em>
          </h1>

          <p className="max-w-[560px] text-[16px] leading-[1.6] text-[#EFE6DA] md:text-[20px]">
            {site.hero.subhead}
          </p>

          <div className="mt-2 flex flex-col gap-2.5 sm:flex-row sm:gap-3.5 md:mt-3.5">
            <Button
              href={site.phone.href}
              data-analytics="call_click"
              data-location="hero"
              className="w-full sm:w-auto"
            >
              <PhoneIcon size={17} />
              {site.hero.primaryCta}
            </Button>
            <Button href="#search" variant="onDark" className="w-full sm:w-auto">
              {site.hero.secondaryCta}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
