import AboutMeSection from "../components/about/AboutMeSection";
import type { Metadata } from "next";
import LandingSection from "../components/landing/LandingSection";

export const metadata: Metadata = {
  title: "Anas Masti",
};

export default function HomePage() {
  return (
    <main>
      <LandingSection />
      <AboutMeSection />
    </main>
  );
}
