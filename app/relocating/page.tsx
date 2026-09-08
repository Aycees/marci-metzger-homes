import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { MobileActionBar } from "@/components/layout/MobileActionBar";
import { Button } from "@/components/ui/Button";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Relocating to Pahrump — Marci Metzger | The Ridge Realty Group",
  description:
    "Thinking about relocating to Pahrump, Nevada? This page is coming soon — call Marci for relocation guidance and local expertise.",
};

export default function RelocatingPage() {
  return (
    <>
      <SiteHeader />
      <main
        id="main"
        className="flex min-h-[80vh] flex-col items-center justify-center px-6 pt-32 pb-20 text-center"
      >
        <p className="mb-3 font-[family-name:var(--font-sans)] text-[11px] font-bold uppercase tracking-[0.16em] text-clay-dark">
          Coming soon
        </p>
        <h1 className="font-[family-name:var(--font-display)] text-[clamp(32px,5vw,48px)] leading-[1.1] text-ink">
          Relocating
        </h1>
        <p className="mt-4 max-w-md text-[17px] leading-[1.7] text-ink-2">
          The relocating page is under construction. Only the{" "}
          <Link href="/" className="font-semibold text-clay-dark underline underline-offset-2 hover:text-ink">
            home page
          </Link>{" "}
          has been built as part of this project. Call Marci for relocation
          guidance and local expertise.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href={site.phone.href}>Call {site.phone.display}</Button>
          <Button href="/" variant="ghost">
            Back to home
          </Button>
        </div>
      </main>
      <SiteFooter />
      <MobileActionBar />
    </>
  );
}
