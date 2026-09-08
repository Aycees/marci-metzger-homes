import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  YelpIcon,
} from "@/components/ui/Icons";

const SOCIALS = [
  { key: "facebook", label: "Facebook", Icon: FacebookIcon },
  { key: "instagram", label: "Instagram", Icon: InstagramIcon },
  { key: "linkedin", label: "LinkedIn", Icon: LinkedInIcon },
  { key: "yelp", label: "Yelp", Icon: YelpIcon },
] as const;

export function SocialRow({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <ul className="flex gap-3.5">
      {SOCIALS.map(({ key, label, Icon }) => (
        <li key={key}>
          <a
            href={site.social[key]}
            target="_blank"
            rel="noreferrer"
            aria-label={`Marci Metzger on ${label}`}
            className={`flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-150 ${
              tone === "dark"
                ? "border-white/25 text-[#EFE7DB] hover:border-white/60 hover:bg-white/10"
                : "border-line text-ink-2 hover:border-ink hover:text-ink"
            }`}
          >
            <Icon />
          </a>
        </li>
      ))}
    </ul>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-ink pt-[72px] pb-[calc(40px+92px)] lg:pb-10">
      <div className="container-page">
        <div className="grid grid-cols-1 gap-12 pb-11 md:grid-cols-[4fr_3fr_3fr] md:gap-14">
          <div className="flex flex-col gap-5">
            <Image
              src="/images/logo-light.png"
              alt={site.shortName}
              width={1200}
              height={374}
              className="h-auto w-[190px]"
            />
            <p className="max-w-[300px] text-[14px] leading-[1.7] text-[#A79C8D]">
              {site.footer.blurb}
            </p>
            <p className="text-[13px] text-[#8F8578]">{site.footer.license}</p>
            <div className="mt-1">
              <SocialRow />
            </div>
          </div>

          <nav aria-label="Footer" className="flex flex-col gap-3.5">
            <h2 className="font-[family-name:var(--font-sans)] text-[11px] font-bold uppercase tracking-[0.16em] text-[#8F8578]">
              {site.footer.exploreLabel}
            </h2>
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[15px] text-[#EFE7DB] transition-colors duration-150 hover:text-sun"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3.5">
            <h2 className="font-[family-name:var(--font-sans)] text-[11px] font-bold uppercase tracking-[0.16em] text-[#8F8578]">
              {site.footer.officeLabel}
            </h2>
            <address className="text-[15px] not-italic leading-[1.6] text-[#EFE7DB]">
              {site.address.street}
              <br />
              {site.address.city}, {site.address.stateLong} {site.address.zip}
            </address>
            <a
              href={site.phone.href}
              data-analytics="call_click"
              data-location="footer"
              className="text-[15px] font-semibold text-[#EFE7DB] transition-colors duration-150 hover:text-sun"
            >
              {site.phone.display}
            </a>
            <p className="text-[14px] text-[#A79C8D]">
              {site.hours.label} {site.hours.display}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-5 border-t border-white/15 pt-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <Image
              src="/images/badge-equal-housing-light.png"
              alt="Equal Housing Opportunity"
              width={600}
              height={603}
              className="h-[26px] w-auto opacity-80"
            />
            <p className="text-[13px] text-[#8F8578]">{site.footer.copyright}</p>
          </div>
          <ul className="flex gap-6">
            {site.footer.legal.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-[13px] text-[#8F8578] transition-colors duration-150 hover:text-[#EFE7DB]"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
