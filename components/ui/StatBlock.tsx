export function StatBlock({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex items-baseline gap-4 border-b border-line py-[18px] md:flex-col md:items-stretch md:gap-2.5 md:border-b-0 md:border-t-2 md:border-t-brass md:pt-[22px] md:pb-0">
      <div className="tabular w-[110px] shrink-0 font-[family-name:var(--font-display)] text-[40px] leading-none text-ink md:w-auto md:text-[clamp(2.5rem,4vw,3.75rem)]">
        {value}
      </div>
      <p className="text-[14px] leading-[1.5] md:text-[15px]">{label}</p>
    </div>
  );
}
