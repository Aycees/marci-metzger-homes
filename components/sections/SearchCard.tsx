"use client";

import { useState } from "react";
import { site } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { ChipLink } from "@/components/ui/Chip";
import { SelectField } from "@/components/ui/Field";
import { SearchIcon, SlidersIcon } from "@/components/ui/Icons";

/**
 * F-14 — three fields, Pahrump preselected, everything else behind
 * "More filters". Sort By is gone; it belongs on the results page.
 * Submits as a plain GET so it still works with JS disabled.
 */
export function SearchCard() {
  const [expanded, setExpanded] = useState(false);
  const { search } = site;

  return (
    <section
      id="search"
      aria-labelledby="search-title"
      className="container-page relative z-20 -mt-[26px] md:-mt-[72px]"
    >
      <div className="rounded-[var(--radius-btn)] border border-line bg-bone p-5 shadow-[0_1px_2px_rgba(28,26,23,0.05),0_18px_44px_rgba(28,26,23,0.10)] md:p-[34px_36px_30px]">
        <div className="mb-4 flex flex-col gap-1.5 md:mb-[22px] md:flex-row md:items-end md:justify-between md:gap-6">
          <div className="flex flex-col gap-1.5">
            <p className="eyebrow">{search.eyebrow}</p>
            <h2 id="search-title" className="text-[24px] leading-[1.15] md:text-[30px]">
              {search.title}
            </h2>
          </div>
          <p className="hidden text-[13px] text-ink-3 md:block">{search.note}</p>
        </div>

        <form action="/listings" method="get" data-analytics="search_submit">
          <div className="grid grid-cols-1 items-end gap-4 md:grid-cols-4 md:gap-[18px]">
            <SelectField
              label="Location"
              name="location"
              options={search.locations}
              defaultValue="pahrump"
            />
            <div className="hidden md:block">
              <SelectField label="Property type" name="type" options={search.types} defaultValue="any" />
            </div>
            <div className="hidden md:block">
              <SelectField label="Price range" name="maxPrice" options={search.prices} defaultValue="" />
            </div>
            <Button type="submit" className="w-full">
              <SearchIcon size={16} />
              {search.cta}
            </Button>
          </div>

          {expanded ? (
            <div className="mt-5 grid grid-cols-2 gap-4 border-t border-line pt-5 md:grid-cols-4 md:gap-[18px]">
              <SelectField
                label="Property type"
                name="type-mobile"
                options={search.types}
                defaultValue="any"
              />
              <SelectField
                label="Bedrooms"
                name="beds"
                options={search.beds.map((b) => ({ value: b === "Any" ? "" : b, label: b }))}
              />
              <SelectField
                label="Baths"
                name="baths"
                options={search.baths.map((b) => ({ value: b === "Any" ? "" : b, label: b }))}
              />
              <SelectField label="Max price" name="maxPrice-more" options={search.prices} />
            </div>
          ) : null}

          <div className="mt-5 flex flex-col gap-4 md:mt-6 md:flex-row md:items-center md:justify-between">
            <ul className="-mx-5 flex gap-2.5 overflow-x-auto px-5 md:mx-0 md:flex-wrap md:px-0 snap-x-list">
              {search.quickFilters.map((f) => (
                <li key={f.label}>
                  <ChipLink href={f.href}>{f.label}</ChipLink>
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              aria-expanded={expanded}
              className="inline-flex shrink-0 items-center gap-2 self-start text-[14px] font-semibold text-clay-dark transition-colors duration-150 hover:text-clay"
            >
              {search.moreFilters}
              <SlidersIcon size={14} />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
