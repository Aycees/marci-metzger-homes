import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  action,
  onDark = false,
  id,
}: {
  eyebrow: string;
  title: ReactNode;
  action?: ReactNode;
  onDark?: boolean;
  id?: string;
}) {
  return (
    <div className="mb-11 flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-10">
      <div className="flex flex-col gap-3.5">
        <p className={onDark ? "eyebrow text-ember" : "eyebrow"}>{eyebrow}</p>
        <h2
          id={id}
          className={`text-[clamp(2.125rem,3.6vw,3.25rem)] leading-[1.1] tracking-[-0.02em] ${
            onDark ? "text-white" : ""
          }`}
        >
          {title}
        </h2>
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
