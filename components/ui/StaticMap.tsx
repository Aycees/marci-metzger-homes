"use client";

import { useRef, useState } from "react";
import { site } from "@/content/site";
import { NavigationIcon } from "./Icons";

/**
 * F-27 — the current site loads the Google Maps SDK synchronously on every
 * visit. Here the map is an inert SVG until someone actually asks for it;
 * only then does the iframe mount, and focus moves into it.
 */
export function StaticMap() {
  const [live, setLive] = useState(false);
  const frameRef = useRef<HTMLIFrameElement>(null);

  const embedSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    `${site.address.street}, ${site.address.city}, ${site.address.state} ${site.address.zip}`,
  )}&z=14&output=embed`;

  return (
    <div className="relative h-[236px] overflow-hidden rounded-[3px] border border-line bg-[#EDE6DB]">
      {live ? (
        <iframe
          ref={frameRef}
          title={site.visit.mapAlt}
          src={embedSrc}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-full w-full border-0"
        />
      ) : (
        <button
          type="button"
          onClick={() => {
            setLive(true);
            window.setTimeout(() => frameRef.current?.focus(), 100);
          }}
          className="group block h-full w-full cursor-pointer text-left"
          aria-label="Load the interactive map of the office location"
        >
          <svg
            viewBox="0 0 520 236"
            preserveAspectRatio="xMidYMid slice"
            className="h-full w-full"
            role="img"
            aria-label={site.visit.mapAlt}
          >
            <rect width="520" height="236" fill="#EDE6DB" />
            <path d="M0 62h520M0 150h520M0 200h520" stroke="#DFD4C4" strokeWidth={6} />
            <path d="M110 0v236M300 0v236M430 0v236" stroke="#DFD4C4" strokeWidth={6} />
            <path d="M0 118 520 96" stroke="#D3C6B3" strokeWidth={10} />
            <rect x="318" y="160" width="70" height="34" fill="#E3DACB" />
            <rect x="140" y="14" width="120" height="34" fill="#E3DACB" />
            <circle cx="300" cy="118" r="9" fill="#A9552F" />
            <circle cx="300" cy="118" r="19" fill="none" stroke="#A9552F" strokeWidth={1.5} opacity={0.45} />
          </svg>
          <span className="absolute inset-0 bg-ink/0 transition-colors duration-150 group-hover:bg-ink/5" />
        </button>
      )}

      <a
        href={site.address.directionsUrl}
        target="_blank"
        rel="noreferrer"
        data-analytics="directions_click"
        className="absolute bottom-[18px] left-[18px] inline-flex h-[42px] items-center gap-2 rounded-[var(--radius-btn)] border border-line bg-white px-4 text-[14px] font-semibold text-ink transition-colors duration-150 hover:border-ink"
      >
        <NavigationIcon size={15} className="text-clay" />
        {site.visit.directions}
      </a>
    </div>
  );
}
