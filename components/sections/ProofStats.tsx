import { site } from "@/content/site";
import { StatBlock } from "@/components/ui/StatBlock";
import { Reveal } from "@/components/ui/Reveal";

export function ProofStats() {
  return (
    <section aria-label="Track record" className="py-14 md:py-[88px]">
      <div className="container-page">
        <Reveal className="grid grid-cols-1 md:grid-cols-3 md:gap-14">
          {site.stats.map((s) => (
            <StatBlock key={s.value} value={s.value} label={s.label} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
