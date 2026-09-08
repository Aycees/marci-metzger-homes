import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { MobileActionBar } from "@/components/layout/MobileActionBar";
import { Hero } from "@/components/sections/Hero";
import { SearchCard } from "@/components/sections/SearchCard";
import { ProofStats } from "@/components/sections/ProofStats";
import { MeetMarci } from "@/components/sections/MeetMarci";
import { Reviews } from "@/components/sections/Reviews";
import { FeaturedListings } from "@/components/sections/FeaturedListings";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Services } from "@/components/sections/Services";
import { Credentials } from "@/components/sections/Credentials";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <Hero />
        <SearchCard />
        <ProofStats />
        <MeetMarci />
        <Reviews />
        <FeaturedListings />
        <HowItWorks />
        <Services />
        <Credentials />
        <ContactSection />
      </main>
      <SiteFooter />
      <MobileActionBar />
    </>
  );
}
