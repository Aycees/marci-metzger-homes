import type { ListingStatus } from "@/content/listings";
import { statusLabel } from "@/content/listings";

const TONE: Record<ListingStatus, string> = {
  sold: "bg-sage",
  active: "bg-clay",
  pending: "bg-ink-3",
};

/**
 * Decorative — the status is repeated inside the card link's accessible name,
 * so a screen reader never hears it twice.
 */
export function Pill({ status }: { status: ListingStatus }) {
  return (
    <span
      aria-hidden
      className={`${TONE[status]} inline-flex h-[26px] items-center rounded-full px-3 text-[11px] font-bold uppercase tracking-[0.1em] text-white`}
    >
      {statusLabel[status]}
    </span>
  );
}
