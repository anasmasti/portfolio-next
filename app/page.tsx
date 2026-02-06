import AboutMeSection from "../components/about/AboutMeSection";
import type { Metadata } from "next";
import LandingSection from "../components/landing/LandingSection";
import MediumSectionClient from "../components/medium/MediumSectionClient";
import AboutMeLinks from "../components/about/AboutMeLinks";

export const metadata: Metadata = {
  title: "Anas Masti",
};

export default function HomePage() {
  return (
    <main>
      <LandingSection />
      <AboutMeSection />
      <MediumSectionClient />
      <AboutMeLinks />
    </main>
  );
}
