import Link from "next/link";
import type { ReactNode } from "react";

const BASE =
  "inline-flex items-center h-9 px-4 rounded-full border text-[13px] font-medium whitespace-nowrap " +
  "transition-colors duration-150 ease-[var(--ease-brand)]";

const REST = "bg-white border-line text-ink-2 hover:border-ink-3";
const SELECTED = "bg-ink border-ink text-white font-semibold";

export function ChipLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className={`${BASE} ${REST}`}>
      {children}
    </Link>
  );
}

export function ChipToggle({
  children,
  selected = false,
  onClick,
  name,
  value,
}: {
  children: ReactNode;
  selected?: boolean;
  onClick?: () => void;
  name?: string;
  value?: string;
}) {
  return (
    <>
      <button
        type="button"
        aria-pressed={selected}
        onClick={onClick}
        className={`${BASE} ${selected ? SELECTED : REST}`}
      >
        {children}
      </button>
      {name && selected ? <input type="hidden" name={name} value={value} /> : null}
    </>
  );
}
