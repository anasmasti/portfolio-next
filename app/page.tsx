import AboutMeSection from "../components/about/AboutMeSection";
import type { Metadata } from "next";
import LandingSection from "../components/landing/LandingSection";
import MediumSection from "../components/medium/MediumSection";
import AboutMeLinks from "../components/about/AboutMeLinks";

export const metadata: Metadata = {
  title: "Anas Masti",
};

export default function HomePage() {
  return (
    <main>
      <LandingSection />
      <AboutMeSection />
      <MediumSection />
      <AboutMeLinks />
    </main>
  );
}
