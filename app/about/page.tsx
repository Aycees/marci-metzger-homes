import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { MobileActionBar } from "@/components/layout/MobileActionBar";
import { Button } from "@/components/ui/Button";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About Marci Metzger — The Ridge Realty Group",
  description:
    "Learn more about Marci Metzger, Pahrump REALTOR with nearly three decades of experience. This page is coming soon.",
};

export default function AboutPage() {
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
          About Marci
        </h1>
        <p className="mt-4 max-w-md text-[17px] leading-[1.7] text-ink-2">
          The about page is under construction. Only the{" "}
          <Link href="/" className="font-semibold text-clay-dark underline underline-offset-2 hover:text-ink">
            home page
          </Link>{" "}
          has been built as part of this project. Visit the home page to learn
          about Marci and get in touch.
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
