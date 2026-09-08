"use client";

import { useEffect, useState } from "react";
import { site } from "@/content/site";
import { MessageIcon, PhoneIcon, SearchIcon } from "@/components/ui/Icons";

/**
 * F-10 — one thumb-reachable action bar so the primary conversion is never
 * more than a tap away. Appears only once the hero has left the viewport.
 */
export function MobileActionBar() {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero || typeof IntersectionObserver === "undefined") return;

    const io = new IntersectionObserver(
      ([entry]) => setShown(!entry.isIntersecting),
      { threshold: 0 },
    );
    io.observe(hero);
    return () => io.disconnect();
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-line bg-bone/97 px-4 pt-3 pb-[max(12px,env(safe-area-inset-bottom))] shadow-[0_-8px_24px_rgba(28,26,23,0.10)] backdrop-blur transition-transform duration-[250ms] ease-[var(--ease-brand)] lg:hidden ${
        shown ? "translate-y-0" : "translate-y-full"
      }`}
      aria-hidden={!shown}
    >
      <div className="flex gap-2.5">
        <a
          href={site.phone.href}
          tabIndex={shown ? undefined : -1}
          data-analytics="call_click"
          data-location="mobile_bar"
          className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-[var(--radius-btn)] bg-clay text-[15px] font-semibold text-white transition-colors duration-150 hover:bg-clay-dark"
        >
          <PhoneIcon size={15} />
          {site.mobileBar.call}
        </a>
        <a
          href={site.phone.sms}
          tabIndex={shown ? undefined : -1}
          className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-[var(--radius-btn)] border border-ink text-[15px] font-semibold text-ink transition-colors duration-150 hover:bg-ink hover:text-bone"
        >
          <MessageIcon size={15} />
          {site.mobileBar.text}
        </a>
        <a
          href="#search"
          tabIndex={shown ? undefined : -1}
          className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-[var(--radius-btn)] border border-ink text-[15px] font-semibold text-ink transition-colors duration-150 hover:bg-ink hover:text-bone"
        >
          <SearchIcon size={15} />
          {site.mobileBar.search}
        </a>
      </div>
    </div>
  );
}
