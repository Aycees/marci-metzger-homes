"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { site } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { CloseIcon, MenuIcon, PhoneIcon } from "@/components/ui/Icons";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-[250ms] ease-[var(--ease-brand)] ${
        solid ? "border-b border-line bg-bone/95 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container-page flex items-center justify-between gap-6 py-4 md:py-[22px]">
        <Link href="/" aria-label={`${site.shortName} — home`} className="shrink-0">
          <Image
            src={solid ? "/images/logo-dark.png" : "/images/logo-light.png"}
            alt={site.shortName}
            width={1200}
            height={374}
            priority
            className="h-auto w-[152px] md:w-[196px]"
          />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-[34px] lg:flex">
          {site.nav.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={i === 0 ? "page" : undefined}
              className={`text-[14px] tracking-[0.06em] transition-colors duration-150 ${
                solid
                  ? i === 0
                    ? "font-semibold text-ink"
                    : "font-medium text-ink-2 hover:text-clay-dark"
                  : i === 0
                    ? "font-semibold text-white"
                    : "font-medium text-white/85 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-[18px] lg:flex">
          <a
            href={site.phone.href}
            data-analytics="call_click"
            data-location="header"
            className={`text-[15px] font-semibold tracking-[0.02em] transition-colors duration-150 ${
              solid ? "text-ink hover:text-clay-dark" : "text-white hover:text-sun"
            }`}
          >
            {site.phone.display}
          </a>
          <Button
            href={site.phone.href}
            size="sm"
            data-analytics="call_click"
            data-location="header"
          >
            Call Marci
          </Button>
        </div>

        <button
          ref={triggerRef}
          type="button"
          onClick={() => setOpen(true)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label="Open menu"
          className={`flex h-11 w-11 items-center justify-center rounded-[3px] border transition-colors duration-150 lg:hidden ${
            solid ? "border-line text-ink" : "border-white/35 text-white"
          }`}
        >
          <MenuIcon size={20} />
        </button>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="fixed inset-0 z-50 flex flex-col bg-bone lg:hidden"
        >
          <div className="container-page flex items-center justify-between py-4">
            <Image
              src="/images/logo-dark.png"
              alt={site.shortName}
              width={1200}
              height={374}
              className="h-auto w-[152px]"
            />
            <button
              ref={closeRef}
              type="button"
              onClick={() => {
                setOpen(false);
                triggerRef.current?.focus();
              }}
              aria-label="Close menu"
              className="flex h-11 w-11 items-center justify-center rounded-[3px] border border-line text-ink"
            >
              <CloseIcon size={20} />
            </button>
          </div>

          <nav aria-label="Primary mobile" className="container-page flex flex-1 flex-col gap-1 pt-6">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-line py-4 font-[family-name:var(--font-display)] text-[24px] text-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="container-page flex flex-col gap-3 pb-[max(24px,env(safe-area-inset-bottom))]">
            <Button href={site.phone.href} data-analytics="call_click" data-location="mobile_menu">
              <PhoneIcon size={16} />
              {site.hero.primaryCta}
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
